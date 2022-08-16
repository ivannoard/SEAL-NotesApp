import { fireEvent, render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import Login from "../pages/auth/Login"
import store from "../redux/store"
import '@testing-library/jest-dom'


const MockLogin = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    </Provider>
  )
}

test('get email input field', async () => {
  render(<MockLogin />)
  const inputElement = screen.getByPlaceholderText('Email')
  expect(inputElement).toBeInTheDocument()
})

test('get password input field', async () => {
  render(<MockLogin />)
  const inputElement = screen.getByPlaceholderText('Kata Sandi')
  expect(inputElement).toBeInTheDocument()
})

test('login button click', async () => {
  render(<MockLogin />)
  const buttonElement = screen.getByRole('button', { name: 'Masuk' })
  fireEvent.click(buttonElement)
  expect(buttonElement).toBeInTheDocument()
})

test('test login logic', async () => {
  render(<MockLogin />)
  const emailElement = screen.getByPlaceholderText('Email')
  const passwordElement = screen.getByPlaceholderText('Kata Sandi')
  const buttonElement = screen.getByRole('button', { name: 'Masuk' })
  fireEvent.click(emailElement)
  fireEvent.change(emailElement, { target: { value: 'test@gmail.com' } })
  fireEvent.click(passwordElement)
  fireEvent.change(passwordElement, { target: { value: '123123' } })
  fireEvent.click(buttonElement)
})