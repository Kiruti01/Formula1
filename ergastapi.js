const axios = require('axios');
const fs = require('fs');

async function fetchData() {
  try {
    const response = await axios.get('http://ergast.com/api/f1/2023/5/driverStandings.json');
    const driverStandingsData = response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
    const sortedDrivers = driverStandingsData.sort((a, b) => parseInt(b.points) - parseInt(a.points));

    // Save the data in JSON format
    const jsonData = JSON.stringify(sortedDrivers, null, 2); // The third argument (2) specifies the number of spaces for indentation
    fs.writeFileSync('1driverStandings.json', jsonData);

    console.log('Data saved successfully in driverStandings.json');
  } catch (error) {
    console.error('Error fetching data from Ergast API:', error);
  }
}

fetchData();