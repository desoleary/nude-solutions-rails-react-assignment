import React from 'react';
import { RenterContentsCalculator } from '../../app/javascript/pages';

const Template = (args) => <RenterContentsCalculator {...args} />;

export const Default = Template.bind({});

export default {
  title: 'Pages/RenterContentsCalculator',
  component: RenterContentsCalculator
};
