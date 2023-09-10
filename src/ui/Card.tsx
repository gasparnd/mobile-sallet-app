import React from 'react';
import {StyleSheet, View} from 'react-native';

import {useColors} from '../hooks';

interface CardProps {
  children?: any;
  borderRadius?: number;
}

const Card: React.FunctionComponent<CardProps> = ({
  children,
  borderRadius = 0,
}) => {
  const colorScheme = useColors();

  const styles = StyleSheet.create({
    box: {
      width: '100%',
    },
    base: {
      paddingHorizontal: 22,
      paddingVertical: 16,
      backgroundColor: colorScheme.gray5,
      borderRadius,
    },
  });

  return (
    <View style={styles.box}>
      <View style={styles.base}>{children}</View>
    </View>
  );
};

export default Card;
