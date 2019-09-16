import React from "react";
import Navigation from "@Components/Molecules/Navigation";
import Search from "@Components/Molecules/Search";
import Logo from "@Components/Atoms/Logo";

const Header = () => (
  <header>
    <div className="header">
      <div className="container">
        <Logo
          url="https://resources.redbull.com/logos/redbullcom/v1/redbullcom-logo.svg"
          width="240px"
          height="48px"
        />
        <Navigation
          items={[
            {
              text: "Item 1 - Sub",
              link: "/item1",
              children: [
                { text: "sub item 1", link: "/item5" },
                { text: "sub item 2", link: "/item6" }
              ]
            },
            { text: "Item 2", link: "/item2" },
            { text: "Item 3", link: "/item3" },
            { text: "Item 4", link: "/item4" }
          ]}
        />
        <Search />
      </div>
    </div>
    {/*language=CSS*/}
    <style jsx>{`
      .header {
        color: #fff;
        background: #001529;
      }
      .header .container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 80px;
        padding: 0 30px;
      }
    `}</style>
  </header>
);

export default Header;
