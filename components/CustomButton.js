import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, Text } from 'react-native';

export default class CustomButton extends React.Component {
    render() {
        const { width, height, cut, cardColor, borderRadius, borderColor, children } = this.props;

        return (
            <View style={{
                position: 'relative',
                height: height,
                width: width,
                backgroundColor: cardColor,
                borderRadius: borderRadius,
                borderWidth: 2, // 테두리 두께
                borderColor: borderColor, // 테두리 색상
            }}>
                {children}
            </View>
        );
    }
}

CustomButton.propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    cut: PropTypes.number.isRequired,
    cardColor: PropTypes.string.isRequired,
    borderRadius: PropTypes.number.isRequired,
    borderColor: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

