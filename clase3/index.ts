type Usuario = {
    username : string;
    role : string;
    experiencia: number;
}

let Desarrollador : Usuario = {
    username: "JuanDev",
    role: "FronEnd",
    experiencia: 5
};
//forma tradicional 
let nombre = Desarrollador.username;
console.log(nombre);
const { username, role, experiencia } = Desarrollador;
console.log(username, role, experiencia);

let coord :[number, number] = [146.45, -87.56];
const [lat, long] = coord;
console.log(lat, long);