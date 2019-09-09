import { storiesOf } from "@storybook/react";
import { withKnobs, boolean, object } from "@storybook/addon-knobs";

import AntdWrapper from "../../../stories/decorators/AntdWrapper";
import SubHeader from "./index";

export const socialLinks = [
  { type: "facebook", value: "http://facebook.com/telefenoticias" },
  { type: "twitter", value: "http://twitter.com/telefenoticias" },
  { type: "youtube", value: "http://youtube.com/telefenoticias" },
  { type: "instagram", value: "http://instagram.com/telefenoticias" },
  { type: "contact", value: "/contacto" }
];
export const transmission = {
  link: "/vivo",
  text: "Ahora en vivo",
  type: "live",
  value: "El noticiero de la gente"
};

storiesOf("Header/SubHeader", module)
  .addDecorator(storyFn => <AntdWrapper>{storyFn()}</AntdWrapper>)
  .addDecorator(withKnobs)
  .add("normal", () => {
    const inputSearch = boolean("Show search", true);
    const inputSocialLinks = object("Social Links", socialLinks);
    const inputTransmissions = object("Transmission", transmission);
    return (
      <SubHeader
        search={inputSearch}
        socialLinks={inputSocialLinks}
        transmission={inputTransmissions}
      ></SubHeader>
    );
  });
