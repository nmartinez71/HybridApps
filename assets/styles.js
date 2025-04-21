import { Platform, StyleSheet, StatusBar, Dimensions } from "react-native";

// Get screen dimensions
const { width } = Dimensions.get("window");
// Calculate box width for 3 columns with some spacing
const boxWidth = (width - 40) / 3;

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "ghostwhite",
    alignItems: "center",
    justifyContent: "space-around",
    ...Platform.select({
      ios: { paddingTop: 40 },
      android: { paddingTop: StatusBar.currentHeight },
    }),
  },

  box: {
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: boxWidth,
    height: boxWidth, 
    margin: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3,
  },

  boxText: {
    color: "darkslategray",
    fontWeight: "bold",
    textAlign: "center",
  },

  row: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignSelf: "stretch",
  },

  column: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    alignSelf: "stretch",
  },
  
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  
  
  map: {
    width: '95%',
    height: '80%'
  },
  
  list: {
    width: '100%',
    paddingHorizontal: 5,
  },
  swipeable: {
    backgroundColor: "#ffffff",
    paddingVertical: 60,
    marginVertical: 8,
    marginHorizontal: 8,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3, 
  },
  
  swipeableText: {
    fontSize: 18,
    color: "#333",
    textAlign: "center",
  },
  
  swipeableWrapper: {
    flexGrow: 1,
    flexBasis: "30%", 
    aspectRatio: 1, 
    margin: 5,
  },
  
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});