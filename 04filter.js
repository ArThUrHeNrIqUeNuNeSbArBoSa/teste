/*------------------FILTER-----------------------------
Ele cria um novo array a partir do array pecorrido(array original )
cria um novo array APENAS com os elementos filtrados
Aceita 3 parâmetros
--item do array
--index
--array completo

*/
const car = [
    {brand: "Chevrolet", name:'Meriva', year: 2000},
    {brand: "Volksvagem", name:'Gol', year: 3000},
    {brand: "Hyundai", name:'Elantra', year: 2000},
    {brand: "Honda", name:'Civic', year: 3000},
    {brand: "Nissan", name:'Versa', year: 3000},
];

const justCar = car.filter(car => {
    return car.year >= 3000; //aqui estou pedindo para retornar apenas
                            //os itens que tem valor igual ou superior a 3000

});

console.log(car);
console.log(justCar);

//no filter ele seleciona so os itens que eu quiser 
//so retorna valores true

const family = () => [{
    element1: "father",
    element2: "mother",
    element3: "chyldren"
    
}];

console.log(family.element1);
