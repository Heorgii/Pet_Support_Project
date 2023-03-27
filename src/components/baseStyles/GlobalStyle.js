import 'modern-normalize';
import { createGlobalStyle } from 'styled-components';
import { baseColor } from 'components/baseStyles/Variables.styled';

export const GlobalStyle = createGlobalStyle`
 body{
  height: 100vh;
   margin: 0;
   font-family: -apple-system, BlinkMacSystemFont, 'Manrope Medium', 'Manrope Bold', 'Manrope SemiBold', 
   'Manrope Regular', 'Poppins Regular','Poppins Bold', 'Inter Regular' ,'Inter Medium', 'Inter Bold',
   'Montserrat Regular', 'Montserrat Medium', sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;

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

 img{
    display:block;
    max-width: 100%;
    height: auto;
 }

#popup-root {
    z-index: 45;
    width: 100vw;
    height: 100vh;
    opacity: 1;
    visibility: visible;
    background-color: #0000006b;
    transition: opacity .3s linear 50ms, visibility .3s linear 50ms; 
    position: fixed;
    top: 0;
    left: 0;
}
#popup-root.is-hide{
  pointer-events: none;
  /* display: none; */
  opacity: 0;
  visibility: hidden;
  width: 0;
  height: 0;
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
