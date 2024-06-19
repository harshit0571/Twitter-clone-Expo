import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import CustomHeader from "../../components/CustomHeader";
import CustomDrawer from "../../components/CustomDrawer";

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1}}>
      <Drawer drawerContent={(props) => <CustomDrawer {...props} />}>
        <Drawer.Screen
          name="(tabs)" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: "Home",
            header: () => <CustomHeader />,
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
