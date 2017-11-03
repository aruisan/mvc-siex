  $(document).ready(function(){
    indexNorma();
    });



$('#createNorma').click(function(event){event.preventDefault();  createNorma(); });


$('#storeTipoNorma').click(function(event){event.preventDefault();  storeTipoNorma(); });
$('#updateTipoNorma').click(function(event){event.preventDefault();  updateTipoNorma(); });


/////////////// vistas participantes /////////////////////////////
function indexNorma()
{
    var url = "../core/controllers/normaController.php";
    var metodo = "indexNorma";

        $.post(url,{metodo:metodo}, function(data){
            console.log(data);
            $("#tabla_norma").html(data);
        });
}




function createNorma()
{
        var url = "../core/controllers/normaController.php";
        var metodo = "createNorma";

        $.post(url,{metodo:metodo}, function(data){
            $(".modal-body").html(data);
        });
}


function storeNorma()
{       
        var url = "../core/controllers/normaController.php";
        var metodo = "&metodo=storeNorma";
        var data = $('#form-create-norma').serialize();

        $.post(url,data+metodo, function(data){
            if(data == 1)
            {
                $("#respuesta").show().html('<div class="alert alert-success text-center">Normatividad Creada Correctamente</div>');
                document.getElementById("form-create-norma").reset();
                indexNorma();
            }else{
                $("#respuesta").show().html('<div class="alert alert-danger text-center">error al crear la Normatividad </div>');
            }
        
        });
            setTimeout(function(){ $("#respuestas").hide(); }, 2000);
}

function updateNorma()
{       
        var url = "../core/controllers/normaController.php";
        var metodo = "&metodo=updateNorma";
        var data = $('#form-editar-norma').serialize();

        $.post(url,data+metodo, function(data){
            if(data == 1)
            {
                $("#respuesta").show().html('<div class="alert alert-success text-center">Normatividad Editada Correctamente</div>');
                document.getElementById("form-editar-norma").reset();
                indexNorma();
            }else{
                $("#respuesta").show().html('<div class="alert alert-danger text-center">error al Editar la Normatividad </div>');
            }
            
        });
        setTimeout(function(){ $("#respuestas").hide(); }, 2000);
}



function cargarverNorma(id)
{
        var url = "../core/controllers/normaController.php";
        var metodo = "verNorma";

        $.post(url,{metodo:metodo, id:id}, function(data){
            $("#verNormasDiv").html(data);
        });
}





function cargarEditNorma(id)
{
        var url = "../core/controllers/normaController.php";
        var metodo = "editNorma";

        $.post(url,{metodo:metodo, id:id}, function(data){
            console.log(data);
            $(".modal-body").html(data);
        });
}


function storeTipoNorma()
{
        var url = "../core/controllers/normaController.php";
        var metodo = "&metodo=storeTipoNorma";
        var data = $('#form-create-tipo-norma').serialize();

        $.post(url,data+metodo, function(data){
            console.log(data);
            if(data == 1)
            {
                $("#respuesta").show().html('<div class="alert alert-success text-center">Tipo Normatividad Creada Correctamente</div>');
                document.getElementById("form-create-tipo-norma").reset();
                createTipoNorma();
            }else{
                $("#respuesta").show().html('<div class="alert alert-danger text-center">error al crear el Tipo Normatividad </div>');
            }
           
        });
         setTimeout(function(){ $("#respuestas").hide(); }, 2000);
}


    function  createTipoNorma()
    {
        var url = "../core/controllers/normaController.php";
        var metodo = "indexTipoNorma";
        $.post(url,{metodo:metodo}, function(data){
            document.getElementById("form-create-tipo-norma").reset();
            $("#tabla-tipo-norma").html(data);
        });
    }

function editTipoNorma(id)
{
     var url = "../core/controllers/normaController.php";
        var metodo = "editTipoNorma";
        $.post(url,{metodo:metodo, id:id}, function(data){
            console.log(data);
            datos = jQuery.parseJSON(data);
            $('#form-editar-tipo-norma input[name = id]').val(datos.id_tipo_normatividad);
            $('#form-editar-tipo-norma input[name = nom]').val(datos.nom_tipo_normatividad);    
        });
}


function updateTipoNorma()
{
     var url = "../core/controllers/normaController.php";
        var metodo = "&metodo=updateTipoNorma";
        var data = $('#form-editar-tipo-norma').serialize();
        var id = $('#form-editar-tipo-norma input[name = id]').val();

        $.post(url,data+metodo, function(data){
            console.log(data);
            if(data == 1)
            {
                $("#respuesta").show().html('<div class="alert alert-success text-center">Tipo Normatividad Editada Correctamente</div>');
                document.getElementById("form-create-tipo-norma").reset();
                createTipoNorma();
                $('#modal-tipo-normas-editar').modal('hide');
            }else{
                $("#respuesta").show().html('<div class="alert alert-danger text-center">error al Editar el Tipo Normatividad </div>');
            }
           
        });
         setTimeout(function(){ $("#respuestas").hide(); }, 2000);
}



