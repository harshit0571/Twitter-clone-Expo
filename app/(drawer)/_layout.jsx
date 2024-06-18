import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import CustomHeader from "../../components/CustomHeader";

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name="(tabs)" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: "Home",
            // title: 'overview',
            // headerShown:true,
            // headerStyle: {
            //   backgroundColor: "#000000",
            // },
            // headerTitleStyle:{alignSelf:"center", flex:1},
            // headerTitle: ({}) => <CustomHeader title={"Home"} />,
            header: () => <CustomHeader />,
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
