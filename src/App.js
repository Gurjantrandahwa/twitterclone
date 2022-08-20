import './App.css';
import Sidebar from "./Components/Sidebar/Sidebar";
import Feed from "./Components/Feed/Feed";
import Widgets from "./Components/Widgets/Widgets";

function App() {
    return <div className={"app"}>
        {/*Sidebar*/}
        <Sidebar/>
        {/* Feed*/}
        <Feed/>
        {/*  widgets*/}
        <Widgets/>
    </div>
}

export default App;
