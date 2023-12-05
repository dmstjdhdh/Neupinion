import React, {useCallback, useState} from 'react';
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
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";

const Post = ({navigation}) => {
    const [isModalVisible, setModalVisible] = useState(false);

    const handleButtonPress = () => {
        setModalVisible(true);
    };
    const onClick = () => {navigation.navigate('DetailIssue')};

    const [text, setText] = useState('');
    const [textContent, setTextContent] = useState('');

    const handleChangeText = (inputText) => {
        setText(inputText);
    };

    const handleChangeTextContent = (inputText) => {
        setTextContent(inputText);
    };
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    return (
        <View>
            <View style={{
                backgroundColor: '#11111A',
                flexDirection: 'column',
            }}>
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
                    <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16, marginLeft:132.5, marginTop: 5,}}>
                        의견쓰기
                    </Text>
                    <View style={{marginLeft: 100}}>
                        <TouchableOpacity onPress={onClick}>
                            <Image source={require("./public/ui/checkpurple.png")} style={{
                                width: 11.5*1.5, height: 16.29167*1.5,
                                marginLeft: 20,
                            }}>
                            </Image>
                        </TouchableOpacity>
                    </View>

                </View>
                <View style={styles.postContainer}>
                    <View style={{flexDirection: 'row', }}>
                        <Text
                            style={{
                                fontSize: 16,
                                fontWeight: 'bold',
                                color: 'rgba(255, 255, 255, 0.9)',
                                marginTop: 12,
                                alignSelf: 'flex-start',
                                marginLeft: 25,
                            }}
                        >
                            어디가 젤 수상했나요..
                        </Text>
                        <TouchableOpacity onPress={toggleModal} style={{
                            width: 55,
                            height: 23,
                            backgroundColor: 'rgba(126, 88, 233, 0.14)',
                            borderRadius: 3,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginLeft: 9,
                            marginTop: 9,
                        }}>
                            <Text style={{
                                fontSize: 11,
                                color: '#7E58E9', // 원하는 색으로 변경
                            }}>뉴스보기</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View
                    style={{
                        width: 334,
                        height: 58,
                        backgroundColor: 'rgba(25, 25, 38, 1)',
                        borderRadius: 10,
                        overflow: 'hidden',
                        flexDirection: 'row',
                        alignItems: 'center',
                        alignSelf: 'center',
                        marginTop: 13,
                    }}
                >
                    <Image source={require('./public/colorpin.png')} style={{width: 6, height: 11, marginLeft: 20}}/>
                    <TextInput
                        style={styles.input}
                        placeholder="내용을 입력해주세요."
                        placeholderTextColor="#7E7D7A"
                        value={text}
                        onChangeText={handleChangeText}
                    />
                </View>
                <View style={styles.postContainer}>
                    <View style={{flexDirection: 'row', }}>
                        <Text
                            style={{
                                fontSize: 16,
                                fontWeight: 'bold',
                                color: 'rgba(255, 255, 255, 0.9)',
                                marginTop: 12,
                                alignSelf: 'flex-start',
                                marginLeft: 25,
                            }}
                        >
                            생각 쓰기
                        </Text>
                    </View>

                </View>
                <View
                    style={{
                        width: 338,
                        height: 194,
                        backgroundColor: 'rgba(25, 25, 38, 1)',
                        borderRadius: 10,
                        overflow: 'hidden',
                        flexDirection: 'row',
                        alignItems: 'flex-start',
                        alignSelf: 'center',
                        marginTop: 13,
                    }}
                >
                    <KeyboardAwareScrollView
                        contentContainerStyle={styles.container}
                        resetScrollToCoords={{ x: 0, y: 0 }}
                        scrollEnabled={true}
                    >
                        {/* 여기에 다른 컴포넌트들을 추가하세요 */}
                        <TextInput
                            style={styles.inputContext}
                            placeholder="내용을 입력해주세요."
                            placeholderTextColor="#7E7D7A"
                            value={textContent}
                            onChangeText={handleChangeTextContent}
                        />
                    </KeyboardAwareScrollView>
                    <Text style={{color: '#7E7D7A', fontWeight: '500', fontSize: 14, position: 'absolute', left: 255, top: 155}}>
                        {textContent.length}/500자
                    </Text>
                </View>
                <View style={{height: 400}}>

                </View>
            </View>
            <Modal
                isVisible={isModalVisible}
                animationIn="slideInUp"
                animationOut="slideOutDown"
                onBackdropPress={toggleModal}
                onSwipeComplete={toggleModal}
                swipeDirection={['down']}
                animationType="slide"
                transparent={true}
                visible={isModalVisible}
                onRequestClose={() => {
                    setModalVisible(false);
                }}
            >
                <View style={styles.modalContent}>
                    <View style={styles.imageContainer}>
                        <Image source={require('./public/Pentagon.png')} style={styles.image}/>
                        <TouchableOpacity onPress={toggleModal}
                                          style={{
                                              width: 54,
                                              height: 5,
                                              backgroundColor: 'rgba(211, 211, 211, 1)', // Color(red: 0.83, green: 0.83, blue: 0.83)
                                              borderRadius: 20,
                                              position: 'absolute',
                                              top: 12,
                                              left: 170,
                                          }}
                        />
                    </View>
                    <Text style={styles.title}>“펜타곤 대형 폭발”…美증시 출렁</Text>
                    <View style={styles.dateContainer}>
                        <View style={{
                            width: 34,
                            height: 22,
                            backgroundColor: 'rgba(126, 88, 233, 0.14)',
                            borderRadius: 3,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Text style={{
                                fontSize: 11,
                                color: '#7E58E9', // 원하는 색으로 변경
                            }}>국제</Text>
                        </View>
                        <Text style={{
                            fontSize: 12,
                            marginLeft: 10,
                            marginTop: 2,
                            color: '#7E7D7A',
                        }}>2023.11.03</Text>
                    </View>
                    <Text style={styles.context}>블룸버그통신 등에 따르면 22일(현지 시간) 오전 9시를 전후로 미 워싱턴DC에 있는 펜타곤으로 보이는 건물에서 검은 연기가 피어오르는 사진이 트위터를 통해 국내외로 빠르게 확산했다. 펜타곤과 닮은 직사각형 건물 주변에서 검은 연기 기둥이 치솟는 모습은 2002 발생한 9·11 테러 당시 공격을 받은 펜타곤의 모습을 떠올리게 했다.</Text>
                    <Text style={styles.context}>미 NBC 뉴스에 따르면 이 사진은 트위터 유료 계정에서 이날 오전 8시42분경 처음 게시됐다. 이후 트럼프 지지 성향의 극우 음모론 단체인 큐어넌과 연관된 페이스북 계정에서도 같은 사진이 올라왔다.</Text>
                    <Text style={styles.context}>CNBC는 이날 미 증시 개장 직후 가짜 사진이 널리 퍼졌고, 이로 인해 스탠더드앤드푸어스(S&P)500 지수가 잠시 0.3% 하락했다고 보도했다. 또 당시 미국 국채 가격도 잠시 상승해 투자자들이 돈을 보관할 안전한 곳을 찾고 있음을 보여줬다고 덧붙였다.</Text>

                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        width: 182,
        height: 28,
        marginLeft: 12,
        fontWeight: '500',
        color: 'rgba(255, 255, 255, 0.9)'
    },
    inputContext: {
        width: 295,
        height: 28,
        marginTop: 14,
        marginLeft: 20,
        color: 'rgba(255, 255, 255, 0.9)'
    },
    dateContainer: {
        width: Dimensions.get('window').width,
        marginTop: 10,
        height: 24,
        flexDirection: 'row',
        position: 'relative',
        left: 25,
    },
    topContainer: {
        width: Dimensions.get('window').width,
        marginTop: 20,
        height: 48,
        backgroundColor: '#11111A',
        flexDirection: 'row',
        alignItems: 'center',
    },
    imageContainer: {
        width: 390,
        height: 220,
        flexDirection: 'column',
        alignItems: 'center',
        overflow: 'hidden',
    },
    postContainer: {
        width: Dimensions.get('window').width,
        marginTop: 20,
        backgroundColor: '#11111A',
        flexDirection: 'row',
        alignItems: 'center',
    },
    modalContent: {
        width: Dimensions.get('window').width,
        height: 700,
        backgroundColor: '#11111A',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    image: {
        marginBottom: 8,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        width:Dimensions.get('window').width,
        height:210,
        overflow: 'hidden',
    },
    title: {
        fontSize: 20, color: 'white', width: 340, fontWeight: 'bold', marginTop: 18, lineHeight: 28,
    },
    context: {
        fontSize: 14, color: 'white', width: 344, fontWeight: 'normal', marginTop: 18, lineHeight: 20,
    },
});

export default Post;