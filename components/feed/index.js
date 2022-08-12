import Post from '../common/Post'

// these will come from database
const posts = [
  {id: 0, title: 'build reddit', author: 'mandeep'},
  {id: 1, title: 'build medium', author: 'sandy'},
  {id: 2, title: 'build facebook', author: 'david'}
]

const style = {
  wrapper: 'space-y-2.5',
}

const Feed = () => {
  return (
    <div className={style.wrapper}>
      {
        posts.map(post => <Post key={post.id} {...post}/>)
      }
    </div>
  )
}

export default Feed;