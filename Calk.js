import React, { useState } from 'react';
//npm i mathjs
import { evaluate } from 'mathjs'; 
const Calk = () => {
  const [displayValue, setDisplayValue] = React.useState('');
  const [isDark, setIsDark] = useState(true);

  const handleBackspace = () => {
    setDisplayValue((prevValue) => prevValue.slice(0, -1));
  };

  const handleButtonClick = (buttonId) => {
    if (buttonId === 'clear') {
      setDisplayValue('');
    } else if (buttonId === 'backspace') {
      handleBackspace();
    } else if (displayValue !== '' && buttonId === 'equal') {
      try {
        const result = evaluate(displayValue);
        setDisplayValue(result.toString());
      } catch (error) {
        setDisplayValue('Error');
      }
    } else if (displayValue === '' && buttonId === 'equal') {
      setDisplayValue('Empty!');
      setTimeout(() => setDisplayValue(''), 2000);
    } else {
      setDisplayValue((prevValue) => prevValue + buttonId);
    }
  };

  const handleThemeToggle = () => {
    setIsDark((prevIsDark) => !prevIsDark);
  };

  return (
    <div className={`a1 ${isDark ? 'dark' : ''}`}>
      <div className="conteiner">
        <div className={`cadk ${isDark ? 'dark' : ''}`}>
          <div className={`theme-toggler ${isDark ? 'active' : ''}`} onClick={handleThemeToggle}>
            <i className="toggler-icon"></i>
          </div>
          <div className="desplay-s">
            <div id="display">{displayValue}</div>
          </div>
          <div className={`buttons ${isDark ? 'dark' : ''}`}>
            <table>
              <tbody>
                <tr>
                  <td><button className={`btn-opa ${isDark ? 'dark' : ''}`} onClick={() => handleButtonClick('clear')} id="clear">c</button></td>
                  <td><button className={`btn-opa ${isDark ? 'dark' : ''}`} onClick={() => handleButtonClick('/')} id="/">÷</button></td>
                  <td><button className={`btn-opa ${isDark ? 'dark' : ''}`} onClick={() => handleButtonClick('*')} id="*">×</button></td>
                  <td><button className={`btn-opa ${isDark ? 'dark' : ''}`} onClick={() => handleButtonClick('backspace')} id="backspace">{'<'}</button></td>
                </tr>
                <tr>
                  <td><button className={`btn-num ${isDark ? 'dark' : ''}`} onClick={() => handleButtonClick('7')} id="7">7</button></td>
                  <td><button className={`btn-num ${isDark ? 'dark' : ''}`} onClick={() => handleButtonClick('8')} id="8">8</button></td>
                  <td><button className={`btn-num ${isDark ? 'dark' : ''}`} onClick={() => handleButtonClick('9')} id="9">9</button></td>
                  <td><button  className={`btn-opa ${isDark ? 'dark' : ''}`} onClick={() => handleButtonClick('-')} id="-">-</button></td>
                </tr>
                <tr>
                  <td><button className={`btn-num ${isDark ? 'dark' : ''}`} onClick={() => handleButtonClick('4')} id="4">4</button></td>
                  <td><button className={`btn-num ${isDark ? 'dark' : ''}`} onClick={() => handleButtonClick('5')} id="5">5</button></td>
                  <td><button className={`btn-num ${isDark ? 'dark' : ''}`} onClick={() => handleButtonClick('6')} id="6">6</button></td>
                  <td><button  className={`btn-opa ${isDark ? 'dark' : ''}`} onClick={() => handleButtonClick('+')} id="+">+</button></td>
                </tr>
                <tr>
                  <td><button className={`btn-num ${isDark ? 'dark' : ''}`} onClick={() => handleButtonClick('1')} id="1">1</button></td>
                  <td><button className={`btn-num ${isDark ? 'dark' : ''}`} onClick={() => handleButtonClick('2')} id="2">2</button></td>
                  <td><button className={`btn-num ${isDark ? 'dark' : ''}`} onClick={() => handleButtonClick('3')} id="3">3</button></td>
                  <td colSpan="2"><button className="btn-equal" onClick={() => handleButtonClick('equal')} id="equal">=</button></td>
                </tr>
                <tr>
                  <td><button  className={`btn-opa ${isDark ? 'dark' : ''}`} onClick={() => handleButtonClick('(')} id="(">(</button></td>
                  <td><button className={`btn-num ${isDark ? 'dark' : ''}`} onClick={() => handleButtonClick('0')} id="0">0</button></td>
                  <td><button  className={`btn-opa ${isDark ? 'dark' : ''}`} onClick={() => handleButtonClick(')')} id=")">)</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div><button className='close'>close</button>
      </div>
    </div>
  );
};

