import { act, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { App } from "../App";
import { AppStateProvider } from "../state/AppStateContext";

describe("App routing", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("renders the splash screen on the root route", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>,
    );

    expect(screen.getByTestId("phone-frame")).toBeInTheDocument();
    expect(screen.getByText(/calm ride/i)).toBeInTheDocument();
  });

  it("shows the driver initialization route heading", () => {
    render(
      <MemoryRouter initialEntries={["/driver-initialization"]}>
        <App />
      </MemoryRouter>,
    );

    expect(screen.getByText(/preparing your ride/i)).toBeInTheDocument();
  });

  it("shows the approved onboarding heading copy", () => {
    render(
      <MemoryRouter initialEntries={["/onboarding/account-setup-4"]}>
        <AppStateProvider>
          <App />
        </AppStateProvider>
      </MemoryRouter>,
    );

    expect(screen.getByRole("heading", { name: "What helps you feel more comfortable?" })).toBeInTheDocument();
  });

  it("navigates from driver initialization to halo display after the timer", () => {
    render(
      <MemoryRouter initialEntries={["/driver-initialization"]}>
        <App />
      </MemoryRouter>,
    );

    act(() => {
      vi.advanceTimersByTime(3000);
    });

    expect(screen.getByRole("heading", { name: /passenger mode/i })).toBeInTheDocument();
  });
});
