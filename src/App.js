import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import dataSource from './dataSource';
import Card from './Card';

function App() {
  // Set the initial state of films and get the method
  //  need to update that state by using hooks.
  // In React a method beginning with 'use' is a hook
  const [countries, setFilms] = useState([]);

  // Use the axios dataSource imported to do an asychronous API call
  const loadCountries = async () => {
    const response = await dataSource.get('/africa');
    // Update the state of the application with the 
    setFilms(response.data);
    console.log('response', response.data);
  };

  // useEffect is a React hook
  // The callback registered will be called after the component is rendered
  // This is where API calls belong.
  // The second parameter [] is a control parameter.  It tells React to call
  // the registered callback whenever a member of the array is modified
  // Without this parameter the callback method will be called without end.
  useEffect(() => {
    loadCountries();
  }, []);

  // Map the films array to a JSX container
  let countryJSX = countries.map((country) => {
    return (<Card country={ country } key={ country.name.offical }> </Card>);
  });

  return <div className='container'>{ countryJSX }</div>;
}

export default App;
