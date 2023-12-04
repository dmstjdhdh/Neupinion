import React, { useState } from "react";
import {View, Text, StyleSheet, TouchableOpacity, Dimensions, ScrollView, Modal, Image} from 'react-native';
import CardNewsSlide from "./newstokcomp/CardNewsSlide";
import CardNewsSlideIssue from "./issuecomp/CardNewsSlideIssue";
import CardNewsSlideIssueSecond from "./issuecomp/CardNewsSlideIssueSecond";

const IssuesContent = ({onClickYoutube, onClickDetail, onClickVote}) => {
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
                        <CardNewsSlideIssue onClickDetail={onClickDetail} onClickVote={onClickVote}/>
                    </View>
                </View>
                <View style={{ flexDirection: 'column', justifyContent: 'flex-start' }}>
                    <View style={{ marginTop: 20, marginBottom: 0, marginLeft: 26, marginRight: 0 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 16 , color: 'white',}}>
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
                <View style={styles.rectangle}>
                    {/* Your content goes here */}
                </View>
                <View style={{ flexDirection: 'column', justifyContent: 'flex-start' }}>
                    <View style={{ marginTop: 20, marginBottom: 0, marginLeft: 22, marginRight: 0 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 16 , color: 'white',}}>
                            영상으로 보는 이슈 뉴스
                        </Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'column', justifyContent: 'flex-start' }}>
                    <View style={{ marginTop: 14, marginBottom: 0, marginLeft: -4, marginRight: 0 }}>
                        <TouchableOpacity onPress={onClickYoutube} style={{ width : 390, height: 520}}>
                            <Image source={require('./public/youtube.png')} style={{ width : 390, height: 520}}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{height: 200}}></View>
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
    rectangle: {
        marginTop: 37,
        backgroundColor: 'rgba(33, 33, 44, 0.18)',
        width: Dimensions.get('window').width,
        height: 10,
    },
});

export default IssuesContent;