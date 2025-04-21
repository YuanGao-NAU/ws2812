import PixelGridS from './PixelGridS';
import PixelGridZ from './PixelGridZ';
import { Directions, StartFrom, Mode } from './utils';
import { Row, Col } from 'antd';

interface AppContentProps {
    direction: Directions;
    startFrom: StartFrom;
    mode: Mode;
    rows: number;
    columns: number;
    color: string;
    resized: number;
    pixelControl: number[];
    r: number[];
    g: number[];
    b: number[];
    setPixelControl: (data: number[]) => void;
    setR: (data: number[]) => void;
    setG: (data: number[]) => void;
    setB: (data: number[]) => void;
}

const AppContent = (props: AppContentProps) => {
    return (
        
      <Row justify="center" gutter={[16, 16]}>
        <Col flex="none">
        {props.mode === Mode.S ? 
                <PixelGridS 
                  rows={props.rows} 
                  columns={props.columns} 
                  direction={props.direction} 
                  startFrom={props.startFrom} 
                  color={props.color}
                  resized={props.resized}
                  pixelControl={props.pixelControl}
                  r={props.r}
                  g={props.g}
                  b={props.b}
                  setPixelControl={props.setPixelControl}
                  setR={props.setR}
                  setG={props.setG}
                  setB={props.setB}/> :
                <PixelGridZ 
                  rows={props.rows} 
                  columns={props.columns} 
                  direction={props.direction} 
                  startFrom={props.startFrom} 
                  color={props.color}
                  resized={props.resized}
                  pixelControl={props.pixelControl}
                  r={props.r}
                  g={props.g}
                  b={props.b}
                  setPixelControl={props.setPixelControl}
                  setR={props.setR}
                  setG={props.setG}
                  setB={props.setB}/>}           
        </Col>
      </Row>
    
    )
}

export default AppContent;