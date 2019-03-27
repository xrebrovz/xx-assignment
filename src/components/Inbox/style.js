import createStyles, { fonts, colors, padding, dimensions } from 'styles/base'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { isIOS, isAndroid } from 'utils/platform'

var ExtraDimensions;
if (isAndroid()) {
    ExtraDimensions = require('react-native-extra-dimensions-android');
}

const heightBar = isIOS() ? Math.ceil(moderateScale(40)) : 0
export default panelStyles = createStyles({
    container: {
        width: '100%',
        flex: 1,
        paddingTop: heightBar,
    },
    viewBox: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: padding.md,
    },
    listBox: {
        height: (dimensions.fullHeight - fonts.mds - padding.md * 2) - heightBar - (isIOS() ? 0 : ExtraDimensions.get('STATUS_BAR_HEIGHT'))
    },
});