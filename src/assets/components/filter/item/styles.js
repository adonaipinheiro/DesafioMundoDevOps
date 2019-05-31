import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    margin: 5
  },
  contentArea: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  filterArea: {
    width: "100%",
    height: "100%",
    marginTop: -15,
    alignItems: "center",
    justifyContent: "center"
  },
  filterImg: {
    width: 34 * 0.8,
    height: 29 * 0.8
  },
  check: {
    width: 15,
    height: 15,
    backgroundColor: "#19B996",
    borderRadius: 7.5,
    borderColor: "#FFF",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-end"
  }
});

export default styles;
