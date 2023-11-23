import React from 'react';
import { View, Text, Modal, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native';

const StickerPopup = ({ isVisible, onClose }) => {
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

                    {/* 팝업 박스 */}
                    <View style={styles.popupBox}>
                        {/* 제목 */}
                        <Text style={styles.popupTitle}>팝업 제목</Text>

                        {/* 이미지 슬라이드 */}
                        <ScrollView horizontal pagingEnabled>
                            <Image source={require('./public/sticker1.png')} style={styles.slideImage} />
                            <Image source={require('./public/sticker2.png')} style={styles.slideImage} />
                            <Image source={require('./public/sticker3.png')} style={styles.slideImage} />
                            {/* 추가 이미지들 추가 */}
                        </ScrollView>

                        {/* 슬라이드 인디케이터 및 다음 버튼 */}
                        {/* 여기에 슬라이드 인디케이터 및 다음 버튼을 추가하세요 */}
                    </View>
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
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    popup: {
        backgroundColor: '#fff',
        width: 300,
        height: 400,
        borderRadius: 10,
        padding: 20,
        paddingBottom: 50, // 다음 버튼이 보이도록 팝업 박스의 하단 패딩 추가
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

export default StickerPopup;