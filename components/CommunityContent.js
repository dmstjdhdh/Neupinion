import React, {useRef} from 'react';
import {Text, StyleSheet, View, Image, ScrollView, Dimensions, TouchableOpacity, FlatList} from 'react-native';
const CommunityContent = ({onClick}) => {

    const flatListRef = useRef(null);

    const data = [
        { id: 1, image: require("./public/Com/c1.png"),},
        { id: 2, image: require("./public/Com/c2.png"),},
        { id: 3, image: require("./public/Com/c3.png"),},
    ];

    const renderItemCom = ({ item }) => (
        <View style={{marginLeft: 8, marginRight: 12, marginTop: 15,}}>
            <TouchableOpacity
                style={{width:252, height:359}}
                onPress={() => {
                }}
            >
                <Image
                    source={item.image}
                    style={{ width: 252, height: 359}}
                />
            </TouchableOpacity>
        </View>
    );

    return (
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
                            <Text style={styles.buttonText}>커뮤니티</Text>
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
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                        <View style={{ marginTop: 24, marginBottom: 8, marginLeft: 24, marginRight: 0 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 16 , color: 'white',}}>
                                뉴피 아티클
                            </Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                        <View style={{ marginTop: 4, marginBottom: 4, marginLeft: 24, marginRight: 15 }}>
                            <Text style={{ fontSize: 12, color: 'white', }}>뉴피니언 기자단이 직접 작성한 카드뉴스를 확인해보세요!</Text>
                        </View>
                    </View>
                    <View style={{width: Dimensions.get('window').width, height: 400, marginLeft: 16}}>
                        <FlatList
                            ref={flatListRef}
                            data={data}
                            renderItem={renderItemCom}
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
                    <View style={styles.rectangle}>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                        <View style={{ marginTop: 24, marginBottom: 8, marginLeft: 24, marginRight: 0 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 16 , color: 'white',}}>
                                뉴피 토론장
                            </Text>
                        </View>
                    </View>
                    <TouchableOpacity onPress={onClick}>
                        <Image source={require('./public/Com/Com11.png')} style={{width:344, height:118, alignSelf: 'center', marginTop: 12, marginLeft: 8,}}/>
                    </TouchableOpacity>
                    <View style={{height: 220}}>

                    </View>
                </ScrollView>
                <TouchableOpacity onPress={() => {}} style={{position: 'absolute', alignSelf: 'flex-end', top: 410, paddingEnd: 10}}>
                    <Image source={require('./public/Com/WriteVer.png')} style={{width:62, height:60}}/>
                </TouchableOpacity>
            </View>
        </View>
    );
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
        marginLeft: -10,
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
    rectangle: {
        marginTop: 37,
        backgroundColor: 'rgba(33, 33, 44, 0.18)',
        width: Dimensions.get('window').width,
        height: 10,
    },
});

export default CommunityContent;
