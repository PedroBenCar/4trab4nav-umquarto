import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Pressable, Text, View, StyleSheet } from "react-native";

const Home = ({navigation}) => {

    return(
        <View style={styles.container}> 
            <Pressable onPress={() => navigation.navigate("TelaA")}>
                <Text>ir para Tela A</Text>
            </Pressable>
        </View>
    )
}

const TelaA = ({navigation}) => {

    return(
        <View style={styles.container}> 
            <Pressable onPress={() => navigation.navigate("TelaB")}>
                <Text>ir para Tela B</Text>
            </Pressable>
        </View>
    )
}

const TelaB = ({navigation}) => {

    return(
        <View style={styles.container}> 
            <Pressable onPress={() => navigation.navigate("TelaC")}>
                <Text>ir para Tela C</Text>
            </Pressable>
        </View>
    )
}

const TelaC = ({navigation}) => {

    return(
        <View style={styles.container}> 
            <Pressable onPress={() => navigation.navigate("Home")}>
                <Text>voltar para Home</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#eee",
        alignItems: "center",
        justifyContent: "center"
    },
    button: {
        backgroundColor: "#9cdad6",
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: "300"
    }
})

const app = () => {

    const Stack = createStackNavigator();

    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="TelaA" component={TelaA} />
                <Stack.Screen name="TelaB" component={TelaB} />
                <Stack.Screen name="TelaC" component={TelaC} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default app;