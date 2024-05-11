import http from 'k6/http';
import { check } from 'k6';

const headers = {
  'Authorization': `Bearer dbe68ca2c444344af8603e06fe3f7288082a3d2d30c3e1dc36255fb290044a07`,
  'Project-ID': 3696227,
};

export const options = {
  vus: 30,
  duration: '10s',
  ext:{
      loadimpact:{
          name: "Test de rendimiento de microservicio-java",
          projectID: 3696227,
          staticIP: true,
      }
  }
};

export default function() {
  const response = http.get("http://localhost:8085/greeting", headers);

  // Aserción para verificar el código de estado
  check(response, {
    'Status is 200': (r) => r.status === 200,
  });


  // Aserción para verificar la duración de la solicitud
  check(response, {
    'Response time is less than 200ms': (r) => r.timings.duration < 200,
  });

}
