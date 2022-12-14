import "../styles/globals.css";
import type { AppProps } from "next/app";
import { EmptyTemplate } from "@/components/layouts";
import { AppPropsWithLayout } from "../models";

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout ?? EmptyTemplate;

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
