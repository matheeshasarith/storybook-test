import React from 'react';
import PropTypes from 'prop-types';

// import { Button } from '../Button/Button';
// import './footer.css';

export const Footer = ({ user }) => (
  <footer>
    <div className="wrapper">
      <div>
        <h1>Footer</h1>
        <p>Author: Hege Refsnes
          <br/>
            <a href="mailto:hege@example.com">hege@example.com</a>
        </p>
      </div>
    </div>
  </footer>
);

Footer.propTypes = {
  user: PropTypes.shape({}),
};

Footer.defaultProps = {
  user: null,
};
