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
    TouchableWithoutFeedback
} from 'react-native';
import CustomButton from "./CustomButton";

const MainNewsOne = ({navigation}) => {
    const [isModalVisible, setModalVisible] = useState(false);
    const triangleSize = 11.3;

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const onPress = () => {
        toggleModal();
    };
    const onClick = () => {navigation.navigate('Home')};

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
                    <View style={{marginLeft: 250}}>
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
                    <Text style={styles.title}>이스라엘 '하루 4시간' 교전 중지, 하마스 인질석방 협상 영향은</Text>
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
                    <View style={styles.imageContainer}>
                        <Image source={require('./public/NewsImages/exampleImage.png')} style={styles.image}/>
                        <Text style={{color: '#7E7D7A', fontSize: 11, }}>[사진=연합뉴스]</Text>
                    </View>
                    <Text style={styles.context}>
                        <Text style={styles.highlight}>이스라엘과 팔레스타인 무장정파 하마스 사이의 갈등</Text>이 계속되고 있어. 이스라엘은 하마스를{' '}
                        <Text style={styles.emphasis}>소탕하기</Text> 위해 가자지구에 공격을 가하고 있는데, 이번에 미국 백악관은 이스라엘이 매일 4시간씩
                        가자지구 북부에서 교전을 중단하기로 결정했다고 밝혔어.
                    </Text>
                    <View style={{flexDirection: 'row', marginTop:12,}}>
                        <TouchableWithoutFeedback onPress={onPress}>
                            <View
                                style={{
                                    width: 0,
                                    height: 0,
                                    backgroundColor: 'transparent',
                                    borderStyle: 'solid',
                                    borderTopWidth: triangleSize * 1.732 / 2, // 삼각형의 높이 계산
                                    borderRightWidth: triangleSize / 2,
                                    borderBottomWidth: 0,
                                    borderLeftWidth: triangleSize / 2,
                                    borderTopColor: 'rgba(213, 213, 213, 1)',
                                    borderRightColor: 'transparent',
                                    borderBottomColor: 'transparent',
                                    borderLeftColor: 'transparent',
                                    marginLeft: 15,
                                }}
                            />
                        </TouchableWithoutFeedback>
                        <Text style={{
                            fontSize: 14,
                            color: 'rgba(213, 213, 213, 1)',
                            width: 340,
                            marginLeft: 5, // 조절된 마진값
                            position: 'relative', // 추가된 부분
                            top: -5, // 조절된 값
                        }}>소탕하다가 무슨 뜻이야?</Text>
                    </View>
                    {isModalVisible && (
                        <View style={styles.toggleContainer}>
                            <View
                                style={{
                                    width: 340,
                                    height: 79,
                                    backgroundColor: 'rgba(25, 25, 38, 0.8)', // Color(red: 0.1, green: 0.1, blue: 0.15) 와 유사한 효과
                                    borderRadius: 5,
                                    overflow: 'hidden', // 코너 라운딩을 위해 overflow 속성을 추가
                                }}
                            >
                                <View style={{alignItems: 'flex-start', flexDirection: 'column', justifyContent: 'flex-start',}}>
                                    <View
                                        style={{
                                            width: 33.2,
                                            height: 18,
                                            borderRadius: 20 / 2,
                                            borderColor: 'rgba(255, 87, 49, 1)',
                                            borderWidth: 1,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            marginLeft: 12,
                                            marginTop: 13,
                                        }}
                                    >
                                        <View
                                            style={{
                                                width: 33.2,
                                                height: 18,
                                                borderRadius: 18 / 2,
                                                backgroundColor: 'transparent',
                                            }}
                                        >
                                            <Text style={{color: 'rgba(255, 87, 49, 1)', fontSize: 11, alignSelf:'center', marginTop: 3}}>
                                                동사
                                            </Text>
                                        </View>
                                    </View>
                                    <Text style={{color: 'white', position: 'relative', top: -18, left: 55}}>
                                        휩쓸어 죄다 없애버리다.
                                    </Text>
                                    <Image source={require('./public/ui/pin.png')} style={{width: 24, height:24,  position: 'relative', top: -38, left: 300}}/>
                                    <Text style={{color: '#D3D3D3', position: 'relative', top: -24, left: 12}}>
                                        유의어
                                    </Text>
                                </View>
                                <View style={{
                                    width: 63,
                                    height: 21,
                                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                    borderRadius: 3,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    position: 'relative',
                                    top: -42,
                                    left: 56,
                                }}>
                                    <Text style={{
                                        fontSize: 14,
                                        color: '#ffffff', // 원하는 색으로 변경
                                    }}>소양하다</Text>
                                </View>
                                <View style={{
                                    width: 75,
                                    height: 21,
                                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                    borderRadius: 3,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    position: 'relative',
                                    top: -42 - 21,
                                    left: 126,
                                }}>
                                    <Text style={{
                                        fontSize: 14,
                                        color: '#ffffff', // 원하는 색으로 변경
                                    }}>쓸어버리다</Text>
                                </View>
                                <View style={{
                                    width: 50,
                                    height: 21,
                                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                    borderRadius: 3,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    position: 'relative',
                                    top: -42 - 42,
                                    left: 210,
                                }}>
                                    <Text style={{
                                        fontSize: 14,
                                        color: '#ffffff', // 원하는 색으로 변경
                                    }}>없애다</Text>
                                </View>
                            </View>
                        </View>
                    )}
                    <Text style={styles.context}>유엔 등 국제사회가 한 목소리로 인도적 차원의 휴전을 호소해왔고, 하마스를 지지하는 중동, 아랍 진영도 휴전을 협상하는 전제 조건으로 내걸어왔어. 이번 ‘4시간 교전 중지’는 이스라엘이 지상전을 계속 확대해왔다는 점에서 의미 있는 변화로 평가되고 있어.</Text>
                    <Text style={styles.context}>하지만, 휴전과 일시적 교전 중단 사이에는 차이가 있기 때문에, 이번 조치가 인질 석방 협상에 미칠 영향은 아직은 미지수야. 이스라엘과 하마스 양측은 이번 조치의 의미를 깎아내리고 있기도 하지.</Text>
                    <Text
                        style={{
                            fontSize: 16,
                            fontWeight: 'bold',
                            color: 'rgba(255, 255, 255, 0.9)',
                            marginTop: 24,
                            alignSelf: 'flex-start',
                            marginLeft: 25,
                        }}
                    >
                        휴전과 교전 중단의 차이가 뭐야?
                    </Text>
                    <Text
                        style={{
                            fontSize: 14,
                            color: 'rgba(255, 255, 255, 0.9)',
                            width: 310,
                            textAlign: 'left',
                            lineHeight: 20,
                            marginTop: 16,
                        }}
                    >
                        교전 중단 : 일반적으로 구호 활동이 수행될 특정 기간과 구역에 한정돼어 시행돼. 가자지구의 경우에는 민간인들이 전투지역에서 대피 할 수 있고, 유엔 등 국제 구호 기구가 식량과 물을 공급할 수도 있지.
                        {'\n\n'}
                        휴전 : 분쟁 국가들이 합의한 ‘전투 중단 상태’로 규정해. 영구적인 정치적 타협 가능성을 포함해서, 당사자들이 대화에 참여할 수 있도록 허용하는 걸 목표로 하지. 분쟁 상태를 근본적으로 해결하기 위한 협상의 여지를 줘.
                    </Text>
                    <Text
                        style={{
                            fontSize: 14,
                            color: 'rgba(255, 255, 255, 0.9)',
                            width: 340,
                            textAlign: 'left',
                            lineHeight: 20,
                            marginTop: 16,
                        }}
                    >
                        그래도 최근 이스라엘과 하마스 사이에서 카타르가 기울이고 있는 중재 노력과 맞물리면서 협상에 가속도가 붙을 가능성도 있다고 보고 있는 사람이 많아.
                    </Text>
                    <View style={styles.tagContainer}>
                        <View style={{
                            width: 57,
                            height: 18,
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            borderRadius: 3,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Text style={{
                                fontSize: 11,
                                color: '#ffffff', // 원하는 색으로 변경
                            }}>#이스라엘</Text>
                        </View>
                        <View style={{
                            width: 48,
                            height: 18,
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            borderRadius: 3,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginLeft: 8,
                        }}>
                            <Text style={{
                                fontSize: 11,
                                color: '#ffffff', // 원하는 색으로 변경
                            }}>#하마스</Text>
                        </View>
                        <View style={{
                            width: 38,
                            height: 18,
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            borderRadius: 3,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginLeft: 8,
                        }}>
                            <Text style={{
                                fontSize: 11,
                                color: '#ffffff', // 원하는 색으로 변경
                            }}>#교전</Text>
                        </View>
                        <View style={{
                            width: 38,
                            height: 18,
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            borderRadius: 3,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginLeft: 8,
                        }}>
                            <Text style={{
                                fontSize: 11,
                                color: '#ffffff', // 원하는 색으로 변경
                            }}>#인질</Text>
                        </View>
                        <View style={{
                            width: 38,
                            height: 18,
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            borderRadius: 3,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginLeft: 8,
                        }}>
                            <Text style={{
                                fontSize: 11,
                                color: '#ffffff', // 원하는 색으로 변경
                            }}>#전쟁</Text>
                        </View>
                    </View>
                    <View style={styles.rectangle}>
                        {/* Your content goes here */}
                    </View>
                    <Text
                        style={{
                            fontSize: 16,
                            fontWeight: 'bold',
                            color: 'rgba(255, 255, 255, 0.9)',
                            marginTop: 24,
                            alignSelf: 'flex-start',
                            marginLeft: 25,
                        }}
                    >
                        이 뉴스는 얼마나 신뢰할 수 있어?
                    </Text>

                    <View style={{ marginTop: 18, }}>
                        <CustomButton
                            width={340}
                            height={375}
                            cut={50}
                            cardColor={'#191926'}
                            borderRadius={10}
                        >
                            <Image source={require('./public/Pentagon/CardImage.png')} style={styles.cardImage} />
                            <View style={{
                                alignSelf: 'center',
                                marginTop: 10,
                                width: 77,
                                height: 26,
                                backgroundColor: '#7E58E9',
                                borderRadius: 5,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                <Text style={{
                                    fontSize: 12,
                                    fontWeight: 'bold',
                                    color: '#ffffff', // 원하는 색으로 변경
                                }}>명확한 출처</Text>
                            </View>
                            <Text style={{
                                fontSize: 12,
                                fontWeight: '500', // React Native에서는 'medium'이 아닌 '500'으로 표현
                                textAlign: 'center',
                                color: 'rgba(213, 213, 213, 1)', // 0.83, 0.83, 0.83을 1로 변환
                                width: 265,
                                alignSelf: 'center',
                                lineHeight: 18,
                                marginTop: 16,
                            }}>
                                이 기사는 근거 자료의 출처가 명확하며 신뢰할 수 있는 기관에서 최초로 발행된 뉴스입니다.
                            </Text>
                        </CustomButton>
                    </View>
                    <Text
                        style={{
                            fontSize: 12,
                            color: 'rgba(220, 220, 220, 1)',
                            marginTop: 24,
                            alignSelf: 'center',
                        }}
                    >
                        이번 뉴스, 어떠셨나요?
                    </Text>
                    <Text
                        style={{
                            fontSize: 12,
                            color: '#7E7D7A',
                            marginTop: 3,
                            alignSelf: 'center',
                        }}
                    >
                        1,066명이 추천했어요
                    </Text>
                    <View style={styles.buttonContainer}>
                        <View style={{
                            width: 108,
                            height: 36,
                            backgroundColor: '#191926', // RGB 값으로 배경색을 지정합니다.
                            borderRadius: 3, // 둥근 테두리를 추가합니다.
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginLeft: 8,
                        }}>
                            <Image source={require('./public/buttonImage/Good.png')} style={{ width:25, height: 20}}/>
                            <Text style={{
                                marginLeft: 8,
                                fontSize: 12,
                                fontWeight: "400",
                                color: '#D3D3D3', // 원하는 색으로 변경
                            }}>추천해요</Text>
                        </View>
                        <View style={{
                            width: 108,
                            height: 36,
                            backgroundColor: '#191926', // RGB 값으로 배경색을 지정합니다.
                            borderRadius: 3, // 둥근 테두리를 추가합니다.
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginLeft: 8,
                        }}>
                            <Image source={require('./public/buttonImage/smile.png')} style={{ width:21, height: 21}}/>
                            <Text style={{
                                marginLeft: 8,
                                fontSize: 12,
                                fontWeight: "400",
                                color: '#D3D3D3', // 원하는 색으로 변경
                            }}>유익해요</Text>
                        </View>
                        <View style={{
                            width: 108,
                            height: 36,
                            backgroundColor: '#191926', // RGB 값으로 배경색을 지정합니다.
                            borderRadius: 3, // 둥근 테두리를 추가합니다.
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginLeft: 8,
                        }}>
                            <Image source={require('./public/buttonImage/Group.png')} style={{ width:33, height: 21}}/>
                            <Text style={{
                                marginLeft: 2.8,
                                fontSize: 12,
                                fontWeight: "400",
                                color: '#D3D3D3', // 원하는 색으로 변경
                            }}>후속 원해요</Text>
                        </View>
                    </View>
                    <View style={styles.rectangle}>
                        {/* Your content goes here */}
                    </View>
                    <View style={styles.rectangle}>
                        {/* Your content goes here */}
                    </View>
                    <View style={styles.rectangle}>
                        {/* Your content goes here */}
                    </View>
                    <Text
                        style={{
                            fontSize: 16,
                            fontWeight: 'bold',
                            color: 'rgba(255, 255, 255, 0.9)',
                            marginTop: 24,
                            alignSelf: 'flex-start',
                            marginLeft: 25,
                        }}
                    >
                        국제 카테고리 인기 뉴스
                    </Text>
                    <View style={styles.recommendCard}>
                        <View style={{flexDirection: 'column', flex: 8}}>
                            <View style={styles.hotPurpleBox}>
                                <Text style={{color: 'white', fontSize: 11, marginTop: 2, fontWeight: 'normal'}}>

                                </Text>
                            </View>
                            <View style={{alignItems: 'flex-start', flexDirection: 'row'}}>
                                <Text style={{color: 'white', fontSize: 14, marginTop: 12, marginLeft:16, fontWeight: 'bold'}}>
                                    영국 런던서 팔레스타인 지지 시위
                                </Text>
                            </View>
                            <Text style={{color: '#7E7D7A', fontSize: 12, marginTop: 6, marginLeft:16, fontWeight: 'normal'}}>
                                2023.11.08
                            </Text>
                        </View>
                        <View style={{flex: 2}}>
                            <Image
                                source={require('./public/example1.png')} // 로고 이미지 경로로 수정하세요.
                                style={{ width: 48, height: 49,  marginTop: 20}}
                            />
                        </View>
                    </View>
                    <View style={styles.recommendCard}>
                        <View style={{flexDirection: 'column', flex: 8}}>
                            <View style={styles.hotPurpleBox}>
                                <Text style={{color: 'white', fontSize: 11, marginTop: 2, fontWeight: 'normal'}}>

                                </Text>
                            </View>
                            <View style={{alignItems: 'flex-start', flexDirection: 'row'}}>
                                <Text style={{color: 'white', fontSize: 14, marginTop: 12, marginLeft:16, fontWeight: 'bold'}}>
                                    4,300m 상공서 비행기 창문이 '펄럭'
                                </Text>
                            </View>
                            <Text style={{color: '#7E7D7A', fontSize: 12, marginTop: 6, marginLeft:16, fontWeight: 'normal'}}>
                                2023.11.05
                            </Text>
                        </View>
                        <View style={{flex: 2}}>
                            <Image
                                source={require('./public/example2.png')} // 로고 이미지 경로로 수정하세요.
                                style={{ width: 48, height: 49,  marginTop: 20}}
                            />
                        </View>
                    </View>
                    <View style={styles.recommendCard}>
                        <View style={{flexDirection: 'column', flex: 8}}>
                            <View style={styles.hotPurpleBox}>
                                <Text style={{color: 'white', fontSize: 11, marginTop: 2, fontWeight: 'normal'}}>

                                </Text>
                            </View>
                            <View style={{alignItems: 'flex-start', flexDirection: 'row'}}>
                                <Text style={{color: 'white', fontSize: 14, marginTop: 12, marginLeft:16, fontWeight: 'bold'}}>
                                    일론 머스크 전기, 영화로 나온다
                                </Text>
                            </View>
                            <Text style={{color: '#7E7D7A', fontSize: 12, marginTop: 6, marginLeft:16, fontWeight: 'normal'}}>
                                2023.11.03
                            </Text>
                        </View>
                        <View style={{flex: 2}}>
                            <Image
                                source={require('./public/example3.png')} // 로고 이미지 경로로 수정하세요.
                                style={{ width: 48, height: 49,  marginTop: 20}}
                            />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
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
        flexDirection: 'row',
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

export default MainNewsOne;