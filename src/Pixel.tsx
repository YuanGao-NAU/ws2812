import { useEffect, useState } from 'react';
import { Button } from 'antd';

interface BoxProps {
    index: number;
    pixelControl: number[];
    color: string;
    resized: number;
    r: number[];
    g: number[];
    b: number[];
    setPixelControl: (data: number[]) => void;
    setR: (data: number[]) => void;
    setG: (data: number[]) => void;
    setB: (data: number[]) => void;
}

const Pixel = (props: BoxProps) => {

    const [color, setColor] = useState("#8c8c8c");
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

    useEffect(() => {
        setColor("#8c8c8c");
    }, [props.resized])

    const onContextMenu = (e: any) => {
        e.preventDefault();
        setColor("#8c8c8c");
        updateItem(props.index, 0, props.pixelControl, props.setPixelControl);
        updateItem(props.index, 0, props.r, props.setR);
        updateItem(props.index, 0, props.g, props.setG);
        updateItem(props.index, 0, props.b, props.setB);
    }

    return <>
        <Button onClick={onClick} onContextMenu={onContextMenu} shape='circle' style={{backgroundColor: color, width: 30, height: 30}}>
            {props.index}
        </Button>
    </>
}

export default Pixel;