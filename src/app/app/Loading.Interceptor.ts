import { HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { LoaderService } from "../loader.service";
import { inject } from "@angular/core";
import { finalize } from "rxjs";

export function LoadingInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn) {
    let loaderService:LoaderService = inject(LoaderService);
    loaderService.incressCounter();
    loaderService.setLoading(true);
  return next(req).pipe(
    finalize(() => {
        loaderService.DecressCounter();
        if (loaderService.getCounter === 0 || loaderService.getCounter>=0) {
            loaderService.setLoading(false);
        }
      })
  );
}