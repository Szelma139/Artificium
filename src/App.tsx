import { MessageBox } from "./components/MessageBox/MessageBox";
import { AppBackground } from "./atoms/Utility/AppBackground";
import "./index.css";

function App() {
    return (
    <AppBackground>
          <MessageBox/>
    </AppBackground>
    );
}

export default App;
