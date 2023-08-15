import React from 'react';

import { Card } from './Card';

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Card',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Card',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Card',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Card',
};

export const CustomColor = Template.bind({});
CustomColor.args = {
  label: "Custom Color",
  backgroundColor: "green",
};
