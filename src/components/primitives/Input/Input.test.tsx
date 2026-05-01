import {render, screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Input } from "./Input"

describe("Input", () => {

    describe("rendering", () => {

        it("renders input without crashing", () => {
            render(<Input />);

            expect(screen.getByRole("textbox")).toBeInTheDocument();
        });

        it("renders label when provided", () => {
            render(<Input label="Email" />);

            expect(screen.getByText("Email")).toBeInTheDocument();
        });

        it("renders helper text", () => {
            render(<Input helperText="Help message" />);

            expect(screen.getByText("Help message")).toBeInTheDocument();
        });

        it("renders left icon", () => {
            render(<Input leftIcon={<span>🔍</span>} />);

            expect(screen.getByText("🔍")).toBeInTheDocument();
        });

        it("renders right icon", () => {
            render(<Input rightIcon={<span>🔍</span>} />);

            expect(screen.getByText("🔍")).toBeInTheDocument();
        });

        it("renders right icon by default", () => {
            render(<Input type="search" />);

            const wrapper = screen.getByRole("searchbox").parentElement;

            const icon = wrapper?.querySelector("span");

            expect(icon).toBeTruthy();
        });
    });

    describe("props", () => {

        it("applies variant styles", () => {
            render(<Input variant={"primary"}/>)

            expect(screen.getByRole("textbox")).toHaveClass("hover:border-b-sky-400")
        });

        it("applies size styles", () => {
            render(<Input inputSize={"sm"}/>)

            expect(screen.getByRole("textbox")).toHaveClass("text-sm")
        });

        it("applies state styles", () => {
            render(<Input state={"error"}/>)

            expect(screen.getByRole("textbox")).toHaveClass("bg-red-200")
        });

        it("passes id prop", () => {
            render(<Input id={"input-id"}/>)

            expect(screen.getByRole("textbox")).toHaveAttribute("id", "input-id")
        });  

        it("passes datatest-id prop", () => {
            render(<Input data-testid={"input"}/>)

            expect(screen.getByTestId("input")).toBeInTheDocument()
        });

        it("reflects value prop", () => {
        render(<Input value="hello" readOnly />);

        expect(screen.getByDisplayValue("hello")).toBeInTheDocument();
        });
    });

    describe("functionalities", () => {
        it("allows typing", async () => {

            const user = userEvent.setup()

            render(<Input />);

            const input = screen.getByRole("textbox")

            await user.type(input, "hello");

            expect(input).toHaveValue("hello")

        })

        it("calls onChange when typing", async () => {
            const user = userEvent.setup();
            const handleChange = vi.fn();

            render(<Input onChange={handleChange} />);

            await user.type(screen.getByRole("textbox"), "a");

            expect(handleChange).toHaveBeenCalled();
        });

        it("does not allow typing when disabled", async () => {
            const user = userEvent.setup();
            const handleChange = vi.fn();

            render(<Input disabled onChange={handleChange} />);

            await user.type(screen.getByRole("textbox"), "a");

            expect(handleChange).not.toHaveBeenCalled();
        });
    });

    describe("accessibility", () => {

        it("associates label with input", () => {
            render(<Input label="Email" id="email" />);

            const input = screen.getByLabelText("Email");

            expect(input).toBeInTheDocument();
        });   
        
        it("links helper text with aria-describedby", () => {
            render(<Input helperText="Help" />);

            const input = screen.getByRole("textbox");

            expect(input).toHaveAttribute("aria-describedby");
        });

        it("focuses input when tabbing", async () => {
            const user = userEvent.setup();

            render(<Input />);

            const input = screen.getByRole("textbox");

            await user.tab();

            expect(input).toHaveFocus();
        });

    });

    describe("logic", () => {

        it("generates id when none provided", () => {
            render(<Input label="Email" />);

            const input = screen.getByLabelText("Email");

            expect(input.id).toBeTruthy();
        });   
    });
});