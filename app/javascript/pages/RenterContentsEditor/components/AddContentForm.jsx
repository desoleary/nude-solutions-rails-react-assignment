import React from 'react';

import { noop } from 'lodash-es';
import { func } from 'prop-types';
import { CATEGORIES } from '../../../constants';
import { Form } from '../../../components';

const fields = [
  {
    name: 'description',
    label: 'Description'
  },
  {
    name: 'value',
    label: 'Value',
    uiWidget: 'number'
  },
  {
    name: 'category',
    label: 'Category',
    uiWidget: 'select',
    options: CATEGORIES
  }
];

const AddContentForm = (props) => {
  const { onAdd } = props;

  return (
    <Form
      fields={fields}
      onSubmit={onAdd}
      submitBtnProps={{
        label: 'Add'
      }}
    />
  );
};

AddContentForm.defaultProps = {
  onAdd: noop
};

AddContentForm.propTypes = {
  onAdd: func
};

export default AddContentForm;
