import {View, Text, SafeAreaView, Image} from 'react-native';
import React from 'react';
import Icons from '../../assets/icons';
import Images from '../../assets/images';
import {LoremIpsum} from 'lorem-ipsum';
import Styles from './styles';
import styles from './styles';

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 8,
    min: 4,
  },
});

const Home = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.turuncu}>
        <View style={Styles.bar}>
          <View>
            <Image source={Icons.back} style={Styles.iconBack} />
          </View>
          <View style={Styles.heartContainer}>
            <Image source={Icons.heart} style={Styles.iconHeart} />
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 20,
          }}>
          <View>
            <Image source={Images.icecream} style={Styles.icecream} />
          </View>

          <View
            style={{
              flexDirection: 'column',
              alignItems: 'flex-end',
              justifyContent: 'center',
            }}>
            <View style={Styles.shopContainer}>
              <Image source={Icons.shop} style={Styles.iconShop} />
            </View>

            <View style={Styles.shopContainer}>
              <Text style={Styles.plus}>+</Text>
            </View>

            <View style={{marginTop: 50}}>
              <Text style={Styles.price}>$ 3.99</Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: 150,
                marginTop: 10,
              }}>
              <View>
                <Image source={Icons.star} style={Styles.star} />
              </View>
              <View>
                <Image source={Icons.star} style={Styles.star} />
              </View>
              <View>
                <Image source={Icons.star} style={Styles.star} />
              </View>
              <View>
                <Image source={Icons.star} style={Styles.star} />
              </View>
              <View>
                <Image source={Icons.star} style={Styles.star} />
              </View>
            </View>
          </View>
        </View>
      </View>

      <View style={Styles.descriptions}>
        <View>
          <Text style={Styles.title}>Blue Moon Popsicle</Text>
          <Text style={Styles.title}>Stick</Text>
          <Text style={{color: 'orange', fontSize: 10}}>
            {lorem.generateParagraphs(1)}
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginTop: 10,
          }}>
          <View style={Styles.buttonWhite}>
            <Text
              style={{
                textAlign: 'center',
                color: 'orange',
                fontWeight: 'bold',
              }}>
              View Ingredients
            </Text>
          </View>
          <View style={Styles.buttonOrange}>
            <Text
              style={{textAlign: 'center', color: 'white', fontWeight: 'bold'}}>
              Order
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 28,
          }}>
          <View style={Styles.nokta}></View>
          <View style={Styles.nokta2}></View>
          <View style={Styles.nokta2}></View>
          <View style={Styles.nokta2}></View>
        </View>
      </View>

      <View style={Styles.menu}>
        <View style={{alignItems: 'center'}}>
          <View>
            <Image source={Icons.store} style={Styles.menuIcon} />
          </View>
          <View>
            <Text style={{color: 'orange'}}>Shop</Text>
          </View>
        </View>

        <View style={{alignItems: 'center'}}>
          <View>
            <Image source={Icons.gift} style={Styles.menuIcon} />
          </View>
          <View>
            <Text style={{color: 'orange'}}>Gifts</Text>
          </View>
        </View>

        <View style={{alignItems: 'center'}}>
          <View>
            <Image source={Icons.offers} style={Styles.menuIcon} />
          </View>
          <View>
            <Text style={{color: 'orange'}}>Offers</Text>
          </View>
        </View>

        <View style={{alignItems: 'center'}}>
          <View>
            <Image source={Icons.account} style={Styles.menuIcon} />
          </View>
          <View>
            <Text style={{color: 'orange'}}>Me</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;