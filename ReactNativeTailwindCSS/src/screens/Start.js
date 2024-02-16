import React from 'react';
import {s} from 'react-native-wind';
import {View, Text, TouchableOpacity} from 'react-native';
const Start = ({navigation}) => {
  return (
    <View style={s`flex-1 items-center justify-center`}>
      <View style={s`flex-1 items-center justify-end`}>
        <Text style={s`font-bold text-sky-400 text-3xl`}>Tailwind css </Text>
        <Text style={s`font-bold italic text-lg`}>In</Text>
        <Text style={s`font-bold text-blue-500 text-xl`}>React Native</Text>
      </View>
      <View style={s`flex-1 justify-center`}>
        <TouchableOpacity onPress={()=>navigation.navigate("Home")}>
          <Text style={s`text-blue-500 font-bold text-lg`}>
            {"Let's Go"} {'>>'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Start;
