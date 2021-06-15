// libraries
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather, FontAwesome } from '@expo/vector-icons';

// screens
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ListScreen from '../screens/ListScreen/ListScreen';

const { Navigator, Screen } = createBottomTabNavigator();

function TabNavigation() {
    return (
        <Navigator
            tabBarOptions={{
                style: {
                    elevation: 0,
                    shadowOpacity: 0,
                    heigh: 64,
                },

                tabStyle: {
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                },

                iconStyle: {
                    flex: 0,
                    height: 20,
                    width: 20,
                },

                labelStyle: {
                    fontWeight: 'bold',
                    fontSize: 13,
                    marginLeft: 16
                },

                inactiveBackgroundColor: '#FAFAFC',
                activeBackgroundColor: '#EBEBF5',
                inactiveTintColor: '#8BC3E0',
                activeTintColor: '#0073ff',
            }}
        >
            <Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Mapa',
                    tabBarIcon: ({ color, size, focused }) => {
                        return(
                            <FontAwesome name="map-o" size={size} color={focused ? '#0073ff' : color} />
                        );
                    }
                }}
            />
            
            <Screen
                name="ListScreen"
                component={ListScreen}
                options={{
                    tabBarLabel: 'Lista de Pontos',
                    tabBarIcon: ({ color, size, focused }) => {
                        return(
                            <Feather name="list" size={size} color={focused ? '#0073ff' : color} />
                        );
                    }
                }}
            />
        </Navigator>
    );
}

export default TabNavigation;
