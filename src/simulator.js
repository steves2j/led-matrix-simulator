"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var preact_1 = require("preact");
var led_matrix_1 = require("led-matrix");
var Simulator = (function (_super) {
    __extends(Simulator, _super);
    function Simulator(props) {
        var _this = _super.call(this, props) || this;
        var data = props.data, children = props.children, options = __rest(props, ["data", "children"]);
        _this.state = {
            data: data,
            options: options
        };
        return _this;
    }
    Simulator.prototype.componentDidMount = function () {
        this.led = new led_matrix_1.LedMatrix(this.canvas, this.state.options);
        this.led.setData(this.state.data);
        this.draw();
    };
    Simulator.prototype.componentWillReceiveProps = function (nextProps) {
        var data = nextProps.data, children = nextProps.children, options = __rest(nextProps, ["data", "children"]);
        if (options !== this.state.options) {
            this.led.setNewOptions(options);
            this.setState({ options: options });
        }
        if (data !== this.state.data) {
            this.led.setData(data);
            this.setState({ data: data });
        }
        this.draw();
    };
    Simulator.prototype.draw = function () {
        this.led.render();
    };
    Simulator.prototype.render = function () {
        var _this = this;
        return ((0, preact_1.h)("canvas", { ref: function (canvas) { return _this.canvas = canvas; } }));
    };
    return Simulator;
}(preact_1.Component));
exports.default = Simulator;
//# sourceMappingURL=simulator.js.map