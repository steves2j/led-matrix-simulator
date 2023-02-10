import { Component } from 'preact';
import { IMatrix } from 'matrix-display-store';
import { LedMatrix, ILedMatrixOptions } from 'led-matrix';
interface State {
    data?: IMatrix;
    options?: ILedMatrixOptions;
}
interface Props extends ILedMatrixOptions, preact.ComponentProps {
    data: IMatrix;
}
declare class Simulator extends Component<Props, State> {
    canvas: HTMLCanvasElement;
    led: LedMatrix;
    constructor(props: Props);
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: Props): void;
    draw(): void;
    render(): JSX.Element;
}
export default Simulator;
