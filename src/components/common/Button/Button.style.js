import styled, { css } from 'styled-components';

export const resetStyle = css`
  outline: none;
  cursor: pointer;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  :focus {
    outline: none;
  }
`;

export const Button = styled.button`
  ${resetStyle}
  height: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 16px;
  border-radius: 4px;
  box-shadow: 0 1px 2px 0 rgba(12, 162, 234, 0.3);
  background: rgb(16, 162, 234);
  background: linear-gradient(
    0deg,
    rgba(16, 162, 234, 1) 0%,
    rgba(15, 153, 232, 1) 100%
  );
  :disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
