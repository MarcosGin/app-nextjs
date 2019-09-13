import { storiesOf } from "@storybook/react";

import Header from "./index";

const stories = storiesOf("Header", module);

stories.add("example", function() {
    const story = <Header />;

    return story;
});
