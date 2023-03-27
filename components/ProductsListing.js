import {View} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchProducts} from '../redux/actions';
import ProductComponent from './ProductComponent';

const ProductsListing = () => {
  const products = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  console.log('Products :', products);
  return (
    <View>
      <ProductComponent />
    </View>
  );
};

export default ProductsListing;
