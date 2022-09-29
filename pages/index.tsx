import { HomeTemplate } from "@/components/layouts";
import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment } from "react";
import { NextPageWithLayout } from "../models";

const Home: NextPageWithLayout = () => {
  const router = useRouter();

  const handlePush = () => {
    router.push({
      pathname: "/posts/[postId]",
      query: {
        postId: "post01",
        ref: "social",
      },
    });
  };

  return (
    <Fragment>
      <div className="">
        <h1 className="font-bold">Home</h1>
      </div>
    </Fragment>
  );
};

Home.Layout = HomeTemplate;

export default Home;
