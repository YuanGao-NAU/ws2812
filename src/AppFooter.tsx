import { Button, Col, Row } from 'antd';

interface AppFooterProps {
  pixelControl: number[];
  r: number[];
  g: number[];
  b: number[];
}

const AppFooter = (props: AppFooterProps) => {

  const onClick = () => {
    
    var pixelControl = props.pixelControl.join(", ");
    pixelControl = "unsigned char pixelControl[] = {" + pixelControl + "};\n";
    var r = props.r.join(", ");
    r = "unsigned char r[] = {" + r + "};\n";
    var g = props.g.join(", ");
    g = "unsigned char g[] = {" + g + "};\n";
    var b = props.b.join(", ");
    b = "unsigned char b[] = {" + b + "};\n";
    

    const blob = new Blob([pixelControl, r, g, b], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'ws2812.h';
    a.click();

    URL.revokeObjectURL(url);
  }

  return (<div style={{ width: '100%', padding: '24px 16px' }}>
    {/* Title Row */}
    <Row justify="center">
      <Col>
        <Button type="primary" style={{ margin: 0, textAlign: 'center' }} onClick={onClick} >Download</Button>
      </Col>
    </Row>
  </div>)
}

export default AppFooter;