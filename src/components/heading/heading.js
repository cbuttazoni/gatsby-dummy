import React from 'react';
import PropTypes from 'prop-types';
import styles from './heading.module.scss';

const Heading = ({ title, subTitle, description }) => {
  return (
    <div className={styles.heading_wrapper}>
      <h1>{title}</h1>
      {subTitle && <h4>{subTitle}</h4>}
      {description && <p>{description}</p>}
    </div>
  );
};

Heading.defaultProps = {
  subTitle: '',
  description: '',
};
Heading.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  description: PropTypes.string,
};

export default Heading;
