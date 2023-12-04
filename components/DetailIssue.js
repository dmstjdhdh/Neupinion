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
import CustomButtonCut from "./CustomButtonCut";

const SelectableButton = ({ id, title, onSelect, isSelected, isDone }) => {
    return (
        <TouchableOpacity
            onPress={() => onSelect(id)}
            activeOpacity={0.8}
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
                paddingLeft: 26,
                paddingRight: 10,
                paddingVertical: 10,
                width: 340,
                height: 54,
                backgroundColor: isSelected ? '#7E5AEB' : '#1A1A26',
                borderRadius: 5,
            }}
        >
            <Text
                style={{
                    fontSize: 16,
                    width: 155,
                    fontWeight: 'bold',
                    color: isSelected ? '#FFFFFF' : 'rgba(255, 255, 255, 0.2)',
                }}
            >
                {title}
            </Text>
            {isDone && isSelected && <Image source={require('./public/ui/check-circle.png')} style={{width:24, height: 24, marginLeft: 103,}}/> }
        </TouchableOpacity>
    );
};
const DetailIssue = ({navigation}) => {
    const [isModalVisible, setModalVisible] = useState(false);
    const triangleSize = 11.3;

    const [selectedButton, setSelectedButton] = useState(null);
    const [isConfirmed, setIsConfirmed] = useState(false);

    const handleButtonSelect = (buttonId) => {
        if (!isConfirmed) {
            setSelectedButton(buttonId);
        }
    };
    const onClickVote = () => {navigation.navigate('VoteDetail')};
    const handleConfirm = () => {
        if (selectedButton !== null) {
            setIsConfirmed(true);
            onClickVote();
            // 여기에서 선택이 확정됐을 때의 로직을 추가할 수 있습니다.
        }
    };

    const onClick = () => {navigation.navigate('Home')};

    const onClickPost = () => {navigation.navigate('Post')};

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
                <Image source={require('./public/twitter.png')} style={styles.twitter}/>
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
                    <View style={styles.imageContainer}>
                        <Image source={require('./public/Pentagon.png')} style={styles.image}/>
                        <Text style={{color: '#7E7D7A', fontSize: 11, }}>[사진=연합뉴스]</Text>
                    </View>
                    <Text style={styles.context}>블룸버그통신 등에 따르면 22일(현지 시간) 오전 9시를 전후로 미 워싱턴DC에 있는 펜타곤으로 보이는 건물에서 검은 연기가 피어오르는 사진이 트위터를 통해 국내외로 빠르게 확산했다. 펜타곤과 닮은 직사각형 건물 주변에서 검은 연기 기둥이 치솟는 모습은 2002 발생한 9·11 테러 당시 공격을 받은 펜타곤의 모습을 떠올리게 했다.</Text>
                    <Text style={styles.context}>미 NBC 뉴스에 따르면 이 사진은 트위터 유료 계정에서 이날 오전 8시42분경 처음 게시됐다. 이후 트럼프 지지 성향의 극우 음모론 단체인 큐어넌과 연관된 페이스북 계정에서도 같은 사진이 올라왔다.</Text>
                    <Text style={styles.context}>CNBC는 이날 미 증시 개장 직후 가짜 사진이 널리 퍼졌고, 이로 인해 스탠더드앤드푸어스(S&P)500 지수가 잠시 0.3% 하락했다고 보도했다. 또 당시 미국 국채 가격도 잠시 상승해 투자자들이 돈을 보관할 안전한 곳을 찾고 있음을 보여줬다고 덧붙였다.</Text>

                    <View style={styles.tagContainer}>
                        <View style={{
                            width: 48,
                            height: 18,
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            borderRadius: 3,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Text style={{
                                fontSize: 11,
                                color: '#ffffff', // 원하는 색으로 변경
                            }}>#펜타곤</Text>
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
                            }}>#폭발</Text>
                        </View>
                        <View style={{
                            width: 60,
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
                            }}>#9.11테러</Text>
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
                        의견쓰기
                    </Text>

                    <Text style={{
                        fontSize: 16,
                        fontWeight: "bold",
                        color: 'white', // 원하는 색으로 변경
                    }}>아직 의견이 없어요!</Text>

                    <TouchableOpacity onPress={onClickPost} style={{
                        width: 118,
                        height: 40,
                        backgroundColor: 'white', // RGB 값으로 배경색을 지정합니다.
                        borderRadius: 5, // 둥근 테두리를 추가합니다.
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginLeft: 8,
                        marginTop: 28,
                    }}>
                        <Text style={{
                            fontSize: 14,
                            fontWeight: "bold",
                            color: 'black', // 원하는 색으로 변경
                        }}>의견 추가하기</Text>
                    </TouchableOpacity>
                    <View style={styles.rectangle}>
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
                        신뢰도 평가하기
                    </Text>
                    <View style={styles.buttonContainer}>
                        <SelectableButton
                            id={1}
                            title="진짜뉴스예요."
                            onSelect={handleButtonSelect}
                            isSelected={selectedButton === 1}
                            isDone={isConfirmed}
                        />
                        <View style={{height: 18,}}></View>
                        <SelectableButton
                            id={2}
                            title="가짜뉴스예요."
                            onSelect={handleButtonSelect}
                            isSelected={selectedButton === 2}
                            isDone={isConfirmed}
                        />
                        <View style={{height: 18,}}></View>
                        <SelectableButton
                            id={3}
                            title="모르겠어요."
                            onSelect={handleButtonSelect}
                            isSelected={selectedButton === 3}
                            isDone={isConfirmed}
                        />
                    </View>
                    <TouchableOpacity onPress={handleConfirm} style={{
                        width: 143,
                        height: 40,
                        backgroundColor: 'white', // RGB 값으로 배경색을 지정합니다.
                        borderRadius: 5, // 둥근 테두리를 추가합니다.
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginLeft: 8,
                        marginTop: 28,
                    }}>
                        <Text style={{
                            fontSize: 14,
                            fontWeight: "bold",
                            color: 'black', // 원하는 색으로 변경
                        }}>투표하고 결과 보기</Text>
                    </TouchableOpacity>
                    <View style={{height: 24}}></View>
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

export default DetailIssue;