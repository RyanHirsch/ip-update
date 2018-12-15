import AbortController from "abort-controller";
import nodeFetch, { Request } from "node-fetch";
import { Observable } from "rxjs";

export default function fetch(options: string | Request): Observable<IpInfo> {
  const controller = new AbortController();

  return new Observable(subscriber => {
    nodeFetch(options, { signal: controller.signal })
      .then((response: any) => {
        return response.json();
      })
      .then((json: IpInfo) => {
        subscriber.next(json);
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
