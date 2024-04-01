import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Input } from "react-native-elements";
import { MaterialIcons } from "@expo/vector-icons";
import Ticket from "../components/Ticket";
import { useNavigation } from "@react-navigation/native";
import { RouteNames } from "../common/constants";
import { Ionicons } from "@expo/vector-icons";

const Search = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [result, setResult] = useState([]);
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sortByPriceAsc, setSortByPriceAsc] = useState(false);
  const [sortByPriceDesc, setSortByPriceDesc] = useState(false);

  const goBackHandler = () => {
    navigation.goBack();
  };

  const navigation = useNavigation();

  const toggleValues = () => {
    setFrom(to);
    setTo(from);
  };

  const fetchList = async () => {
    setLoading(true);
    const res = await fetch("https://api.npoint.io/378e02e8e732bb1ac55b");
    const list = await res.json();
    setList(list);
    setResult(list);
    setLoading(false);
  };

  useEffect(() => {
    fetchList();
  }, []);

  useEffect(() => {
    setLoading(true);
    if (from === "" && to === "") {
      setResult(list);
    } else {
      let filteredList = list;

      if (from.trim() !== "") {
        filteredList = filteredList.filter((item) =>
          item.origin.toLowerCase().includes(from.toLowerCase())
        );
      }

      if (to.trim() !== "") {
        filteredList = filteredList.filter((item) =>
          item.destination.toLowerCase().includes(to.toLowerCase())
        );
      }

      setResult(filteredList);
    }
    setLoading(false);
  }, [from, to, list]);

  const onPress = (ticket) => {
    navigation.navigate(RouteNames.DETAILS_SCREEN, { props: ticket });
  };

  const sortByPriceAscHandler = () => {
    const sortedList = [...result].sort((a, b) => a.price - b.price);
    setResult(sortedList);
    setSortByPriceAsc(true);
    setSortByPriceDesc(false);
  };

  const sortByPriceDescHandler = () => {
    const sortedList = [...result].sort((a, b) => b.price - a.price);
    setResult(sortedList);
    setSortByPriceAsc(false);
    setSortByPriceDesc(true);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.backContainer}>
        <TouchableOpacity onPress={goBackHandler}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <View style={{ flex: 1 }}>
          <Text style={styles.headingText}>Flight List</Text>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <Input
            placeholder="From"
            rightIcon={
              <MaterialIcons name="flight-takeoff" size={24} color="black" />
            }
            value={from}
            onChangeText={(value) => {
              setFrom(value);
            }}
          />

          <TouchableOpacity
            style={{ alignItems: "center" }}
            onPress={toggleValues}
          >
            <View
              style={{ backgroundColor: "black", borderRadius: 20, padding: 5 }}
            >
              <MaterialIcons
                name="swap-vert"
                size={24}
                color="white"
                style={{
                  backgroundColor: "black",
                }}
              />
            </View>
          </TouchableOpacity>

          <Input
            placeholder="To"
            rightIcon={
              <MaterialIcons name="flight-land" size={24} color="black" />
            }
            value={to}
            onChangeText={(value) => {
              setTo(value);
            }}
          />
        </View>

        <View style={styles.sortButtonsContainer}>
          <TouchableOpacity
            style={[styles.sortButton, sortByPriceAsc && styles.activeButton]}
            onPress={sortByPriceAscHandler}
          >
            <Text style={styles.buttonText}>Low to High</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.sortButton, sortByPriceDesc && styles.activeButton]}
            onPress={sortByPriceDescHandler}
          >
            <Text style={styles.buttonText}>High to Low</Text>
          </TouchableOpacity>
        </View>

        {!loading ? (
          <ScrollView>
            {result?.map((ticket, index) => (
              <Ticket key={index} ticket={ticket} onPress={onPress} />
            ))}
          </ScrollView>
        ) : (
          <ActivityIndicator />
        )}
      </View>
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flex: 1,
  },
  backContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 25,
    marginHorizontal: 25,
  },
  formContainer: {
    borderColor: "white",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderColor: "gray",
    borderWidth: 2,
    borderRadius: 20,
    marginBottom: 15,
  },
  buttonText: {
    fontWeight: "700",
    fontSize: 14,
    lineHeight: 22,
    color: "white",
    textAlign: "center",
  },
  headingText: {
    fontSize: 22,
    fontWeight: "800",
    textAlign: "center",
  },
  sortButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  sortButton: {
    backgroundColor: "black",
    padding: 10,
    borderRadius: 10,
    width: "48%",
  },
  activeButton: {
    backgroundColor: "gray",
  },
});
