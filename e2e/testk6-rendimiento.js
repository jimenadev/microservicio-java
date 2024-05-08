import http from 'k6/http';

export const options = {
  stages:[
    {
        duration: '10s',
        target: 30,
    }
  ]
}



export default function(){
  const response = http.get("http://localhost:8085/greeting");
}

