import { Card ,Typography,Button } from 'antd';
import React from 'react';
import classes from './new.scss';
import Lap from "../Components/LapList";



const ButtonGroup = Button.Group;
const { Text } = Typography;

const New=() => {

    return(
      {/*  <div style={{justifyContent: "center",
            display: "flex",
            position: "relative"}} >

            <Card  style={{ width: 600,height:600, backgroundColor: "rgb(63, 154, 180)",justifyContent: "center",
                display: "flex",
                position: "relative"}}>
                <div style={{ paddingTop: 85}} >
                <Card title="Stop Watch" size="small"  style={{ width: 400, height: 400    }}>
                    <div style={{ paddingTop: 90,justifyContent: "center",
                        display: "flex",
                        position: "relative", alignItems: "center" }}>
                        <Text  type="secondary" style={{ padding: 1, fontSize:50 }}>
                          <p style={{ padding: 1, fontsize:20 }}>
                              09 : 38 : 45
                          </p>
                        </Text>
                        <div className="row">
                            <Lap props={newlap}/>
                        </div>
                    </div>
                    <ButtonGroup>
                        <Button type="primary">Primary</Button>
                        <Button type="danger">Danger</Button>
                    </ButtonGroup>
                </Card>
                </div>
            </Card>

        </div>*/}
    )

}

export default New;