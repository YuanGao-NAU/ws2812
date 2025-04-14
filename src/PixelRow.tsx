import {useState} from 'react';
import Pixel from './Pixel';

interface PixelSetProps {
    startIndex: number;
    columns: number;
    rightToLeft?: boolean;
}

const PixelRow = (props: PixelSetProps) => {
    
    const pixels = Array.from({ length: props.columns }, (_, index) => (
        <Pixel index={props.startIndex + index}/>
      ))

    return (
        <div style={{ display: 'flex', gap: 5 }}>
          {props.rightToLeft ? pixels.reverse() : pixels}
        </div>
      );
}

export default PixelRow;