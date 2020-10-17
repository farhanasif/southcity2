import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";

function Contact(props) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/DSCC-logo-final.png")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
      <Text style={styles.জরুরীযোগাযোগ}>জরুরী যোগাযোগ</Text>
      <Text style={styles.loremIpsum}>
        ঢাকা দক্ষিণ সিটি কর্পোরেশন{"\n"}নগর ভবন, ঢাকা-১০০০{"\n"}টেলিফোন নম্বরঃ
        ০২-৯৫৫৬০১৪{"\n"}ইমেইল: info@dscc.gov.bd{"\n"}ওয়েব সাইটঃ www.dscc.gov.bd
        {"\n"}ফেইসবুক পেইজ www.facebook.com/officialpage.dscc/
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 11,
    alignSelf: "center"
  },
  জরুরীযোগাযোগ: {
    color: "rgba(96,149,19,1)",
    fontSize: 16,
    marginTop: 31,
    alignSelf: "center"
  },
  loremIpsum: {
    color: "rgba(96,149,19,1)",
    textAlign: "center",
    marginTop: 37,
    alignSelf: "center"
  }
});

export default Contact;
