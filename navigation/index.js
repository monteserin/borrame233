import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabsNavigator from './bottomtabs/TabsNavigator';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../app/firebase';
import AuthScreen from '../screens/AuthScreen';

const MainNavigator = () => {
    const [isLogged, setIsLogged] = useState(false);

    console.log('isLogged', isLogged)
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                console.log('user', user);
                const uid = user.uid;
                setIsLogged(true);
            } else {
                console.log("No user logged");
                setIsLogged(false);
            }
        });
    }, []);
    return (<NavigationContainer>
        {isLogged ?
            <TabsNavigator /> :
            <AuthScreen />
        }
    </NavigationContainer>)

}

export default MainNavigator;