import { AnnotationIcon, GiftIcon, ShareIcon } from "@heroicons/react/outline";
import { useContext, useEffect, useState } from "react";
import useSWR from "swr";
import { RedditContext } from "../../context/RedditContext";

const style = {
    wrapper: 'flex items-center space-x-4 pt-2',
    iconContainer: 'flex items-center space-x-1 text-[#818384]',
    icon: 'h-4 w-4'
}

const Actions = ({postId}) => {

    const [numOfComments, setNumOfComments] = useState(0);
    const { fetcher } = useContext(RedditContext);

    const { data } = useSWR(`/api/get-comments?postId=${postId}`, fetcher, {
        refreshInterval: 200,
      });
    
      useEffect(() => {
        if (!data) return;
    
        setNumOfComments(data.data.length);
      }, [data]);

    return (
        <div className={style.wrapper}>
            <div className={style.iconContainer}>
                <AnnotationIcon className={style.icon} />
                <span className="text-xs">{numOfComments} comments</span>
            </div>

            <div className={style.iconContainer}>
                <GiftIcon className={style.icon} />
                <span className="text-xs">Awards</span>
            </div>

            <div className={style.iconContainer}>
                <ShareIcon className={style.icon} />
                <span className="text-xs">Shares</span>
            </div>

        </div>
    )
}

export default Actions;
