import { Component,OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Movie } from './models/movie';
import { DataService } from './service/data-service.service';
import { addMovies, getMovies } from './store/movie.action.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  movies: Movie[] = [];
  newMovie: Movie = new Movie();
  title = 'movieApp';
  constructor(private dataService: DataService, private store: Store) {}

  ngOnInit(): void {
    this.getAllMovies();
  }

  getAllMovies(): void {
    this.store.dispatch(getMovies());
    this.dataService.getMovies().subscribe((movies: Movie[]) => {
      this.movies = movies;
    });
  }

  addNewMovies(): void {
    this.store.dispatch(addMovies(this.newMovie));
    this.dataService.addMovies(this.newMovie).subscribe((res: any) => {
      this.getAllMovies();
      this.newMovie = new Movie();
    });
  }
}
