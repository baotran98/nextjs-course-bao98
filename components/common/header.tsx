import React, { Fragment } from "react";

export interface HeaderProps {}

export default function Header(props: HeaderProps) {
  console.log("Render Header at Client");
  return (
    <Fragment>
      <div>Header</div>
    </Fragment>
  );
}
