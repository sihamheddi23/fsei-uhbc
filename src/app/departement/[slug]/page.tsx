import NavBar from "@/components/Departement/NavBar"
import Image from "next/image"


function Departement() {
  return (
    <div>
        <div className="w-[70%] mx-auto border border-black my-9">
          <h3 className="text-center font-semibold text-xl bg-slate-900 text-white">معلومات عن رئيس القسم </h3>
          <div className="mx-6 flex justify-center my-5  gap-3">
            <div className="w-1/2 mt-10">
              <p>الاسم: فلان بن فلان</p>
              <p>الهاتف : 0555555555</p>
              <p>البريد الالكتروني : ft.depeln@univ-chlef.dz</p>
            </div>
            <Image src={"/chef-picture.jpg"} width={300} height={100} alt={"chef picture"} />
          </div>
        </div>
        <div className="w-[70%] mx-auto border border-black my-9">
          <h3 className="text-center font-semibold text-xl bg-slate-900 text-white"> التخصصات   </h3>
          <ul className="mx-6 flex justify-center my-5  gap-10">
            <li>
              <span>
                ليسانس :
              </span>
                <ul>
                  <li>تطبيقات الويب</li>
                  <li>الشبكات</li>
                  <li>الدكاء الاصطناعي</li>
                </ul>
            </li>
            <li>
            <span>
                ماستر :
              </span>
                <ul>
                  <li>تطبيقات الويب</li>
                  <li>الشبكات</li>
                  <li>الدكاء الاصطناعي</li>
                </ul>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Departement