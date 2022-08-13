const style = {
  wrapper: "flex flex-col space-y-6",
  input:
    "bg-[#1a1a1b] border border-[#343536] px-4 py-2 text-left text-sm text-white focus:outline-none",
  title: "border-b border-[#343536] pb-3 text-lg font-medium",
  postButton: 'bg-gray-200 px-4 py-1.5 text-xs font-semibold text-[#1a1a1b] rounded-full',
  postButtonContainer: 'flex justify-end pt-2'
};

const PostForm = () => {
  return (
    <div className={style.wrapper}>
      <h1 className={style.title}>Create a Post</h1>
      <div className="flex flex-col space-y-2 rounded bg-[#1a1a1b] p-4">
          <input className={style.input} type="text" placeholder="Title" />
          <textarea
            className={style.input}
            name="content"
            id="content"
            placeholder="Text (required)"
            cols="30"
            rows="10"
          ></textarea>
          <div className={style.postButtonContainer}><button className={style.postButton}>Post</button></div>
      </div>
    </div>
  );
};

export default PostForm;
