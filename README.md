# Calculator

A clean, feature-rich, and responsive calculator web application built as part of [The Odin Project](https://www.theodinproject.com/) curriculum. 

## Live Demo & Links

- **Live Demo:** [View Live](https://mohamedmostafakhudari.github.io/Calculator/)
- **Repository:** [GitHub Repository](https://github.com/mohamedmostafakhudari/Calculator)

## Features

- **Basic Operations:** Addition, subtraction, multiplication, and division with proper error handling (e.g., division by zero).
- **Robust Edge Case Handling:** 
  - Chain evaluations and sequential operator management.
  - Single decimal constraint per number.
  - Smart state clearing and automatic result resetting upon entering a new digit.
- **User Experience:** 
  - Full keyboard support alongside clickable on-screen buttons.
  - Backspace / undo functionality for correcting mistakes.
  - Long decimal rounding to prevent display overflow.

## Built With

- **HTML5**
- **CSS3** (utilizing CSS Custom Properties and modular stylesheets)
- **Vanilla JavaScript (ES6+ Modules)**

## Architecture

The project follows the **MVC (Model-View-Controller)** architectural pattern to ensure clean separation of concerns:
- **Model (`calculator.js`):** Handles the core calculation logic and state management.
- **View (`ui.js`):** Manages DOM updates, button states, and display rendering.
- **Controller (`main.js`, `keyboard.js`):** Coordinates user interactions from both mouse clicks and keyboard events.

## Getting Started

To run this project locally, clone the repository and open `index.html` using a modern browser or a local development server (such as Live Server in VS Code):

```bash
git clone https://github.com/mohamedmostafakhudari/Calculator.git
cd Calculator
```

## License

This project is open source and available under the [MIT License](LICENSE).