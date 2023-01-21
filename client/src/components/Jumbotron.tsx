import { url } from "inspector";
import React from "react";

import Navbar from "./Navbar";
import SignInButton1 from "./SignInButton1";
import SignOutButton1 from "./SignOutButton1";
import separator from "../resources/separator.png";
import light_gradient from "../resources/light_gradient.png";
import light_gradient_upsidedown from "../resources/ligth_gradient_upsidedown.png";
import infopic1 from "../resources/info1.jpg";
import infopic2 from "../resources/info2.jpg";
import infopic3 from "../resources/info3.jpg";
import Image from "next/image";

function Jumbotron({ user }) {
    return (
        <>
            <div className="bg-[url('../../public/jumbotron-gradient.png')] bg-cover h-full">
                <Navbar user={user} />
                <div className="justify-content h-screen">
                    <section>
                        <div className="max-w-screen-lg bg-white shadow-2xl rounded-3xl mx-auto text-center py-12 mt-20 mb-100">
                            <h2 className="text-3xl leading-9 font-bold tracking-tight text-gray-800 sm:text-4xl sm:leading-10">
                                <span className="font-extrabold text-gray-800 text-3xl leading-9 tracking-tight sm:text-4xl sm:leading-10">
                                    Empowr
                                </span>
                                <span className="font-extrabold text-3xl text-violet-500 leading-9 tracking-tight sm:text-4xl sm:leading-10">
                                    HER
                                </span>
                            </h2>
                            <div className="mt-8 flex justify-center">
                                {user ?
                                    <>
                                        <div className="inline-flex rounded-md bg-blue-500 shadow rounded-3xl px-5 py-5">
                                            {user.displayName}
                                        </div>
                                        <a href="/make_post" className="bg-indigo-500 text-white text-lg px-6 py-3 rounded-lg hover:bg-indigo-600">Request Empowerment</a>
                                    </>
                                    :
                                    <SignInButton1 />}
                            </div>
                        </div>
                    </section>

                    <section style={{ padding: 432 }}>
                        <div>
                            <Image
                                src={separator}
                                alt="separator bar"
                                style={{
                                    position: "absolute",
                                    top: 550,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    height: "100%",
                                    width: "100%",
                                    objectFit: "cover",
                                }}
                            />
                        </div>
                    </section>

                    <section id="about-us">
                        <div className="flex">
                            <div className="mx-auto">
                                <Image
                                    src={infopic3}
                                    alt="info picture 3"
                                    style={{ width: 300, height: 300 }}
                                />
                                <p className="text-center text-xl mx-auto font-extrabold text-violet-500">
                                    Teach
                                </p>
                            </div>
                            <div className="mx-auto">
                                <Image
                                    src={infopic2}
                                    alt="info picture 2"
                                    style={{ width: 300, height: 300 }}
                                />
                                <p className="text-center text-xl mx-auto font-extrabold text-emerald-300">
                                    Support
                                </p>
                            </div>
                            <div className="mx-auto">
                                <Image
                                    src={infopic1}
                                    alt="info picture 1"
                                    style={{ width: 300, height: 300 }}
                                />
                                <p className="text-center text-xl mx-auto font-extrabold text-indigo-500">
                                    Build Community
                                </p>
                            </div>
                        </div>
                    </section>

                    <section style={{ padding: 100 }}>
                        <div className="max-w-2xl bg-indigo-200 shadow-2xl rounded-3xl mx-auto pt-100 py-10 px-10 md:w-full">
                            <p>
                                "
                                <span className="font-bold">
                                    Empowr<span className="text-violet-500">HER</span>
                                </span>
                                " is a web application designed to connect and empower women by
                                sharing skills and knowledge.
                            </p>
                            <br></br>
                            <p>
                                Our platform allows users to create profiles,{" "}
                                <span className="font-bold">share</span> their skills and
                                expertise, and <span className="font-bold">connect</span> with
                                other women in their community or industry. Whether you're a
                                seasoned professional or just starting out, our goal is to
                                provide a
                                <span className="font-bold"> safe and inclusive space </span>
                                for women to share their skills and support one another.
                            </p>
                            <br></br>
                            <p>
                                "
                                <span className="font-bold">
                                    Empowr<span className="text-violet-500">HER</span>
                                </span>
                                " is the ultimate tool for women looking to grow their
                                skill-sets and hobbies. Join our
                                <span className="font-bold"> community </span> today and start
                                sharing your skills to empower yourself and others.
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}

export default Jumbotron;
