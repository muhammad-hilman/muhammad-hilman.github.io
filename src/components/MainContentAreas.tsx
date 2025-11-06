import { Fragment } from "react";
import ListGroup from './ListGroups';
import Alert from './Alerts';
import Button from './Buttons';

export default function MainContentArea() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  // Event Handlers
  const handleSelectItem = (item: string) => {
    console.log(item);
  }

  return (
    <>
      <Alert>Hello World</Alert>
      <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem} />
      <Button>Buss!</Button>
    </>
  )
}