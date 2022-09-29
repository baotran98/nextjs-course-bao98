import React, { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { HomeTemplate } from "@/components/layouts";

// sử dụng dynamic để ko cho render component ở phía server chỉ render ở phía client
const Header = dynamic(() => import("@/components/common/header"), {
  ssr: false,
});

export interface AboutPageProps {}

export default function AboutPage(props: AboutPageProps) {
  const router = useRouter();
  const [newList, setNewList] = useState([]);

  // console.log(`About query:`, router.query);
  const page = Number(router.query?.page) || 1;

  // useEffect chỉ chạy ở phía Client
  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://picsum.photos/v2/list?page=${page}&limit=6`
      );
      const data = await response.json();
      setNewList(data);
      console.log({ data });
    })();
  }, [page]);

  // truyền tham số lên url ko cần phải render lại trên phía server mà chỉ ở client (shallow)
  const handleNextPage = () => {
    router.push(
      {
        pathname: "/about",
        query: {
          page: Number(page) + 1,
        },
      },
      undefined,
      { shallow: true }
    );
  };

  return (
    <Fragment>
      <div className="text-center text-black mt-5">
        <h1>About Page</h1>
        <Header />
        <div className="grid grid-cols-3 gap-5 mt-5">
          {newList.map((item: any) => {
            return (
              <Fragment key={item.id}>
                <div className="flex flex-col h-[350px] bg-gray-100 text-gray-800 rounded-lg shadow-lg">
                  <img
                    className="w-full h-full object-cover overflow-hidden rounded-lg"
                    src={item.download_url}
                    alt={item.author}
                  />
                </div>
              </Fragment>
            );
          })}
        </div>
        <button
          onClick={handleNextPage}
          className="mt-5 px-5 py-3 bg-sky-600 text-white rounded-lg"
        >
          Next Page
        </button>
      </div>
    </Fragment>
  );
}

//
AboutPage.Layout = HomeTemplate;

// export async function getServerSideProps() {
//   return {
//     props: {},
//   };
// }
export async function getStaticProps() {
  console.log("Get static props");
  return {
    props: {},
  };
}
