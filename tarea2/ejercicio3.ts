const evento = {
  tipo: "CLICK",
  coordenadas: { x: 100, y: 200 },
  usuario: "Ana"
};

const { tipo, coordenadas: { x, y }, usuario } = evento;

console.log(tipo, x, y, usuario);
