import React from 'react';
import { PropTypes } from 'prop-types';
import Style from './Paginator.module.css';
import Paginator from './Paginator';

const PaginatorContainer = ({ countPages, pageNumber, onPageChanged }) => {
  let pages = [];
  if (countPages >= 15) {
    if (pageNumber < 8) {
      for (let i = 1; i <= 15; i += 1) {
        pages.push(i);
      }
    } else if (pageNumber > countPages - 7) {
      for (let i = countPages - 15; i <= countPages; i += 1) {
        pages.push(i);
      }
    } else {
      for (let i = pageNumber - 7; i <= pageNumber + 7; i += 1) {
        pages.push(i);
      }
    }
  } else {
    for (let i = 1; i <= countPages; i += 1) {
      pages.push(i);
    }
  }

  pages = pages.map((item, index) => (
    <span
      key={item}
      role="button"
      tabIndex={0}
      onClick={() => onPageChanged(index)}
      className={pageNumber === index ? Style.selectedPage : null}
      onKeyDown={
        (e) => {
          if (e.keyCode === 13) {
            onPageChanged(index);
          }
        }
      }
    >
      {item}
    </span>
  ));

  return (
    <Paginator pages={pages} />
  );
};

PaginatorContainer.defaultProps = {
  pageNumber: 1,
  countPages: 1,
  onPageChanged: () => true,
};

PaginatorContainer.propTypes = {
  pageNumber: PropTypes.number,
  countPages: PropTypes.number,
  onPageChanged: PropTypes.func,
};

export default PaginatorContainer;
