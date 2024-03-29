import type {Joke} from '@domain/types'
import type {JokeState as State} from '@infrastructure/types'
import {
  createSlice,
  PayloadAction,
  ActionReducerMapBuilder,
} from '@reduxjs/toolkit'
import {container} from '@application/di'

const initialState: State = {}

const slice = createSlice({
  name: 'joke',
  initialState,
  reducers: {
    update: (state: State, action: PayloadAction<Joke>) => {
      state.joke = action.payload
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<State>) =>
    builder.addMatcher(
      container.cradle.jokeRepository.hasNewJoke(),
      (state: State, action: PayloadAction<Joke>) => {
        state.joke = action.payload
      },
    ),
})

export const reducer = slice.reducer

export const {update} = slice.actions
