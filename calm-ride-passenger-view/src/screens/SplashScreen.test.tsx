import { act, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { App } from "../App";
import { AppStateProvider } from "../state/AppStateContext";

describe("SplashScreen", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("navigates to onboarding after the splash timer", async () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <AppStateProvider>
          <App />
        </AppStateProvider>
      </MemoryRouter>,
    );

    expect(screen.getByRole("heading", { name: /calm ride/i })).toBeInTheDocument();

    act(() => {
      vi.advanceTimersByTime(2500);
    });

    expect(screen.getByRole("heading", { name: /what helps you feel more comfortable/i })).toBeInTheDocument();
  });

  it("shows the uploaded Calm Ride logo art", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <AppStateProvider>
          <App />
        </AppStateProvider>
      </MemoryRouter>,
    );

    const logo = screen.getByRole("img", { name: /calm ride logo/i });

    expect(logo).toBeInTheDocument();
    expect(logo.tagName.toLowerCase()).toBe("svg");
  });
});
