import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Card } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Details = ({ route }) => {
  const ticket = route?.params?.props;
  const navigation = useNavigation();
  const [booked, setBooked] = useState(false);

  const goBackHandler = () => {
    navigation.goBack();
  };

  const bookTicketHandler = () => {
    setBooked(true);
  };

  //   useEffect(() => {}, [booked]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.backContainer}>
        <TouchableOpacity onPress={goBackHandler}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <View style={{ flex: 1 }}>
          <Text style={styles.headingText}>AirLine Details</Text>
        </View>
      </View>
      <Card style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.textStyle}>Aircraft :</Text>
          <Text style={styles.showText}>{ticket?.aircraft}</Text>
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.textStyle}>Airline :</Text>
          <Text style={styles.showText}>{ticket?.airline}</Text>
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.textStyle}>ArrivalTime :</Text>
          <Text style={styles.showText}>{ticket?.arrivalTime}</Text>
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.textStyle}>DepartureTime :</Text>
          <Text style={styles.showText}>{ticket?.departureTime}</Text>
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.textStyle}>Destination :</Text>
          <Text style={styles.showText}>{ticket?.destination}</Text>
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.textStyle}>Duration :</Text>
          <Text style={styles.showText}>{ticket?.duration}</Text>
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.textStyle}>FlightNumber :</Text>
          <Text style={styles.showText}>{ticket?.flightNumber}</Text>
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.textStyle}>Gate :</Text>
          <Text style={styles.showText}>{ticket?.gate}</Text>
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.textStyle}>Origin :</Text>
          <Text style={styles.showText}>{ticket?.origin}</Text>
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.textStyle}>Price :</Text>
          <Text style={styles.showText}>{ticket?.price}</Text>
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.textStyle}>SeatsAvailable :</Text>
          <Text style={styles.showText}>{ticket?.seatsAvailable}</Text>
        </View>
      </Card>
      {!booked ? (
        <TouchableOpacity onPress={bookTicketHandler} style={styles.button}>
          <Text style={styles.buttonText}>Book the ticket</Text>
        </TouchableOpacity>
      ) : (
        <Text style={styles.success}>Your Ticket Booked Successfully</Text>
      )}
    </SafeAreaView>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    padding: 15,
    marginHorizontal: 25,
    marginBottom: 25,
  },
  backContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 25,
    marginHorizontal: 25,
  },
  textStyle: {
    marginBottom: 8,
    fontWeight: "800",
    marginRight: 10,
  },
  showText: {
    fontWeight: "500",
  },
  textContainer: {
    flexDirection: "row",
  },
  button: {
    borderColor: "black",
    padding: 15,
    borderRadius: 10,
    backgroundColor: "black",
    marginHorizontal: 25,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontSize: 15,
  },
  headingText: {
    fontSize: 22,
    fontWeight: "800",
    textAlign: "center",
  },
  success: {
    textAlign: "center",
    color: "green",
    fontSize: 20,
    fontWeight: "600",
  },
});
