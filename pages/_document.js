import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className="overflow-x-hidden scroll-smooth">
      <Head />
      <body className="scrollbar-thumb-rounded-md h-screen scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-sky-400">
        <Main />

        <NextScript />
      </body>
    </Html>
  );
}
