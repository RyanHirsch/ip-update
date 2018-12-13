import nodeFetch from "node-fetch";
import { timer } from "rxjs";

const oneSecond = 1000;
const oneMinute = 60 * oneSecond;
const roughlyOneMinute = oneMinute * 1.1;

timer(roughlyOneMinute);
nodeFetch("//ifconfig.co/json")
  .then(r => {
    return r.json();
  })
  .then((ip: IpInfo) => console.log(ip.ip));
