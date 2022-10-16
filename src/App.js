import './App.css';
import { useState } from 'react';
// import the file "left challenger.png" from root folder
import leftChallenger from './images/left challenger.png';
// import the file "right challenger.png" from root folder
import rightChallenger from './images/right challenger.png';
import versus from './images/vs clipart.png';
import { Button, Image } from 'react-bootstrap';
function App() {
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  const leftData = async () => {
    const res = await fetch("http://localhost:3030/ranch/random", requestOptions);
    const data = await res.json();
    setLeftChallengerName(data.ranch.name);
  }
  const rightData = async () => {
    const res = await fetch("http://localhost:3030/ranch/random", requestOptions);
    const data = await res.json();
    setRightChallengerName(data.ranch.name);
  }
  const [leftChallengerName, setLeftChallengerName] = useState('');
  const [rightChallengerName, setRightChallengerName] = useState('');  
  // fetch("http://localhost:3030/ranch/random", requestOptions)
  //   .then(response => response.json())
  //   .then(result => {
  //     console.log(result);
  //     setLeftChallengerName(result.ranch.name);
  //     // leftChallengerName = result.ranch.name;

  //     // console.log("right cahllenger name: " + leftChallengerName);

  //   })
  //   .catch(error => console.log('error', error));
    // while(leftChallengerName !== rightChallengerName) {
    //   fetch("http://localhost:3030/ranch/random", requestOptions)
    // .then(response => response.json())
    // .then(result => {
    //   console.log(result)
    //   if(result.ranch.name !== leftChallengerName) {
    //     setRightChallengerName(result.ranch.name);
    //   }
      // rightChallengerName = result.ranch.name;
      // console.log("right cahllenger name: " + rightChallengerName);
    // })
    // .catch(error => console.log('error', error));
    // }
    
  return (
    <div className="App">
      <header className="App-header">
        <div className='container'>
          <div className="left-challenger">
            <Image src={leftChallenger} />
            <div className='leftChallengerText'>
              {leftChallengerName ? leftChallengerName : 'Left Challenger'}
            </div>
          </div>
          <div className="versus">
            <Image src={versus} />
            <Button onClick={leftData}>Left</Button>
            <Button onClick={rightData}>Right</Button>
          </div>
          <div className="right-challenger">
            <Image src={rightChallenger} />
            <div className='rightChallengerText'>
              {rightChallengerName ? rightChallengerName : 'Right Challenger'}
            </div>
        </div>
        
        </div>
        
        
      </header>
    </div>
  );
}

export default App;
