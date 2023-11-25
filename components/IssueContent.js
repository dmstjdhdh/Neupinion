import React, { useState } from "react";
import {View, Text, StyleSheet, TouchableOpacity, Dimensions, ScrollView, Modal, Image} from 'react-native';
import CardNewsSlide from "./newstokcomp/CardNewsSlide";
import CardNewsSlideIssue from "./newstokcomp/CardNewsSlideIssue";

const IssuesContent = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    return (
        <View>
            <View style={{ backgroundColor: '#EFEFEF' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                    <View style={{ marginTop: 20, marginBottom: 0, marginLeft: 26, marginRight: 0 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>
                            가짜뉴스 이슈
                        </Text>
                    </View>
                </View>
                <View style={styles.animationContainer}>
                    <View>
                        <CardNewsSlideIssue/>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    animationContainer: {
        height: 800,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: 'black',
    },
    animationTitle: {
        marginLeft: 24,
        marginTop: 16,
        color: 'black',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default IssuesContent;