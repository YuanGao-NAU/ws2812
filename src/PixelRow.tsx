import Pixel from './Pixel';

interface PixelSetProps {
    startIndex: number;
    columns: number;
    rightToLeft?: boolean;
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

const PixelRow = (props: PixelSetProps) => {
    
    const pixels = Array.from({ length: props.columns }, (_, index) => (
        <Pixel 
          key={props.startIndex + index} 
          index={props.startIndex + index}
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
      ))

    return (
        <div style={{ display: 'flex', gap: 5 }}>
          {props.rightToLeft ? pixels.reverse() : pixels}
        </div>
      );
}

export default PixelRow;