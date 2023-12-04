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

const VoteResult = ({navigation}) => {
    const [isModalVisible, setModalVisible] = useState(false);
    const triangleSize = 11.3;

    const [selectedButton, setSelectedButton] = useState(null);
    const [isConfirmed, setIsConfirmed] = useState(false);

    const data = [
        {
            id: 1,
            name: '햄찌',
            timeAgo: '1시간 전',
            comment: '사진이 너무 리얼한데...?',
            image: require('./public/Profile/Profile1.png'),
            likes: 22,
        },
        {
            id: 2,
            name: '설이바보',
            timeAgo: '2시간 전',
            comment: 'S&P500 지수까지 하락한거면 진짜 아닌가?',
            image: require('./public/Profile/profile2.png'),
            likes: 32,
        },
        {
            id: 3,
            name: '빵빵두리두리',
            timeAgo: '2일 전',
            comment: '이거 인사이트 인스타 계정에도 올라온건데',
            image: require('./public/Profile/profile3.png'),
            likes: 11,
        },
        {
            id: 4,
            name: '사랑아 보영해',
            timeAgo: '3일 전',
            comment: '현장사진 있으니까 진짜아냐?',
            image: require('./public/Profile/profile4.png'),
            likes: 40,
        },
        {
            id: 5,
            name: '햄찌',
            timeAgo: '1시간 전',
            comment: '사진이 너무 리얼한데...?',
            image: require('./public/Profile/Profile1.png'),
            likes: 22,
        },
        {
            id: 6,
            name: '설이바보',
            timeAgo: '2시간 전',
            comment: 'S&P500 지수까지 하락한거면 진짜 아닌가?',
            image: require('./public/Profile/profile2.png'),
            likes: 32,
        },
        {
            id: 7,
            name: '빵빵두리두리',
            timeAgo: '2일 전',
            comment: '이거 인사이트 인스타 계정에도 올라온건데',
            image: require('./public/Profile/profile3.png'),
            likes: 11,
        },
        {
            id: 8,
            name: '사랑아 보영해',
            timeAgo: '3일 전',
            comment: '현장사진 있으니까 진짜아냐?',
            image: require('./public/Profile/profile4.png'),
            likes: 40,
        },


        // 추가적인 데이터 항목들...
    ];
    const dataFake = [
        {
            id: 1,
            name: '김난',
            timeAgo: '1시간 전',
            comment: '트위터 출처는 믿고 걸러야지',
            image: require('./public/Profile/profile5.png'),
            likes: 2,
        },
        {
            id: 2,
            name: '빵이즈',
            timeAgo: '2시간 전',
            comment: '원문 링크 들어가보니 그냥 개인 계정인데',
            image: require('./public/Profile/profile6.png'),
            likes: 12,
        },
        {
            id: 3,
            name: '왕건이',
            timeAgo: '2시간 전',
            comment: '기사 올라온 곳 중에 공신력 있는 곳이...',
            image: require('./public/Profile/profile7.png'),
            likes: 32,
        },
        {
            id: 4,
            name: '정미니',
            timeAgo: '1일 전',
            comment: '트위터에서 유포된 것 중에 진짜인거 없음ㅋ',
            image: require('./public/Profile/profile8.png'),
            likes: 20,
        },
        {
            id: 5,
            name: '김난',
            timeAgo: '1시간 전',
            comment: '트위터 출처는 믿고 걸러야지',
            image: require('./public/Profile/profile5.png'),
            likes: 2,
        },
        {
            id: 6,
            name: '빵이즈',
            timeAgo: '2시간 전',
            comment: '원문 링크 들어가보니 그냥 개인 계정인데',
            image: require('./public/Profile/profile6.png'),
            likes: 12,
        },
        {
            id: 7,
            name: '왕건이',
            timeAgo: '2시간 전',
            comment: '기사 올라온 곳 중에 공신력 있는 곳이 하나도 없는데?? 가짜뉴스인듯..',
            image: require('./public/Profile/profile7.png'),
            likes: 32,
        },
        {
            id: 8,
            name: '정미니',
            timeAgo: '1일 전',
            comment: '트위터에서 유포된 것 중에 진짜인거 없음ㅋ',
            image: require('./public/Profile/profile8.png'),
            likes: 20,
        },


        // 추가적인 데이터 항목들...
    ];

    const renderPersonContainer = ({ item }) => (
        <View style={styles.personContainer}>
            <Image source={item.image} style={{ width: 48, height: 48 }} />
            <View style={{ flexDirection: 'column', marginLeft: 16 }}>
                <View style={{ flexDirection: 'row', marginTop: 4 }}>
                    <View style={{ width: 260, flexDirection: 'row' }}>
                        <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'white' }}>{item.name}</Text>
                        <Text style={{ fontSize: 14, fontWeight: 'normal', color: '#7E7D7A', marginLeft: 14, top: -1 }}>
                            {item.timeAgo}
                        </Text>
                    </View>
                    <Image source={require('./public/ui/threedot.png')} style={{ width: 1.67, height: 13.33 }} />
                </View>
                <Text style={{ fontSize: 14, fontWeight: 'normal', color: 'white', marginTop: 7 }}>{item.comment}</Text>
                <View style={{ flexDirection: 'row', marginTop: 13 }}>
                    <Image source={require('./public/ui/heart.png')} style={{ width: 20, height: 20 }} />
                    <Text style={{ fontSize: 14, fontWeight: 'normal', color: 'white', marginLeft: 5 }}>{item.likes}</Text>
                </View>
            </View>
        </View>
    );
    const handleButtonSelect = (buttonId) => {
        if (!isConfirmed) {
            setSelectedButton(buttonId);
        }
    };

    const onClickBack = () => {navigation.navigate('DetailIssue')};
    const handleConfirm = () => {
        if (selectedButton !== null) {
            setIsConfirmed(true);
            onClickBack();
        }
    };

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const onPress = () => {
        toggleModal();
    };
    const onClick = () => {navigation.navigate('DetailIssue')};
    const onClickHome = () => {navigation.navigate('Home')};

    const [text, setText] = useState('');

    const handleChangeText = (inputText) => {
        setText(inputText);
    };

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
                    <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16, marginLeft:85, marginTop: 5,}}>
                        진짜일까? 가짜일까?
                    </Text>
                    <View style={{marginLeft: 35}}>
                        <TouchableOpacity onPress={onClick}>
                            <Image source={require("./public/ui/bookmark.png")} style={{
                                width: 11.5*1.25, height: 16.29167*1.25,
                                marginLeft: 20,
                            }}>
                            </Image>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity onPress={onClick}>
                            <Image source={require("./public/ui/share.png")} style={{
                                width: 16*1.25, height: 15.33333*1.25,
                                marginLeft: 20,
                            }}>
                            </Image>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.newsContainer}>
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
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: 10,
                                width: 66,
                                height: 22,
                                backgroundColor: '#1C1C1A',
                                borderRadius: 60,
                                position: 'relative',
                                overflow: 'hidden',
                                marginLeft: 157,
                            }}
                        >
                            <View
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    borderRadius: 60,
                                    borderWidth: 0.8,
                                    borderColor: '#D4D4D4',
                                    margin: 0.4,
                                }}
                            >
                                <Text style={{color: 'white', fontSize: 11, alignSelf: 'center', marginTop: 3,}}>
                                    원문 보기
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View
                        style={{
                            marginTop: 20,
                            width: 338,
                            height: 196,
                            backgroundColor: 'rgba(25, 25, 38, 1)',
                            borderRadius: 10,
                            overflow: 'hidden',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    ></View>
                    <View style={styles.commandContainer}>
                        <View
                            style={{
                                width: 338,
                                height: 44,
                                backgroundColor: '#7E58E9',
                                borderRadius: 5,
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}
                        >
                            <View style={{width: 225, marginLeft: 24,}}>
                                <Text style={{fontSize: 14, color: 'white', fontWeight:'bold',}}>
                                    진짜뉴스예요.
                                </Text>
                            </View>
                            <Image source={require('./public/ui/iconuser.png')} style={{width: 17, height: 17,}}/>
                            <Text style={{fontSize: 14, color: 'white', marginLeft: 6, fontWeight: '500',}}>
                                1,234명
                            </Text>
                        </View>
                        <FlatList
                            data={data}
                            renderItem={renderPersonContainer}
                            keyExtractor={(item) => item.id.toString()}
                            showsVerticalScrollIndicator={false}
                        />
                        <View style={{
                            width: 334,
                            height: 40,
                            flexDirection: 'row',
                            justifyContent: 'flex-end',
                            alignItems: 'center',
                            top: -5,
                        }}>
                            <Text style={{fontSize: 14, color: '#7E7D7A', fontWeight:'bold',}}>
                                댓글 더보기
                            </Text>
                            <Image source={require('./public/ui/commandbutton.png')} style={{width: 5.33, height: 10.67, marginLeft: 16,}}/>
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
                            }}
                        >
                            <Image source={require('./public/Profile/myProfile.png')} style={{width: 35, height: 35, marginLeft: 16,}}/>
                            <TextInput
                                style={styles.input}
                                placeholder="댓글 작성"
                                placeholderTextColor="#D3D3D3"
                                value={text}
                                onChangeText={handleChangeText}
                            />
                            <View
                                style={{
                                    width: 53,
                                    height: 30,
                                    backgroundColor: '#7E58E9',
                                    borderRadius: 6.55,
                                    alignItems: 'center',
                                }}
                            >
                                <Text style={{fontSize: 15, color: 'white', fontWeight:'500', alignSelf: 'center', marginTop: 7,}}>
                                    등록
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={{height:22,}}></View>
                    <View style={styles.commandContainer}>
                        <View
                            style={{
                                width: 338,
                                height: 44,
                                backgroundColor: '#FF5730',
                                borderRadius: 5,
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}
                        >
                            <View style={{width: 225, marginLeft: 24,}}>
                                <Text style={{fontSize: 14, color: 'white', fontWeight:'bold',}}>
                                    가짜뉴스예요.
                                </Text>
                            </View>
                            <Image source={require('./public/ui/iconuser.png')} style={{width: 17, height: 17,}}/>
                            <Text style={{fontSize: 14, color: 'white', marginLeft: 6, fontWeight: '500',}}>
                                1,234명
                            </Text>
                        </View>
                        <FlatList
                            data={dataFake}
                            renderItem={renderPersonContainer}
                            keyExtractor={(item) => item.id.toString()}
                            showsVerticalScrollIndicator={false}
                        />
                        <View style={{
                            width: 334,
                            height: 40,
                            flexDirection: 'row',
                            justifyContent: 'flex-end',
                            alignItems: 'center',
                            top: -5,
                        }}>
                            <Text style={{fontSize: 14, color: '#7E7D7A', fontWeight:'bold',}}>
                                댓글 더보기
                            </Text>
                            <Image source={require('./public/ui/commandbutton.png')} style={{width: 5.33, height: 10.67, marginLeft: 16,}}/>
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
                            }}
                        >
                            <Image source={require('./public/Profile/myProfile.png')} style={{width: 35, height: 35, marginLeft: 16,}}/>
                            <TextInput
                                style={styles.input}
                                placeholder="댓글 작성"
                                placeholderTextColor="#D3D3D3"
                                value={text}
                                onChangeText={handleChangeText}
                            />
                            <View
                                style={{
                                    width: 53,
                                    height: 30,
                                    backgroundColor: '#7E58E9',
                                    borderRadius: 6.55,
                                    alignItems: 'center',
                                }}
                            >
                                <Text style={{fontSize: 15, color: 'white', fontWeight:'500', alignSelf: 'center', marginTop: 7,}}>
                                    등록
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View
                        style={{
                            marginTop: 55,
                            width: 338,
                            height: 272,
                            backgroundColor: 'rgba(25, 25, 38, 1)',
                            borderRadius: 10,
                            overflow: 'hidden',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Text style={styles.contentText}>
                            해당 뉴스의 전문가 의견이 나오면 알림을 받아 보시겠어요?
                        </Text>
                        <TouchableOpacity
                            style={[styles.buttonBelow, { backgroundColor: '#7E5AEB' }]}
                            onPress={() => {
                                // 버튼이 눌렸을 때의 동작
                            }}
                        >
                            <Text style={{fontSize: 16, color: '#ffffff', fontWeight:'bold',}}>
                                알림 받기
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.buttonBelow, { backgroundColor: 'rgba(255, 255, 255, 0.2)' }]}
                            onPress={() => {
                                onClickHome()
                            }}
                        >
                            <Text style={{fontSize: 16, color: '#D3D3D3', fontWeight:'bold',}}>
                                홈으로
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{height: 80,}}>

                    </View>
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
        backgroundColor: 'rgba(33, 33, 44, 0.18)',
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
        fontSize: 20, color: 'white', width: 320, fontWeight: 'bold', marginTop: 18, lineHeight: 28,
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

export default VoteResult;