import React, {useState} from 'react';
import "./Auth.css"
import {useDispatch, useSelector} from "react-redux";
import {signIn, signUp} from "../../actions/AuthAction";
import AuthPicture from "../../img/online-community.svg"

const Auth = () => {

    const dispatch = useDispatch()
    const loading = useSelector((state) => state.authReducer.loading)
    const [isSignUp, setIsSignUp] = useState(false)
    const [data, setData] = useState({
            username: "",
            firstName: "",
            email: "",
            password: "",
            matchingPassword: "",
            birthday: "",
            gender: "",
            currentCity: "",
            hometown: "",
            languageISpeak: [{}],
            lookingFor: [""]
        }
    );

    const [confirmPass, setConfirmPass] = useState(true)

    const handleSubmit = (event) => {
        event.preventDefault();
        if (isSignUp) {
            let speak = data.languageISpeak;
            data.languageISpeak = [{languageName: speak.toString().toUpperCase(), level: "NATIVE"}]
            let looking = data.lookingFor
            // TODO: Zweryfikować czy zadziała
            data.lookingFor = [looking.toString().replace(" ", "_").toUpperCase()]
            data.gender = data.gender.toUpperCase()
            data.password === data.matchingPassword ? dispatch(signUp(data)) : setConfirmPass(false);
        } else {
            dispatch(signIn(data));
        }
    }

    const resetForm = () => {
        setConfirmPass(true);
        setData({
            username: "",
            firstName: "",
            email: "",
            password: "",
            confirmpass: "",
            birthday: "",
            gender: "",
            currentcity: "",
            hometown: "",
            languageISpeak: "",
            lookingFor: ""
        })
    }

    const handleChange = (event) => {
        setData({...data, [event.target.name]: event.target.value})
    }

    return (
        <div className={"Auth"}>
            <div className={"authForm"}>
                <div className={"a-left"}>
                    <img src={AuthPicture} alt={""}/>
                </div>

                <div className={"a-right"}>
                    <form action={""} className={"infoForm"} onSubmit={handleSubmit}>
                        <h2>{isSignUp ? "Create Account" : "Welcome back!"}</h2>
                        <div>
                            <input type={"text"} placeholder={"Username"} className={"infoInput"} name={"username"}
                                   onChange={handleChange} value={data.username}/>
                            {isSignUp && (
                                <input type={"text"} placeholder={"First name"} className={"infoInput"}
                                       name={"firstName"}
                                       onChange={handleChange} value={data.firstName}/>
                            )}
                        </div>
                        {isSignUp && (
                            <div>
                                <input type={"email"} placeholder={"Email"} className={"infoInput"} name={"email"}
                                       onChange={handleChange} value={data.email}/>
                            </div>
                        )}
                        <div>
                            <input type={"password"} placeholder={"Password"} className={"infoInput"} name={"password"}
                                   onChange={handleChange} value={data.password}/>
                            {isSignUp && (
                                <input type={"password"} placeholder={"Confirm Password"} className={"infoInput"}
                                       name={"matchingPassword"} onChange={handleChange} value={data.matchingPassword}/>
                            )}
                        </div>
                        {isSignUp && (
                            <div>
                                <input type={"date"} placeholder={"birthday"} className={"infoInput"} name={"birthday"}
                                       onChange={handleChange} value={data.birthday}/>
                                <select className={"infoInput infoSelect"} name={"gender"} placeholder={"Gender"}
                                        onChange={handleChange} value={data.gender}>
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Prefer not to answer</option>
                                </select>

                                <input type={"text"} placeholder={"Current City"} className={"infoInput"}
                                       name={"currentCity"} onChange={handleChange} value={data.currentCity}/>
                            </div>
                        )}
                        {isSignUp && (
                            <div>
                                <input type={"text"} placeholder={"Hometown"} className={"infoInput"} name={"hometown"}
                                       onChange={handleChange} value={data.hometown}/>
                                <select placeholder={"Languages I Speak"} className={"infoInput infoSelect"}
                                        name={"languageISpeak"} onChange={handleChange} value={data.languageISpeak}>
                                    <option>English</option>
                                    <option>Polish</option>
                                    <option>German</option>
                                    <option>Sweden</option>
                                    <option>Norwegian</option>
                                    <option>Spain</option>
                                    <option>French</option>
                                    <option>Russian</option>
                                    <option>Ukrainian</option>
                                </select>

                                <select placeholder={"Looking for"} className={"infoInput infoSelect"}
                                        name={"lookingFor"} onChange={handleChange} value={data.lookingFor}>
                                    <option>Friends</option>
                                    <option>Postal pen pals</option>
                                    <option>Language practice</option>
                                    <option>Flirting and romance</option>
                                    <option>Meeting in person</option>
                                </select>
                            </div>
                        )}
                        <span style={{
                            display: confirmPass ? "none" : "block",
                            color: "red",
                            fontSize: "12px",
                            alignSelf: "flex-end",
                            marginRight: "5px"
                        }}>
                        * Confirm Password is not the same
                    </span>
                        <div>
                        <span style={{fontSize: "12px", cursor: "pointer"}}
                              onClick={() => {
                                  resetForm();
                                  setIsSignUp((prev) => !prev);
                              }}>
                            {isSignUp ? "Already have an account? Login!" : "Don't have an account? Sign up!"}
                        </span>
                        </div>
                        <button className={"button infoButton"} type={"submit"} disabled={loading}>
                            {loading ? "Loading..." : isSignUp ? "Sign up" : "Sign in"}
                        </button>
                    </form>
                </div>
            </div>
        </div>);
};

export default Auth;
