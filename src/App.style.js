import { createGlobalStyle } from 'styled-components';

const AppStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

  body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    font-family: 'Roboto', sans-serif;
  }
`;

export default AppStyle;
