import * as React from 'react';
import { StyleSheet, Text, View,Image, TouchableOpacity, TextInput } from 'react-native';
import { Input, Button } from 'react-native-elements';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';

const ForgotPassword = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/DSCC-logo-final.png")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
      <Text style={{fontSize: 17, fontFamily: 'Roboto' , color: '#0F8943'}}>পাসওয়ার্ড ভুলে গেছেন?</Text>
      <View>
        <View style={styles.searchSection}>
            <Entypo style={styles.searchIcon} name="mail" size={24} color="#0F8943"/>
            <TextInput
                style={styles.input}
                placeholder="আপনার ইমেইল দিন"
                underlineColorAndroid="#0F8943"
            />
        </View>
        <Button
          title="রিসেট লিংক পাঠিয়ে দিন"
          icon={
            <FontAwesome
              name="sign-in"
              size={15}
              color="white"
              style={{marginRight: 10}}
            />
          }
          buttonStyle={{marginTop: 20, backgroundColor:'#0F8943'}}
        />
        <Button
          title="লগইন করুন"
          type="clear"
          titleStyle={{ color: '#0F8943'}}
          onPress={() => navigation.navigate('Signin')}
          buttonStyle={{minWidth:200}}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 260,
    height: 250,
    marginTop: 0,
    alignSelf: "center"
  },
  searchSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  searchIcon: {
      padding: 10,
      color: '#0F8943',
  },
  input: {
      flex: 1,
      paddingTop: 10,
      paddingRight: 10,
      paddingBottom: 10,
      paddingLeft: 0,
      backgroundColor: '#fff',
      color: '#424242',
      fontSize: 15,
      minWidth: 200
  },
});

export default ForgotPassword;