import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { describe, expect, it } from "vitest";
import { AppStateProvider } from "../state/AppStateContext";
import { OverviewScreen } from "./OverviewScreen";

describe("OverviewScreen", () => {
  it("reopens the profile modal when returning from a linked screen", () => {
    render(
      <MemoryRouter initialEntries={[{ pathname: "/overview", state: { openProfileOnReturn: true } }]}>
        <AppStateProvider>
          <Routes>
            <Route path="/overview" element={<OverviewScreen />} />
          </Routes>
        </AppStateProvider>
      </MemoryRouter>,
    );

    expect(screen.getByRole("dialog", { name: /passenger profile/i })).toBeInTheDocument();
  });
});
