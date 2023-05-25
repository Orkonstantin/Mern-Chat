// origin

import {useContext, useState} from "react";
import axios from "axios";
import {UserContext} from "./UserContext.jsx";

export default function RegisterAndLoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoginOrRegister, setIsLoginOrRegister] = useState('login');
    const {setUsername:setLoggedInUsername, setId} = useContext(UserContext);
    async function handleSubmit(ev) {
        ev.preventDefault();
        const url = isLoginOrRegister === 'register' ? 'register' : 'login';
        const {data} = await axios.post(url, {username,password});
        setLoggedInUsername(username);
        setId(data.id);
    }
    return (
        <div className="bg-blue-50 h-screen flex items-center">
            <form className="w-64 mx-auto mb-12" onSubmit={handleSubmit}>
                <input value={username}
                       onChange={ev => setUsername(ev.target.value)}
                       type="text" placeholder="username"
                       className="block w-full rounded-sm p-2 mb-2 border" />
                <input value={password}
                       onChange={ev => setPassword(ev.target.value)}
                       type="password"
                       placeholder="password"
                       className="block w-full rounded-sm p-2 mb-2 border" />
                <button className="bg-blue-500 text-white block w-full rounded-sm p-2">
                    {isLoginOrRegister === 'register' ? 'Register' : 'Login'}
                </button>
                <div className="text-center mt-2">
                    {isLoginOrRegister === 'register' && (
                        <div>
                            Already a member?
                            <button className="ml-1" onClick={() => setIsLoginOrRegister('login')}>
                                Login here
                            </button>
                        </div>
                    )}
                    {isLoginOrRegister === 'login' && (
                        <div>
                            Dont have an account?
                            <button className="ml-1" onClick={() => setIsLoginOrRegister('register')}>
                                Register
                            </button>
                        </div>
                    )}
                </div>
            </form>
        </div>
    );
}

// test 1

// import {useContext, useState} from "react";
// import axios from "axios";
// import {UserContext} from "./UserContext.jsx";
// import Navbar from "./Navbar.jsx";
// import Header from "./Header.jsx";
// import Footer from "./Footer.jsx";
//
// export default function RegisterAndLoginForm(){
//     const [username,setUsername] = useState('');
//     const [password,setPassword] = useState('');
//     const [isLoginOrRegister,setIsLoginOrRegister] = useState('login');
//     const {setUsername:setLoggedInUsername,setId} = useContext(UserContext);
//     async function handleSubmit(ev) {
//         ev.preventDefault();
//         try{
//             const url = isLoginOrRegister === 'register' ? 'register' : 'login';
//             const {data} = await axios.post(`http://localhost:4040/${url}`, {
//                 username,
//                 password
//             });
//             setLoggedInUsername(username);
//             setId(data.id);
//         } catch (e) {
//             console.log("Request to handle submit failed:",e);
//         }
//
//     }
//     return(
//         <div>
//             {/*<Navbar />*/}
//             {/*<Header title="Register and Login" />*/}
//             <div className="bg-blue-50 h-screen flex items-center">
//                 <div className="w-96 mx-auto bg-white rounded-lg shadow-lg p-8">
//                     {isLoginOrRegister === 'register' ? (
//                         <>
//                             <h2 className="text-3xl font-bold mb-4">Register</h2>
//                         </>
//                     ):
//                         <>
//                             <h2 className="text-3xl font-bold mb-4">Login</h2>
//                         </>
//                     }
//                     <form className="w-64 mx-auto mb-12" onSubmit={handleSubmit}>
//                         <input value={username}
//                                onChange={ev => setUsername(ev.target.value)}
//                                type="text" placeholder="username"
//                                className="block w-full rounded-sm p-2 mb-2 border"/>
//                         <input value={password}
//                                onChange={ev => setPassword(ev.target.value)}
//                                type="password" placeholder="password"
//                                className="block w-full rounded-sm p-2 mb-2 border"/>
//                         <button className="bg-blue-500 text-white block w-full rounded-sm p-2">
//                             {isLoginOrRegister === 'register' ? 'Register' : 'Login'}
//                         </button>
//                         <div className="text-center mt-4">
//                             {isLoginOrRegister === 'register' && (
//                                 <p>
//                                     Already a member?{" "}
//                                     <button className="text-blue-500 underline" onClick={ ()=> setIsLoginOrRegister('login') }>
//                                         Login here
//                                     </button>
//                                 </p>
//                             )}
//                             {isLoginOrRegister === 'login' && (
//                                 <p>
//                                     Don't have an account?{" "}
//                                     <button className="text-blue-500 underline" onClick={ ()=> setIsLoginOrRegister('register') }>
//                                         Register
//                                     </button>
//                                 </p>
//                             )}
//                         </div>
//                     </form>
//             </div>
//                 </div>
//             {/*<Footer/>*/}
//         </div>
//     );
// }

//test 2

// import { useContext, useState } from "react";
// import axios from "axios";
// import { UserContext } from "./UserContext.jsx";
// import Form from "./Form.jsx";
// import ToggleButton from "./ToggleButton.jsx";
//
// export default function RegisterAndLoginForm() {
//     const [isRegisterMode, setIsRegisterMode] = useState(false);
//     const { setUsername: setLoggedInUsername, setId } = useContext(UserContext);
//
//     const handleSubmit = async (username, password) => {
//         try {
//             const url = isRegisterMode ? "register" : "login";
//             const { data } = await axios.post(`http://localhost:4040/${url}`, {
//                 username,
//                 password,
//             });
//             setLoggedInUsername(username);
//             setId(data.id);
//         } catch (error) {
//             console.log("Request to handle submit failed:", error);
//         }
//     };
//
//     const handleToggleMode = () => {
//         setIsRegisterMode((prevMode) => !prevMode);
//     };
//
//     return (
//         <div className="flex justify-center items-center h-screen">
//             <div className="w-96 bg-white rounded-lg shadow-lg p-8">
//                 <h2 className="text-3xl font-bold mb-4">{isRegisterMode ? "Register" : "Login"}</h2>
//                 <Form onSubmit={handleSubmit} isRegisterMode={isRegisterMode} />
//                 <ToggleButton isRegisterMode={isRegisterMode} onToggle={handleToggleMode} />
//             </div>
//         </div>
//     );
// }
