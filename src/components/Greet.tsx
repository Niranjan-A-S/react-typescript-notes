import React, { useState } from "react";

interface Greetings {
  name: string;
  messagesCount?: number;
  loggedIn: boolean;
}

const Greet = (props: Greetings) => {
  const [loggedIn, setLoggedIn] = useState(props.loggedIn);
  const { messagesCount = 0 } = props;
  return (
    <>
      <button onClick={() => setLoggedIn(true)}>Log in</button>
      {loggedIn ? (
        <p>
          Hi {props.name}, You have {messagesCount} unread messages
        </p>
      ) : (
        <p>Welcome Guest</p>
      )}
    </>
  );
};

export default Greet;
