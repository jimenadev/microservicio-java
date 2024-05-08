import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  stages:[
    {
        duration: '1m',
        target: 50,
    },
    {
        duration: '3m',
        target: 100,
    },
    {
        duration: '2m',
        target: 200,
    }
  ]
}



export default function(){
  const response = http.get("https://api.escuelajs.co/api/v1/");

  sleep(1);
}

