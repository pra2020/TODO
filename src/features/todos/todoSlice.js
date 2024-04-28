import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    // {
    //   id: 1,
    //   text: "Hello",
    // },
  ],
};

export const todoSlice = createSlice({
  name: "todo", // name of the slice
  initialState, // initial state
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(), // nanoid is used to genenerate unique id
        text: action.payload,
      };

      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      // state will give current state value
      state.todos = state.todos.filter((todo) => todo.id != action.payload); // whatever params are passed while calling reducers that will come into payload object
    },
    updateTodo: (state, action) => {
      state.todos.map((item) => {
        if (item.id === action.payload.id) {
          item.text = action.payload.text;
        }
      });
    },
  },
});

// export all the functionalities to use in other comps
export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

// export to register all the reducers in store
export default todoSlice.reducer;
