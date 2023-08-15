import React from 'react';

import { TextInput } from './TextInput';

export default {
  title: 'Components/TextInput',
  component: TextInput,
};

const Template = (args) => <TextInput {...args} />;

export const Default = Template.bind({});
Default.args = {};