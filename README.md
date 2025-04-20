# Greeter Button

## Virtual DOM Usage

I use Virtual DOM, it provides efficient DOM updates and integrates well with modern reactivity patterns. Moreover it also provides scalability in case we want to extend the Greeter Button or make other new components.

## Usage in Third-party App

```html
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="../dist/greeter.css" />
    <title>Greeter Button Example</title>
    <script src="https://cdn.jsdelivr.net/npm/vue@3"></script>
  </head>
  <body>
    <div id="greeter-btn" />
    <script src="../dist/greeter-component.js"></script>
    <script>
      window.Greeter.init("#greeter-btn", {
        message: "Hi this is an example usage of Greeter Button",
      });
    </script>
  </body>
</html>
```

## Passing Props

The only props passed for the GreeterButton is only a `message` as what the requirement needs, but it can receive other props like below example:

```js
window.Greeter.init("#greeter-btn", {
  message: "Hi this is an example usage of Greeter Button",
  'aria-label': 'button',
  'style': 'font-size:24px;'
});
```

## Running Tests

```bash
npm install
npm run test
```

\*/

## Build App

```bash
npm run build
```

\*/
