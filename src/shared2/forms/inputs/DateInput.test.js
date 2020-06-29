import renderer from 'react-test-renderer';
import { shallow, configure, render, mount } from 'enzyme';
import TestDateInput from './DateInput';
import React from 'react';
import moment from 'moment';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const now = require.requireActual('moment-timezone').tz.setDefault('America/Los_Angeles');

const defaultProps = { minDate: now(0) };

const DateInput = (props) => <TestDateInput {...defaultProps} {...props} />;

/*
it('render correctly date component', () => {
    const DateInputComponent = renderer.create(<DateInput />).toJSON();
    expect(DateInputComponent).toMatchSnapshot();
});
it('check month and year dropdwons displayed', () => {
    const props = { showMonthYearsDropdowns: true };
    const DateInputComponent = mount(<DateInput {...props} />);
    const DatePicker = DateInputComponent.find('.datepicker');
    expect(DatePicker.hasClass('react-datepicker-hide-month')).toEqual(true);
});

it('render date input correctly with null value', () => {
    const props = { value: null };
    const DateInputComponent = mount(<DateInput {...props} />);
    expect((DateInputComponent).prop('value')).toEqual(null);
});

it('check the type of value', () => {
    const props = { value: '10.03.2018' };
    const DateInputComponent = mount(<DateInput {...props} />);
    expect(DateInputComponent.prop('value')).toBeString();
});
*/
/**
 * Check the onChange event
 * for that 
 * => mock onChange callback
 * => render date input component 
 * => then simulate change event with new target value 
 * => and finally check that onChange event have been called with new value.
 * 
 */
it('check the onChange callback', () => {
    const onChange = jest.fn();
    const props = {
        value: '20.01.2018',
        onChange
    };
    const DateInputComponent = mount(<DateInput {...props} />).find('input');
    DateInputComponent.simulate('change', { target: { value: moment('2018-01-22') } });

    expect(onChange).toHaveBeenCalledWith('22.01.2018');
});

Ensure datepicker popup opens after click on date input, for that find date input => simulate click event => and expect popup with class .react - datepicker is present.
    it('check DatePicker popup open', () => {
        const DateComponent = mount(<DateInput />),
            dateInput = DateComponent.find("input[type='text']");
        dateInput.simulate('click');
        expect(DateComponent.find('.react-datepicker')).toHaveLength(1);
    });
    
/*
describe('Render DateInput', () => {
    it('render correctly date component', () => {
        const DateInputComponent = renderer.create(<DateInput />).toJSON();
        expect(DateInputComponent).toMatchSnapshot();
    });

    it('render date input correctly with empty value', () => {
        const props = {
            value: null
        },
            DateInputComponent = mount(<DateInput {...props} />);
        expect((DateInputComponent).prop('value')).toEqual(null);
    });

    it('check the onChange callback', () => {
        const onChange = jest.fn(),
            props = {
                value: '20.01.2018',
                onChange
            },
            DateInputComponent = mount(<DateInput {...props} />).find('input');
        DateInputComponent.simulate('change', { target: { value: moment('2018-01-22') } });
        expect(onChange).toHaveBeenCalledWith('22.01.2018');
    });

    it('check the type of value', () => {
        const props = {
            value: '10.03.2018'
        },
            DateInputComponent = mount(<DateInput {...props} />);
        expect(DateInputComponent.prop('value')).toBeString();
    });

    it('check DatePicker popup open', () => {
        const DateComponent = mount(<DateInput />),
            dateInput = DateComponent.find("input[type='text']");
        dateInput.simulate('click');
        expect(DateComponent.find('.react-datepicker')).toHaveLength(1);
    });

    it('check month and years dropdowns displayed', () => {
        const props = {
            showMonthYearsDropdowns: true
        },
            DateInputComponent = mount(<DateInput {...props} />).find('.datepicker');
        expect(DateInputComponent.hasClass('react-datepicker-hide-month')).toEqual(true);
    });
});
*/