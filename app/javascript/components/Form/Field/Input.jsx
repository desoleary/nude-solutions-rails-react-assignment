import { Input as InputAntd } from 'antd';
import { object, string } from 'prop-types';
import React from 'react';
import FormItem from './FormItem';

const Input = (props) => {
  const { label, name, rules, ...inputProps } = props;

  return (
    <FormItem label={label} name={name} rules={rules}>
      <InputAntd {...inputProps} placeholder={label} />
    </FormItem>
  );
};

Input.propTypes = {
  label: string.isRequired,
  name: string.isRequired,
  rules: object
};

export default Input;
