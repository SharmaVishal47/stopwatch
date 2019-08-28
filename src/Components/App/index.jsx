import React, { useState, useEffect } from 'react';

import {Button, Menu, Dropdown, Tooltip, Typography} from 'antd';
import Lap from '../LapList/index'

import { Card } from 'antd';

import  "../../FirstWatch/firstwatch.scss";
import   "../../FirstWatch/firstwatch";

const Timer = () => {
    let tempArr =[];
    const [hours, sethours] = useState(0);
    const [theme, setTheme] = useState('headerLight');
    const [minutes, setminutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [miliSeconds, setMiliSeconds] = useState(0);
    const [newlap, newlapList] = useState([]);
    const [lapValue, SetlapValue] = useState([]);
    const [isLapClick, setIsLapClick] = useState(false);
    const [lapShow, setLapShow] = useState(false);

    const [intervalMain, setinterval] = useState({});
    const [inittialStartButton, setStartButton] = useState('start');

    const [  tableshow, setTableshow] = useState(false);
    const [  countValue, setCountValue] = useState(0);

  //  let countValue = 0;
    let count = countValue;

    const start=(m,s,h,ms) =>{
        setStartButton('second');
        let interval = setInterval(function(){
           count = count + 1;
       setCountValue(count);
                 setMiliSeconds(count % 100);
                 sethours(Math.floor((count / 100) / 3600));
                 setminutes(Math.floor(((count / 100) % 3600) / 60));
                 setSeconds(Math.floor(((count / 100) % 3600) % 60));

        }, 10);
        setinterval(interval);

    };

   const lapButton=(m,s,h) =>{
     setIsLapClick(!isLapClick);
       let StopTime = h +':'+ m +':' + s;
      SetlapValue(StopTime);
       tempArr.push(StopTime);
       newlapList(newLap=>newLap.concat(tempArr));

       setTableshow(true);
   };
    const stopButton=() =>{
        clearInterval(intervalMain);
        setStartButton('third');

    };

    const resetButton=() =>{
        //setIsActive(!isActive);
        clearInterval(intervalMain);
        setCountValue(0);
        setSeconds(0);
        sethours(0);
        setminutes(0);
        setMiliSeconds(0);
        newlapList([]);
      setStartButton('start');
        setTableshow(false);
    };
    const restartButton=() =>{
        setStartButton('second');
        start();

    };



    const theme1 =(value) =>{
        setTheme(value);
    };




    const menu = (
        <Menu >
            <Menu.Item key="1" onClick={()=> theme1('headerLight')} >Light Theme</Menu.Item>
            <Menu.Item key="2" onClick={()=> theme1('headerDark')}>Dark Theme</Menu.Item>
            <Menu.Item key="3" onClick={()=> theme1('headernew')}>Blue Theme</Menu.Item>
        </Menu>
    );

    let showButtons = '';

    if(inittialStartButton === 'start'){
        showButtons = (
            <div id="start" className="row">
                <div id="sStartButton" onClick={() => start (minutes , seconds , hours,miliSeconds)} className="button wide"><span>Start</span></div>
            </div>
        )
    }else if(inittialStartButton === 'second') {
        showButtons = (
            <div id="stop-lap" className="row">
                <div id="sStopButton" onClick={() => stopButton (minutes , seconds , hours)} className="button"><span>Stop</span></div>
                <div id="sLapButton" onClick={() => lapButton (minutes , seconds , hours)} className="button"><span>Lap</span></div>
            </div>
        )
    }else if(inittialStartButton === 'third') {
        showButtons = (
            <div id="restart-reset" className="row">
                <div id="sRestartButton" onClick={() => restartButton(minutes , seconds , hours,miliSeconds)} className="button"><span>Restart</span></div>
                <div id="sResetButton"  onClick={() => resetButton (minutes , seconds , hours)} className="button"><span>Reset</span></div>
            </div>
        )
    }
    const cardExtras = (

            <Dropdown overlay={menu} placement="bottomCenter">
                <Button  icon="down" type="default"/>
            </Dropdown>

    );


 let hoursToShow = (hours < 10 ? '0' : '') + hours;
 let minutesToShow = (minutes < 10 ? '0' : '') + minutes;
 let secondsToShow = (seconds < 10 ? '0' : '') + seconds;
 let miliSecondsToShow = (miliSeconds < 10 ? '0' : '') + miliSeconds;
 //let miliSecondsToShow = (miliSeconds < 10 ? '00' : miliSeconds > 10 && miliSeconds <100 ? '0' : '') + miliSeconds;
    return (

        <div className="main-div">

            <div>

                <Card
                    className="container"
                    title={
                        <span
                            style={{
                                fontSize: 14
                            }}
                        >
            Multi-Utility
          </span>
                    }
                    extra={cardExtras}
                >
                    <header  className={theme}>

                    <div className="container">

                        <div className="display">
                            <div className="sDisplay">
                                <span className="font" >   {hoursToShow} : {minutesToShow} : {secondsToShow} : {miliSecondsToShow}</span>

                            </div>

                        </div>

                        <div className="timeRecordsContainer">
                            <div className="row">
                                <ul id="sTimeRecords" >
                                    <Lap props={newlap}   isLap={isLapClick} lapValue={lapValue}/>

                                </ul>
                            </div>
                        </div>
                        <div className="watchCommands">

                            {showButtons}

                        </div>
                    </div>

                </header>
                </Card>
            </div>


        </div>




    );
};

export default Timer;
