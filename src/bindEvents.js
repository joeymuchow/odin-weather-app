import { getWeatherData } from "./api";
import { extractTodaysWeatherData, extractNext7DaysWeatherData } from "./data";
import { renderTodaysWeather } from "./render";

const elementCache = {};

const cacheDom = () => {
    elementCache.searchInput = document.querySelector("#place-search");
    elementCache.errorMessage = document.querySelector(".error");
    elementCache.unitSelect = document.querySelector(".unit-select");
    elementCache.submitBtn = document.querySelector(".search");
    elementCache.todayContainer = document.querySelector(".today");
    elementCache.next7DaysContainer = document.querySelector(".next-7-days");
}

const bindEvents = () => {
    cacheDom();

    elementCache.searchInput.addEventListener("change", clearInputError);
    elementCache.searchInput.addEventListener("keypress", clearInputError);
    elementCache.submitBtn.addEventListener("click", fetchWeather);
}

const clearInputError = () => {
    elementCache.errorMessage.textContent = "";
}

const fetchWeather = async (e) => {
    e.preventDefault();
    const searchIsValid = elementCache.searchInput.checkValidity();
    if (!searchIsValid) {
        elementCache.errorMessage.textContent = "Please enter a location";
    } else {
        const searchTerm = e.target.form[0].value;
        const units = e.target.form[1].value;

        const response = await getWeatherData(searchTerm, units)
            .then((response) => {
                if (!response.ok) {
                    return response;
                }
                return response.json();
            })
            .catch((error) => {
                console.error(`Error fetching data: ${error.message}`);
                elementCache.errorMessage.textContent = "Unexpected error, please try again.";
            });

        // if response has a status, something went wrong, so show error
        if (response.status) {
            elementCache.errorMessage.textContent = response.status === 400 ?
                "Invalid location, please update the location and try again." :
                "Unexpected error, please try again.";
        } else {
            const today = extractTodaysWeatherData(response);
            const forecast = extractNext7DaysWeatherData(response.days);
            console.log(today);
            console.log(forecast);
            // call render functions for today's weather and next 7 days
            renderTodaysWeather(today);
        }
    }
}

export { bindEvents }