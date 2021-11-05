let numero1 = 0 , numero2 = 0, numero3 = 0;
let respuesta, eleccion, eleccionAgenda, eleccionCalcu;
let resultadoSuma, resultadoResta, resultadoDivision, resultadoMulti, numeroTabla;
let flagAgenda = false, flagModificarAgenda = false;
let x = 0;


class Parcial{
    constructor(fecha, tema){
        this.fecha = fecha;
        this.tema = tema;
        this.estadoAprobado = false;
        this.estadoDesaprobado = false;
    }
    parcialAprobado(){
        this.estadoAprobado = true;
    }
    parcialDesaprobado(){
        this.estadoDesaprobado = true;
    }
}

const listaParciales = [];


const guardarParcialesLocal = (clave,valor) => {localStorage.setItem(clave,valor)};




$('#btnComenzar').on('click', () => {
    
    $("#bienvenida").empty();
    $("#bienvenida").css("padding", "0px");
    $('#contenidoMenu').append(`<h1 class="tituloAppMat">APP MATEMATICA</h1><h1 class="titulosApp"><h1 class="titulosApp col-lg-12">MENU PRINCIPAL</h1> <section class="seccionMenu col-lg-12"> <button type="button" class="btnMenu btn btn-outline-light" id="btnCalcu">Calculadora</button> <button type="button" class="btnMenu btn btn-outline-light" id="btnMenMay">Menor a mayor</button> <button type="button" class="btnMenu btn btn-outline-light" id="btnTabla">Tabla de multiplicar</button> <button type="button" class="btnMenu btn btn-outline-light" id="btnAgenda">Agenda de Parciales de Matematica</button> </section>`);
    $("#contenidoMenu").slideDown();
    $("#contenido").css("padding","30px");
    $("#btnCalcu").on('click', () =>{
        $("#contenido").css("display", "none");
        $("#contenido").empty();

        eleccion = "1";
        $("#contenido").append(`<div class="col-lg-12 responsiveCalcu">
                                    <table class="calculadora">
                                        <tr>
                                            <td colspan="4" style=""><span id="resultado"></span></td>
                                        </tr>
                                        <tr>
                                            <td><button id="siete">7</button></td><td><button id="ocho">8</button></td><td><button id="nueve">9</button></td><td><button id="division">/</button></td>
                                        </tr>
                                        <tr>
                                            <td><button id="cuatro">4</button></td><td><button id="cinco">5</button></td><td><button id="seis">6</button></td><td><button id="multiplicacion">*</button></td>
                                        </tr>
                                        <tr>
                                            <td><button id="uno">1</button></td><td><button id="dos">2</button></td><td><button id="tres">3</button></td><td><button id="resta">-</button></td>
                                        </tr>
                                        <tr>
                                            <td><button id="igual">=</button></td><td><button id="reset">C</button></td><td><button id="cero">0</button></td><td><button id="suma">+</button></td>
                                        </tr>
                                        <tr>
                                            
                                        </tr>
                                    </table>
                                </div>`);
        $("#contenido").slideDown(1000);
       


        let operandoa;
        let operandob;
        let operacion;
        
        $(document).ready(function(){
        $("#uno").on("click",function(){
        $("#resultado").append("1");
        });
        $("#dos").on("click",function(){
        $("#resultado").append("2");
        });
        $("#tres").on("click",function(){
        $("#resultado").append("3");
        });
        $("#cuatro").on("click",function(){
        $("#resultado").append("4");
        });
        $("#cinco").on("click",function(){
        $("#resultado").append("5");
        });
        $("#seis").on("click",function(){
        $("#resultado").append("6");
        });
        $("#siete").on("click",function(){
        $("#resultado").append("7");
        });
        $("#ocho").on("click",function(){
        $("#resultado").append("8");
        });
        $("#nueve").on("click",function(){
        $("#resultado").append("9");
        });
        $("#cero").on("click",function(){
        $("#resultado").append("0");
        });
        
        $("#reset").on("click",function(){
        resetear();
        });
        $("#suma").on("click",function(){
        operandoa = $("#resultado").html();
        operacion = "+";
        limpiar();
        });
        $("#resta").on("click",function(){
        operandoa = $("#resultado").html();
        operacion = "-";
        limpiar();
        });
        $("#multiplicacion").on("click",function(){
        operandoa = $("#resultado").html();
        operacion = "*";
        limpiar();
        });
        $("#division").on("click",function(){
        operandoa = $("#resultado").html();
        operacion = "/";
        limpiar();
        });
        $("#igual").on("click",function(){
        operandob = $("#resultado").html();
        resolver();
        });
        });
        
        //Operaciones
        function limpiar(){
        $("#resultado").html("");
        }
        
        function resetear(){
        $("#resultado").html("");
        operandoa = 0;
        operandob = 0;
        operacion = "";
        }
        
        function resolver(){
        var res = 0;
        switch(operacion){
        case "+":
        res = parseFloat(operandoa) + parseFloat(operandob);
        break;
        
        case "-":
            res = parseFloat(operandoa) - parseFloat(operandob);
            break;
        
        case "*":
        res = parseFloat(operandoa) * parseFloat(operandob);
        break;
        
        case "/":
        res = parseFloat(operandoa) / parseFloat(operandob);
        break;
        }
        resetear();
        $("#resultado").html(res);
        }


    });
    
    
    $("#btnMenMay").on('click' , () => {
        
        $("#contenido").css("display", "none");
        $("#contenido").empty();

        numero1 = 0;
        numero2 = 0;
        numero3 = 0;

        console.log("A continuacion, ingrese 3 numeros y le diremos su orden de menor a mayor:")
        
        $("#contenido").append(`<div class="col-lg-12 "><form class="seccionMenMay"><label for="fname" class="textoMenMay">Primer Numero:</label><input type="number" class="btnMenMay" id="primerNumero"><br><label for="fname" class="textoMenMay">Segundo Numero:</label><input type="number" class="btnMenMay" id="segundoNumero"><br><label for="fname" class="textoMenMay">Tercer Numero:</label><input type="number" class="btnMenMay" id="tercerNumero"><br><input type="submit" value="A Jugar!" class="btn btn-outline-light" id="btnSubMenMay"></form></div>`)
        $("#contenido").slideDown(1500);

        $(".seccionMenMay").submit(function (e){
            e.preventDefault();

            $('form').fadeOut(500);

            numero1 = $('#primerNumero').val();
            numero2 = $('#segundoNumero').val();
            numero3 = $('#tercerNumero').val();

            numero1 = parseInt(numero1);
            numero2 = parseInt(numero2);
            numero3 = parseInt(numero3);


            if((numero1 > numero2) && (numero1 > numero3) && (numero2 > numero3)){
                console.log("El orden quedo: " + numero1 + " > " + numero2 + " > " + numero3)
                
                $("#contenido").append(`<h1 class="titulosApp col-lg-12" style="display: none"><u>Resultado del Mayor a Menor:</u> </h1> <p class="subContenido col-lg-12" style="display: none">${numero1} > ${numero2} > ${numero3}</p>`);
                $("h1").fadeIn(3000);
                $("p").fadeIn(3000);
            }else if((numero1 > numero2) && (numero1 > numero3) && (numero3 > numero2)){
                console.log("El orden quedo: " + numero1 + " > " + numero3 + " > " + numero2)
                
                $("#contenido").append(`<h1 class="titulosApp col-lg-12" style="display: none"><u>Resultado del Mayor a Menor:</u> </h1> <p class="subContenido col-lg-12" style="display: none">${numero1} > ${numero3} > ${numero2}</p>`);
                $("h1").fadeIn(3000);
                $("p").fadeIn(3000);
            }else if((numero2 > numero1) && (numero2 > numero3) && (numero1 > numero3)){
                console.log("El orden quedo: " + numero2 + " > " + numero1 + " > " + numero3)
                
                $("#contenido").append(`<h1 class="titulosApp col-lg-12" style="display: none"><u>Resultado del Mayor a Menor:</u> </h1> <p class="subContenido col-lg-12" style="display: none">${numero2} > ${numero1} > ${numero3}</p>`);
                $("h1").fadeIn(3000);
                $("p").fadeIn(3000);
            }else if((numero2 > numero1) && (numero2 > numero3) && (numero3 > numero1)){
                console.log("El orden quedo: " + numero2 + " > " + numero3 + " > " + numero1)
                
                $("#contenido").append(`<h1 class="titulosApp col-lg-12" style="display: none"><u>Resultado del Mayor a Menor:</u> </h1> <p class="subContenido col-lg-12" style="display: none">${numero2} > ${numero3} > ${numero1}</p>`);
                $("h1").fadeIn(3000);
                $("p").fadeIn(3000);
            }else if((numero3 > numero1) && (numero3 > numero2) && (numero2 > numero1)){
                console.log("El orden quedo: " + numero3 + " > " + numero2 + " > " + numero1)
                
                $("#contenido").append(`<h1 class="titulosApp col-lg-12" style="display: none"><u>Resultado del Mayor a Menor:</u> </h1> <p class="subContenido col-lg-12" style="display: none">${numero3} > ${numero2} > ${numero1}</p>`);
                $("h1").fadeIn(3000);
                $("p").fadeIn(3000);
            }else if((numero3 > numero1) && (numero3 > numero2) && (numero1 > numero2)){
                console.log("El orden quedo: " + numero3 + " > " + numero1 + " > " + numero2)
                
                $("#contenido").append(`<h1 class="titulosApp col-lg-12" style="display: none"><u>Resultado del Mayor a Menor:</u> </h1> <p class="subContenido col-lg-12" style="display: none">${numero3} > ${numero1} > ${numero2}</p>`);
                $("h1").fadeIn(3000);
                $("p").fadeIn(3000);
            }

        });
     
    });
    
    $("#btnTabla").on('click', () => {
        $("#contenido").css("display", "none");
        $("#contenido").empty();
        $("#contenido").append(`<div class="col-lg-12 seccionTabla"><form class="formTabla"><h2 class="subContenido"><em>Numero para la tabla de multiplicar</em></h2><input type="number" id="inputTabla" class="btnMenMay"><button id="btnVerTabla" class="btnMenMay btn btn-outline-light">Ver Tabla</button></form></div>`);
        $("#contenido").slideDown(1000);


        $('#btnVerTabla').on('click', (e) =>{
            e.preventDefault();

            $('form').slideUp(500);

            numeroTabla = $("#inputTabla").val();
            numeroTabla = parseInt(numeroTabla);
            

            const tablaMulti = [];
            for(let i = 1; i <= 10; i++){
                let multiTabla = numeroTabla * i;
                tablaMulti.push(multiTabla);
                console.log(numeroTabla + " x " + i + " = " + multiTabla); // Mostramos por consola la tabla numerica
            } 
            
            $("#contenido").append(`<h1 class="titulosApp col-lg-12" style="display:none"><u>Tabla del ${numeroTabla}</u></h1>`);
            $("h1").fadeIn(2000);
            let y = 0;
            for(let x = 0; x < tablaMulti.length; x++){
                console.log(tablaMulti[x]);
                
                y++;

                $("#contenido").append(`<h3 class="subContenido col-lg-12" style="display:none">${numeroTabla} x ${y} = ${tablaMulti[x]}</h3>`);
                $("h3").fadeIn(2500);
            }
        });
       
        

    });

    $("#btnAgenda").on('click', () => {
        
        $("#contenido").css("display", "none");
        $("#contenido").empty();

        console.log("Entrada a Agenda");

        $("#contenido").append(`<div class="col-lg-12 "><h1 class="titulosApp"><em><u>Agenda Parciales</u></em></h1> <section class="seccionAgenda"><button type="button" class="btnAgendaStyle btn btn-outline-light" id="btnAgregar">Agregar</button> <button type="button" class="btnAgendaStyle btn btn-outline-light" id="btnModificar">Modificar Parcial</button> <button type="button" class="btnAgendaStyle btn btn-outline-light" id="btnParciales">Ver Parciales</button></section></div>`);
        $("#contenido").slideDown(1000);


        


        function getRandomArbitrary(min, max) {
            return Math.random() * (max - min) + min;
        }

        let numeroRandom = getRandomArbitrary(1,5);
        numeroRandom = Math.floor(numeroRandom);

        const URLGET = "https://jsonplaceholder.typicode.com/comments?postId=1";

        $.get(URLGET, function (respuesta,estado){
            if(estado === "success"){
                let misDatos = respuesta;
                for(const dato of misDatos){
                    if(numeroRandom == dato.id){
                        $("#contenido").append(`<h2 class="subContenido col-lg-12">Mail de la Agenda: ${dato.email}</h2>`);
                    }
                }
            }
        });

        
        $("#btnAgregar").on('click', () =>{
            flagAgenda = true;
            flagModificarAgenda = true;
            $("#contenido").empty();
            $("#contenido").append(`<form class="col-lg-12 formAgregarParcial"><h3 class="subContenido">Fecha del Parcial</h3><input type="date" value="5/11/2021" class="btnMenMay" id="btnFechaParcial"><h3 class="subContenido">Tema del Parcial</h3><input type="text" class="btnMenMay" id="btnTemaParcial"><button class="btn btn-outline-light" id="btnCrearParcial">Crear Parcial</button></form>`);
            $("form").fadeIn(500);
            $(".formAgregarParcial").submit(function (e){
                e.preventDefault();
                let fechaParcial = $("#btnFechaParcial").val();
                let temaParcial = $("#btnTemaParcial").val();
                listaParciales.push(new Parcial(fechaParcial, temaParcial));

                for(const parcial of listaParciales){
                    guardarParcialesLocal(parcial.fechaParcial, JSON.stringify(parcial));
                }

                $("#contenido").append(`<h2 class="titulosApp col-lg-12" style="display:none">Parcial agregado con Exito!</h2>`)
                $("h2").fadeIn();
            });
        });

        let flagAgendaVerModificacion = false;
        $("#btnModificar").on('click', () =>{
            if(flagModificarAgenda === false){
                if(flagAgendaVerModificacion === false){
                    $("#contenido").empty();
                    $("#contenido").append(`<h2 class="titulosApp col-lg-12" style="display:none">La agenda se encuentra vacia.</h2>`);
                    $("h2").slideDown();
                    flagAgendaVerModificacion = true;
                }
                
            }else{
                
                $("#contenido").empty();
                $("#contenido").append(`<h1 class="titulosApp col-lg-12"><u>Lista de Parciales</u></h1>`);
                $("#contenido").fadeIn();
                x = 0;
                for(let i = 0; i < listaParciales.length ; i++){
                    x++;
                    
                    console.log("El parcial con el tema '" + listaParciales[i].tema + "' tiene fecha para: " + listaParciales[i].fecha);
                    $("#contenido").append(`<h3 class="subContenido col-lg-12" style="display:none">Parcial N°${x}</h3> <p class="subContenido col-lg-12"style="display:none">Fecha del Parcial: ${listaParciales[i].fecha}<br>El tema del parcial es: <b>${listaParciales[i].tema}</b></p>`);
                    $("h3").fadeIn();
                    $("p").fadeIn();
                }

                $("#contenido").append(`<form class="formModificarParcial col-lg-12" style="display:none"><h3 class="subContenido">Ingrese el numero del parcial que quiere cambiar su estado</h3><input type="number" id="inputNumeroParcial"><button class="btn btn-outline-light" id="btnModificar">Modificar</button></form>`);
                $("form").fadeIn();

                $(".formModificarParcial").submit(function (e) {
                    e.preventDefault();
                    $("#contenido").append(`<div class="col-lg-12 seccionBotonesAgenda" style="display:none"><button type="button" class="btn btn-outline-light" id="inputAprobado">Aprobado</button><button type="button" class="btn btn-outline-light" id="inputDesaprobado">Desaprobado</button></div>`);
                    $(".seccionBotonesAgenda").slideDown(1000);

                    $("#inputAprobado").on('click', () =>{
                        let numeroParcial = $("#inputNumeroParcial").val();
                        numeroParcial = parseInt(numeroParcial);
                        if(numeroParcial > 0){
                            $("#contenido").empty();
                            numeroParcial--;
                            listaParciales[numeroParcial].estadoDesaprobado = false;
                            listaParciales[numeroParcial].parcialAprobado();
                            $("#contenido").append(`<h2 class="subContenido col-lg-12" style="display:none">Se modifico el parcial correctamente!</h2>`);
                            $("h2").fadeIn();
                        }else if(numeroParcial <= 0 || numeroParcial === undefined || numeroParcial === "" || numeroParcial === " "){
                            $("#contenido").append(`<h2 class="subContenido col-lg-12" style="display:none">Ingrese un numero posible para poder modificar el parcial deseado!</h2>`)
                            $("h2").fadeIn();
                        }
                    });

                    $("#inputDesaprobado").on('click', () =>{
                        let numeroParcial = $("#inputNumeroParcial").val();
                        numeroParcial = parseInt(numeroParcial);
                        if(numeroParcial > 0){
                            $("#contenido").empty();
                            numeroParcial--;
                            listaParciales[numeroParcial].estadoAprobado = false;
                            listaParciales[numeroParcial].parcialDesaprobado();
                            $("#contenido").append(`<h2 class="subContenido col-lg-12" style="display:none">Se modifico el parcial correctamente!</h2>`);
                            $("h2").fadeIn();
                        }else if(numeroParcial <= 0 || numeroParcial === undefined || numeroParcial === "" || numeroParcial === " "){
                            $("#contenido").append(`<h2 class="subContenido col-lg-12" style="display:none">Ingrese un numero posible para poder modificar el parcial deseado!</h2>`)
                            $("h2").fadeIn();
                        }
                    });

                    
                    
                });
            }
            
        });

        let flagAgendaVerParciales = false;
        $("#btnParciales").on('click', ()=>{
            if(flagAgenda === false){
                if(flagAgendaVerParciales === false){
                    $("#contenido").empty();
                    $("#contenido").append(`<h2 class="titulosApp col-lg-12" style="display:none">La agenda se encuentra vacia.</h2>`);
                    $("h2").slideDown();
                    flagAgendaVerParciales = true;
                }

            }else{
                $("#contenido").empty();
                $("#contenido").append(`<h1 class="titulosApp col-lg-12" style="display:none"><u>Lista de Parciales</u></h1>`);
                $("h1").fadeIn();
                x = 0;
                for(let i = 0; i < listaParciales.length ; i++){
                    x++;
                    if (listaParciales[i].estadoDesaprobado == true) {
                        console.log("El parcial con el tema '" + listaParciales[i].tema + "' tiene fecha para: " + listaParciales[i].fecha + "\nEste parcial esta Desaprobado.");
                        $("#contenido").append(`<h3 class="subContenido col-lg-12" style="display:none">Parcial N°${x}</h3> <p class="subContenido col-lg-12"style="display:none">Fecha del Parcial: ${listaParciales[i].fecha}<br>El tema del parcial es: <b>${listaParciales[i].tema}</b>. Este Parcial se encuentra <b>Desaprobado</b>.</p>`);
                        $("h3").fadeIn();
                        $("p").fadeIn();

                    }else if(listaParciales[i].estadoAprobado == true){
                        console.log("El parcial con el tema '" + listaParciales[i].tema + "' tiene fecha para: " + listaParciales[i].fecha + "\nEste parcial esta Aprobado.");
                        $("#contenido").append(`<h3 class="subContenido col-lg-12" style="display:none">Parcial N°${x}</h3> <p class="subContenido col-lg-12" style="display:none">Fecha del Parcial: ${listaParciales[i].fecha}<br>El tema del parcial es: <b>${listaParciales[i].tema}</b><br>Este Parcial se encuentra <b>Aprobado</b>.</p>`);
                        $("h3").fadeIn();
                        $("p").fadeIn();
                    }else if(listaParciales[i].estadoDesaprobado == false && listaParciales[i].estadoAprobado == false){
                        $("#contenido").append(`<h3 class="subContenido col-lg-12" style="display:none">Parcial N°${x}</h3> <p class="subContenido col-lg-12" style="display:none">Fecha del Parcial: ${listaParciales[i].fecha}<br>El tema del parcial es: <b>${listaParciales[i].tema}</b><br>Este Parcial todavia no se rindio.</p>`);
                        $("h3").fadeIn();
                        $("p").fadeIn();
                    }
                }
            }
            
        });

    });

});





