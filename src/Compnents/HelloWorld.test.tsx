// import { describe, test } from "node:test";
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import HelloWorld from "./HelloWorld";
// import user from "@testing-library/user-event";

// // afterEach(() => {
// //   console.log("cleanup logic");
// // });

// // test("renders properly", () => {
// //   render(<HelloWorld />);
// //   const helloWorld = screen.getByText(/Hello/i);
// //   expect(helloWorld).toBeInTheDocument();
// // });

test("functionality test", () => {
  const onClick = jest.fn();
  const temp = render(<HelloWorld onClick={onClick} children="summa" />);
  //   console.log(temp);
  const buttonElement = screen.getByRole("button");
  // console.log(buttonElement);
  fireEvent.click(buttonElement);
  expect(temp).toBeCalled();
});
