"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PointModule_js_1 = require("./PointModule.js");
var $ = require("jquery");
var point = new PointModule_js_1.Point(2, 3);
$(document).ready(function () {
    $("#result").html(point.getDistance().toString());
});
