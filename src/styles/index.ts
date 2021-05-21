import { StyleSheet, Dimensions } from 'react-native';

const deviceWidth = Dimensions.get('window').width;

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
    secondaryText: {
        fontWeight: '700',
        fontSize: 14,
        marginVertical: 10,
        textTransform: 'uppercase',
        textAlign: 'center',
        color: colors.white,
    },

    titleText: {
        fontWeight: '700',
        fontSize: 16,
        marginVertical: 5,
        textTransform: 'uppercase',
        color: colors.white,
        textAlign: 'left',
    },

    subtitleText: {
        fontWeight: '400',
        fontSize: 12,
        marginVertical: 5,
        textTransform: 'uppercase',
        color: colors.lightGray,
        textAlign: 'left',
    },

    yearText: {
        fontWeight: '700',
        fontSize: 14,
        color: colors.primary,
        textAlign: 'left',
    },
})

const theme = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.mediumGray,
    },
    card: {
        width: "100%",
        height: "100%",
        padding: 20,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    draw: {
        width: 360,
        height: 200,
    },
    arrow: {
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
    secondaryButton: {
        width: 320,
        height: 40,
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: colors.secondary,
        borderColor: colors.white,
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

    primaryInputContent: {
        width: "100%",
        height: "100%",
        backgroundColor: colors.mediumGray,
        padding: 40,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    primaryInput: {
        width: 320,
        height: 40,
        marginVertical: 16,
        paddingHorizontal: 15,
        backgroundColor: colors.white,
        borderRadius: 10,
    },
    secondaryInput: {
        width: 320,
        height: 40,
        marginVertical: 16,
        paddingHorizontal: 15,
        backgroundColor: colors.white,
        borderRadius: 10,
    },
    moviecard: {
        width: 360,
        height: 360,
        marginVertical: 20,
        paddingTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.secondary,
        borderRadius: 10,
    },
});

const nav = StyleSheet.create(
    {
        leftText: {
            fontSize: 26,
            color: colors.white,
            fontWeight: 'bold',
            marginLeft: 50,
        },

        rightMenuContainer: {
            marginRight: 50,
        },

        option: {
            paddingVertical: 5,
        },

        options: {
            width: deviceWidth,
            height: 120,
            marginTop: 125,
            marginRight: -50,
            backgroundColor: colors.primary,
            paddingVertical: 20,
            paddingLeft: 50,

        },

        menuImg: {
            width: 15,
            height: 15,
        },

        textOption: {
            color: colors.white,
            textTransform: 'uppercase',
        },

        textActive: {
            fontWeight: 'bold',
        },

        buttonSair: {
            width: "100%",
            height: 30,
            marginRight: 50,
            borderRadius: 10,
            borderWidth: 2,
            borderColor: colors.white,
            color: colors.white,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: colors.primary,

        },
    }
);

const login = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.secondary,
        padding: 20,
    },
    card: {
        width: "100%",
        height: "100%",
        padding: 20,
        alignItems: 'center',
        borderRadius: 20,
        shadowColor: colors.primary,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },

    title: {

        fontSize: 30,
        fontWeight: '500',
        color: colors.primary,
        marginTop: 50,
    },

    form: {
        width: "100%",
        paddingVertical: 40,
        paddingHorizontal: 20,
        marginVertical: 20,
        borderRadius: 20,
    },

    inputUser: {
        width: "100%",
        height: 40,
        borderRadius: 10,
        marginVertical: 20,
        paddingLeft: 20,
        color: colors.secondary,
        backgroundColor: colors.white,
        borderWidth: 2,
        borderColor: colors.white,
    },

    primaryButton: {
        width: "100%",
        height: 40,
        borderRadius: 10,
        marginVertical: 50,
        borderWidth: 2,
        borderColor: colors.darkGray,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primary,
    },

    textButton: {
        fontSize: 24,
        fontWeight: '500',
        color: colors.white,
    },

})

export { colors, theme, text, nav, login };