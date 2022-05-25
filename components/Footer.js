import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <>
      <footer className="max-w-container mx-auto w-full border-t bg-gray-100 py-10 text-center text-sm text-gray-500 dark:bg-gray-900 dark:text-gray-300 sm:flex sm:items-center sm:justify-center">
        <p>© 2022 Tailwindly All rights reserved.</p>
        <p className="mt-2 sm:mt-0 sm:ml-3 sm:border-l sm:border-gray-200 sm:pl-3">
          <Link href={"/privacy-policy"}>
            <a className="hover:text-sky-600">Privacy Policy</a>
          </Link>
        </p>
      </footer>
    </>
  );
}

export default Footer;
