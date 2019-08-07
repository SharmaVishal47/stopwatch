import React from 'react';
import classs from './index.scss';
import {Table, List, message, Tooltip, Row, Col} from "antd";

const lap = (props) => {
    let templist = [];
    let index = 1;
    let sum = [];
    let list = [];
    sum[0] = 0;
    sum[1] = 0;
    sum[2] = 0;
    for (let i of props.props) {
        let spiltValue = [];
        spiltValue = i.split(':');
        sum[0] = sum[0] + parseInt(spiltValue[0]);
        sum[1] = sum[1] + parseInt(spiltValue[1]);
        sum[2] = sum[2] + parseInt(spiltValue[2]);
        templist.push({
            key: index,
            value: i,
            sum: sum[0] + ':' + sum[1] + ':' + sum[2]
        })
        index++;
    }

    for (let x = templist.length; x > 0; x--) {
        list.push(templist[x - 1]);
    }

    const copyToClipboard = (keyid) => {
        let record = Object.values(list).filter((item) => {
            return item.key === keyid
        });
        let txt = document.createElement('textarea');
        txt.value += record[0].key + ' ' + record[0].value + ' ' + record[0].sum + ' ';
        document.body.appendChild(txt);
        txt.select();
        document.execCommand('copy');
        document.body.removeChild(txt);
        success();
    }

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
    if (list.length > 0) {
        showData = (<div>
                <div className="blockDiv">List</div>

               {/* <div style={{width: 261}}>
                    <Row>
                        <Col span={8}>
                            LAP
                        </Col>
                        <Col span={8}>
                            TIME
                        </Col>
                        <Col span={8}>
                            TOTAL TIME
                        </Col>
                        <Col span={24}>
                            <hr/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            {templist.map(item => (

                                <Tooltip placement="top" title={"Copy"}>
                                       <Row>
                                        <Col span={8}>
                                            <p>{item.key}</p>
                                        </Col>
                                        <Col span={8}>
                                            <p>{item.sum}</p>
                                        </Col>
                                        <Col span={8}>
                                            <p>{item.value}</p>
                                        </Col>
                                                   </Row>
                                    <Row>
                                               <Col span={24}><hr/></Col>
                                               </Row>
                                </Tooltip>


                            ))}

                        </Col>


                    </Row>
*/}
                    <Table  dataSource={list}
                                id="ef"
                                rowKey="Id"
                                pagination={false}

                                columns={columns}
                                onRow={(record) => ({
                                    onClick: () => { copyToClipboard(record.key) }
                                })}
                        />
                </div>




        )
    }

    return (

        <div className="lapp">

            {showData}

        </div>

    );
}

export default lap;
