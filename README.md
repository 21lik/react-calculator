# READ ME

Author: Kevin Li
<br />
Last updated August 23, 2024

A massive thank you to W3Schools, Youtube, and https://blog.logrocket.com/using-react-django-create-app-tutorial/ for helping me learn Django and integrating it with React.

This project implements a simple calculator, similar to the ones Calculator app preinstalled on Windows and iPhone, using React and Typescript. It also includes the memory system using Django, which can be used to store the value currently on the display or add it to the latest memory entry. This memory list can be cleared, and the latest entry or any specific entry stored can be recalled.

React webpage: http://localhost:3000/
* In a cmd or Git Bash terminal, navigate to `calculator/frontend`, then enter `npm start`

Django backend: http://localhost:8000/
* In a cmd or Git Bash terminal, navigate to `calculator`, then enter `py manage.py runserver` in a cmd or Git Bash terminal

The React calculator itself can function without the Django backend, but utilizing the memory functionality requires the Django backend to be running simultaneously. Apologies in advance for any bugs that may persist in the program.

The history functionality is currently not implemented.