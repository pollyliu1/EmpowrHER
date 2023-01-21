import { url } from "inspector";
import React from "react";
import Image from "next/image";
import Navbar from "./Navbar";
import SignInButton1 from "./SignInButton1";
import SignOutButton1 from "./SignOutButton1";

function Theteam() {
  return (
    <>
      <section id="the-team">
        <h1 className="text-center text-3xl">The Team</h1>
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-1 mx-20 flex bg-indigo-200 shadow-2xl rounded-3xl float-left mt-10 pt-100 py-10 px-10">
            <h1 className="text-center">Richard Shuai</h1>
          </div>
          <div className="col-span-1 mx-20 flex bg-indigo-200 shadow-2xl rounded-3xl float-right mt-10 pt-100 py-10 px-10">
            <h1>Angela Xu</h1>
          </div>
          <div className="col-span-1 mx-20 flex bg-indigo-200 shadow-2xl rounded-3xl float-right mt-10 pt-100 py-10 px-10">
            <h1>Polly Liu</h1>
          </div>
          <div className="col-span-1 mx-20 flex bg-indigo-200 shadow-2xl rounded-3xl float-right mt-10 pt-100 py-10 px-10">
            <h1>Mitchel Shen</h1>
          </div>
        </div>
      </section>
    </>
  );
}

export default Theteam;
