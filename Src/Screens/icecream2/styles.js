import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  turuncu: {
    width: windowWidth,
    height: windowHeight * 0.48,
    backgroundColor: 'orange',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  bar: {
    width: windowWidth,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,
    paddingTop: 20,
  },
  iconBack: {
    width: 30,
    height: 30,
    tintColor: 'white',
  },
  iconShop: {
    width: 20,
    height: 20,
    tintColor: 'white',
  },
  iconHeart: {
    width: 22,
    height: 22,
    tintColor: 'orange',
  },
  heartContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icecream: {
    width: 150,
    height: 350,
  },
  shopContainer: {
    width: 40,
    height: 40,
    borderRadius: 5,
    backgroundColor: 'rgba(239, 239, 239, 0.4)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  plus: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
  },
  price: {
    color: 'white',
    fontSize: 40,
  },
  star: {
    width: 20,
    height: 20,
    tintColor: 'rgba(239, 239, 239, 0.5)',
  },
  descriptions: {
    padding: 50,
    backgroundColor: '#FFF8F1',
  },
  title: {
    fontSize: 30,
    fontWeight: '600',
  },
  buttonWhite: {
    backgroundColor: 'white',
    width: 100,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonOrange: {
    backgroundColor: 'orange',
    width: 100,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nokta: {
    width: 10,
    height: 10,
    backgroundColor: 'orange',
    borderRadius: 15,
    marginRight: 5,
  },
  nokta2: {
    width: 10,
    height: 10,
    borderWidth: 1,
    borderColor: 'orange',
    borderRadius: 15,
    marginRight: 5,
  },
  menu: {
    height: 160,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 5,
  },
  menuIcon: {
    width: 30,
    height: 30,
    tintColor: 'orange',
  },
});
