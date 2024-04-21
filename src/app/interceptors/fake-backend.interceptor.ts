import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { delay, dematerialize, materialize, of, throwError } from 'rxjs';

import { users } from '../data';

export const fakeBackendInterceptor: HttpInterceptorFn = (req, next) => {
  const { url, method, body } = req;

  return handleRoute();

  function handleRoute() {
    switch (true) {
      case url.endsWith('/authenticate') && method === 'POST':
        return authenticate();
      default:
        return next(req);
    }
  }

  function authenticate() {
    const { username, password } = body as any;
    const user = users.find((x) => x.username === username);
    if (!user) {
      console.error('Username or password is incorrect');
      return error('Username or password is incorrect');
    }
    return ok({
      id: user.id,
      username: user.username,
      roles: user.roles,
    });
  }

  function ok(body: any) {
    return of(new HttpResponse({ status: 200, body })).pipe(delay(500));
  }

  function error(message: string) {
    return throwError(() => ({ status: 400, error: { message } })).pipe(
      materialize(),
      delay(500),
      dematerialize()
    );
  }
};
