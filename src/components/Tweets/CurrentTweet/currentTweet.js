import Tweet from "../Tweet";
import {useDispatch, useSelector} from "react-redux";
import {selectTweetItem, selectTweetLoadingState} from "../../../store/ducks/tweet/selectors";
import Preloader from "../../Preloader";
import {fetchTweet, setTweet} from "../../../store/ducks/tweet/actionCreators";
import {useEffect} from "react";
import {useParams} from "react-router";

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
                    <Tweet image={tweet[0].user.avatarUrl}
                           id={tweet[0]._id}
                           login={tweet[0].user.username}
                           time="1h"
                           countComment="2"
                           name={tweet[0].user.fullname}>
                        {tweet[0].text}
                    </Tweet>
                )
            }
        </>
    )
}

export default CurrentTweet;