import { Button, ColorPicker, Space, Typography } from 'antd';
const { Text } = Typography;
import { AggregationColor } from 'antd/es/color-picker/color';

interface ColorPaletteProps {
    color: string;
    onColorChange: (value: AggregationColor) => void;
}

const vibrantColors = [
    '#ff4d4f', '#ff7a45', '#ffa940', '#ffc53d', '#ffec3d',
    '#bae637', '#73d13d', '#36cfc9', '#40a9ff', '#597ef7',
  ];

const pastelColors = [
    '#ffd6e7', '#ffe7ba', '#fff1b8', '#e4f7ba', '#bae7ff',
    '#d6e4ff', '#efdbff', '#ffd8bf', '#ffe58f', '#d9f7be',
  ];

const neutralColors = [
    '#ffffff', '#fafafa', '#f5f5f5', '#e8e8e8', '#d9d9d9',
    '#bfbfbf', '#8c8c8c', '#595959', '#262626', '#000000',
  ];
  
const grayscaleColors = [
    '#f0f0f0', '#d9d9d9', '#bfbfbf', '#8c8c8c', '#595959',
    '#434343', '#262626', '#1f1f1f', '#141414', '#000000',
  ];

const darkColors = [
    '#1d1d1d', '#112a45', '#1e1e2f', '#0f2f3f', '#1a1a40',
    '#003a8c', '#10239e', '#391085', '#780650', '#120338',
  ];

const colorPresets = [
    { label: 'Vibrant', colors: vibrantColors },
    { label: 'Pastel', colors: pastelColors },
    { label: 'Neutral', colors: neutralColors },
    { label: 'Grayscale', colors: grayscaleColors },
    { label: 'Dark', colors: darkColors },
  ];

const ColorPalette = (props: ColorPaletteProps) => {
    return (<Space direction="horizontal">
        <Text>Color Picker</Text>
        <ColorPicker 
            defaultValue={'#00ff00'} 
            onChange={props.onColorChange}
            presets={colorPresets}
        >
            <Button shape='circle' style={{backgroundColor: props.color, width: 30, height: 30}}/>
        </ColorPicker>
    </Space>)
}

export default ColorPalette;