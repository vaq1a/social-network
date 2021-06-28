import formatDistance from 'date-fns/formatDistance'
import ruLang from 'date-fns/locale/ru';

export const formatDate = (date) => {
    return formatDistance(
        new Date(),
        date,
        { locale: ruLang }
    );
}