import React, {useCallback, useState} from 'react';
import {
    View,
    Text,
    Modal,
    TouchableOpacity,
    Image,
    ScrollView,
    StyleSheet,
    Dimensions,
    TouchableWithoutFeedback, FlatList, TextInput
} from 'react-native';
import CustomButton from "./CustomButton";
import CustomButtonCut from "./CustomButtonCut";

const Post = ({navigation}) => {
    const [isModalVisible, setModalVisible] = useState(false);
    const onClick = () => {navigation.navigate('DetailIssue')};

    const [text, setText] = useState('');

    const handleChangeText = (inputText) => {
        setText(inputText);
    };

    return (
        <View style={{
            backgroundColor: '#11111A',
            flexDirection: 'column',
        }}>
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
                <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16, marginLeft:132.5, marginTop: 5,}}>
                    의견쓰기
                </Text>
                <View style={{marginLeft: 100}}>
                    <TouchableOpacity onPress={onClick}>
                        <Image source={require("./public/ui/checkpurple.png")} style={{
                            width: 11.5*1.5, height: 16.29167*1.5,
                            marginLeft: 20,
                        }}>
                        </Image>
                    </TouchableOpacity>
                </View>

            </View>
            <View style={styles.postContainer}>
                <View style={{flexDirection: 'row', }}>
                    <Text
                        style={{
                            fontSize: 16,
                            fontWeight: 'bold',
                            color: 'rgba(255, 255, 255, 0.9)',
                            marginTop: 12,
                            alignSelf: 'flex-start',
                            marginLeft: 25,
                        }}
                    >
                        어디가 젤 수상했나요..
                    </Text>
                    <View style={{
                        width: 55,
                        height: 23,
                        backgroundColor: 'rgba(126, 88, 233, 0.14)',
                        borderRadius: 3,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Text style={{
                            fontSize: 11,
                            color: '#7E58E9', // 원하는 색으로 변경
                        }}>뉴스보기</Text>
                    </View>
                </View>
            </View>
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
    postContainer: {
        width: Dimensions.get('window').width,
        marginTop: 20,
        backgroundColor: '#11111A',
        flexDirection: 'row',
        alignItems: 'center',
    }
});

export default Post;