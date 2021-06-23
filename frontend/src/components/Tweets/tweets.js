import Preloader from "../Preloader";
import Cell from "../UI/Grid/Cell";
import Tweet from "./Tweet";
import {useSelector} from "react-redux";
import {
    selectIsAddNewTweetError,
    selectIsAddNewTweetLoading,
    selectIsTweetsLoading,
    selectTweetsItems
} from "../../store/ducks/tweets/selectors";
import {Link} from "react-router-dom";
import Notification from "../Notification";

const avatarUrl = 'https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile.png';

const Tweets = () => {
    const tweets = useSelector(selectTweetsItems);
    const tweetsIsLoading = useSelector(selectIsTweetsLoading);

    const newTweetIsLoading = useSelector(selectIsAddNewTweetLoading);
    const newTweetIsError = useSelector(selectIsAddNewTweetError);

    if (tweetsIsLoading) {
        return <Preloader />;
    }

    return (
        <>
            {
                newTweetIsLoading && <Preloader />
            }
            {
                tweets && tweets.map(({_id, text, createdAt, user: {username, fullname}}) => (
                    <Link to={`/home/tweet/${_id}`}
                          style={{textDecoration: "none"}}
                          key={_id}>
                        <Cell>
                            <Tweet image={avatarUrl}
                                   id={_id}
                                   login={username}
                                   time={createdAt}
                                   countComment="2"
                                   name={fullname}>
                                {text}
                            </Tweet>
                        </Cell>
                    </Link>
                ))
            }
            {
                newTweetIsError && (
                    <Notification text={'Error...Try again'}
                                  isVisible={newTweetIsError} />
                )
            }
        </>
    )
}

export default Tweets;