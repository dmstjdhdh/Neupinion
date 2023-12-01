import React, {useCallback, useState} from 'react';
import {
    Dimensions,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    ScrollView,
    TouchableHighlight, ImageBackground, Platform
} from 'react-native';
import HomeContent from './HomeContent';
import MiddleContent from './MiddleContent';
import CommunityContent from './CommunityContent';
import MyContent from './MyContent';

const Footer = ({navigation}) => {
    const [selectedContents, setSelectedContents] = useState('home');

    const handlePress = (buttonName) => {
        setSelectedContents(buttonName);
    };

    const onClickHome = () => {navigation.navigate('Details')};
    const onClickMiddle = () => {navigation.navigate('Details')};

    const renderContent = () => {
        switch (selectedContents) {
            case 'home':
                return <HomeContent onClick={onClickHome}/>;
            case 'middle':
                return <MiddleContent onClick={onClickMiddle}/>;
            case 'community':
                return <CommunityContent />;
            case 'my':
                return <MyContent />;
            default:
                return <HomeContent />;
        }
    };

    return (
        <View style={{ flex: 1 , backgroundColor: '#11111A'}}>
            {renderContent()}
            <ImageBackground
                source={require('./public/footerbutton/Footer.png')}
                style={{
                    width:Dimensions.get('window').width, height: 90,
                    position: 'absolute',
                    bottom: 0,
                    justifyContent: 'flex-end'
                }}
                blurRadius={100}
                borderTopLeftRadius={20}
                borderTopRightRadius={20}
            >
                <View style={styles.container}>
                    <TouchableOpacity onPress={() => handlePress('home')} style={styles.buttonContainer}>
                        <View style={[styles.buttonContent, selectedContents === 'home' && styles.selectedButton]}>
                            <Image source={require('./public/footerbutton/HomeOn.png')} style={styles.logoOne}/>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handlePress('middle')} style={styles.buttonContainer}>
                        <View style={[styles.buttonContent, selectedContents === 'middle' && styles.selectedButton]}>
                            <Image source={require('./public/footerbutton/MiddleOff.png')} style={styles.logoOne}/>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handlePress('community')} style={styles.buttonContainer}>
                        <View style={[styles.buttonContent, selectedContents === 'community' && styles.selectedButton]}>
                            <Image source={require('./public/footerbutton/CommuOff.png')} style={styles.logoOne}/>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handlePress('my')} style={styles.buttonContainer}>
                        <View style={[styles.buttonContent, selectedContents === 'my' && styles.selectedButton]}>
                            <Image source={require('./public/footerbutton/MyOff.png')} style={styles.logoOne}/>
                        </View>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    buttonContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContent: {
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 12,
    },
    selectedButton: {
        // 선택된 버튼의 스타일 (필요에 따라 추가)
    },
    selectedText: {
        color: 'purple',
    },
    logoOne: {
        marginTop: 70,
        width: 85,
        height: 108,
    },
    logoTwo: {
        width: 86,
        height: 108,
        marginTop: 5,
    },
    logoThree: {
        width: 85,
        height: 108,
        marginTop: 5,
    },
    logoFour: {
        width: 85,
        height: 108,
        marginTop: 5,
    },
    absolute: {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
    },
});

export default Footer;
