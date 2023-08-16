import React from 'react';
import PropTypes from 'prop-types';

import './form.css';

export const Form = ({ user }) => (

    <div>
        <form action="/">
            <label for="fname">First Name</label>
            <input type="text" id="fname" name="firstname" placeholder="Your first name.." />

            <label for="lname">Last Name</label>
            <input type="text" id="lname" name="lastname" placeholder="Your last name.." />

            <label for="email">Email</label>
            <input type="email" id="lname" name="email" placeholder="Your email.." />

            <label for="lname">Password</label>
            <input type="password" id="lname" name="password" placeholder="Your password.." />

            <label for="country">Country</label>
            <select id="country" name="country">
                <option value="australia">Sri lanka</option>
                <option value="canada">India</option>
                <option value="usa">UK</option>
            </select>

            <input type="submit" value="Submit" />
        </form>
    </div>
);

Form.propTypes = {
    user: PropTypes.shape({}),

};

Form.defaultProps = {
    user: null,
};
