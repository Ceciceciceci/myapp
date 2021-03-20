import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700;800&family=Pacifico&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Sacramento&display=swap');

  :root{
    --fredoka : "Fredoka One", "Open Sans", sans-serif;
    --openSans : "Open Sans", "Helvetica", sans-serif;
    --sacramento: "Sacramento", "Open Sans", sans-serif;
    
    --darkblue: #1A1D26;
    --beige: #EACFB1;
    --lightbeige: #F3E5D0;

    --blue: #7DC3E1;
    --green: #A6C550;
    --yellow: #F6BF6C;
    --orange: #F6A66C;
    --red: #EF6E6E;

    --body-font-size: 18px;
    --speech-bubble-font-size: 2rem;
    --large-font-size: 4rem;
  }

  *,
  *::after,
  *::before {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  .App{
    overflow: hidden;
    margin: 10px 0px;
    position: relative;
    z-index: 0;
  }

  html{
    scroll-behavior: smooth;
  }

  body {
    background-color: ${({ theme }) => theme.pageBackground};
    margin: 0;
    padding: 0;
    position: relative;
    font-family: "Open Sans", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100%;
    font-size: var(--body-font-size);
  }

  header {
    height: 55px;
    position:fixed;
    z-index: 899;
    width: 100%;
    display: flex; 
    flex-direction: row;
    flex: 1 3 1;
    align-items: center;
    justify-content: space-evenly;
    padding-left: 15px;
    top: 50px;
  }

  header nav {
    position: relative;
  }

  header nav ul {
    font-family: var(--fredoka);
    list-style-type: none;
    display: flex;
    flex-direction: row;
    text-transform: uppercase;
    justify-content: space-evenly;
    position: absolute;
    z-index: 900;
    top: 30%;
    width: 100%;
  }

  nav li a {
    text-decoration: none;
    color: ${({ theme }) => theme.navText};
    letter-spacing: 0.2rem;
    transition: color 0.2s ease-in-out;
  }

  nav li a:hover{
    color: var(--blue); 
  }

  .homelogo img {
    height: 45px;
    transition: transform 100ms ease-in-out;
  }
  .homelogo img:hover{
    transform: rotate(-15deg);
  }
  
  .curly {
    color: ${({ theme }) => theme.text};
    font-family: var(--sacramento);
    font-size: 2rem;
    position: absolute;
    left: 15%;
    transform: translate(-50%, 0%);
  }

  .main-container {
      color: ${({ theme }) => theme.text};
  }

  .hero-section {
    // background-color: aliceblue;
    position: relative;
    padding: 0px 250px;
    margin-top: 150px;
    width: 100%;
    height: 103vh;
    margin-bottom: 100px;
  }

  .hero-section h1{
    color: ${({ theme }) => theme.titleColor};
    font-family: var(--fredoka);
    letter-spacing: 5px;
    font-size: 72px;
    text-align: center;
    padding-top: 30px;
  }
  
  .hero-section .me1, .me2{
    height: 434px;
  }


  .hero-section .me2{
    position: absolute;
    transform: scale(1.1);
    z-index: 50;
  }

  .hero-title{
    position: absolute;
    z-index: 5;
    left: 50%;
    transform: translate(-50%, 0%);
  }

  .hero-image{
    height: 450px;
    width: 530px;
    position: absolute;
    z-index: 0;
    left: 50%;
    top: 45%;
    transform: translate(-50%, -50%);
  }

  .flowerstem{
    height: 75%;
    position: absolute;
  }
  .flowerstem.left{
    left: 15%;
    transform: scaleX(-1);
  }
  .flowerstem.right{
    right: 15%;
    pointer-events: none;
  }

  .titles{
    // background-color: red;
    font-family: var(--fredoka);
    font-size: 50px;
    color: ${({ theme }) => theme.titleColor};
    position: absolute;
    bottom: 10%;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
  }

  .about-section {
    position: relative;
    padding: 0 250px;
  }

  .about-section .background{
    background: ${({ theme }) => theme.aboutMeBg};
    border: 5px solid ${({ theme }) => theme.aboutMeBorder};
    position: absolute;
    z-index: -1;
    height: 100%;
    left: 50%;
    transform: translate(-50%);
    width: 40%;
  }
  @media (min-width: 100px) and (max-width: 1000px){
    .about-section .background{
      width: 75%;
    }
  }
  
  .about-me, .about-work{
    // background-color: red;
    margin-bottom: 0px;
  }

  /* About me */
  .about-me{
    display: grid;
    grid-template-columns: 0.8fr 1.2fr;
    gap: 0px 0px;
    grid-template-areas:
      "img info"
      "cloud info";
    margin-bottom: 50px;
  }
  .about-me .me3{
    grid-area: img;
    margin-top: -25px;
    margin-left: 15%;
    position: relative;
  }
  .me3 .imgBg{
    position: absolute;
    top: -25px;
    left: 15px;
    z-index: 0;
  }
  .me3 .imgMe{
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
  }

  .about-me .cloud{
    grid-area: cloud;
  }
  .about-me .intro{
    grid-area: info;
    margin-top: 50px;
    padding: 0 12em 0 2.5em;
    line-height: 25px;
    letter-spacing: 1.5px;
  }
  .intro p{
    margin-bottom: 15px;
  }
  .intro strong{
    color: var(--lightbeige);
  }

  /* About work */
  .about-work{
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    gap: 0px 0px;
    grid-template-areas:
      "info img2"
      "info button";

    margin-bottom: 150px;
  }
  .about-work .me4{
    grid-area: img2;
    margin-left: -15px;
  }

  .about-work .speech-bubble{
    margin-top: 15px;
  }


  .about-work .job-list{
    grid-area: info;
    color: ${({ theme }) => theme.text};
    margin-top: 125px;
  }

  .daisy{
    display: inline-block;
    margin-right: 15px;
    margin-left: 10px;
  }

  .resume-btn{
    grid-area: button;
    align-self: center;
    letter-spacing: 0.2rem;
    font-family: var(--fredoka); 
    font-size: var(--font);
    padding: 15px 0;
    width: 300px;
    margin-left: 15px;
    border: 5px solid var(--dark-blue);
    background-color: #7DC3E1;
    border-radius: 15px;
  }

  .speech-bubble{
    position: relative;
    grid-area: info;
    margin-top: -50px;
    width: 90%;
  }

  .speech-bubble.left{
    margin-left: -50px;
  }
  .speech-bubble.right{
    margin-right: -50px;
  }

  .speechbubble{
    background-color: var(--lightbeige);
    padding: 15px;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .speech-text{
    font-family: var(--fredoka);
    letter-spacing: 5px;
    font-size: var(--speech-bubble-font-size);
  }

  .speechbubblestem{
    margin-top: -15px;
  }

  .speechbubblestem.left{
    margin-left: -25px;
  }
  .speechbubblestem.right{
    position: absolute;
    right: -25px;
  }

`