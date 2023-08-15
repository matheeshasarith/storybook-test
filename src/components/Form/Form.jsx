import React from 'react';
import PropTypes from 'prop-types';

import './form.css';

export const Form = ({ user }) => (
    <container>
        <form>
            <div>
                <row>
                    <label htmlFor="fname">First Name</label>
                    <input type="text" />
                    <label htmlFor="lname">Last Name</label>
                    <input type="text" />
                </row>
            </div>
            <div>
                <row>
                    <label htmlFor="email">Email</label>
                    <input type="email" />
                    <label htmlFor="password">Password</label>
                    <input type="password" />
                </row>
            </div>
        </form>
    </container>
);

Form.propTypes = {
    user: PropTypes.shape({}),

};

Form.defaultProps = {
    user: null,
};
