import { View, Text, Image, Pressable, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import COLORS from '../../constants/colors';
import { Ionicons } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';
import Button from '../../components/Button';
import { loginStyles } from './styles';

const Login = ({ navigation }) => {
    const [isPasswordShown, setIsPasswordShown] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    return (
        <SafeAreaView style={loginStyles.container}>
            <View style={loginStyles.innerContainer}>
                <View style={loginStyles.headerContainer}>
                    <Text style={loginStyles.headerText}>
                        Hi Welcome Back! 👋
                    </Text>
                </View>

                <View style={loginStyles.inputContainer}>
                    <Text style={loginStyles.inputLabel}>Email address</Text>
                    <View style={loginStyles.inputWrapper}>
                        <TextInput
                            placeholder='Enter your email address'
                            placeholderTextColor={COLORS.black}
                            keyboardType='email-address'
                            style={loginStyles.inputField}
                        />
                    </View>
                </View>

                <View style={loginStyles.inputContainer}>
                    <Text style={loginStyles.inputLabel}>Password</Text>
                    <View style={loginStyles.passwordWrapper}>
                        <TextInput
                            placeholder='Enter your password'
                            placeholderTextColor={COLORS.black}
                            secureTextEntry={!isPasswordShown}
                            style={loginStyles.passwordInput}
                        />
                        <TouchableOpacity
                            onPress={() => setIsPasswordShown(!isPasswordShown)}
                            style={loginStyles.togglePassword}
                        >
                            <Ionicons name={isPasswordShown ? "eye-off" : "eye"} size={24} color={COLORS.black} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={loginStyles.checkboxContainer}>
                    <Checkbox
                        style={loginStyles.checkbox}
                        value={isChecked}
                        onValueChange={setIsChecked}
                        color={isChecked ? COLORS.primary : undefined}
                    />
                    <Text>Remember Me</Text>
                </View>

                <Button
                    title="Login"
                    style={loginStyles.button}
                />

                <View style={loginStyles.dividerContainer}>
                    <View style={loginStyles.divider} />
                    <Text style={loginStyles.dividerText}>Or Login with</Text>
                    <View style={loginStyles.divider} />
                </View>

                <View style={loginStyles.socialButtonsContainer}>
                    <TouchableOpacity
                        onPress={() => console.log("Pressed")}
                        style={loginStyles.socialButton}
                    >
                        <Image
                            source={require("../../assets/facebook.png")}
                            style={loginStyles.socialIcon}
                            resizeMode='contain'
                        />
                        <Text>Facebook</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => console.log("Pressed")}
                        style={loginStyles.socialButton}
                    >
                        <Image
                            source={require("../../assets/google.png")}
                            style={loginStyles.socialIcon}
                            resizeMode='contain'
                        />
                        <Text>Google</Text>
                    </TouchableOpacity>
                </View>

                <View style={loginStyles.footer}>
                    <Text style={loginStyles.footerText}>Don't have an account?</Text>
                    <Pressable onPress={() => navigation.navigate("Signup")}>
                        <Text style={loginStyles.registerText}>Register</Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default Login;
