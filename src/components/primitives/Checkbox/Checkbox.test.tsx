import userEvent from "@testing-library/user-event";
import { Checkbox } from "./Checkbox";
import {render, screen} from "@testing-library/react"

describe("Checkbox", () => {

    describe("rendering", () => {

        it("renders checkbox", () => {
            render(<Checkbox />);

            expect(screen.getByRole("checkbox")).toBeInTheDocument();
        });

        it("renders label", () => {
            render(<Checkbox label="Accept terms" />);

            expect(screen.getByText("Accept terms")).toBeInTheDocument();
        });   

        it("renders helper text", () => {
            render(<Checkbox helperText="Required field" />);

            expect(screen.getByText("Required field")).toBeInTheDocument();
        });     
    })
    describe("Props", () => {

        it("renders checked state", () => {
            render(<Checkbox checked readOnly />);

            expect(screen.getByRole("checkbox")).toBeChecked();
        });

        it("renders disabled state", () => {
            render(<Checkbox disabled />);

            expect(screen.getByRole("checkbox")).toBeDisabled();
        });

        it("applies size styles", () => {
            render(<Checkbox size="lg" />);

            expect(screen.getByRole("checkbox")).toHaveClass("w-5");
        });

        it("applies error state styles", () => {
            render(<Checkbox state="error" />);

            expect(screen.getByRole("checkbox")).toHaveClass("accent-red-600");
        });

        it("passes id prop", () => {
            render(<Checkbox id="terms" />);

            expect(screen.getByRole("checkbox"))
            .toHaveAttribute("id", "terms");
        });

        it("passes data-testid prop", () => {
            render(<Checkbox data-testid="checkbox" />);

            expect(screen.getByTestId("checkbox"))
            .toBeInTheDocument();
        });
    });

    describe("Functionalities", () => {

        it("toggles checkbox when clicked", async () => {
            const user = userEvent.setup();

            render(<Checkbox />);

            const checkbox = screen.getByRole("checkbox");

            await user.click(checkbox);

            expect(checkbox).toBeChecked();
        });

        it("calls onChange when clicked", async () => {
            const user = userEvent.setup();

            const handleChange = vi.fn();

            render(<Checkbox onChange={handleChange} />);

            await user.click(screen.getByRole("checkbox"));

            expect(handleChange).toHaveBeenCalled();
        });

        it("does not toggle when disabled", async () => {
            const user = userEvent.setup();

            render(<Checkbox disabled />);

            const checkbox = screen.getByRole("checkbox");

            await user.click(checkbox);

            expect(checkbox).not.toBeChecked();
        });

        it("can be focused with keyboard", async () => {
            const user = userEvent.setup();

            render(<Checkbox />);

            const checkbox = screen.getByRole("checkbox");

            await user.tab();

            expect(checkbox).toHaveFocus();
        });

        it("toggles checkbox with keyboard", async () => {
            const user = userEvent.setup();

            render(<Checkbox />);

            const checkbox = screen.getByRole("checkbox");

            await user.tab();
            await user.keyboard("[Space]");

            expect(checkbox).toBeChecked();
        });
    });

    describe("Accessibility", () => {

        it("associates label with checkbox", () => {
            render(<Checkbox label="Accept" id="accept" />);

            const checkbox = screen.getByLabelText("Accept");

            expect(checkbox).toBeInTheDocument();
        });

        it("links helper text with aria-describedby", () => {
            render(<Checkbox helperText="Required" />);

            const checkbox = screen.getByRole("checkbox");

            expect(checkbox).toHaveAttribute("aria-describedby");
        });
    })

});