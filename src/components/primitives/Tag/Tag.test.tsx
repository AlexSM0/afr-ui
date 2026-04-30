import {render, screen} from "@testing-library/react"
import { Tag } from "./Tag"

describe("Tag", () => {
    it("renders children", () => {
        render(<Tag>Admin</Tag>);

        expect(screen.getByText("Admin")).toBeInTheDocument();
    });

    it("renders as span", () => {
        render(<Tag>Admin</Tag>);
        
        expect(screen.getByText("Admin").tagName).toBe("SPAN");
    });

    it("passes id prop", () => {
        render(<Tag id="admin-tag">Admin</Tag>);

        expect(screen.getByText("Admin")).toHaveAttribute("id", "admin-tag");
    });

    it("passes data-testid prop", () => {
        render(<Tag data-testid="tag">Admin</Tag>);

        expect(screen.getByTestId("tag")).toBeInTheDocument();
    });

    it("merges custom className", () => {
    render(<Tag className="py-1">Admin</Tag>);

        expect(screen.getByText("Admin")).toHaveClass("py-1");
    });

    it("applies variant classes", () => {
        render(<Tag variant={"secondary"}>Admin</Tag>);

        expect(screen.getByText("Admin")).toHaveClass("text-mist-100");
    });

    it("applies size classes", () => {
        render(<Tag size={"sm"}>Admin</Tag>);

        expect(screen.getByText("Admin")).toHaveClass("text-xs");
    });

    it("renders without children", () => {
        render(<Tag/>);
    });
});