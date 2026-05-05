import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { HaloDisplayReportsScreen } from "./HaloDisplayReportsScreen";
import { HaloDisplayScreen } from "./HaloDisplayScreen";

describe("Halo display screens", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("switches from navigation to reports using the halo tabs", async () => {
    vi.useRealTimers();
    const user = userEvent.setup();

    render(
      <MemoryRouter initialEntries={["/halo-display"]}>
        <Routes>
          <Route path="/halo-display" element={<HaloDisplayScreen />} />
          <Route path="/halo-display/reports" element={<HaloDisplayReportsScreen />} />
        </Routes>
      </MemoryRouter>,
    );

    await user.click(screen.getByRole("button", { name: /reports/i }));

    expect(screen.getByRole("heading", { name: /bridge coming up/i })).toBeInTheDocument();
  });

  it("switches from reports back to navigation using the halo tabs", async () => {
    vi.useRealTimers();
    const user = userEvent.setup();

    render(
      <MemoryRouter initialEntries={["/halo-display/reports"]}>
        <Routes>
          <Route path="/halo-display" element={<HaloDisplayScreen />} />
          <Route path="/halo-display/reports" element={<HaloDisplayReportsScreen />} />
        </Routes>
      </MemoryRouter>,
    );

    await user.click(screen.getByRole("button", { name: /navigation/i }));

    expect(screen.getByRole("heading", { name: /passenger mode/i })).toBeInTheDocument();
  });

  it("renders uploaded halo and bridge assets instead of generated data URIs", () => {
    render(
      <MemoryRouter initialEntries={["/halo-display/reports"]}>
        <Routes>
          <Route path="/halo-display" element={<HaloDisplayScreen />} />
          <Route path="/halo-display/reports" element={<HaloDisplayReportsScreen />} />
        </Routes>
      </MemoryRouter>,
    );

    act(() => {
      vi.advanceTimersByTime(900);
    });

    const haloImage = screen.getByRole("img", { name: /passenger mode halo/i });
    const bridgeImage = screen.getByRole("img", { name: /bridge illustration/i });

    expect(haloImage).toHaveAttribute("src");
    expect(haloImage.getAttribute("src")).not.toContain("data:image");
    expect(bridgeImage).toHaveAttribute("src");
    expect(bridgeImage.getAttribute("src")).not.toContain("data:image");
  });

  it("shows a soften ride button above end session on both halo screens", () => {
    const { rerender } = render(
      <MemoryRouter initialEntries={["/halo-display"]}>
        <Routes>
          <Route path="/halo-display" element={<HaloDisplayScreen />} />
          <Route path="/halo-display/reports" element={<HaloDisplayReportsScreen />} />
        </Routes>
      </MemoryRouter>,
    );

    let buttons = screen.getAllByRole("button");
    expect(screen.getByRole("button", { name: /soften ride/i })).toBeInTheDocument();
    expect(buttons.findIndex((button) => button.textContent === "Soften Ride")).toBeLessThan(
      buttons.findIndex((button) => button.textContent === "End Session"),
    );

    rerender(
      <MemoryRouter initialEntries={["/halo-display/reports"]}>
        <Routes>
          <Route path="/halo-display" element={<HaloDisplayScreen />} />
          <Route path="/halo-display/reports" element={<HaloDisplayReportsScreen />} />
        </Routes>
      </MemoryRouter>,
    );

    buttons = screen.getAllByRole("button");
    expect(screen.getByRole("button", { name: /soften ride/i })).toBeInTheDocument();
    expect(buttons.findIndex((button) => button.textContent === "Soften Ride")).toBeLessThan(
      buttons.findIndex((button) => button.textContent === "End Session"),
    );
  });
});
