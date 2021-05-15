import { StyleSheet } from 'react-native';

const colors = {
    white: '#FFFFFF',
    lightGray: '#F2F2F2',
    mediumGray: '#525252',
    darkGray: '#263238',
    primary: '#FFC700',
    secondary: '#6C6C6C',
    primaryPill: '#FFC70050',
    red: '#DF5753',
}

const text = StyleSheet.create({
    regular: {
        fontWeight: '400',
        fontStyle: 'normal',
        fontSize: 16,
        lineHeight: 21,
        textAlign: 'center',
        color: colors.lightGray,
    },
    bold: {
        fontWeight: '700',
        fontStyle: 'normal',
        fontSize: 26,
        lineHeight: 35,
        textAlign: 'center',
        marginBottom: 15,
        color: colors.white,
    },

    primaryText: {
        fontWeight: '700',
        fontSize: 16,
        textTransform: 'uppercase',
        color: colors.white,
        marginLeft: 50,
    },
})

const theme = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    card:{
        width: "100%",
        height: "100%",
        backgroundColor: colors.mediumGray,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    draw: {
        width: "100%",
        height: "40%",
    },
    arrow:{
        width: "40%",
        height: "40%",
    },
    textContainer: {
        paddingHorizontal: 20,
    },
    primaryButton: {
        width: 320,
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: colors.primary,
    },
    arrowContainer: {
        width: 48,
        height: 40,
        backgroundColor: colors.secondary,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },

    primaryInputContent:{
        width: "100%",
        height: "100%",
        backgroundColor: colors.mediumGray,
        padding: 40,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    primaryInput:{
        width: 320,
        height: 40,
        marginVertical: 16,
        paddingHorizontal: 15,
        backgroundColor: colors.white,
        borderRadius: 10,
    }
});

export {colors, theme, text};
