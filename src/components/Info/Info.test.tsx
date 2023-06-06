import { Info } from './Info';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';

describe("Given the Info component", () => {
  describe("When it is instantiate", () => {
    test("Then it should be the text 'Calling...' in the document", () => {
      const text = 'Calling...';

      render(
        <Info></Info>
      )
      const expectedText = screen.getByText(text);
      expect(expectedText).toBeInTheDocument();      
    })
  })
})
