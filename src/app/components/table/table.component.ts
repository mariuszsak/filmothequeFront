import {Component, OnInit} from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {MovieService} from '../../../services/movie.service';
import {Observable} from 'rxjs';
import {Movie} from '../../../model/movie.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  dataSource = new MovieDataSource(this.movieService);
  displayedColumns = ['id', 'title', 'year', 'released', 'genre'];

  constructor(private movieService: MovieService) {
  }

  ngOnInit() {
  }

}

export class MovieDataSource extends DataSource<any> {
  constructor(private movieService: MovieService) {
    super();
  }

  connect(): Observable<Movie[]> {
    return this.movieService.getMovie();
  }

  disconnect() {
  }
}
