import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <>
      <footer className="w-full max-w-container mx-auto border-t py-10 text-center text-sm text-gray-500 dark:text-slate-300 bg-gray-100 dark:bg-slate-900 sm:flex sm:items-center sm:justify-center">
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
