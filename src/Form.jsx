import { useState } from "react";

function Form(){

    const[nombre,setNombre] = useState("")
    const[edad,setEdad] = useState("")
    const[pokemon,setPokemon] = useState("")

    function handleNombre(e){
        setNombre(e.target.value)
    }

    function handleEdad(e){
        setEdad(e.target.value)
    }

    function handlePokemon(e){
        setPokemon(e.target.value)
    }

    function registrar(e){
        e.preventDefault();
        console.log("Usuario registrado");
        console.log(nombre);
        console.log(edad);
        console.log(pokemon);

        alert('Usuario registrado exitosamente!');
    }

    
    return(
        <div>
            <h2>Información del usuario</h2>
            <form onSubmit={registrar}>
                <div>
                    <input type="text" placeholder="Ingrese su nombre" onChange={handleNombre}/>
                    <input type="text" placeholder="Ingrese su edad" onChange={handleEdad}/>
                    <input type="text" placeholder="Ingrese su pokemon favorito" onChange={handlePokemon}/>
                    <input type="submit" value="registrar" />
                </div>
            </form>
        </div>
    )
}

export default Form;