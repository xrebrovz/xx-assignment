import { StyleSheet, Dimensions, Platform } from 'react-native'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { isIOS } from 'utils/platform'
export const dimensions = {
    fullHeight: Dimensions.get('window').height,
    fullWidth: Dimensions.get('window').width,
}

export const colors = {

}

export const padding = {
    xxs: Math.ceil(moderateScale(2)),
    xs: Math.ceil(moderateScale(5)),
    sm: Math.ceil(moderateScale(10)),
    md: Math.ceil(moderateScale(15)),
    lg: Math.ceil(moderateScale(20)),
    xl: Math.ceil(moderateScale(40)),
}

export const fonts = {
    xs: isIOS() ? Math.ceil(moderateScale(10)) : Math.ceil(moderateScale(8)),
    sm: isIOS() ? Math.ceil(moderateScale(12)) : Math.ceil(moderateScale(10)),
    md: isIOS() ? Math.ceil(moderateScale(14)) : Math.ceil(moderateScale(12)),
    mds: isIOS() ? Math.ceil(moderateScale(16)) : Math.ceil(moderateScale(14)),
    lg: isIOS() ? Math.ceil(moderateScale(18)) : Math.ceil(moderateScale(16)),
    lgs: isIOS() ? Math.ceil(moderateScale(20)) : Math.ceil(moderateScale(18)),
    xl: isIOS() ? Math.ceil(moderateScale(22)) : Math.ceil(moderateScale(20)),
    xll: isIOS() ? Math.ceil(moderateScale(24)) : Math.ceil(moderateScale(22)),
    xxl: isIOS() ? Math.ceil(moderateScale(26)) : Math.ceil(moderateScale(24)),
    xxll: isIOS() ? Math.ceil(moderateScale(28)) : Math.ceil(moderateScale(26)),
    xxxl: isIOS() ? Math.ceil(moderateScale(30)) : Math.ceil(moderateScale(28)),
    primary: isIOS() ? 'Roboto-Light' : 'Roboto-Light', 
    fontBold: 'Roboto-Medium',
    bold: null,
}

export const baseStyles = {
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',  
    },
    textHeader: {
        color: 'black',
        fontFamily: fonts.fontBold,
        fontSize: fonts.mds,
        fontWeight: fonts.bold,
    },
    textTitle: {
        color: 'black',
        fontFamily: fonts.fontBold,
        fontSize: fonts.mds,
        fontWeight: fonts.bold,
    },
    textSubtitle: {
        color: 'black',
        fontFamily: fonts.primary,
        fontSize: fonts.md,
        fontWeight: fonts.bold,
    },
    textTime: {
        color: 'black',
        fontFamily: fonts.primary,
        fontSize: fonts.xs,
        fontWeight: fonts.bold,
    },
    textMenu: {
        color: '#3A82D3',
        fontFamily: fonts.fontBold,
        fontSize: fonts.mds,
        fontWeight: fonts.bold,
    },
    textSpecial: {
        color: 'green',
        fontFamily: fonts.fontBold,
        fontSize: fonts.mds,
        fontWeight: fonts.bold,
    },
    line: {
        height: 1,
        width: '100%',
        backgroundColor: '#CED0CE'
    },
}


export default createStyles = (overrides = {}) => {
    return StyleSheet.create({ ...baseStyles, ...overrides })
}