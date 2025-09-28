# GPACalculator
Updated, I added 4 universities.
Live: https://marianizamani.github.io/GPACalculator/
A simple GPA calculator I built to practise JavaScript and problem-solving.
Designed for students to quickly compute semester GPA by entering course counts and grades via the browser console.

Features

Console-based — works in any modern browser (no install required).

Calculates GPA from course grades and credit hours.

Handles majors, minors and practicals (as separate course groups).

Lightweight and easy to reuse for other projects or demos.

How it works (quick)

Open your browser and open Developer Tools → Console.

Run the calculator script (paste it into the console or load the script from an HTML file).

You’ll be prompted to enter:

Your university choice (optional prompt used for display),

Number of major courses, minor courses, practicals,

Then the grades and credit hours for each course.

The script computes and prints your semester GPA.

Usage (example interaction)

The script asks for counts (e.g., majors = 4, minors = 1, practicals = 1).

For each course you enter a numeric grade and credit hours.

At the end the calculator prints a message like:
Your semester GPA is 3.42 (Total grade points: 41.04, Total credits: 12)

How to run (two simple ways)

Option A — Quick (paste into console)

Open any web page.

Press F12 (or Ctrl+Shift+I) → Console.

Paste the calculator script and press Enter.

Follow prompts shown in the console.

Option B — HTML file

Put the script inside a <script> tag in an HTML file.

Open the file in your browser and open the console to use prompts.

Tips & notes

Use numeric grades (e.g., 3.5, 4.0) and credit hours as positive numbers.

The calculator assumes you want a simple semester GPA (not cumulative across multiple semesters).

You can adapt the script to store results or to compute CGPA by saving totals across runs.

Improvements you could add

Input validation and friendly error messages.

GUI version (HTML form) so users don’t need the console.

Save results to localStorage for cumulative CGPA tracking.

Export results to CSV or show a course-by-course breakdown.


Built by Maria — practice project for learning JavaScript and problem-solving.

Feel free to reuse and adapt. If you publish it, a small credit is appreciated 😊
