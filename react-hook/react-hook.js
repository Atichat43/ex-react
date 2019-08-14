const React = (() => {
  let _val

  const useState = initVal => {
    const state = _val || initVal
    const setState = newValue => {
      _val = newValue
    }

    return [state, setState]
  }

  const render = Component => {
    const c = Component()
    c.render()
    return c
  }

  return { useState, render }
})()

const MyComponent = () => {
  const [state, setCount] = React.useState(1)

  return {
    render: () => console.log(state),
    click: () => setCount(state + 1),
  }
}


var app = React.render(MyComponent)
app.click()
var app = React.render(MyComponent)
app.click()