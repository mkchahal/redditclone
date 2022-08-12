import { UpvoteIcon } from '../common/UpvoteIcon'
import { DownvoteIcon } from '../common/DownvoteIcon'

const style = {
    votes: 'py-1 text-xs font-bold text-white', 
    wrapper: 'flex flex-col items-center'
}

const Vote = () => {

    const upvotes = 10;
    const downvotes = 5;

  return (
    <div className={style.wrapper}>
        <button>
            <UpvoteIcon/>
        </button>

        <p className={style.votes}>{ upvotes - downvotes }</p>
        
        <button>
            <DownvoteIcon/>
        </button>

    </div>
  )
}

export default Vote;
