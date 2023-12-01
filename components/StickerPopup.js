import React from 'react';
import { View, Text, Modal, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native';

const StickerPopup = ({ isVisible, onClose }) => {
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={isVisible}
            onRequestClose={onClose}
        >
            <View style={styles.modalContainer}>
                <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                    <Image source={require('./public/ui/PopupClose.png')} style={{width:16, height:16,}} />
                </TouchableOpacity>
                <View style={styles.popup}>
                    <View style={styles.imageContainer}>
                        <Image source={require('./public/Pentagon/popupimage.png')} style={{width:237, height:181}}/>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16, marginLeft: 20, marginTop: 12,}}>뉴피니언만의 신뢰도 지표</Text>
                        <Text style={{lineHeight: 18, width: 246, color: 'white', fontWeight: 'normal', fontSize: 12, marginLeft: 20, marginTop: 8,}}>5가지 지표를 선정하고 점수를 매겨 레이더 차트로 나타냅니다. 이를 선으로 이은 형태의 별자리 모티브를 통해 뉴스의 신뢰도를 표시합니다.</Text>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    popup: {
        backgroundColor: '#7E58E9',
        width: 280,
        height: 324,
        borderRadius: 10,
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    closeButton: {
        alignSelf: 'flex-end',
        marginRight: 59,
        marginBottom: 12,
    },
    imageContainer: {
        backgroundColor: '#191926',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        height: 209,
        width: 280,
    },
    textContainer: {
        flexDirection: 'column',
    }
    // 슬라이드 인디케이터와 다음 버튼에 대한 스타일 추가
});

export default StickerPopup;