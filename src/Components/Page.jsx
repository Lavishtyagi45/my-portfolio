import React, {useState } from "react";

import AsideNav from "./Aside";
import Hero from "./Hero";

export default function Page() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  const handleMainContentClick = () => {
    if (nav) {
      setNav(false);
    }
  };
  return (
    <>
    <AsideNav nav={nav} handleNav={handleNav}/>
    <Hero nav={nav} handleNav={handleNav} handleMainContentClick={handleMainContentClick} />
    </>
  );
}
