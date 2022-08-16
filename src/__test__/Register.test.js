import { fireEvent, render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import Register from "../pages/auth/Register"
import store from "../redux/store"
import '@testing-library/jest-dom'


const MockRegister = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Register />
      </BrowserRouter>
    </Provider>
  )
}

test('get email input field', async () => {
  render(<MockRegister />)
  const inputElement = screen.getByPlaceholderText('Email')
  expect(inputElement).toBeInTheDocument()
})

test('get name input field', async () => {
  render(<MockRegister />)
  const inputElement = screen.getByPlaceholderText('Nama')
  expect(inputElement).toBeInTheDocument()
})

test('get password input field', async () => {
  render(<MockRegister />)
  const inputElement = screen.getByPlaceholderText('Kata Sandi')
  expect(inputElement).toBeInTheDocument()
})

test('register button click', async () => {
  render(<MockRegister />)
  const buttonElement = screen.getByRole('button', { name: 'Daftar' })
  fireEvent.click(buttonElement)
  expect(buttonElement).toBeInTheDocument()
})

test('test register logic', async () => {
  render(<MockRegister />)
  const emailElement = screen.getByPlaceholderText('Email')
  const nameElement = screen.getByPlaceholderText('Nama')
  const passwordElement = screen.getByPlaceholderText('Kata Sandi')
  const buttonElement = screen.getByRole('button', { name: 'Daftar' })
  fireEvent.click(emailElement)
  fireEvent.change(emailElement, { target: { value: 'test@gmail.com' } })
  fireEvent.click(nameElement)
  fireEvent.change(nameElement, { target: { value: 'Tes' } })
  fireEvent.click(passwordElement)
  fireEvent.change(passwordElement, { target: { value: '123123' } })
  fireEvent.click(buttonElement)
})