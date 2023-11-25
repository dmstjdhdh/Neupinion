import React, { useState } from "react";
import {View, Text, StyleSheet, TouchableOpacity, Dimensions, ScrollView, Modal, Image} from 'react-native';
import CardNewsSlide from "./newstokcomp/CardNewsSlide";
import { Calendar as RNCalendar } from "react-native-calendars";
import {LinearGradient} from "expo-linear-gradient";
import StickerPopup from "./StickerPopup";

const NewsTokTok = ({onClick}) => {
    const [activeSlide, setActiveSlide] = useState(0);
    const [isModalVisible, setModalVisible] = useState(false);
    const [selectedDate, setSelectedDate] = useState("");
    const [isPopupVisible, setPopupVisible] = useState(false);

    const showPopup = () => setPopupVisible(true);
    const closePopup = () => setPopupVisible(false);

    const sliderData = [
        { text: '전소연, 마약 루머 부인... "사실무근, 강력 법적 대응"', title: '팩트님이 본 뉴스의 새 소식!' },
        { text: '전소연, 마약 루머 부인... "사실무근, 강력 법적 대응"', title: '팩트님이 본 뉴스의 새 소식!' },
        { text: '전소연, 마약 루머 부인... "사실무근, 강력 법적 대응"', title: '팩트님이 본 뉴스의 새 소식!' },
        { text: '전소연, 마약 루머 부인... "사실무근, 강력 법적 대응"', title: '팩트님이 본 뉴스의 새 소식!' },
    ];

    const handleButtonPress = () => {
        setModalVisible(true);
    };

    const onDayPress = (day) => {
        setSelectedDate(day.dateString);
        setModalVisible(false);
    };

    return (
        <View>
            <View style={{ backgroundColor: '#EFEFEF' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                    <View style={{ marginTop: 24, marginBottom: 8, marginLeft: 24, marginRight: 0 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>
                            {selectedDate
                                ? `${parseInt(selectedDate.substring(5, 7))}월 ${parseInt(selectedDate.substring(8, 10))}일`
                                : '11월 22일'}
                        </Text>
                    </View>
                    <TouchableOpacity onPress={handleButtonPress} style={styles.arrowButton}>
                        <Image source={require('./public/Arrow.png')} style={styles.imageDecrease}/>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                    <View style={{ marginTop: 4, marginBottom: 4, marginLeft: 24, marginRight: 15 }}>
                        <Text style={{ fontSize: 12 }}>4가지의 새로운 정정기사가 있어요!</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'column', justifyContent: 'flex-start' }}>
                    <ScrollView
                        horizontal
                        pagingEnabled
                        showsHorizontalScrollIndicator={false}
                        onScroll={(event) => {
                            const slideWidth = Dimensions.get('window').width;
                            const { contentOffset } = event.nativeEvent;
                            const currentIndex = Math.floor(contentOffset.x / slideWidth);
                            setActiveSlide(currentIndex);
                        }}
                    >
                        {sliderData.map((item, index) => (
                            <View key={index} style={styles.sliderContent}>
                                <Text style={styles.sliderTitle}>{item.title}</Text>
                                <Text style={styles.sliderText}>{item.text}</Text>
                            </View>
                        ))}
                    </ScrollView>
                    <View style={styles.paginationContainer}>
                        {sliderData.map((_, index) => (
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
                <View style={styles.animationContainer}>
                    <Text style={styles.animationTitle}>바쁘면 이것만, 오늘의 뉴스!</Text>
                    <View style={styles.animationCard}>
                        <CardNewsSlide openPopup={showPopup} onClick={onClick}/>
                    </View>
                </View>
                <View style={styles.recommendContainer}>
                    <Text style={styles.recommendTitle}>팩트님을 위한 추천 뉴스!</Text>
                    <View style={{alignItems: 'center'}}>
                        <View style={styles.recommendCard}>
                            <View style={{flexDirection: 'column', flex: 8}}>
                                <View style={styles.hotPurpleBox}>
                                    <Text style={{color: 'white', fontSize: 11, marginTop: 2, fontWeight: 'normal'}}>
                                        실시간 HOT
                                    </Text>
                                </View>
                                <View style={{alignItems: 'flex-start', flexDirection: 'row'}}>
                                    <Text style={{color: '#000000', fontSize: 14, marginTop: 12, marginLeft:16, fontWeight: 'bold'}}>
                                        사우디 월드컵 개최 확정
                                    </Text>
                                </View>
                                <Text style={{color: '#7E7D7A', fontSize: 12, marginTop: 6, marginLeft:16, fontWeight: 'normal'}}>
                                    2023.11.02
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
                                        실시간 HOT
                                    </Text>
                                </View>
                                <View style={{alignItems: 'flex-start', flexDirection: 'row'}}>
                                    <Text style={{color: '#000000', fontSize: 14, marginTop: 12, marginLeft:16, fontWeight: 'bold'}}>
                                        올해 수능, 코로나19 확진자도 동일 시험장
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
                                        실시간 HOT
                                    </Text>
                                </View>
                                <View style={{alignItems: 'flex-start', flexDirection: 'row'}}>
                                    <Text style={{color: '#000000', fontSize: 14, marginTop: 12, marginLeft:16, fontWeight: 'bold'}}>
                                        또 드러난 전청조의 '임신 사기'
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
                </View>
                <View style={{height: 120}}>
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
                        <RNCalendar onDayPress={onDayPress} />
                    </View>
                </View>
            </Modal>
            <StickerPopup isVisible={isPopupVisible} onClose={closePopup} />
        </View>
    );
};

const styles = StyleSheet.create({
    gradient: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        padding: 10, // 잘린 부분을 뒷배경 색으로 표현하기 위한 여백
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    arrowButton: {
        marginBottom: 8,
        marginTop: 23,
        marginLeft: 0,
        marginRight: 4
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    sliderContent: {
        marginTop: 12,
        flexDirection: 'column',
        width: Dimensions.get('window').width,
        height: 80,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: '#7E58E9',
    },
    sliderTitle: {
        marginLeft: 22,
        marginTop: 16,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
    sliderText: {
        marginLeft: 22,
        marginTop: 10,
        color: 'white',
        fontSize: 14,
    },
    paginationContainer: {
        marginTop: 20,
        bottom: 10,
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-start'
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
    animationContainer: {
        height: 550,
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    animationTitle: {
        marginLeft: 24,
        marginTop: 16,
        color: 'black',
        fontWeight: 'bold',
        fontSize: 16,
    },
    animationCard: {
        marginTop: 32,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    imageDecrease: {
        width: 22,
        height: 22,
    },
    recommendContainer: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        marginTop: 10,
    },
    recommendTitle: {
        marginLeft: 24,
        marginTop: 16,
        color: 'black',
        fontWeight: 'bold',
        fontSize: 16,
    },
    recommendCard: {
        marginTop: 20,
        width: 340,
        height: 93,
        borderRadius: 5,
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    hotPurpleBox: {
        width: 77,
        height: 18,
        backgroundColor: '#7E58E9',
        borderTopLeftRadius: 5,
        alignItems: 'center',
    }
});

export default NewsTokTok;
