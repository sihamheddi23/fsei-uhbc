import Image from "next/image"
import Link from "next/link"

function News() {
  return (
    <div className="flex justify-center w-full text-white relative">
        <Image src={"/news.png"} width={90} height={100} className="w-[90%] h-[315px] md:w-[95%] md:h-[600px]" alt={"news"}/>
        <div className='w-[90%] h-[315px] bg-[rgba(24,23,23,0.57)] absolute top-[1px] md:w-[95%] md:h-[600px]'></div>
        <div className="w-[91%] md:w-[95%] absolute top-[1px]">
            <h4 className="bg-[#1b8bdd] pr-3 py-1 w-[110px] m-4 md:text-[20px]">آخر الأخبار</h4>
            <div className="flex flex-col items-center w-full justify-center gap-10  mt-[55px]">
              <h4 className="text-center text-[20px] md:text-[36px]">مسابقة الويب مع Cyber club</h4>
               <p className="hidden md:block text-[24px] mx-9 text-center text-[#d6d6d6] mt-8">تبعا للقرار الوزاري 2024/255 المحدد لمعايير الإنتقاء للقبول في برنامج الحركية قصيرة المدى في الخارج تعلن إدارة الجامعة عن إعادة فتح باب الترشح لبرنامج الحركية قصيرة المدى في الخارج فعلى الراغبين في الترشح بعنوان السنة المالية 2024 تسجيل طلباتهم عبر المنصة المخصصة في الفترة من 10 مارس إلى 20 مارس 2024.</p>
               <Link href={"/"} className="text-[20px]">إقرأ المزيد {">>"}</Link>
            </div>
        </div>
    </div>
  )
}

export default News