import React from "react";
import { configure } from "@storybook/react";
import { configure as configureEnzyme } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import "../styles/main.scss";

// automatically import all files ending in *.stories.js
const components = require.context("../components", true, /\.stories\.js$/);
function loadStories() {
  components.keys().forEach(components);
}

configureEnzyme({ adapter: new Adapter() });
configure(loadStories(components), module);
