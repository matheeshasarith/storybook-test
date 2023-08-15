import React from 'react';

import { Form } from './Form';

export default {
  title: 'Components/Form',
  component: Form,
};

const Template = (args) => <Form {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {},
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
