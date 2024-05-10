import http from 'k6/http';
import { check } from 'k6';

export const options = {
  stages:[
    {
        duration: '10s',
        target: 30,
    }
  ]
}

export default function() {
  const response = http.get("http://localhost:8085/greeting");

  // Aserción para verificar el código de estado
  check(response, {
    'Status is 200': (r) => r.status === 200,
  });


  // Aserción para verificar la duración de la solicitud
  check(response, {
    'Response time is less than 200ms': (r) => r.timings.duration < 200,
  });

}
