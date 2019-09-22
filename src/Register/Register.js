import React, { Component } from 'react';
import DateTimePicker from "react-native-modal-datetime-picker";
// import DateTimePicker from "../../node_modules/react-native-gesture-handler/";
import {
    StyleSheet,
    View,
    Text,
    Image,
    TextInput,
    ImageBackground,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import Login from '../Login/Login';
const { width: WIDTH } = Dimensions.get('window')

export default class Register extends Component {

    constructor() {
        super()
        this.state = {
            isVisible: false
        }
    }
    handlePicker = () => {
        this.setState({
            isVisible: false
        })
    }
    showPicker = () => {
        this.setState({
            isVisible: true
        })
    }
    hidePicker = () => {
        this.setState({
            isVisible: false
        })
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <ImageBackground source={require('../Images/Background/background.jpg')} style={styles.backgroundContaniner}>
                <View style={styles.logoContainer}>
                    <Image source={require('../Images/Logo/san.png')} style={styles.logo} />
                    <Text style={styles.logoText}>Tourism Software Group</Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                    <View style={{ flex: 1 }}>
                        <TextInput
                            style={styles.inputName}
                            placeholder={'İsim  *'}
                            underlineColorAndroid='transparent'
                            placeholderTextColor='white' />
                    </View>
                    <View style={{ flex: 1 }}>
                        <TextInput
                            style={styles.inputSurname}
                            placeholder={'Soyisim  *'}
                            underlineColorAndroid='transparent'
                            placeholderTextColor='white' />
                    </View>
                </View>
                <View style={{ flexDirection: "row" }}>
                    <View style={{ flex: 1 }} >
                        <TextInput
                            style={styles.userName}
                            placeholder={'Kullanıcı adı  *'}
                            underlineColorAndroid='transparent'
                            placeholderTextColor='white' />
                    </View>
                    <View style={{ flex: 1 }} >
                        <TouchableOpacity onPress={this.showPicker}>
                            <View style={styles.dateButton}>
                                <Text style={styles.registerButtonText}>Doğum Tarihi</Text>
                                <DateTimePicker
                                    isVisible={this.state.isVisible}
                                    onConfirm={this.handlePicker}
                                    onCancel={this.hidePicker}
                                    datePickerModeAndroid={"spinner"}
                                />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View >
                    <TextInput
                        style={styles.input}
                        placeholder={'email  *'}
                        underlineColorAndroid='transparent'
                        placeholderTextColor='white' />
                </View>

                <View >
                    <TextInput
                        style={styles.input}
                        placeholder={'Şifre  *'}
                        underlineColorAndroid='transparent'
                        placeholderTextColor='white'
                        secureTextEntry />
                </View>
                <View >
                    <TextInput
                        style={styles.input}
                        placeholder={'Şifre Tekrar  *'}
                        underlineColorAndroid='transparent'
                        placeholderTextColor='white'
                        secureTextEntry />
                </View>
                <View >
                    <TouchableOpacity>
                        <View style={styles.buttonRegister}>
                            <Text style={styles.registerButtonText}>Hesap Oluştur</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() =>
                            this.props.navigation.navigate('Login')
                        }>
                        <View style={styles.buttonLogin}>
                            <Text style={styles.registerButtonText}>Geri Dön</Text>
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
        borderBottomColor: 'white',
        marginBottom: 3,
        paddingHorizontal: 12,
        paddingLeft: 45,
        fontSize: 20,
        color: 'white',
        borderRadius: 45,
        backgroundColor: '#3c6382',

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
        marginBottom: 3,
        paddingHorizontal: 12,
        alignItems: 'center',
        fontSize: 20,
        justifyContent: 'center',
    },
    buttonLogin: {
        height: 50,
        width: WIDTH - 80,
        backgroundColor: 'rgba(216, 67, 21,0.75)',
        borderRadius: 45,
        marginBottom: 3,
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
    registerButtonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: '500',
    },
    inputName: {
        height: 50,
        width: WIDTH - 240,
        borderBottomColor: 'white',
        marginBottom: 3,
        marginLeft: 30,
        paddingHorizontal: 12,
        paddingLeft: 45,
        fontSize: 20,
        color: 'white',
        borderRadius: 45,
        backgroundColor: '#3c6382',
    },
    inputSurname: {
        height: 50,
        width: WIDTH - 240,
        borderBottomColor: 'white',
        marginBottom: 3,
        paddingHorizontal: 12,
        paddingLeft: 45,
        fontSize: 20,
        color: 'white',
        borderRadius: 45,
        backgroundColor: '#3c6382',
    },
    dateButton: {
        height: 50,
        width: WIDTH - 310,
        borderBottomColor: 'white',
        marginBottom: 3,
        marginLeft: 65,
        paddingHorizontal: 12,
        paddingLeft: 15,
        fontSize: 20,
        color: 'white',
        backgroundColor: '#0097e6',
    },
    userName: {
        height: 50,
        width: WIDTH - 170,
        borderBottomColor: 'white',
        marginBottom: 3,
        marginLeft: 27,
        paddingHorizontal: 12,
        paddingLeft: 45,
        fontSize: 20,
        color: 'white',
        borderRadius: 45,
        backgroundColor: '#3c6382',
    },
});