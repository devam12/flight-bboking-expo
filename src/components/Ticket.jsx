import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import moment from "moment/moment";
import { MaterialIcons } from "@expo/vector-icons";
import { Divider } from "react-native-paper";

const Ticket = ({ ticket, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      key={ticket?.id}
      onPress={() => onPress(ticket)}
    >
      <View style={styles.headerLine}>
        <View style={styles.detailBox}>
          <Text style={styles.airlineName}>{ticket?.origin}</Text>
          <Text style={styles.dateStyle}>
            {moment(ticket?.departureTime).format("ll")}
          </Text>
          <Text>{moment(ticket?.departureTime).format("LT")}</Text>
        </View>

        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontWeight: "600" }}>{"TO"}</Text>
        </View>

        <View style={styles.detailBox}>
          <Text style={[styles.airlineName, { textAlign: "right" }]}>
            {ticket?.origin}
          </Text>
          <Text style={[styles.dateStyle, { textAlign: "right" }]}>
            {moment(ticket?.arrivalTime).format("ll")}
          </Text>
          <Text style={{ textAlign: "right" }}>
            {moment(ticket?.arrivalTime).format("LT")}
          </Text>
        </View>
      </View>

      <Divider
        bold={true}
        theme={{ colors: { primary: "black" } }}
        style={{ marginBottom: 15 }}
      />

      <View style={styles.priceBox}>
        <Text style={styles.otherDetails}>{ticket?.duration}</Text>
        <Text style={styles.otherDetails}>Rs. {ticket?.price}</Text>
      </View>

      <View style={styles.priceBox}>
        <Text style={styles.otherDetails}>{ticket?.airline}</Text>
        <Text style={styles.otherDetails}>No. {ticket?.flightNumber}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Ticket;

const styles = StyleSheet.create({
  container: {
    borderColor: "black",
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
  },
  headerLine: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  detailBox: {},
  airlineName: {
    fontWeight: "600",
    fontSize: 25,
    marginBottom: 8,
  },
  dateStyle: {
    fontWeight: "400",
    fontSize: 20,
    marginBottom: 8,
  },
  priceBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  otherDetails: { fontWeight: "400", fontSize: 13, marginBottom: 5 },
});
