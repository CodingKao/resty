import React from 'react';
import axios from 'axios';

import { useState, useEffect, useReducer } from 'react';

import Header from './Components/Header';
import History from './Components/History';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';

export const initialState = {
  data: null,
  loading: false,
  history: [],
};

export const requestReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'START':
    return {
      ...state,
      data: action.payload, //data was here but form doesn't send info back
    };
  case 'LOADING HANDLER':
    return {
      ...state,
      loading: action.payload,
    };
  case 'HISTORY':
    return {
      ...state,
      history: [...state.history, action.payload],
    };
  default:
    return state;
  }
};


const App = () => {

  const [state, dispatch] = useReducer(requestReducer, initialState);
  const [requestParams, setRequestParams] = useState({});

  // const handleHistoryClick = (event) => {
  //   setResults(event[0].results);
  // };

  useEffect(() => {
    try {
      dispatch({ type: 'LOADING HANDLER', payload: true });
  
      const getData = async () => { // Convert the function declaration to a function expression
        if (requestParams.method === 'get') {
          let response = await axios.get(requestParams.url);
          dispatch({ type: 'START', payload: response.data });
          let historyData = [requestParams, response.data];
  
          dispatch({ type: 'HISTORY', payload: historyData });
        }
      };
  
      if (requestParams.method && requestParams.url) {
        getData();
      }
      dispatch({ type: 'LOADING HANDLER', payload: false });
    } catch (error) {
      dispatch({ type: 'START', payload: 'NO DATA AVAILABLE' });
      dispatch({ type: 'LOADING HANDLER', payload: false });
    }
  }, [requestParams]);


  const callApi = (requestParams) => {
    setRequestParams(requestParams);
  };

  return (
    <>
      <Header />
      <div data-testid='test-method' className='CRUD'>Request Method: {requestParams.method}</div>
      <div data-testid='test-url' className='URL'>URL:{requestParams.url}</div>
      <History history={state.history} />
      <Form handleApiCall={callApi} />
      <Results data={state.data} loading={state.loading} />
      <Footer />
    </>
  );

};

export default App;
