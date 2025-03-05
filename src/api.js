const getWeatherData = async (searchTerm, units) => {
    // This is here because The Odin Project said it is fine just for this project
    // Since it is just a free key, but obviously we don't do this normally
    const key = "M6JUVLDQAACUF5A6SWPKE2GPU";
    const domain = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
    const place = encodeURIComponent(searchTerm);
    const url = `${domain}${place}/next7days?unitGroup=${units}&key=${key}&contentType=json`;
    const response = await fetch(url)
        
    return response;
}

export { getWeatherData }