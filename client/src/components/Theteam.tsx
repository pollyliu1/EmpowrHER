import { url } from "inspector";
import React from "react";
import Image from "next/image";
import Navbar from "./Navbar";
import SignInButton1 from "./SignInButton1";
import SignOutButton1 from "./SignOutButton1";
import orangMonke from "../resources/orangMonke.PNG";
import pinkMonke from "../resources/pinkMonke.PNG";
import purpMonke from "../resources/purpMonke.PNG";
import cyanMonke from "../resources/cyanMonke.PNG";

function Theteam() {
  return (
    <>
      <section id="the-team">
        <h1 className="p-10 text-center text-3xl" data-aos="slide-down">
          <b>The Team</b>
        </h1>
        <div className="flex gap-20 justify-center ">
          <div
            className="w-60 h-60 rounded-lg bg-indigo-100"
            data-aos="slide-right"
          >
            <h1 className="pt-5 text-center font-bold">Richard Shuai</h1>
            <Image
              alt="Richard Shuai"
              src={orangMonke}
              className="w-48 h-48 mx-auto"
            />
          </div>

          <div
            className="w-60 h-60 rounded-lg bg-indigo-100"
            data-aos="slide-right"
          >
            <h1 className="pt-5 text-center font-bold">Angela Xu</h1>
            <Image
              alt="Angela Xu"
              src={cyanMonke}
              className="w-48 h-48 mx-auto"
            />
          </div>
          <div
            className="w-60 h-60 rounded-lg bg-indigo-100"
            data-aos="slide-left"
          >
            <h1 className="pt-5 text-center font-bold">Polly Liu</h1>
            <Image
              alt="Polly Liu"
              src={pinkMonke}
              className="w-48 h-48 mx-auto"
            />
          </div>
          <div
            className="w-60 h-60 rounded-lg bg-indigo-100"
            data-aos="slide-left"
          >
            <h1 className="pt-5 text-center font-bold">Mitchel Shen</h1>
            <Image
              alt="Mitchel Shen"
              src={purpMonke}
              className="w-48 h-48 mx-auto"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Theteam;
