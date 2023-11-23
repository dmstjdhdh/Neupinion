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

const ITEM_SIZE = Dimensions.get('window').width*0.84;
const SPACER_ITEM_SIZE = (Dimensions.get('window').width - ITEM_SIZE) / 2;

const CardNewsSlide = ({ openPopup }) => {
    const cardData = [
        { id: 'left-spacer'},
        { id: 1, image: require("../public/GPT.png"), title: '오픈AI, 새 챗봇 \'GTP-4 터보\' 공개', content: '챗(Chat)GPT를 개발한 회사인 오픈(Open)AI가 첫\n빅테크 쇼케이스를 열고 최신 챗봇인 \'GPT-4 터보\n(Turbo)\'를 공개했다. 새로 공개한 GPT-4 터보는...', station: '경향신문'},
        { id: 2, image: require("../public/Study.png"), title: '수능 N수생 28년만에 최고', content: '오는 16일 치러지는 2024학년도 수학능력시험 응시\n자는 50만 4,588명입니다. 이 가운데 재학생은 32만\n6천여명, 재수생 등 졸업생은 15만 9천여명...', station: 'KBS'},
        { id: 3, image: require("../public/GPT.png"), title: '오픈AI, 새 챗봇 \'GTP-4 터보\' 공개', content: '챗(Chat)GPT를 개발한 회사인 오픈(Open)AI가 첫\n빅테크 쇼케이스를 열고 최신 챗봇인 \'GPT-4 터보\n(Turbo)\'를 공개했다. 새로 공개한 GPT-4 터보는...', station: '경향신문'},
        { id: 4, image: require("../public/Study.png"), title: '수능 N수생 28년만에 최고', content: '챗(Chat)GPT를 개발한 회사인 오픈(Open)AI가 첫\n빅테크 쇼케이스를 열고 최신 챗봇인 \'GPT-4 터보\n(Turbo)\'를 공개했다. 새로 공개한 GPT-4 터보는...', station: 'KBS'},
        { id: 5, image: require("../public/GPT.png"), title: '오픈AI, 새 챗봇 \'GTP-4 터보\' 공개', content: '챗(Chat)GPT를 개발한 회사인 오픈(Open)AI가 첫\n빅테크 쇼케이스를 열고 최신 챗봇인 \'GPT-4 터보\n(Turbo)\'를 공개했다. 새로 공개한 GPT-4 터보는...', station: '경향신문'},
        { id: 'right-spacer'},
    ];

    const [isModalVisible, setModalVisible] = useState(false);
    const filteredCardData = cardData.filter(item => item.id !== 'left-spacer' && item.id !== 'right-spacer');
    const [activeSlide, setActiveSlide] = useState(0);
    const scrollX = React.useRef(new Animated.Value(0)).current;

    const selectedCardColor = '#7E58E9'; // Change this color to the color for the selected card
    const unselectedCardColor = '#ffffff'; // Change this color to the color for unselected cards
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
                                    width: Dimensions.get('window').width*0.84,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>
                                    <Animated.View style={{
                                        marginHorizontal: 50,
                                        padding: 50,
                                        alignItems: 'center',
                                        transform: [{ rotate }, {translateY},],
                                    }}>
                                        <CustomButton
                                            width={276}
                                            height={389}
                                            cut={35}
                                            cardColor={cardColor}
                                            borderRadius={10}
                                        >
                                            <Image source={item.image} style={styles.cardImage} />
                                            <View style={{
                                                width: 57,
                                                height: 18,
                                                backgroundColor: '#7E58E9',
                                                borderTopLeftRadius: 5,
                                                alignItems: 'center',
                                                justifyContent: 'space-between',
                                                position: 'absolute'
                                            }}>
                                                <Text style={{
                                                    color: 'white',
                                                    fontSize: 11,
                                                    marginTop: 3,
                                                    fontWeight: 'normal', }}>
                                                    {item.station}
                                                </Text>
                                            </View>
                                            <View style={styles.cardContent}>
                                                {/* 1. 카드뉴스 제목 */}
                                                <Text style={{
                                                    fontSize: 16,
                                                    fontWeight: 'bold',
                                                    marginBottom: 8,
                                                    marginLeft: 2,
                                                    color: textColor,
                                                    marginTop: 16,
                                                }}>{item.title}</Text>

                                                {/* 2. 카드뉴스 내용 */}
                                                <Text style={{
                                                    marginLeft: 2,
                                                    fontSize: 12,
                                                    lineHeight: 18,
                                                    color: textColor,
                                                }}>{item.content}</Text>

                                                {/* 3. 주제 태그 이미지 박스, 작성 날짜 */}
                                                <View style={styles.tagDateContainer}>
                                                    {/* 주제 태그 이미지 박스 */}
                                                    <View style={{
                                                        width: 33.24,
                                                        height: 18,
                                                        backgroundColor: tagColor,
                                                        borderRadius: 3,
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        marginLeft: 2,
                                                        marginTop: 4,
                                                    }}>
                                                        <Text style={{
                                                            fontSize: 11,
                                                            color: 'black', // 원하는 색으로 변경
                                                        }}>국제</Text>
                                                    </View>
                                                    <View style={{width: 10, height: 18, justifyContent: 'center', alignItems: 'center'}}></View>
                                                    <View style={{
                                                        width: 33.24,
                                                        height: 18,
                                                        backgroundColor: tagColor,
                                                        borderRadius: 3,
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        marginLeft: 2,
                                                        marginTop: 4,
                                                    }}>
                                                        <Text style={{
                                                            fontSize: 11,
                                                            color: 'black', // 원하는 색으로 변경
                                                        }}>IT</Text>
                                                    </View>

                                                    {/* 작성 날짜 */}
                                                    <Text style={{
                                                        fontSize: 12,
                                                        marginLeft: 112,
                                                        color: textColor,
                                                    }}>2023.11.03</Text>
                                                </View>

                                                {/* 4. 관련 이미지 배너 */}
                                                <View style={styles.relatedImagesContainer}>
                                                    <TouchableOpacity onPress={openPopup} style={{
                                                        width: 39,
                                                        height: 39,
                                                        marginRight: 8,
                                                        marginLeft: 2,
                                                    }}>
                                                        <Image source={require('../public/sticker1.png')} style={styles.sticker1} />
                                                    </TouchableOpacity>
                                                    <TouchableOpacity onPress={openPopup} style={{
                                                        width: 39,
                                                        height: 39,
                                                        marginRight: 8,
                                                        marginLeft: 2,
                                                    }}>
                                                        <Image source={require('../public/sticker2.png')} style={styles.sticker2} />
                                                    </TouchableOpacity>
                                                    <TouchableOpacity onPress={openPopup} style={{
                                                        width: 39,
                                                        height: 39,
                                                        marginRight: 8,
                                                        marginLeft: 2,
                                                    }}>
                                                        <Image source={require('../public/sticker3.png')} style={styles.sticker3} />
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                        </CustomButton>
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
        backgroundColor: '#EFEFEF', // 배경 색상을 여기로 이동
    },
    scrollContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center', // 중앙 정렬
    },
    cardImage: {
        width: '100%',
        height: 165,
        resizeMode: 'cover', // 이미지를 카드 크기에 맞춰 보여주기
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