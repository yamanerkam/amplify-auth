import React, { useState } from 'react';

function SignupForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Implement form submission logic here (e.g., send data to server)
        alert(`Signed up with email: ${email}`);
    };

    return (
        <div className="signup-form">
            <h2>Sign Up for [Your Service]</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email Address:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input
                    type="password"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
                <button type="submit">Sign Up</button>
            </form>
            <p>
                By signing up, you agree to our <a href="#">Privacy Policy</a>.
            </p>
        </div>
    );
}

export default SignupForm;
