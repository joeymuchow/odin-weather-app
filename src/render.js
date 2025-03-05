import { getWeatherData } from "./api";
import { extractTodaysWeatherData, extractNext7DaysWeatherData } from "./data";

const renderPage = () => {
    const body = document.querySelector("body");

    const title = document.createElement("h1");
    title.textContent = "Weather App";

    // render form for setting search terms and other settings
    const form = renderForm();

    // container for today's weather
    const todayContainer = document.createElement("div");
    todayContainer.classList.add("today");

    // container for 7 day forecast
    const next7DaysContainer = document.createElement("div");
    next7DaysContainer.classList.add("next-7-days");

    body.append(title, form, todayContainer, next7DaysContainer);
}

// render place form
const renderForm = () => {
    const form = document.createElement("form");
    form.id = "place-form";


    return form;
}

// render today's weather

// render 7 day forecast

export { renderPage }