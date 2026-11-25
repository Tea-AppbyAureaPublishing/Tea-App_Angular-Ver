// Codigo de login y registro simulado para pruebas sin servidor real
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, delay, of, switchMap, tap, throwError, timer } from 'rxjs';

const API_URL = 'http://localhost:3000/api';
const TOKEN_KEY = 'tea_token';
// true  = datos simulados (no hace falta backend)
// false = backend real
const USE_SIMULATED_DATA = true;

export interface RegisterData {
  name: string;
  email: string;
  password: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  createdAt: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}

// Usuario simulado: incluye la contraseña, que el backend real nunca devuelve
interface SimulatedUser extends User {
  password: string;
}

// Usuarios de prueba (solo viven en memoria: se pierden al recargar la página)
const SIMULATED_USERS: SimulatedUser[] = [
  {
    id: 1,
    name: 'Karol',
    email: 'karol@example.com',
    password: 'password123',
    createdAt: '2026-11-11T12:00:00.000Z'
  },
  {
    id: 2,
    name: 'Jazmin',
    email: 'jazmin@example.com',
    password: 'password123',
    createdAt: '2026-11-11T12:00:00.000Z'
  }
];

@Injectable({ providedIn: 'root' })
export class Auth {
  constructor(private http: HttpClient) {
    this.logout(); // Limpiar token al iniciar la app
  }

  register(data: RegisterData): Observable<AuthResponse> {
    const request$ = USE_SIMULATED_DATA
      ? this.simulatedRegister(data)
      : this.http.post<AuthResponse>(`${API_URL}/auth/register`, data);

    return request$.pipe(tap(res => this.saveToken(res.token)));
  }

  login(data: LoginData): Observable<AuthResponse> {
    const request$ = USE_SIMULATED_DATA
      ? this.simulatedLogin(data)
      : this.http.post<AuthResponse>(`${API_URL}/auth/login`, data);

    return request$.pipe(tap(res => this.saveToken(res.token)));
  }

  getProfile(): Observable<User> {
    if (USE_SIMULATED_DATA) {
      return this.simulatedProfile();
    }
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.getToken()}`
    });
    return this.http.get<User>(`${API_URL}/users/me`, { headers });
  }

  logout(): void {
    localStorage.removeItem(TOKEN_KEY);
  }

  getToken(): string | null {
    return localStorage.getItem(TOKEN_KEY);
  }

  isLoggedIn(): boolean {
    return this.getToken() !== null;
  }

  private saveToken(token: string): void {
    localStorage.setItem(TOKEN_KEY, token);
  }

  // ===== MODO SIMULADO =====

  private simulatedLogin(data: LoginData): Observable<AuthResponse> {
    const found = SIMULATED_USERS.find(
      u => u.email === data.email.trim().toLowerCase() && u.password === data.password
    );

    if (!found) {
      return this.simulatedError(401, 'Credenciales inválidas');
    }
    return of(this.toAuthResponse(found)).pipe(delay(500));
  }

  private simulatedRegister(data: RegisterData): Observable<AuthResponse> {
    const email = data.email.trim().toLowerCase();

    if (SIMULATED_USERS.some(u => u.email === email)) {
      return this.simulatedError(409, 'El correo electrónico ya está registrado');
    }

    const newUser: SimulatedUser = {
      id: SIMULATED_USERS.length + 1,
      name: data.name,
      email,
      password: data.password,
      createdAt: new Date().toISOString()
    };
    SIMULATED_USERS.push(newUser);

    return of(this.toAuthResponse(newUser)).pipe(delay(500));
  }

  private simulatedProfile(): Observable<User> {
    // El token simulado tiene la forma "sim-token-<id>"
    const id = Number(this.getToken()?.replace('sim-token-', ''));
    const found = SIMULATED_USERS.find(u => u.id === id);

    if (!found) {
      return this.simulatedError(401, 'Token inválido o expirado');
    }
    return of(this.withoutPassword(found)).pipe(delay(300));
  }

  private toAuthResponse(user: SimulatedUser): AuthResponse {
    return { user: this.withoutPassword(user), token: `sim-token-${user.id}` };
  }

  private withoutPassword(user: SimulatedUser): User {
    const { password, ...publicUser } = user;
    return publicUser;
  }

  // Imita un error HTTP del backend, con un pequeño retraso
  private simulatedError(status: number, message: string): Observable<never> {
    return timer(500).pipe(
      switchMap(() =>
        throwError(() => new HttpErrorResponse({ status, error: { message } }))
      )
    );
  }
}