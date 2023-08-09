import React from 'react';
import PropTypes from 'prop-types';
import './card.css';

/**
 * Primary UI component for user interaction
 */
export const Card = ({ primary, backgroundColor, size, label, ...props }) => {
  const mode = primary ? 'storybook-card--primary' : 'storybook-card--secondary';
  return (
    <card
      type="card"
      className={['storybook-card', `storybook-card--${size}`, mode].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </card>
  );
};

Card.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the card be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Card contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Card.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};
