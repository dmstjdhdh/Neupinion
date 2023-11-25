import React, {useCallback} from 'react';
import {View, Text, Modal, TouchableOpacity, Image, ScrollView, StyleSheet, Dimensions} from 'react-native';

const MainNewsOne = ({navigation}) => {
    const onClick = () => {navigation.navigate('Home')};

    return (
        <View style={{
            backgroundColor: 'white',
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
                <View style={{marginLeft: 250}}>
                    <TouchableOpacity onPress={onClick}>
                        <Image source={require("./public/ui/bookmark.png")} style={{
                            width: 11.5*1.25, height: 16.29167*1.25,
                            marginLeft: 20,
                        }}>
                        </Image>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress={onClick}>
                        <Image source={require("./public/ui/share.png")} style={{
                            width: 16*1.25, height: 15.33333*1.25,
                            marginLeft: 20,
                        }}>
                        </Image>
                    </TouchableOpacity>
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
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
    },
    topContainerL: {

    },
    topContainerR: {

    }
});

export default MainNewsOne;