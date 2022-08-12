import Image from "next/image";

const style = {
    profilePic: "h-4 w-4 rounded-full",
    wrapper: "flex items-center space-x-1 text-xs text-[#818384]",
    profilePicContainer: "flex items-center space-x-1",
    tag: "cursor-pointer text-xs font-semibold text-[#D7DADC] hover:underline", 
    postedBy: "flex items-center space-x-1"
}

const Info = ({ author }) => {
    return (
        <div className={style.wrapper}>
            <div className={style.profilePicContainer}>
                <Image
                    className="rounded-full"
                    src="https://images.unsplash.com/photo-1596797882870-8c33deeac224"
                    height="16"
                    width="16"
                    alt="Profile" />
            </div>

            <div className={style.tag}>r/cutepuppies</div>
            <div>•</div>

            <div className={style.postedBy}>
                <span>Posted by {author}</span>
                <span>•</span>
                <span>Aug 11</span>
            </div>
        </div>
    )
}

export default Info;
