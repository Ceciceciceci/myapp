import { createGlobalStyle } from 'styled-components';
import eyes from '../images/eyes.png';

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
    margin: 150px 0px;
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

  nav {
    position: relative;
  }

  nav ul {
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
    color: var(--orange); 
  }

  .homelogo{
    width: 7rem;
    display: flex;
    justify-content: center;
  }

  .homelogo img {
    height: 45px;
    transition: transform 100ms ease-in-out;
  }
  .homelogo img:hover{
    transform: rotate(-15deg);
    cursor: pointer;
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
    padding: 0px 200px;
  }

  .hero-section {
    // background-color: aliceblue;
    position: relative;
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
    z-index:-1;
  }
  .flowerstem.left{
    left: 15%;
    transform: scaleX(-1);
  }
  .flowerstem.right{
    right: 14%;
    pointer-events: none;
  }

  .titles{
    // background-color: red;
    font-family: var(--fredoka);
    font-size: 50px;
    color: ${({ theme }) => theme.text};
    position: absolute;
    bottom: 10%;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
  }

  .titles .and{
    color: var(--green);
  }

  .about-section {
    position: relative;
    padding-bottom: 250px;
  }

  .about-section .background{
    background: ${({ theme }) => theme.aboutMeBg};
    border: 5px solid ${({ theme }) => theme.aboutMeBorder};
    position: absolute;
    z-index: -1;
    height: 100%;
    left: 50%;
    transform: translate(-50%);
    width: 60%;
    border-radius: 15px;
  }
  @media (min-width: 100px) and (max-width: 1000px){
    .about-section .background{
      width: 75%;
    }
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
    margin: -25px 0 350px 15%;
    position: relative;
  }
  .me3 .imgBg{
    position: absolute;
    top: -10px;
    left: 25px;
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
    display: flex;
    justify-content: flex-end;
  }

  .cloud img{
    margin-right: 5%;
  }


  .about-me .intro{
    grid-area: info;
    margin-top: 50px;
    width: 30ch;
    margin-left: 5%;
    line-height: 25px;
    letter-spacing: 1px;
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

    margin-bottom: 125px;
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
    margin: 150px auto 0 50%;
  }
  .job{
    margin-bottom: 1rem;
    letter-spacing: 1px;
  }
  .job b{
    color: ${({ theme }) => theme.currentJob};

  }

  .daisies{
    margin-top: -25px;
  }
  .daisy{
    display: inline-block;
    margin-right: 25px;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-name: bounce;
    animation-timing-function: ease;
  }

  .daisy:nth-child(2){
    animation-delay: 1s;
  }
  .daisy:nth-child(3){
    animation-delay: 0.5s;
  }

  .daisy:hover{
    animation: spin 3s infinite;
    animation-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes bounce {
    0%   { transform: translateY(0); }
    50%  { transform: translateY(-15px); }
    100% { transform: translateY(0); }
  } 

  .m4 .imgMe2{
    margin-top:15px;
  }

  .job-btn{
    grid-area: button;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .resume-btn{
    letter-spacing: 0.2rem;
    font-family: var(--fredoka); 
    font-size: var(--font);
    padding: 15px 0;
    width: 300px;
    margin-left: 15px;
    border: 5px solid var(--dark-blue);
    background-color: var(--blue);
    border-radius: 15px;
    transition: all 200ms ease-in-out;
    cursor: pointer;
  }

  .resume-btn:hover{
    background-color: var(--green);
  }

  .daisy2{
    align-self: end;
  }

  .speech-bubble{
    position: relative;
    grid-area: info;
    margin-top: -50px;
    width: 90%;
  }

  .speech-bubble.left{
    margin-left: -13%;
    margin-right: auto;
  }
  .speech-bubble.right{
    margin-left: auto;
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
  .speechbubble.right{
    width: 80%;
    margin-left: 110px;
  }

  .speech-text{
    font-family: var(--fredoka);
    letter-spacing: 5px;
    font-size: var(--speech-bubble-font-size);
    color: var(--darkblue);
  }

  .orange{
    color: var(--orange);
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

  .about-skills{
    display: grid;
    position: relative;
    grid-template-areas:
      "img3 info"
      "img3 info";
  }
  .about-skills .speech-bubble{
    grid-area: info;
  }
  .about-skills .img-group{
    grid-area: img3;
    display: flex;
    justify-content: center;
    margin-top: -75px;
  }

  .about-skills .tools, .about-skills .food{
    grid-area: info;
  }

  .about-skills .tools{
    letter-spacing: 1px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    
  }
  .tools table{
    position: absolute;
    z-index: -1;
    left: -13%;
    top: 20%;
    font-size: 0.9em;
    background-color: var(--beige);
    padding: 25px;
    box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);
  }

  thead, th{
    border-bottom: 5px solid #AF9A86;
    text-align: left;
    padding-bottom: 15px;
    font-family: var(--fredoka);
  }
  table td{
    border-bottom: 1px solid #AF9A86;
    padding-right: 15px;
  }

  .about-skills .food{
    position: absolute;
    right: 5%;
    bottom: -55%;
  }


  /* BOOK SECTION */
  .book-section{
    width: 100%;
    display: grid;
    position: relative;
    margin-bottom: 500px;
  }
  .book{
    margin: -125px auto 0;
  }
  .pages{
    width: 60%;
    position:relative;
  }

  .page.one{
    position: absolute;
    z-index: -1;
    left: 65%;
    top: -150px;
  }
  .page.two{
    position: absolute;
    z-index: -3;
    left: 50%;
    top: -60px;
  }
  .page.three{
    position: absolute;
    z-index: -2;
    left: 30%;
    top: -55%;
  }
  .page.four{
    position: absolute;
    z-index: -4;
    left: 15%;
    top: 125px;
  }

  .contact-section{
    height: 500px;
  }

`