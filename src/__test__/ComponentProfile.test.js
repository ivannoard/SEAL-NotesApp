import { fireEvent, render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import ComponentProfile from "../components/ComponentProfile"
import store from "../redux/store"
import '@testing-library/jest-dom'


const MockProfile = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ComponentProfile />
      </BrowserRouter>
    </Provider>
  )
}

test('input name field', async () => {
  render(<MockProfile />)
  const nameElement = screen.getByPlaceholderText('Verdian')
  expect(nameElement).toBeInTheDocument()
})

test('input email field', async () => {
  render(<MockProfile />)
  const emailElement = screen.getByPlaceholderText('Verdian123@gmail.com')
  expect(emailElement).toBeInTheDocument()
})

test('button upload click', async () => {
  render(<MockProfile />)
  const buttonElement = screen.getByRole("button", { name: 'Unggah Foto' })
  fireEvent.click(buttonElement)
  expect(buttonElement).toBeInTheDocument()
})

test('button update click', async () => {
  render(<MockProfile />)
  const buttonUpdateElement = screen.getByRole("button", { name: 'Simpan' })
  fireEvent.click(buttonUpdateElement)
  expect(buttonUpdateElement).toBeInTheDocument()
})

test('update profile logic', async () => {
  render(<MockProfile />)
  const nameElement = screen.getByPlaceholderText('Verdian')
  const emailElement = screen.getByPlaceholderText('Verdian123@gmail.com')
  const buttonUpdateElement = screen.getByRole("button", { name: 'Simpan' })
  fireEvent.click(nameElement)
  fireEvent.change(nameElement, { target: { value: 'test' } })
  fireEvent.click(emailElement)
  fireEvent.change(emailElement, { target: { value: 'test@email.com' } })
  fireEvent.click(buttonUpdateElement)
})
