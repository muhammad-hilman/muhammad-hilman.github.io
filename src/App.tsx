import React from 'react';
import Message from './components/Messages';
import ListGroup from './components/ListGroups';
import Alert from './components/Alerts';
import Button from './components/Buttons';
/*
import logo from './logo.svg';
import './App.css';
*/

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  // Event Handlers
  const handleSelectItem = (item: string) => {
    console.log(item);
  }

  return (
    <div>
      <Alert>Hello World</Alert>
      <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem} />
      <Button>Buss!</Button>
    </div>
  );
}

export default App;