import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView } from "react-native";
import styles from "./styles";

const App = () => {
  return (
    <View style={styles.container}>
      {/* Üst Menü */}
      <View style={styles.header}>
        <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/5234/5234126.png" }} style={styles.icon} />
        <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/1170/1170576.png" }} style={styles.icon} />
      </View>

      {/* Arama Alanı */}
      <View style={styles.searchContainer}>
        <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/2015/2015241.png" }} style={styles.searchIcon} />
        <TextInput placeholder="Search" placeholderTextColor="white" style={styles.searchInput} />
      </View>

      {/* Filtre Butonları */}
      <View style={styles.filterContainer}>
        <TouchableOpacity style={styles.activeFilter}>
          <Text style={styles.activeFilterText}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filter}>
          <Text style={styles.filterText}>New</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filter}>
          <Text style={styles.filterText}>Category</Text>
        </TouchableOpacity>
      </View>

      {/* Dondurma Görselleri */}
      <ScrollView contentContainerStyle={styles.iceCreamContainer}>
        <View style={styles.iceCreamRow}>
          <View style={styles.activeIceCream}>
            <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQZQ0SMNUThr3M0l3GEu9LTw1FfCn7ib0z_w&s" }} style={styles.iceCreamImage} />
          </View>
          <View style={styles.iceCream}>
            <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQZQ0SMNUThr3M0l3GEu9LTw1FfCn7ib0z_w&s" }} style={styles.iceCreamImage} />
          </View>
        </View>
        <View style={styles.iceCreamRow}>
          <View style={styles.iceCream}>
            <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQZQ0SMNUThr3M0l3GEu9LTw1FfCn7ib0z_w&s" }} style={styles.iceCreamImage} />
          </View>
          <View style={styles.iceCream}>
            <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQZQ0SMNUThr3M0l3GEu9LTw1FfCn7ib0z_w&s" }} style={styles.iceCreamImage} />
          </View>
        </View>
      </ScrollView>

      {/* Alt Menü */}
      <View style={styles.bottomMenu}>
        <TouchableOpacity>
          <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/553/553416.png" }} style={styles.bottomIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/1139/1139982.png" }} style={styles.bottomIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/776/776627.png" }} style={styles.bottomIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/847/847969.png" }} style={styles.bottomIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default App;
