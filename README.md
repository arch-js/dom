#### arch-dom

`npm install arch-dom@0.13` for `react@~0.13`
`npm install arch-dom@0.14` for `react@~0.14`

A small utility for helping to write React components without JSX.

Features:

- No need to pass `null` props when not required (just pass children) in 99% of cases.
- Pass children as function arguments rather than an array.

Usage (LiveScript):

```LiveScript
React = require 'react'
{ div, h1, span, img } = require 'arch-dom'

module.exports = class SomeComponent extends React.Component
  render: ->
    div do
      h1 "Welcome, user!"
      span "This is the home page."
      img do
        src: "http://some/image.png"
        alt: "A picture of a dolphin."
```

To wrap your own component with the DSL you can just pass it to `arch-dom`

```LiveScript
dom = require 'arch-dom'
post = dom require '../components/post'
```
