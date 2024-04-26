// Al cargar la página, se establece la variable en localStorage
document.addEventListener("DOMContentLoaded", function() {
    if(localStorage.getItem("Budget") === null) {
        localStorage.setItem("Budget", 2500000);
    }
    localStorage.setItem("Budget", 2500000)
});
//defino algunas variables globales para usarlas luego...
let newBudgetModified = 0
let DidNotEat = true
let newBudgetFinal = 0
let days = 1
let died = false
// Función para mostrar mensajes de alerta y activar el siguiente botón
function activarBoton(numeroBoton) {
    // Desactivamos todos los botones
    document.getElementById("boton1").disabled = true
    document.getElementById("boton2").disabled = true
    document.getElementById("boton3").disabled = true
    document.getElementById("boton4").disabled = true
    document.getElementById("boton5").disabled = true
    document.getElementById("boton6").disabled = true

    // Activamos el siguiente botón según el número pasado como argumento
    if (numeroBoton < 6) {
        document.getElementById("boton" + (numeroBoton + 1)).disabled = false
    }
//definimos la lista de objetos de comida 
    const Snacks = [
        {
            "name": "Almojábana",
            "price": 15000
        },
        {
            "name": "Subway con Gaseosa",
            "price": 23000
        }
    ]
    //definimos la tienda como una funcion para utilizarla mas adelante si Hildebrando no quiere comer
    function BuySnacks(){
        //tomamos la variable localstorage para obtener el presupuesto de 
        let newBudget = localStorage.getItem("Budget")
        //definimos la variable originalbudget para no tener que utilizar la localstorage
        const originalBudget = 2500000;
        alert("Mira Hildebrando! esa tienda está abierta, podemos comer algo allí!")
        alert("¡Bienvenido Hildebrando! Esta es la tienda de snacks del aeropuerto")
        const optionSnack = Number(prompt(`¡Tu viaje será largo! ¿Quieres comprar algo para comer antes de subir al avión?\nRecuerda que tu presupuesto es: ${newBudget}\nTienes 3 opciones Hildebrando, ingresa la que prefieras\n1: Almojábana : 15.000 pesos\n2: Subway con Gaseosa : 23.000 pesos\n3: No comer nada`))
        //definimos un switch para las opciones que tiene la tienda
        switch (optionSnack) {
            case 1:
                let buySnack = confirm("Hildebrando, ¿quieres comprar una almojábana? Puede que te caiga mal.")
                if (buySnack) {
                    const resta = originalBudget - Snacks[0].price
                    localStorage.setItem("Budget", resta)
                    newBudget = resta
                    alert(`Has comprado una almojábana!\nTu presupuesto actual es ${newBudget}. Te caerá mal la almojábana.`)
                    console.log(`Presupuesto: ${newBudget} - ${Snacks[0].name}: ${Snacks[0].price}`)
                }
                break
            case 2:
                let buySnack2 = confirm("Hildebrando, ¿quieres comprar un Subway con Gaseosa? Quedarás satisfecho.")
                if (buySnack2) {
                    const resta = originalBudget - Snacks[1].price
                    localStorage.setItem("Budget", resta)
                    newBudget = resta
                    alert(`Has comprado un Subway con Gaseosa!\nTu presupuesto actual es ${newBudget}. Estás satisfecho.`)
                    console.log(`Presupuesto: ${newBudget} - ${Snacks[1].name}: ${Snacks[1].price}`)
                }
                break
            case 3:
                let buySnack3 = confirm("Hildebrando, ¿no quieres comer nada? Tendrás que comer algo en Medellin.")
                if (buySnack3) {
                    alert("No has comprado nada. Tendrás que esperar a llegar a Medellin para comer algo.")
                    console.log(`No has comprado nada, tu presupuesto sigue siendo: ${newBudget}.`)
                    DidNotEat = false
                }
                break;
            default:
                alert("Por favor, ingresa una opción válida Hildebrando.")
                break
        }
        
        // Convertimos newBudget a número antes de devolverlo
        newBudgetFinal =  Number(newBudget)
    }
    
    
    // Mostramos el mensaje correspondiente al botón presionado
    switch (numeroBoton) {
        //primer boton 
        case 1:
            alert("¡Bienvenido Hildebrando! Esta es tu aplicación de viajes.")
            console.log("¡Bienvenido Hildebrando! Esta es tu aplicación de viajes.")
            alert("¡Prepárate para tu viaje!\nTu jefe te ha depositado 2.500.000 pesos. Este será tu presupuesto para el viaje.")
            console.log("¡Prepárate para tu viaje!\nTu jefe te ha depositado 2.500.000 pesos. Este será tu presupuesto para el viaje.")
            //defino la funcion para que Hildebrando pueda comer en macondo si decide no comer antes de salir
            BuySnacks()
            break;
            //segundo boton
        case 2:
            alert("¡Tu maleta de mano no cumple con los requisitos Hildebrando!\nLos requisitos son: 55cm de alto, 40cm de largo y 20cm de ancho\nTu maleta tiene unas medidas de: 60cm de alto, 40cm de largo y 20cm de ancho!\n No cumple con los requisitos, tendrás que sacar ropa!")
            //Valores permitidos
            const AllowedHeight = 55
            const AllowedLength = 40
            const AllowedWidth = 20
            //Valores originales
            const OriginalHeight = 60
            const OriginalLength = 40
            const OriginalWidth = 20
            //Operaciones: Funcion de reduccion...
            const ReductionFactorHeight = (AllowedHeight/OriginalHeight)
            const ReductionFactorLength = (AllowedLength/OriginalLength)
            const ReductionFactorWidth = (AllowedWidth/OriginalWidth)
            //Buscamos el factor de reduccion mas pequeño
            const ReductionFactorMin = Math.min(ReductionFactorHeight, ReductionFactorLength, ReductionFactorWidth)
            console.log(`El factor de reduccion mas pequeño es: ${ReductionFactorMin}`)
            //Multiplicamos cada dimensión original por el factor de reducción mas pequeño
            const NewHeight = Math.round(OriginalHeight*ReductionFactorMin)
            const NewLength = Math.round(OriginalLength*ReductionFactorMin)
            const NewWidth = Math.round(OriginalWidth*ReductionFactorMin)
            //Imprimimos las nuevas medidas...
            if(NewHeight <= AllowedHeight && NewLength <= AllowedLength && NewWidth <= AllowedWidth){
                alert(`¡Sacaste suficiente ropa Hildebrando!\nLas nuevas medidas de tu maleta son: ${NewHeight}cm de alto, ${NewLength}cm de largo y ${NewWidth}cm de ancho!`)
                console.log(`Las nuevas medidas de tu maleta son: ${NewHeight}cm de alto, ${NewLength}cm de largo y ${NewWidth}cm de ancho!`)
            }else{
                alert("¡Tu maleta aun no cumple con los requisitos Hildebrando!")
            }
            break;
            //tercer boton
        case 3:
            alert("¡Bienvenido a Medellin Hildebrando!")
            console.log("¡Bienvenido a Medellin Hildebrando!")
            alert("¡Hildebrando!, necesitas una red WI-FI urgentemente!\nMira! tienes una red WI-FI disponible, su nombre es 'ElPassEs' pero su clave está en codigo binario :(, tendremos que convertir ese codigo a nuestro lenguaje!")
            console.log("Convertiremos el codigo binario en un lenguaje que pueda entender Hildebrando!")
            // codigo binario:
            const ElPassEs = "01110010_01101001_01110111_01101001"
            //Dividimos la clave en partes y la convertimos en una lista separada
            const SplitPassEs = ElPassEs.split("_")
            //Luego lo transformamos en decimales con parseInt()
            const PassDecoded = SplitPassEs.map(caracter => parseInt(caracter,2))
            console.log(PassDecoded)
            //luego de codigo ascci lo transformamos a caracteres
            let Password = ""
            for (let i = 0; i < PassDecoded.length; i++) {
                Password += String.fromCharCode(PassDecoded[i]);
            }
            //listo
            alert(`¡Lo hemos descifrado!, Ya tenemos la clave de la red :), es: ${Password}\nAhora podras reservar tu habitacion en el hotel a tiempo!`)
            console.log(`la clave de la red es: ${Password}`)
            break;
            //cuarto boton
        case 4:
            //le damos la bienvenida a medellin
            alert("Felicidades!, ya llegaste a Medellin, pero las personas hablan diferente a nosotros, no podemos comunicarnos con el taxista, tendremos que ajustarnos a su idioma, yo te ayudo!")
            console.log("las personas hablan diferente a nosotros, tendremos que ajustarnos a su idioma")
            //este es la peticion que necesitamos hacer
            let Petition = "Taxi me puede llevar al hotel mariposas amarillas"
            //Reemplazamos las demas vocales por la i con el metodo replace()
            let NewPetition = Petition.replace(/[aeou]/g, "i")
            alert(`¡Ahora si podemos comunicarnos!, lo que tienes que decir para que te entiendan es esto : ${NewPetition}\nBuena suerte!`)
            //llamamos a la funcion que retorna false, si es diferente de false se vuelva a activar la funcion 
            console.log(`Esto es lo que diremos: ${NewPetition}`)
            //definimos un condicional por si Hildebrando no comio al principio e imprimimos la funcion de tienda de nuevo
            if (!DidNotEat) { 
                alert("Tienes mucha hambre Hildebrando, ¡cómprate un refrigerio!")
                BuySnacks()
            }
            break;
            //quinto boton
        case 5:
            let budgetAfterSnacks = newBudgetFinal
            //piedra papel o tijeras utilizando math floor y random 
            alert("Tenemos una problemática, el taxista no está cobrando 300 mil pesos por la carrera, demasiado costoso. Le propondremos unjuego de piedra, papel o tijeras. Si ganamos, nos llevará gratis. Si hay empate, pagaremos la mitad, y si perdemos, pagaremos los300 mil completos. ¡Vamos allá!")
            console.log("Solucionaremos el problema con un juego de piedra, papel o tijeras")
            //definimos el precio inicial del taxi
            const PriceTaxi = 300000
            // Creamos una lista con las opciones
            const opciones = ["piedra", "papel", "tijeras"]
            alert("¡El taxista accedió a jugar!")
            console.log("¡El taxista accedió a jugar!")
            // Hildebrando ingresa su opción
            const HildebrandoChoice = prompt(`Ingresa una de las siguientes opciones:\n${opciones[0]}\n${opciones[1]}\n${opciones[2]}\n\nEligecon sabiduría...`)
            // Usamos la función de Math.floor y Math.random para obtener números entre 1, 2 y 3
            const taxiChoiceIndex = Math.floor(Math.random() * 3)
            // El taxista ingresa su opción
            const taxiChoice = opciones[taxiChoiceIndex]
            //validamos las opciones en donde perdemos, empatamos, o ganamos
            if (taxiChoice === HildebrandoChoice) {
                alert(`El taxista eligió ${taxiChoice}, es un empate!\nPagaremos la mitad del precio: 150000, algo es algo...`)
                console.log("Es un empate!, Pagaremos la mitad del precio: 150000")
                budgetAfterSnacks -= PriceTaxi / 2; // Restar la mitad del precio del taxi del nuevo presupuesto
            } else if ((HildebrandoChoice === "piedra" && taxiChoice === "tijeras") || (HildebrandoChoice === "papel" && taxiChoice ==="piedra") || (HildebrandoChoice === "tijeras" && taxiChoice === "papel")) {
                alert(`El taxista eligió ${taxiChoice}, ¡GANASTE!!!\nEl taxista cumplirá su palabra y nos llevará gratis. Ahorrar es nuestrapasión :)`)
                console.log("¡Ganaste!, el taxi te sale gratis")
            } else {
                alert(`El taxista eligió ${taxiChoice}, hemos perdido :(\nCumpliremos nuestra palabra, pagaremos el precio completo. Somospersonas honestas :)`)
                console.log("Perdiste!, pagarás el precio completo ")
                // Restamos el precio del taxi solo si el PriceTaxi es menor que el presupuesto
                budgetAfterSnacks -= Math.min(PriceTaxi, budgetAfterSnacks)
            }
            //imprimimos el presupuesto dependiendo del resultado del juego
            console.log(`Tu presupuesto es de: ${budgetAfterSnacks}`)
            //definimos una nueva variablle con el retorno de budgetAfterSnacks para ppoder usarlo en el siguiente case
            if(budgetAfterSnacks){
                newBudgetModified = budgetAfterSnacks
            }
            break
            //sexto boton
        case 6:
            console.log(newBudgetModified)
            //utilizamos un bucle do while para permitirle a Hildebrando tomar sus decisiones en Macondo
            do{
                //si Hildebrando fallecio no se dejara pasar otra noche en Macondo
                if (died === true) {
                    alert("Hildebrando no puede pasar otro dia en macondo, por razones obvias, esperemos que esté en un lugar mejor")
                    break
                }
                //imprimimos las opciones 
                alert("¡Ya llegaste a tu hotel!, descansa un rato")
                const ColorChoice = prompt("Ya descansaste suficiente!\nTenemos buenas noticias, tenemos muchas opciones para disfrutar del dia!, pero el hotel tiene politicas de los colores, y tienes que vestirte de acuerdo a las politicas, estas son las opciones:\n\nAmarillo: Ir a la piscina!\nVerde: Caminata\nRojo: Playa\nAzul: Quedarse en el hotel\n\nElige con sabiduria Hildebrando... confiamos en ti").toLowerCase().trim()
                //utilizams un switch para manejar lo que ingresa Hildebrando 
                switch(ColorChoice){
                    case "amarillo":
                        const YellowChoice = confirm("Que bien! elegiste vestirte de amarillo, podremos ir a la piscina, pero tiene un olor muy fuerte, yo no entraria xD\n\nDecides entrar o mejor volver a tu cuarto de hotel? (aceptar: Entrar / cancelar: Paso...)")
                        if(YellowChoice){
                            alert("Decidiste entrar, eres temerario, pero te vas sintiendo mareado\n\nLa piscina tenia demasiado cloro y te vas sintie..d...o mareado.")
                            console.warn("Hildebrando ha muerto.")
                            alert("Hildebrando ha muerto.")
                            console.error("Se acabaron las vacaciones.")
                            console.log(`Resumen de Hildebrando:\nDias en Macondo: ${days}\nDinero gastado: ${2500000-newBudgetModified}\nSupervivencia: Murio ahogado`)
                            died = true
                        }else{
                            alert("Eres una persona sensata Hildebrando\nElegiste quedarte en tu cuarto de hotel\nEl agua de la piscina esta contaminada, viviras otro dia...")
                            console.log("Elegiste quedarte en tu cuarto de hotel")
                            console.log(`Resumen de Hildebrando:\nDias en Macondo: ${days}\nDinero gastado: ${2500000-newBudgetModified}\nSupervivencia: Logro sobrevivir a Macondo`)
                        }
                        break
                    case "verde":
                        const GreenChoice = confirm("Que bien! elegiste vestirte de Verde, podremos a caminar por los alrededores junto con el grupo, tambien podemos desviarnos por ese camino bonito que esta por alla!, aunque no creo que sea buena idea separarnos del grupo\n\nDecides separarte por el camino misterioso, o quieres seguir al grupo? (aceptar: Desviarte / cancelar: Seguir con el grupo...)")
                        if(GreenChoice){
                            alert("Decidiste desviarte, eres curioso, pero la curiosidad mató al gato\n\nDecides devolverte, ya es muy tarde, pero espera... este no es el camino de regreso, creo que estamos perdidos...")
                            console.warn("Hildebrando se perdio y se lo comió un tigre.")
                            alert("Hildebrando ha muerto.")
                            console.error("Se acabaron las vacaciones.")
                            console.log(`Resumen de Hildebrando:\nDias en Macondo: ${days}\nDinero gastado: ${2500000-newBudgetModified}\nSupervivencia: Murio perdido en el bosque`)
                            died = true
                        }else{
                            alert("Eres una persona conciente Hildebrando\nElegiste seguir al grupo y tomaste unas hermosas fotos de una cascada\nProbablemente ese camino sospechoso estaba inhabilitado... no lo se")
                            console.log("Elegiste seguir en el grupo")
                            console.log(`Resumen de Hildebrando:\nDias en Macondo: ${days}\nDinero gastado: ${2500000-newBudgetModified}\nSupervivencia: Logro sobrevivir a Macondo`)
                        }
                        break
                    case "rojo":
                        const RedChoice = confirm("Que bien! elegiste vestirte de Rojo, podemos jugar al voley y nadar en el mar, tambien podemos ir a un bar que queda muy cerca de aqui!, Aunque he oído que usan malos productos para sus cocteles\n\nDecides tomarte un coctel en el bar, o quieres disfrutar de la playa? (aceptar: Ir al Bar / cancelar: Jugar al Voley)")
                        if(RedChoice){
                            alert("Decidiste ir al bar a probar un chirrinchi, tu lado alcoholico gano esta vez\n\nEl chirrinchi tiene un sabor muy fuerte, pero puede ser una nueva variacion, o talvez no...")
                            console.warn("Hildebrando se intoxico ccon chirrinchi adulterado.")
                            alert("Hildebrando ha muerto.")
                            console.error("Se acabaron las vacaciones.")
                            console.log(`Resumen de Hildebrando:\nDias en Macondo: ${days}\nDinero gastado: ${2500000-newBudgetModified}\nSupervivencia: Murio intoxicado por chirrinchi`)
                            died = true
                        }else{
                            alert("Eres una persona inteligente Hildebrando\nDecidiste disfrutar de la playita y el sol, mientras jugabas un partido de voley con tus nuevos amigos\nQuiza los comentarios de ese bar son ciertos... no lo se")
                            console.log("Elegiste disfrutar de la playa")
                            console.log(`Resumen de Hildebrando:\nDias en Macondo: ${days}\nDinero gastado: ${2500000-newBudgetModified}\nSupervivencia: Logro sobrevivir a Macondo`)
                        }
                        break
                    case "azul":
                        const BlueChoice = confirm("Que bien! elegiste vestirte de Azul, nos quedaremos en el hotel, podemos jugar al bingo o ir a la discoteca del segundo piso, tambien podriamos ir al casino, Aunque he oído que la ludopatía es una adiccion\n\nDecides jugar un poco en el casino, o quieres sacar los pasos prohibidos en la pista de baile? (aceptar: Ir al Casino / cancelar: Bailar salsita)")
                        if(BlueChoice){
                            alert("Decidiste ir al Casino a probar suerte con el ego y el autoestima por los cielos\n\nLlevas 3 horas en el casino y llevas una mala racha, jugamos otra? o nooo, parece que nos quedamos sin dinero")
                            const PriceCasino = 2000000
                            console.warn("Hildebrando se quedo sin efectivo.")
                            alert("Hildebrando se quedo sin dinero.")
                            console.error("Se acabaron las vacaciones.")
                            console.log(`Resumen de Hildebrando:\nDias en Macondo: ${days}\nDinero gastado: ${2500000-(PriceCasino-newBudgetModified)}\nSupervivencia: Sobrevivió, pero a que costo...`)
                            died = true
                        }else{
                            let bingoWin = 300000
                            alert("Eres una persona Consciente Hildebrando\nDecidiste quedarte en la discoteca bailando y jugando bingo, y conociste a una preciosa Mancodiana, igual quedaras sin dinero xD\nLa ludopatía es un negocio, beneficioso para otros, menos para ti Hildebrando")
                            let bingo = confirm("¡Estan jugando bingo en la sala de allá! jugamos?")
                            if (bingo){
                                console.log("Elegiste jugar al bingo, podriamos ganar mucho dinero")
                                alert("¡Buenas partidas, tenemos la suerte de nuestro lado y hemos ganado muchas veces!")
                                console.log(`Hemos ganado ${bingoWin}, que buena suerte!`)
                                newBudgetModified += bingoWin
                                console.log(`tu presupuesto : ${newBudgetModified}`)
                                console.log("Elegiste quedarte en el hotel y  jugar bingo!")
                                console.log(`Resumen de Hildebrando:\nDias en Macondo: ${days}\nDinero gastado: ${2500000-newBudgetModified}\nSupervivencia: Logro sobrevivir a Macondo`)
                            }else{
                                console.log("No jugamos al bingo, pudimos ganar un buen dinero!")
                                alert("No jugamos al bingo, pudimos ganar un buen dinero!")
                                console.log("Elegiste quedarte en el hotel y  jugar bingo!")
                                console.log(`Resumen de Hildebrando:\nDias en Macondo: ${days}\nDinero gastado: ${(2500000-newBudgetModified)}\nSupervivencia: Logro sobrevivir a Macondo`)
                            }
                        }
                        break
                    default:
                        alert("No tenemos ropa de ese color Hildebrando...")
                        break
                }
                //Le preguntamos a Hildebrando si quiere pasar otra noche en Macondo y verificamos su respuesta
                const continuePlaying = confirm("¿Deseas pasar otro día en Macondo?");
                if (!continuePlaying) {
                    alert("¡Te esperamos de vuelta por Macondo! ¡Buena suerte!");
                    document.getElementById("boton6").disabled = true;
                    break;
                }else{
                    //si Hildebrando ingresa que si, incrementamos la variable de days y la verificamos para que no este mas de 4 dias en Macondo
                    days++;
                    document.getElementById("boton6").disabled = false;
                }
                //el while se repite si Hildebrando no ha fallecido de lo contrario terminara el ciclo
            } while (died === false && days < 5);
            alert("¡Se te acabaron tus dias de vacaciones Hildebrando!, pero podrás volver enn tus proximas vacaciones :), Hasta luegoooo!!!")
            break;
        default:
            break;
    }
}
//Gracias