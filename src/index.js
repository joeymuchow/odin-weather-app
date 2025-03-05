import "./styles.css";
import { renderPage } from "./render";
import { bindEvents } from "./bindEvents";


renderPage();
bindEvents();
// const response = await getWeatherData("hillsboro", "us");
// const todaysWeather = extractTodaysWeatherData(response);
// const next7DaysWeather = extractNext7DaysWeatherData(response.days);
// console.log(todaysWeather);
// console.log(next7DaysWeather);


// A lot of this will probably be in separate files

// function to handle errors from Visual Crossing API

// function to render the initial content of the page
// title, label, input, error message field, and button(form?)

// function to render the weather data on the screen
// this function will call other functions to render specific info
// display text stuff like temperature, rainfall, etc
// show a specific img or gif representing everything?
// renderWeather will call renderTemp, renderRainfall, renderHourly, etc as an example

// function to get img or gif about weather
// (possibly use GIPHY api here, or just have a set of local images to show)

// function to render weather images/gifs

// the input will work as just being the search term we send Visual Crossing
// label will say to use a partial address, address, or latitude, longitude coordinates

// function to display error message to user in case of error with API call