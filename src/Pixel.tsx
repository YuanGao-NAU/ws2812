import {useState} from 'react';
import {Button, ColorPicker} from 'antd';
import { AggregationColor } from 'antd/es/color-picker/color';

interface BoxProps {
    index: number;
    pixelControl: number[];
    r: number[];
    g: number[];
    b: number[];
    setPixelControl: (data: number[]) => void;
    setR: (data: number[]) => void;
    setG: (data: number[]) => void;
    setB: (data: number[]) => void;
}

const Pixel = (props: BoxProps) => {
    const [color, setColor] = useState("#808080");
    const onChange = (value: AggregationColor)=> {
        setColor(value.toHexString());
    }

    return <>
        {/* <ColorPicker 
            defaultValue={'#00ff00'} 
            onChange={onChange}
            presets={[
                {
                  label: 'Palette',
                  colors: ['#1677ff', '#f5222d', '#fa8c16', '#52c41a', '#13c2c2'],
                },
              ]}
        > */}
            <Button shape='circle' style={{backgroundColor: color, width: 30, height: 30}}>
                {props.index}
            </Button>
        {/* </ColorPicker> */}
    </>


}

export default Pixel;