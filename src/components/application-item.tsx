/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Alert,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Application} from '../interfaces/Application';
import Badge from './atoms/badge';

interface Props {
  application: Application;
}

export default function ApplicationItem(props: Props) {
  const {application} = props;

  const cardContainer = {
    ...style.cardContainer,
    opacity: application.is_active ? 1 : 0.5,
  };

  return (
    <TouchableOpacity
      style={cardContainer}
      onPress={() => {
        Alert.alert(application.title, application.description, [
          {
            text: 'Ir',
            onPress: () => {
              Linking.openURL(application.link);
            },
          },
          {
            text: 'OK',
            onPress: () => {},
          },
        ]);
      }}>
      <Text style={style.title}>{application.title}</Text>
      <Text>{application.company}</Text>
      <View style={style.listBadges}>
        <Badge>
          <Text>{application.location}</Text>
        </Badge>
        <View style={{display: application.to_agree ? 'flex' : 'none'}}>
          <Badge>
            <Text>salario a convenir</Text>
          </Badge>
        </View>
        <View style={{display: application.to_agree ? 'none' : 'flex'}}>
          <Badge>
            <Text>
              {application.min_salary}-{application.max_salary}
            </Text>
          </Badge>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  cardContainer: {
    padding: 20,
    gap: 8,

    backgroundColor: 'black',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderRadius: 10,

    elevation: 5,
  },
  listBadges: {flexDirection: 'row', gap: 8},
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
