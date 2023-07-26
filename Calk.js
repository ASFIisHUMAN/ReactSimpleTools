import React, { useState } from 'react';

const Calk = () => {
  const [displayValue, setDisplayValue] = useState('');
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
          setDisplayValue(eval(displayValue).toString());
        } catch (error) {
          setDisplayValue('Error');
        }
      } else if (displayValue === '' && buttonId === 'equal') {
        setDisplayValue('Empty!');
        setTimeout(() => setDisplayValue(''), 2000);
      } else {
        setDisplayValue((prevValue) => prevValue + buttonId);
      }  };

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
        </div>
      </div>
    </div>
  );
};

export default Calk;
