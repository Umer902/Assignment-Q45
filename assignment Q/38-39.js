"use strict";
// 38. Cities
function describe_city(city, country = "default country") {
    console.log(`${city} is in ${country}`);
}
// Call the function for three different cities
describe_city("Karachi", "Pakistan");
describe_city("Istambol", "Turkey");
describe_city("Delhi"); // This will use the default country value
//  39. City Name
function city_country(city, country = "default country") {
    console.log(`${city},${country}`);
}
city_country("Lahore", "Pakistan");
city_country("Istambol", "Turkey");
city_country("Delhi", "India");
