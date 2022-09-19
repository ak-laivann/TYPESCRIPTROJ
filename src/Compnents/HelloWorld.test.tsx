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

test("button functionality test", () => {
  const { container } = render(<HelloWorld />);

  const [button] = container.querySelectorAll("button");
  // console.log(document.body.innerHTML);
  const message = container.querySelector("p");
  fireEvent.click(button);
  // console.log(message?.textContent);
  expect(message?.textContent).toBe("HelloAK");
});
