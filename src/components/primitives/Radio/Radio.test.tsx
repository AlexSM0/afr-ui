import userEvent from "@testing-library/user-event";
import { Radio } from "./Radio";
import {render, screen} from "@testing-library/react"

describe("Radio", () => {

    describe("rendering", () => {

        it("renders Radio", () => {
            render(<Radio />);

            expect(screen.getByRole("radio")).toBeInTheDocument();
        });

        it("renders label", () => {
            render(<Radio label="Accept terms" />);

            expect(screen.getByText("Accept terms")).toBeInTheDocument();
        });   

        it("renders helper text", () => {
            render(<Radio helperText="Required field" />);

            expect(screen.getByText("Required field")).toBeInTheDocument();
        }); 
            
        it("supports defaultChecked", () => {
            render(<Radio defaultChecked />);

            expect(screen.getByRole("radio")).toBeChecked();
        });
    })
    describe("props", () => {

        it("renders checked state", () => {
            render(<Radio checked readOnly />);

            expect(screen.getByRole("radio")).toBeChecked();
        });

        it("renders disabled state", () => {
            render(<Radio disabled />);

            expect(screen.getByRole("radio")).toBeDisabled();
        });

        it("applies size styles", () => {
            render(<Radio size="lg" />);

            expect(screen.getByRole("radio")).toHaveClass("w-5");
        });

        it("applies invalid styles", () => {
            render(<Radio invalid={true} />);

            expect(screen.getByRole("radio")).toHaveClass("accent-red-600");
        });

        it("passes id prop", () => {
            render(<Radio id="terms" />);

            expect(screen.getByRole("radio"))
            .toHaveAttribute("id", "terms");
        });

        it("passes data-testid prop", () => {
            render(<Radio data-testid="radio" />);

            expect(screen.getByTestId("radio"))
            .toBeInTheDocument();
        });

        it("generates id when none provided", () => {
            render(<Radio label="Accept" />);

            const radio = screen.getByLabelText("Accept");

            expect(radio.id).toBeTruthy();
        });
    });

    describe("functionalities", () => {

        it("checks radio when clicked", async () => {
            const user = userEvent.setup();

            render(<Radio />);

            const radio = screen.getByRole("radio");

            await user.click(radio);

            expect(radio).toBeChecked();
        });

        it("calls onChange when clicked", async () => {
            const user = userEvent.setup();

            const handleChange = vi.fn();

            render(<Radio onChange={handleChange} />);

            await user.click(screen.getByRole("radio"));

            expect(handleChange).toHaveBeenCalled();
        });

        it("does not check when disabled", async () => {
            const user = userEvent.setup();

            render(<Radio disabled />);

            const radio = screen.getByRole("radio");

            await user.click(radio);

            expect(radio).not.toBeChecked();
        });

        it("can be focused with keyboard", async () => {
            const user = userEvent.setup();

            render(<Radio />);

            const radio = screen.getByRole("radio");

            await user.tab();

            expect(radio).toHaveFocus();
        });

        it("toggles Radio with keyboard", async () => {
            const user = userEvent.setup();

            render(<Radio />);

            const radio = screen.getByRole("radio");

            await user.tab();
            await user.keyboard("[Space]");

            expect(radio).toBeChecked();
        });

        it("allows only one radio checked per group", async () => {
            const user = userEvent.setup();

            render(
                <>
                    <Radio name="fruit" value="apple" />
                    <Radio name="fruit" value="banana" />
                </>
            );

            const radios = screen.getAllByRole("radio");

            await user.click(radios[0]);

            expect(radios[0]).toBeChecked();
            expect(radios[1]).not.toBeChecked();

            await user.click(radios[1]);

            expect(radios[0]).not.toBeChecked();
            expect(radios[1]).toBeChecked();
        });
    });

    describe("accessibility", () => {

        it("associates label with Radio", () => {
            render(<Radio label="Accept" id="accept" />);

            const radio = screen.getByLabelText("Accept");

            expect(radio).toBeInTheDocument();
        });

        it("links helper text with aria-describedby", () => {
            render(<Radio helperText="Required" />);

            const radio = screen.getByRole("radio");

            expect(radio).toHaveAttribute("aria-describedby");
        });
    })

});