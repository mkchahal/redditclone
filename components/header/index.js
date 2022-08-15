import Image from 'next/image'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import { RedditContext } from '../../context/RedditContext'
import Icons from './Icons'
import Logo from './Logo'
import SearchBar from './SearchBar'

const style = {
  header: 'fixed inset-0 z-50 flex h-14 bg-[#1a1a1b]',
  wrapper: 'flex flex-1 items-center space-x-4 border-b border-[#343536] px-5',
  leftHeader: 'flex flex-1 items-center space-x-4',
  rightHeader: 'flex items-center space-x-4',
  profileImageContainer:
    'flex h-9 w-9 cursor-pointer items-center justify-center overflow-hidden rounded-full relative',
  profileImage: 'object-contain',
}

const Header = () => {

  const { currentUser } = useContext(RedditContext);
  const router = useRouter();

  return (
        <header className={style.header}>
          <div className={style.wrapper}>
            <div className={style.leftHeader}>
              <Logo onClick={() => router.push('/')}/>
              <SearchBar />
            </div>
            <div className={style.rightHeader}>
              <Icons />

              <button>
                <div className={style.profileImageContainer}>
                    <Image
                      className={style.profileImage}
                      src={currentUser.user_metadata.picture}
                      layout='fill'
                      alt='Profile Image'
                    />
                </div>
              </button>
            </div>
          </div>
        </header>
  )
}

export default Header
