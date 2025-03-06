

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
    const icon = document.createElement("p");
    icon.classList.add("icon");
    icon.textContent = data.icon;

    mainData.append(temp, conditions, weatherIcon);

    const otherTemps = document.createElement("p");
    otherTemps.classList.add("other-temps");
    otherTemps.textContent = `${data.tempHigh}\u00B0 / ${data.tempLow}\u00B0 Feels like ${data.feelsLike}\u00B0`;

    const humidity = document.createElement("p");
    humidity.classList.add("humidity");
    humidity.textContent = `Humidity: ${data.humidity}%`;

    const description = document.createElement("p");
    description.classList.add("description");
    description.textContent = data.description;

    const secondaryData = document.createElement("div");
    secondaryData.classList.add("secondary");
    secondaryData.append(otherTemps, humidity, description);

    container.append(location, mainData, icon, secondaryData);
}

// render 7 day forecast

const renderWeatherIcon = (iconText) => {
    const image = document.createElement("img");
    image.classList.add("weather-icon");
    const iconPath = require(`./icons/${iconText}.png`);
    image.src = iconPath;
    return image;
}

export { renderPage, renderTodaysWeather }