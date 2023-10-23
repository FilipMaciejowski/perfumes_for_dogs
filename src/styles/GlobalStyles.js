import { createGlobalStyle } from "styled-components";
import Roboto400Eot from "../assets/fonts/roboto/roboto-v30-latin-regular.eot";
import Roboto400Ttf from "../assets/fonts/roboto/roboto-v30-latin-regular.ttf";
import Roboto400Woff from "../assets/fonts/roboto/roboto-v30-latin-regular.woff";
import Roboto400Woff2 from "../assets/fonts/roboto/roboto-v30-latin-regular.woff2";
import Roboto400Svg from "../assets/fonts/roboto/roboto-v30-latin-regular.svg";
import Roboto500Eot from "../assets/fonts/roboto/roboto-v30-latin-500.eot";
import Roboto500Ttf from "../assets/fonts/roboto/roboto-v30-latin-500.ttf";
import Roboto500Woff from "../assets/fonts/roboto/roboto-v30-latin-500.woff";
import Roboto500Woff2 from "../assets/fonts/roboto/roboto-v30-latin-500.woff2";
import Roboto500Svg from "../assets/fonts/roboto/roboto-v30-latin-500.svg";
import Roboto900Eot from "../assets/fonts/roboto/roboto-v30-latin-900.eot";
import Roboto900Ttf from "../assets/fonts/roboto/roboto-v30-latin-900.ttf";
import Roboto900Woff from "../assets/fonts/roboto/roboto-v30-latin-900.woff";
import Roboto900Woff2 from "../assets/fonts/roboto/roboto-v30-latin-900.woff2";
import Roboto900Svg from "../assets/fonts/roboto/roboto-v30-latin-900.svg";
import Roboto900ItalicEot from "../assets/fonts/roboto/roboto-v30-latin-900italic.eot";
import Roboto900ItalicTtf from "../assets/fonts/roboto/roboto-v30-latin-900italic.ttf";
import Roboto900ItalicWoff from "../assets/fonts/roboto/roboto-v30-latin-900italic.woff";
import Roboto900ItalicWoff2 from "../assets/fonts/roboto/roboto-v30-latin-900italic.woff2";
import Roboto900ItalicSvg from "../assets/fonts/roboto/roboto-v30-latin-900italic.svg";

const GlobalStyles = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	vertical-align: baseline;
  
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

/* roboto-regular - latin */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  src: url(${Roboto400Eot}); /* IE9 Compat Modes */
  src: url(${Roboto400Eot}) format('embedded-opentype'), /* IE6-IE8 */
       url(${Roboto400Woff2}) format('woff2'), /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
       url(${Roboto400Woff}) format('woff'), /* Chrome 5+, Firefox 3.6+, IE 9+, Safari 5.1+, iOS 5+ */
       url(${Roboto400Ttf}) format('truetype'), /* Chrome 4+, Firefox 3.5+, IE 9+, Safari 3.1+, iOS 4.2+, Android Browser 2.2+ */
       url(${Roboto400Svg}) format('svg'); /* Legacy iOS */
}
/* roboto-500 - latin */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  src: url(${Roboto500Eot}); /* IE9 Compat Modes */
  src: url(${Roboto500Eot}) format('embedded-opentype'), /* IE6-IE8 */
       url(${Roboto500Woff2}) format('woff2'), /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
       url(${Roboto500Woff}) format('woff'), /* Chrome 5+, Firefox 3.6+, IE 9+, Safari 5.1+, iOS 5+ */
       url(${Roboto500Ttf}) format('truetype'), /* Chrome 4+, Firefox 3.5+, IE 9+, Safari 3.1+, iOS 4.2+, Android Browser 2.2+ */
       url(${Roboto500Svg}) format('svg'); /* Legacy iOS */
}
/* roboto-900 - latin */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 900;
  src: url(${Roboto900Eot}); /* IE9 Compat Modes */
  src: url(${Roboto900Eot}) format('embedded-opentype'), /* IE6-IE8 */
       url(${Roboto900Woff2}) format('woff2'), /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
       url(${Roboto900Woff}) format('woff'), /* Chrome 5+, Firefox 3.6+, IE 9+, Safari 5.1+, iOS 5+ */
       url(${Roboto900Ttf}) format('truetype'), /* Chrome 4+, Firefox 3.5+, IE 9+, Safari 3.1+, iOS 4.2+, Android Browser 2.2+ */
       url(${Roboto900Svg}) format('svg'); /* Legacy iOS */
}
/* roboto-900italic - latin */
@font-face {
  font-family: 'Roboto';
  font-style: italic;
  font-weight: 900;
  src: url(${Roboto900ItalicEot}); /* IE9 Compat Modes */
  src: url(${Roboto900ItalicEot}) format('embedded-opentype'), /* IE6-IE8 */
       url(${Roboto900ItalicWoff2}) format('woff2'), /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
       url(${Roboto900ItalicWoff}) format('woff'), /* Chrome 5+, Firefox 3.6+, IE 9+, Safari 5.1+, iOS 5+ */
       url(${Roboto900ItalicTtf}) format('truetype'), /* Chrome 4+, Firefox 3.5+, IE 9+, Safari 3.1+, iOS 4.2+, Android Browser 2.2+ */
       url(${Roboto900ItalicSvg}) format('svg'); /* Legacy iOS */
}

`;

export default GlobalStyles;
