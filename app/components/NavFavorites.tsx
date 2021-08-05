import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Icon } from 'react-native-elements';
import tw from 'tailwind-react-native-classnames';

const data = [
  {
    id: '122',
    icon: 'home',
    location: 'Home',
    destination: '1 Hacker Way, Menlo Park',
  },
  {
    id: '222',
    icon: 'briefcase',
    location: 'Work',
    destination: '1600 Amphitheatre Parkway Mountain View, CA',
  },
];

//Add Onpress method to enable the route

const NavFavorites = () => {
  return (
    <FlatList
      data={data}
      style={tw``}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => (
        <View style={[tw`bg-gray-200`, { height: 1 }]} />
      )}
      renderItem={({ item }) => (
        <TouchableOpacity style={tw`flex-row items-center p-5`}>
          <Icon
            type='ionicon'
            name={item.icon}
            color='white'
            size={18}
            style={tw`p-3 mr-4 rounded-full bg-gray-300`}
          />
          <View style={tw`flex-col`}>
            <Text style={tw`text-lg font-semibold`}>{item.location}</Text>
            <Text style={tw`text-gray-500`}>{item.destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavFavorites;

const styles = StyleSheet.create({});
