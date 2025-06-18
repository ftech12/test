import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import {
    signInWithEmailAndPassword,
    signInWithPopup,
} from "firebase/auth";
import { auth, googleProvider, appleProvider } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";

export default function Auth() {
    const [userlogin, setUserLogin] = useState({
        email: "",
        password: "",
    });
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    const loginWithEmail = async () => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, userlogin.email, userlogin.password);
            const token = await userCredential.user.getIdToken();
            localStorage.setItem("token", token);
            navigate("/home")
        } catch (err) {
            alert((err as Error).message);
        }
    };

    const loginWithGoogle = async () => {
        try {
            const userCredential = await signInWithPopup(auth, googleProvider);
            const token = await userCredential.user.getIdToken();
            localStorage.setItem("token", token);
            navigate("/home");
        } catch (err) {
            alert((err as Error).message);
        }
    };

    const loginWithApple = async () => {
        try {
            const userCredential = await signInWithPopup(auth, appleProvider);
            const token = await userCredential.user.getIdToken();
            localStorage.setItem("token", token);
            navigate("/home");
        } catch (err) {
            alert((err as Error).message);
        }
    };
    const UserOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUserLogin({
            ...userlogin,
            [name]: value
        })
    };

    return (
        <section className="flex items-center justify-center min-h-screen ">
            <div className="w-80 mx-auto border border-gray-200 mt-10 p-6 bg-white rounded-xl shadow-xl space-y-4 text-sm font-medium text-gray-700">
                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={userlogin.email}
                        onChange={(e) => UserOnChange(e)}
                        placeholder="Enter your mail"
                        className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                </div>
                <div>
                    <label>Password</label>
                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            value={userlogin.password}
                            onChange={(e) => UserOnChange(e)}
                            placeholder="Enter your password"
                            className="mt-1 w-full p-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500"
                        >
                            {showPassword ? <FiEyeOff /> : <FiEye />}
                        </button>
                    </div>
                </div>

                {/* Remember Me and Forgot */}
                <div className="flex items-center justify-between text-xs mt-1">
                    <label className="flex items-center space-x-2">
                        <input type="checkbox" className="accent-purple-600" />
                        <span>Remember Me</span>
                    </label>
                    <a href="#" className="text-purple-600 hover:underline">
                        Forget Password
                    </a>
                </div>

                {/* Sign In Button */}
                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-md transition"
                    onClick={loginWithEmail}>
                    Sign In
                </button>

                <div className="text-center text-gray-400 text-xs">Or</div>

                {/* Google Button */}
                <button className="flex items-center justify-center gap-2 border w-full p-2 rounded-md hover:bg-gray-50"
                    onClick={loginWithGoogle}>
                    <FcGoogle className="text-lg" />
                    <span className="text-sm text-gray-700 font-medium">Sign in by Google</span>
                </button>

                {/* Apple Button */}
                <button className="flex items-center justify-center gap-2 border w-full p-2 rounded-md hover:bg-gray-50"
                    onClick={loginWithApple}>
                    <FaApple className="text-lg" />
                    <span className="text-sm text-gray-700 font-medium">Sign in by Apple</span>
                </button>
            </div>
        </section>
    );
}
