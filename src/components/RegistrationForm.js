import React, { useState } from 'react';
import axios from 'axios';
import { StyledBackground, StyledFormContainer, StyledForm, StyledInput, StyledButton } from './StyledComponents';

const RegistrationForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/register', { email, password });
      setMessage('User registered successfully');
      setEmail('');
      setPassword('');
    } catch (error) {
      setMessage('Registration failed');
    }
  };

  return (
    <StyledBackground>
      <StyledFormContainer>
        <StyledForm onSubmit={handleSubmit}>
          <div>
            <StyledInput
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
          </div>
          <div>
            <StyledInput
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
          </div>
          <StyledButton type="submit">Register</StyledButton>
        </StyledForm>
        {message && <p>{message}</p>}
      </StyledFormContainer>
    </StyledBackground>
  );
};

export default RegistrationForm;
