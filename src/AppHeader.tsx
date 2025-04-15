import { Col, InputNumber, Layout, Row, Select, Space, Typography } from 'antd';
import { Directions, Mode, StartFrom } from './utils';
import { debounce } from 'lodash';
import { useEffect, useCallback } from 'react';

const { Option } = Select;
const { Title,Text } = Typography;

interface AppHeaderProps {
  setDirection: (direction: Directions) => void;
  setStartFrom: (startFrom: StartFrom) => void;
  setMode: (mode: Mode) => void;
  setRows: (rows: any) => void;
  setColumns: (columns: any) => void;
}

const AppHeader = (props: AppHeaderProps) => {

  const onDirectionChange = (value: string) => {
    var direction = Directions.TopToBottom;
    switch(value) {
      case "TopToBottom": {
        direction = Directions.TopToBottom;
        break;
      }
      case "BottomToTop": {
        direction = Directions.BottomToTop;
        break;
      }
      case "LeftToRight": {
        direction = Directions.LeftToRight;
        break;
      }
      case "RightToLeft": {
        direction = Directions.RightToLeft;
        break;
      }
    }
    props.setDirection(direction);
  }

  const onStartFromChange = (value: string) => {
    var startFrom = StartFrom.LowerLeft;
    switch(value) {
      case "LowerLeft": {
        startFrom = StartFrom.LowerLeft;
        break;
      }
      case "LowerRight": {
        startFrom = StartFrom.LowerRight;
        break;
      }
      case "UpperLeft": {
        startFrom = StartFrom.UpperLeft;
        break;
      }
      case "UpperRight": {
        startFrom = StartFrom.UpperRight;
        break;
      }
    }
    props.setStartFrom(startFrom);
  }

  const onModeChange = (value: string) => {
    var mode = Mode.S;
    switch(value) {
      case "S": {
        mode = Mode.S;
        break;
      }
      case "Z": {
        mode = Mode.Z;
        break;
      }
    }
    props.setMode(mode);
  }

  const delayedSetRows = useCallback(debounce((value: any) => {
    console.log(value);
    props.setRows(value);
  }, 500), []);

  const delayedSetColumns = useCallback(debounce((value: any) => {
    console.log(value);
    props.setColumns(value);
  }, 500), []);

  return (
    <div style={{ width: '100%', padding: '24px 16px' }}>
      {/* Title Row */}
      <Row justify="center">
        <Col>
          <Title level={2} style={{ margin: 0, textAlign: 'center' }}>
            Pixel Art Generator
          </Title>
        </Col>
      </Row>

      {/* Selects Row */}
      <Row
        justify="center"
        gutter={[16, 16]}
        style={{ marginTop: 16 }}
      >
        <Col xs={12} sm={6} md={4} lg={3}>
                 
             <Text>Direction</Text>
             <Select defaultValue="TopToBottom" style={{ width: '100%' }} onChange={(value) => onDirectionChange(value)}>
               <Option value="TopToBottom">Top to Bottom</Option>
               <Option value="BottomToTop">Bottom to Top</Option>
               <Option value="LeftToRight">Left to Right</Option>
               <Option value="RightToLeft">Right to Left</Option>
             </Select>
             </Col>

             <Col xs={12} sm={6} md={4} lg={3}>
             <Text>Start From</Text>
             <Select defaultValue="UpperLeft" style={{ width: '100%' }} onChange={(value) => onStartFromChange(value)}>
               <Option value="UpperLeft">Higher Left</Option>
               <Option value="UpperRight">Higher Right</Option>
               <Option value="LowerLeft">Lower Left</Option>
               <Option value="LowerRight">Lower Right</Option>
             </Select>
             </Col>

             <Col xs={12} sm={6} md={4} lg={3}>
             <Text>Mode</Text>
             <Select defaultValue="S" style={{ width: '100%' }} onChange={(value) => onModeChange(value)}>
               <Option value="S">S</Option>
               <Option value="Z">Z</Option>
             </Select>
             </Col>

             <Col xs={12} sm={6} md={4} lg={3}>
             <Text>Rows</Text>
             <InputNumber style={{ width: '100%' }} onChange={delayedSetRows}/>
             </Col>

             <Col xs={12} sm={6} md={4} lg={3}>
             <Text>Columns</Text>
             <InputNumber style={{ width: '100%' }} onChange={delayedSetColumns}/>
             </Col>
           
        
      </Row>
    </div>
  )
}



export default AppHeader;
