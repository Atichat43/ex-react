const React = (() => {
  let hooks = []
  let idx = 0

  const useState = initVal => {
    const state = hooks[idx] || initVal
    const _idx = idx
    const setState = newValue => {
      hooks[_idx] = newValue
    }
    idx++
    return [state, setState]
  }

  const render = Component => {
    idx = 0
    const c = Component()
    c.render()
    return c
  }

  return { useState, render }
})()

const MyComponent = () => {
  const [count, setCount] = React.useState(1)
  const [text, setText] = React.useState('default name')

  return {
    render: () => console.log({count, text}),
    click: () => setCount(count + 1),
    type: word => setText(word),
  }
}


var app = React.render(MyComponent)
app.click()
var app = React.render(MyComponent)
var app = React.render(MyComponent)
app.type('boss')
var app = React.render(MyComponent)