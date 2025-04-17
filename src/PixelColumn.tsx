import Pixel from './Pixel';

interface PixelColumnProps {
    startIndex: number;
    rows: number;
    bottomToTop?: boolean;
    color: string;
    pixelControl: number[];
    r: number[];
    g: number[];
    b: number[];
    setPixelControl: (data: number[]) => void;
    setR: (data: number[]) => void;
    setG: (data: number[]) => void;
    setB: (data: number[]) => void;
  }
  
  const PixelColumn = (props: PixelColumnProps) => {
    const pixels = Array.from({ length: props.rows }, (_, i) => (
      <Pixel 
        key={i + props.startIndex} 
        index={props.startIndex + i} 
        color={props.color}
        pixelControl={props.pixelControl}
        r={props.r} 
        g={props.g} 
        b={props.b}
        setPixelControl={props.setPixelControl}
        setR={props.setR}
        setG={props.setG}
        setB={props.setB}
      />
    ));
  
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {props.bottomToTop ? pixels.reverse() : pixels}
      </div>
    );
  };

export default PixelColumn;