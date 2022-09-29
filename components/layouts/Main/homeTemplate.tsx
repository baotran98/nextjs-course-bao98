import React, { Fragment } from "react";
import { LayoutProps } from "@/models/index";
import Link from "next/link";

export function HomeTemplate({ children }: LayoutProps) {
  return (
    <Fragment>
      <div className="text-black">
        <h1 className="text-3xl font-bold">Home Template</h1>
        <div className="flex items-center gap-x-5">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
        </div>
        <div>{children}</div>
      </div>
    </Fragment>
  );
}
