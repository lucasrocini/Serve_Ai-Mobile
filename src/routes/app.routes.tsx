import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Dashboard from '../pages/Dashboard';
import Order from '../pages/Order'
import ConfirmOrder from '../pages/ConfirmOrder'

export type StackPramsList = {
  Dashboard: undefined;
  Order: {
    number: number | string;
    order_id: string;
  };
  ConfirmOrder: {
    number: number | string;
    order_id: string;
  };
};

const Stack = createNativeStackNavigator<StackPramsList>();

function AppRoutes(){
  return(
    <Stack.Navigator>
      <Stack.Screen 
        name="Dashboard" 
        component={Dashboard} 
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Order"
        component={Order}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="ConfirmOrder"
        component={ConfirmOrder}
        options={{
          title: 'Finalizando',
          headerStyle:{
            backgroundColor: '#1d1d2e'
          },
          headerTintColor: '#FFF'
        }}
      />
    </Stack.Navigator>
  )
}

export default AppRoutes;

