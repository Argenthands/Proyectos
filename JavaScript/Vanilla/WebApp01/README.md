# [Todo App](https://www.youtube.com/watch?v=UyYhcuv96bs&ab_channel=CarlosAzaustre-AprendeJavaScript)
***GitHub repository:*** [WebApp01]()
## Description
- This is a simple project to introduce you the basics of the **Web Development**.

## Goals

- The goal is to create a **Todo App** using **HTML**, **CSS** and **JavaScript** without any framework.

    - Add a todo
    - Remove a todo
    - Mark a todo as completed
    - Filter by completed and uncompleted todos
    - Save the todos in the local storage
- At the end of this practice, I hope you will have a better understanding of the following concepts:

    - DOM manipulation
    - Local storage
    - Event handling
    - CSS
    - HTML
    - JavaScript
    - Git & GitHub

## Steps

1. ### **Create the repository:** Create a new repository in GitHub.
    
    - **Windows**
    ```PowerShell
    New-Item -ItemType Directory -Path ".\WebApp01"
    cd WebApp01
    git init
    git remote add origin
    New-Item -ItemType File -Path ".\README.md"
    New-Item -ItemType File -Path ".\.gitignore"
    git add .
    git commit -m "Initial commit"
    git push -u origin master
    ```
    - **Linux**
    ```Bash
    mkdir WebApp01
    cd WebApp01
    git init
    git remote add origin
    touch README.md .gitignore
    git add .
    git commit -m "Initial commit"
    git push -u origin master
    ```


2. ### **Voilerplate:** Create the basic structure of the project.
    - three files: `index.html`, `style.css` and `script.js`.
    
    ***Windows***
    ```PowerShell
    New-Item -ItemType File -Path ".\index.html"
    New-Item -ItemType File -Path ".\style.css"
    New-Item -ItemType File -Path ".\script.js"
    
    ***Linux***
    ```Bash
    touch index.html style.css script.js
    ```

3. ### **HTML:** Create the basic structure of the HTML file.
    
    ```HTML
    <!-- The DOCTYPE is the declaration of the document type, and it must be the first line of the document. -->
    <!DOCTYPE html>
    <!-- The <html> tag tells the browser that this is an HTML document. 
    and the lang attribute specifies the language of the document.
    -->
    <html lang="en">
    <!-- The <head> element is a container for metadata (data about data) and is placed between the <html> tag and the <body> tag. -->
    <head>
        <!-- The <meta> tag provides metadata about the HTML document. Metadata will not be displayed on the page, but will be machine parsable. 
        with the charset attribute, we specify the character encoding for the HTML document.
        with the name attribute, we specify a name for the metadata and with the content attribute, we specify the value for the name attribute.
        -->
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- The <title> tag is required in all HTML documents and it defines the title of the document.
        you can see the title in the browser's title bar or in the page's tab. -->
        <title>TodoApp</title>
        <!-- This is the link to the CSS styles file -->
        <link rel="stylesheet" href="./styles.css" type="text/css">
    </head>
    <!-- The <body> tag defines the document's body. -->
    <body>
        <h1>Todo List</h1>

        <!-- The input tag defines an input field where the user can enter data.
        The type attribute specifies the type of input, in this case we are using the text type.
        The placeholder attribute specifies a short hint that describes the expected value of an input field.
        -->
        <input type="text" placeholder="Add a new task">

        <!-- The button tag defines a clickable button. -->
        <button>Add</button>

        <!-- The ul tag defines an unordered (bulleted) list. -->
        <ul></ul>

        <!-- this is the link to the JavasCript file -->
        <script src="./main.js"></script>
    </body>
    </html>
    ```

4. ### Open the `index.html` file in the browser and check that everything is working fine.

5. ### Add the id attributes to the input, button and ul tags.

    ```HTML
    <input id="new-task-input" type="text" placeholder="Add a new task">
    <button id="add-task-button">Add</button>
    <ul id="tasks-list"></ul>
    ```
    #### The id attribute specifies a unique id for an HTML element (the value must be unique within the HTML document) and let us access to the element using ***[The JavaScript DOM selector method](./Notes/JS_selector_methods.md)*** `getElementById()` and [The CSS DOM selector Method](./Notes/CSS_selectors.md) `#`.

6. **CSS:** Create the basic structure of the CSS file.
    
    ```CSS