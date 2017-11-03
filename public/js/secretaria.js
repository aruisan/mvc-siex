

//------------------------function botonesdel menu------------

        //cargas de las vistas
//$('.botonMenu').click(function(event){event.preventDefault(); botonMenu(this.id); });
 
function botonMenu(tipo)
{   
    var url = "../core/controllers/"+tipo.toLowerCase()+"Controller.php";
    var metodo = "index"+tipo;
    var menu = "menu"+tipo;
    $.post(url,{metodo:metodo}, function(data){
       // console.log(data);
        $("#page-wrapper").html(data);
    });
    
      $.post(url,{metodo:menu}, function(data){
        console.log(data);
        $("#side-menu").html(data);
    });

    //self[menu](); 
}

function create(proceso, metodos)
{
    var url = "../core/controllers/"+proceso+"Controller.php";
    $.post(url,{metodo:metodos}, function(data){
    $("#page-wrapper").html(data);
    });
}


function edit(id, proceso, metodos, lugar)
    {
        var url = "../core/controllers/"+proceso+"Controller.php";
        $.post(url,{metodo:metodos, id:id}, function(data){
        $(lugar).html(data);
        });
    }
            //crud 

function store(proceso, metodos)
{
    var url = "../core/controllers/"+proceso+"Controller.php";
    var metodo = "&metodo="+metodos;
    var datos = $('#form-create-'+proceso).serialize();

    $.post(url,datos+metodo, function(data){
           // console.log(data);
    $("#page-wrapper").html(data);
    });
}


function update(id, proceso, metodos, lugar )
{
    var url = "../core/controllers/"+proceso+"Controller.php";
    var metodo = "&metodo="+metodos;
    var id = "&id="+id;
    var datos = $('#form-editar-'+proceso).serialize();
    $.post(url,datos+metodo+id, function(data){
    $(lugar).html(data);
    $('.modal-impulso2').modal('hide');
    });
}



//------------------------botones de pop-up

$('#relacionar').click(function(){ relacionar();});
$('#relacionar2').click(function(){ storeParticipanteRelacion(); });

$('#relacionar_dueno').click(function(){ relacionar();});
$('#relacionar_dueno2').click(function(){ storeParticipanteRelacion(); });




//$('#usuarios').click(function(event){event.preventDefault(); cargarusuarios(); });
//$('#createProceso').click(function(){ cargarCreateProcesos(); });

$('#verNormatividad').click(function(event){event.preventDefault(); verNormatividad(); });

function verNormatividad()
{
	var url = "../core/controllers/normaController.php";
    var metodo = "indexNorma";

        $.post(url,{metodo:metodo}, function(data){
            console.log(data);
            $("#tabla_norma").html(data);
        });
}

function cargarverNorma(id)
{
        var url = "../core/controllers/normaController.php";
        var metodo = "verNorma";

        $.post(url,{metodo:metodo, id:id}, function(data){
            $("#verNormasDiv").html(data);
        });
}
