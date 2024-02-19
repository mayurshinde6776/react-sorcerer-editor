// App.js
import React from 'react';
import Title from './components/Title';
import Button from './components/Button';

import MyEditor from './components/MyEditor';

const App = () => {
  

  return (
    <div>
      <Title />
      <Button  label="Save" />
      <MyEditor/>
    </div>
  );
}

export default App;
