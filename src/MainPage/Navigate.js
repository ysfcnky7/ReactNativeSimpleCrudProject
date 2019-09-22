import React, { Component } from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TextInput,
    ImageBackground,
    Dimensions,
    TouchableOpacity,
    Button,
    
} from 'react-native';
import Login from '../Login/Login';
import Register from '../Register/Register';
import UpdateUser from '../Users/UpdateUser';
import ViewUser from '../Users/ViewUser';
import DeleteUser from '../Users/DeleteUser';
import ViewAllUser from '../Users/ViewAllUser';


const MainNavigator = createStackNavigator({
    Login: {screen: Login},
    Register: {screen: Register},
    ViewUser: {
      screen: ViewUser,
      navigationOptions: {
        title: 'View User',
        headerStyle: { backgroundColor: '#f05555' },
        headerTintColor: '#ffffff',
      },
    }, 
    ViewAll: {
      screen: ViewAllUser,
      navigationOptions: {
        title: 'View All User',
        headerStyle: { backgroundColor: '#f05555' },
        headerTintColor: '#ffffff',
      },
    },
    Update: {
      screen: UpdateUser,
      navigationOptions: {
        title: 'Update User',
        headerStyle: { backgroundColor: '#f05555' },
        headerTintColor: '#ffffff',
      },
    },
    Delete: {
      screen: DeleteUser,
      navigationOptions: {
        title: 'Delete User',
        headerStyle: { backgroundColor: '#f05555' },
        headerTintColor: '#ffffff',
      },
    }, 
  });
  
  

  class Navigate extends Component {
    static navigationOptions = {
        title: 'Welcome',
      };
    render() {
      const {navigate} = this.props.navigation;
      return (
        <View>
            <Button
          title="Go to Jane's profile"
          onPress={() => navigate('Login', {name: 'Jane'})}
        />
        <Button
          title="Go to Jane's profile"
          onPress={() => navigate('Register', {name: 'Jane'})}
        />
        </View>
        
      );
    }
  }
  const App = createAppContainer(MainNavigator);
  
  export default App;