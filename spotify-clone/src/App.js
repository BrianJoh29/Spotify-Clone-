import React from 'react';
import SearchPage from './pages/SearchPage';
import TopBar from './webplayer/TopBar';
import LoginPage from './creation/LoginPage';
import SignUp from './creation/SignUp';
import { Routes, Route} from "react-router-dom";


const App = () => {
    return (
        <div className="App">
            <Routes>
                <Route path="/" exact element={ <LoginPage/> } />
                <Route path="/signup" exact element ={ <SignUp/>} />
                <SearchPage />
            </Routes>
        </div>
    );
}

export default App;
