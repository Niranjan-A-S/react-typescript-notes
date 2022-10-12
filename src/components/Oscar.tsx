import React, { ReactNode } from "react";

interface OscarProps {
  children: ReactNode;
}

const Oscar = (props: OscarProps) => {
  return <>{props.children}</>;
};

export default Oscar;
