import { arrayOf, shape, number, string, oneOf } from 'prop-types';
import React from 'react';
import { usdNumberFormat } from '../../helpers/number-helper';
import { Collapse } from '../../components';
import { contentsToCollapseData, calculateTotalAmountFor } from './utils';

const RenterContentsCalculator = (props) => {
  const { contents } = props;

  const data = contentsToCollapseData(contents, {
    onDelete: () =>
      console.log('RenterContentsCalculator: needs to handle delete action...')
  });

  const contentTotalValue = calculateTotalAmountFor(contents);
  const footerProps = {
    header: `TOTAL`,
    extra: usdNumberFormat(contentTotalValue)
  };

  return <Collapse data={data} expandAllByDefault footerProps={footerProps} />;
};

RenterContentsCalculator.propTypes = {
  contents: arrayOf(
    shape({
      id: string.isRequired,
      description: string.isRequired,
      value: number.isRequired,
      category: oneOf(['Kitchen', 'Electronics', 'Clothing'])
    })
  )
};

export default RenterContentsCalculator;
