import { render, screen } from "@testing-library/react";
import Todos from "./Todos";

describe('TodosComponent', () => {
  
  it('fetches todos thru REST API call', async() => {
    render(<Todos />);
    
    expect(await screen.findByText('delectus aut autem')).toBeInTheDocument();    
    // learn about getBy, findby, queryBy: https://testing-library.com/docs/queries/about/

    /* 3 Challenges / Disadv of Testing Rest API 
      1. Time consuming
      2. Availability of REST API is a concern (may be in dev, may be down)
      3. No guarantee for the sample data like this 'delectus aut autem' to be present
    */
  });
  
});
