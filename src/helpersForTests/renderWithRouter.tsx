import { MemoryRouter } from "react-router-dom"
import { render } from "@testing-library/react"
import App from "../App"
import { ReactElement } from "react"

export const renderWithRouter = (component?: ReactElement, initialRoute: string = '/') => {
  return render(
    <MemoryRouter initialEntries={[initialRoute]}>
      <App />
      {component}
    </MemoryRouter>
  )
}