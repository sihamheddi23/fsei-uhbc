import Advertising from "@/components/MainSections/Advertising";
import MenuBtn from "@/components/Buttons/MenuBtn";
import FseiHeader from "@/components/Headers/FseiHeader";
import UhbcHeader from "@/components/Headers/UhbcHeader";
import News from "@/components/MainSections/News";
import AboutUs from "@/components/MainSections/AboutUs";
import Footer from "@/components/Footer";
import Copyright from "@/components/Copyright";
import FseiUhbcHeader from "@/components/Headers/FseiUhbcHeader";

export default function Home() {
  return (
    <main>
      <FseiUhbcHeader/>
      <UhbcHeader/>
      <FseiHeader/>
      <div className="my-8 mx-5 md:hidden">
        <MenuBtn/>
      </div>
      <News/>
      <Advertising/>
      <AboutUs/>
      <Footer/>
      <Copyright/>
    </main>
  );
}
