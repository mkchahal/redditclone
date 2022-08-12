import Vote from '../feed/Vote';
import Actions from '../feed/Actions';
import Info from '../feed/Info';

const style = {
    post: 'flex flex-col space-y-1 cursor-pointer',
    wrapper: 'flex space-x-3 rounded bg-[#1a1a1a]/80 p-2 border border-[#343536]',
    postTitle: 'text-lg font-medium text-[#D7DADC]',
    postContent: 'text-sm font-light text-[#D7DADC]/80',
}

const Post = ({ id, title, author}) => {
    return (
        <div className={style.wrapper}>
            <Vote />
            <div className={style.post}>
                <Info author={author}/>
                <h1 className={style.postTitle}>{title}</h1>
                <p className={style.postContent}>
                    I always go awww whenever I see some puppies no matter what breed they
                    are. Why so? Why do we love them and feel fuzzy? There could be some
                    science behind it. 🤔
                </p>
                <Actions />
            </div>
        </div>
    );
};

export default Post;
