import React, {useRef} from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, FlatList} from 'react-native';

const MissionsContent = () => {

    const flatListRefStar = useRef(null);

    const data3 = [
        { id: 1, image: require("./public/Mission/group.png"), title: '엘니뇨로 홍수 위기에 처한 케냐를 도와주세요.', content: '유니세프', station: 'D-12', width: 240, height: 162, backColor: '#EADFC9'},
        { id: 2, image: require("./public/Mission/Group2.png"), title: '영월군 화재 피해 그룹홈 긴급구호, 지원이 시급합니다.', content: '유니세프', station: 'D-12', width: 240, height: 162, backColor: '#98BBFE'},
    ];

    const renderItemMission = ({ item }) => (
        <View style={{marginLeft: 8, marginRight: 8}}>
            <TouchableOpacity
                style={{width:228, height:320}}
                onPress={() => {
                }}
            >
                <View
                    style={{
                        width: 228,
                        height: 320,
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
                        style={{ width: item.width, height: item.height}}
                    />
                    <Text style={{color: 'white', fontSize: 14,fontWeight: 'bold', width: 193, marginTop: 8, lineHeight: 22}}>
                        {item.title}
                    </Text>
                    <Text style={{color: 'rgba(255, 255, 255, 0.83)', fontSize: 12,fontWeight: '500', width: 192, marginTop: 6, }}>
                        {item.content}
                    </Text>
                    <Image source={require('./public/Mission/One.png')} style={{width:196, height:60, marginTop: 12, marginLeft: 4,}}/>
                </View>
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                <View style={{ marginTop: 24, marginBottom: 8, marginLeft: 24, marginRight: 0 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 16 , color: 'white',}}>
                        내 포인트 2,000P
                    </Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                <View style={{ marginTop: 4, marginBottom: 4, marginLeft: 24, marginRight: 15 }}>
                    <Text style={{ fontSize: 12, color: 'white', }}>다양한 미션을 통해 포인트를 적립해 보세요!</Text>
                </View>
            </View>
            <Image source={require('./public/MissionComponent.png')} style={{alignSelf: 'center', width:340, height:390, marginTop:12,}}/>
            <TouchableOpacity onPress={() => {}} style={{
                width: 184,
                height: 40,
                backgroundColor: 'white', // RGB 값으로 배경색을 지정합니다.
                borderRadius: 5, // 둥근 테두리를 추가합니다.
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: 8,
                marginTop: 28,
                alignSelf: 'center',
            }}>
                <Text style={{
                    fontSize: 14,
                    fontWeight: "bold",
                    color: 'black', // 원하는 색으로 변경
                }}>출석체크 하기</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                <View style={{ marginTop: 38, marginBottom: 8, marginLeft: 24, marginRight: 0 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 16 , color: 'white',}}>
                        포인트로 기부하기
                    </Text>
                </View>
            </View>
            <View style={{width: Dimensions.get('window').width, height: 360, marginLeft: 16}}>
                <FlatList
                    ref={flatListRefStar}
                    data={data3}
                    renderItem={renderItemMission}
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
            <View style={{height: 200}}>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#11111A'
    },
    contentTitle: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    contentDescription: {
        fontSize: 16,
    },
});

export default MissionsContent;