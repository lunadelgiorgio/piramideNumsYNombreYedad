import "./styles.css";

//let piramide: string;
//let i: number;

//for (i = 1; i <= 30; i--) {
//piramide = String(i).repeat(i);
//console.log(piramide)

let name: string[] = new Array(3);
let edad: number[] = new Array(3);

for (let i = 0; i < 3; i++) {
  name[i] = prompt(`ingrese el nombre: \nName ${i + 1} de 3`);

  edad[i] = Number(prompt(`ingrese la edad de ${name[i]}`));
}
if (edad[0] > edad[1] && edad[2]) {
  console.log(`${name[0]} es el de mayor edad, ya que tiene ${edad[0]}`);
} else if (edad[1] > edad[0] && edad[2]) {
  console.log(`${name[1]} es el de mayor edad, ya que tiene ${edad[1]}`);
} else if (edad[2] > edad[0] && edad[1]) {
  console.log(`${name[2]} es el de mayor edad, ya que tiene ${edad[2]}`);
}
