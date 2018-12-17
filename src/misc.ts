import fetch from "./fetch";
import { Response } from "node-fetch";
import { mergeMap } from "rxjs/operators";

export function fetchIp() {
  return fetch("http://ifconfig.co/json").pipe(
    mergeMap((resp: Response): Promise<IpInfo> => resp.json())
  );
}
