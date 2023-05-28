import { SelectedItem } from "./atoms/SelectedItem";
import AppFullWidthHeight from "./atoms/Utility/AppBackground";
import "./index.css";
import { LoginPage } from "./screens/LoginPage";


function App() {
    return (
    <AppFullWidthHeight>
        <LoginPage/>
    </AppFullWidthHeight>
    );
}

export default App;


// 
// 
// 
/*
// 
    const { openMessageBox, MessageBox } = useMessageBox({ text: "Hello"});
    const handleClick = ()=> {
        openMessageBox();
        setTimeout(()=> console.log("dupcia"), 500);
    <AppBackground>
        <button onClick={handleClick}> KLIK</button>
          <MessageBox/>
    </AppBackground>import { useMessageBox } from "./components/MessageBox/MessageBox";
import { AppBackground } from "./atoms/Utility/AppBackground";
import "./index.css";


function App() {
    const { openMessageBox, MessageBox } = useMessageBox({ text: "Hello"});
    const handleClick = ()=> {
        openMessageBox();
        setTimeout(()=> console.log("dupcia"), 500);
    }
    return (
    <AppBackground>
        <button onClick={handleClick}> KLIK</button>
          <MessageBox/>
    </AppBackground>
    );
}

export default App;


*/