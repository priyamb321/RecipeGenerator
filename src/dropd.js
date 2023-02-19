import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const countries = [
    { id: "1", name: "INDIA" },
    { id: "2", name: "USA" },
  ];
  const states = [
    { id: "1", countryId: "1", name: "Haryana" },
    { id: "2", countryId: "1", name: "Punjab" },
    { id: "3", countryId: "1", name: "West Bengal" },
    { id: "4", countryId: "2", name: "Texas" },
    { id: "5", countryId: "2", name: "California" },
  ];
  const cities = [
    { id: "1", statesId: "1", name: "Ludhiyana" },
    { id: "2", statesId: "1", name: "Faridabad" },
    { id: "3", statesId: "2", name: "Amrtsar" },
    { id: "4", statesId: "2", name: "Jalandhar" },
    { id: "5", statesId: "3", name: "Chittaranjan" },
    { id: "6", statesId: "3", name: "Kolkata" },
    { id: "7", statesId: "4", name: "Houstaon" },
    { id: "9", statesId: "4", name: "Austrin" },
    { id: "10", statesId: "5", name: "Los Angeles" },
    { id: "11", statesId: "5", name: "Son Diago" },
  ];
  const [country, setCountry] = useState([]);
  const [state, setState] = useState([]);
  const [city, setCity] = useState([]);
  useEffect(() => {
    setCountry(countries);
  }, []);
  const handleCountry = (id) => {
    console.log(id, "id");
    const dt = states.filter((x) => x.countryId === id);
    console.log(dt, "dtttt");
    setState(dt);
  };
  const handleState = (id) => {
    const dt = cities.filter((x) => x.statesId === id);
    setCity(dt);
  };
  return (
    <div className="app">
      <select
        id="ddlcountry"
        className="form-control"
        onChange={(e) => handleCountry(e.target.value)}
      >
        <option value="0">Select Country</option>
        {country && country !== undefined
          ? country.map((ctr, index) => {
              return (
                <option key={index} value={ctr.id}>
                  {ctr.name}
                </option>
              );
            })
          : "No Country"}
      </select>
      <br />
      <select
        id="ddlstates"
        className="form-control"
        onChange={(e) => handleState(e.target.value)}
      >
        <option value="0">Select State</option>
        {state && state !== undefined
          ? state.map((ctr, index) => {
              return (
                <option key={index} value={ctr.id}>
                  {ctr.name}
                </option>
              );
            })
          : "No State"}
      </select>
      <br />
      <select id="ddlcity" className="form-control">
        <option value="0">Select City</option>
        {city && city !== undefined
          ? city.map((ctr, index) => {
              return (
                <option key={index} value={ctr.id}>
                  {ctr.name}
                </option>
              );
            })
          : "No City"}
      </select>
    </div>
  );
}

export default App;
