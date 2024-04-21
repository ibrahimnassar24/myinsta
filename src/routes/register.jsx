import RegisterPage from "../pages/RegisterPage";

const register = {
    path: "/register",
    element: <RegisterPage />,
    action
};

export default register;

async function action({request, params}) {

    const data = Object.fromEntries(await request.formData());
    console.log(data);
    return data;
}