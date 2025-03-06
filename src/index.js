import "./styles.css";
import { renderPage } from "./render";
import { bindEvents } from "./bindEvents";


renderPage();
bindEvents();

// A lot of this will probably be in separate files

// function to render the weather data on the screen
// this function will call other functions to render specific info
// display text stuff like temperature, rainfall, etc
// show a specific img or gif representing everything?
// renderWeather will call renderTemp, renderRainfall, renderHourly, etc as an example
