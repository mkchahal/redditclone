import { IconItem } from "../common/IconItem";
import {
  SparklesIcon,
  GlobeIcon,
  VideoCameraIcon,
  ChatIcon,
  BellIcon,
  PlusIcon,
  SpeakerphoneIcon,
} from "@heroicons/react/outline";
import { useContext } from "react";
import { RedditContext } from "../../context/RedditContext";
import { useRouter } from "next/router";

const style = {
  wrapper: "flex items-center space-x-2 divide-x divide-[#343536]",
  iconsLeft: "flex items-center space-x-2",
  iconsRight: "flex items-center space-x-2 pl-2",
  logoutBtn:
    "bg-[#818283] flex align-center items-center rounded-full px-4 py-1",
  smallText: "text-sm text-semibold text-white",
  dollarIcon: "h-4 w-4",
};

const Icons = () => {
  const { setCurrentUser } = useContext(RedditContext);
  const router = useRouter();

  const handleLogout = () => {
    setCurrentUser(null);
    router.push("/");
  };

  return (
    <div className={style.wrapper}>
      <div className={style.iconsLeft}>
        <IconItem Icon={SparklesIcon} />
        <IconItem Icon={GlobeIcon} />
        <IconItem Icon={VideoCameraIcon} />
      </div>
      <div className={style.iconsRight}>
        <IconItem Icon={ChatIcon} />
        <IconItem Icon={BellIcon} />
        <IconItem Icon={PlusIcon} />
        <IconItem Icon={SpeakerphoneIcon} />

        <button className={style.logoutBtn} onClick={handleLogout}>
          <span className={style.smallText}>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Icons;
