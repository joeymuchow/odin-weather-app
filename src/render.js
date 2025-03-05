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

    const searchLabel = document.createElement("label");
    searchLabel.textContent = "Address, partial address, or lat,long coordinates";
    searchLabel.setAttribute("for", "place-search");
    const searchInput = document.createElement("input");
    searchInput.id = "place-search";
    const errorMessage = document.createElement("p");
    errorMessage.classList.add("error");

    const selectContainer = document.createElement("div");
    selectContainer.classList.add("select-container");
    const unitSelect = document.createElement("select");
    const usOption = document.createElement("option");
    usOption.text = "US";
    usOption.value = "us";
    const metricOption = document.createElement("option");
    metricOption.text = "Metric";
    metricOption.value = "metric";
    unitSelect.append(usOption, metricOption);
    selectContainer.append(unitSelect);

    const btnContainer = document.createElement("div");
    btnContainer.classList.add("btn-container");
    const submitBtn = document.createElement("button");
    submitBtn.classList.add("search");
    submitBtn.textContent = "Search";
    btnContainer.append(submitBtn);

    form.append(searchLabel, searchInput, errorMessage, selectContainer, btnContainer);

    return form;
}

// render today's weather

// render 7 day forecast

export { renderPage }