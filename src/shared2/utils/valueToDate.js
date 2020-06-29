import moment from 'moment';

const valueToDate = (value, dateFormat) => {
    if (!value) {
        return null;
    }
    return moment(value, dateFormat);
}
export default valueToDate;