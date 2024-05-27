import { View, Text, Image, Pressable, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import COLORS from '../../constants/colors';
import { Ionicons } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';
import Button from '../../components/Button';
import { signupStyles } from './styles';

const Signup = ({ navigation }) => {
    const [isPasswordShown, setIsPasswordShown] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    return (
        <SafeAreaView style={signupStyles.container}>
            <View style={signupStyles.innerContainer}>
                <View style={signupStyles.headerContainer}>
                    <Text style={signupStyles.headerText}>Create Account</Text>
                </View>

                <View style={signupStyles.inputContainer}>
                    <Text style={signupStyles.inputLabel}>Email address</Text>
                    <View style={signupStyles.inputWrapper}>
                        <TextInput
                            placeholder='Enter your email address'
                            placeholderTextColor={COLORS.black}
                            keyboardType='email-address'
                            style={signupStyles.inputField}
                        />
                    </View>
                </View>

                <View style={signupStyles.inputContainer}>
                    <Text style={signupStyles.inputLabel}>Password</Text>
                    <View style={signupStyles.passwordWrapper}>
                        <TextInput
                            placeholder='Enter your password'
                            placeholderTextColor={COLORS.black}
                            secureTextEntry={!isPasswordShown}
                            style={signupStyles.passwordInput}
                        />
                        <TouchableOpacity
                            onPress={() => setIsPasswordShown(!isPasswordShown)}
                            style={signupStyles.togglePassword}
                        >
                            <Ionicons name={isPasswordShown ? "eye-off" : "eye"} size={24} color={COLORS.black} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={signupStyles.checkboxContainer}>
                    <Checkbox
                        style={signupStyles.checkbox}
                        value={isChecked}
                        onValueChange={setIsChecked}
                        color={isChecked ? COLORS.primary : undefined}
                    />
                    <Text>I agree to the terms and conditions</Text>
                </View>

                <Button
                    title="Sign Up"
                    style={signupStyles.button}
                />

                <View style={signupStyles.dividerContainer}>
                    <View style={signupStyles.divider} />
                    <Text style={signupStyles.dividerText}>Or Sign up with</Text>
                    <View style={signupStyles.divider} />
                </View>

                <View style={signupStyles.socialButtonsContainer}>
                    <TouchableOpacity
                        onPress={() => console.log("Pressed")}
                        style={signupStyles.socialButton}
                    >
                        <Image
                            source={require("../../assets/facebook.png")}
                            style={signupStyles.socialIcon}
                            resizeMode='contain'
                        />
                        <Text>Facebook</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => console.log("Pressed")}
                        style={signupStyles.socialButton}
                    >
                        <Image
                            source={require("../../assets/google.png")}
                            style={signupStyles.socialIcon}
                            resizeMode='contain'
                        />
                        <Text>Google</Text>
                    </TouchableOpacity>
                </View>

                <View style={signupStyles.footer}>
                    <Text style={signupStyles.footerText}>Already have an account ? </Text>
                    <Pressable onPress={() => navigation.navigate("Login")}>
                        <Text style={signupStyles.loginText}>Login</Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Signup;
