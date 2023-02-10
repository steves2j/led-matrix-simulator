import { Component } from 'preact';
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
declare class Playground extends Component<any, State> {
    constructor();
    componentWillMount(): void;
    print(text: Array<any>): void;
    draw(): void;
    slideChange(e: any, prop: string): void;
    propChange(e: any, prop: string): void;
    propToggle(e: any, prop: string): void;
    render(_: any, { rows, cols, text, color, fonts, font, animated, data, glow }: State): JSX.Element;
}
export default Playground;
