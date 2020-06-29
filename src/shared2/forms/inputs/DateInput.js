import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';
import valueToDate from '../../utils/valueToDate'
import dateToValue from '../../utils/dateToValue';
import moment from 'moment';
import React from 'react';

const propTypes = {
    inputClassName: PropTypes.string,
    monthsShown: PropTypes.number,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    name: PropTypes.string,
    dateFormat: PropTypes.string,
    value: PropTypes.string,
    showMonthYearsDropdowns: PropTypes.bool,
    minDate: PropTypes.object
}
const defaultProps = {
    inputClassName: 'input-custom',
    monthsShown: 1,
    dateFormat: 'DD.MM.YYYY',
    showMonthYearsDropdowns: false,
    minDate: moment()
};

export default function DateInput(props) {
    const {
        inputClassName,
        monthsShown,
        placeholder,
        disabled,
        name,
        value,
        dateFormat,
        onBlur,
        showMonthYearsDropdowns,
        minDate
    } = props;

    return (
        <div className={`datepicker ${showMonthYearsDropdowns ? 'react-datepicker-hide-month' : ''}`}>
            <DatePicker
                name={name}
                id={name}
                selected={valueToDate(value, dateFormat)}
                onChange={(value) => props.onChange(dateToValue(value, dateFormat))}
                onBlur={onBlur}
                disabled={disabled}
                className={inputClassName}
                dateFormat={dateFormat}
                monthsShown={monthsShown}
                placeholderText={placeholder}
                showYearDropdown={showMonthYearsDropdowns}
                showMonthDropdown={showMonthYearsDropdowns}
                dropdownMode="select"
                minDate={minDate}
            />
        </div>
    );
}

DateInput.propTypes = propTypes;
DateInput.defaultProps = defaultProps;
