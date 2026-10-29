import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { debounceTime, Subject, Subscription, switchMap } from 'rxjs';

@Component({
  imports: [],
  selector: 'app-inputcheck',
  styleUrl: './inputcheck.css',
  templateUrl: './inputcheck.html',
})
export class Inputcheck {
   private http = inject(HttpClient);

  private clickSubject = new Subject<void>();
  private subscription: Subscription;

  constructor() {
    this.subscription = this.clickSubject.pipe(
      debounceTime(500),
      switchMap(() =>
        this.http.get(
          'https://jsonplaceholder.typicode.com/users'
        )
      )
    ).subscribe({
      next: (data) => {
        console.log('Users:', data);
      },
      error: (error) => {
        console.error('API error:', error);
      }
    });
  }

  search(): void {
    this.clickSubject.next();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
