import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"

test("Should load contact us component", () => {
    render(<Contact />)

    const heading = screen.getByRole("heading")

    // Assertion
    expect(heading).toBeInTheDocument()
})

test("Should load buton inside Contact component", () => {
    render(<Contact />)

    const button = screen.getByText("Submit")

    // Assertion
    expect(button).toBeInTheDocument()
})

test("Should load 2 input boxes inside contact us component", () => {
    render(<Contact />)

    const inputName = screen.getByPlaceholderText("Name")

    // Assertion
    expect(inputName).toBeInTheDocument()
})

test("Should load contact us component", () => {
    render(<Contact />)

    // Querying
    const inputBoxes = screen.getAllByRole("textbox")
    console.log(inputBoxes.length);


    // Assertion
    expect(inputBoxes.length).toBe(2)
    // or
    // expect(inputBoxes.length).not.toBe(3)
})