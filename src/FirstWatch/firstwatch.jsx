import { Card ,Typography,Button } from 'antd';
import React, {useState} from 'react';




const ButtonGroup = Button.Group;
const { Text } = Typography;

const Firstwatch=() => {




    return(

        <div>

            <div className="container">

                <div id="page-header" className="page-header">
               {/*     <span>St</span><img
                    src="https://res.cloudinary.com/dftignrf8/image/upload/v1480901935/stopwatch_st153j.png"><span>pwatch</span>
                </img>*/}
                </div>

                <div className="jumbotron">

                    <div id="stopwatch">

                        <div id="time">
                            <span id="timeHour">00</span>:<span id="timeMinute">00</span>:<span
                            id="timeSec">00</span>.<span id="timeCsec">00</span>
                        </div>
                        <div id="lap">
                            <span id="lapHour">00</span>:<span id="lapMinute">00</span>:<span
                            id="lapSec">00</span>.<span id="lapCsec">00</span>
                        </div>
                    </div>

                    <div className="container">
                        <div className="controls">
                            <button type="button" id="startStop" className="btn-controls">
                                <span className="glyphicon glyphicon-play" aria-hidden="true"></span>
                                <span className="sr-only">Start</span>
                            </button>
                            <button type="button" id="split" className="btn-controls">Split</button>
                            <button type="button" id="reset" className="btn-controls">Reset</button>
                        </div>
                    </div>

                </div>

                <div id="lapTable" className="container">
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Lap</th>
                            <th>Interval</th>
                            <th>Total</th>
                            <th>Time Recorded</th>
                        </tr>
                        </thead>
                        <tbody id="laptimes">

                        </tbody>
                    </table>
                </div>
            </div>




        </div>

    )

};

export default Firstwatch;