import * as React from 'react';
import { StyleSheet, Text, View,Image, TouchableOpacity, TextInput } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { Dimensions } from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const screen = Dimensions.get("screen");
const WIDTH = screen.width;

const SignUp = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/DSCC-logo-final.png")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
      <View style={{marginHorizontal: 10}}>
        <View style={styles.searchSection}>
            <Entypo style={styles.searchIcon} name="user" size={24} color="#000"/>
            <TextInput
                style={styles.input}
                placeholder="আপনার নাম"
                underlineColorAndroid="#0F8943"
            />
        </View>
        <View style={styles.searchSection}>
            <Entypo style={styles.searchIcon} name="mail" size={24} color="#000"/>
            <TextInput
                style={styles.input}
                placeholder="ইমেইল"
                underlineColorAndroid="#0F8943"
            />
        </View>
        <View style={styles.searchSection}>
            <Entypo style={styles.searchIcon} name="keyboard" size={24} color="#000"/>
            <TextInput
                style={styles.input}
                placeholder="পাসওয়ার্ড"
                underlineColorAndroid="#0F8943"
            />
        </View>
        <View style={styles.searchSection}>
            <Entypo style={styles.searchIcon} name="keyboard" size={24} color="#000"/>
            <TextInput
                style={styles.input}
                placeholder="পাসওয়ার্ড কন্ফার্ম করুন"
                underlineColorAndroid="#0F8943"
            />
        </View>
        <View style={styles.searchSection}>
            <Entypo style={styles.searchIcon} name="mobile" size={24} color="#000"/>
            <TextInput
                style={styles.input}
                placeholder="মোবাইল"
                underlineColorAndroid="#0F8943"
            />
        </View>
        {/* <Input
          leftIcon={{ type: 'ionicons', name: 'mail', color:'#1418C9' }}
          leftIconContainerStyle={{marginRight: 5,}}
          inputStyle={{borderBottomColor:'#1418C9'}}
          placeholder='Email'
        /> */}
        {/* <Input
          leftIcon={{ type: 'entypo', name: 'keyboard', color:'#1418C9' }}
          leftIconContainerStyle={{marginRight: 5,}}
          placeholder='Password'
        /> */}
        <Button
          title="একাউন্ট করুন"
          icon={
            <FontAwesome
              name="check"
              size={15}
              color="white"
              style={{marginRight: 10}}
            />
          }
          buttonStyle={{marginTop: 20, backgroundColor:'#0F8943'}}
          
        />
        <Button
          title="জিমেইল একাউন্ট ব্যবহার করুন"
          icon={
            <MaterialCommunityIcons
              name="gmail"
              size={15}
              color="white"
              style={{marginRight: 10}}
            />
          }
          buttonStyle={{marginTop: 10, backgroundColor:'#DC4A3D'}}
        />
        {/* <Button
          title="Sign Up with Facebook"
          icon={
            <FontAwesome
              name="facebook"
              size={15}
              color="white"
              style={{marginRight: 10}}
            />
          }
          buttonStyle={{marginTop: 10, backgroundColor:'#4267B2'}}
        /> */}
        <Button
          title="লগইন করুন"
          type="clear"
          titleStyle={{ color: '#0F8943'}}
          onPress={() => navigation.navigate('Signin')}
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
    justifyContent: 'center'
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
      fontSize: 15
  },
});

export default SignUp;