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
        backgroundColor: '#fff',
        width: 280,
        height: 354,
        borderRadius: 10,
        padding: 20,
        paddingBottom: 50, // 다음 버튼이 보이도록 팝업 박스의 하단 패딩 추가
    },
    closeButton: {
        alignSelf: 'flex-end',
        marginRight: 59,
        marginBottom: 12,
    },
    closeButtonText: {
        fontSize: 16,
        color: '#3498db',
    },
    popupBox: {
        alignItems: 'center',
    },
    popupTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    slideImage: {
        width: 80,
        height: 80,
        borderRadius: 10,
        marginRight: 10,
    },
    // 슬라이드 인디케이터와 다음 버튼에 대한 스타일 추가
});

export default StickerPopup;