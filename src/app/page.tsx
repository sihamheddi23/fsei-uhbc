import Advertising from "@/components/MainSections/Advertising";
import News from "@/components/MainSections/News";


export default function Home() {
  return (
    <main>
      <News/>
      <Advertising title={" الاعلانات | الكلية "} link={"/ads/faculty"} />
      <Advertising title={" الاعلانات | قسم الرياضيات "} link={"/ads/maths"}/>
      <Advertising title={" الاعلانات | قسم الاعلام الالي "} link={"/ads/informatics"}/>
      <Advertising title={" الاعلانات | قسم الكيمياء  "} link={"/ads/chimics"}/>
      <Advertising title={" الاعلانات | قسم الفيزياء  "} link={"/ads/physics"}/>
    </main>
  );
}
