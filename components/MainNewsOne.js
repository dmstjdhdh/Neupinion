import React from 'react';
import { View, Text, Modal, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native';

const MainNewsOne = ({ isVisible, onClose }) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isVisible}
            onRequestClose={onClose}
        >
            <View style={styles.modalContainer}>

                {/* 팝업 내용 */}
                <View style={styles.popup}>
                    <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                        <Text style={styles.closeButtonText}>닫기</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    popup: {
        backgroundColor: '#fff',
        width: '100%',
        height: '100%',
    },
    closeButton: {
        position: 'absolute',
        top: 10,
        right: 10,
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

export default MainNewsOne;