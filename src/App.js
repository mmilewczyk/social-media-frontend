import "./App.css"
import Home from "./pages/home/Home";
import Auth from "./pages/auth/Auth";
import {Navigate, Route, Routes} from "react-router-dom";
import {useSelector} from "react-redux";
import Profile from "./pages/profile/Profile";
import NavBar from "./components/NavBar/NavBar";
import Group from "./pages/group/Group";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Groups from "./pages/groups/Groups";
import Events from "./pages/events/Events";
import Event from "./pages/event/Event";

function App() {
    const user = useSelector((state) => state.authReducer.authData)
    return (
        <>
            <NavBar/>
            <div className="App">
                <Routes>
                    <Route exact path="/" element={user ? <Navigate to={"home"}/> : <Navigate to={"auth"}/>}/>
                    <Route exact path="/home" element={user ? <Home/> : <Navigate to={"../auth"}/>}/>
                    <Route exact path="/auth" element={user ? <Navigate to={"../home"}/> : <Auth/>}/>
                    <Route exact path="/profile/:id" element={user ? <Profile/> : <Navigate to={"../auth"}/>}/>
                    <Route exact path="/group/:groupId" element={user ? <Group/> : <Navigate to={"../auth"}/>}/>
                    <Route exact path="/event/:eventId" element={user ? <Event/> : <Navigate to={"../auth"}/>}/>
                    <Route exact path="/groups" element={user ? <Groups/> : <Navigate to={"../auth"}/>}/>
                    <Route exact path="/events" element={user ? <Events/> : <Navigate to={"../auth"}/>}/>
                    <Route path="*" element={<NotFoundPage/>}/>
                </Routes>
            </div>
        </>
    );
}

export default App;