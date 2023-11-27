import React, { useState } from 'react';
  import { ScrollView, StyleSheet, View } from 'react-native';
  import { Dropdown } from 'react-native-element-dropdown';

  const data = [
    { label: 'Doctor', value: '1' },
    { label: 'Lawer', value: '2' },
    { label: 'Police', value: '3' },
    { label: 'Bussinessman', value: '4' },
    { label: 'Painter', value: '5' },
    { label: 'Teacher', value: '6' }

  ];
  const data1 = [
    { label: '1-5 LPA', value: '7' },
    { label: '5-10 LPA', value: '8' },
    { label: '10-25 LPA', value: '9' },
    { label: '<25', value: '10' }
    
];
const data2 = [
    { label: 'Intermediate', value: '11' },
    { label: 'Graduation', value: '12' },
    { label: 'Masters', value: '13' }
    

  ];
  const data3 = [
    { label: 'Single', value: '14' },
    { label: 'Married', value: '15' },
    { label: 'Divorced', value: '16' }
    
    

  ];



  const DropdownComponent = () => {
    const [value, setValue] = useState(null);
    const [value1, setValue1] = useState(null);
    const [value2, setValue2] = useState(null);

    return (
        <View>
          <ScrollView  style={styles.scrollView}>
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Select your Occupation"
        searchPlaceholder="Search..."
        value={value}
        onChange={item => {
          setValue(item.value);
        }}
      />
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data1}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Select your Income Range"
        searchPlaceholder="Search..."
        value={value1}
        onChange={item => {
          setValue1(item.value1);
        }}
      />
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data2}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Select your Education Qulification"
        searchPlaceholder="Search..."
        value={value2}
        onChange={item => {
          setValue2(item.value2);
        }}
      />
      
      </ScrollView>
      </View>
    );
  };

  export default DropdownComponent;

  const styles = StyleSheet.create({
    dropdown: {
      height: 60, 
		borderColor: 'black', 
		borderWidth: 1, 
		marginBottom: 12, 
		paddingHorizontal: 10, 
		borderRadius: 8, 
		fontSize: 16, 
       
    },
    icon: {
      marginRight: 5,
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
    scrollView: {
      backgroundColor: 'white',
      
    }
  });