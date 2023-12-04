import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, Text } from 'react-native';

export default class CustomButtonCut extends React.Component {
    render() {
        const { width, height, cut, cardColor, borderRadius, children } = this.props;

        return (
            <View style={{
                position: 'relative',
                height: height,
                width: width,
                backgroundColor: cardColor,
                borderRadius: borderRadius,
            }}>
                {children}
                <View style={{
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    width: 0,
                    height: 0,
                    borderStyle: 'solid',
                    borderTopWidth: 0,
                    borderRightWidth: 0,
                    borderBottomWidth: cut,
                    borderLeftWidth: cut,
                    borderTopColor: 'transparent',
                    borderRightColor: 'transparent',
                    borderBottomColor: '#11111A',
                    borderLeftColor: 'transparent',
                }} />
            </View>
        );
    }
}

CustomButtonCut.propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    cut: PropTypes.number.isRequired,
    cardColor: PropTypes.string.isRequired,
    borderRadius: PropTypes.number.isRequired,
    children: PropTypes.node.isRequired,
};