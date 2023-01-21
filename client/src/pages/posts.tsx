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
    <div className="bg-[url('../../public/jumbotron-gradient.png')] bg-cover h-full">
      <Heading />
      <Navbar user={user} />
      <div className='max-w-lg mx-auto mt-20 border-purple-800'>
        <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden ">
          <div className="grid place-items-center h-full w-12 text-gray-300">
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
      <div>Posts</div>
      {/* {posts[0]["description"]} */}
      {posts.length > 0 &&
        posts.map((post: any, ind: number) => (
          <div className="container" key={ind}>
            <h1>
              #{post["pid"]} {post["title"]}
            </h1>
            <p>Skills Possessed: {post["skills_have"]}</p>
            <p>Skills Wanted: {post["skills_want"]}</p>
            <p>Requester: {post["uemail"]}</p>
            <p>{post["description"]}</p>
            <p>
              {post["fulfill_uemail"] == "false"
                ? "Await empowerment"
                : "Empowered by " + post["fulfill_uemail"]}
            </p>
          </div>
        ))}
        </div>
    </>
  );
}

export default Posts;
