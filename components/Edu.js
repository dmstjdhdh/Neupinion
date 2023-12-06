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

const Edu = ({navigation}) => {
    const [isModalVisible, setModalVisible] = useState(false);
    const triangleSize = 11.3;
    const flatListRef = useRef(null);
    const flatListRefStar = useRef(null);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const onPress = () => {
        toggleModal();
    };

    const data3 = [
        { id: 1, image: require("./public/money1.png"), title: '1화 I 알아두면 쏠쏠한 예산 관리', content: '돈을 어떻게 관리하는지, 예산을 어떻게 세우는지에 대한 기본 개념을 쉽게 알려드려요.', station: 'D-12', width: 151, height: 86, backColor: '#EADFC9'},
        { id: 2, image: require("./public/money2.png"), title: '2화 I 경제 시스템의 이해', content: '자본주의, 공산주의 등과 같은 경제 시스템의 기본 원리에 대해 소개합니다.', station: 'D-12', width: 129, height: 95, backColor: '#98BBFE'},
        { id: 3, image: require("./public/coinshit.png"), title: '데일리 경제 상식', content: '청소년을 위한 맞춤 경제 상식 콘텐츠를 뉴피니언에서 한 번에 만나보세요!', station: 'D-12', width: 133, height: 100, backColor: '#EADFC9'},
    ];
    const onClick = () => {navigation.navigate('Home')};

    const renderItemStar = ({ item }) => (
        <View style={{marginLeft: 8, marginRight: 8}}>
            <TouchableOpacity
                style={{width:268, height:248}}
                onPress={() => {
                }}
            >
                <View
                    style={{
                        width: 268,
                        height: 248,
                        backgroundColor: 'rgba(25, 25, 38, 1)',
                        borderRadius: 5,
                        overflow: 'hidden',
                        flexDirection: 'column',
                        alignItems: 'center',
                        alignSelf: 'center',
                        marginTop: 24,
                    }}
                >
                    <View style={{width:268, height:124,alignItems:'center',backgroundColor: item.backColor}}>
                        <Image
                            source={item.image}
                            style={{ width: item.width, height: item.height, marginTop:12,}}
                        />
                    </View>
                    <Text style={{color: 'white', fontSize: 16,fontWeight: 'bold', width: 240, marginTop: 16}}>
                        {item.title}
                    </Text>
                    <Text style={{color: 'rgba(255, 255, 255, 0.83)', fontSize: 12,fontWeight: '500', width: 232, marginTop: 6, marginRight: 12,}}>
                        {item.content}
                    </Text>
                    <View style={{width: 270, marginTop: 8}}>
                        <View style={{
                            marginLeft:12,
                            marginTop: 12,
                            width: 57,
                            height: 18,
                            backgroundColor: 'rgba(255, 255, 255, 0.2)',
                            borderRadius: 3,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Text style={{
                                fontSize: 11,
                                color: '#ffffff', // 원하는 색으로 변경
                            }}>#금전관리</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );

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
                        <TouchableOpacity onPress={() => {}}>
                            <Image source={require("./public/ui/bookmark.png")} style={{
                                width: 11.5*1.25, height: 16.29167*1.25,
                                marginLeft: 20,
                                opacity: 0,
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
                    <View
                        style={{
                            width: 338,
                            height: 136,
                            marginTop: 16,
                            backgroundColor: 'rgba(166, 213, 250, 1)', // Color(red: 0.65, green: 0.83, blue: 0.98)
                            borderRadius: 5,
                        }}
                    >
                        <Image source={require('./public/coinshit.png')} style={{width:144, height: 108, alignSelf: 'center', marginTop: 12,}}/>
                    </View>
                    <Text style={styles.title}>데일리 경제 상식</Text>
                    <Text style={{width: 320, color: 'rgba(255,255,255,0.83)', fontSize: 14, marginTop: 8,}}>청소년을 위한 맞춤 경제 상식 콘텐츠를 뉴피니언에서 한 번에 만나보세요! 데일리 경제 상식 콘텐츠는 재미있는 이야기와 함께 미래를 준비하는 데 도움이 되는 경제 정보로 가득 차 있어요. 함께해요, 지금 당장 뉴피니언과 경제의 흐름을 읽어보면서 더 나은 내일을 준비해봐요!</Text>
                    <Text style={styles.title}>시리즈로 준비했어요</Text>
                    <View style={{width: Dimensions.get('window').width, height: 300, marginLeft: 36}}>
                        <FlatList
                            ref={flatListRef}
                            data={data3}
                            renderItem={renderItemStar}
                            keyExtractor={(item) => item.id.toString()}
                            horizontal
                            pagingEnabled
                            showsHorizontalScrollIndicator={false}
                            onEndReachedThreshold={0.1}
                            onEndReached={() => {
                                // 리스트 끝에 도달했을 때 처리할 로직 추가
                            }}
                            decelerationRate="fast" // 추가된 부분
                        />
                    </View>
                    <Text style={styles.title}>관심있는 주제를 찾아보세요</Text>
                    <View style={{flexDirection: 'column'}}>
                        <View style={{flexDirection: 'row', width: 350}}>
                            <View style={{
                                marginLeft:12,
                                marginTop: 12,
                                width: 46.8,
                                height: 21.6,
                                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                borderRadius: 3,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                <Text style={{
                                    fontSize: 13.2,
                                    color: '#ffffff', // 원하는 색으로 변경
                                    fontWeight: '500',
                                }}>#금리</Text>
                            </View>
                            <View style={{
                                marginLeft:12,
                                marginTop: 12,
                                width: 80,
                                height: 21.6,
                                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                borderRadius: 3,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                <Text style={{
                                    fontSize: 13.2,
                                    color: '#ffffff', // 원하는 색으로 변경
                                    fontWeight: '500',
                                }}>#인플레이션</Text>
                            </View>
                            <View style={{
                                marginLeft:12,
                                marginTop: 12,
                                width: 46.8,
                                height: 21.6,
                                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                borderRadius: 3,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                <Text style={{
                                    fontSize: 13.2,
                                    color: '#ffffff', // 원하는 색으로 변경
                                    fontWeight: '500',
                                }}>#NFT</Text>
                            </View>
                            <View style={{
                                marginLeft:12,
                                marginTop: 12,
                                width: 57,
                                height: 21.6,
                                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                borderRadius: 3,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                <Text style={{
                                    fontSize: 13.2,
                                    color: '#ffffff', // 원하는 색으로 변경
                                    fontWeight: '500',
                                }}>#부동산</Text>
                            </View>
                            <View style={{
                                marginLeft:12,
                                marginTop: 12,
                                width: 46.8,
                                height: 21.6,
                                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                borderRadius: 3,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                <Text style={{
                                    fontSize: 13.2,
                                    color: '#ffffff', // 원하는 색으로 변경
                                    fontWeight: '500',
                                }}>#대출</Text>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row', width: 350}}>
                            <View style={{
                                marginLeft:12,
                                marginTop: 12,
                                width: 68,
                                height: 21.6,
                                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                borderRadius: 3,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                <Text style={{
                                    fontSize: 13.2,
                                    color: '#ffffff', // 원하는 색으로 변경
                                    fontWeight: '500',
                                }}>#국제금융</Text>
                            </View>
                            <View style={{
                                marginLeft:12,
                                marginTop: 12,
                                width: 57,
                                height: 21.6,
                                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                borderRadius: 3,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                <Text style={{
                                    fontSize: 13.2,
                                    color: '#ffffff', // 원하는 색으로 변경
                                    fontWeight: '500',
                                }}>#이자율</Text>
                            </View>
                            <View style={{
                                marginLeft:12,
                                marginTop: 12,
                                width: 46.8,
                                height: 21.6,
                                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                borderRadius: 3,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                <Text style={{
                                    fontSize: 13.2,
                                    color: '#ffffff', // 원하는 색으로 변경
                                    fontWeight: '500',
                                }}>#투자</Text>
                            </View>
                            <View style={{
                                marginLeft:12,
                                marginTop: 12,
                                width: 46.8,
                                height: 21.6,
                                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                borderRadius: 3,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                <Text style={{
                                    fontSize: 13.2,
                                    color: '#ffffff', // 원하는 색으로 변경
                                    fontWeight: '500',
                                }}>#무역</Text>
                            </View>
                            <View style={{
                                marginLeft:12,
                                marginTop: 12,
                                width: 68,
                                height: 21.6,
                                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                borderRadius: 3,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                <Text style={{
                                    fontSize: 13.2,
                                    color: '#ffffff', // 원하는 색으로 변경
                                    fontWeight: '500',
                                }}>#경제성장</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{height: 80}}>

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

export default Edu;