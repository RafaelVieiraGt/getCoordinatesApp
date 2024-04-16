import { useEffect, useState } from "react";
import { StyleSheet, TextInput, View, Text, Button, TouchableOpacity } from "react-native";
import { LocationAccuracy, getCurrentPositionAsync, requestForegroundPermissionsAsync, LocationObject} from "expo-location";
import axios from "axios";

export default function Form(){
    const [bloco, setBloco] = useState<string>('X');
    const [coords, setCoords] = useState<LocationObject>();
    const [floor, setFloor] = useState<string>('0');
   
    

   async function requestLocation(){
   const {granted} = await requestForegroundPermissionsAsync();

   if(granted){
    const currentLocation = await getCurrentPositionAsync({accuracy: LocationAccuracy.Highest});
    setCoords(currentLocation);
    //console.log("LOCALIZAÇÃO: " + currentLocation.coords.latitude);
    //console.log(typeof(currentLocation.coords.latitude))
   }
   }

   async function getcoords(){
   const response:any = await axios.get("http://localhost:8080/coordinates")
   .then(()=> console.log("Coordenadas existentes: ", response))
   }

   useEffect(()=>{
    requestLocation();
   },[])


  async function setCoordinates(){
    requestLocation();
    console.log("LATITUDE SALVA: ",coords?.coords.latitude)
    console.log("LONGITUDE SALVA: ", coords?.coords.longitude)
    console.log("BLOCO SALVO: ", bloco)
    console.log("ANDAR SALVO: ", floor)
    // await axios.post("http://localhost:8080/coordinates", {
    //     latitude: coords?.coords.latitude,
    //     longitude: coords?.coords.longitude,
    //     name: bloco,
    //     floor: floor
    // })
    // .then((response)=> console.log(response.data))
    // .catch((error) => console.log("Erro: " + error))
    
   }
   
    
    return(
        <View style={styles.containerForm}>
            <View style={styles.inputForm}>
                <Text style={styles.text}>Bloco</Text>
                <TextInput 
                
                    style={styles.inputBox}
                    value={bloco} 
                    placeholder="Informe o Bloco" 
                    onChangeText={(text: string) => setBloco(text)} 
                />
            </View>

            <View style={styles.inputForm}>
                <Text style={styles.text}>Floor</Text>
                <TextInput 
                    keyboardType="numeric"
                    style={styles.inputBox}
                    value={floor || ""}
                    placeholder="Informe o andar"
                    onChangeText={text=>setFloor(text)}
                />
            </View>
            
           <TouchableOpacity onPress={setCoordinates}  style={styles.button}>
                <Text  style={styles.textButton}>Coletar Nó</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={getcoords}  style={styles.button}>
                <Text  style={styles.textButton}>Mostrar nós</Text>
            </TouchableOpacity>
            
        </View>
    )
}

const styles = StyleSheet.create({
    containerForm : {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        height: '70%',
        gap: 40
    },
    text : {
        fontSize: 16
    },
    inputForm : {
        width: '80%',
       padding: 10,
        borderLeftWidth: 3,
        borderLeftColor: 'red',
        fontSize: 14
    },
    inputBox: {
        paddingHorizontal: 10,
        paddingTop: 7
    },
    button: {
        
        paddingHorizontal: 10,
        paddingVertical: 8,
        backgroundColor: 'red',
        borderRadius: 8
    },
    textButton: {
        color: '#fff',
        fontSize: 14,
        
    }
    
})