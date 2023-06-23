import React from 'react';
import { useState } from 'react';
import './Form.scss';


function Form(props) {

  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('GET');
  const [data, setData] = useState('');

  const handleClick = (e) => {
    setMethod(e.target.id);
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      method,
      url,
      data,
    };
    props.handleApiCall(formData);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label >
          <span>URL: </span>
          <input data-testid='test-url-input' name='url' type='text' onChange={(event) => setUrl(event.target.value)} />
          <button data-testid='test-button' type="submit">GO!</button>
        </label>
        <label className="methods">
          <span id="get" data-testid='test-get' onClick={handleClick} style={{ backgroundColor: method === 'get' ? 'green' : 'grey' }}>GET</span>
          <span id="post" data-testid='test-post' onClick={handleClick} style={{ backgroundColor: method === 'post' ? 'orange' : 'grey' }}>POST</span>
          <span id="put" data-testid='test-put' onClick={handleClick} style={{ backgroundColor: method === 'put' ? 'teal' : 'grey' }}>PUT</span>
          <span id="delete" data-testid='test-delete' onClick={handleClick} style={{ backgroundColor: method === 'delete' ? 'red' : 'grey' }}>DELETE</span>
        </label>
        {method === 'post' && <textarea onChange={(event) => setData(event.target.value)} />}
        {method === 'put' && <textarea onChange={(event) => setData(event.target.value)} />}
      </form>
    </>
  );

}

export default Form;