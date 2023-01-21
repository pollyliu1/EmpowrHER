import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { auth, db } from "../serve/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

import Heading from "@/components/Heading";
import Navbar from "@/components/Navbar";
import Head from "next/head";

const fetchPosts = async () => {
    const data = await getDocs(collection(db, "posts"));
    return data.docs.map((doc: any) => doc.data());
};

export const getServerSideProps = async () => {
    const posts = await fetchPosts();
    return {
        props: {
            posts,
        },
    };
};

function Posts({ posts }) {
  const [user, loading, error] = useAuthState(auth);

  // useEffect(() => {
  //     const getPosts = async () => {
  //         const snapshot = await getAllPostsSnapShot();
  //         setAllPosts(snapshot.docs.map((doc:any) => doc.data()));
  //     };

  //     getPosts();
  // }, []);

  return (
    <>
    <div className="bg-[url('../../public/jumbotron-gradient.png')] bg-cover min-h-screen">
      <Heading />
      <Navbar user={user} />
      <div className='max-w-lg mx-auto mt-10 mb-10 border-purple-800'>
        <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden ">
          <div className="grid place-items-center h-full w-12 text-indigo-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
            type="text"
            id="search"
            placeholder="Search for a skill.." /> 
        </div>
      </div>
        {/* {posts[0]["description"]} */}
        <div className="container my-12 mx-auto px-4 md:px-12">
        <div className="flex flex-wrap -mx-1 lg:-mx-4x">
            {posts.length > 0 &&
                posts.map((post: any, ind: number) => (
                    <div  key={ind} className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                    <div className="bg-white border border-gray-200 rounded-lg shadow-lg">
                        <div className="container" key={ind}>
                            <img className="rounded-t-lg mx-auto pt-5" src="favicon.ico" alt="" />
                            <div className="p-5">
                                <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                                    {/* {post["pid"]}  */}
                                    {post["title"]}
                                </h1>
                                <button className="mb-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-full">
                                    Skills Possessed
                                </button>
                                <span className="inline font-normal text-gray-700 pl-4px">
                                    &nbsp;{post["skills_have"]}
                                </span> <br />
                                <button className="mb-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-full">
                                    Skills Wanted
                                </button>
                                <span className="inline mb-3 font-normal text-gray-700 pl-4px">
                                    &nbsp;{post["skills_want"]}
                                </span>
                                <p className="mb-3 font-normal text-gray-700">
                                    {post["description"]}
                                </p>
                                <p className="font-normal text-gray-700">
                                    Requester: {post["uemail"].substring(0,post["uemail"].length-10)}
                                </p>
                                <p className="mb-3 font-normal text-gray-700">
                                    {post["fulfill_uemail"] === "false"
                                        ? <b>Await empowerment</b>
                                        : "Empowered by " + post["fulfill_uemail"].substring(0,post["fulfill_uemail"].length-10)}
                                </p>
                                {post["fulfill_uemail"] === "false" &&
                                <div className="mx-auto text-center my-5">
                                    <button className='py-1 px-4 bg-violet-300 hover:bg-violet-200 hover:text-gray-800 rounded-lg' onClick={() => false}> Fulfill Empowerment </button>
                                </div>
                                }
                            </div>
                        </div>
                    </div>
                    </div>
                ))}
        </div>
    </div>
    </div>
    </>
  );
}

export default Posts;
