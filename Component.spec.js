import Component from './Component.svelte'

test('The Component component should exist', () => {
  const component = new Component({ target: document.body })
  expect(component).toBeTruthy()
})