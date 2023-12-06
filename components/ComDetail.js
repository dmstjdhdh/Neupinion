import React, {useCallback, useRef, useState} from 'react';
import {
    View,
    Text,
    Modal,
    TouchableOpacity,
    Image,
    ScrollView,
    StyleSheet,
    Dimensions,
    TouchableWithoutFeedback, FlatList, TextInput
} from 'react-native';
import CustomButton from "./CustomButton";
import CustomButtonCut from "./CustomButtonCut";

const ComDetail = ({navigation}) => {
    const [isModalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const onPress = () => {
        toggleModal();
    };
    const onClick = () => {navigation.navigate('Home')};

    const onClickFinal = () => {navigation.navigate('DetailIssueData')};

    return (
        <View style={{
            backgroundColor: '#11111A',
            flexDirection: 'column',
        }}>
            <ScrollView>
                <View style={styles.topContainer}>
                    <View>
                        <TouchableOpacity onPress={onClick}>
                            <Image source={require("./public/ui/backbutton.png")} style={{
                                width: 7.66667,
                                height: 15.33333,
                                marginLeft: 20,
                            }}>
                            </Image>
                        </TouchableOpacity>
                    </View>
                    <Text style={{marginLeft: 120,width: 153, fontWeight:'bold', fontSize: 16, color: 'white', marginTop: 4}}>
                        뉴피 토론장
                    </Text>
                    <View style={{}}>
                        <TouchableOpacity onPress={() => {}}>
                            <Image source={require("./public/ui/Search.png")} style={{
                                width: 16, height: 16, marginTop: 4,
                            }}>
                            </Image>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => {}}>
                            <Image source={require("./public/ui/Bell.png")} style={{
                                width: 14.67, height: 16.5, marginTop: 4,
                                marginLeft: 20,
                            }}>
                            </Image>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{
                    backgroundColor: 'rgba(210, 210, 210, 0.1)',
                    width: Dimensions.get('window').width,
                    height: 1,
                }}></View>
                <View style={styles.newsContainer}>
                    <View>
                        <TouchableOpacity onPress={onClickFinal} style={{
                            width: 55,
                            height: 23,
                            backgroundColor: 'rgba(126, 88, 233, 0.14)',
                            borderRadius: 3,
                            justifyContent: 'center',
                            alignItems: 'center',
                            position: 'absolute',
                            left: 280,
                            top: 20,
                        }}>
                            <Text style={{
                                fontSize: 11,
                                color: '#7E58E9', // 원하는 색으로 변경
                            }}>뉴스보기</Text>
                        </TouchableOpacity>
                        <Image source={require('./public/comcom.png')} style={{width:338, height:151, alignSelf: 'center', marginTop: 24, marginLeft: 0,}}/>
                    </View>
                    <View style={styles.rectangle}></View>
                    <Image source={require('./public/Ima.png')} style={{width:389, height:550, alignSelf: 'center', marginTop: 20, marginLeft: 12,}}/>
                    <View style={{height: 40}}></View>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({

    contentText: {
        marginTop: 42,
        fontSize: 16,
        width: 220,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
        lineHeight: 24,
    },
    buttonBelow: {
        width: 278,
        height: 54,
        borderRadius: 10,
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        width: 182,
        height: 28,
        marginLeft: 16,
    },
    personContainer: {
        marginTop: 14,
        marginBottom: 12,
        width: 328,
        height: 70,
        flexDirection: 'row',
    },
    commandContainer: {
        width: 338,
        height: 540,
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: 20,
    },
    recommendCard: {
        marginTop: 20,
        width: 340,
        height: 93,
        borderRadius: 5,
        backgroundColor: '#191926',
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    buttonContainer: {
        marginTop: 28,
        flexDirection: 'column',
        alignItems: 'center',
    },
    cardImage: {
        width: 223,
        height: 223,
        marginTop: 48,
        alignSelf: "center",
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
    },
    screenShot: {
        width:Dimensions.get('window').width,
        height: 600,
    },
    rectangle: {
        marginTop: 37,
        backgroundColor: 'rgba(33, 32, 47, 1)',
        width: Dimensions.get('window').width,
        height: 10,
    },
    tagContainer: {
        marginTop: 28,
        flexDirection: 'row',
        alignItems: 'flex-start',
        width: 340,
    },
    topContainer: {
        width: Dimensions.get('window').width,
        marginTop: 20,
        height: 48,
        backgroundColor: '#11111A',
        flexDirection: 'row',
        alignItems: 'center',
    },
    newsContainer: {
        alignItems: 'center',
    },
    twitter: {
        width: 89, height: 17, marginTop: 18, position: 'relative',marginLeft: 25,
    },
    title: {
        fontSize: 16, color: 'white', width: 320, fontWeight: 'bold', marginTop: 18, lineHeight: 28,
    },
    context: {
        fontSize: 14, color: 'white', width: 344, fontWeight: 'normal', marginTop: 18, lineHeight: 20,
    },
    dateContainer: {
        width: Dimensions.get('window').width,
        marginTop: 10,
        height: 24,
        flexDirection: 'row',
        position: 'relative',
        left: 25,
    },
    imageContainer: {
        width: Dimensions.get('window').width,
        height: 263,
        flexDirection: 'column',
        alignItems: 'center',
    },
    image: {
        marginTop: 28,
        marginBottom: 8,
        width:Dimensions.get('window').width,
        height:210,
    },
    highlight: {
        color: '#7E58E9',
        textDecorationLine: 'underline',
    },
    emphasis: {
        color: '#FF5730',
        fontWeight: 'bold',
    },
    toggleContainer: {
        marginTop: 8,
    },
});

export default ComDetail;