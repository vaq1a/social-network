import styles from './Home.module.scss';
import SideMenuItem from "../../components/SideMenu/SideMenuItem";
import SideMenu from "../../components/SideMenu";
import SearchIcon from "../../components/Icons/Search";
import NotificationIcon from "../../components/Icons/Notification";
import MessageIcon from "../../components/Icons/Message";
import BookmarkIcon from "../../components/Icons/Bookmark";
import DocumentIcon from "../../components/Icons/Document";
import ProfileIcon from "../../components/Icons/Profile";
import TwitterIcon from "../../components/Icons/Twitter";
import H4 from "../../components/UI/Title/H4";
import Cell from "../../components/UI/Grid/Cell";
import Search from "../../components/UI/Search";
import List from "../../components/List";
import UserItem from "../../components/List/UserItem";
import EntryField from "../../components/EntryField";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {fetchTweets} from "../../store/ducks/tweets/actionCreators";
import {fetchTags} from "../../store/ducks/tags/actionCreators";
import {Link, Route} from "react-router-dom";
import Tags from "../../components/Tags";
import Tweets from "../../components/Tweets";
import BackButton from "../../components/BackButton";
import CurrentTweet from "../../components/Tweets/CurrentTweet";

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTweets());
        dispatch(fetchTags());
    }, [dispatch]);

    return (
        <div className={styles.container}>
            <div className={styles.column}>
                <Link to="/home">
                    <TwitterIcon className={styles.twitter} />
                </Link>
                <SideMenu>
                    <SideMenuItem className={styles.item}
                                  icon={SearchIcon}>
                        Поиск
                    </SideMenuItem>
                    <SideMenuItem className={styles.item}
                                  icon={NotificationIcon}>
                        Уведомления
                    </SideMenuItem>
                    <SideMenuItem className={styles.item}
                                  icon={MessageIcon}>
                        Сообщения
                    </SideMenuItem>
                    <SideMenuItem className={styles.item}
                                  icon={BookmarkIcon}>
                        Закладки
                    </SideMenuItem>
                    <SideMenuItem className={styles.item}
                                  icon={DocumentIcon}>
                        Список
                    </SideMenuItem>
                    <SideMenuItem className={styles.item}
                                  icon={ProfileIcon}>
                        Профиль
                    </SideMenuItem>
                </SideMenu>
            </div>
            <div className={styles.column}>
                <Cell className={styles.header}>
                    <Route path={`/home/:any`}>
                        <BackButton />
                    </Route>
                    <Route path={['/home', '/home/search']} exact>
                        <H4 className={styles.title}>
                            Твиты
                        </H4>
                    </Route>
                    <Route path={`/home/tweets`}>
                        <H4 className={styles.title}>
                            Твитнуть
                        </H4>
                    </Route>
                </Cell>
                <Route path={['/home', '/home/search']}
                       exact>
                    <Cell className={styles.entryField}>
                        <EntryField />
                    </Cell>
                </Route>
                <Route path="/home"
                       exact>
                    <Tweets />
                </Route>
                <Route path="/home/tweets/:id"
                       exact>
                    <CurrentTweet />
                </Route>
            </div>
            <div className={styles.column}>
                <Search />
                <Tags />
                <List title="Кого читать">
                    <UserItem name="Vadim"
                              login="@vad1a" />
                    <UserItem name="Vadim"
                              login="@vad1a" />
                </List>
            </div>
        </div>
    )
}

export default Home;