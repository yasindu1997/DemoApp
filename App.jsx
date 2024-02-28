import { Text, View, KeyboardAvoidingView } from "react-native";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import LayOut from "./pages/LayOut";
import AboutPage from "./pages/AboutPage";

function App() {
    return (
        <View style={{ flex: 1 }}>
            <AboutPage />
        </View>
    );
}

export default App;