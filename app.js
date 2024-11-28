// USE LODASH METHODS ONLY

const cities = [
  { cityName: 'New York City', state: 'New York', population: 8336817, party: 'Democrat' },
  { cityName: 'Los Angeles', state: 'California', population: 3979576, party: 'Democrat' },
  { cityName: 'Chicago', state: 'Illinois', population: 2693976, party: 'Democrat' },
  { cityName: 'Houston', state: 'Texas', population: 2320268, party: 'Republican' },
  { cityName: 'Phoenix', state: 'Arizona', population: 1680992, party: 'Republican' },
  { cityName: 'Philadelphia', state: 'Pennsylvania', population: 1584138, party: 'Democrat' },
  { cityName: 'San Antonio', state: 'Texas', population: 1547253, party: 'Republican' },
  { cityName: 'San Diego', state: 'California', population: 1423851, party: 'Democrat' },
  { cityName: 'Dallas', state: 'Texas', population: 1343573, party: 'Republican' },
  { cityName: 'San Jose', state: 'California', population: 1035317, party: 'Democrat' },
  { cityName: 'Austin', state: 'Texas', population: 964254, party: 'Republican' },
  { cityName: 'Jacksonville', state: 'Florida', population: 903889, party: 'Republican' },
  { cityName: 'Fort Worth', state: 'Texas', population: 909585, party: 'Republican' },
  { cityName: 'Columbus', state: 'Ohio', population: 898553, party: 'Republican' },
  { cityName: 'Charlotte', state: 'North Carolina', population: 885708, party: 'Republican' },
  { cityName: 'San Francisco', state: 'California', population: 884363, party: 'Democrat' },
  { cityName: 'Indianapolis', state: 'Indiana', population: 877584, party: 'Republican' },
  { cityName: 'Seattle', state: 'Washington', population: 744955, party: 'Democrat' },
  { cityName: 'Denver', state: 'Colorado', population: 716492, party: 'Republican' },
  { cityName: 'Washington', state: 'D.C.', population: 712816, party: 'Democrat' }
];

// GROUP ARRAY BY STATES
const cityGroups = _.groupBy(cities, "state");
console.log("grouped by state", cityGroups)

// SORT ARRAY ALPHABETICALLY BY CITY NAME
const sortedCities = _.sortBy(cities, "cityName")
console.log("sorted alphabetically", sortedCities)

// SHOW ONLY CITIES OF CALIFORNIA
const californiaCities = _.filter(cities, (city) => city.state === "California");
console.log("cities of California", californiaCities)

// SHOW ONLY CITIES OF TEXAS WITH A POPULATION OF LESS THAN 1 MILLION
const texasCities = _.filter(cities, (cityTex) => cityTex.state === "Texas" && cityTex.population < 1000000);
console.log("less than 1 million popu Texas cities", texasCities)

// ADD ALL THE POPULATION OF CALIFORNIA CITIES
const californiaPopulation = _.chain(cities)
  .filter(arr1 => arr1.state === "California")
  .map("population")
  .sum()
  .value();
console.log("sum of California cities popu", californiaPopulation)

// GROUP BY PARTY AND SHOW ONLY CITIES WITH A POPULATION ABOVE 1 MILLION. SORT CITY NAMES ALPHABETICALLY
const newData = _.chain(cities)
  .groupBy("party")
  .mapValues(partySorted => _.filter(partySorted, obj => obj.population > 1000000))
  .mapValues(partySorted => _.sortBy(partySorted, "cityName"))
  .value();
console.log("alphabetically sorted more than 1 million popu cities grouped by party", newData)

// const popSort = _.filter(cities, obj => obj.population > 1000000)
// const alphaSort = _.sortBy(popSort, "cityName")
// const finalSort = _.groupBy(alphaSort, "party")
// console.log("testing another way", finalSort)


