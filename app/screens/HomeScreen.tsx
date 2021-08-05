import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_API_KEY } from '@env';
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../redux/slices/navSlice';
import NavFavorites from '../components/NavFavorites';

const HomeScreen = () => {
  const dispatch = useDispatch();

  //TODO: Error Fixes

  //TODO: Menu Drawer - Menu, Profile
  //TODO: Home and Work Button
  //TODO: Loading
  //TODO: Good Morning {displayName}
  //TODO: App Splash

  //TODO: Grub buildout
  //TODO: Nearby Restraunets
  //TODO: Tip Calculator

  return (
    <SafeAreaView style={tw`h-full w-full`}>
      <View style={tw`p-5`}>
        <View style={tw`items-center`}>
          <Image
            source={{ uri: 'https://links.papareact.com/gzs' }}
            style={{
              width: 100,
              height: 100,
              resizeMode: 'contain',
              justifyContent: 'center',
            }}
          />
        </View>
        <GooglePlacesAutocomplete
          placeholder='Where From?'
          query={{ key: GOOGLE_MAPS_API_KEY, language: 'en' }}
          minLength={2}
          fetchDetails={true}
          onPress={(data, details: any = null) => {
            // console.log(data);
            // console.log(details);
            dispatch(
              setOrigin({
                location: details?.geometry.location,
                description: data.description,
              })
            );
            dispatch(setDestination(null));
          }}
          //   returnKeyType='search'
          enablePoweredByContainer={false}
          styles={{ container: { flex: 0 }, textInput: { fontSize: 18 } }}
          nearbyPlacesAPI='GooglePlacesSearch'
          debounce={400}
        />
        <View style={tw`items-center`}>
          <NavOptions />
          <NavFavorites />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  text: {},
});
