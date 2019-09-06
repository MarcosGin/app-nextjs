import { storiesOf } from "@storybook/react";
import { specs, describe, it } from "storybook-addon-specifications";
import { action } from "@storybook/addon-actions";

import { mount } from "enzyme";
import expect from "expect";

const stories = storiesOf("Button", module);

stories.add("Hello World", function() {
  const story = <button onClick={action("Hello World")}>Hello World</button>;

  specs(() =>
    describe("Hello World", function() {
      it("Should have the Hello World label", function() {
        let output = mount(story);
        expect(output.text()).toContain("Hello Wrld");
      });
    })
  );

  return story;
});
