import { contents } from '../../app/javascript/pages/RenterContentsEditor/seeds';
import React from 'react';
import { RenterContentsEditor } from '../../app/javascript/pages';

const props = {
  contents
};

const Template = (args) => <RenterContentsEditor {...args} />;

export const Default = Template.bind({});

Default.args = { ...props };

export default {
  title: 'Pages/RenterContentsEditor',
  component: RenterContentsEditor
};
