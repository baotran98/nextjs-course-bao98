import { GetStaticProps, GetStaticPropsContext } from "next";
import Link from "next/link";
import React from "react";

export interface PostListPageProps {
  posts: any[];
}

export default function PostListPage({ posts }: PostListPageProps) {
  return (
    <React.Fragment>
      <div className="text-black">
        <h1
          style={{
            textAlign: "center",
          }}
        >
          Post List Page
        </h1>
        <ul className="text-center">
          {posts.map((item) => {
            return (
              <ul key={item.id}>
                <Link href={`/posts/${item.id}`}>
                  <li className="cursor-pointer hover:text-sky-500">
                    {item.name}
                  </li>
                </Link>
              </ul>
            );
          })}
        </ul>
      </div>
    </React.Fragment>
  );
}
export const getStaticProps: GetStaticProps<PostListPageProps> = async (
  context: GetStaticPropsContext
) => {
  // server-side(chỉ chạy bên server, ko chạy bên client)
  // build-time
  const response = await fetch(
    `https://6330601e591935f3c88eba4f.mockapi.io/api/product`
  );
  const data = await response.json();

  return {
    props: {
      posts: data.map((x: any) => ({ id: x.id, name: x.name })),
    },
  };
};
