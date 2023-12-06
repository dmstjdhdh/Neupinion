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
import voteResult from "./VoteResult";

const Footer = ({navigation}) => {
    const [selectedContents, setSelectedContents] = useState('home');

    const handlePress = (buttonName) => {
        setSelectedContents(buttonName);
    };

    const onClickHome = () => {navigation.navigate('Details')};
    const onClickMiddle = () => {navigation.navigate('Details')};

    const onClickYoutube = () => {navigation.navigate('Youtube')};

    const onClickIssueDetail = () => {navigation.navigate('DetailIssue')};

    const onClickIssueDetailData = () => {navigation.navigate('DetailIssueData')};

    const onClickVoteResult = () => {navigation.navigate('VoteResult')};

    const onClickEdu = () => {navigation.navigate('Edu')};

    const onClickComDetail = () => {navigation.navigate('ComDetail')};

    const renderContent = () => {
        switch (selectedContents) {
            case 'home':
                return <HomeContent onClick={onClickHome} onClickYoutube={onClickYoutube} onClickDetail={onClickIssueDetail} onClickVote={onClickVoteResult}/>;
            case 'middle':
                return <MiddleContent onClick={onClickMiddle} onClickEdu={onClickEdu}/>;
            case 'community':
                return <CommunityContent onClick={onClickComDetail}/>;
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
                    width:Dimensions.get('window').width+2, height: 90,
                    position: 'absolute',
                    left:-1,
                    bottom: 0,
                    justifyContent: 'flex-end'
                }}
                borderTopLeftRadius={20}
                borderTopRightRadius={20}
            >
                <View style={styles.container}>
                    <TouchableOpacity onPress={() => handlePress('home')} style={styles.buttonContainer}>
                        <Image source={selectedContents === 'home' ? require('./public/FooterICON/HOn.png') : require('./public/FooterICON/HOff.png')} style={{width:18, height:44}}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handlePress('middle')} style={styles.buttonContainer}>
                        <Image source={selectedContents === 'middle' ? require('./public/FooterICON/MOn.png') : require('./public/FooterICON/MOff.png')} style={{width:22, height:46}}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handlePress('community')} style={styles.buttonContainer}>
                        <Image source={selectedContents === 'community' ? require('./public/FooterICON/ComOn.png') : require('./public/FooterICON/ComOff.png')} style={{width:44, height:46}}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handlePress('my')} style={styles.buttonContainer}>
                        <View style={[styles.buttonContent, selectedContents === 'my' && styles.selectedButton]}>
                            <Image source={selectedContents === 'my' ? require('./public/FooterICON/MyOn.png') : require('./public/FooterICON/MyOff.png')} style={{width:22, height:46}}/>
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
        width:Dimensions.get('window').width+2, height: 95,
        position: 'absolute',
        left:0,
        bottom: -5,
        borderColor: '#7E7D7A',
        borderWidth: 1,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
    },
    buttonContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: 75,
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
