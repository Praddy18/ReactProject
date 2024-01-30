import React from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Image, Button } from 'react-native';
import Header from './common/Header';

function Terms(props) {
  return (
    <ScrollView style={styles.container}>
      <Header
        cartButtonPressed={() => { props.navigation.navigate("MyCart") }}
        wishlistButtonOnPress={() => { props.navigation.navigate("Whishlist") }}
        hamButtonOnPress={() => { props.navigation.navigate("Ham") }}
      />

      <View style={styles.contentContainer}>
        <Text style={styles.heading}>Terms and Conditions</Text>

        <Text style={styles.sectionHeading}>Acceptance of Terms:</Text>
        <Text style={styles.paragraph}>
          By accessing or using the Drip Store, you agree to be bound by these terms and conditions.
          If you do not agree with any part of these terms, please do not use the app.
        </Text>

        <Text style={styles.sectionHeading}>Account Registration:</Text>
        <Text style={styles.paragraph}>
          To use certain features of the app, you may be required to create an account.
          You are responsible for maintaining the confidentiality of your account information
          and are fully responsible for all activities that occur under your account.
        </Text>

        <Text style={styles.sectionHeading}>Product Information:</Text>
        <Text style={styles.paragraph}>
          We strive to provide accurate and up-to-date information about our products.
          However, we do not warrant the accuracy, completeness, or reliability of any
          product descriptions or images.
        </Text>

        <Text style={styles.sectionHeading}>Ordering and Payment:</Text>
        <Text style={styles.paragraph}>
          All orders placed through the app are subject to availability and acceptance.
          We reserve the right to refuse or cancel any order for any reason.
          Payment must be made in full at the time of placing an order. We accept [list of accepted payment methods].
        </Text>

        <Text style={styles.sectionHeading}>Shipping and Delivery:</Text>
        <Text style={styles.paragraph}>
          Shipping and delivery times are estimates and may vary.
          We are not responsible for any delays or issues caused by third-party shipping providers.
        </Text>

        <Text style={styles.sectionHeading}>Returns and Refunds:</Text>
        <Text style={styles.paragraph}>
          Please refer to our [Return Policy] for information on returns, refunds, and exchanges.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  sectionHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 15,
  },
});

export default Terms;
