import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
const MyContent = () => {
    return(
        <Text>ㅇㅇ</Text>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    head: {
        flexDirection: 'column',
        height: 70,
        backgroundColor: 'white',
    },
    textcontainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
    },
    iconcontainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop: 40,
    },
    button: {
        paddingVertical: 8.5,
    },
    buttonText: {
        fontSize: 16,
        color: '#979797',
    },
    headcontents: {
        flex: 1,
    },
});

export default MyContent;
