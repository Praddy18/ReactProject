import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Header from './common/Header';

function Ret(props) {

    return (
        <ScrollView style={styles.container}>
            <Header cartButtonPressed={() => { props.navigation.navigate("MyCart") }} wishlistButtonOnPress={() => { props.navigation.navigate("Whishlist") }} hamButtonOnPress={() => { props.navigation.navigate("Ham") }}
            />

            <Text style={styles.heading}>
                RETURN POLICY
            </Text>
            <View style={styles.section}>
                <Text style={styles.text}>
                    At Drip Store, we strive to ensure your satisfaction with every purchase.
                    If, for any reason, you are not completely satisfied with your order,
                    we offer a hassle-free return policy.
                </Text>
            </View>
            <View style={styles.section}>
                <Text style={styles.subHeading}>
                    Return Period:
                </Text>
                <Text style={styles.text}>
                    You may return items within 5 days from the date of delivery.
                    Eligibility Criteria for Returns:
                </Text>
            </View>
            <View style={styles.criteria}>
                <Text style={styles.criteriaText}>
                    1. Items must be unused, unworn, and in the original packaging.
                </Text>
                <Text style={styles.criteriaText}>
                    2. All tags, labels, and accessories must be intact and attached to the product.
                </Text>
                <Text style={styles.criteriaText}>
                    3. Customized items may not be eligible for return unless there is a defect or error on our part.
                </Text>
            </View>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F4F4F4",
    },
    heading: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 20,
        marginBottom: 10,
        color: "#333",
    },
    section: {
        backgroundColor: "#FFF",
        borderRadius: 10,
        marginHorizontal: 20,
        padding: 15,
        marginBottom: 20,
    },
    subHeading: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
        color: "#333",
    },
    text: {
        fontSize: 16,
        color: "#555",
        lineHeight: 24,
    },
    criteria: {
        backgroundColor: "#FFF",
        borderRadius: 10,
        marginHorizontal: 20,
        padding: 15,
        marginBottom: 20,
    },
    criteriaText: {
        fontSize: 16,
        color: "#555",
        lineHeight: 24,
        marginBottom: 10,
    },
});

export default Ret;
