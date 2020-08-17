import React from 'react';
import { RenterContentsEditor } from '../../app/javascript/pages';

const props = {
  contents: [
    { id: 1, description: 'TV', value: 2000.0, category: 'Electronics' },
    {
      id: 2,
      description: 'Playstation',
      value: 400.0,
      category: 'Electronics'
    },
    { id: 3, description: 'Stereo', value: 1600.0, category: 'Electronics' },
    { id: 4, description: 'Shirts', value: 1100.0, category: 'Clothing' },
    { id: 5, description: 'Jeans', value: 1100.0, category: 'Clothing' },
    { id: 6, description: 'Pots and Pans', value: 3000.0, category: 'Kitchen' },
    { id: 7, description: 'Flatware', value: 500.0, category: 'Kitchen' },
    { id: 8, description: 'Knife Set', value: 500.0, category: 'Kitchen' },
    { id: 9, description: 'Misc', value: 1000.0, category: 'Kitchen' }
  ]
};

const Template = (args) => <RenterContentsEditor {...args} />;

export const Default = Template.bind({});

Default.args = { ...props };

export default {
  title: 'Pages/RenterContentsEditor',
  component: RenterContentsEditor
};

// const data = contentsToCollapseData(contents, { onDelete: handleDelete });

// const contentTotalValue = calculateTotalAmountFor(contents);
// const collapseFooterData = {
//   header: `TOTAL`,
//   extra: usdNumberFormat(contentTotalValue)
// };

// const ListItem = ({ text, extra, actions, id }) => {
//   const key = `list-item-${id}`;
//   return (
//     <Item extra={extra} actions={actions} key={key}>
//       <Text>{text}</Text>
//     </Item>
//   );
// };

// const CollapseFooter = ({ header, extra }) => (
//   <Panel header={header} extra={extra} key='panel-footer' disabled />
// );

// CollapseContainer.defaultProps = {
//   expandIconPosition: 'right',
//   expandAllByDefault: false
// };
//
// CollapseContainer.propTypes = {
//   expandIconPosition: oneOf(['left', 'right']),
//   expandAllByDefault: bool
// };
