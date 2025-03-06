import {View, Text, SafeAreaView, Image} from 'react-native';
import React from 'react';
import Styles from './styles';
import Icons from '../../assets/icons';
import Images from '../../assets/images';

const mycart = () => {
  return (
    <SafeAreaView style={{backgroundColor: '#FFF8F1', flex: 1}}>
      <View style={{padding: 20, backgroundColor: '#FFF8F1'}}>
        <Image source={Icons.back} style={Styles.back} />
      </View>
      <View style={{paddingLeft: 30, marginBottom: 25}}>
        <Text style={{fontSize: 30, fontWeight: '500'}}>My Cart</Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <View style={Styles.cart}>
          <View>
            <Image source={Images.icecream} style={Styles.icecream} />
          </View>
          <View>
            <View style={{paddingLeft: 20}}>
              <Text style={{fontWeight: 'bold'}}>Blue Moon Popsicle</Text>
              <Text style={{fontWeight: 'bold'}}>Stick</Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                  width: 250,
                }}>
                <View style={Styles.button}>
                  <View
                    style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{color: 'orange'}}>1</Text>
                  </View>
                </View>
                <View style={Styles.button}>
                  <View
                    style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{color: 'orange'}}>$ 3.99</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View>
            <Image source={Icons.trash} style={Styles.trash} />
          </View>
        </View>

        <View style={Styles.cart}>
          <View>
            <Image source={Images.icecream} style={Styles.icecream} />
          </View>
          <View>
            <View style={{paddingLeft: 20}}>
              <Text style={{fontWeight: 'bold'}}>Blue Moon Popsicle</Text>
              <Text style={{fontWeight: 'bold'}}>Stick</Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                  width: 250,
                }}>
                <View style={Styles.button}>
                  <View
                    style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{color: 'orange'}}>1</Text>
                  </View>
                </View>
                <View style={Styles.button}>
                  <View
                    style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{color: 'orange'}}>$ 3.99</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View>
            <Image source={Icons.trash} style={Styles.trash} />
          </View>
        </View>

        <View style={Styles.cart}>
          <View>
            <Image source={Images.icecream} style={Styles.icecream} />
          </View>
          <View>
            <View style={{paddingLeft: 20}}>
              <Text style={{fontWeight: 'bold'}}>Blue Moon Popsicle</Text>
              <Text style={{fontWeight: 'bold'}}>Stick</Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                  width: 250,
                }}>
                <View style={Styles.button}>
                  <View
                    style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{color: 'orange'}}>1</Text>
                  </View>
                </View>
                <View style={Styles.button}>
                  <View
                    style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{color: 'orange'}}>$ 3.99</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View>
            <Image source={Icons.trash} style={Styles.trash} />
          </View>
        </View>

        <View
          style={{
            width: 340,
            marginTop: 70,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View>
            <Text style={{fontSize: 20, color: 'orange'}}>Deliver to</Text>
          </View>
          <View
            style={{
              elevation: 5,
              shadowColor: 'grey',

              backgroundColor: 'white',
              borderRadius: 10,
              justifyContent: 'center',
              padding: 10,
            }}>
            <Text style={{fontSize: 20, textAlign: 'center', color: 'orange'}}>
              Home
            </Text>
          </View>
        </View>
      </View>

      <View
        style={{
          height: 150,
          backgroundColor: 'white',
          paddingHorizontal: 20,
          marginTop: 20,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View>
          <Text style={{color: 'orange', fontSize: 35, fontWeight: '500'}}>
            $ 13.96
          </Text>
          <Text style={{color: 'orange', fontSize: 13, fontWeight: '500'}}>
            View Details
          </Text>
        </View>
        <View
          style={{padding: 20, backgroundColor: 'orange', borderRadius: 10}}>
          <Text style={{color: 'white', fontWeight: '700'}}>Buy Now</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default mycart;
