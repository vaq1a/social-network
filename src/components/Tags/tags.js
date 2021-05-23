import List from "../List";
import Preloader from "../Preloader";
import Tag from "./Tag";
import styles from './Tags.module.scss';
import {useSelector} from "react-redux";
import {selectTagsIsLoading, selectTagsItems} from "../../store/ducks/tags/selectors";

const Tags = () => {
    const tags = useSelector(selectTagsItems);
    const tagsIsLoading = useSelector(selectTagsIsLoading);

    return (
        <List title="Актуальные темы"
              className={styles.best_theme}>
            {
                tagsIsLoading ? (
                    <Preloader />
                ) : !tags.length ? (
                    <div>Empty...</div>
                ) : (
                    tags.map(({name, count, _id}) => (
                        <Tag theme={name}
                             key={_id}
                             id={_id}
                             count={count} />
                    ))
                )
            }
        </List>
    )
}

export default Tags;