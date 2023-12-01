import React, {useEffect, useState} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image, Animated } from 'react-native';
import IssuesContent from "./IssueContent";
import MissionsContent from "./MissionsContent";
import NewsTokTok from "./NewsTokTok";

const HomeContent = ({onClick}) => {
    const [selectedContents, setSelectedContents] = useState('left');
    const underlineWidth = new Animated.Value(60);
    const [position, setPosition] = useState(new Animated.Value(0));

    useEffect(() => {
        animateBar(0); // 초기 위치 설정
    }, []);

    const animateBar = (toValue) => {
        Animated.spring(position, {
            toValue,
            useNativeDriver: false,
        }).start();
    };

    const handlePress = (buttonName) => {
        setSelectedContents(buttonName);
        animateUnderline(buttonName === 'left' ? 0 : buttonName === 'center' ? 1 : 2);
        animateBar(buttonName === 'left' ? 0: buttonName === 'center' ? 1: 2);
    };

    const animateUnderline = (index) => {
        Animated.spring(underlineWidth, {
            toValue: 60 * index,
            useNativeDriver: false,
        }).start();
    };

    const renderContent = () => {
        switch (selectedContents) {
            case 'left':
                return <NewsTokTok onClick={onClick}/>;
            case 'center':
                return <IssuesContent/>;
            case 'right':
                return <MissionsContent />;
            default:
                return null;
        }
    };

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
                            source={require('./public/Icon.png')}
                            style={{ width: 16, height: 16 , marginRight: 20}}
                        />
                        <Image
                            source={require('./public/bell.png')}
                            style={{ width: 22, height: 22 }}
                        />
                    </View>
                </View>
            </View>
            <View>
                <View style={styles.textcontainer}>
                    <TouchableOpacity
                        onPress={() => handlePress('left')}
                        style={[styles.button, selectedContents === 'left']}
                    >
                        <View style={styles.buttonContent}>
                            <Text style={[styles.buttonText, { fontWeight: selectedContents === 'left' ? 'bold' : 'normal', color: selectedContents === 'left' ? '#7E58E9' : '#979797' }]}>뉴스 똑똑</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => handlePress('center')}
                        style={[styles.button, selectedContents === 'center']}
                    >
                        <View style={styles.buttonContent}>
                            <Text style={[styles.buttonText, { fontWeight: selectedContents === 'center' ? 'bold' : 'normal', color: selectedContents === 'center' ? '#7E58E9' : '#979797' }]}>이슈 팡팡</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => handlePress('right')}
                        style={[styles.button, selectedContents === 'right']}
                    >
                        <View style={styles.buttonContent}>
                            <Text style={[styles.buttonText, { fontWeight: selectedContents === 'right' ? 'bold' : 'normal', color: selectedContents === 'right' ? '#7E58E9' : '#979797' }]}>미션 콕콕</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <Animated.View
                    style={[
                        styles.underlineLight,
                        {
                            left: position.interpolate({
                                inputRange: [0, 1, 2],
                                outputRange: ['0%', '33.33%', '66.66%'],
                            }),
                        },
                    ]}
                />
            </View>
            <View style={{
                height:0.5,
                backgroundColor: '#E2E2E2',
                opacity: '10%',
            }}/>
            <View style={{ backgroundColor: '#11111A' }}>
                <ScrollView>
                    {renderContent()}
                </ScrollView>
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
        fontWeight: 'normal',
        fontSize: 16,
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

export default HomeContent;