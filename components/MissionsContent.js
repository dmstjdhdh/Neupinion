import React from "react";
import {View, Text, StyleSheet} from 'react-native';

const MissionsContent = () => {
    return (
        <View style={styles.container}>
            <Text style = {styles.contentTitle}>미션 콕콕</Text>
            <Text style = {styles.contentDescription}>미션 콕콕 설명입니다.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentTitle: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    contentDescription: {
        fontSize: 16,
    },
});

export default MissionsContent;