import styles from './CurrentTweet.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {selectTweetItem, selectTweetLoadingState} from "../../../store/ducks/tweet/selectors";
import Preloader from "../../Preloader";
import {fetchTweet, setTweet} from "../../../store/ducks/tweet/actionCreators";
import {useEffect} from "react";
import {useParams} from "react-router";
import Photo from "../../UI/Photo";
import {format} from 'date-fns';
import ruLang from 'date-fns/locale/ru';

const avatarUrl = 'https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile.png';


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
                               <Photo image={avatarUrl}
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
                        <div className={styles.date}>
                            <div className={styles.date__time}>
                                {format(new Date(tweet.createdAt), "HH:mm")}
                            </div>
                            <div>
                                {format(new Date(tweet.createdAt), "d MMM y г.", {locale: ruLang})}
                            </div>
                        </div>

                    </div>
                )
            }
        </>
    )
}

export default CurrentTweet;