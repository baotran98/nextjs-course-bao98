import React, { Fragment } from "react";
import { LayoutProps } from "@/models/common";
import Link from "next/link";

export interface AdminTemplateProps {}

export function AdminTemplate({ children }: LayoutProps) {
  return (
    <Fragment>
      <div className="">
        <h1>Admin Template</h1>
        <div className="">Sidebar</div>
        <Link href="">
          <a>Home</a>
        </Link>
        <Link href="">
          <a>About</a>
        </Link>
        <div>{children}</div>
      </div>
    </Fragment>
  );
}
