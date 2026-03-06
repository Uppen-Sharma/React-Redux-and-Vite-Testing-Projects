import { render, screen, waitFor } from "@testing-library/react";
import Users from "./Users";
import { describe, it, expect, vi, afterEach } from "vitest";

const fetchMock = vi.fn();
vi.stubGlobal("fetch", fetchMock);

function createFetchResponse(data) {
  return { json: () => new Promise((resolve) => resolve(data)) };
}

describe("Users Component", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("shows loading text initially, then renders user list", async () => {
    const fakeUsers = [
      { id: 1, name: "John Doe" },
      { id: 2, name: "Jane Smith" },
    ];

    fetchMock.mockResolvedValue(createFetchResponse(fakeUsers));

    render(<Users />);

    expect(screen.getByText(/Loading users.../i)).toBeInTheDocument();

    await waitFor(() => {
      const listItems = screen.getAllByRole("listitem");
      expect(listItems).toHaveLength(2);
      expect(screen.getByText("John Doe")).toBeInTheDocument();
    });
  });
});
