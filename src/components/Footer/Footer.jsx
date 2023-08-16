import React from 'react';
import PropTypes from 'prop-types';
import './footer.css';

export const Footer = ({ user }) => (
  <footer className="footer">
 <hr/>
    <div className="wrapper">
      <div>
       
        <h1>Footer</h1>
        <p>Author: Matheesha Sarith Adhikari
          <br/>
          <a href="mailto:sarith.c@intervest.lk">sarith.c@intervest.lk</a>
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
