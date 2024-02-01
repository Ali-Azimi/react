import React, { useState } from 'react';
import Input from './_components/Input';
import Select from './_components/Select';
import './index.css';
import { units } from './units';

function UnitConvertor() {
  const [result, setResult] = useState(0);

  return (
    <>
      <div className="main-container">
        <div className="form-container">
          <div className="form-body">
            <div className="converter-form">
              {/* Input with label "Amount" here */}
              <Input label="Amount" />
              <div className="row">
                {/* Selects with labels "From" and "To" here */}
                <Select label="From" items={units} />
                <Select label="To" items={units} />
                <button>Convert</button>
              </div>
            </div>

            <div id="result">
              Result is: <span>{result}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UnitConvertor;
