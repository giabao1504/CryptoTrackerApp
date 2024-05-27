import React from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import { welcomeStyles } from './styles';
import Button from '../../components/Button';

const Welcome = ({ navigation }) => {
    return (
        <View style={welcomeStyles.container}>
            <View style={welcomeStyles.imageContainer}>
                <Image
                    source={require("../../assets/welcome.png")}
                    style={welcomeStyles.image}
                />
            </View>

            <View style={welcomeStyles.content}>
                <Text style={welcomeStyles.title}>Welcome to CryptoTracker</Text>

                <View style={welcomeStyles.descriptionContainer}>
                    <Text style={welcomeStyles.descriptionText}>Track your favorite cryptocurrencies in real-time.</Text>
                </View>

                <Button
                    title="Get Started"
                    onPress={() => navigation.navigate("Signup")}
                    style={welcomeStyles.button}
                />

                <View style={welcomeStyles.footer}>
                    <Text style={welcomeStyles.footerText}>Already have an account?</Text>
                    <Pressable onPress={() => navigation.navigate("Login")}>
                        <Text style={welcomeStyles.loginText}>Login</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}

export default Welcome;
