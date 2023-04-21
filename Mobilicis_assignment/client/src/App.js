import React, { useState } from 'react';

function App() {
  const [incomeBmwMercedes, setIncomeBmwMercedes] = useState([]);
  const [malePhonePrice, setMalePhonePrice] = useState([]);
  const [lastNameM, setLastNameM] = useState([]);
  const [carBrandEmail, setCarBrandEmail] = useState([]);
  const [topCities, setTopCities] = useState([]);

  const fetchData = async (url, setData) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <button onClick={() => fetchData('http://localhost:5000/income-bmw-mercedes', setIncomeBmwMercedes)}>Case 1</button>
      Fetch Users with income less than $5 and drive BMW or Mercedes
      <table>
        <thead>
            <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Income</th>
            <th>Car</th>
          </tr>
        </thead>
        <tbody>
          
          {incomeBmwMercedes.map((user) => (
            <tr key={user.id}>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
              <td>{user.income}</td>
              <td>{user.car}</td>
            </tr>
          
          ))}
        </tbody>
      </table>

      <button onClick={() => fetchData('http://localhost:5000/male-phone-price', setMalePhonePrice)}>Case 2</button>
      Fetch Male users with phone price greater than $10,000
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone Price</th>
          </tr>
        </thead>
        <tbody>
          {malePhonePrice.map((user) => (
            <tr key={user.id}>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
              <td>{user.phone_price}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={() => fetchData('http://localhost:5000/last-name-M', setLastNameM)}>Case 3</button>
      Fetch Users whose last name starts with "M" and have a quote with length greater than 15 and email includes their last name
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Quote</th>
          </tr>
        </thead>
        <tbody>
          {lastNameM.map((user) => (
            <tr key={user.id}>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
              <td>{user.quote}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={() => fetchData('http://localhost:5000/car-brand-email', setCarBrandEmail)}>Case 4</button>
      Fetch Users who drive BMW,and have email addresses with ".com"
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Car</th>
          </tr>
        </thead>
        <tbody>
          {carBrandEmail.map((user) => (
            <tr key={user.id}>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
              <td>{user.car}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={() => fetchData('http://localhost:5000/top-cities', setTopCities)}>Case 5</button>
      Fetch Users from the top 5 cities with the highest number of users
      <table>
        <thead>
          <tr>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {topCities.map((user) => (
            <tr key={user.id}>
              <td>{user.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
