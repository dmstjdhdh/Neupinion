import React, { useState } from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, Animated, ScrollView, TextInput} from 'react-native';
const MyContent = () => {
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
                                <Image source={require('./public/Profile/myProfile.png')} style={{width: 56, height: 56, marginLeft: 0,}}/>
                                <View style={{flexDirection: 'column', alignItems: 'center',}}>
                                    <View style={{flexDirection: 'row', alignItems: 'flex-start',}}>
                                        <Text>워터진</Text>
                                        <Image source={require('./public/Profile/myProfile.png')} style={{width: 20, height: 20, marginLeft: 0,}}/>
                                    </View>
                                    <Text>중3 예고입시생 I 인스타 #water__jean</Text>
                                </View>
                                <Image source={require('./public/Profile/myProfile.png')} style={{width: 20, height: 20, marginLeft: 0,}}/>
                            </View>
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
