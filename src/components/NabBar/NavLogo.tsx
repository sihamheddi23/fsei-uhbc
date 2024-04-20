import Image from "next/image";

function NavLogo() {
  return (
    <div className="hidden md:flex md:gap-3 md:items-center">
      <Image
        src={"/fsei.svg"}
        alt="logo"
        width={50}
        height={50}
        className="w-[30px] h-[30px] lg:w-[50px] lg:h-[50px]"
      />
      <h4 className="font-bold text-[12px] lg:text-[18px]">
        كلية العلوم الدقيقة و الاعلام الآلي
      </h4>
    </div>
  );
}

export default NavLogo;
