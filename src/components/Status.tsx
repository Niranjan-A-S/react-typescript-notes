import React from "react";

interface StatusProps {
  status: "loading" | "success" | "error";
}
const Status = (props: StatusProps) => {
  let message;
  switch (props.status) {
    case "loading":
      message = "Loading...";
      break;
    case "success":
      message = "Data fetched successfully.";
      break;
    case "error":
      message = "Error fetching data";
      break;
  }
  return (
    <>
      <p>Status: {message}</p>
    </>
  );
};

export default Status;
