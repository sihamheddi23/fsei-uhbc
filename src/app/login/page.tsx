import AuthForm from "@/components/Resources/forms/authForm";

function Login() {
  return (
    <div className="flex flex-col  items-center  h-[600px] 2xl:h-[1500px]">
      <h1 className="text-3xl font-bold my-6">تسجـــــيل الدخـــــول</h1>
      <div className="p-5 mx-6 shadow-md w-[90%] md:w-[600px] lg:w-[800px] -auto">
        <AuthForm/>
      </div>
    </div>
  );
}

export default Login;
