import { render, screen } from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"

it("Should render Header Component with login button", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )

    const loginButton = screen.getByRole("button")

    expect(loginButton).toBeInTheDocument();
})
it("Should render Header Component with login button", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )

    const loginButton = screen.getByRole("button", { name: "Login" })

    expect(loginButton).toBeInTheDocument();
})
it("Should render Header Component with cart items 0", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )

    const cartItems = screen.getByText("Cart(0)")

    expect(cartItems).toBeInTheDocument();
})
it("Should render Header Component with cart items", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )

    const cartItems = screen.getByText(/Cart/);   // RegEx

    expect(cartItems).toBeInTheDocument();
})