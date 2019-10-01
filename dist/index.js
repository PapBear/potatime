"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var potatoes = [];
var Potato = /** @class */ (function () {
    function Potato(name) {
        this._remaining = 0;
        if (potatoes.map(function (p) { return p.name; }).indexOf(name) > -1) {
            throw new Error("You already have potato with name : " + name);
        }
        this.name = name;
        this.active = false;
        this.interval = null;
        this.duration = null;
        potatoes.push(this);
    }
    Potato.prototype.clear = function () {
        if (this.interval) {
            clearInterval(this.interval);
        }
        this.active = false;
    };
    Potato.prototype.start = function (options) {
        var _this = this;
        if (!options.duration)
            throw new Error('options.duration are required');
        if (!options.callback)
            throw new Error('options.callback are required');
        this.clear();
        this.duration = options.duration;
        this._remaining = this.duration;
        this.interval = setInterval(function () {
            if (_this.active)
                _this._remaining--;
            if (_this._remaining <= 0) {
                _this.clear();
                return;
            }
            options.callback(_this._remaining);
        }, 1000);
        this.active = true;
    };
    Potato.prototype.goodbye = function () {
        var _this = this;
        potatoes = potatoes.filter(function (p) {
            if (p.name !== _this.name) {
                return true;
            }
            else {
                return false;
            }
        });
    };
    Potato.findPotato = function (name) {
        return potatoes.find(function (p) {
            if (p.name === name) {
                return true;
            }
            else {
                return false;
            }
        });
    };
    return Potato;
}());
exports.Potato = Potato;
