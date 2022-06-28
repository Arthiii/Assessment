import { createReducer, on } from '@ngrx/store';
import { Movie } from '../models/movie';
import { getMovies } from '../store/movie.action.service';

export interface MovieState {
  movies: ReadonlyArray<Movie>;
}

const initialState: ReadonlyArray<Movie> = [];

export const movieReducer = createReducer(
  initialState,
  on(getMovies, (state) => [...state])
);