export default Calk;

// the css code 

//bpdy{overflow-x: hidden;}
// .a1{
//   font-family: sans-serif;
//   background-image: linear-gradient(to bottom right,rgb(129, 17, 17),rgb(0, 187, 255));
// }
// a{
//   text-decoration: none;
//   color: rgb(255, 255, 255);
// }
// .conteiner{
// height: 100vh;
// width: 100vw;
// display: grid;
// place-items: center;
// }
// .cadk{
// position: relative;
// height: auto;
// width: auto;
// border-radius: 10px;
// padding-left: 20px;
// padding-top: 20px;
// padding-right: 20px;
// padding-bottom: 20px;
// box-shadow: 0 0 30px black;    
// background-color: rgb(255, 255, 255);
// }
// .theme-toggler{
//   position: absolute;
//   top: 30px;
//   right: 30px;
//   color: aliceblue;
//   cursor: pointer;
//   z-index: 1;
// }
// .theme-toggler.active{
//   color: rgb(51, 51, 51);
// }
// .theme-toggler.active::before{
//   background-color: rgb(255, 255, 255);
// }
// .theme-toggler::before{
//   content: '';
//   height: 30px;
//   width: 30px;
//   position: absolute;
//   top: 50%;
//   transform: translate(-50%,-50%);
//   border-radius: 50%;
//   z-index: -1;
//   background-color: black;
// }
// #display{
//   margin: 0 10px;
//   height: 150px;
//   width: auto;
//   max-width: 270px;
//   display: flex;
//   align-items: flex-end;
//   justify-content: flex-end;
//   font-size: 30px;
//   margin-bottom: 20px;
//   overflow-x: scroll;
// }
// #display::-webkit-scrollbar{
//   display: block;
//   height: 3px;

// }
// button{
//   height: 60px;
//   width: 60px;
//   border: 0;
//   border-radius: 30px;
//   margin: 5px;
//   font-size: 20px;
//   cursor: pointer;
//   transition: all 200ms ease;
// }
// button:hover{
//   transform: scale(1.15);
// }
// button#equal{
//   height: 130px;
// }
// .cadk#display{
//   color: black;
//   height: auto;
//   max-width: fit-content;
// }
// .cadk button#clear{
//   background-color: rgb(254, 192, 197);
//   color: red;
// }
// .cadk button.btn-num{
//   background-color: rgb(183, 228, 253);
//   color: black;
// }
// .cadk button.btn-opa{
//   background-color: rgb(247, 203, 248);
//   color: rgb(253, 0, 148);
// }
// .cadk button.btn-equal{
//   background-color: rgb(194, 224, 254);
//   color: rgb(46, 13, 235);
// }
// .cadk.dark{
// background-color: rgb(47, 42, 42);   
// }
// .cadk.dark #display{
//   color: rgb(247, 251, 255);
// }
// .cadk.dark button#clear{
//   background-color: rgb(45, 25, 30);
//   color: red;
// }
// .cadk.dark button.btn-num{
//   background-color: rgb(27, 47, 56);
//   color: rgb(248, 250, 251);
// }
// .cadk.dark button.btn-opa{
//   background-color: rgb(73, 43, 50) ;
//   color: rgb(238, 93, 151);
// }
// .cadk.dark button.btn-equal{
//   background-color: #223322;
//   color: seashell;
// }
// .close{
//   background-color: rgb(47, 255, 113);
//   height: 40px;
//   width: auto;
//   border: 0;
//   border-radius: 10px;
//   font-size: 20px;
//   cursor: pointer;
//   transition: all 200ms ease;
// }
