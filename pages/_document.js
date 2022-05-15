import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className="scroll-smooth">
      <Head />
      <body className="h-screen scrollbar-thin scrollbar-thumb-sky-400 scrollbar-track-gray-100 scrollbar-thumb-rounded-md">
        <Main />

        <NextScript />
      </body>
    </Html>
  );
}
