import React from 'react';
import { PropTypes } from 'prop-types';
import PaginatorContainer from '../../common/Paginator';
import BusinessItem from './BusinessItem';

const BusinessesList = ({
  pageNumber, countPages, onPageChanged,
  businesses,
}) => {
  const arrayBusinesses = businesses.map((item) => (
    <BusinessItem
      key={item.id}
      id={item.id}
      name={item.name}
      path={item.path}
    />
  ));
  return (
    <>
      {arrayBusinesses}
      <PaginatorContainer
        pageNumber={pageNumber}
        countPages={countPages}
        onPageChanged={onPageChanged}
      />
    </>
  );
};

BusinessesList.defaultProps = {
  pageNumber: 0,
  countPages: 1,
  onPageChanged: () => true,
  businesses: [],
};

BusinessesList.propTypes = {
  pageNumber: PropTypes.number,
  countPages: PropTypes.number,
  onPageChanged: PropTypes.func,
  businesses: PropTypes.instanceOf(Array),
};

export default BusinessesList;
