# React + TypeScript + Vite + RTK

This is a simple react CRUD app i used to learn the workflow of working with redux toolkit for handling global state management

## Tools

- Redux Toolkit: State Management
- Tailwind: Styling
- React: UI

## Features included

- Create new task
- Update task
- Delete Task
- Read Task
- Search filtering Option

All these states are been handled by RTK in my slice where i created a gloabal centralized store to manipulate mutating the state and dispatching actions that are available to all my app components

!I faced a bug with the updating of state in my redux store while working on the search functionality. I had to remove the search logic from the store and refactored it to be only on the UI using the .includes() array method and rendering the returned array in my TodoList.  
This .includes() method returns true for all the array if the search param is empty which in this case, my state dosen't change all added task renders as it should
