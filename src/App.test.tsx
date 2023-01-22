import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'

import App from "./App";

describe("App", () => {
  it("should render with title", () => {
    render(<App />)
    const title = screen.getByText(/Dismissable Blurb Component/i)
    expect(title).toBeInTheDocument();
  })
})
