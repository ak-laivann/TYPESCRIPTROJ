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

  const button = screen.getByRole(
    "button"
    // { name: "summa" }
  );
  // console.log(document.body.innerHTML);
  const message = container.querySelector("p");
  expect(message?.textContent).toBe("Hello");
  fireEvent.click(button);
  // console.log(message?.textContent);
  expect(message?.textContent).toBe("HelloAK");
});
