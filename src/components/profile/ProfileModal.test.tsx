import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { describe, expect, it, vi } from "vitest";
import { AppStateProvider } from "../../state/AppStateContext";
import { ProfileModal } from "./ProfileModal";

describe("ProfileModal", () => {
  it("closes when the backdrop is clicked", async () => {
    const user = userEvent.setup();
    const handleClose = vi.fn();

    render(
      <MemoryRouter>
        <AppStateProvider>
          <ProfileModal open onClose={handleClose} />
        </AppStateProvider>
      </MemoryRouter>,
    );

    await user.click(screen.getByTestId("profile-modal-backdrop"));

    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it("returns to the overview route with the profile reopen state when sign out is clicked", async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter initialEntries={["/overview"]}>
        <AppStateProvider>
          <Routes>
            <Route path="/" element={<h1>Home</h1>} />
            <Route path="/overview" element={<ProfileModal open onClose={() => {}} />} />
          </Routes>
        </AppStateProvider>
      </MemoryRouter>,
    );

    await user.click(screen.getByRole("button", { name: /sign out/i }));

    expect(screen.getByRole("heading", { name: /home/i })).toBeInTheDocument();
  });
});
