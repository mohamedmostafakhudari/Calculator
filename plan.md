## I can do math operations
### UI?
  yes, buttons and display
### Input?
  - click event
  - data about the clicked button
    - value
    - type
### Output
  - display of the user clicked buttons
  - result of the operation
### Plan
- When a user click a button
- IF button is digit
  - IF current operator is equal sign
    - RESET calculator state
  - IF operator exists
    - ADD digit to secondOperand
  - ELSE
    - ADD digit to firstOperand
- IF button is operator
  - IF not firstOperand
    - DO nothing
  - IF firstOperand and not secondOperand
    - SET operator to the current button value
  - IF firstOperand and secondOperand
    - SET firstOperand to the result of evaluating the firstOperand and secondOperand using the existing operator (kind of equal function - test it!)
    - SET operator to the current button value
- IF button is operator and is equal operation
  - IF not firstOperand and secondOperand
    - DO nothing
  - ELSE
    - CALCULATE result
    - SET result to firstOperand
  