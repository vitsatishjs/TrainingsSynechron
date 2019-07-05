import { IPoint, Point } from './PointModule.js';
import * as $ from 'jquery';

let point: IPoint = new Point(2, 3);
// console.log(point.getDistance());

// document.getElementById("result").innerHTML =
//     point.getDistance().toString();

$(document).ready(function(){
    $("#result").html(point.getDistance().toString());
});