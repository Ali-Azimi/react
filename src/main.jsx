import React from 'react';
import ReactDOM from 'react-dom/client';
import UnitConvertor from './components/UnitConvertor/index.jsx';
import InputMask from './components/InputMask/index.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UnitConvertor />
    <InputMask />
  </React.StrictMode>,
);
