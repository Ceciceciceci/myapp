import { createGlobalStyle } from 'styled-components';
import eyes from '../images/eyes.png';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700;800&family=Pacifico&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Anonymous+Pro:wght@400;700&family=Dongle:wght@300;400&display=swap');

  :root{
    --dongle : "Dongle", "Open Sans", sans-serif;
    --openSans : "Open Sans", "Helvetica", sans-serif;
    --anonPro: "Anonymous Pro", "Open Sans", monospace;
    
    --darkblue: #1A1D26;
    --beige: #EACFB1;
    --lightbeige: #F3E5D0;

    --blue: #7DC3E1;
    --green: #A6C550;
    --yellow: #F6BF6C;
    --orange: #F6A66C;
    --red: #EF6E6E;

    --body-font-size: 18px;
    --speech-bubble-font-size: 3rem;
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
    margin: 100px 0px 0px 0px;
    position: relative;
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
    align-items: center;
    justify-content: space-between;
    padding-left: 15px;
    top: 50px;
    padding: 0 100px;
  }

  nav {
    position: relative;
  }

  nav ul {
    font-family: var(--anonPro);
    list-style-type: none;
    display: flex;
    flex-direction: row;
    font-weight: bold;
    text-transform: lowercase;
    justify-content: space-evenly;
  }
  nav ul li{
    margin-left: 25px;
  }

  nav li a {
    text-decoration: none;
    color: ${({ theme }) => theme.navText};
    letter-spacing: 0.1rem;
    font-size: 18px;
    transition: all 0.2s ease-in-out;
  }

  nav li a:hover{
    color: var(--orange); 
    font-size: 24px;
  }

  .homelogo{
    display: flex;
    justify-content: end;
    padding-left: 25px;
  }

  .homelogo img {
    height: 45px;
    transition: transform 100ms ease-in-out;
  }
  .homelogo img:hover{
    transform: rotate(-15deg);
    cursor: pointer;
  }

  .main-container {
    color: ${({ theme }) => theme.text};
    padding: 0px 100px;
  }

  .hero-section {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden; 
  }

  .homeNav {
    margin-top: 20px;
  }

  .homeNav li {
    list-style-type: none;
    margin-top: 25px;
  }
  
  .homeNav li a {
    text-decoration: underline;
    color: ${({ theme }) => theme.navText};
    letter-spacing: 0.3rem;
    font-family: var(--dongle);
    line-height: 30px;
    font-size: 50px;
    font-weight: 700;
    transition: all 0.2s ease-in-out;
    margin-right: 50px;
  }

  .homeNav li a:hover {
    color: var(--orange); 
    font-size: 75px;
  }

  .hero-section .hero-star{
    position: absolute;
    z-index: 5;
    left: 28%;
    top: 17%;
    height: 50px;
    transition: 0.2s ease-in;
    animation-duration: 10s;
    animation-iteration-count: infinite;
    animation-name: spin;
    animation-timing-function: ease;
  }

  .hero-title{
    width: 100%;
    position: absolute;
    z-index: 2;
    text-align: center;
    left: 50%;
    top: 40%;
    transform: translate(-50%, -50%);
  }
  .hero-sub {
    font-family: var(--anonPro);
    font-size: 64px;
    letter-spacing: 12px;
    font-weight: bold;
    line-height: 1em;
  }

  .hero-title .name {
    color: ${({ theme }) => theme.titleColor};
    font-family: var(--dongle);
    font-size: 175px;
    letter-spacing: 10px;
    margin: -50px;
    padding:0;
  }

  .flowerstems{
    display: grid;
    height: 100vh;
    flex-direction: row;
  }
  img.flowerstem{
    max-height: 100vh;
  }
  .flowerstem.left{
    transform: scaleX(-1);
    position: absolute;
    left: 5%;
  }
  .flowerstem.right{
    position: absolute;
    right: 5%;
  }


  .about-section {
    position: relative;
    padding-bottom: 350px;
    margin: 50px 150px 0px;
  }

  .about-section .intro-card {
    height: 250px;
    text-align: center;
    display: flex;
    flex-direction: column;
  }

  .about-section .intro-card img{
    height: 35%;
    margin-bottom: -25px;
  }
  .intro-card h1{
    font-family: var(--dongle);
    font-size: 65px;
    letter-spacing: 5px;
    color: ${({ theme }) => theme.text};
  }
  .intro-card p{
    margin-top: -15px;
    font-family: var(--anonPro);
    font-size: 14px;
    color: grey;
  }


  .about-section .background{
    background: ${({ theme }) => theme.aboutMeBg};
    border: 5px solid ${({ theme }) => theme.aboutMeBorder};
    position: absolute;
    z-index: -1;
    height: 80%;
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
    margin-top: 80px;
    width: 30ch;
    margin-left: 5%;
    line-height: 25px;
    letter-spacing: 1px;
  }
  .intro p{
    margin-bottom: 15px;
    color: ${({ theme }) => theme.text};
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
    font-family: var(--dongle); 
    font-size: 36px;
    font-weight: bold;
    padding: 5px 0;
    width: 300px;
    margin-left: 15px;
    border: 0px;
    background-color: var(--green);
    border-radius: 50px;
    transition: all 200ms ease-in-out;
    cursor: pointer;
  }

  .resume-btn:hover{
    background-color: var(--blue);
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
    font-family: var(--dongle);
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
    color: var(--darkblue);
    left: 0%;
    top: 25%;
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
    left: -15%;
    bottom: -100%;
  }


  /* BOOK SECTION */
  .book-section{
    width: 100%;
    display: grid;
    position: relative;
    margin-bottom: 500px;
  }
  .book-section .speech{
    position: absolute;
    z-index: 15;
    right: 0;
    display: flex;
    justify-content: flex-end;
    font-size: 30px;
    top: 10em;
  }

  .speechbubblestem.straight{
    height: 300px;
    width: 15px;
    background-color: var(--lightbeige);
  }

  .book-section .speech-bubble{
    width: 60%;
    position: relative;
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

  .proj-section{
    position: relative;
  }
  .proj-section .intro-card{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 50px;
  }

  .project{
    display: flex;
    flex-direction: row;
    margin: 100px 125px 0px 125px;
  }
  .projects{
    padding-bottom: 150px;
  }
  .proj-info{
    width: 50%;
    margin-left: 25px;
    color: ${({ theme }) => theme.text};
  }

  .proj-date{
    font-size: 14px;
    letter-spacing: 2px;
  }

  .project .proj-title{
    font-family: var(--dongle);
    font-size: 48px;
    line-height: 35px;
    margin-top: 10px;
  }

  .proj-tech{
    border: 1px solid var(--green);
    border-radius: 50px;
    font-size: 14px;
    text-transform: uppercase;
    padding: 10px;
    text-align: center;
    width: 90%;
  }
  .proj-desc{
    font-size: 16px;
    width: 90%;
    margin: 25px 0px;
  }
  .proj-btn{
    font-family: var(--dongle);
    font-size: 24px;
    font-weight: bold;
    letter-spacing: 1px;
    text-transform: uppercase;
    border: none;
    border-radius: 50px;
    padding: 5px 15px;
    background-color: var(--green);
    cursor: pointer;
    transition: 0.2s ease-in-out;
    margin-right: 10px;
  }

  .proj-btn: hover{
    background-color: var(--yellow);
  }

  .proj-btn a{
    text-decoration: none;
    color: var(--darkblue);
  }

  .photo{
    width: 50%;
    position: relative;
  }
  .proj-image{
    width: 100%;
    border-radius: 50px;
  }
  .proj-title{
    font-family: var(--fredoka);
    
  }

  .contact-section{
    height: 500px;
    color: ${({ theme }) => theme.text};
  }

  /* TODO */
  .todo-list {
    background: #e8e8e8;
    border-radius: 4px;
    max-width: 400px;
    padding: 5px;
  }
  
  .todo {
    align-items: center;
    background: #fff;
    border-radius: 3px;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15);
    display: flex;
    font-size: 12px;
    justify-content: space-between;
    margin-bottom: 6px;
    padding: 3px 10px;
  }

  /* CASE STUDY */

  .casestudy{
    position: relative;
  }

  .casestudy h1{
    font-family: var(--fredoka);
    letter-spacing: 5px;
    font-size: 72px;
    margin-top: 30px;
  }

  .stamp{
    width: 25%;
    position: absolute;
    right: 20px;
    top: 20px;
    z-index: 5;
    background-color: red; 
  }
  .stamp img:nth-child(1){
    width: 50%;
    position: absolute;
    z-index: 6;
    right: 0px;

  }
  .stamp img:nth-child(2){
    width: 45%;
    position: absolute;
    z-index: 7;
    right: 2%;
    top: 10px;
  }

  /** RESUME */
  .resume-section{
    margin: 75px 125px;
    display: flex;
    flex-direction: column;
  }
  .resume-section h1{
    margin-bottom: 25px;
    font-family: var(--dongle);
    font-size: 72px;
    font-weight: 500;
    letter-spacing: 5px;
    color: ${({ theme }) => theme.text};
  }
  .resume-title{
    font-family: var(--anonPro);
    font-weight: 900;
    margin-bottom: 25px;
  }

  .resume-title.ex{ 
    color: var(--red) 
  }
  .resume-title.ed{ 
    color: var(--blue) 
  }
  .resume-title.st{ 
    color: var(--green) 
  }

  .resume-part{
    color: ${({ theme }) => theme.text};
    display: flex;
    flex-direction: row;
    margin-bottom: 50px;
  }
  .resume-left{
    width: 70%;
    padding-right: 150px;
  }
  .resume-right{
    width: 30%;
    padding-left: 25px;
    border-left: 1px solid var(--yellow);
    list-style-type: none;
  }

  .resume-right img{
    position: absolute;
    bottom: 150px;
    right: 150px;
    transition: 0.2s ease-in;
    animation-duration: 5s;
    animation-iteration-count: infinite;
    animation-name: spin;
    animation-timing-function: ease;
  }
  /* .resume-right img:hover{
    transform: rotate(-25deg);
    cursor: pointer;
  }
   */

  .resume-left li{
    margin-bottom: 10px;
    font-size: 14px;
  }
  .resume-right li{
    margin-bottom: 15px;
    font-size: 16px;
  }
  .resume-right .education{
    margin-bottom: 75px;
  }

  .jobtitle{
    font-family: var(--opensans);
    margin-bottom: 25px;
  }
  .resume-section .date{
    font-size: 14px;
    font-weight: bold;
  }

  .resume-section .thin{
    font-weight: 300;
  }
  .jobtitle .company{
    font-size: 24px;
    font-weight: bold;
    letter-spacing: 1px;
    margin-bottom: 15px;
  }
  .jobtitle .tools{
    font-size: 16px;
    margin-bottom: 5px;
  }
  .resume-section ul {
    padding-left: 15px;
  }
  .job-desc{
    font-size: 16px;
    list-style-position: outside;
  }

  /** CONTACT */
  .contact-section{
    padding: 100px 125px 0px;
    margin-bottom: 200px;
    display: flex;
    flex-direction: column;
  }
  .contact-section h1{
    text-align: center;
  }

  .contact-section a{
    color: var(--text);
    
  }

  .contact-section .forms{
    margin-top: 50px;
  }

  .contact-section form{
    display: flex;
    flex-direction: column;
  }

  .contact-section input{
    margin-top: 15px;
    padding: 15px 10px;
    border: none;
    border-bottom: 2px var(--yellow) solid;
    outline: none;
  }

  .contact-section textarea{
    padding: 15px 10px;
    line-height: 15px;
    margin: 30px 0px;
    border: 2px var(--red) solid;
    border-radius: 5px;
    transition: outline 150ms ease-in-out;
  }

  .contact-section textarea:focus{
    outline: 5px var(--red) dotted;
  }

  .contact-section button{
    font-family: var(--dongle);
    padding: 0px 15px;
    margin-bottom: 25px;
    font-size:36px;
    color: white;
    border: 0px;
    border-radius: 50px;
    background-color: var(--green);
    cursor: pointer;
    transition: 0.3s ease-in-out;
  }

  .contact-section button:hover{
    background-color: var(--blue);
  }

  .contact-form {
    display: flex;
    flex-direction: row;
  }
  .contact-form img{
    width: 75%;
    height: 75%;
    border: 2px solid var(--green);
    border-radius: 50px;
  }
  .contact-form .forms{
    width: 25%;
    margin-left: 50px;
  }
  .forms .title{
    font-family: var(--anonPro);
  }
  .forms input[placeholder]{
    font-family: var(--opensans);
    letter-spacing: 1px;
  }
  .form button{
    background-color: var(--green);
    color: black;
  }

  .social-media{
    display: flex;
    justify-content: space-around;
  }


  /** FOOTER */
  footer{
    height: 50px;
    width: 100%;
    padding: 0px 125px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    bottom: 25px;
    left: 0px;
    font-size: 18px;
    font-weight: bold;
    font-family: var(--anonPro);
  }

  footer ul{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    list-style-type: none;
  }

  footer ul li:not(:first-child){
    margin-left: 50px;
  }

  footer li a {
    text-decoration: none;
    color: ${({ theme }) => theme.navText};
    letter-spacing: 0.1rem;
    transition: all 0.2s ease-in-out;
  }

  footer li a:hover{
    color: var(--blue); 
  }

`