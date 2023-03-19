import 'modern-normalize';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
 body{
   margin: 0;
   font-family: 'Manrope Medium', 'Manrope Bold', 'Manrope SemiBold', 
   'Manrope Regular', 'Poppins Regular','Poppins Bold', 'Inter Regular' ,'Inter Medium', 'Inter Bold',
   'Montserrat Regular', 'Montserrat Medium', sans-serif;
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
