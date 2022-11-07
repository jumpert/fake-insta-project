import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { catchError, Observable, of, tap} from 'rxjs';
import { Chat } from '../models/chat';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private chatsUrl = 'http://localhost:3000/api/chats';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  // GET chat from mock DB
  getChat(id: number): Observable<Chat> {
    const url = `${this.chatsUrl}/${id}`;
    return this.http.get<Chat>(url)
    .pipe(
      tap(_ => this.log(`fetched chat id=${id}`)),
      catchError(this.handleError<Chat>(`getChat id=${id}`))
    );
  }

  // GET chat from mock DB
  getChats(): Observable<Chat[]> {
    return this.http.get<Chat[]>(this.chatsUrl).pipe(
      tap(_ => this.log('fetched chats')),
      catchError(this.handleError<Chat[]>('getChats'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  // TODO: implement better logging mechanism
  private log(message: string) {
    console.log(`ChatService: ${message}`);
  }
}