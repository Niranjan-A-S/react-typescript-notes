import React from "react";
import Greet from "./components/Greet";
import Person from "./components/Person";
import Status from "./components/Status";
import Users from "./components/Users";
import Heading from "./components/Heading";
import Oscar from "./components/Oscar";
import Button from "./components/Button";

const App = () => {
  const person = {
    firstName: "Michael",
    lastName: "Jordan",
  };

  const users = [
    {
      fName: "Christiano",
      lName: "Ronaldo",
    },
    {
      fName: "Lionel",
      lName: "Messi",
    },
    {
      fName: "Garath",
      lName: "Bale",
    },
  ];

  return (
    <>
      <Greet name="Jack" messagesCount={+10} loggedIn={false} />
      <Person name={person} />
      <Users users={users} />
      <Status status="loading" />
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicaprio</Heading>
      </Oscar>
      <Greet name="Vishwas" loggedIn={false} />
      <Button
        handleClick={(event, id) => console.log("Event Types", event, id)}
      />
    </>
  );
};

export default App;
