// App.js
import React from 'react';
import Title from './components/Title';
import Button from './components/Button';
import MyEditor from './components/MyEditor';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center mt-5">
        <div className="col">
          <Title />
        </div>
        <div className="col-auto">
          <Button label="Save" />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col">
          <MyEditor />
        </div>
      </div>
    </div>
  );
};

export default App;
