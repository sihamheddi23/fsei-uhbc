function Login() {
  return (
    <div className="flex flex-col  items-center  h-[500px] 2xl:h-[1500px]">
      <h1 className="text-3xl font-bold my-6">تسجـــــيل الدخـــــول</h1>
      <div className="p-5 mx-6 shadow-md w-[90%] md:w-[600px] lg:w-[800px] -auto">
        <form className="flex flex-col gap-4">
          <label htmlFor="username">اسم المستخدم</label>
          <input
            type="text"
            name="username"
            id="username"
            className="border border-gray-300 rounded-xl p-2 outline-none"
            placeholder="اسم المستخدم"
          />
          <label htmlFor="password">كلمة المرور</label>
          <input
            type="password"
            name="password"
            id="password"
            className="border border-gray-300 rounded-xl p-2 outline-none"
            placeholder="كلمة المرور"
          />
          <button type="submit" className="bg-[#0d111e] text-white font-semibold rounded-xl p-1">تأكـــــيد </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
