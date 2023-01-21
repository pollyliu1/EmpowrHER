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
      <Heading />
      <Navbar user={user} />
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
    </>
  );
}

export default Posts;
