import {render, screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Button } from "./Button"

describe("button", () => {

    describe("rendering", () => {

        it("renders children", () => {
            render(<Button>Save</Button>);

            expect(screen.getByText("Save")).toBeInTheDocument();
        });

        it("renders as button", () => {
            render(<Button>Save</Button>);

            expect(screen.getByText("Save").tagName).toBe("BUTTON");
        }); 

        it("renders icon", () => {
            render(<Button icon={<span>⭐</span>} />);

            expect(screen.getByText("⭐")).toBeInTheDocument();
        });

        it("renders children and icon together", () => {
            render(<Button icon={<span>⭐</span>}>Save</Button>);

            expect(screen.getByText("Save")).toBeInTheDocument();
            expect(screen.getByText("⭐")).toBeInTheDocument();
        });

        it("renders without props", () => {
            render(<Button/>);
        });
    });

    describe("props", () => {

        it("pasees id prop", () => {
            render(<Button id="id-Save">Save</Button>);

            expect(screen.getByText("Save")).toHaveAttribute("id", "id-Save");
        });  

        it("pasees data-testid prop", () => {
            render(<Button data-testid="button">Save</Button>);

            expect(screen.getByTestId("button")).toBeInTheDocument();
        });   

        it("merges custom className", () => {
            render(<Button className="py-1">Save</Button>);

            expect(screen.getByText("Save")).toHaveClass("py-1");
        });    
        
        it("applies variant classes", () => {
            render(<Button variant={"secondary"}>Save</Button>);

            expect(screen.getByText("Save")).toHaveClass("text-white");
        });

        it("applies size classes", () => {
            render(<Button size={"sm"}>Save</Button>);

            expect(screen.getByText("Save")).toHaveClass("px-3");
        });

        it("applies disabled classes", () => {
            render(<Button disabled={true}>Save</Button>);

            expect(screen.getByText("Save")).toHaveClass("cursor-not-allowed");
        });

    });

    describe("functionalities", () => {

        it("calls function when clicked", async () => {
            const user = userEvent.setup();
            const handleClick = vi.fn();

            render(<Button onClick={handleClick}>Save</Button>);

            await user.click(screen.getByRole("button", { name: /save/i }));

            expect(handleClick).toHaveBeenCalledTimes(1);
        });

        it("calls function when enter is pressed", async () => {
            const user = userEvent.setup();
            const handleClick = vi.fn();

            render(<Button onClick={handleClick}>Save</Button>);
        
            await user.tab();
            await user.keyboard("{Enter}")

            expect(handleClick).toHaveBeenCalledTimes(1);
        });

        it("does not click activate when disabled", async () => {
            const user = userEvent.setup();
            const handleClick = vi.fn();

            render(<Button disabled={true} onClick={handleClick}>Save</Button>);
        
            await user.click(screen.getByRole("button", { name: /save/i }));

            expect(handleClick).not.toHaveBeenCalled();
        });

        it("does not activate with keyboard when disabled", async () => {
            const user = userEvent.setup();
            const handleClick = vi.fn();

            render(<Button disabled={true} onClick={handleClick}>Save</Button>);
        
            await user.tab();
            await user.keyboard("{Enter}")

            expect(handleClick).not.toHaveBeenCalled();
        });
    });

});