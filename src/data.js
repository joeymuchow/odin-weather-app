const extractTodaysWeatherData = (response) => {
    const data = {};

    data.location = response.resolvedAddress;
    data.conditions = response.currentConditions.conditions;
    data.temperature = response.currentConditions.temp;
    data.feelsLike = response.currentConditions.feelslike;
    data.temperatureHigh = response.days[0].tempmax;
    data.temperatureLow = response.days[0].tempmin;
    data.humidity = response.currentConditions.humidity;
    data.description = response.days[0].description;

    return data;
}

// create function to extract the data from the next 7 days forecast call

export { extractTodaysWeatherData }