import React, {useCallback, useState} from 'react';
import {
    Dimensions,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    ScrollView,
    TouchableHighlight
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
        <View style={{ flex: 1 , backgroundColor: '#EFEFEF'}}>
            {renderContent()}
            <View style={styles.container}>
                <TouchableOpacity onPress={() => handlePress('home')} style={styles.buttonContainer}>
                    <View style={[styles.buttonContent, selectedContents === 'home' && styles.selectedButton]}>
                        <Image source={require('./public/HomeOff.png')} style={styles.logoOne}/>
                        <Text style={[styles.buttonText, selectedContents === 'home' && styles.selectedText]}>홈</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handlePress('middle')} style={styles.buttonContainer}>
                    <View style={[styles.buttonContent, selectedContents === 'middle' && styles.selectedButton]}>
                        <Image source={require('./public/MiddleOff.png')} style={styles.logoOne}/>
                        <Text style={[styles.buttonText, selectedContents === 'middle' && styles.selectedText]}>가운데</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handlePress('community')} style={styles.buttonContainer}>
                    <View style={[styles.buttonContent, selectedContents === 'community' && styles.selectedButton]}>
                        <Image source={require('./public/CommunityOff.png')} style={styles.logoOne}/>
                        <Text style={[styles.buttonText, selectedContents === 'community' && styles.selectedText]}>커뮤니티</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handlePress('my')} style={styles.buttonContainer}>
                    <View style={[styles.buttonContent, selectedContents === 'my' && styles.selectedButton]}>
                        <Image source={require('./public/MyOff.png')} style={styles.logoOne}/>
                        <Text style={[styles.buttonText, selectedContents === 'my' && styles.selectedText]}>마이페이지</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 80,
        borderTopLeftRadius: 14,
        borderTopRightRadius: 14,
        backgroundColor: 'white',
    },
    buttonContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
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
        width: 16.7,
        height: 16.7,
        marginBottom: 5,
        marginRight: 2,
    },
    logoTwo: {
        width: 17.75,
        height: 16.7,
        marginBottom: 5,
        marginRight: 2,
    },
    logoThree: {
        width: 16.7,
        height: 15.77,
        marginBottom: 5,
        marginRight: 2,
    },
    logoFour: {
        width: 14.61,
        height: 16.7,
        marginBottom: 5,
        marginRight: 2,
    },
});

export default Footer;
