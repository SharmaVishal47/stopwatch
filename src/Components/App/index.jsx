import React, { useState, useEffect } from 'react';
import classes from './index.scss';
import {Button, Icon, Menu, Dropdown, Tooltip, Typography} from 'antd';
import Lap from '../LapList/index'
import New from "../../New/new";
import { Card } from 'antd';
import Firstwatch from "../../FirstWatch/firstwatch";
import className from "../../FirstWatch/firstwatch.scss";
const ButtonGroup = Button.Group;
const { Text } = Typography;

let count = 0;


const Timer = () => {
    let tempArr =[];
    const [hours, sethours] = useState(0);
    const [minutes, setminutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [miliSeconds, setMiliSeconds] = useState(0);
    const [newlap, newlapList] = useState([]);
    const [isActive, setIsActive] = useState(false);
    const [showDark, setShowDark] = useState(false);
    const [classss, setclassss] = useState({});
    const [intervalMain, setinterval] = useState({});
    const [inittialStartButton, setStartButton] = useState('start');

    const [countCheck, setCountCheck] = useState(0);

    /*const [timeCsec, settimeCsec] = useState(0);
    const [timeHours, settimeHours] = useState(0);
    const [timeMinutes, settimeMinutes] = useState(0);
    const [timeSeconds, settimeSeconds] = useState(0);
    const [countVar, setCountVar] = useState(0);*/
    let countValue = 0;


    const start=(m,s,h) =>{

       /* setIsActive(!isActive);
        setStartButton('second')*/
        setStartButton('second');

        let interval = setInterval(function(){

            let countCheck =  countValue++;
            console.log("countValue===",countCheck);
            setMiliSeconds(countValue % 100);
            sethours(Math.floor((countValue / 100) / 3600));
            setminutes(Math.floor(((countValue / 100) % 3600) / 60));
            setSeconds(Math.floor(((countValue / 100) % 3600) % 60));

        }, 10);
        setinterval(interval);
        console.log("interval===",interval);
    };



   const lapButton=(m,s,h) =>{
       let Stoptime = h +':'+ m +':' + s;
       tempArr.push(Stoptime);
       newlapList(newlap=>newlap.concat(tempArr));
       //setStartButton('third')
   };
    const stopButton=(m,s,h) =>{

        console.log("intervalMain===",intervalMain);
        let count = countValue;

        clearInterval(intervalMain);
        //setIsActive(!isActive);
        setStartButton('third')
        countValue = count;
    };

    const resetButton=(m,s,h) =>{
        //setIsActive(!isActive);
        clearInterval(intervalMain);
        countValue = 0;
        setSeconds(0);
        sethours(0);
        setminutes(0);
        setMiliSeconds(0);
        newlapList([]);
      setStartButton('start')
    };
    const restartButton=(m,s,h) =>{
        /*setIsActive(false);
        console.log("restart--",isActive);
        setIsActive(!isActive);*/
        setStartButton('second');
        start('','','');
    };



    const theme1 =() =>{
        setShowDark(true);
    }
    const theme2 =() =>{
        setShowDark(false);
    }

    useEffect(() => {

        /*/!*window.setInterval(function(){
            let countValue = countVar+1;
            settimeCsec(countValue % 100);
            settimeHours(Math.floor((countValue / 100) / 3600));
            settimeMinutes(Math.floor(((countValue / 100) % 3600) / 60));
            settimeSeconds(Math.floor(((countValue / 100) % 3600) % 60));
            setCountVar(countValue);
        }, 1000);*!/


        let interval = null;

        if (isActive) {

            /!*const { timerTime } = 0;
            let centiseconds = ("0" + (Math.floor(timerTime / 10) % 100)).slice(-2);
            let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
            let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
            let hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);*!/

            interval = setInterval(() => {
                /!*let countValue = countVar+1;
                settimeCsec(countValue % 100);
                settimeHours(Math.floor((countValue / 100) / 3600));
                settimeMinutes(Math.floor(((countValue / 100) % 3600) / 60));
                settimeSeconds(Math.floor(((countValue / 100) % 3600) % 60));
                setCountVar(countValue);*!/
               // console.log("count--",count);
               /!* setMiliSeconds(miliSeconds => miliSeconds + 1);
                if(count === 250){
                    console.log("1000",miliSeconds);
                    setMiliSeconds(0);
                    count = 0;
                   // setSeconds (seconds => seconds+1)
                    setSeconds(seconds => seconds + 1);
                    if(seconds === 59){
                        setSeconds(0);
                        setminutes (minutes => minutes+1)
                    }
                    if(minutes === 59){
                        setminutes(0);
                        sethours (hours => hours+1)
                    }
                }
*!/

            }, 1);
        } else if (!isActive && seconds !== 0) {
            clearInterval(interval);
        }
      /!* classNames(1);*!/
        return () => clearInterval(interval);*/
    }, []);



    const classNames =(e) =>{
        console.log('click', e.key);
        if(e.key === '1') {
            console.log('iinn ifff');
            setclassss ( classNames({
                color:'white',
                backgroundColor :'green' ,
                fontSize : 45
            }));
        } else if(e.key === '2') {
            setclassss ( {
                color:'white',
                backgroundColor :'orange'
            });
        } else {
            setclassss ( {
                color:'white',
                backgroundColor :'yellow'
            });
        }
    }
    const menu = (
        <Menu onClick={classNames}>
            <Menu.Item key="1" onClick={()=> theme1()} >Theme 01</Menu.Item>
            <Menu.Item key="2" onClick={()=> theme2()}>Theme 02</Menu.Item>
            <Menu.Item key="3" onClick={()=> theme1()}>Theme 03</Menu.Item>
        </Menu>
    );

    let showButtons = '';

    if(inittialStartButton === 'start'){
        showButtons = (
            <div id="start" className="row">
                <div id="sStartButton" onClick={() => start (minutes , seconds , hours)} className="button wide"><span>Start</span></div>
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
                <div id="sRestartButton" onClick={() => restartButton(minutes , seconds , hours)} className="button"><span>Restart</span></div>
                <div id="sResetButton"  onClick={() => resetButton (minutes , seconds , hours)} className="button"><span>Reset</span></div>
            </div>
        )
    }
    const cardExtras = (
        <ButtonGroup>

            <Dropdown overlay={menu}>
                <Button icon="down" type="default"/>
            </Dropdown>
        </ButtonGroup>
    );

   // const { timerTime } = this.state;
   /* let miliSeconds1 = ("0" + (Math.floor(timerTime / 10) % 100)).slice(-2);
    let seconds1 = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
    let minutes1 = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
    let hours1 = ("0" + Math.floor(timerTime / 3600000)).slice(-2);*/

    /*console.log("miliSeconds1--",miliSeconds1);
    console.log("seconds1--",seconds1);
    console.log("minutes1--",minutes1);
    console.log("hours1--",hours1);*/


 let hoursToShow = (hours < 10 ? '0' : '') + hours;
 let minutesToShow = (minutes < 10 ? '0' : '') + minutes;
 let secondsToShow = (seconds < 10 ? '0' : '') + seconds;
 //let miliSecondsToShow = (miliSeconds < 10 ? '00' : '') + miliSeconds;
 let miliSecondsToShow = (miliSeconds < 10 ? '00' : miliSeconds > 10 && miliSeconds <100 ? '0' : '') + miliSeconds;
    return (



        <div className="main-div">
            <div>
                <Firstwatch/>

            </div>
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
                    <header  className={showDark===true?"headerLight":"headerDark"}>
                   {/* <header >*/}
                    <div className="container">

                        <div className="display">
                            <div className="sDisplay">
                                <span style={{fontSize: 13, width: 113} }>   {hoursToShow} : {minutesToShow} : {secondsToShow} : {miliSecondsToShow}</span>
                                {/*<span style={{fontSize: 13, width: 113} }>   {timeHours} : {timeMinutes} : {timeSeconds} : {timeCsec}</span>*/}
                            </div>

                        </div>

                        <div className="timeRecordsContainer">
                            <div className="row">
                                <ul id="sTimeRecords">
                                    <Lap props={newlap}/>
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
