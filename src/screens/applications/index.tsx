import React, {useEffect} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';

import useApplications from '../../hooks/useApplications';
import ApplicationItem from '../../components/application-item';
import Fab from '../../components/atoms/fab';

export default function ApplicationsIndex() {
  const {applications, startLoadApplications} = useApplications();

  useEffect(() => {
    startLoadApplications();
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <ScrollView>
        <View style={style.container}>
          <Text style={style.listHeader}>Applicacionesss</Text>
          {applications.map(application => (
            <ApplicationItem key={application.id} application={application} />
          ))}
        </View>
      </ScrollView>
      <Fab onPress={startLoadApplications}>
        <Icons name="refresh" size={20}/>
      </Fab>
    </>
  );
}

const style = StyleSheet.create({
  container: {
    padding: 20,
    gap: 8,
  },

  listHeader: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
