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

  const useEffect = (cb, depArr) => {
    const oldDeps = hooks[idx]
    let hasChanged = true
    if (oldDeps) {
      hasChanged = depArr.some((dep, index) => !Object.is(dep, oldDeps[index]))
    }
    if (hasChanged) cb()
    hooks[idx] = depArr
    idx++
  }

  const render = Component => {
    idx = 0
    const c = Component()
    c.render()
    return c
  }

  return { useState, useEffect, render }
})()

const MyComponent = () => {
  const [count, setCount] = React.useState(1)
  const [text, setText] = React.useState('default name')
  React.useEffect(() => { console.log('changed') }, [text, count])

  return {
    render: () => console.log({ count, text }),
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