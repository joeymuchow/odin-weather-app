const extractTodaysWeatherData = (response) => {
    const data = {};

    data.location = response.resolvedAddress;
    data.conditions = response.currentConditions.conditions;
    data.temperature = response.currentConditions.temp;
    data.feelsLike = response.currentConditions.feelslike;
    data.tempHigh = response.days[0].tempmax;
    data.tempLow = response.days[0].tempmin;
    data.humidity = response.currentConditions.humidity;
    data.description = response.days[0].description;

    return data;
}

// create function to extract the data from the next 7 days forecast call
const extractNext7DaysWeatherData = (daysArray) => {
    let next7DaysForecast = [];
    for (let i = 1; i < daysArray.length; i++) {
        // daysArray[0] is today and we only want the next 7 days
        // so we are skipping it
        const dayData = {};

        dayData.date = daysArray[i].datetime;
        dayData.tempHigh = daysArray[i].tempmax;
        dayData.tempLow = daysArray[i].tempmin;
        dayData.icon = daysArray[i].icon;

        next7DaysForecast.push(dayData);
    }

    return next7DaysForecast;
}

export { extractTodaysWeatherData, extractNext7DaysWeatherData }