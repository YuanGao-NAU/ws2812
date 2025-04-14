import { Layout } from 'antd';
import PixelGridS from './PixelGridS';
import PixelGridZ from './PixelGridZ';
import { Directions, StartFrom, Mode } from './utils';

interface AppContentProps {
    direction: Directions;
    startFrom: StartFrom;
    mode: Mode;
    rows: number;
    columns: number;
}

const { Content } = Layout;

const AppContent = ({rows, columns, direction=Directions.LeftToRight, startFrom=StartFrom.UpperLeft, mode=Mode.S}: AppContentProps) => {
    return <Content
        style={{
            padding: 24,
            background: '#f5f5f5',
            overflow: 'auto',
        }}
        >
        <div
            style={{
            background: '#fff',
            padding: 16,
            minHeight: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            }}
        >
            {mode === Mode.S ? <PixelGridS rows={rows} columns={columns} direction={direction} startFrom={startFrom} /> :
                <PixelGridZ rows={rows} columns={columns} direction={direction} startFrom={startFrom} />}            
        </div>
    </Content>
}

export default AppContent;