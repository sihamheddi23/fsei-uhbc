import Advertising from "@/components/MainSections/Advertising";

import News from "@/components/MainSections/News";
import AboutUs from "@/components/MainSections/AboutUs";


export default function Home() {
  return (
    <main>
      <News/>
      <Advertising title={"الاعلانـــــــات"}/>
      <AboutUs/>
    </main>
  );
}
