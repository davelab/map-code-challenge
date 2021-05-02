import styled, { css } from 'styled-components';

const sizesMap = {
  sm: '4px',
  md: '8px',
  lg: '16px',
};

const style = ({ size }) => css`
  padding: ${sizesMap[size]};
`;

export const Spacer = styled.div`
  ${style}
`;
