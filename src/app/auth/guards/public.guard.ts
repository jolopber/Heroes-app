import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, CanMatchFn, Route, Router, RouterStateSnapshot, UrlSegment } from "@angular/router";
import { map, Observable, tap } from "rxjs";
import { AuthService } from "../services/auth.service";





const checkAuthStatus = ():  Observable<boolean> => {
  const authService: AuthService = inject(AuthService);
  const router: Router = inject(Router);

  return authService.checkAuthentication()
      .pipe(
        tap((isAuthenticated) => console.log('Authenticated: ', isAuthenticated)),
        map((isAuthenticated) => {
          if (isAuthenticated) {
            router.navigate(['./']);
                return false;
          }
           return true;
        })
      )
  
}

export const canActivateGuardAuth: CanActivateFn = ( //Hay que tener en cuenta el tipado CanActiveFn
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) => {   

    return checkAuthStatus();
  };

  export const canMatchGuardAuth: CanMatchFn = ( //Tipado CanMatchFN
      route: Route,
      segments: UrlSegment[]
    ) => {   
      return checkAuthStatus();
    };
