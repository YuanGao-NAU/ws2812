import { Button, Col, Row } from 'antd';

interface AppFooterProps {
    pixelControl: number[];
    r: number[];
    g: number[];
    b: number[];
}

const AppFooter = (props: AppFooterProps) => {

    return (<div style={{ width: '100%', padding: '24px 16px' }}>
      {/* Title Row */}
      <Row justify="center">
        <Col>
          <Button type="primary" style={{ margin: 0, textAlign: 'center' }} onClick={()=>(console.log("clicked"))} >Download</Button>
        </Col>
      </Row>
    </div>)
}

export default AppFooter;