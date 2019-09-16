import { storiesOf } from "@storybook/react";

import Header from "./index";
import AntdWrapper from "../../../stories/decorators/AntdWrapper";

storiesOf("Header", module)
    .addDecorator(storyFn => <AntdWrapper>{storyFn()}</AntdWrapper>)
    .add("example",() => <Header />);
