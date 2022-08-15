import { UpvoteIcon } from "../common/UpvoteIcon";
import { DownvoteIcon } from "../common/DownvoteIcon";
import { supabase } from "../../services/supabaseClient";

const style = {
  votes: "py-1 text-xs font-bold text-white",
  wrapper: "flex flex-col items-center",
};

const Vote = ({ id, upvotes, downvotes }) => {
  
  const updateUpvote = async (event) => {
    event.preventDefault();

    try {
      await supabase
        .from("feed")
        .update({
          upvotes: upvotes + 1,
        })
        .match({
          id: id,
        });
    } catch (error) {
      console.error(error);
    }
  };

  const updateDownvote = async (event) => {
    event.preventDefault();

    try {
      await supabase
        .from("feed")
        .update({
          downvotes: downvotes + 1,
        })
        .match({
          id: id,
        });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={style.wrapper}>
      <button onClick={updateUpvote}>
        <UpvoteIcon />
      </button>

      <p className={style.votes}>{upvotes - downvotes}</p>

      <button onClick={updateDownvote}>
        <DownvoteIcon />
      </button>
    </div>
  );
};

export default Vote;
