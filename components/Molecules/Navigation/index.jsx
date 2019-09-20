import React /* { useState }*/ from "react";
import { Menu } from "antd";
import NavigationSubMenu from "./SubMenu";
import NavigationItem from "./Item";
//import { useRouter } from "next/router";
//import getActiveItem from "../../../utils/getActiveItem";

export const renderItems = (items = [], showIcon = false) =>
  items.map(({ children, ...item }) => {
    return children && children.length > 0 ? (
      <NavigationSubMenu
        {...item}
        key={item.link}
        href="/[section]"
        items={children}
        showIcon={showIcon}
      />
    ) : (
      <NavigationItem key={item.link} href="/[section]" link={item.link} text={item.text} />
    );
  });

const Navigation = ({ items, limitItems, showMoreItems }) => {
  //const router = useRouter();
  // let activeItem = "";
  // if (router.query.section) {
  //  activeItem = getActiveItem(items, `/${router.query.section}`);
  //}
  //const [selectedKeys, setSelectedKeys] = useState([activeItem.link]);
  //const onOpenChange = openKeys => setSelectedKeys([...openKeys]);

  const onClick = ({ key }) => {};
  const moreItems = items.slice(limitItems);

  return (
    <nav>
      <Menu
        mode="horizontal"
        onClick={onClick}
        //selectedKeys={selectedKeys}
        //openKeys={selectedKeys}
        //onOpenChange={onOpenChange}
        forceSubMenuRender // For SEO
        getPopupContainer={parent => parent} // For SEO
      >
        {renderItems(items.slice(0, limitItems), true)}

        {showMoreItems && moreItems.length > 0 && (
          <NavigationSubMenu showIcon={true} items={moreItems} {...showMoreItems} />
        )}
      </Menu>
    </nav>
  );
};

Navigation.defaultProps = {
  items: [],
  limitItems: 3,
  showMoreItems: {
    key: "moreitems",
    text: "More items"
  }
};

export default Navigation;
