import React, { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { setPageNumber, getBusinessesTh } from '../../../redux/reducers/businesses';
import BusinessesList from './BusinessesList';

const BusinessListContainer = ({
  pageNumber, countPages, onPageChanged,
  businesses, getBusinesses,
}) => {
  useEffect(() => {
    getBusinesses(pageNumber);
  }, [pageNumber]);

  return (
    <BusinessesList
      pageNumber={pageNumber}
      countPages={countPages}
      onPageChanged={onPageChanged}
      businesses={businesses}
    />
  );
};

BusinessListContainer.defaultProps = {
  pageNumber: 0,
  countPages: 1,
  onPageChanged: () => true,
  businesses: [],
  getBusinesses: () => true,
};

BusinessListContainer.propTypes = {
  pageNumber: PropTypes.number,
  countPages: PropTypes.number,
  onPageChanged: PropTypes.func,
  businesses: PropTypes.instanceOf(Array),
  getBusinesses: PropTypes.func,
};

const mapStateToProps = (state) => ({
  pageNumber: state.business.pageNumber,
  countPages: state.business.countPages,
  businesses: state.business.businesses,
});

export default connect(mapStateToProps, {
  onPageChanged: setPageNumber,
  getBusinesses: getBusinessesTh,
})(BusinessListContainer);
