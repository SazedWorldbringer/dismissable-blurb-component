import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import DismissableBlurb from './DismissableBlurb';

describe("DismissableBlurb", () => {
  it("should render children", () => {
    const title = "Welcome to the new feed!"
    const paragraph = "We're updating this to make it more interactive and useful."
    render(<DismissableBlurb>
      <h3>{title}</h3>
      <p>{paragraph}</p>
    </DismissableBlurb>)

    const blurb = {
      title: screen.getByText(title),
      paragraph: screen.getByText(paragraph)
    }

    expect(blurb.title).toBeInTheDocument();
    expect(blurb.paragraph).toBeInTheDocument();
  })
})
