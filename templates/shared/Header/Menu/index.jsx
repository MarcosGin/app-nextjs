import React from "react";
import Logo from "../Logo";

function Menu(props) {
  const { items, socialLinks, logo } = props;
  return (
    <nav className="top_bar">
      <div className="logo">
        <Logo url={logo.url} svg={logo.svg} />
      </div>
      <div className="main_menu">
        <div className="menu_button_more" data-label="Más secciones">
          <span /> <span />
          <span />
          <span />
        </div>
        <div className="menu_items_list">
          <ul>
            {items.map(item => {
              return (
                <li key={item.text} className="menu_item">
                  <a>{item.text}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="main_menu_sidebar_mobile">
        <div className="main_menu_search">
          <a href="/buscador">
            <i className="icon-search" />
          </a>
          {socialLinks.contact && (
            <a href="" className="e-contact">
              <i className="icon-contact" />
            </a>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Menu;
