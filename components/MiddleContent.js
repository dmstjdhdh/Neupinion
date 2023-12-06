import React, {useRef} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Dimensions, FlatList} from 'react-native';

const MiddleContent = ({onClickEdu}) => {
    const flatListRef = useRef(null);
    const flatListRefStar = useRef(null);
    const flatListRefLast = useRef(null);

    const data = [
        { id: 1, image: require("./public/cardImage23.png"), title: '의대증원, 대학아닌 "지역 중심 배분" 목소리', content: '의대 증원을 정원 50인 미만 소규모 의대가 아닌 지역의료 격차와 의사 수 격차를 기준으로 시행해야 한다는 의견이 제기됐다. 인구 1,000명당 활동 의사 수가 전국 평균보다도 낮...', station: 'D-12', width: 312, height: 120},
        { id: 2, image: require("./public/cardImage23.png"), title: '의대증원, 대학아닌 "지역 중심 배분" 목소리', content: '의대 증원을 정원 50인 미만 소규모 의대가 아닌 지역의료 격차와 의사 수 격차를 기준으로 시행해야 한다는 의견이 제기됐다. 인구 1,000명당 활동 의사 수가 전국 평균보다도 낮...', station: 'D-12', width: 312, height: 120},
        { id: 3, image: require("./public/cardImage23.png"), title: '의대증원, 대학아닌 "지역 중심 배분" 목소리', content: '의대 증원을 정원 50인 미만 소규모 의대가 아닌 지역의료 격차와 의사 수 격차를 기준으로 시행해야 한다는 의견이 제기됐다. 인구 1,000명당 활동 의사 수가 전국 평균보다도 낮...', station: 'D-12', width: 312, height: 120},
    ];

    const data2 = [
        { id: 1, image: require("./public/cccc.png"), title: '의협, ‘의대 정원 확대’ 주장한 김윤 교수 징계 ', content: '의과대학 정원 확대 논의가 구체화하는 상황에서 대한의사협회(의협)가 의사 증원을 주장해온 국립대 의사를 대상으로 징계 절차에 들어갔다. 대한의사협회(의협)는 9일 보도자...', station: 'D-12', width: 312, height: 120},
        { id: 2, image: require("./public/cardImage23.png"), title: '의대증원, 대학아닌 "지역 중심 배분" 목소리', content: '의대 증원을 정원 50인 미만 소규모 의대가 아닌 지역의료 격차와 의사 수 격차를 기준으로 시행해야 한다는 의견이 제기됐다. 인구 1,000명당 활동 의사 수가 전국 평균보다도 낮...', station: 'D-12', width: 312, height: 120},
        { id: 3, image: require("./public/cardImage23.png"), title: '의대증원, 대학아닌 "지역 중심 배분" 목소리', content: '의대 증원을 정원 50인 미만 소규모 의대가 아닌 지역의료 격차와 의사 수 격차를 기준으로 시행해야 한다는 의견이 제기됐다. 인구 1,000명당 활동 의사 수가 전국 평균보다도 낮...', station: 'D-12', width: 312, height: 120},
    ];

    const data3 = [
        { id: 1, image: require("./public/coinshit.png"), title: '데일리 경제 상식', content: '청소년을 위한 맞춤 경제 상식 콘텐츠를 뉴피니언에서 한 번에 만나보세요!', station: 'D-12', width: 133, height: 100},
        { id: 2, image: require("./public/coinshit.png"), title: '데일리 경제 상식', content: '청소년을 위한 맞춤 경제 상식 콘텐츠를 뉴피니언에서 한 번에 만나보세요!', station: 'D-12', width: 133, height: 100},
        { id: 3, image: require("./public/coinshit.png"), title: '데일리 경제 상식', content: '청소년을 위한 맞춤 경제 상식 콘텐츠를 뉴피니언에서 한 번에 만나보세요!', station: 'D-12', width: 133, height: 100},
    ];
    const renderItem = ({ item }) => (
        <View style={{marginLeft: 8, marginRight: 8}}>
            <TouchableOpacity
                style={{width:312, height:260}}
                onPress={() => {
                    // 특정 카드 클릭 시 처리할 로직 추가
                }}
            >
                <View
                    style={{
                        width: 312,
                        height: 260,
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
                    <Text style={{color: 'white', fontSize: 16,fontWeight: 'bold', width: 280, marginTop:16,}}>
                        {item.title}
                    </Text>
                    <Text style={{color: 'rgba(255, 255, 255, 0.83)', fontSize: 12,fontWeight: 'bold', width: 285, marginTop: 12, lineHeight: 16,}}>
                        {item.content}
                    </Text>
                    <View style={{flexDirection: 'row', position: 'relative', left: -7, top: 10}}>
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
                            }}>사회</Text>
                        </View>
                        <View style={{
                            marginLeft:12,
                            width: 33.24,
                            height: 18,
                            backgroundColor: 'rgba(255, 255, 255, 0.2)',
                            borderRadius: 3,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginRight: 40,
                        }}>
                            <Text style={{
                                fontSize: 11,
                                color: '#ffffff', // 원하는 색으로 변경
                            }}>교육</Text>
                        </View>
                        <Text style={{color: 'rgba(255,255,255,0.49)', fontSize:12, marginLeft:100,}}>
                            2023.11.03
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
    const renderItemStar = ({ item }) => (
        <View style={{marginLeft: 8, marginRight: 8}}>
            <TouchableOpacity
                style={{width:268, height:248}}
                onPress={() => {
                    onClickEdu();
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
                    <View style={{width:268, height:124,alignItems:'center',backgroundColor: '#A7D3FA'}}>
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
                            }}>경제</Text>
                        </View>
                    </View>
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
                            <Text style={styles.buttonText}>중립뉴스</Text>
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
                        <Text style={{color: 'white', fontSize: 16,fontWeight: 'bold', alignSelf: 'center', marginTop: 24, width: 320}}>
                            요즘 HOT한 뉴스! 타임라인 살펴보기
                        </Text>
                        <Text style={{color: 'rgba(210, 210, 210, 1)', fontSize: 12,fontWeight: '500', alignSelf: 'center', marginTop: 6, width: 320}}>
                            지드래곤 마약 투약 혐의에 대해서 자세히 알아보세요!
                        </Text>
                        <View>
                            <View style={{width:Dimensions.get('window').width, flexDirection: 'row', marginTop:14,}}>
                                <View style={{flexDirection: 'column', marginLeft: 28,}}>
                                    <Text style={{fontSize:12, fontWeight:'bold', color: '#7E58E9'}}>
                                        10.25
                                    </Text>
                                    <Image
                                        source={require('./public/Middle/purpleLine.png')}
                                        style={{ width: 1, height: 102, position: 'relative', left:17, marginTop: 5, }}
                                    />
                                </View>
                                <Image
                                    source={require('./public/Middle/Box1.png')}
                                    style={{ width: 288, height: 122, marginLeft: 20 , marginTop: 6}}
                                />
                            </View>
                            <View style={{width:Dimensions.get('window').width, flexDirection: 'row', marginTop:6,}}>
                                <View style={{flexDirection: 'column', marginLeft: 28,}}>
                                    <Text style={{fontSize:12, fontWeight:'bold', color: '#7E58E9'}}>
                                        10.26
                                    </Text>
                                    <Image
                                        source={require('./public/Middle/purpleLine.png')}
                                        style={{ width: 1, height: 102, position: 'relative', left:17, marginTop: 5, }}
                                    />
                                </View>
                                <Image
                                    source={require('./public/Middle/Box2.png')}
                                    style={{ width: 288, height: 122, marginLeft: 20 , marginTop: 6}}
                                />
                            </View>
                            <View style={{width:Dimensions.get('window').width, flexDirection: 'row', marginTop:6,}}>
                                <View style={{flexDirection: 'column', marginLeft: 28,}}>
                                    <Text style={{fontSize:12, fontWeight:'bold', color: '#7E7D7A'}}>
                                        10.27
                                    </Text>
                                    <Image
                                        source={require('./public/Middle/greyLine.png')}
                                        style={{ width: 1, height: 102, position: 'relative', left:17, marginTop: 5, }}
                                    />
                                </View>
                                <Image
                                    source={require('./public/Middle/Box3.png')}
                                    style={{ width: 288, height: 122, marginLeft: 20 , marginTop: 6}}
                                />
                            </View>
                            <View style={{width:Dimensions.get('window').width, flexDirection: 'row', marginTop:6,}}>
                                <View style={{flexDirection: 'column', marginLeft: 28,}}>
                                    <Text style={{fontSize:12, fontWeight:'bold', color: '#7E7D7A'}}>
                                        10.28
                                    </Text>
                                    <Image
                                        source={require('./public/Middle/greyLine.png')}
                                        style={{ width: 1, height: 102, position: 'relative', left:17, marginTop: 5, }}
                                    />
                                </View>
                                <Image
                                    source={require('./public/Middle/Box4.png')}
                                    style={{ width: 288, height: 122, marginLeft: 20 , marginTop: 6}}
                                />
                            </View>
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
                                }}>자세히 보기</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={{color: 'white', fontSize: 16,fontWeight: 'bold', alignSelf: 'center', marginTop: 30, width: 320}}>
                            찬반 의견 팽팽! 의대 증원 논의
                        </Text>
                        <View style={{flexDirection: 'row', marginLeft: 28,}}>
                            <Text style={{color: 'rgba(255,255,255,0.9)', fontSize: 14,fontWeight: 'bold', alignSelf: 'center', marginTop: 12}}>
                                찬성 의견
                            </Text>
                            <Image
                                source={require('./public/good.png')}
                                style={{ width: 17, height: 16, position: 'relative', marginTop: 12, marginLeft: 5,}}
                            />
                        </View>
                        <View style={{width: Dimensions.get('window').width, height: 300, marginLeft: 20}}>
                            <FlatList
                                ref={flatListRef}
                                data={data}
                                renderItem={renderItem}
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
                        <View style={{flexDirection: 'row', marginLeft: 28,}}>
                            <Text style={{color: 'rgba(255,255,255,0.9)', fontSize: 14,fontWeight: 'bold', alignSelf: 'center', marginTop: 12}}>
                                반대 의견
                            </Text>
                            <Image
                                source={require('./public/bad.png')}
                                style={{ width: 17, height: 16, position: 'relative', marginTop: 12, marginLeft: 5,}}
                            />
                        </View>
                        <View style={{width: Dimensions.get('window').width, height: 300, marginLeft: 20}}>
                            <FlatList
                                ref={flatListRefStar}
                                data={data2}
                                renderItem={renderItem}
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
                        <Text style={{color: 'white', fontSize: 16,fontWeight: 'bold', alignSelf: 'center', marginTop: 24, width: 320}}>
                            교육 콘텐츠
                        </Text>
                        <View style={{width: Dimensions.get('window').width, height: 300, marginLeft: 16}}>
                            <FlatList
                                ref={flatListRefLast}
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
                        <View style={{ height: 140}}>

                        </View>

                    </View>
                    <View style={{height:75}}>

                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

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
});

export default MiddleContent;
