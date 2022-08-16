import { fireEvent, render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import ComponentSetting from "../components/ComponentSetting"
import store from "../redux/store"
import '@testing-library/jest-dom'


const MockProfile = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ComponentSetting />
      </BrowserRouter>
    </Provider>
  )
}

test('input old password field', async () => {
  render(<MockProfile />)
  const oldPasswordlement = screen.getByPlaceholderText('Masukkan Kata Sandi Lama')
  expect(oldPasswordlement).toBeInTheDocument()
})

test('input new password field', async () => {
  render(<MockProfile />)
  const newPasswordElement = screen.getByPlaceholderText('Masukkan Kata Sandi Baru')
  expect(newPasswordElement).toBeInTheDocument()
})

test('input confirm new password field', async () => {
  render(<MockProfile />)
  const confirmNewPasswordElement = screen.getByPlaceholderText('Konfirmasi Kata Sandi Baru')
  expect(confirmNewPasswordElement).toBeInTheDocument()
})

test('button update click', async () => {
  render(<MockProfile />)
  const buttonUpdateElement = screen.getByRole("button", { name: 'Perbarui' })
  fireEvent.click(buttonUpdateElement)
  expect(buttonUpdateElement).toBeInTheDocument()
})

test('update password logic', async () => {
  render(<MockProfile />)
  const oldPasswordlement = screen.getByPlaceholderText('Masukkan Kata Sandi Lama')
  const newPasswordElement = screen.getByPlaceholderText('Masukkan Kata Sandi Baru')
  const confirmNewPasswordElement = screen.getByPlaceholderText('Konfirmasi Kata Sandi Baru')
  const buttonUpdateElement = screen.getByRole("button", { name: 'Perbarui' })
  fireEvent.click(oldPasswordlement)
  fireEvent.change(oldPasswordlement, { target: { value: 'tespasswordlama' } })
  fireEvent.click(newPasswordElement)
  fireEvent.change(newPasswordElement, { target: { value: 'tespasswordbaru' } })
  fireEvent.click(confirmNewPasswordElement)
  fireEvent.change(confirmNewPasswordElement, { target: { value: 'tespasswordbaru' } })
  fireEvent.click(buttonUpdateElement)
})
