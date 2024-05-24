import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import COLORS from '../../constants/colors';
import Button from '../../components/Button';
import Checkbox from "expo-checkbox"

const Signup = ({ navigation }) => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordShown, setIsPasswordShown] = useState(false);
    const [phoneNumberError, setPhoneNumberError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [isChecked, setIsChecked] = useState(false);

    const formatPhoneNumber = (phoneNumber) => {
        const cleaned = ('' + phoneNumber).replace(/\D/g, '');
        const match = cleaned.match(/^0?(\d{9})$/); // Chỉ lấy 9 số sau
        if (match) {
            return `+84 ${match[1].slice(0, 3)}-${match[1].slice(3, 6)}-${match[1].slice(6)}`;
        }
        return null;
    };

    const handleSignUp = () => {
        let valid = true;

        if (phoneNumber.length !== 10) {
            setPhoneNumberError('Phone number must be 10 digits');
            valid = false;
        } else {
            setPhoneNumberError('');
        }

        if (password === '') {
            setPasswordError('Password cannot be empty');
            valid = false;
        } else {
            setPasswordError('');
        }

        if (valid) {
            const formattedPhoneNumber = formatPhoneNumber(phoneNumber);
            if (formattedPhoneNumber) {
                navigation.navigate('Otp', { phoneNumber: formattedPhoneNumber });
            } else {
                // Handle invalid phone number
            }
        }
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <View style={{ flex: 1, marginHorizontal: 22 }}>
                <View style={{ marginTop: 22 }}>
                    <Text style={{ fontSize: 40, fontWeight: '800', marginTop: 12, color: COLORS.primary }}>
                        Create Account
                    </Text>
                </View>

                <View style={{ marginBottom: 12 }}>
                    <Text style={{ fontSize: 16, fontWeight: '400', marginVertical: 8 }}>Mobile Number</Text>
                    <View style={{
                        width: "100%",
                        height: 48,
                        borderColor: COLORS.black,
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        paddingLeft: 22
                    }}>
                        <TextInput
                            placeholder='+84'
                            placeholderTextColor={COLORS.black}
                            keyboardType='numeric'
                            style={{
                                width: "12%",
                                borderRightWidth: 1,
                                borderLeftColor: COLORS.grey,
                                height: "100%"
                            }}
                        />
                        <TextInput
                            placeholder='Enter your phone number'
                            placeholderTextColor={COLORS.black}
                            keyboardType='numeric'
                            style={{
                                width: "80%"
                            }}
                            onChangeText={text => setPhoneNumber(text)}
                        />
                    </View>
                    <Text style={{ color: 'red' }}>{phoneNumberError}</Text>
                </View>

                <View style={{ marginBottom: 12 }}>
                    <Text style={{ fontSize: 16, fontWeight: '400', marginVertical: 8 }}>Password</Text>
                    <View style={{
                        width: "100%",
                        height: 48,
                        borderColor: COLORS.black,
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 22
                    }}>
                        <TextInput
                            placeholder='Enter your password'
                            placeholderTextColor={COLORS.black}
                            secureTextEntry={isPasswordShown}
                            style={{
                                width: "100%"
                            }}
                            onChangeText={text => setPassword(text)} />

                        <TouchableOpacity
                            onPress={() => setIsPasswordShown(!isPasswordShown)}
                            style={{
                                position: "absolute",
                                right: 12
                            }}>
                            {
                                isPasswordShown == true ? (
                                    <Ionicons name="eye-off" size={24} color={COLORS.black} />
                                ) : (
                                    <Ionicons name="eye" size={24} color={COLORS.black} />
                                )
                            }
                        </TouchableOpacity>
                    </View>
                    <Text style={{ color: 'red' }}>{passwordError}</Text>
                </View>

                <Button
                    title="Sign Up"
                    style={{ marginTop: 18, marginBottom: 4 }}
                    onPress={handleSignUp}
                />

                <View style={{
                    flexDirection: 'row',
                    marginVertical: 6
                }}>
                    <Checkbox
                        style={{ marginRight: 8 }}
                        value={isChecked}
                        onValueChange={setIsChecked}
                        color={isChecked ? COLORS.primary : undefined}
                    />

                    <Text>I aggree to the terms and conditions</Text>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 20 }}>
                    <View style={{ flex: 1, height: 1, backgroundColor: COLORS.grey, marginHorizontal: 10 }} />
                    <Text style={{ fontSize: 14 }}>Or Sign up with</Text>
                    <View style={{ flex: 1, height: 1, backgroundColor: COLORS.grey, marginHorizontal: 10 }} />
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    {/* Facebook and Google buttons */}
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'center', marginVertical: 22 }}>
                    <Text style={{ fontSize: 16, color: COLORS.black }}>Already have an account</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text style={{ fontSize: 16, color: COLORS.primary, fontWeight: 'bold', marginLeft: 6 }}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Signup;
