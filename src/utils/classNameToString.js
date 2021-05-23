export const classNameToString = (...classes) => {
    return classes.filter(Boolean).join(' ');
}