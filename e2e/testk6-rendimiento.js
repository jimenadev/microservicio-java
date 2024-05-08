import http from 'k6/http';

export const options = {
  stages:[
    {
        duration: '1m',
        target: 30,
    },
    {
        duration: '3m',
        target: 70,
    },
    {
        duration: '2m',
        target: 50,
    }
  ]
}



export default function(){
  const response = http.get("http://localhost:8085/greeting");
}

