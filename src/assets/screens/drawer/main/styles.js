import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#262F38"
  },
  header: {
    flex: 0.1
  },
  body: {
    flex: 0.9,
    margin: 30
  },
  bar: {
    width: "100%",
    height: 1,
    borderRadius: 1,
    backgroundColor: "#FFF"
  },
  filterArea: {
    width: "100%",
    height: 80,
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: "#323C47",
    alignItems: "center",
    justifyContent: "center"
  },
  exercicesArea: {
    width: "100%",
    height: "100%",
    marginTop: 10
  }
});

export default styles;
