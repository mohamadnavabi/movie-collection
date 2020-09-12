import { Platform } from 'react-native';
import { scaleFont } from './mixins';

// FONT FAMILY
export const FONT_FAMILY_REGULAR = Platform.OS === 'ios' ? 'System' : 'OpenSans-Regular';
export const FONT_FAMILY_BOLD = Platform.OS === 'ios' ? 'System' : 'OpenSans-Regular';

// FONT WEIGHT
export const FONT_WEIGHT_REGULAR = '400';
export const FONT_WEIGHT_BOLD = '700';

// FONT SIZE
export const FONT_SIZE_24 = scaleFont(24);
export const FONT_SIZE_16 = scaleFont(16);
export const FONT_SIZE_14 = scaleFont(14);
export const FONT_SIZE_12 = scaleFont(12);

// LINE HEIGHT
export const LINE_HEIGHT_24 = scaleFont(24);
export const LINE_HEIGHT_20 = scaleFont(20);
export const LINE_HEIGHT_16 = scaleFont(16);

// FONT REGULAR STYLE
export const FONT_REGULAR = {
    fontFamily: FONT_FAMILY_REGULAR,
    fontWeight: FONT_WEIGHT_REGULAR,
};

// FONT BOLD STYLE
export const FONT_BOLD = {
    fontFamily: FONT_FAMILY_BOLD,
    fontWeight: FONT_WEIGHT_BOLD,
};
