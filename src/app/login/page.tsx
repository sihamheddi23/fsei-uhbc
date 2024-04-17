import Submit from "@/components/Buttons/Submit";
import Input from "@/components/Input";

function Login() {
  return (
    <div className="flex flex-col  items-center  h-[500px] 2xl:h-[1500px]">
      <h1 className="text-3xl font-bold my-6">تسجـــــيل الدخـــــول</h1>
      <div className="p-5 mx-6 shadow-md w-[90%] md:w-[600px] lg:w-[800px] -auto">
        <form className="flex flex-col gap-4">
          <Input labelTitle="اسم المستخدم" type="text" name="username" id="username" placeholder="اسم المستخدم" />
          <Input labelTitle="كلمة المرور" type="password" name="password" id="password" placeholder="كلمة المرور" />
          <Submit/>
        </form>
      </div>
    </div>
  );
}

export default Login;
