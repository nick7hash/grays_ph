"use client";

import { useState } from "react";
import Graphic from "../../../../../components/graphic";
import MobileMenu from "./mobile-menu";

const MobileMenuButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const topOffset = "calc(env(safe-area-inset-top, 0px) + 12px)";

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="fixed right-3 z-50 bg-background rounded-bl-[18px] lg:hidden cursor-pointer select-none"
        style={{ top: topOffset }}
        aria-label="Open menu"
      >
        <div className="relative pb-3 px-4">
          <span className="text-sm font-light">Menu</span>

          {/* Concave fillet: bottom-right of Menu pill */}
          <div className="absolute -bottom-[18px] right-0 size-[18px] rotate-90 pointer-events-none">
            <Graphic />
          </div>

          {/* Concave fillet: top-left into the camera-bump gap */}
          <div className="absolute top-0 -left-[18px] size-[18px] rotate-90 pointer-events-none">
            <Graphic />
          </div>
        </div>
      </button>

      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default MobileMenuButton;
