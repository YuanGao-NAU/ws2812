import { Layout } from 'antd';
import PixelGridS from './PixelGridS';
import PixelGridZ from './PixelGridZ';
import { Directions, StartFrom, Mode } from './utils';
import { Row, Col, Card } from 'antd';

interface AppContentProps {
    direction: Directions;
    startFrom: StartFrom;
    mode: Mode;
    rows: number;
    columns: number;
}

const AppContent = ({rows, columns, direction=Directions.LeftToRight, startFrom=StartFrom.UpperLeft, mode=Mode.S}: AppContentProps) => {
    return (
        
      <Row justify="center" gutter={[16, 16]}>
        <Col flex="none">
        {mode === Mode.S ? <PixelGridS rows={rows} columns={columns} direction={direction} startFrom={startFrom} /> :
                <PixelGridZ rows={rows} columns={columns} direction={direction} startFrom={startFrom} />}           
        </Col>
      </Row>
    
    )
}

export default AppContent;