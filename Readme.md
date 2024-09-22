# Simple Calculator

A basic calculator web application that evaluates mathematical expressions input by the user. The app provides features to calculate results, reset the input, and prompts the user when they attempt to leave the page.

## Features

- Evaluate mathematical expressions using standard operators.
- Reset the input field and result display.
- Confirmation prompt when attempting to close or navigate away from the page.

## Technologies Used

- HTML
- CSS (optional for styling)
- JavaScript

## JavaScript Logic

The application uses the following JavaScript logic:

1. **Event Listeners**:
   - An event listener is attached to the **Calculate** button, which triggers when clicked.
   - Another event listener is set up for the `beforeunload` event to prompt users when they try to leave the page.

2. **Calculating Expressions**:
   - The value from the input field is retrieved and evaluated using `eval()`, which processes mathematical expressions as strings.
   - If the evaluation is successful, the result is displayed. If an error occurs (e.g., invalid input), an error message is shown.

3. **Reset Functionality**:
   - A reset button clears both the input field and the displayed result when clicked.

## Usage

1. Enter a mathematical expression in the input field.
2. Click the **Calculate** button to evaluate the expression.
3. Click the **Reset** button to clear the input and result.
4. Attempt to close or navigate away from the page to see the confirmation prompt.

## Contributing

Contributions are welcome! Feel free to submit a pull request or create an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
