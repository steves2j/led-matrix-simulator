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
Object.defineProperty(exports, "__esModule", { value: true });
var preact_1 = require("preact");
var simulator_1 = require("./simulator");
var matrix_display_store_1 = require("matrix-display-store");
var fonts = require("./fonts");
var Playground = (function (_super) {
    __extends(Playground, _super);
    function Playground() {
        var _this = _super.call(this) || this;
        _this.state = {
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
        window["matrix"] = _this;
        return _this;
    }
    Playground.prototype.componentWillMount = function () {
        this.draw();
    };
    Playground.prototype.print = function (text) {
        var _this = this;
        var store = (0, matrix_display_store_1.createStore)(this.state.cols, this.state.rows);
        var first = true;
        text.forEach(function (row) {
            _this.state.color = "#ffffff";
            _this.state.size = "normal";
            _this.state.font = "TomThumb";
            if (row.attributes) {
                if (row.attributes.color) {
                    _this.state.color = row.attributes.color;
                }
                else {
                    _this.state.color = "#ffffff";
                }
                if (row.attributes.size) {
                    _this.state.size = row.attributes.size;
                }
                if (row.attributes.font) {
                    if (fonts[row.attributes.font]) {
                        _this.state.font = row.attributes.font;
                    }
                    else {
                        _this.state.font = "TomThumb";
                    }
                }
            }
            _this.state.sizenum = 2;
            if (_this.state.size === "small")
                _this.state.sizenum = 1;
            if (_this.state.size === "normal")
                _this.state.sizenum = 2;
            if (_this.state.size === "large")
                _this.state.sizenum = 3;
            if (_this.state.size === "huge")
                _this.state.sizenum = 4;
            if (first) {
                console.log(fonts);
                store.write(1, 1, row.insert, fonts[_this.state.font], _this.state.sizenum, matrix_display_store_1.Color.hex(_this.state.color));
                first = false;
            }
            else {
                store.writech(row.insert, fonts[_this.state.font], _this.state.sizenum, matrix_display_store_1.Color.hex(_this.state.color));
            }
        });
        this.setState({ data: store.matrix });
    };
    Playground.prototype.draw = function () {
        var text = this.state.text.replace(/[^\x00-\x7F]/g, '');
        var store = (0, matrix_display_store_1.createStore)(this.state.cols, this.state.rows);
        store.write(0, 0, text, fonts[this.state.font], 0, matrix_display_store_1.Color.hex(this.state.color));
        this.setState({ data: store.matrix });
    };
    Playground.prototype.slideChange = function (e, prop) {
        var _a;
        this.setState((_a = {},
            _a[prop] = parseInt(e.target.value),
            _a));
        this.draw();
    };
    Playground.prototype.propChange = function (e, prop) {
        var _a;
        this.setState((_a = {},
            _a[prop] = e.target.value,
            _a));
        this.draw();
    };
    Playground.prototype.propToggle = function (e, prop) {
        var _a;
        this.setState((_a = {},
            _a[prop] = !this.state[prop],
            _a));
        this.draw();
    };
    Playground.prototype.render = function (_, _a) {
        var rows = _a.rows, cols = _a.cols, text = _a.text, color = _a.color, fonts = _a.fonts, font = _a.font, animated = _a.animated, data = _a.data, glow = _a.glow;
        return ((0, preact_1.h)("div", { className: "row" },
            (0, preact_1.h)("div", { className: "column column-60" },
                (0, preact_1.h)("div", { class: "led" },
                    (0, preact_1.h)(simulator_1.default, { data: data, x: cols, y: rows, pixelHeight: 1, pixelWidth: 1, animated: animated, glow: glow })))));
    };
    return Playground;
}(preact_1.Component));
exports.default = Playground;
//# sourceMappingURL=playground.js.map