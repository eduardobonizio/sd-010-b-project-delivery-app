import styled from 'styled-components';

export const Container = styled.div`
  width: 90%;
  margin: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  `;

export const Label = styled.label`
  font-size: 1.75rem;
  font-weight: bold;
  color: var(--primary);

  margin: 0.25rem;
`;

export const Input = styled.input`
  background-color: var(--primary-25);

  width: 100%;

  margin-top: 0.25rem;
  padding: 0.25rem 0.5rem;

  color: var(--primary);
  border-radius: 8px;
  border: none;

  ::placeholder {
    color: var(--primary-40);
  }

  :focus {
    outline: none;
  }
`;
