/* eslint-disable react-native/no-inline-styles */
import {ActivityIndicator, View, Image, Text} from 'react-native';
import React, {useEffect, useLayoutEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchProduct, removeSelectedProduct} from '../redux/actions';
// import ProductComponent from './ProductComponent';
import {Card} from 'react-native-elements';
const ProductDetail = ({route}) => {
  const {id} = route.params;
  console.log(id);
  const navigation = useNavigation();

  const product = useSelector(state => state.product);
  const dispatch = useDispatch();
  console.log(product);

  useEffect(() => {
    dispatch(fetchProduct(id));
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: product.title,
    });
    console.log(11, product.title);
    navigation.addListener('blur', () => {
      dispatch(removeSelectedProduct());
    });
  }, [navigation, product.loading]);

  if (product.loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size={'large'} color="#f00" />
      </View>
    );
  }
  return (
    <View style={{flex: 1}}>
      <Card
        style={{
          padding: 12,
          backgroundColor: '#fff',
          width: '45%',
          margin: 4,
          borderWidth: 1,
          borderColor: '#ddd',
          borderRadius: 8,
          elevation: 4,
          // position: 'relative',
        }}>
        <Image
          source={{uri: product?.image}}
          style={{height: 300, width: 300}}
        />
        <Text
          style={{
            width: 50,
            top: 8,
            right: 8,
            backgroundColor: 'red',
            marginBottom: 5,
            padding: 4,
            paddingHorizontal: 12,
            borderRadius: 20,
            color: '#fff',
          }}>
          {product?.rating?.rate}
        </Text>
        <Text style={{fontSize: 18, fontWeight: 'bold', color: '#f00'}}>
          ${product?.price}
        </Text>
        <Text style={{fontSize: 14, fontWeight: '700', color: 'black'}}>
          {product?.title}
        </Text>
        <Text style={{color: 'black', paddingTop: 10}}>{product?.description}</Text>
      </Card>
    </View>
  );
};

export default ProductDetail;
