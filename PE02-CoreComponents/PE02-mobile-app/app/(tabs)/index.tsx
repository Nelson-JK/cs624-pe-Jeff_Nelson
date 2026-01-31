import React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  StyleSheet,
} from "react-native";

const HomeScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
{/* 🔹 City University of Seattle logo */}
      <Image
        source={require("../../assets/images/cityU_logo1.png")}
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Existing content */}
      <Text style={styles.question}>Which course did you like?</Text>

      <TextInput style={styles.input} placeholder="ex. CS624" />

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionHeaderText}>
          Core Requirements{"\n"}(24 credits)
        </Text>
      </View>

      <View style={styles.list}>
        <Text style={styles.item}>CS 504 Software Engineering</Text>
        <Text style={styles.item}>CS 506 Programming for Computing</Text>
        <Text style={styles.item}>CS 519 Cloud Computing Overview</Text>
        <Text style={styles.item}>CS 533 Computer Architecture</Text>
        <Text style={styles.item}>CS 547 Secure Systems and Programs</Text>
        <Text style={styles.item}>
          CS 622 Discrete Math and Algorithms for Computing
        </Text>
        <Text style={styles.item}>
          DS 510 Artificial Intelligence for Data Science
        </Text>
        <Text style={styles.item}>
          DS 620 Machine Learning & Deep Learning
        </Text>
      </View>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionHeaderText}>
          Depth of Study (6{"\n"}Credits)
        </Text>
      </View>

      <View style={styles.list}>
        <Text style={styles.item}>
          CS 624 Full-Stack Development - Mobile App
        </Text>
        <Text style={styles.item}>
          CS 628 Full-Stack Development - Web App
        </Text>
      </View>

    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 16,
    paddingBottom: 40,
    backgroundColor: "#FFFFFF",
  },

  // 🔹 LOGO STYLE (ADD THIS)
  logo: {
    width: "100%",
    height: 120,
    marginBottom: 20,
  },

  image: {
    width: "100%",
    height: 200,
    marginBottom: 20,
  },
  question: {
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#888",
    padding: 10,
    fontSize: 16,
    marginBottom: 20,
  },
  sectionHeader: {
    backgroundColor: "yellow",
    paddingVertical: 12,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  sectionHeaderText: {
    fontSize: 42,
    fontWeight: "bold",
    lineHeight: 46,
  },
  list: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  item: {
    fontSize: 16,
    marginBottom: 6,
  },
});
