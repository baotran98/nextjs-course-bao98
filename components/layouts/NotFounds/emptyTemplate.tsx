import React, { Fragment } from "react";
import { LayoutProps } from "@/models/common";

export interface EmptyTemplateProps {}

export function EmptyTemplate({ children }: LayoutProps) {
  return (
    <Fragment>
      <div>{children}</div>
    </Fragment>
  );
}
