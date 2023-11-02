# [JavaScript DOM Selector Methods](https://lenguajejs.com/javascript/dom/seleccionar-elementos-dom/)
    
## getElementById()

```javascript
const element = document.getElementById(params);
// if find some element return just one element, if not retun null
```

## getElementsByClassName()

```javascript
const elements = document.getElementsByClassName(params);
// always return a HTMLCollection as Array [] with all elmements with the class atributte match the params
```

## getElementsByTagName()

```javascript
const elements = document.getElementsByTagName(params);
// always return a HTMLCollection as Array [] with all elmements with the tag name match the params
```

## querySelector()

```javascript
const params = {
    id: '#nameOfTheId',
    class: '.nameOfTheClass',
    tag: 'nameOfTheTag'
}
const element = document.querySelector(params[CSS_Selector]);
// if find some element return just one element, if not retun null
```