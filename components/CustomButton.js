import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, Text } from 'react-native';

export default class CustomButton extends React.Component {
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
    children: PropTypes.node.isRequired,
};

