import React from "react";
import MutationObserver from "mutationobserver-shim";
import { render, screen, waitFor } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
  render(<CheckoutForm />);
});

test("shows success message on submit with form details", async () => {
  render(<CheckoutForm />);

  const firstNameInput = screen.getByLabelText(/first name:/i);
  //   console.log(firstNameInput);
  const lastNameInput = screen.getByLabelText(/last name:/i);
  const addressInput = screen.getByLabelText(/address:/i);
  const cityInput = screen.getByLabelText(/city:/i);
  const stateInput = screen.getByLabelText(/state:/i);
  const zipInput = screen.getByLabelText(/zip:/i);

  userEvent.type(firstNameInput, "Kit");
  userEvent.type(lastNameInput, "Fisto");
  userEvent.type(addressInput, "Jedi Temple");
  userEvent.type(cityInput, "Galactic City");
  userEvent.type(stateInput, "Coruscant");
  userEvent.type(zipInput, "01234");

  const submitButton = screen.getByRole("button", { name: /checkout/i });
  userEvent.click(submitButton);

  await waitFor(() => {
    const successMessage = screen.getByTestId("successMessage");
    expect(successMessage).toBeInTheDocument();
    expect(successMessage).toBeVisible();
    expect(successMessage).toHaveTextContent(/Kit/i);
    expect(successMessage).toHaveTextContent(/Fisto/i);
    expect(successMessage).toHaveTextContent(/Jedi Temple/i);
    expect(successMessage).toHaveTextContent(/Galactic City/i);
    expect(successMessage).toHaveTextContent(/Coruscant/i);
    expect(successMessage).toHaveTextContent(/01234/i);
  });
});
