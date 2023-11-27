import React, { useState  } from 'react'; 
import { View, TextInput, Text, StyleSheet, ScrollView } from 'react-native'; 
import DropdownComponent from './Components/Dropdown';
import RadioComponent from './Components/Radiobutton';
import { Dropdown } from 'react-native-element-dropdown';

const data3 = [
  { label: 'Single', value: '14' },
  { label: 'Married', value: '15' },
  { label: 'Divorced', value: '16' }
]


const App = () => { 
	const [name, setName] = useState(''); 
  const [fatherName, setFatheNamer] = useState('');
  const [motherName, setMotherName] = useState(''); 
  const [status, setStatus] = useState('');
  const [spouseName, setSpouseName] = useState(''); 
	const [nomineName, setNomineName] = useState(''); 
  const [pincode, setPincode] = useState(''); 
  const [city, setCity] = useState(''); 
  const [state, setState] = useState(''); 
  const [address1, setAddress1] = useState(''); 
  const [address2, setAddress2] = useState(''); 
	return ( 
    
		<View style={styles.container}> 
    <ScrollView style={{ backgroundColor: 'white', marginHorizontal:10 }}>
    
    <Text style={styles.text}>Let's start by providing your Personal Details</Text>
			<TextInput 
				style={styles.input} 
				placeholder="Name on your PAN card"
				value={name} 
				onChangeText={name=>setName(name)} 
			/> 
      <DropdownComponent />
			
			<TextInput 
				style={styles.input} 
				placeholder="Enter your Father Name"
				value={fatherName} 
				onChangeText={fatherName=>setFatheNamer(fatherName)} 
			/> 
      <TextInput 
				style={styles.input} 
				placeholder="Enter your Mother Name"
				value={motherName} 
				onChangeText={motherName=>setMotherName(motherName)} 
			/> 
      <Text style={styles.text1}>What do you want to print on Your Card ?</Text>
      <RadioComponent />
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data3}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Select your Marital Status"
        searchPlaceholder="Search..."
        value={status}
        onChange={item => {
          setStatus(item.status)
        }}
      />
      <TextInput 
				style={styles.input} 
				placeholder="Enter your Spouse Name"
				value={spouseName} 
				onChangeText={spouseName=>setSpouseName(spouseName)} 
			/> 

     <Text style={styles.text1}>Your Nominee Details</Text>


  <View style={{backgroundColor:"#d0ecfd" , marginBottom:10, marginTop:10, borderRadius:8}}>
      <Text style={{color:"black",fontSize :16, marginTop:10}}>Tier1:Nominee Details</Text> 
      <View style={{marginTop:15}}>
       <TextInput  
				style={styles.input} 
				placeholder="Enter your Nominee Name"
				value={nomineName} 
				onChangeText={nomineName=>setNomineName(nomineName)} 
			/> 
      <TextInput  
				style={styles.input} 
				placeholder="Enter your PinCode"
				value={pincode} 
				onChangeText={pincode=>setPincode(pincode)} 
			/> 
      <TextInput  
				style={styles.input} 
				placeholder="Enter your City"
				value={city} 
				onChangeText={city=>setCity(city)} 
			/> 
      
      <TextInput  
				style={styles.input} 
				placeholder="Enter your State"
				value={state} 
				onChangeText={state=>setState(state)} 
			/> 
       <TextInput  
				style={styles.input} 
				placeholder="Enter your Address line 1"
				value={address1} 
				onChangeText={address1=>setAddress1(address1)} 
			/>
       <TextInput  
				style={styles.input} 
				placeholder="Enter your Address"
				value={address2} 
				onChangeText={address2=>setAddress2(address2)} 
			/>
         </View>
      </View> 
		
    </ScrollView>
    </View> 

    
	); 
}; 
const styles = StyleSheet.create({ 
	container: { 
		flex: 1, 
		padding: 16 ,
    
	}, 
	input: { 
		height: 60, 
		borderColor: 'black', 
		borderWidth: 1, 
		marginBottom: 12, 
		paddingHorizontal: 10, 
		borderRadius: 8, 
		fontSize: 16, 
	}, 
  text:{
    color:"black",
    fontSize: 20,
    marginBottom:10
   
  },
  text1:{
    color:"black",
    fontSize :18,
  },
  dropdown: {
    height: 60, 
  borderColor: 'black', 
  borderWidth: 1, 
  marginBottom: 12, 
  marginTop:12,
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
	
}); 

export default App;
