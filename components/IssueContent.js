import React, { useState } from "react";
import {View, Text, StyleSheet, TouchableOpacity, Dimensions, ScrollView, Modal, Image} from 'react-native';
import CardNewsSlide from "./newstokcomp/CardNewsSlide";
import CardNewsSlideIssue from "./issuecomp/CardNewsSlideIssue";
import CardNewsSlideIssueSecond from "./issuecomp/CardNewsSlideIssueSecond";

const IssuesContent = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    return (
        <View>
            <View style={{ backgroundColor: '#11111A', flexDirection: 'column', justifyContent: 'flex-start'  }}>
                <View style={{ flexDirection: 'column', justifyContent: 'flex-start' }}>
                    <View style={{ marginTop: 20, marginBottom: 0, marginLeft: 26, marginRight: 0 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 16, color: 'white'}}>
                            가짜뉴스 이슈
                        </Text>
                    </View>
                </View>
                <View style={styles.animationContainer}>
                    <View>
                        <CardNewsSlideIssue/>
                    </View>
                </View>
                <View style={{ flexDirection: 'column', justifyContent: 'flex-start' }}>
                    <View style={{ marginTop: 20, marginBottom: 0, marginLeft: 26, marginRight: 0 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>
                            종결된 가짜뉴스 이슈
                        </Text>
                    </View>
                </View>
                <View style={{
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    marginTop: 12,
                }}>
                    <View>
                        <CardNewsSlideIssueSecond/>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    animationContainer: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    animationTitle: {
        marginLeft: 24,
        marginTop: 16,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default IssuesContent;