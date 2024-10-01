import InputBox from "../components/InputBox"
import googleIcon from '../imgs/google.png';
import { Link } from "react-router-dom";

const UserAuthForm = ({ type }) => {
    return (
        <>
            <section className="h-cover flex items-center justify-center">
                <form action="" className="w-[80%] max-w-[400px]">
                    <h1 className="text-4xl font-gelasio capitalize text-center mb-24">{type == "sign-in" ? "Welcome Back" : "Join Us Today"}</h1>


                    {
                        type != "sign-in" ? <InputBox
                            name="fullname"
                            type="text"
                            placeholder="Full Name"
                            icon="fi-rr-user"
                        ></InputBox> : ""
                    }

                    <InputBox
                        name="email"
                        type="email"
                        placeholder="Email"
                        icon="fi-rr-envelope"
                    ></InputBox>

                    <InputBox
                        name="password"
                        type="password"
                        placeholder="Password"
                        icon="fi-rr-key"
                    ></InputBox>


                    <button
                        type="submit"
                        className="btn-dark center mt-14">
                        {type.replace("-", " ")} </button>

                    <div className="relative w-full flex items-center gap-2 my-10 opacity-10 uppercase text-black font-bold">
                        <hr className="w-1/2 border-black" />
                        <p>or</p>
                        <hr className="w-1/2 border-black" />
                    </div>

                    <button className="btn-dark flex items-center justify-center gap-4 w-[100%] center">
                        <img className="w-5" src={googleIcon} alt="" />
                    </button>


                    {
                        type == 'sign-in' ? <p className="mt-6 text-dark-grey text-xl text-center">Don't have an account?
                            <Link className="underline text-black text-xl ml-1" to="/signUp">Join Us Now.</Link>
                        </p> : <p className="mt-6 text-dark-grey text-xl text-center">Have An Account?
                            <Link className="underline text-black text-xl ml-1" to="/signIn">Sign In Here.</Link>
                        </p>
                    }

                </form>


            </section>
        </>
    );
};

export default UserAuthForm;