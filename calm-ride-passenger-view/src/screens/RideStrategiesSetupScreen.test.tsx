import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { AppStateProvider } from "../state/AppStateContext";
import { RideStrategiesSetupScreen } from "./RideStrategiesSetupScreen";

describe("RideStrategiesSetupScreen", () => {
  it("toggles strategies from the default selected list", async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter>
        <AppStateProvider>
          <RideStrategiesSetupScreen />
        </AppStateProvider>
      </MemoryRouter>,
    );

    const focusButton = screen.getByRole("button", { name: /focus/i });
    await user.click(focusButton);

    expect(focusButton).toHaveAttribute("aria-pressed", "true");
  });

  it("continues to the overview route when save is pressed", async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter initialEntries={["/onboarding/account-setup-4"]}>
        <AppStateProvider>
          <Routes>
            <Route path="/onboarding/account-setup-4" element={<RideStrategiesSetupScreen />} />
            <Route path="/overview" element={<h1>Overview</h1>} />
          </Routes>
        </AppStateProvider>
      </MemoryRouter>,
    );

    await user.click(screen.getByRole("button", { name: /save/i }));

    expect(screen.getByRole("heading", { name: /overview/i })).toBeInTheDocument();
  });
});
