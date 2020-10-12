const cars=[
    {
        id: 1,
        marca: 'Renault',
        modelo: 'Logan',
        color: 'Blanco',
        anio: 2012,
        precio: 2000000 
    },

    {
        id:2,
        marca: 'Renault',
        modelo: 'Clio',
        color: 'Rojo',
        anio: 2015,
        precio: 1000000
    }

]
let editingCar=false;

function submitCar(){
    if(editingCar){
        editCar();
    }else{
        
        addCar();
    }
}


function printCars(){
    const tbody=document.getElementById('cars-tbody')
    tbody.innerHTML="";

    cars.forEach((car) => {
        const td=`<tr>

                    <td>${car.marca}</td>
                    <td>${car.modelo}</td>
                    <td>${car.color}</td>
                    <td>${car.anio}</td>
                    <td>${car.precio}</td>
                    <td>
                                <button class="btn btn-success" onclick="removeCar(${car.id})">
                                    Eliminar
                                </button>
                            </td>
                            <td>
                                <button class="btn btn-success" onclick="editButtonCar(${car.id})">
                                    Editar
                                </button>
                            </td>
        
                </tr>`
        
        tbody.innerHTML+=td;
    });
}


function addCar(){
   
    const tbody=document.getElementById('cars-tbody')

    const brand=document.getElementById('brand').value;
    const model=document.getElementById('model').value;
    const color=document.getElementById('color').value;
    const year=document.getElementById('year').value;
    const price=document.getElementById('price').value;

    const newCar = {

        id:cars.length+1,
        marca: brand,
        modelo:model,
        color:color,
        anio:year,
        precio:price
    }

    cars.push(newCar)
    printCars()
    
}

function removeCar(id){
    const position=cars.findIndex((car)=>car.id===id);
    cars.splice(position, 1);
    printCars();
}

function editButtonCar(id){
    const car=cars.find((car)=>car.id===id);
    const brand=document.getElementById('brand').value=car.marca;
    const model=document.getElementById('model').value=car.modelo;
    const color=document.getElementById('color').value=car.color;
    const year=document.getElementById('year').value=car.anio;
    const price=document.getElementById('price').value=car.precio;
    editingCar=car;
    
}

function editCar(){
    const brand=document.getElementById('brand').value;   
    const model=document.getElementById('model').value;  
    const color=document.getElementById('color').value;  
    const year=document.getElementById('year').value; 
    const price=document.getElementById('price').value;
    
    editingCar.marca=brand;
    editingCar.modelo=model;
    editingCar.color=color;
    editingCar.anio=year;
    editingCar.precio=price;
    editingCar=false;
    document.getElementById('brand').value="";   
    document.getElementById('model').value="";;  
    document.getElementById('color').value="";;  
    document.getElementById('year').value="";; 
    document.getElementById('price').value="";;
    printCars();
}



printCars();