const getTodaysWeather = async (searchTerm, units) => {
    try {
        // This is here because The Odin Project said it is fine just for this project
        // Since it is just a free key, but obviously we don't do this normally
        const key = "M6JUVLDQAACUF5A6SWPKE2GPU";
        const domain = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
        const place = encodeURIComponent(searchTerm);
        const url = `${domain}${place}/today?unitGroup=${units}&key=${key}&contentType=json`;
        console.log(url);
        const response = await fetch(url);
        const json = await response.json();
        return json;
    } catch (error) {
        console.error(`Error fetching data: ${error.message}`);
    }
}

// create function to get the next 7 days forecast


export { getTodaysWeather }