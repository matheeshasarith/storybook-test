import React from 'react';

import { About } from './About';
import * as HeaderStories from '../../components/Header/Header.stories';

export default {
  title: 'Pages/About',
  component: About,
};

const Template = (args) => <About {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  ...HeaderStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
};
