import React, { useState } from 'react';

import {Button, Menu, Dropdown, message, Tooltip, Icon, Table} from 'antd';


import { Card } from 'antd';
import "./index.scss";


const Timer = () => {
    //let tempArr =[];
    const [hours, setHours] = useState(0);
    const [theme, setTheme] = useState('headerLight');
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [miliSeconds, setMiliSeconds] = useState(0);
    const [newlap, newlapList] = useState([]);
    const [tempArr, setTempArray] = useState([]);
    const [lapValue, SetlapValue] = useState([]);
    const [isLapClick, setIsLapClick] = useState(false);

    const [intervalMain, setinterval] = useState({});
    const [inittialStartButton, setStartButton] = useState('start');

    const [  countValue, setCountValue] = useState(0);
    const [  list, setList] = useState([]);
    const [  timeSecond, seTimeSeconds] = useState([]);
    const [  timeMinute, seTimeMinute] = useState([]);
    const [  timeHours, seTimeHours] = useState([]);


    let count = countValue;


    //let list =[];




    const tableList = (newLapList) => {

        let tempList =[];
        let index = 1;
        let sum = [0,0,0];

  /*      sum[0] =0;
        sum[1] =0;
        sum[2] =0;*/


        for(let i of newLapList)
        {
            let spiltValue= [];
            spiltValue = i.split(':');
           /* sum[0]=sum[0]+parseInt(spiltValue[0]);
            sum[1]=sum[1]+parseInt(spiltValue[1]);
            sum[2]=sum[2]+parseInt(spiltValue[2]);
*/



            tempList.push({
                key: index,
                value :i,
                sum: sum[0] +':' + sum[1] +':'+ sum[2]
            });
            index++;
        }





        let tempListCount = tempList.length;
        let tempListCountLastIndex = tempListCount-1;
        let tempListCountSecondLastIndex = 0;
        if (tempListCount>1){
             tempListCountSecondLastIndex = tempListCount-2;
        } else {
             tempListCountSecondLastIndex = tempListCount-1;
        }

        let splitTempListCountLastIndexValue = tempList[tempListCountLastIndex].value.split(':');
        let splitTempListCountSecondLastIndexValue = tempList[tempListCountSecondLastIndex].value.split(':');
        let totalSum = parseInt(splitTempListCountLastIndexValue[0])*3600 + parseInt(splitTempListCountLastIndexValue[1])*60 + parseInt(splitTempListCountLastIndexValue[2]);
        let totalSplit = parseInt(splitTempListCountSecondLastIndexValue[0])*3600 + parseInt(splitTempListCountSecondLastIndexValue[1])*60 + parseInt(splitTempListCountSecondLastIndexValue[2]);

        let difference =  totalSum - totalSplit ;
        console.log("difference -- " , difference);



         let hours= difference%3600;
         let hoursTotal= parseInt(difference/3600);
         let minute= hours%60;
         let minuteTotal= parseInt(hours/60);
         let secondTotal= minute;


        console.log("hours- " , hours);
        console.log("hoursTotal- " , hoursTotal);
        console.log("minute- " , minute);
        console.log("minuteTotal- " , minuteTotal);
        console.log("secondTotal- " , secondTotal);

       /* seTimeTotal(difference);*/
        let newTimeSecond = timeSecond;
        newTimeSecond.push(secondTotal);
        seTimeSeconds(newTimeSecond);

        let newTimeMinute = timeMinute;
        newTimeMinute.push(minuteTotal);
        seTimeMinute(newTimeMinute);

        let newTimeHours = timeHours;
        newTimeHours.push(hoursTotal);
        seTimeHours(newTimeHours);

        tempList.forEach((list, index)=>{


            console.log("index--  ",index );
            if (index===0){
                console.log("index--In  ",index );
                list.sum = splitTempListCountLastIndexValue[0] +':' + splitTempListCountLastIndexValue[1] +':'+ splitTempListCountLastIndexValue[2];

            }
            else if ( newTimeHours[index]<=1 || newTimeMinute[index]<=1){

                list.sum = newTimeHours[index] +':' + newTimeMinute[index] +':'+ newTimeSecond[index];
            } else {
                console.log("else--  " );
                list.sum = newTimeHours[index] +':' + newTimeMinute[index] +':'+ newTimeSecond[index];
            }

        });
        //tempList[tempListCountLastIndex].sum = sum[0] +':' + sum[1] +':'+ difference;

        setList(tempList);



    };


    const copyToClipboard = () => {

        let txt = document.createElement('textArea');
        list.forEach((listRecord,index)=>{
            if(index===0){
                txt.value +=`Lap  Time  Total
                ${listRecord.key}  ${listRecord.value}  ${listRecord.sum}`;
            }else {
                txt.value +=`
                 ${listRecord.key}  ${listRecord.value}  ${listRecord.sum}`;
            }

        });

        document.body.appendChild(txt);
        txt.select();
        document.execCommand('copy');
        document.body.removeChild(txt);
        success();
    };

    const success = () => {
        message.success('Successfully Copied ');
    };
    const columns = [
        {
            title: 'LAP',
            dataIndex: 'key',
            key: 'key',
            height: 50
        },
        {
            title: 'TIME',
            dataIndex: 'value',
            key: 'value',
            height: 150
        },
        {
            title: 'TOTAL TIME',
            dataIndex: 'sum',
            key: 'sum',
            height: 100
        },

    ];



    const start=() =>{
        setStartButton('second');
        let interval = setInterval(function(){
           count = count + 1;
       setCountValue(count);
                 setMiliSeconds(count % 100);
            setHours(Math.floor((count / 100) / 3600));
            setMinutes(Math.floor(((count / 100) % 3600) / 60));
                 setSeconds(Math.floor(((count / 100) % 3600) % 60));

        }, 10);
        setinterval(interval);

    };

   const lapButton=(m,s,h) =>{

     setIsLapClick(!isLapClick);

       let hoursToShow = (h < 10 ? '0' : '') + h;
       let minutesToShow = (m < 10 ? '0' : '') + m;
       let secondsToShow = (s < 10 ? '0' : '') + s;
       let StopTime = parseInt(hoursToShow) +':'+ parseInt(minutesToShow) +':' + parseInt(secondsToShow);
      SetlapValue(StopTime);

       newlapList(newLap=>newLap.concat(tempArr));

       let tempArray = tempArr;
       tempArray.push(StopTime);
       setTempArray(tempArray);
       tableList(tempArray);

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
        setHours(0);
        setMinutes(0);
        setMiliSeconds(0);
        newlapList([]);
        setList([]);
        seTimeSeconds([]);
        seTimeMinute([]);
        seTimeHours([]);
        setTempArray([]);
      setStartButton('start');

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
                                   {/* <Lap props={newlap}   isLap={isLapClick} lapValue={lapValue}/>*/}

                                    <div className="lapp">
                                        <div>
                                            {
                                                list.length > 0 ?
                                                    <div>
                                                        <div onClick={() => {
                                                            copyToClipboard('')
                                                        }}>
                                                            <Tooltip placement="right" title="copy"> <Icon type="copy" style={{
                                                                marginLeft: 169,
                                                                fontSize: 30
                                                            }}/></Tooltip>
                                                        </div>
                                                        <div className="blockDiv">List</div>

                                                        <Table dataSource={list}
                                                               id="ef"
                                                               rowKey="Id"
                                                               pagination={false}

                                                               columns={columns}
                                                               onRow={() => ({})}

                                                        />

                                                    </div> : null
                                            }
                                        </div>

                                    </div>;

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
