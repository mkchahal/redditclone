import { useContext } from "react";
import Post from "../../components/common/Post";
import { RedditContext } from "../../context/RedditContext";
import Header from "../../components/header";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Comments from "../../components/commentSection/Comments";
import SaveComment from "../../components/commentSection/SaveComment";
import Head from "next/head";

const style = {
  wrapper: "flex min-h-screen flex-col bg-black text-white",
  container: "mx-auto flex w-full max-w-5xl flex-1 space-x-6 py-[5rem] px-6",
  containerWrapper: "w-full space-y-4 lg:w-2/3",
};

const PostView = () => {
  const router = useRouter();
  const { selectedPost } = useContext(RedditContext);

  useEffect(() => {
    if (selectedPost === null) {
      router.push("/");
    }
  }, [selectedPost]);

  return (
    <div className={style.wrapper}>
      <Head>
        <title>Reddit Post | MKC</title>
      </Head>
      <Header />
      <div className={style.container}>
        { selectedPost &&
          <div className={style.containerWrapper}>
            <Post {...selectedPost} />
            <SaveComment postId={selectedPost.id} />
            <Comments postId={selectedPost.id} />
          </div>
        }
      </div>
    </div>
  );
};

export default PostView;
