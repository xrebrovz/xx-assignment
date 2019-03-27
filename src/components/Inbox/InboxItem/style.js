import createStyles, { fonts, colors, padding, dimensions } from 'styles/base'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { getRandomColor } from 'utils/helper'

export default panelStyles = createStyles({
    textbox: {
        paddingLeft: padding.sm,
        flexDirection: 'row', 
        flexWrap: 'wrap',
        width: (dimensions.fullWidth - dimensions.fullWidth / 6 / 2) - padding.sm - dimensions.fullWidth / 6 / 2 - padding.sm
    },
    box: {
        flexDirection: 'row',
        flex: 1,
        backgroundColor: 'white',
        paddingVertical: padding.lg,
        paddingHorizontal: padding.md,
        justifyContent: 'center',
    },
    timebox: {
        width: dimensions.fullWidth / 6 / 2,
        height: dimensions.fullWidth / 6 / 2,
        justifyContent: 'center',
        alignItems: 'center',        
    },
    profileBox: {
        width: dimensions.fullWidth / 6 / 2,
        height: dimensions.fullWidth / 6 / 2,
        justifyContent: 'center',
        alignItems: 'center',        
    },
    circleBox: {
        borderRadius: Math.round(dimensions.fullWidth / 6 / 2) / 2,
        width: dimensions.fullWidth / 6 / 2,
        height: dimensions.fullWidth / 6 / 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
});