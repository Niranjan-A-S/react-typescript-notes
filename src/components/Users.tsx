import React from "react";

interface User {
  fName: string;
  lName: string;
}

interface userProps {
  users: User[];
}

const Users = (props: userProps) => {
  return (
    <ul>
      {props.users.map((user) => {
        return <li key={user.fName}>{user.fName + " " + user.lName}</li>;
      })}
    </ul>
  );
};

export default Users;
