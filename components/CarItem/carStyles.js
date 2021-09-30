import { StyleSheet } from 'react-native';

const carStyles = StyleSheet.create({
    carContainer: {
        // backgroundColor: '#F0A',
        width: '100%',
        height: '100%'
    },
    titles: {
        marginTop : '30%',
        width : '100%',
        alignItems : 'center'
    },
    title: {
        fontSize : 40,
        fontWeight :'600'
    },
    subtitle: {
        fontSize :16,
        color : '#5c5a62'
    },
    image: {
        width :'100%',
        height : '100%',
        resizeMode : 'cover',
        position : 'absolute'
    }
});

export default carStyles;