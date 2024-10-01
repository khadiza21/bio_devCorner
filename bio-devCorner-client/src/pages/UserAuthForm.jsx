

const UserAuthForm = ({type}) => {
    return (
        <>
        <section className="h-cover flex items-center justify-center">
            <form action="" className=".w-[80%].max-w-[400px]">
                <h1 className="text-4xl font-gelasio capitalize text-center mb-24">{type == "sign-in" ? "Welcome Back":"Join Us Today"}</h1>
            </form>

            {
                type != "sign-in"? <input type="text" />:""
            }

        </section>
        </>
    );
};

export default UserAuthForm;