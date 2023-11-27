// App.js 

import React, { useState } from 'react'; 
import { View, Text, StyleSheet } from 'react-native'; 
import { RadioButton } from 'react-native-paper'; 

const styles = StyleSheet.create({ 
	container: { 
		flex: 1, 
	
	}, 
	radioGroup: { 
		flexDirection: 'row', 
		justifyContent: 'space-spac', 
		marginTop: 6, 
		borderRadius: 8, 
		backgroundColor: 'white', 
		shadowColor: '#000', 
		shadowOffset: { 
			width: 0, 
			height: 2, 
		}, 
		shadowOpacity: 0.25, 
		shadowRadius: 3.84, 
	}, 
	radioButton: { 
		flexDirection: 'row', 
		alignItems: 'center', 
	}, 
	radioLabel: { 
		marginLeft: 8, 
		fontSize: 16, 
		color: '#333', 
	}, 
}); 

const RadioComponent = () => { 
	const [selectedValue, setSelectedValue] = useState('option1'); 

	return ( 
		<View style={styles.container}> 
			<View style={styles.radioGroup}> 
				<View style={styles.radioButton}> 
					<RadioButton.Android 
						value="option1"
						status={selectedValue === 'option1' ? 
								'checked' : 'unchecked'} 
						onPress={() => setSelectedValue('option1')} 
						color="#007BFF"
					/> 
					<Text style={styles.radioLabel}> 
						Father's Name 
					</Text> 
				</View> 

				<View style={styles.radioButton}> 
					<RadioButton.Android 
						value="option2"
						status={selectedValue === 'option2' ? 
								'checked' : 'unchecked'} 
						onPress={() => setSelectedValue('option2')} 
						color="#007BFF"
					/> 
					<Text style={styles.radioLabel}> 
						Mother'S Name 
					</Text> 
				</View> 

				
			</View> 
		</View> 
	); 
}; 

export default RadioComponent;
