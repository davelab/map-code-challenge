import styled, { css } from 'styled-components';

export const resetStyle = css`
  margin: 0;
  border: 0;
  padding: 0;
  display: inline-block;
  vertical-align: middle;
  white-space: normal;
  background: none;
  line-height: 1;
  box-sizing: border-box;
  :focus {
    outline: none;
  }
`;

export const TextField = styled.input`
  ${resetStyle};
  padding: 8px;
  background-color: #f3f0f7;
  display: flex;
  align-items: center;
  height: 32px;
  width: 100%;
  font-size: 16px;
  color: #252525;
  border-radius: 4px;
  ::placeholder {
    color: #8596a6;
  }
`;
