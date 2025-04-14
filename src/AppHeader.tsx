import { Layout, Select, Space, Typography } from 'antd';
import { Directions, Mode, StartFrom } from './utils';

const { Header } = Layout;
const { Option } = Select;
const { Title } = Typography;

interface AppHeaderProps {
  setDirection: (direction: Directions) => void;
  setStartFrom: (startFrom: StartFrom) => void;
  setMode: (mode: Mode) => void;
  // direction: Directions;
  // startFrom: StartFrom;
  // mode: Mode;
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

  return (
      <Header
        style={{
          background: '#fff',
          padding: '0 24px',
          borderBottom: '1px solid #f0f0f0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Title level={4} style={{ margin: 0 }}>
          Pixel Grid Config
        </Title>

        <Space>
          <Select defaultValue="TopToBottom" style={{ width: 120 }} onChange={(value) => onDirectionChange(value)}>
            <Option value="TopToBottom">Top to Bottom</Option>
            <Option value="BottomToTop">Bottom to Top</Option>
            <Option value="LeftToRight">Left to Right</Option>
            <Option value="RightToLeft">Right to Left</Option>
          </Select>

          <Select defaultValue="UpperLeft" style={{ width: 120 }} onChange={(value) => onStartFromChange(value)}>
            <Option value="UpperLeft">Higher Left</Option>
            <Option value="UpperRight">Higher Right</Option>
            <Option value="LowerLeft">Lower Left</Option>
            <Option value="LowerRight">Lower Right</Option>
          </Select>

          <Select defaultValue="S" style={{ width: 80 }} onChange={(value) => onModeChange(value)}>
            <Option value="S">S</Option>
            <Option value="Z">Z</Option>
          </Select>
        </Space>
      </Header>
  );
};

export default AppHeader;
