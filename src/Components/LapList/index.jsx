import React, {useEffect} from 'react';

import {Table, List, message, Tooltip, Icon} from "antd";


const Lap =(props ) =>{
    let templist =[];
    let index = 1;
    let sum = [];
    let list =[];
    sum[0] =0;
    sum[1] =0;
    sum[2] =0;


    useEffect(() => {
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
        let diffrence = totalSplit - totalSum;
        console.log("diffrence -- " , +diffrence);
/*
        let hours= diffrence%3600;
        let hoursTotal= diffrence/3600;
        let minute= hours%60;
        let minuteTotal= hours/60;
        let secondTotal= minute;
*/

        templist.push({
            key: index,
            value :i,
            sum: sum[0] +':' + sum[1] +':'+ sum[2]
        });
        index++;
    }

    for (let x=templist.length ; x>0;x--){
        list.push(templist[x-1]);
    }

    }, [props.isLap]);
    const copyToClipboard = () => {
        /*let record = Object.values(list).filter((item) => {
            return item.key === keyid
        });*/
        let txt = document.createElement('textarea');

        console.log("list---",list);

        list.forEach((listRecord,index)=>{
            /*  console.log("listRecord---",listRecord);
              console.log("index---",index);*/
            if(index===0){
                txt.value +=`Lap  Time  Total
                ${listRecord.key}  ${listRecord.value}  ${listRecord.sum}`;
            }else {
                txt.value +=`
                 ${listRecord.key}  ${listRecord.value}  ${listRecord.sum}`;
            }

        });
        /*   console.log("txt.value---",txt.value);*/

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

    let showData = '';
    let listLength = list.length;


    return (

        <div className="lapp">
            <div>


                {
                    list.length>0?


                        <div>
                            <div onClick={() => { copyToClipboard('') }}>
                                <Tooltip placement="right" title="copy"> <Icon type="copy"  style={{marginLeft: 169, fontSize: 30}} /></Tooltip>
                            </div>
                            <div className="blockDiv">List</div>

                            <Table  dataSource={list}
                                    id="ef"
                                    rowKey="Id"
                                    pagination={false}

                                    columns={columns}
                                    onRow={() => ({
                                    })}

                            />

                        </div>:null
                }


            </div>

        </div>

    );
};

export default Lap;