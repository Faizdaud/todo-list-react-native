import {createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from "react-navigation"; 
import Home from './components/Home'; 
import Item from './components/Item'; 
import Detail from './components/Detail'; 



const screens = { 
    Home: { 
        screen: Home 
    }, 
    Item: { 
        screen: Item 
    } ,
    Detail: { 
        screen:Detail
    } ,
} 


const HomeStack = createStackNavigator(screens, {defaultNavigationOptions:{ headerStyle:{backgroundColor:'pink'} }});  



export default createAppContainer(HomeStack);