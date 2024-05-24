import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import COLORS from '../../constants/colors';
import Button from '../../components/Button';

const Welcome = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View>
                <Image
                    source={require("../../assets/welcome.png")}
                    style={{
                        height: 300,
                        width: 300,
                        position: "absolute",
                        top: 140,
                        left: 100,
                        transform: [
                            { translateX: -50 },
                            { translateY: -20 },
                        ]
                    }}
                />
            </View>

            {/* content  */}

            <View style={{
                paddingHorizontal: 22,
                position: "absolute",
                top: 480,
                width: "100%"
            }}>
                <Text style={{
                    fontSize: 40,
                    fontWeight: 800,
                    color: COLORS.primary
                }}>Let's Get Started</Text>

                <View style={{ marginVertical: 10 }}>
                    <Text style={{
                        fontSize: 16,
                        color: COLORS.black,
                        marginVertical: 4
                    }}>Connect with each other with chatting</Text>
                    <Text style={{
                        fontSize: 16,
                        color: COLORS.black,
                    }}>Calling, Enjoy Safe and private texting</Text>
                </View>

                <Button
                    title="Join Now"
                    onPress={() => navigation.navigate("Signup")}
                    style={{
                        marginTop: 22,
                        width: "100%",
                    }}
                />

                <View style={{
                    flexDirection: "row",
                    marginTop: 12,
                    justifyContent: "center"
                }}>
                    <Text style={{
                        fontSize: 16,
                        color: COLORS.black
                    }}>Already have an account ?</Text>
                    <Pressable
                        onPress={() => navigation.navigate("Login")}
                    >
                        <Text style={{
                            fontSize: 16,
                            color: COLORS.primary,
                            fontWeight: "bold",
                            marginLeft: 4
                        }}>Login</Text>
                    </Pressable>

                </View>
            </View>
        </View>
    )
}

export default Welcome