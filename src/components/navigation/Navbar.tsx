import ContextProvider from "@/lib/contextProvider";
import NavLinks from "../NabBar/NavLinks";
import NavLogo from "../NabBar/NavLogo";

function Navbar() {
  
  return (
    <div className="hidden md:shadow-md md:mb-8 md:p-3 lg:p-5  md:flex items-center md:gap-1 lg:gap-5 lg:text-[18px]">
      <ContextProvider>
        <NavLogo />
        <NavLinks />
      </ContextProvider> 
    </div>
  );
}

export default Navbar;
