import { StatusBar } from "react-native";
import { AuthProvider } from "./src/contexts/auth";
import * as SplashScreen from "expo-splash-screen";

import useCachedResources from "./src/hooks/useCachedResources";
import Route from "./src/routes/Route";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <AuthProvider>
        <StatusBar barStyle="light-content" />
        <Route />
      </AuthProvider>
    );
  }
}
