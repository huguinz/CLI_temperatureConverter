# **🔥 About this project**

Project with the objective of deepening knowledge in **_JavaScript_**, using:

- **_functions;_**
- **_loops;_**
- **_logical operators;_**
- **_conditions;_**
- **_data input validations;_**
- **_CLI: inputs, output;_**
- **_external files;_**
- **_libraries;_**
- **_AND MORE!_**

### **Description ->**

This is an interactive **_Node.js_** script for converting temperatures between Celsius, Fahrenheit, and Kelvin. The user can input a value,
choose the source and destination scales, and get the result instantly. Additionally, the program keeps a history of conversions for
reference.

### **File structure ->**

> **_app.js:_** JavaScript file responsible for managing the user interface in the terminal. It handles data input and output, ensures
> proper validation, and manages errors related to user input.

> **_module/:_** Directory containing the file responsible for implementing the core temperature conversion logic. It organizes and
> separates the main conversion function from the **_app.js_** file, making the code easier to maintain and reuse.

> **_module/main.js:_** JavaScript file responsible for defining the temperature conversion function. This module exports the conversion
> function, allowing the **_app.js_** file to use it for performing the necessary calculations. The function handles conversions between
> different temperature scales (Celsius, Fahrenheit, Kelvin) based on the provided parameters.

> **_README.md:_** Project documentation containing all project information

> **_screenshots:_** Directory containing all the screenshots that are used in the **_README_** file

---

<br>
<br>
<br>

# **❗How to run the program?**

### 1️⃣ **Prerequisites ->**

- **_Have node.js installed on the machine!_**
- Optional: **_have git installed (if you want to clone the repository)_**

<br>

### 2️⃣ **Before running the program ->**

- Once in the terminal, run the **_'ls'_** command to check if you are in the correct directory. When you run it, the terminal should return
  something like:  
   <br> ![example_img][img_cli_ls]

_If this or something similar doesn't appear, you're probably in the wrong directory. Use **'cd'** to navigate to the correct folder._

<br>

### 3️⃣ **Run the program ->**

- Now that you are in the root directory, type the command **_'node app.js'_** to run the program. When you run it, the program should start
  running. This should appear in your terminal:

  <br> ![example_img][img_cli_node]

### **_Steps to use_**

1️⃣ The terminal will display the converter menu.  
2️⃣ Enter the temperature value.  
3️⃣ Choose the source scale (Celsius, Fahrenheit or Kelvin).  
4️⃣ Choose the destination scale.  
5️⃣ The result will be displayed, and you can make new conversions or exit.

<br>After that, the program will ask you to input data. **Now it's up to you!** Enter a value in numbers, say which scale you want to assign
to the value you entered, and finally enter which scale you want to convert to. Do this as many times as you want!

**_Example of the program working:_** <br> <br>

![example_img][img_cli_run] <br> <br>

---

<br>
<br>

# 🛠 Technologies used

- **_Node.js_**
- **_JavaScript_**
- **_Markdown_**
- **_Git_**
- **_Readline module (for user input)_**

---

### 📌 Author

👤 Hugo Lopes  
🔗 [LinkedIn][linkedin]

[img_cli_ls]: ./screenshots/Captura%20de%20tela%20de%202025-03-28%2020-06-44.png
[img_cli_node]: ./screenshots/Captura%20de%20tela%20de%202025-03-28%2019-33-58.png
[img_cli_run]: ./screenshots/Captura%20de%20tela%20de%202025-03-28%2020-40-30.png
[linkedin]: https://www.linkedin.com/in/hugolopessouza/
