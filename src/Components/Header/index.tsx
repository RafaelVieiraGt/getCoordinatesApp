import { StyleSheet, View, Text, Image } from "react-native";


export default function Header(){
    
    return(
        <View style={styles.container}>
            <Text style={styles.textUni}>UNI</Text>
            <Text style={styles.textMaps}>MAPS</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: 120,
        fontFamily: "Poppins",
        
        
    },
    textMaps:{
        color: "red",
        fontFamily: "Poppins",
        fontSize: 22
    },
    textUni: {
        fontSize: 20
    }
})