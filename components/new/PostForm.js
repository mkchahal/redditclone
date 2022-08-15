import { useRouter } from "next/router";
import { useState } from "react";
import { supabase } from "../../services/supabaseClient";
import Loading from "../Loading";

const style = {
  wrapper: "flex flex-col space-y-6",
  input:
    "bg-[#1a1a1b] border border-[#343536] px-4 py-2 text-left text-sm text-white focus:outline-none",
  title: "border-b border-[#343536] pb-3 text-lg font-medium",
  postButton:
    "bg-gray-200 px-4 py-1.5 text-xs font-semibold text-[#1a1a1b] rounded-full",
  postButtonContainer: "flex justify-end pt-2",
};

const PostForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();

  const createPost = async (event) => {
    event.preventDefault();

    try {
      setIsLoading(true);

      await supabase.from("feed").insert([
        {
          author: "Mandeep K Chahal",
          title,
          content,
        },
      ]);
    } catch (error) {
      console.log(error);
    } finally {
        router.push("/");
        setIsLoading(false);
    }
  };

  return (
    <div className={style.wrapper}>
      {isLoading && <Loading />}
      <h1 className={style.title}>Create a Post</h1>
      <div className="flex flex-col space-y-2 rounded bg-[#1a1a1b] p-4">
        <input
          className={style.input}
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.currentTarget.value)}
        />
        <textarea
          className={style.input}
          name="content"
          id="content"
          placeholder="Text (required)"
          cols="30"
          rows="10"
          value={content}
          onChange={(e) => setContent(e.currentTarget.value)}
        ></textarea>
        <div className={style.postButtonContainer}>
          <button onClick={createPost} className={style.postButton}>
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostForm;
