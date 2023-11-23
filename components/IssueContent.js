import React from "react";
import {View, Text, StyleSheet} from 'react-native';

const IssuesContent = () => {
    return (
        <View style={styles.container}>
            <Text style = {styles.contentTitle}>이슈 팡팡</Text>
            <Text style = {styles.contentDescription}>이슈 팡팡 설명입니다.</Text>
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

export default IssuesContent;