import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import useSWR from "swr";
import { RedditContext } from "../../context/RedditContext";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import { UpvoteIcon } from "../common/UpvoteIcon";
import { DownvoteIcon } from "../common/DownvoteIcon";
import { ChatAltIcon } from "@heroicons/react/outline";

TimeAgo.addDefaultLocale(en);
const timeAgo = new TimeAgo("en-US");

const style = {
  wrapper: "bg-[#1a1a1a] p-4",
  profileImage: "object-contain",
  profileImageContainer:
    "h-[1.2rem] w-[1.2rem] overflow-hidden relative rounded-full",
  postInfoContainer: "flex gap-[0.4rem]",
  icon: "text-[#818384]",
  icons: "flex gap-[0.4rem]",
  commentContainer: "mt-[1rem] flex flex-col gap-[1rem] ",
  reply: "flex items-center gap-[0.2rem] text-[#818384]",
};

const Comments = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const { fetcher } = useContext(RedditContext);

  const { data } = useSWR(`/api/get-comments?postId=${postId}`, fetcher, {
    refreshInterval: 200,
  });

  useEffect(() => {
    if (!data) return;

    setComments(data.data);
  }, [data]);

  return (
    <div className={style.wrapper}>
      {comments.length > 0 &&
        comments.map((comment, id) => (
          <div key={id} className={style.commentContainer}>
            <div className={style.postInfoContainer}>
              <div className={style.profileImageContainer}>
                <Image
                  src={comment.users.profileImage}
                  alt="user"
                  className={style.profileImage}
                  layout="fill"
                />
              </div>
              <span>{comment.author}</span>
              <span>•</span>
              <span>{timeAgo.format(new Date(comment.created_at), "twitter-now")}</span>
            </div>

            <div>{comment.text}</div>
            <div className={style.icons}>
              <span className={style.icon}>
                <UpvoteIcon />
              </span>
              <span>0</span>
              <span className={style.icon}>
                <DownvoteIcon />
              </span>
              <span>0</span>
              <span className={style.reply}>
                <ChatAltIcon className="h-6 w-6" />
                <span>Reply</span>
              </span>
              <span className={style.icon}>Give</span>
              <span className={style.icon}>Share</span>
              <span className={style.icon}>Save</span>
              <span className={style.icon}>Follow</span>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Comments;
