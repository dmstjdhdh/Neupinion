import React, {useEffect, useRef, useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity, FlatList, Image
} from 'react-native';

const CardNewsSlideIssueSecond = () => {

    const cardDataIssue = [
        { id: 1, image: require("../public/cardDummuy/Dog.png"), title: '너무너무 졸리다', content: '챗(Chat)GPT를 개발한 회사인 오픈(Open)AI가 첫\n빅테크 쇼케이스를 열고 최신 챗봇인 \'GPT-4 터보\n(Turbo)\'를 공개했다. 새로 공개한 GPT-4 터보는...', station: 'D-12'},
        { id: 2, image: require("../public/cardDummuy/Dog.png"), title: '너무너무 졸리다', content: '오는 16일 치러지는 2024학년도 수학능력시험 응시\n자는 50만 4,588명입니다. 이 가운데 재학생은 32만\n6천여명, 재수생 등 졸업생은 15만 9천여명...', station: 'D-12'},
        { id: 3, image: require("../public/cardDummuy/Dog.png"), title: '너무너무 졸리다', content: '챗(Chat)GPT를 개발한 회사인 오픈(Open)AI가 첫\n빅테크 쇼케이스를 열고 최신 챗봇인 \'GPT-4 터보\n(Turbo)\'를 공개했다. 새로 공개한 GPT-4 터보는...', station: 'D-12'},
        { id: 4, image: require("../public/cardDummuy/Dog.png"), title: '너무너무 졸리다', content: '챗(Chat)GPT를 개발한 회사인 오픈(Open)AI가 첫\n빅테크 쇼케이스를 열고 최신 챗봇인 \'GPT-4 터보\n(Turbo)\'를 공개했다. 새로 공개한 GPT-4 터보는...', station: 'D-12'},
        { id: 5, image: require("../public/cardDummuy/Dog.png"), title: '너무너무 졸리다', content: '챗(Chat)GPT를 개발한 회사인 오픈(Open)AI가 첫\n빅테크 쇼케이스를 열고 최신 챗봇인 \'GPT-4 터보\n(Turbo)\'를 공개했다. 새로 공개한 GPT-4 터보는...', station: 'D-12'},
    ];

    const data = [1, 2, 3, 4, 5]; // 카드에 표시할 데이터

    const flatListRef = useRef(null);

    const renderItem = ({ item }) => (
        <View style={{marginLeft: 14, marginRight: 14}}>
            <TouchableOpacity
                style={styles.card}
                onPress={() => {
                    // 특정 카드 클릭 시 처리할 로직 추가
                }}
            >
                <Image source={require('../public/Rectangle.png')} style={styles.cardImage}/>
                <View style={{
                    width: 93,
                    height: 44,
                    backgroundColor: '#7E58E9',
                    borderRadius: 5,
                    alignSelf: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'absolute',
                    marginTop: 63,
                    transform: [{ rotate: '-15deg' }], // 15도 회전
                }}>
                    <Text style={{
                        color: 'white',
                        fontSize: 16,
                        fontWeight: 'bold', }}>
                        진짜
                    </Text>
                </View>
                <View>
                    {/* 1. 카드뉴스 제목 */}
                    <Text style={{
                        fontSize: 15,
                        fontWeight: 'bold',
                        marginTop: 8,
                        marginLeft: 20,
                        color: '#000000',
                    }}>너무너무 졸리다</Text>

                    {/* 3. 주제 태그 이미지 박스, 작성 날짜 */}
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginTop: 0,
                    }}>
                        {/* 주제 태그 이미지 박스 */}
                        <View style={{
                            width: 34,
                            height: 23,
                            backgroundColor: '#EDE6FF',
                            borderRadius: 3,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginLeft: 20,
                            marginTop: 12,
                        }}>
                            <Text style={{
                                fontSize: 11,
                                color: 'black', // 원하는 색으로 변경
                            }}>국제</Text>
                        </View>
                        <Text style={{
                            fontSize: 12,
                            marginLeft: 10,
                            marginTop: 10,
                            color: '#7E7D7A',
                        }}>2023.11.03</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                ref={flatListRef}
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.toString()}
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
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    card: {
        width: 218,
        height: 275,
        borderRadius: 10,
        backgroundColor: '#ffffff',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    cardText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
    },
    cardImage: {
        width: '100%',
        height: 189,
        resizeMode: 'cover', // 이미지를 카드 크기에 맞춰 보여주기
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
    }
});

export default CardNewsSlideIssueSecond;