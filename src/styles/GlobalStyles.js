import { createGlobalStyle } from "styled-components";

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
	font: inherit;
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
  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  src: url('../assets/fonts/roboto/roboto-v30-latin-regular.woff2') format('woff2'), /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
       url('../assets/fonts/roboto/roboto-v30-latin-regular.ttf') format('truetype'); /* Chrome 4+, Firefox 3.5+, IE 9+, Safari 3.1+, iOS 4.2+, Android Browser 2.2+ */
}
/* roboto-900 - latin */
@font-face {
  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 900;
  src: url('../assets/fonts/roboto/roboto-v30-latin-900.woff2') format('woff2'), /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
       url('../assets/fonts/roboto/roboto-v30-latin-900.ttf') format('truetype'); /* Chrome 4+, Firefox 3.5+, IE 9+, Safari 3.1+, iOS 4.2+, Android Browser 2.2+ */
}
/* roboto-900italic - latin */
@font-face {
  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
  font-family: 'Roboto';
  font-style: italic;
  font-weight: 900;
  src: url('../assets/fonts/roboto/roboto-v30-latin-900italic.woff2') format('woff2'), /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
       url('../assets/fonts/roboto/roboto-v30-latin-900italic.ttf') format('truetype'); /* Chrome 4+, Firefox 3.5+, IE 9+, Safari 3.1+, iOS 4.2+, Android Browser 2.2+ */
}

`;

export default GlobalStyles;
