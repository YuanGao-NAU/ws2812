import { useState } from 'react';
import { Button } from 'antd';
import { AggregationColor } from 'antd/es/color-picker/color';

interface BoxProps {
    index: number;
    pixelControl: number[];
    color: string;
    r: number[];
    g: number[];
    b: number[];
    setPixelControl: (data: number[]) => void;
    setR: (data: number[]) => void;
    setG: (data: number[]) => void;
    setB: (data: number[]) => void;
}

const Pixel = (props: BoxProps) => {

    const [color, setColor] = useState("#000000");
    const onClick = () => {
        setColor(props.color);
        const rgb = hexToRgb(props.color);
        updateItem(props.index, 1, props.pixelControl, props.setPixelControl);
        updateItem(props.index, rgb.r, props.r, props.setR);
        updateItem(props.index, rgb.g, props.g, props.setG);
        updateItem(props.index, rgb.b, props.b, props.setB);
    }

    const updateItem = (indexToUpdate: number, newItem: number, prev: number[], setMethod: (data: number[]) => void) => {
        setMethod(prev.map((item, index) =>
            index === indexToUpdate ? newItem : item
          ))
      };

    const hexToRgb = (hex: string) => {
        // Remove '#' if present
        hex = hex.replace(/^#/, '');
      
        // If shorthand like '#f70', expand it
        if (hex.length === 3) {
          hex = hex.split('').map(char => char + char).join('');
        }
      
        const bigint = parseInt(hex, 16);
        const r = (bigint >> 16) & 255;
        const g = (bigint >> 8) & 255;
        const b = bigint & 255;
      
        return { r, g, b };
    }

    return <>
        <Button onClick={onClick} shape='circle' style={{backgroundColor: color, width: 30, height: 30}}>
            {props.index}
        </Button>
    </>
}

export default Pixel;