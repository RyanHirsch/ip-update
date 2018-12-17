import fetch from "./fetch";
import { Response } from "node-fetch";
import { mergeMap } from "rxjs/operators";

(() =>
  fetch("http://ifconfig.co/json")
    .pipe(mergeMap((resp: Response): Promise<IpInfo> => resp.json()))
    .subscribe(ipInfo => console.log(`IP: ${ipInfo.ip}`)))();
