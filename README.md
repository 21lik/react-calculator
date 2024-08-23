# READ ME

Author: Kevin Li
<br />
Last updated August 23, 2024

A massive thank you to W3Schools, Youtube, and https://blog.logrocket.com/using-react-django-create-app-tutorial/ for helping me learn Django and integrating it with React.

## Description

This website is a simple/standard calculator application with memory storage and recall capabilities, similar to the one preinstalled on Windows 10. The frontend and arithmetic are implemented using React and Typescript, while the memory functionality is handled by a Django application backed by an SQL database.

The calculator has buttons for the ten digits, the four basic arithmetic operations (addition, subtraction, multiplication, division), negation, decimal, backspace, clearing the calculator, and clearing the entry. Order of operations is not supported.

Underneath the calculator are six buttons that perform actions on the memory using Axios API calls:
* MC: Clear the memory database.
* MR: Recall the latest memory entry.
* M+: Add the current value on the calculator display to the latest memory entry.
* M-: Subtract the current value on the calculator display from the latest memory entry.
* MS: Store the current value on the calculator display into the memory database.
* M: Toggle the display for the memory list. This list is updated whenever the database is updated.

When the memory list is shown, each entry consists of a timestamp, the value (in bold), and the word “Recall” that can be pressed to recall that memory entry to the calculator.

I also created a Django application for the history, but it has not been implemented thus far.

## Running the Application

React webpage: http://localhost:3000/
* In a cmd or Git Bash terminal, navigate to `calculator/frontend`, then enter `npm start`

Django backend: http://localhost:8000/
* In a cmd or Git Bash terminal, navigate to `calculator`, then enter `py manage.py runserver` in a cmd or Git Bash terminal

The React calculator itself can function without the Django backend, but utilizing the memory functionality requires the Django backend to be running simultaneously. Apologies in advance for any bugs that may persist in the program.