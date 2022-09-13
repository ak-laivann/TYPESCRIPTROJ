import React, { Component } from "react";
import HelloWorld from "./HelloWorld";

export default {
  title: "Just for fun/ HelloWorld",
  Component: HelloWorld,
  argTypes: {
    onClick: { action: "clicked" },
    color: { control: "text" },
    children: { control: "text" },
  },
};

export const Primar = () => <HelloWorld></HelloWorld>;

const Template = (args) => <HelloWorld {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  color: "blue",
  children: "summa",
};
