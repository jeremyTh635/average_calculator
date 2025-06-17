# average_calculator

## Background

The original idea for this simple web app came from the first real programme I actually wrote. The aim of it was to practice basic list methods and while loops in Python. Later I translated it into JavaScript and then decided to use it as the basis for a web-based average calculator. My purpose was to practice the JavaScript concepts I was learning at the time, and it seemed more interesting than following the exercises in the book. I wanted to make it both dynamic and user-friendly. In so doing, I encountered several challenges and figured out ways to overcome them.

## Challenges

- The first challenge was to derive the user’s numbers from a text field instead of a prompt. I then wanted to vary the instructions to the user in the form label. I did so by creating an array of instructions and a mechanism whereby a different instruction appears based on the length of the array of the user’s numbers.
- Next, before converting the user input to a number, I enabled the programme to remove any commas the user might have included in large numbers and used a regular expression to validate user inputs. The permitted characters include a full stop or period so the user can find the average of floats as well as whole numbers.
- A third challenge was to format the results of the calculation and display them to the user in an easily readable manner. I therefore had to work out how to insert commas into the final result if needed and get rid of any trailing zeros after the decimal point.

## Using the Calculator

The calculator is straightforward to use. First enter a number in the text box and then click enter. The box will clear enabling you to continue. After you have entered six numbers, the stop button will activate although you will have the option of entering more numbers. On clicking the stop button, the programme will display the result of the calculation below the form. In addition a new button will appear to allow you to view the numbers you input should you wish to do so.

## Installing and Running the Calculator

The calculator app consists of three files: average_calculator.html, style.css and calc_functionality.js. They can be downloaded from here. I order for the app to work, the directory structure should be the same as in this repository. Once you have downloaded the code, open it in your editor of choice and from there, run it in a browser.

If you have any comments or suggestions for improvement, I would be glad to read them.
