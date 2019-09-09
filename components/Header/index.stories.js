import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, object } from "@storybook/addon-knobs";

import AntdWrapper from "../../stories/decorators/AntdWrapper";
import Header from "./index";
import { socialLinks, transmission } from "./SubHeader/index.stories";

const items = [
  { text: "Política", link: "/politica" },
  { text: "Actualidad", link: "/actualidad" },
  { text: "Internacionales", link: "/internacionales" },
  { text: "Deportes", link: "/deportes" },
  { text: "Economía", link: "/economia" }
];

const logo =
  "https://telefe-static2.akamaized.net/media/12531/logo-noticias.svg?v=20180719132831000";

const subHeader = {
  search: true,
  socialLinks,
  transmission
};
/* ********************************************************** */
/* Necessary to mock Next's router */
// https://github.com/zeit/next.js/issues/1827#issuecomment-323721221
const actionWithPromise = () => {
  action("clicked link");
  // we need to return promise because it is needed by Link.linkClicked
  return new Promise((resolve, reject) => reject());
};

const mockedRouter = {
  push: actionWithPromise,
  replace: actionWithPromise,
  prefetch: () => {},
  query: {
    section: "/"
  },
  route: "/mock-route"
};

storiesOf("Header", module)
  .addDecorator(withKnobs)
  .addDecorator(storyFn => <AntdWrapper>{storyFn()}</AntdWrapper>)
  .add("full", () => {
    const menuItems = object("Menu Items", items);
    const subHeaderInput = object("Sub Header structure", subHeader);
    return (
      <Header
        router={mockedRouter}
        menu={menuItems}
        subHeader={subHeaderInput}
        logo={logo}
      ></Header>
    );
  });
