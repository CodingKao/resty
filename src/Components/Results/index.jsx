import React from 'react';
import './Results.scss';

import JSONPretty from 'react-json-pretty';
let JSONPrettyMon = require('react-json-pretty/dist/adventure_time');

function Results(props) {

  return (
    <section>
      {
        props.loading
          ? <div >LOADING....</div>
          : <pre data-testid="test-results">{props.data ? <JSONPretty id="json-pretty" theme={JSONPrettyMon} data={props.data} /> : null}</pre>
      }
    </section>
  );

}


export default Results;