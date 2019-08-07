import { Card ,Typography,Button } from 'antd';
import React, {useState} from 'react';
import useInterval from 'react-useinterval';
import classes from './firstwatch.scss';
import Lap from "../Components/LapList";



const ButtonGroup = Button.Group;
const { Text } = Typography;

const Firstwatch=() => {

    const [inittialStartButton, setStartButton] = useState('start');

    let showButtons = '';

    if(inittialStartButton === 'start'){
        showButtons = (
            <div id="start" className="row">
                <div id="sStartButton"  className="button wide"><span>Start</span></div>
            </div>
        )
    }else if(inittialStartButton === 'second') {
        showButtons = (
            <div id="stop-lap" className="row">
                <div id="sStopButton"  className="button"><span>Stop</span></div>
                <div id="sLapButton"  className="button"><span>Lap</span></div>
            </div>
        )
    }else if(inittialStartButton === 'third') {
        showButtons = (
            <div id="restart-reset" className="row">
                <div id="sRestartButton"  className="button"><span>Restart</span></div>
                <div id="sResetButton"   className="button"><span>Reset</span></div>
            </div>
        )
    }


    let [count, setCount] = useState(0);
    let [delay, setDelay] = useState(1000);

    useInterval(() => {
        // Your custom logic here
        setCount(count + 1);
    }, delay);

    function handleDelayChange(e) {
        setDelay(Number(e.target.value));
    }



    return(
        <div style={{ background: '#ECECEC', padding: '30px' }}>
            <Card title="Card title" bordered={false} style={{ width: 300 }}>


                <div className="sDisplay">
                    <span style={{fontSize: 23, width: 113} }>   00 : 00 : 00 : 000</span>

                        </div>

                <div className="watchCommands">

                    {showButtons}

                </div>

            </Card>

            <h1>{count}</h1>
            <input value={delay} onChange={handleDelayChange} />

        </div>
    )

};

export default Firstwatch;