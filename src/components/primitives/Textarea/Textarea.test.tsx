import {render, screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Textarea } from "./Textarea"

describe("Textarea", () => {

    describe("rendering", () => {

        it("renders Textarea without crashing", () => {
            render(<Textarea />);

            expect(screen.getByRole("textbox")).toBeInTheDocument();
        });

        it("renders label when provided", () => {
            render(<Textarea label="Email" />);

            expect(screen.getByText("Email")).toBeInTheDocument();
        });

        it("renders helper text", () => {
            render(<Textarea helperText="Help message" />);

            expect(screen.getByText("Help message")).toBeInTheDocument();
        });

    });

    describe("props", () => {

        it("applies variant styles", () => {
            render(<Textarea variant={"primary"}/>)

            expect(screen.getByRole("textbox")).toHaveClass("focus:ring-sky-400")
        });

        it("applies size styles", () => {
            render(<Textarea size={"sm"}/>)

            expect(screen.getByRole("textbox")).toHaveClass("w-48")
        });

        it("applies state styles", () => {
            render(<Textarea state={"error"}/>)

            expect(screen.getByRole("textbox")).toHaveClass("border-red-500")
        });

        it("passes id prop", () => {
            render(<Textarea id={"Textarea-id"}/>)

            expect(screen.getByRole("textbox")).toHaveAttribute("id", "Textarea-id")
        });  

        it("passes datatest-id prop", () => {
            render(<Textarea data-testid={"Textarea"}/>)

            expect(screen.getByTestId("Textarea")).toBeInTheDocument()
        });

        it("reflects value prop", () => {
        render(<Textarea value="hello" readOnly />);

        expect(screen.getByDisplayValue("hello")).toBeInTheDocument();
        });
    });

    describe("functionalities", () => {
        it("allows typing", async () => {

            const user = userEvent.setup()

            render(<Textarea />);

            const textarea = screen.getByRole("textbox")

            await user.type(textarea, "hello");

            expect(textarea).toHaveValue("hello")

        })

        it("calls onChange when typing", async () => {
            const user = userEvent.setup();
            const handleChange = vi.fn();

            render(<Textarea onChange={handleChange} />);

            await user.type(screen.getByRole("textbox"), "a");

            expect(handleChange).toHaveBeenCalled();
        });

        it("does not allow typing when disabled", async () => {
            const user = userEvent.setup();
            const handleChange = vi.fn();

            render(<Textarea disabled onChange={handleChange} />);

            await user.type(screen.getByRole("textbox"), "a");

            expect(handleChange).not.toHaveBeenCalled();
        });
    });

    describe("accessibility", () => {

        it("associates label with Textarea", () => {
            render(<Textarea label="Email" id="email" />);

            const textarea = screen.getByLabelText("Email");

            expect(textarea).toBeInTheDocument();
        });   
        
        it("links helper text with aria-describedby", () => {
            render(<Textarea helperText="Help" />);

            const textarea = screen.getByRole("textbox");

            expect(textarea).toHaveAttribute("aria-describedby");
        });

        it("focuses Textarea when tabbing", async () => {
            const user = userEvent.setup();

            render(<Textarea />);

            const textarea = screen.getByRole("textbox");

            await user.tab();

            expect(textarea).toHaveFocus();
        });

    });

    describe("logic", () => {

        it("generates id when none provided", () => {
            render(<Textarea label="Email" />);

            const textarea = screen.getByLabelText("Email");

            expect(textarea.id).toBeTruthy();
        });   
    });
});