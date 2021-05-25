import styles from './CurrentTweet.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {selectTweetItem, selectTweetLoadingState} from "../../../store/ducks/tweet/selectors";
import Preloader from "../../Preloader";
import {fetchTweet, setTweet} from "../../../store/ducks/tweet/actionCreators";
import {useEffect} from "react";
import {useParams} from "react-router";
import Photo from "../../UI/Photo";

const CurrentTweet = () => {
    const dispatch = useDispatch();
    const params = useParams();

    const tweet = useSelector(selectTweetItem);
    const isLoading = useSelector(selectTweetLoadingState);
    const id = params.id;

    useEffect(() => {
        if (id) {
            dispatch(fetchTweet(id));
        }

        return () => {
            dispatch(setTweet(null));
        }
    }, [dispatch, id]);

    if (isLoading) {
       return <Preloader />
    }

    return (
        <>
            {
                tweet && (
                    <div className={styles.tweet}>
                           <div className={styles.header}>
                               <Photo image={tweet.user.avatarUrl}
                                      className={styles.photo} />
                               <div className={styles.user}>
                                   <div className={styles.name}>
                                       {tweet.user.fullname}
                                   </div>
                                   <div className={styles.login}>
                                       @{tweet.user.username}
                                   </div>
                               </div>
                           </div>
                           <div className={styles.text}>
                               {tweet.text}
                           </div>
                    </div>
                )
            }
        </>
    )
}

export default CurrentTweet;