import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className="scroll-smooth">
      <Head />
      <body className="scrollbar-thumb-rounded-md h-screen bg-gray-50 scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-sky-400 dark:bg-gray-900">
        <Main />

        <NextScript />
      </body>
    </Html>
  );
}
