// Create cookie in src/entities/models/cookie
// Create session in src/entities/models/session
// Create user in src/entities/models/user


export interface IAuthenticationService {
  validateSession(sessionId: any): Promise<{ user: any; session: any }>;
  createSession(user: any): Promise<{ session: any; cookie: any }>;
  invalidateSession(sessionId: any): Promise<{ blankCookie: any }>
}
