import { RequestInit } from "node-fetch";

declare module "node-fetch" {
  interface RequestInit {
    signal?: AbortSignal;
  }
}
