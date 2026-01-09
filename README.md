# React

- Library for web and native user interfaces (UI)
- Built by Facebook
- Used to build UI, Single page application (SPA)
- The most popular frontend framework
- Huge community, lots of packages available
- Job Opportunities

## Virtual DOM

- Uses virtual DOM for rendering
- Light-weight copy of real DOM
- Whenever state change occurs:
  - React updates the virtual DOM
  - Compares the virtual DOM with the previous Real DOM (Diffing)
  - Updates the only changed UI parts in the Real DOM (Reconciliation)

## Component

- UI block, reusable
- Functional Component (stateless), Class Component (Stateful)
- Functional Component can be made stateful now, with the use of hooks.
- Stateless component: UI cannot be updated, state can be updated.
- Stateful component: UI & state can be updated.
- Components can have its own properties (props)
- A component must always return one and only one parent element

## JSX

- JS+HTML code

## Props (Component properties)

## State

- Object that is mutable (changeable)
- State is updated on user interaction, event trigger or api calls
- Whenever state value changes, UI is re-rendered.

## Hooks

- Special function
- It is used to make functional component stateful.
- Using hooks, we can implement state management in functional component.

1. useState
2. useEffect
3. useRef (HTML element catcher)

## Routing

- Route is a url endpoint
- /, /about, /contact, /products
- Used to define which page/component to show/load on url match
- React routing

====================
- Redux state management
- Custom hooks
