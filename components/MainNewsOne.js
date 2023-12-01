import React, {useCallback} from 'react';
import {View, Text, Modal, TouchableOpacity, Image, ScrollView, StyleSheet, Dimensions} from 'react-native';

const MainNewsOne = ({navigation}) => {
    const onClick = () => {navigation.navigate('Home')};

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
                <View style={styles.newsContainer}>
                    <Text style={styles.title}>이스라엘 '하루 4시간' 교전 중지, 하마스 인질석방 협상 영향은</Text>
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
                    </View>
                    <View style={styles.imageContainer}>
                        <Image source={require('./public/NewsImages/exampleImage.png')} style={styles.image}/>
                        <Text style={{color: '#7E7D7A', fontSize: 11, }}>[사진=연합뉴스]</Text>
                    </View>
                    <Text style={styles.context}>이스라엘과 팔레스타인 무장정파 하마스 사이의 갈등이 계속되고 있어. 이스라엘은 하마스를 소탕하기 위해 가자지구에 공격을 가하고 있는데, 이번에 미국 백악관은 이스라엘이 매일 4시간씩 가자지구 북부에서 교전을 중단하기로 결정했다고 밝혔어.</Text>
                    <Text style={styles.context}>유엔 등 국제사회가 한 목소리로 인도적 차원의 휴전을 호소해왔고, 하마스를 지지하는 중동, 아랍 진영도 휴전을 협상하는 전제 조건으로 내걸어왔어. 이번 ‘4시간 교전 중지’는 이스라엘이 지상전을 계속 확대해왔다는 점에서 의미 있는 변화로 평가되고 있어.</Text>
                    <Text style={styles.context}>하지만, 휴전과 일시적 교전 중단 사이에는 차이가 있기 때문에, 이번 조치가 인질 석방 협상에 미칠 영향은 아직은 미지수야. 이스라엘과 하마스 양측은 이번 조치의 의미를 깎아내리고 있기도 하지.</Text>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
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
    }
});

export default MainNewsOne;