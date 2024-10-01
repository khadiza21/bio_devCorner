import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import UserAuthForm from "./pages/userAuthForm";

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Navbar></Navbar>} >
                    <Route path="signin" element={<UserAuthForm type="sign-in"></UserAuthForm>} />
                    <Route path="signup" element={<UserAuthForm type="Sign-up"></UserAuthForm>} />
                </Route>
            </Routes>


        </>

    )
}

export default App;