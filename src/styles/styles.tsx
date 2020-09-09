import { StyleSheet, Platform } from 'react-native';
import * as Colors from './colors';
import * as Mixins from './mixins';
import * as Typography from './typography';

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative'
    },
    flex1: {
        flex: 1,
        backgroundColor: 'red'
    },
    justifyContentCenter: {
        justifyContent: 'center'
    },
    flexRowCenter: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    flexRowSpaceBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    flexColumnCenter: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    flexColumnSpaceBetween: {
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    flexWrap: {
        flex: 1,
        flexWrap: 'wrap',
        flexShrink: 1
    },
    button: {
        ...Typography.FONT_REGULAR,
        fontSize: Typography.FONT_SIZE_16,
        backgroundColor: Colors.SUCCESS,
        color: Colors.WHITE,
        padding: 10,
        borderRadius: 10,
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    textInput: {
        backgroundColor: Colors.GRAY_LIGHT,
        marginBottom: 15,
        paddingHorizontal: 10,
        borderRadius: 10
    },
    regularText: {
        ...Typography.FONT_REGULAR,
        fontSize: Typography.FONT_SIZE_12
    },
    boldText: {
        ...Typography.FONT_BOLD,
        fontSize: Typography.FONT_SIZE_12,
        flexWrap: 'wrap'
    },
    title: {
        ...Typography.FONT_REGULAR,
        fontSize: Typography.FONT_SIZE_24
    },
    textAlignCenter: {
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    margin5: {
        margin: 5
    },
    margin15: {
        margin: 50
    },
    padding5: {
        margin: 5
    },
    padding15: {
        margin: 50
    },
    listTitle: {
        ...Typography.FONT_BOLD,
        fontSize: Typography.FONT_SIZE_16,
        margin: 10,
        marginTop: 25
    },
    horizontalListItem: {
        margin: 5,
        padding: 5,
        backgroundColor: Colors.GRAY_LIGHT,
        width: 200,
        height: 100,
        borderRadius: 10,
        ...Mixins.boxShadow('rgba(0, 0, 0, 0.1)', { height: 1, width: 1 }, 5),
        justifyContent: 'space-between'
    },
    listView: {
        padding: 15,
        borderBottomColor: Colors.GRAY_LIGHT,
        borderBottomWidth: 1
    },
    gridView: {
        flex: 1,
        borderRadius: 10,
        justifyContent: 'space-between',
        backgroundColor: Colors.GRAY_LIGHT,
        margin: 5,
        padding: 5,
        overflow: 'hidden'
    }
});

export default Styles;