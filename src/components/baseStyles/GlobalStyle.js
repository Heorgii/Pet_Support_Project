import 'modern-normalize';
import { createGlobalStyle } from 'styled-components';
import { baseColor } from 'components/baseStyles/Variables.styled';

export const GlobalStyle = createGlobalStyle`
 body{
   margin: 0;
   font-family: -apple-system, BlinkMacSystemFont, 'Manrope Medium', 'Manrope Bold', 'Manrope SemiBold', 
   'Manrope Regular', 'Poppins Regular','Poppins Bold', 'Inter Regular' ,'Inter Medium', 'Inter Bold',
   'Montserrat Regular', 'Montserrat Medium', sans-serif;
   background-color: ${baseColor.colors.mainBg};
 }

 h1,h2,h3,h4,h5,h6,p{
    padding: 0;
    margin: 0;
 }

 ul{
    padding: 0;
    margin: 0;
    list-style: none;
 }
#popup-root {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0,0,0,0.5);
  width: 100%;
  height: 100%;
}
#popup-root.is-hide{
  display: none
}
  /* body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
} */
`;
