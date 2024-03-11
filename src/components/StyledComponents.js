import styled from 'styled-components';

export const StyledBackground = styled.div`
  background-image: url('../assets/image1.jpg'); /* Adjust the path to your background image */
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
`;

export const StyledFormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const StyledForm = styled.form`
  background-color: rgba(183, 199, 22, 0.2);
  padding: 80px; 
  border-radius: 8px;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 15px;
  margin-bottom: 10px; 
  border: none;
  border-radius: 4px;
`;

export const StyledButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: yellow;
  border: none;
  border-radius: 45px;
  cursor: pointer;
`;
