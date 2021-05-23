import styles from './Textarea.module.scss';

const Textarea = ({
    placeholder = '',
    value = '',
    setText = () => {},

}) => {
    return (
        <textarea placeholder={placeholder}
                  onChange={setText}
                  value={value}
                  className={styles.textarea} />
    )
}

export default Textarea;