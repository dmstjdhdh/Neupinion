import React, {useRef, useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    Animated,
    ScrollView,
    TextInput,
    Dimensions, FlatList
} from 'react-native';
const MyContent = () => {
    const flatListRef = useRef(null);
    const flatListRefStar = useRef(null);
    const data = [
        { id: 1, image: require("./public/myPageSticker/Illustration.png"), title: '진행 중인 미션', content: '2개', station: 'D-12', width: 49, height: 49},
        { id: 2, image: require("./public/myPageSticker/Text-1.png"), title: '연속 출석체크', content: '2일', station: 'D-12', width: 41, height: 49,},
        { id: 3, image: require("./public/myPageSticker/Text.png"), title: '내가 한 기부', content: '11개', station: 'D-12', width: 49, height: 49,},
    ];

    const dataCard = [
        { id: 1, image: require("./public/myPageStar/star.png"), title: '소통의 왕', content: '커뮤니티에서 남긴 댓글의 수가 50개 이상이에요!', station: 'D-12', width: 135, height: 135},
        { id: 2, image: require("./public/myPageStar/star2.png"), title: '뉴피니언 기자단 MVP', content: '뉴피니언 기자단으로\n' +
                '활발한 활동을 했어요!', station: 'D-12', width: 135, height: 135,},
    ];
    const renderItem = ({ item }) => (
        <View style={{marginLeft: 8, marginRight: 8}}>
            <TouchableOpacity
                style={{width:124, height:116}}
                onPress={() => {
                    // 특정 카드 클릭 시 처리할 로직 추가
                }}
            >
                <View
                    style={{
                        width: 124,
                        height: 116,
                        backgroundColor: 'rgba(25, 25, 38, 1)',
                        borderRadius: 5,
                        overflow: 'hidden',
                        flexDirection: 'column',
                        alignItems: 'center',
                        alignSelf: 'center',
                        marginTop: 24,
                    }}
                >
                    <Text style={{color: 'white', fontSize: 12,fontWeight: '500', width: 90, marginTop:12,}}>
                        {item.title}
                    </Text>
                    <Text style={{color: 'rgba(255, 255, 255, 1)', fontSize: 18,fontWeight: 'bold', width: 90, marginTop: 2,}}>
                        {item.content}
                    </Text>
                    <Image
                        source={item.image}
                        style={{ width: item.width, height: item.height, marginLeft:50, marginTop: 2}}
                    />
                </View>
            </TouchableOpacity>
        </View>
    );
    const renderItemStar = ({ item }) => (
        <View style={{marginLeft: 8, marginRight: 8}}>
            <TouchableOpacity
                style={{width:228, height:199}}
                onPress={() => {
                    // 특정 카드 클릭 시 처리할 로직 추가
                }}
            >
                <View
                    style={{
                        width: 228,
                        height: 199,
                        backgroundColor: 'rgba(25, 25, 38, 1)',
                        borderRadius: 5,
                        overflow: 'hidden',
                        flexDirection: 'column',
                        alignItems: 'center',
                        alignSelf: 'center',
                        marginTop: 24,
                    }}
                >
                    <Image
                        source={item.image}
                        style={{ width: item.width, height: item.height, marginTop: 2}}
                    />
                    <Text style={{color: 'white', fontSize: 15,fontWeight: 'bold', position: 'relative', top: -10, marginLeft: 2,}}>
                        {item.title}
                    </Text>
                    <Text style={{color: 'rgba(255, 255, 255, 1)', fontSize: 12,fontWeight: '500', width: 150, marginTop: 2, textAlign: 'center',}}>
                        {item.content}
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );

    return(
        <View style={styles.container}>
            <View style={styles.head}>
                <View style={styles.iconcontainer}>
                    {/* 좌측 로고 */}
                    <Text style={{ fontWeight: 'bold', fontSize: 16, marginLeft: -5, color: '#EFEFEF'}}>
                        Neupinion
                    </Text>

                    {/* 우측 아이콘 */}
                    <View style={{ flexDirection: 'row', alignItems: 'center' , marginLeft: 120}}>
                        <Image
                            source={require('./public/ui/Search.png')}
                            style={{ width: 16, height: 16 , marginRight: 20}}
                        />
                        <Image
                            source={require('./public/ui/Bell.png')}
                            style={{ width: 14.67, height: 16.5 }}
                        />
                    </View>
                </View>
            </View>
            <View>
                <View style={styles.textcontainer}>
                    <View
                        style={styles.button}
                    >
                        <View style={styles.buttonContent}>
                            <Text style={styles.buttonText}>마이페이지</Text>
                        </View>
                    </View>
                    <View
                        style={styles.button}
                    >
                        <View style={styles.buttonContent}>
                            <Text style={styles.buttonText}></Text>
                        </View>
                    </View>
                    <View
                        style={styles.button}
                    >
                        <View style={styles.buttonContent}>
                            <Text style={styles.buttonText}></Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{
                height:0.5,
                backgroundColor: '#E2E2E2',
                opacity: '10%',
            }}/>
            <View style={{ backgroundColor: '#11111A' }}>
                <ScrollView>
                    <View>
                        <View
                            style={{
                                width: 340,
                                height: 156,
                                backgroundColor: 'rgba(25, 25, 38, 1)',
                                borderRadius: 10,
                                overflow: 'hidden',
                                flexDirection: 'column',
                                alignItems: 'center',
                                alignSelf: 'center',
                                marginTop: 24,
                            }}
                        >
                            <View style={{flexDirection: 'row', alignItems: 'center',}}>
                                <Image source={require('./public/Profile/myProfile.png')} style={{width: 56, height: 56, marginLeft: 20,marginTop:16,}}/>
                                <View style={{flexDirection: 'column', alignItems: 'center',}}>
                                    <View style={{flexDirection: 'row', alignItems: 'flex-start', width: 250, marginLeft:12, marginTop: 14,}}>
                                        <Text style={{fontWeight: 'bold', fontSize: 16, color: 'white'}}>워터진</Text>
                                        <Image source={require('./public/_check_star.png')} style={{width: 20, height: 20, marginLeft: 8.5,}}/>
                                    </View>
                                    <Text style={{fontWeight: 'normal', fontSize: 12, color: 'white', width: 250, marginLeft:12, marginTop: 6}}>중3 예고입시생 I 인스타 #water__jean</Text>
                                </View>
                                <Image source={require('./public/mypagedot.png')} style={{width: 14.67, height: 1.83, marginLeft: 0, position: 'relative', left:-28, top: -7}}/>
                            </View>
                            <Image source={require('./public/MYPAGEBUTTONS.png')} style={{width: 262, height: 47, alignSelf: 'center', marginTop: 18, marginLeft: -10}}/>
                        </View>
                        <Text style={{color: 'white', fontSize: 16,fontWeight: 'bold', alignSelf: 'center', marginTop: 24, width: 320}}>
                            나의 미션
                        </Text>
                        <Text style={{color: 'rgba(210, 210, 210, 1)', fontSize: 12,fontWeight: '500', alignSelf: 'center', marginTop: 6, width: 320}}>
                            내 포인트 2,000P
                        </Text>
                        <View style={{width: Dimensions.get('window').width, height: 145, marginLeft: 16}}>
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
                        <Text style={{color: 'white', fontSize: 16,fontWeight: 'bold', alignSelf: 'center', marginTop: 24, width: 320}}>
                            나의 활동 요약
                        </Text>
                        <View style={{width: Dimensions.get('window').width, height: 300, marginLeft: 16}}>
                            <FlatList
                                ref={flatListRefStar}
                                data={dataCard}
                                renderItem={renderItemStar}
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
                        <View style={{ height: 140}}>

                        </View>

                    </View>
                </ScrollView>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#11111A",
    },
    head: {
        flexDirection: 'column',
        height: 49,
        backgroundColor: "#11111A",
    },
    textcontainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        backgroundColor: "#11111A",
    },
    iconcontainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 40,
        backgroundColor: "#11111A",
    },
    button: {
        flex: 1,
        paddingVertical: 8.5,
        alignItems: 'center',
    },
    selectedButton: {
        borderBottomWidth: 2,
        borderBottomRightRadius: 1,
        borderBottomColor: '#7E58E9',
    },
    buttonContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#7E58E9',
    },
    underline: {
        height: 2,
        backgroundColor: '#7E58E9',
        position: 'absolute',
        bottom: 0,
        left: 0,
    },
    underlineLight: {
        height: 2,
        backgroundColor: '#7E58E9',
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '20%',
        marginLeft: 25,
    },
});

export default MyContent;
