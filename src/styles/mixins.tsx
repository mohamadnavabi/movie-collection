import { Dimensions, PixelRatio } from 'react-native';

// GET WINDOWS WIDTH
const WINDOW_WIDTH = Dimensions.get('window').width;
const guidelineBaseWidth = 375;

// GET SCALE SIZE
export const scaleSize = size => (WINDOW_WIDTH / guidelineBaseWidth) * size;

// GET FONT SCALE
export const scaleFont = size => size * PixelRatio.getFontScale();


// SET PADDING - MARGIN BASE DIMENSIONS
function dimensions(top, right = top, bottom = top, left = right, property: string) {
    let styles = {};

    styles[`${property}Top`] = top;
    styles[`${property}Right`] = right;
    styles[`${property}Bottom`] = bottom;
    styles[`${property}Left`] = left;

    return styles;
}

// SET MARGIN
export function margin(top: number, right: number, bottom: number, left: number) {
    return dimensions(top, right, bottom, left, 'margin');
}

// SET PADDING
export function padding(top: number, right: number, bottom: number, left: number) {
    return dimensions(top, right, bottom, left, 'padding');
}

// SET BOX SHADOW
export function boxShadow(color: string, offset = { height: 2, width: 2 }, radius = 8, opacity = 0.2,) {
    return {
        shadowColor: color,
        shadowOffset: offset,
        shadowOpacity: opacity,
        shadowRadius: radius,
        elevation: radius,
    };
}