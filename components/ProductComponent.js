/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
const ProductComponent = () => {
  const navigation = useNavigation();
  const products = useSelector(state => state.allProducts.products);
  const renderList = products.map(product => {
    const {id, title, image, price, category} = product;
    // console.log(id, title, price, category, image, rating);
    return (
      <TouchableOpacity
        key={id}
        style={{
          margin: 10,
          padding: 10,
          borderRadius: 5,
          flexDirection: 'row',
        }}
        onPress={() => navigation.navigate('ProductDetail', {id})}>
        <View style={{flex: 1}}>
          {/* <Link to={`/product/${id}`}> */}
          <Image style={{width: 90, height: 90}} source={{uri: image}} />
          <View style={{flex: 2, paddingLeft: 10}}>
            <Text
              style={{
                fontSize: 15,
                color: 'black',
                fontWeight: 'bold',
              }}>
              {title}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              paddingTop: 10,
              justifyContent: 'space-around',
            }}>
            <Text
              style={{
                fontSize: 18,
                color: 'black',
              }}>
              $ {price}
            </Text>
            <Text
              style={{
                fontSize: 18,
                color: 'black',
              }}>
              {category}
            </Text>
          </View>
          {/* </Link> */}
        </View>
      </TouchableOpacity>
    );
  });

  return <ScrollView>{renderList}</ScrollView>;
};

export default ProductComponent;
