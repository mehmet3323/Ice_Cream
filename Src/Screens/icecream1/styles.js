import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDEDE3",
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  icon: {
    width: 30,
    height: 30,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FF914D",
    borderRadius: 20,
    paddingHorizontal: 15,
    height: 40,
    marginBottom: 15,
  },
  searchIcon: {
    width: 20,
    height: 20,
    tintColor: "white",
  },
  searchInput: {
    flex: 1,
    color: "white",
    marginLeft: 10,
  },
  filterContainer: {
    paddingTop: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 15,
  },
  activeFilter: {
    backgroundColor: "#FF914D",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  activeFilterText: {
    color: "white",
    fontWeight: "bold",
  },
  filter: {
    backgroundColor: "white",
    borderColor: "#FF914D",
    borderWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  filterText: {
    color: "#FF914D",
    fontWeight: "bold",
  },
  iceCreamContainer: {
    alignItems: "center",
  },
  iceCreamRow: {
    paddingTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 15,
  },
  iceCream: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 20,
    width: "45%",
    alignItems: "center",
  },
  activeIceCream: {
    backgroundColor: "#FF914D",
    padding: 15,
    borderRadius: 20,
    width: "45%",
    alignItems: "center",
  },
  iceCreamImage: {
    width: 80,
    height: 120,
    resizeMode: "contain",
  },
  bottomMenu: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 15,
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: "absolute",
    bottom: 0,
    width: "115%",
  },
  bottomIcon: {
    width: 30,
    height: 30,
  },
});
