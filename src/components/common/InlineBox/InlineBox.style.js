import styled from 'styled-components';

export const InlineBox = styled.div`
  display: flex;
  justify-content: ${({ justifyContent }) =>
    justifyContent || 'flex-start'};
  align-items: ${({ alignItems }) => alignItems || 'flex-start'};
`;
