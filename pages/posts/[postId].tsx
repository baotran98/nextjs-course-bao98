import React from "react";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { useRouter } from "next/router";

export interface PostDetailPageProps {
  post: any;
}

export default function PostDetailPage({ post }: PostDetailPageProps) {
  const router = useRouter();
  if (!post) return null;
  return (
    <React.Fragment>
      <div className="text-center font-bold mt-10">
        <h1>POST DETAIL PAGE</h1>
        <p>Name: {post.name}</p>
        <p>Price: {post.price}</p>
      </div>
    </React.Fragment>
  );
}
export const getStaticPaths: GetStaticPaths = async () => {
  console.log(`Get Static Paths`);
  const response = await fetch(
    `https://6330601e591935f3c88eba4f.mockapi.io/api/product`
  );
  const data = await response.json();

  return {
    paths: data.map((post: any) => ({ params: { postId: post.id } })),
    fallback: false, //true, blocking
  };
};
export const getStaticProps: GetStaticProps<PostDetailPageProps> = async (
  context: GetStaticPropsContext
) => {
  console.log(`Get Static Props`, context.params?.postId);

  const postID = context.params?.postId;
  if (!postID) return { notFound: true };

  const response = await fetch(
    `https://6330601e591935f3c88eba4f.mockapi.io/api/product/${postID}`
  );
  const data = await response.json();

  return {
    props: {
      post: data,
    },
  };
};
