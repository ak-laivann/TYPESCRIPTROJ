import React, { Component } from "react";
import HelloWorld from "./HelloWorld";

export default {
  title: "Just for fun/ HelloWorld",
  Component: HelloWorld,
  args: {
    onClick: { action: "clicked" },
  },
};

export const Primar = () => <HelloWorld></HelloWorld>;

const Template = (args) => <HelloWorld {...args} />;

export const Primary = Template.bind({});
