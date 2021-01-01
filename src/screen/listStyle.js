import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardStyle: { 
        height: windowHeight*0.1, 
        width: windowWidth*0.96, 
        marginTop: 8, 
        backgroundColor: "lightgray", 
        flexDirection: 'row', 
        borderRadius: 5
    },
    imageContainerStyle: {
        flex: 4,
        justifyContent: 'center', 
        marginLeft: 8
    },
    imageStyle: {
        width: windowWidth*0.18, 
        height: windowHeight*0.09, 
        borderRadius:30
    },
    titleContainer: {
        flex: 6, 
        alignItems: 'center', 
        justifyContent: 'space-evenly'
    }
})

export default Styles;