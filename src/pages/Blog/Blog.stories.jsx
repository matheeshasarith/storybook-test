import React from 'react';

import { Blog } from './Blog';
import * as HeaderStories from '../../components/Header/Header.stories';

export default {
  title: 'Pages/Blog',
  component: Blog,
};

const Template = (args) => <Blog {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  ...HeaderStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
};
