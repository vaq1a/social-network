import Preloader from "../Preloader";
import Cell from "../UI/Grid/Cell";
import Tweet from "./Tweet";
import {useSelector} from "react-redux";
import {selectIsTweetsLoading, selectTweetsItems} from "../../store/ducks/tweets/selectors";
import {Link} from "react-router-dom";

const Tweets = () => {
    const tweets = useSelector(selectTweetsItems);
    const tweetsIsLoading = useSelector(selectIsTweetsLoading);

    if (tweetsIsLoading) {
        return <Preloader />;
    }

    return (
        <>
            {
                tweets.map(({_id, text, user: {avatarUrl, username, fullname}}) => (
                    <Link to={`/home/tweet/${_id}`}
                          style={{textDecoration: "none"}}
                          key={_id}>
                        <Cell>
                            <Tweet image={avatarUrl}
                                   id={_id}
                                   login={username}
                                   time="1h"
                                   countComment="2"
                                   name={fullname}>
                                {text}
                            </Tweet>
                        </Cell>
                    </Link>
                ))
            }
        </>
    )
}

export default Tweets;