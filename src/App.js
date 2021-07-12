import React, { useState, useCallback } from 'react';

import Button from './components/UI/Button/Button';
import DemoOutput from './components/demo/DemoOutput';


import './App.css';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  console.log('App running!');

  const showParagraphHandler = useCallback(() => {
    setShowParagraph((prevShow) => !prevShow);
  }, []);

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={false} />
      <Button onClick={showParagraphHandler}>Toggle Paragraph</Button>
    </div>
  );
}

export default App;
