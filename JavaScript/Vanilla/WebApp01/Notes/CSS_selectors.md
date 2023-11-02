# [CSS selectors]()

## Universal selector
- ### Selects all elements with the `*` symbol

    **Example:**
    ```css
    * {
        color: red;
        background-color: yellow;
        border: 1px solid black;
    }
    ```

## Type selector
- ### Selects all elements with the tag name like `h1`, `p`, `div`, `span`, `ul`, `li`, `a`, etc.

    **Example:**
    ```css
    h1 {
        color: red;
        background-color: yellow;
        border: 1px solid black;
    }
    ```

## Class selector
- ### Selects all elements with the class name like `.class-name`

    **Example:**
    ```css
    .class-name {
        color: red;
        background-color: yellow;
        border: 1px solid black;
    }
    ```

## ID selector
- ### Selects all elements with the id name like `#id-name`

    **Example:**
    ```css
    #id-name {
        color: red;
        background-color: yellow;
        border: 1px solid black;
    }
    ```

## Attribute selector
- ### Selects all elements with the attribute we want to target, like `[name="value"]`, `[title="value"]`, `[href="value"]`, `[src="value"]`, etc.
    
    **Examples:**
    ```css
    [name="value"] {
        color: red;
        background-color: yellow;
        border: 1px solid black;
    }

    a[href="value"] {
        color: red;
        background-color: yellow;
        border: 1px solid black;
    }

    img[src="value"] {
        color: red;
        background-color: yellow;
        border: 1px solid black;
    }

    input[type="value"] {
        color: red;
        background-color: yellow;
        border: 1px solid black;
    }
    ```
    
## Pseudo-class selector