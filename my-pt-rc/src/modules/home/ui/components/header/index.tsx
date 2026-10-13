import Graphic from "../../../../../components/graphic";
import MobileMenuButton from "./mobile-menu-button";
import Navbar from "./navbar";

const Header = () => {
  const topOffset = "calc(env(safe-area-inset-top, 0px) + 12px)";

  return (
    <>
      {/* Continuous top bar — joins left pill + Menu so the camera bump reads clearly */}
      <div
        className="fixed top-0 left-0 w-full bg-background z-50 block lg:hidden"
        style={{ height: topOffset }}
      />

      <header
        className="fixed left-3 z-50 bg-background rounded-br-[18px]"
        style={{ top: topOffset }}
      >
        <div className="relative">
          <Navbar />

          {/* Concave fillet: bottom-left of left pill */}
          <div className="absolute left-0 -bottom-[18px] size-[18px] pointer-events-none">
            <Graphic />
          </div>

          {/* Concave fillet: top-right into the camera-bump gap */}
          <div className="absolute top-0 -right-[18px] size-[18px] pointer-events-none">
            <Graphic />
          </div>
        </div>
      </header>

      <MobileMenuButton />
    </>
  );
};

export default Header;
