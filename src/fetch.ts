import AbortController from "abort-controller";
import nodeFetch, { Request, Response } from "node-fetch";
import { Observable } from "rxjs";

export default function fetch(options: string | Request): Observable<Response> {
  const controller = new AbortController();
  const address = typeof options === "string" ? options : options.url;

  return new Observable(subscriber => {
    nodeFetch(options, { signal: controller.signal })
      .then(async fetchResponse => {
        subscriber.next(fetchResponse);
        subscriber.complete();
      })
      .catch((err: any) => {
        if (err.name === "AbortError") {
          return;
        }
        subscriber.error();
      });

    return () => {
      controller.abort();
    };
  });
}
