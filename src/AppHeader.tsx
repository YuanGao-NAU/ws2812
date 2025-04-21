import { Button, Col, Form, InputNumber, Row, Select, Typography } from 'antd';
import { Directions, Mode, StartFrom } from './utils';
import { AggregationColor } from 'antd/es/color-picker/color';
import ColorPalette from './ColorPalette';

const { Option } = Select;
const { Title } = Typography;

interface AppHeaderProps {
  setDirection: (direction: Directions) => void;
  setStartFrom: (startFrom: StartFrom) => void;
  setMode: (mode: Mode) => void;
  setRows: (rows: any) => void;
  setColumns: (columns: any) => void;
  handleOnChange: () => void;
  color: string;
  onColorChange: (value: AggregationColor) => void;
}

const AppHeader = (props: AppHeaderProps) => {

  const [form] = Form.useForm();
  
  const onDirectionChange = (value: string) => {
    var direction = Directions.vertical;
    switch(value) {
      case "vertical": {
        direction = Directions.vertical;
        break;
      }
      case "horizontal": {
        direction = Directions.horizontal;
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

  const onFinish = (values: any) => {
    console.log(values);
    onDirectionChange(values.direction);
    onStartFromChange(values.startFrom);
    onModeChange(values.mode);
    props.setRows(values.rows);
    props.setColumns(values.columns);
    props.handleOnChange();
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

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
        <Form 
          name="form"
          layout='inline'
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          form={form}
          initialValues={{ "direction": "vertical", "startFrom": "UpperLeft", "mode": "S", "rows": 4, "columns": 4 }}
        >
          {/* <Col xs={12} sm={6} md={4} lg={3}>     */}
            {/* <Text>Direction</Text> */}
            <Form.Item name="direction" label="Direction">
              <Select style={{ width: '100%' }}>
                <Option value="vertical">Vertical</Option>
                <Option value="horizontal">Horizontal</Option>
              </Select>
            </Form.Item>
          {/* </Col> */}

          {/* <Col xs={12} sm={6} md={4} lg={3}> */}
            {/* <Text>Start From</Text> */}
            <Form.Item name="startFrom" label="Start From">
              <Select style={{ width: '100%' }}>
                <Option value="UpperLeft">Higher Left</Option>
                <Option value="UpperRight">Higher Right</Option>
                <Option value="LowerLeft">Lower Left</Option>
                <Option value="LowerRight">Lower Right</Option>
              </Select>
            </Form.Item>
          {/* </Col> */}

          {/* <Col xs={12} sm={6} md={4} lg={3}> */}
            {/* <Text>Mode</Text> */}
            <Form.Item name="mode" label="Mode">
              <Select style={{ width: '100%' }}>
                <Option value="S">S</Option>
                <Option value="Z">Z</Option>
              </Select>
            </Form.Item>
          {/* </Col> */}

          {/* <Col xs={12} sm={6} md={4} lg={3}> */}
            {/* <Text>Rows</Text> */}
            <Form.Item 
              name="rows" 
              label="Rows" 
              rules={[
                {
                    required: true,
                    message: "This field is required"
                },
              ]}
            >
              <InputNumber style={{ width: '100%' }}/>
            </Form.Item>
          {/* </Col> */}

          {/* <Col xs={12} sm={6} md={4} lg={3}> */}
            {/* <Text>Columns</Text> */}
            <Form.Item 
              name="columns" 
              label="Columns" 
              rules={[
                {
                    required: true,
                    message: "This field is required"
                },
              ]}
            >
              <InputNumber style={{ width: '100%' }}/>
            </Form.Item>
          {/* </Col> */}

          {/* <Col xs={12} sm={6} md={4} lg={3}> */}
            <Form.Item>
              <Button type={"primary"} htmlType={"submit"}>Submit</Button>
            </Form.Item>
          {/* </Col> */}
        </Form>
      </Row>

      <Row 
        justify="center"
        gutter={[16, 16]}
        style={{ marginTop: 16 }}
      >
        <Col>
          <ColorPalette color={props.color} onColorChange={props.onColorChange}/>
        </Col>
      </Row>

    </div>
  )
}

export default AppHeader;
