import React from 'react';
import {StyleSheet, View} from 'react-native';

interface Props {
  children: React.ReactNode;
}
export default function Badge(props: Props) {
  const {children} = props;
  return <View style={style.badge}>{children}</View>;
}

const style = StyleSheet.create({
  badge: {
    color: 'white',
    padding: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'gray',
  },
});
