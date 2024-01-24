import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

interface Props {
  children: React.ReactNode;
  onPress?: () => void;
}

export default function Fab(props: Props) {
  const {children, onPress} = props;
  return (
    <TouchableOpacity onPress={onPress} style={style.fabWrapper}>
      {children}
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  fabWrapper: {
    backgroundColor: 'black',
    width: 68,
    height: 68,
    borderRadius: 50,
    position: 'absolute',
    bottom: 20,
    right: 20,
    alignItems: 'center',
    justifyContent: 'center',

    shadowColor: '#000',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
