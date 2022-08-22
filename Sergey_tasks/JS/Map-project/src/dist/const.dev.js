"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.func = func;
exports.labelElevGain = exports.labelCadence = exports.button = exports.inputElevation = exports.inputCadence = exports.inputDuration = exports.inputDistance = exports.inputType = exports.hidden = exports.form = exports.borderCycling = exports.borderRunning = exports.li = exports.containerWorkouts = exports.today = void 0;
var today = new Date();
exports.today = today;
var containerWorkouts = document.querySelector('.workouts');
exports.containerWorkouts = containerWorkouts;
var li = document.querySelector(".sidebar");
exports.li = li;
var borderRunning = document.querySelector(".workout--running");
exports.borderRunning = borderRunning;
var borderCycling = document.querySelector(".workout--cycling");
exports.borderCycling = borderCycling;
var form = document.querySelector('.form');
exports.form = form;
var hidden = document.querySelector('.hidden');
exports.hidden = hidden;
var inputType = document.querySelector('.form__input--type');
exports.inputType = inputType;
var inputDistance = document.querySelector('.form__input--distance');
exports.inputDistance = inputDistance;
var inputDuration = document.querySelector('.form__input--duration');
exports.inputDuration = inputDuration;
var inputCadence = document.querySelector('.form__input--cadence');
exports.inputCadence = inputCadence;
var inputElevation = document.querySelector('.form__input--elevation');
exports.inputElevation = inputElevation;
var button = document.querySelector(".form__btn");
exports.button = button;
var labelCadence = document.querySelector(".form__label--cadence");
exports.labelCadence = labelCadence;
var labelElevGain = document.querySelector(".form__label--elevGain");
exports.labelElevGain = labelElevGain;

function func() {}