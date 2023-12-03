import React, {useEffect, useRef, useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    Dimensions,
    Animated,
    FlatList,
    Modal,
    TouchableOpacity
} from 'react-native';
import CustomButton from "../CustomButton";
import {Calendar as RNCalendar} from "react-native-calendars";

const ITEM_SIZE = Dimensions.get('window').width*0.9;
const SPACER_ITEM_SIZE = (Dimensions.get('window').width - ITEM_SIZE) / 2;

const CardNewsSlide = ({ openPopup , onClick }) => {
    const cardData = [
        { id: 'left-spacer'},
        { id: 1, image: require("../public/Pentagon/CardImage.png"), title: '오픈AI, 새 챗봇 \'GTP-4 터보\' 공개', content: '챗(Chat)GPT를 개발한 회사인 오픈(Open)AI가 첫\n빅테크 쇼케이스를 열고 최신 챗봇인 \'GPT-4 터보\n(Turbo)\'를 공개했다. 새로 공개한 GPT-4 터보는...', station: '경향신문'},
        { id: 2, image: require("../public/Pentagon/CardImage.png"), title: '수능 N수생 28년만에 최고', content: '오는 16일 치러지는 2024학년도 수학능력시험 응시\n자는 50만 4,588명입니다. 이 가운데 재학생은 32만\n6천여명, 재수생 등 졸업생은 15만 9천여명...', station: 'KBS'},
        { id: 3, image: require("../public/Pentagon/CardImage.png"), title: '오픈AI, 새 챗봇 \'GTP-4 터보\' 공개', content: '챗(Chat)GPT를 개발한 회사인 오픈(Open)AI가 첫\n빅테크 쇼케이스를 열고 최신 챗봇인 \'GPT-4 터보\n(Turbo)\'를 공개했다. 새로 공개한 GPT-4 터보는...', station: '경향신문'},
        { id: 4, image: require("../public/Pentagon/CardImage.png"), title: '수능 N수생 28년만에 최고', content: '챗(Chat)GPT를 개발한 회사인 오픈(Open)AI가 첫\n빅테크 쇼케이스를 열고 최신 챗봇인 \'GPT-4 터보\n(Turbo)\'를 공개했다. 새로 공개한 GPT-4 터보는...', station: 'KBS'},
        { id: 5, image: require("../public/Pentagon/CardImage.png"), title: '오픈AI, 새 챗봇 \'GTP-4 터보\' 공개', content: '챗(Chat)GPT를 개발한 회사인 오픈(Open)AI가 첫\n빅테크 쇼케이스를 열고 최신 챗봇인 \'GPT-4 터보\n(Turbo)\'를 공개했다. 새로 공개한 GPT-4 터보는...', station: '경향신문'},
        { id: 'right-spacer'},
    ];

    const [isModalVisible, setModalVisible] = useState(false);
    const filteredCardData = cardData.filter(item => item.id !== 'left-spacer' && item.id !== 'right-spacer');
    const [activeSlide, setActiveSlide] = useState(0);
    const scrollX = React.useRef(new Animated.Value(0)).current;

    const selectedCardColor = '#191926'; // Change this color to the color for the selected card
    const unselectedCardColor = '#191926'; // Change this color to the color for unselected cards
    const selectedTextColor = '#ffffff'; // Change this color to the color for the selected card
    const unselectedTextColor = '#000000';
    const unselectedTagColor = '#DADADA';// Change this color to the color for unselected cards

    useEffect(() => {
        const handleScroll = Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: true },
        );

        // Add event listener for the scroll position
        scrollX.addListener(({ value }) => {
            const newIndex = Math.round(value / ITEM_SIZE);
            setActiveSlide(newIndex);
        });

        // Remove the event listener when the component unmounts
        return () => {
            scrollX.removeAllListeners();
        };
    }, [scrollX]);

    const handleButtonPress = () => {
        setModalVisible(true);
    };

    return (
        <View>
            <View style={styles.container}>
                <Animated.FlatList
                    showsHorizontalScrollIndicator={false}
                    data={cardData}
                    keyExtractor={(item) => item.id}
                    horizontal
                    contentContainerStyle={{
                        alignItems: 'center',
                    }}
                    snapToInterval={ITEM_SIZE}
                    decelerationRate={0}
                    bounces={false}
                    scrollEventThrottle={16}
                    onScroll={Animated.event(
                        [{nativeEvent: {contentOffset: {x: scrollX}}}],
                        {useNativeDriver: true},
                    )}
                    style={{height:450, width: Dimensions.get('window').width}}
                    renderItem={({item, index}) => {
                        if(!item.image) {
                            return(
                                <View style={{
                                    width: SPACER_ITEM_SIZE,
                                }}>
                                </View>
                            )
                        }

                        const inputRange = [
                            (index - 2) * ITEM_SIZE,
                            (index - 1) * ITEM_SIZE,
                            index * ITEM_SIZE,
                        ];

                        const translateY = scrollX.interpolate({
                            inputRange,
                            outputRange: [40, -30, 40],
                        });

                        const rotate = scrollX.interpolate({
                            inputRange,
                            outputRange: ['8deg', '0deg', '-8deg'],
                        });

                        const cardColor = index-1 === activeSlide ? selectedCardColor : unselectedCardColor;
                        const textColor = index-1 === activeSlide ? selectedTextColor : unselectedTextColor;
                        const tagColor = index-1 === activeSlide ? unselectedCardColor : unselectedTagColor;

                        return(
                            <View>
                                <View style={{
                                    width: Dimensions.get('window').width*0.9,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>
                                    <Animated.View style={{
                                        marginHorizontal: 50,
                                        padding: 50,
                                        alignItems: 'center',
                                        transform: [{ rotate }, {translateY},],
                                    }}>
                                        <TouchableOpacity onPress={onClick}>
                                            <CustomButton
                                                width={294}
                                                height={412}
                                                cut={50}
                                                cardColor={cardColor}
                                                borderRadius={10}
                                            >
                                                <Text style={{marginLeft: 24, marginTop:24, fontSize:16, color:'white', fontWeight: 'bold'}}>이스라엘 '하루 4시간' 교전 중지</Text>
                                                <Text style={{marginLeft: 24, marginTop:6, fontSize:12, color:'white', width: 240,}}>팔레스타인 무장정파 하마스 소탕을 위해 가자지구에 화력을 쏟아붓는 이스라엘이 일시적 교전 중단...</Text>
                                                <View style={{flexDirection: 'row', marginTop:12,}}>
                                                    <View style={{
                                                        marginLeft:24,
                                                        width: 33.24,
                                                        height: 18,
                                                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                                        borderRadius: 3,
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                    }}>
                                                        <Text style={{
                                                            fontSize: 11,
                                                            color: '#ffffff', // 원하는 색으로 변경
                                                        }}>국제</Text>
                                                    </View>
                                                    <View style={{
                                                        marginLeft:12,
                                                        width: 33.24,
                                                        height: 18,
                                                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                                        borderRadius: 3,
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                    }}>
                                                        <Text style={{
                                                            fontSize: 11,
                                                            color: '#ffffff', // 원하는 색으로 변경
                                                        }}>전쟁</Text>
                                                    </View>
                                                    <Text style={{
                                                        fontSize: 12,
                                                        marginLeft: 112,
                                                        marginTop: 2,
                                                        color: '#7E7D7A',
                                                    }}>2023.11.03</Text>
                                                </View>
                                                <Image source={item.image} style={styles.cardImage} />
                                                <TouchableOpacity onPress={openPopup} style={{
                                                    alignSelf: 'center',
                                                    marginTop: 5,
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
                                                </TouchableOpacity>
                                            </CustomButton>
                                        </TouchableOpacity>
                                    </Animated.View>
                                </View>
                            </View>
                        )
                    }}>
                </Animated.FlatList>
                <View style={styles.paginationContainer}>
                    {filteredCardData.map((_, index) => (
                        <View
                            key={index}
                            style={[
                                styles.dotStyle,
                                index === activeSlide ? styles.activeDotStyle : styles.inactiveDotStyle,
                            ]}
                        />
                    ))}
                </View>
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={isModalVisible}
                onRequestClose={() => {
                    setModalVisible(false);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <RNCalendar/>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#11111A', // 배경 색상을 여기로 이동
    },
    scrollContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center', // 중앙 정렬
    },
    cardImage: {
        width: 223,
        height: 223,
        marginTop: 20,
        alignSelf: "center",
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
    },
    cardContent: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginLeft: 10,
    },
    cardInnerContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 276,
        height: 389,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        overflow: 'hidden',
    },
    paginationContainer: {
        marginTop: 20,
        bottom: 10,
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    dotStyle: {
        marginLeft: 2,
        marginRight: 2,
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#7E58E9',
    },
    inactiveDotStyle: {
        width: 5,
        height: 5,
        borderRadius: 5,
        backgroundColor: '#DCD8CF',
    },
    activeDotStyle: {
        width: 11,
        height: 5,
        backgroundColor: '#7E58E9',
    },
    tagDateContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 8,
    },
    tagImage: {
        width: 20,
        height: 20,
        marginRight: 5,
    },
    writeDate: {
        fontSize: 12,
        marginLeft: 112,
        color: 'white',
    },
    relatedImagesContainer: {
        flexDirection: 'row',
        marginTop: 40,
    },
    relatedImage: {
        marginRight: 8,
        marginLeft: 2,
        borderRadius: 5,
    },
    tagText: {
        fontSize: 11,
        color: 'black', // 원하는 색으로 변경
    },
    sticker1: {
        width: 39,
        height: 39,
        marginRight: 8,
        marginLeft: 2,
        borderRadius: 5,
    },
    sticker2: {
        width: 43,
        height: 43,
        marginRight: 8,
        marginLeft: 2,
        borderRadius: 5,
    },
    sticker3: {
        width: 37,
        height: 41,
        marginRight: 8,
        marginLeft: 2,
        borderRadius: 5,
    },
});

export default CardNewsSlide;