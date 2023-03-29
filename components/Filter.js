import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {filterProducts} from '../redux/actions';
import DropdownComponent from './DropdownComponent';

const Filter = () => {
  const [filterData, setFilterData] = useState('Filter');
  const [categoryData, setCategoryData] = useState([]);

  const dispatch = useDispatch();
  const categories = useSelector(state => state.allProducts.categories);
  // console.log(77, categories);

  useEffect(() => {
    dispatch(filterProducts(filterData === 'All' ? 'Filter' : filterData));
  }, [filterData]);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.filter}
        onPress={() => {
          setCategoryData([...categories, 'All']);
        }}>
        <Text>{filterData === 'All' ? 'Filter' : filterData}</Text>
      </TouchableOpacity>
      <DropdownComponent data={categoryData} setData={setFilterData} />
    </View>
  );
};

export default Filter;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    paddingHorizontal: 14,
    paddingBottom: 0,
    flexDirection: 'row',
  },
  filter: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: 4,
    borderColor: '#ddd',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
