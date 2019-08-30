/*
import React from 'react';

import {Table, message, Tooltip, Icon} from "antd";


const Lap =(props ) =>{
    let tempList =[];
    let index = 1;
    let sum = [];
    let list =[];
    sum[0] =0;
    sum[1] =0;
    sum[2] =0;



    for(let i of props.props)
    {
        let spiltValue= [];
        spiltValue = i.split(':');
        sum[0]=sum[0]+parseInt(spiltValue[0]);
        sum[1]=sum[1]+parseInt(spiltValue[1]);
        sum[2]=sum[2]+parseInt(spiltValue[2]);


        let totalSum = parseInt(sum[0])*3600 + parseInt(sum[1])*60 + parseInt(sum[2]);
        let totalSplit = parseInt(spiltValue[0])*3600 + parseInt(spiltValue[1])*60 + parseInt(spiltValue[2]);

        console.log("totalSum -- " , +totalSum);
        console.log("totalSplit -- " , +totalSplit);
        let difference = totalSplit - totalSum;
        console.log("difference -- " , +difference);
        /!*
                let hours= difference%3600;
                let hoursTotal= difference/3600;
                let minute= hours%60;
                let minuteTotal= hours/60;
                let secondTotal= minute;
        *!/

        tempList.push({
            key: index,
            value :i,
            sum: sum[0] +':' + sum[1] +':'+ sum[2]
        });
        index++;
    }

    for (let x=tempList.length ; x>0;x--){
        list.push(tempList[x-1]);
    }


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


    return <div className="lapp">
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
};

export default Lap;*/
