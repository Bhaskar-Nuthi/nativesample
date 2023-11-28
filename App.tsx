import React, { useState  } from 'react'; 
import { View, TextInput, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'; 
import DropdownComponent from './Components/Dropdown';
import RadioComponent from './Components/Radiobutton';
import { Dropdown } from 'react-native-element-dropdown';
import { Formik } from 'formik';
 import * as Yup from 'yup';

const data3 = [
  { label: 'Single', value: '14' },
  { label: 'Married', value: '15' },
  { label: 'Divorced', value: '16' }
]


const App = () => { 
	//const [name, setName] = useState(''); 
  // const [fatherName, setFatheNamer] = useState('');
  // const [motherName, setMotherName] = useState(''); 
  const [status, setStatus] = useState('');
  // const [spouseName, setSpouseName] = useState(''); 
	// const [nomineName, setNomineName] = useState(''); 
  // const [pincode, setPincode] = useState(''); 
  // const [city, setCity] = useState(''); 
  // const [state, setState] = useState(''); 
  // const [address1, setAddress1] = useState(''); 
  // const [address2, setAddress2] = useState(''); 

  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(8, 'Too Short!')
      .max(16, 'Too Long!')
      .required('Please enter your name same as in PAN card'),
      fatherName: Yup.string()
      .min(8, 'Too Short!')
      .max(30, 'Too Long!')
      .required('Required'),
      motherName: Yup.string()
      .min(8, 'Too Short!')
      .max(30, 'Too Long!')
      .required('Required'),
      spouseName: Yup.string()
      .min(8, 'Too Short!')
      .max(30, 'Too Long!')
      .required('Required'),
      nomineName: Yup.string()
      .min(8, 'Too Short!')
      .max(30, 'Too Long!')
      .required('Required'),
      pincode: Yup.string()
      .min(6, 'Too Short!')
      .max(10, 'Too Long!')
      .required('Required'),
      city: Yup.string()
      .min(8, 'Too Short!')
      .max(16, 'Too Long!')
      .required('Required'),
      state: Yup.string()
      .min(8, 'Too Short!')
      .max(16, 'Too Long!')
      .required('Required'),
      address1: Yup.string()
      .min(8, 'Too Short!')
      .max(16, 'Too Long!')
      .required('Required'),
      address2: Yup.string()
      .min(8, 'Too Short!')
      .max(16, 'Too Long!')
      .required('Required'),
  });

	return ( 
    
    <Formik initialValues={{
      name:"",
      fatherName:"",
      motherName:"",
      spouseName:"",
      nomineName:"",
      pincode:"",
      city:"",
      state:"",
      address1:"",
      address2:""

   }} validationSchema={SignupSchema}
       onSubmit={values => {
         console.log(values);
       }}
    >
      {({values,errors,touched,handleChange})=>(
		<View style={styles.container}> 
    <ScrollView style={{ backgroundColor: 'white', marginHorizontal:10 }}>
    
    <Text style={styles.text}>Let's start by providing your Personal Details</Text>
			<TextInput 
				style={styles.input} 
				placeholder="Name on your PAN card"
				value={values.name} 
				onChangeText={handleChange('name')} 
			/> 
      {touched.name && errors.name &&(
        <Text style={styles.errortext}>{errors.name}</Text>
      ) }
      <DropdownComponent />
			
			<TextInput 
				style={styles.input} 
				placeholder="Enter your Father Name"
				value={values.fatherName} 
				onChangeText={handleChange('fatherName')} 
			/> 
       {errors.fatherName &&(
        <Text style={styles.errortext}>{errors.fatherName}</Text>
      ) }
      <TextInput 
				style={styles.input} 
				placeholder="Enter your Mother Name"
				value={values.motherName} 
				onChangeText={handleChange('motherName')} 
			/> 
       {touched.motherName && errors.motherName &&(
        <Text style={styles.errortext}>{errors.motherName}</Text>
      ) }
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
				value={values.spouseName} 
				onChangeText={handleChange('spouseName')} 
			/> 
       {touched.spouseName && errors.spouseName &&(
        <Text style={styles.errortext}>{errors.spouseName}</Text>
      ) }
     <Text style={styles.text1}>Your Nominee Details</Text>


  <View style={{backgroundColor:"#d0ecfd" , marginBottom:10, marginTop:10, borderRadius:8}}>
      <Text style={{color:"black",fontSize :16, marginTop:10}}>Tier1:Nominee Details</Text> 
      <View style={{marginTop:15}}>
       <TextInput  
				style={styles.input} 
				placeholder="Enter your Nominee Name"
				value={values.nomineName} 
				onChangeText={handleChange('nomineeName')} 
			/> 
       {/* {touched.nomineName && errors.nomineName &&(
        <Text style={styles.errortext}>{errors.nomineName}</Text>
      ) } */}
      <TextInput  
				style={styles.input} 
				placeholder="Enter your PinCode"
				value={values.pincode} 
				onChangeText={handleChange('pincode')} 
			/> 
       {/* {errors.pincode &&(
        <Text style={styles.errortext}>{errors.pincode}</Text>
      ) } */}
      <TextInput  
				style={styles.input} 
				placeholder="Enter your City"
				value={values.city} 
				onChangeText={handleChange('city')} 
			/> 
       {/* {errors.city &&(
        <Text style={styles.errortext}>{errors.city}</Text>
      ) } */}
      <TextInput  
				style={styles.input} 
				placeholder="Enter your State"
				value={values.state} 
				onChangeText={handleChange('state')} 
			/> 
       {/* {errors.state &&(
        <Text style={styles.errortext}>{errors.state}</Text>
      ) } */}
       <TextInput  
				style={styles.input} 
				placeholder="Enter your Address line 1"
				value={values.address1} 
				onChangeText={handleChange('address1')} 
			/>
       {/* {errors.address1 &&(
        <Text style={styles.errortext}>{errors.address1}</Text>
      ) } */}
       <TextInput  
				style={styles.input} 
				placeholder="Enter your Address"
				value={values.address2} 
				onChangeText={handleChange('address2')} 
			/>
       {/* {errors.address2 &&(
        <Text style={styles.errortext}>{errors.address2}</Text>
      ) } */}
         </View>
      </View> 
		<TouchableOpacity onPress={()=>{}} style={styles.submitbtn}>
      <Text style={styles.submitbtntext}>SUBMIT</Text>
    </TouchableOpacity>
    </ScrollView>
    </View> 
    
    )}
    </Formik>
    
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
  submitbtn: {
backgroundColor :"red",
padding:10,
borderRadius:10,
justifyContent:"center"
  },
  submitbtntext:{
    color:"#fff",
    textAlign:"center",
    fontSize:18,

  },
  errortext:{
    fontSize:14,
    color:"#FF0D10"
  }
	
}); 

export default App;
