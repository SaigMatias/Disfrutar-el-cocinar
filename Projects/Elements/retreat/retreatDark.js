import elemCreator from "./elemCreator.js";

const linkPortfolio = "https://matias-saig-portafolio.vercel.app/";

const retreatDark = elemCreator(
  "div",
  `<a href="${linkPortfolio}">
	<p><span>< </span>Portafolio</p>    
</a>
`,
  "body",
  "retreat"
);

export default retreatDark;
