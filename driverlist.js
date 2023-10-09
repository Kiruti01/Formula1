import React, { useEffect, useState } from 'react';
import driverStandingsData from './1driverStandings.json'; // Import local JSON file

const Driverhtmllist = () => {
  const [driverStandings, setDriverStandings] = useState([]);

  useEffect(() => {
    // Extract driver standings data from the imported JSON file
    const extractedDriverStandings = driverStandingsData.MRData.StandingsTable.StandingsLists[0].DriverStandings;
    const sortedDrivers = extractedDriverStandings.sort((a, b) => parseInt(b.points) - parseInt(a.points));
    setDriverStandings(sortedDrivers);
  }, []);

  return (
    <div className="row2">
      {/* ... other components */}
      <div className="cols">
        <div className="card22">
          <div className="card2-header">
            <h4 className="card-title">WC Standings</h4>
            <div className="unpaid-content">
              <ul>
                <li>
                  <p className="mb-0">{new Date().toLocaleDateString()}</p>
                </li>
              </ul>
            </div>
          </div>
          {driverStandings.map((driver, index) => (
            <div className="card2-header" key={index}>
              <h6 className="card-title">
                {driver.Driver.givenName} {driver.Driver.familyName} - {driver.points} points (Position: {driver.position})
              </h6>
            </div>
          ))}
        </div>
      </div>
      {/* ... other components */}
    </div>
  );
};

export default Driverhtmllist;
