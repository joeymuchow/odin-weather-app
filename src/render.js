import { format } from "date-fns";

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
    const forecastContainer = document.createElement("div");
    forecastContainer.classList.add("forecast-container");

    body.append(title, form, todayContainer, forecastContainer);
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
    searchInput.required = "true";
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
const renderTodaysWeather = (data) => {
    const container = document.querySelector(".today");
    container.replaceChildren();

    const location = document.createElement("p");
    location.classList.add("location");
    location.textContent = data.location;

    const mainData = document.createElement("div");
    mainData.classList.add("main");

    const temp = document.createElement("p");
    temp.classList.add("temperature");
    temp.textContent = data.temperature + "\u00B0";

    const conditions = document.createElement("p");
    conditions.classList.add("conditions");
    conditions.textContent = data.conditions;

    const weatherIcon = renderWeatherIcon(data.icon);

    mainData.append(temp, conditions, weatherIcon);

    const otherTemps = document.createElement("div");
    otherTemps.classList.add("other-temps");
    const highLow = document.createElement("p");
    highLow.textContent = `${data.tempHigh}\u00B0 / ${data.tempLow}\u00B0`;
    const feelsLike = document.createElement("p");
    feelsLike.textContent = `Feels like ${data.feelsLike}\u00B0`;
    otherTemps.append(highLow, feelsLike);

    const humidity = document.createElement("p");
    humidity.classList.add("humidity");
    humidity.textContent = `Humidity: ${data.humidity}%`;

    const description = document.createElement("p");
    description.classList.add("description");
    description.textContent = data.description;

    const secondaryData = document.createElement("div");
    secondaryData.classList.add("secondary");
    secondaryData.append(otherTemps, humidity, description);

    container.append(location, mainData, secondaryData);
}

// render 7 day forecast
const renderForecast = (daysData) => {
    const container = document.querySelector(".forecast-container");
    container.replaceChildren();

    const forecast = document.createElement("div");
    forecast.classList.add("forecast");
    forecast.classList.add("show");

    const title = document.createElement("h2");
    title.textContent = "7 Day Forecast";

    for(const day of daysData) {
        const dayContainer = document.createElement("div");
        dayContainer.classList.add("day");

        const date = new Date(day.date);
        const dayName = document.createElement("p");
        dayName.textContent = format(date, "E");

        const weatherIcon = renderWeatherIcon(day.icon);

        const temps = document.createElement("div");
        const high = document.createElement("p");
        high.classList.add("high-temp");
        high.textContent = day.tempHigh + "\u00B0";
        const low = document.createElement("p");
        low.classList.add("low-temp");
        low.textContent = day.tempLow + "\u00B0";
        temps.append(high, low);

        dayContainer.append(dayName, weatherIcon, temps);
        forecast.append(dayContainer);
    }

    container.append(title, forecast);
}

const renderWeatherIcon = (iconText) => {
    if (iconText === "fog") {
        iconText = "cloudy";
    }
    const image = document.createElement("img");
    image.classList.add("weather-icon");
    const iconPath = require(`./icons/${iconText}.png`);
    image.src = iconPath;
    return image;
}

export { renderPage, renderTodaysWeather, renderForecast }