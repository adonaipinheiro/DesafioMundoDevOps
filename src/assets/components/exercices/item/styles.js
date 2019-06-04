import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "98%",
    height: 100,
    marginBottom: 15,
    marginTop: 10,
    borderRadius: 10,
    margin: 10,
    backgroundColor: "#323C47",
    alignItems: "center",
    justifyContent: "center"
  },
  exercicesContent: {
    minWidth: "100%",
    flexDirection: "row",
    justifyContent: "space-around"
  },
  imgContent: {
    marginLeft: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  imgCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#29333d",
    alignItems: "center",
    justifyContent: "center"
  },
  textTitle: {
    color: "#FFF",
    fontSize: 18,
    fontFamily: "Montserrat-Medium",
    textTransform: "uppercase"
  },
  attributesArea: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  attributesContent: {
    flexDirection: "row",
    margin: 5,
    alignItems: "center",
    justifyContent: "center"
  },
  attributesText: {
    marginLeft: 5,
    color: "#FFF",
    fontSize: 10,
    fontFamily: "Montserrat-Medium"
  },
  separator: {
    height: "60%",
    width: 1,
    backgroundColor: "#48596a"
  },
  whenArea: {
    paddingHorizontal: 10,
    borderRadius: 10,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  whenText: {
    color: "#FFF",
    fontSize: 10,
    fontFamily: "Montserrat-Regular"
  }
});

export default styles;
