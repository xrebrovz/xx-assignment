import createStyles, { fonts, colors, padding, dimensions } from 'styles/base'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { isIOS } from 'utils/platform'

export default panelStyles = createStyles({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',   
    },
});