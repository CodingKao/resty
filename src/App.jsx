import React from 'react';

import './App.scss';

import { useState, useEffect } from 'react';

import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';
import axios from 'axios';

const App = () => {

  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log('API data was grabbed');
    async function getData() {
      let response = await axios.get(`https://pokeapi.co/api/v2/${requestParams.url}`);
      setData(response.data.results);
    }
    if (requestParams.url && requestParams.method) {
      getData();
    }

  }, [requestParams]);

  const callApi = (requestParams) => {
    setLoading(true); // gives a loading message
    setTimeout(() => {
      setRequestParams(requestParams);
      setLoading(false);
    }, 500); 
  };

  //passing loading to Results to let it know when to display loading message
  return (
    <>
      <Header />
      <div data-testid='test-method' className='CRUD'>Request Method: {requestParams.method}</div>
      <div data-testid='test-url' className='URL'>URL:{`https://pokeapi.co/api/v2/${requestParams.url}`}</div>
      <Form handleApiCall={callApi} />
      <Results data={data} loading={loading} />
      <Footer />
    </>
  );

};

export default App;
