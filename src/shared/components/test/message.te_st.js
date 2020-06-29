
import React from 'react';
import { shallow, configure, render } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import Message from '../message';

configure({ adapter: new Adapter() });
const props = {
   text: "text-to-test",
   type: "type-to-test"
}
/*
test('Message render correctly the sent TEXT as props.', () => {
   const MessageComponent = shallow(<Message type="type-to-test" text="text-to-test" />);
   expect(MessageComponent.text()).toEqual('text-to-test');
});

test('Message render correctly the sent CLASS as props.', () => {
   const MessageComponent = shallow(<Message type={props.type} text={props.text} />);
   expect(MessageComponent.hasClass('message--' + props.type)).toEqual(true);
});
*/
test('Render correctly message', () => {
   const MessageComponent = renderer.create(<Message type={props.type} text={props.text} />).toJSON();
   expect(MessageComponent).toMatchSnapshot();
});
