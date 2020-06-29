import moment from 'moment';

const dateToValue = (value, dateFormat) => {
    if (!value) {
        return null;
    }
    return moment(value).format(dateFormat);
}
export default dateToValue;