import React from "react";

interface User {
  name: {
    firstName: string;
    lastName: string;
  };
}

const Person = (props: User) => {
  return (
    <>
      {props.name.firstName} {props.name.lastName}
    </>
  );
};

export default Person;
