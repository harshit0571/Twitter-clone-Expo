import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Following from "../../../components/Home/Following";
import ForYou from "../../../components/Home/ForYou";

const Tab = createMaterialTopTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{
      tabBarActiveTintColor:"white",
      tabBarStyle:{backgroundColor:"black", paddingBottom:10, borderBottomLeftRadius:20, borderBottomRightRadius:20},
      tabBarPressColor:"gray",
      
    }}>
      <Tab.Screen name="Following" component={Following} />
      <Tab.Screen name="For You" component={ForYou} />
    </Tab.Navigator>
  );
}
