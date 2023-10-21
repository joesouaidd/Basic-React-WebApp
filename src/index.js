import React from 'react';
import ReactDOM from 'react-dom/client';
// import AppClass from './AppClass';
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <App msg ="State using functional component" />
          {/* <AppClass msg="State using classes!"/> */}

        </div>
      </div>
    </div>

  </React.StrictMode>
);

