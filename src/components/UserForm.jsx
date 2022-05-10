import React, { useState } from 'react';

const UserForm = (props) => {
    const [ firstName, setfirstName ] = useState('');
    const [ lastName, setlastName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ confirmPassword, setconfirmPassword ] = useState('');


    return (
        <div>
            <label htmlFor="firstName">First Name: </label>
            <input type="text" onChange={ (e) => setfirstName(e.target.value) } value={ firstName } />
            <br />

            <label htmlFor="lastName">Last Name: </label>
            <input type="text" onChange={ (e) => setlastName(e.target.value) } value={ lastName } />
            <br />

            <label htmlFor="email">Email: </label>
            <input type="text" onChange={ (e) => setEmail(e.target.value)} value={ email }  />
            <br />

            <label htmlFor="password">Password: </label>
            <input type="password" onChange={ (e) => setPassword(e.target.value) } value={ password }/>
            <br />

            <label htmlFor="confirmPassword">Confirm Password: </label>
            <input type="password" onChange={ (e) => setconfirmPassword(e.target.value) } value={ confirmPassword }/>
            <br />

            <h2>Your Form Data:</h2>
            <p>First Name: { firstName }</p>
            <p>First Name: { lastName }</p>
            <p>First Name: { email }</p>
            <p>First Name: { password }</p>
            <p>First Name: { confirmPassword }</p>
        </div>
    )
} 

export default UserForm;