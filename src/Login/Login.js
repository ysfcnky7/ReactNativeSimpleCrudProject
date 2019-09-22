import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TextInput,
    ImageBackground,
    Dimensions,
    TouchableOpacity,
} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { GoogleSignin, GoogleSigninButton, statusCodes } from 'react-native-google-signin';
import Register from '../Register/Register';
var FBLoginButton = require('./FBLoginButton');
const SQLite = require('react-native-sqlite-storage')
const websqlite = require('websqlite');
var SqlService = new websqlite();

const { width: WIDTH } = Dimensions.get('window')

export default class Login extends Component {


    signIn = async () => {
        try {
            GoogleSignin.configure({
                webClientId: '578262389789-bql97go5gdbgre61pid35ua1nu1cpce1.apps.googleusercontent.com'
            })
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            this.setState({ userInfo });
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
            } else if (error.code === statusCodes.IN_PROGRESS) {
                // operation (f.e. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                // play services not available or outdated
            } else {
                // some other error happened
            }
        }
    };
    render() {

        const { navigate } = this.props.navigation;

        return (
            <ImageBackground source={require('../Images/Background/background.jpg')} style={styles.backgroundContaniner}>
                <View style={styles.logoContainer}>
                    <Image source={require('../Images/Logo/san.png')} style={styles.logo} />
                    <Text style={styles.logoText}>Tourism Software Group</Text>
                </View>
                <View >
                    <TextInput
                        style={styles.input}
                        placeholder={'Kullanıcı adı veya email'}
                        underlineColorAndroid='transparent' />
                </View>
                <View >
                    <TextInput
                        style={styles.input}
                        placeholder={'Şifre'}
                        underlineColorAndroid='transparent'
                        secureTextEntry />
                </View>
                <View style={{ flexDirection: "row" }}>
                    <View style={{ flex: 2 }}>
                        <TouchableOpacity style={styles.buttonLoginUser}>
                            <Text style={styles.loginUserButtonText}>GİRİŞ</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1 }}>
                        <TouchableOpacity
                            accessible={true}
                        >
                            <View style={styles.forgotButton}>
                                <Text style={styles.forgotButtonText}>Şifremi unuttum</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                <View >
                    <TouchableOpacity onPress={() =>
                            this.props.navigation.navigate('Register')
                        } >
                        <View style={styles.buttonRegister}  >
                            <Text style={styles.registerButtonText}>Hesap Oluştur</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View>
                    <FBLoginButton />
                </View>
                <View>
                    <TouchableOpacity >
                        <View>
                            <GoogleSigninButton
                                style={{ width: 197, height: 50 }}
                                size={GoogleSigninButton.Size.Wide}
                                color={GoogleSigninButton.Color.Dark}
                                onPress={this.signIn.bind(this)}
                            />

                        </View>
                    </TouchableOpacity>
                </View>


            </ImageBackground>

        );
    }
}


const styles = StyleSheet.create({
    backgroundContaniner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        height: 50,
        width: WIDTH - 55,
        backgroundColor: 'rgba(127, 143, 166,0.7)',
        borderRadius: 45,
        marginBottom: 10,
        paddingHorizontal: 12,
        paddingLeft: 45,
        fontSize: 20,
        color: 'white'

    },
    buttonLoginUser: {
        height: 50,
        width: WIDTH - 190,
        backgroundColor: 'rgba(216, 67, 21,0.75)',
        borderRadius: 45,
        marginBottom: 10,
        marginLeft: 40,
        alignItems: 'center',
        justifyContent: 'center',

    },
    loginUserButtonText: {
        color: '#FFFFFF',
        fontSize: 20,
    },
    buttonRegister: {
        height: 50,
        width: WIDTH - 80,
        backgroundColor: 'rgba(253, 203, 110,0.75)',
        borderRadius: 45,
        marginBottom: 10,
        paddingHorizontal: 12,
        alignItems: 'center',
        fontSize: 20,
        justifyContent: 'center',
    },
    logo: {
        height: 100,
        width: 255,
    },
    logoContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoText: {
        color: 'black',
        fontSize: 30,
        fontWeight: '500',
        marginTop: 10,
        opacity: 0.5
    },
    forgotButton: {
        marginBottom: 30,
        height: 15,
        justifyContent: 'center',
        paddingTop: 20,
        width: WIDTH - 300,

    },
    forgotButtonText: {
        color: 'white',
        fontSize: 15,
        borderBottomWidth: 1,
        borderBottomColor: 'white',

    },
    registerButtonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: '500',
    },
    facebookButton: {
        borderRadius: 45,
        backgroundColor: 'red'
    },
    googleButton: {
        width: 192,
        height: 48,
        color: GoogleSigninButton.Color.Dark
    }

});

