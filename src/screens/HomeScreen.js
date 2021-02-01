import React, { useState }from 'react';
import { Text, SearchBar } from 'react-native-elements';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';



const HomeScreen = () => {
    const [address, setAddress] = useState('')
    console.log(address)
    return (
        <SafeAreaView>
            <SearchBar  
                placeholder="Enter address"
                onChangeText={setAddress}
                value={address}
            />
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

})

export default HomeScreen;