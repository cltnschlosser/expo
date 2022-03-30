import { spacing, lightTheme, darkTheme, borderRadius } from '@expo/styleguide-native';
import { Platform, StyleSheet } from 'react-native';
export const scale = {
    micro: spacing[0.5],
    tiny: spacing[1],
    small: spacing[3],
    medium: spacing[4],
    large: spacing[6],
    xl: spacing[8],
    ...spacing,
};
function fullSpacingScaleForAttributes(attributes) {
    const obj = {};
    Object.keys(scale).forEach((key) => {
        key = `${key}`;
        const value = {};
        attributes.forEach((attribute) => {
            value[attribute] = scale[key];
        });
        obj[key] = value;
    });
    return obj;
}
export const padding = {
    padding: fullSpacingScaleForAttributes(['padding']),
    px: fullSpacingScaleForAttributes(['paddingHorizontal']),
    py: fullSpacingScaleForAttributes(['paddingVertical']),
    pb: fullSpacingScaleForAttributes(['paddingBottom']),
    pt: fullSpacingScaleForAttributes(['paddingTop']),
};
export const margin = {
    margin: fullSpacingScaleForAttributes(['margin']),
    mx: fullSpacingScaleForAttributes(['marginHorizontal']),
    my: fullSpacingScaleForAttributes(['marginVertical']),
    mb: fullSpacingScaleForAttributes(['marginBottom']),
    mt: fullSpacingScaleForAttributes(['marginTop']),
};
export const width = fullSpacingScaleForAttributes(['width']);
export const height = fullSpacingScaleForAttributes(['height']);
export const rounded = {
    rounded: {
        none: { borderRadius: 0 },
        small: { borderRadius: borderRadius.small },
        medium: { borderRadius: borderRadius.medium },
        large: { borderRadius: borderRadius.large },
        full: { borderRadius: 99999 },
    },
    roundedTop: {
        none: { borderTopLeftRadius: 0, borderTopRightRadius: 0 },
        small: { borderTopLeftRadius: borderRadius.small, borderTopRightRadius: borderRadius.small },
        medium: {
            borderTopLeftRadius: borderRadius.medium,
            borderTopRightRadius: borderRadius.medium,
        },
        large: { borderTopLeftRadius: borderRadius.large, borderTopRightRadius: borderRadius.large },
        full: { borderTopLeftRadius: 9999, borderTopRightRadius: 9999 },
    },
    roundedBottom: {
        none: { borderBottomLeftRadius: 0, borderBottomRightRadius: 0 },
        small: {
            borderBottomLeftRadius: borderRadius.small,
            borderBottomRightRadius: borderRadius.small,
        },
        medium: {
            borderBottomLeftRadius: borderRadius.medium,
            borderBottomRightRadius: borderRadius.medium,
        },
        large: {
            borderBottomLeftRadius: borderRadius.large,
            borderBottomRightRadius: borderRadius.large,
        },
        full: { borderBottomLeftRadius: 9999, borderBottomRightRadius: 9999 },
    },
};
export const text = {
    align: {
        center: { textAlign: 'center' },
    },
    size: {
        small: {
            fontSize: 12,
            lineHeight: 18,
        },
        medium: {
            fontSize: 16,
            lineHeight: 22,
        },
        large: {
            fontSize: 18,
            lineHeight: 26,
        },
    },
    leading: {
        large: { lineHeight: 18 },
    },
    type: {
        mono: {
            fontFamily: Platform.OS === 'ios' ? 'Menlo' : 'monospace',
        },
        InterBlack: { fontFamily: 'Inter-Black' },
        InterBlackItalic: { fontFamily: 'Inter-BlackItalic' },
        InterBold: { fontFamily: 'Inter-Bold' },
        InterBoldItalic: { fontFamily: 'Inter-BoldItalic' },
        InterExtraBold: { fontFamily: 'Inter-ExtraBold' },
        InterExtraBoldItalic: { fontFamily: 'Inter-ExtraBoldItalic' },
        InterExtraLight: { fontFamily: 'Inter-ExtraLight' },
        InterExtraLightItalic: { fontFamily: 'Inter-ExtraLightItalic' },
        InterRegular: { fontFamily: 'Inter-Regular' },
        InterItalic: { fontFamily: 'Inter-Italic' },
        InterLight: { fontFamily: 'Inter-Light' },
        InterLightItalic: { fontFamily: 'Inter-LightItalic' },
        InterMedium: { fontFamily: 'Inter-Medium' },
        InterMediumItalic: { fontFamily: 'Inter-MediumItalic' },
        InterSemiBold: { fontFamily: 'Inter-SemiBold' },
        InterSemiBoldItalic: { fontFamily: 'Inter-SemiBoldItalic' },
        InterThin: { fontFamily: 'Inter-Thin' },
        InterThinItalic: { fontFamily: 'Inter-ThinItalic' },
    },
    weight: {
        thin: { fontFamily: 'Inter-Thin' },
        extralight: { fontFamily: 'Inter-ExtraLight' },
        light: { fontFamily: "Inter-Light" },
        normal: { fontFamily: "Inter-Regular" },
        medium: { fontFamily: "Inter-Medium" },
        semibold: { fontFamily: "Inter-SemiBold" },
        bold: { fontFamily: "Inter-Bold" },
        extrabold: { fontFamily: "Inter-ExtraBold" },
        black: { fontFamily: "Inter-Black" },
    },
    color: {
        default: { color: lightTheme.text.default },
        error: { color: lightTheme.text.error },
        warning: { color: lightTheme.text.warning },
        success: { color: lightTheme.text.success },
        secondary: { color: lightTheme.text.secondary },
        primary: { color: lightTheme.button.primary.background },
        link: { color: lightTheme.link.default },
    },
};
export const textDark = {
    base: {
        color: darkTheme.text.default,
    },
    color: {
        default: { color: darkTheme.text.default },
        error: { color: darkTheme.text.error },
        warning: { color: darkTheme.text.warning },
        success: { color: darkTheme.text.success },
        secondary: { color: darkTheme.text.secondary },
        primary: { color: darkTheme.button.primary.background },
        link: { color: darkTheme.link.default },
    },
};
export const bg = {
    none: { backgroundColor: 'transparent' },
    default: { backgroundColor: lightTheme.background.default },
    secondary: { backgroundColor: lightTheme.background.secondary },
    overlay: { backgroundColor: lightTheme.background.overlay },
    success: { backgroundColor: lightTheme.background.success },
    warning: { backgroundColor: lightTheme.background.warning },
    error: { backgroundColor: lightTheme.background.error },
};
export const bgDark = {
    default: { backgroundColor: darkTheme.background.default },
    secondary: { backgroundColor: darkTheme.background.secondary },
    overlay: { backgroundColor: darkTheme.background.overlay },
    success: { backgroundColor: darkTheme.background.success },
    warning: { backgroundColor: darkTheme.background.warning },
    error: { backgroundColor: darkTheme.background.error },
};
export const lightNavigationTheme = {
    dark: false,
    colors: {
        primary: lightTheme.button.primary.background,
        background: lightTheme.background.screen,
        card: lightTheme.background.default,
        text: lightTheme.text.default,
        border: lightTheme.border.default,
        notification: lightTheme.highlight.accent,
    },
};
export const darkNavigationTheme = {
    dark: true,
    colors: {
        primary: darkTheme.link.default,
        background: darkTheme.background.screen,
        card: darkTheme.background.screen,
        text: darkTheme.text.default,
        border: darkTheme.border.default,
        notification: darkTheme.highlight.accent,
    },
};
export const border = {
    default: { borderColor: lightTheme.border.default, borderWidth: 1 },
    warning: { borderColor: lightTheme.border.warning, borderWidth: 1 },
    hairline: { borderColor: lightTheme.border.default, borderWidth: StyleSheet.hairlineWidth },
};
export const borderDark = {
    default: { borderColor: darkTheme.border.default, borderWidth: 1 },
    warning: { borderColor: darkTheme.border.warning, borderWidth: 1 },
    error: { borderColor: darkTheme.border.error, borderWidth: 1 },
    hairline: { borderColor: darkTheme.border.default, borderWidth: StyleSheet.hairlineWidth },
};
//# sourceMappingURL=theme.js.map