interface HttpResponse {
  status: number;
  statusText: string;
  address: string;
  json?: Object;
  text?: string;
  blob?: any;
  arrayBuffer?: any;
}
