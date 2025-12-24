# Project Context: JavaScript Testing Starter

## Overview
This repository serves as a starter project and collection of examples for a **JavaScript Testing Course** (likely "Code with Mosh"). It is designed to teach unit testing fundamentals, best practices, and advanced techniques using the **Vitest** framework.

The codebase includes simple logic exercises (like FizzBuzz) and simulated modules (analytics, payments) to practice various testing scenarios, including mocking and asynchronous testing.

## Tech Stack
*   **Language:** JavaScript (ES Modules via `"type": "module"`)
*   **Build Tool:** Vite
*   **Testing Framework:** Vitest
*   **Dependencies:** `delay` (used for simulating async operations)

## Directory Structure
*   **`src/`**: Contains the source code to be tested.
    *   `intro.js`: Basic functions (`max`, `fizzBuzz`) for introductory testing exercises.
    *   `core.js`, `mocking.js`: Likely contain logic for intermediate testing concepts.
    *   `libs/`: A collection of simulated library modules (`analytics.js`, `currency.js`, `email.js`, etc.) used to practice mocking and integration-style unit tests.
*   **`tests/`**: Contains the test files.
    *   `intro.test.js`: Tests corresponding to `src/intro.js`.

## Key Commands
| Command | Description |
| :--- | :--- |
| `npm test` | Runs the test suite using Vitest (watch mode by default). |
| `npm run dev` | Starts the Vite development server (if applicable for UI components). |
| `npm run build` | Builds the project using Vite. |

## Development Conventions
*   **Testing Pattern:** The project encourages the **AAA (Arrange, Act, Assert)** pattern.
    *   *Arrange:* Set up the inputs and initial state.
    *   *Act:* Execute the function or method under test.
    *   *Assert:* Verify the result matches expectations.
*   **Test Location:** Tests are located in the `tests/` directory, mirroring the structure or naming of the source files (e.g., `intro.js` -> `intro.test.js`).
*   **Framework Usage:** Uses standard Vitest imports: `describe`, `it`, `expect`.
*   **Mocking:** The `src/libs` folder suggests a strong focus on learning how to mock external dependencies (like email services or analytics) during testing.
