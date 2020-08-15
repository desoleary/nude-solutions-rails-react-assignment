import { DeleteFilled as DeleteFilledAntd } from '@ant-design/icons';
import { Collapse, List, Popconfirm, Typography } from 'antd/es';

import { chain, identity, kebabCase, noop } from 'lodash-es';
import { func, number, oneOf, oneOfType, string, bool } from 'prop-types';
import React from 'react';

import { usdNumberFormat } from '../../app/javascript/helpers/number-helper';

const DeleteFilled = (props) => {
  const { style = { color: 'red' }, ...rest } = props;
  return <DeleteFilledAntd {...rest} style={style} />;
};

const { Panel } = Collapse;
const { Item } = List;
const { Text } = Typography;

const handleChange = (key) => {
  console.log(key);
};

const contents = [
  { id: 1, description: 'TV', value: 2000.0, category: 'Electronics' },
  { id: 2, description: 'Playstation', value: 400.0, category: 'Electronics' },
  { id: 3, description: 'Stereo', value: 1600.0, category: 'Electronics' },
  { id: 4, description: 'Shirts', value: 1100.0, category: 'Clothing' },
  { id: 5, description: 'Jeans', value: 1100.0, category: 'Clothing' },
  { id: 6, description: 'Pots and Pans', value: 3000.0, category: 'Kitchen' },
  { id: 7, description: 'Flatware', value: 500.0, category: 'Kitchen' },
  { id: 8, description: 'Knife Set', value: 500.0, category: 'Kitchen' },
  { id: 9, description: 'Misc', value: 1000.0, category: 'Kitchen' }
];

const calculateTotalAmountFor = (contents, callback = identity) => {
  return chain(contents).map('value').sum().thru(callback).value();
};

const DeleteContentAction = (props) => {
  const { id, onDelete } = props;

  return (
    <Popconfirm
      title='Are you sure？'
      icon={<DeleteFilled />}
      onConfirm={() => onDelete(id)}>
      <DeleteFilled />
    </Popconfirm>
  );
};

DeleteContentAction.defaultProps = {
  onDelete: noop
};

DeleteContentAction.propTypes = {
  id: oneOfType([number, string]).isRequired,
  onDelete: func
};

const mapContentsToCollapseItems = (contents) =>
  chain(contents)
    .map(({ id, description, value }) => {
      const currencyAmount = usdNumberFormat(value);
      return {
        id,
        text: description,
        extra: (
          <div>
            {currencyAmount + ' '}
            <DeleteContentAction
              id={id}
              onDelete={(id) => console.log(`deleting content with id: ${id}`)}
            />
          </div>
        )
      };
    })
    .value();

const contentsToCollapseData = chain(contents)
  .groupBy('category')
  .reduce((memo, category_contents, category) => {
    const categoryValue = calculateTotalAmountFor(category_contents);
    const items = mapContentsToCollapseItems(category_contents);

    return [
      ...memo,
      {
        id: kebabCase(category),
        header: category,
        extra: usdNumberFormat(categoryValue),
        items,
        value: categoryValue
      }
    ];
  }, [])
  .value();

const contentTotalValue = calculateTotalAmountFor(contentsToCollapseData);
const collapseFooterData = {
  header: `TOTAL`,
  extra: usdNumberFormat(contentTotalValue)
};

const ListItem = ({ text, extra, actions, id }) => {
  const key = `list-item-${id}`;
  return (
    <Item extra={extra} actions={actions} key={key}>
      <Text>{text}</Text>
    </Item>
  );
};

const CollapseFooter = ({ header, extra }) => (
  <Panel header={header} extra={extra} key='panel-footer' disabled />
);

const CollapseContainer = (props) => {
  const { data, footer, expandAllByDefault } = props;
  let defaultActiveKey = [];
  const panelItems = data.map(({ id, ...rest }) => {
    const key = `panel-${id}`;
    if (expandAllByDefault) {
      defaultActiveKey.push(key);
    }
    return {
      key,
      ...rest
    };
  });

  return (
    <Collapse
      {...props}
      onChange={handleChange}
      defaultActiveKey={defaultActiveKey}>
      {panelItems.map(({ key, header, extra, items }) => {
        return (
          <Panel header={header} extra={extra} key={key}>
            <List
              dataSource={items}
              size='small'
              split={false}
              renderItem={ListItem}
            />
          </Panel>
        );
      })}
      {footer && <CollapseFooter {...footer} />}
    </Collapse>
  );
};

CollapseContainer.defaultProps = {
  expandIconPosition: 'right',
  expandAllByDefault: false
};

CollapseContainer.propTypes = {
  expandIconPosition: oneOf(['left', 'right']),
  expandAllByDefault: bool
};

const Template = (args) => <CollapseContainer {...args} />;

export const Default = Template.bind();

Default.args = {
  data: contentsToCollapseData,
  footer: collapseFooterData,
  expandAllByDefault: true
};

export default {
  title: 'Components/CollapseContainer',
  component: CollapseContainer
};
