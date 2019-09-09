import React from "react";
import { ConfigProvider } from "antd";

const AntdWrapper = ({ children }) => <ConfigProvider prefixCls="app">{children}</ConfigProvider>;

export default AntdWrapper;
