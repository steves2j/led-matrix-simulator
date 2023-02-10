import { h, Component, render } from 'preact';
import Simulator from './simulator';
import { createStore, Color } from 'matrix-display-store';
import * as fonts from './fonts';

interface State {
  cols?: number;
  rows?: number;
  text?: string;
  color?: string;
  fonts?: string[];
  font?: string;
  size?: string;
  sizenum?: number;
  animated?: boolean;
  glow?: boolean;
  data?: any;
  [index: string]: any;
}

class Playground extends Component<any, State> {
  
  constructor() {
    super();
    this.state = {
      cols: 128,
      rows: 32,
      text: '',
      color: '#ffffff',
      fonts: Object.keys(fonts),
      font: 'TomThumb',
      size: 'normal',
      sizenum: 2,
      animated: false,
      glow: true
    };
    (window as any)["matrix"]=this;
  }

  componentWillMount() {
    this.draw();
  }

  print(text: Array<any>){
   const store = createStore(this.state.cols, this.state.rows);
    let first=true;
    text.forEach((row)=>{
      this.state.color="#ffffff";
      this.state.size="normal";
      this.state.font="TomThumb";
      if (row.attributes) {
        if (row.attributes.color) {
          this.state.color=row.attributes.color;
        } else {
          this.state.color="#ffffff";
        }
        if (row.attributes.size){
          this.state.size=row.attributes.size;
        }
        if (row.attributes.font){
          if ((fonts as any)[row.attributes.font]){
            this.state.font=row.attributes.font;
          } else {
            this.state.font="TomThumb";
          }
        }
      } 
      this.state.sizenum=2;
      if (this.state.size==="small") this.state.sizenum=1;
      if (this.state.size==="normal") this.state.sizenum=2;
      if (this.state.size==="large") this.state.sizenum=3;
      if (this.state.size==="huge") this.state.sizenum=4;

      if (first) {
        console.log(fonts);
        store.write(1,1,row.insert, (fonts as any)[this.state.font],this.state.sizenum,Color.hex(this.state.color));
        first=false;
      } else {
        store.writech(row.insert, (fonts as any)[this.state.font],this.state.sizenum, Color.hex(this.state.color));
      }
    });
    this.setState({data: store.matrix});
  }

  draw() {
    // keep ascii codes 0 - 127 
    const text = this.state.text.replace(/[^\x00-\x7F]/g, '');
    const store = createStore(this.state.cols, this.state.rows);
    store.write(0,0,text, (fonts as any)[this.state.font],0, Color.hex(this.state.color));
    this.setState({data: store.matrix});
  }

  slideChange(e: any, prop: string) {
    this.setState({
      [prop]: parseInt(e.target.value)
    });
    this.draw();
  }

  propChange(e: any, prop: string) {
    this.setState({
      [prop]: e.target.value
    });
    this.draw();
  }

  propToggle(e: any, prop:string) {
    this.setState({
      [prop]: !this.state[prop]
    });
    this.draw();
  }

  render(_: any, { rows, cols, text, color, fonts, font, animated, data, glow }: State) {
    return (
      <div className="row">
        <div className="column column-60">
          <div class="led">
            <Simulator
              data={data}
              x={cols}
              y={rows}
              pixelHeight={1}
              pixelWidth={1}
              animated={animated}
              glow={glow}
              />
          </div>
        </div>
      </div>
    );
  }

}

export default Playground;
