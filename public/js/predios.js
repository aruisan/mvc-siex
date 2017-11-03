
var url = "../core/controllers/prediosController.php";

/////////////// vistas participantes /////////////////////////////

function cargarCreatePredio()
{
        var metodo = "createPredio";

        $.post(url,{metodo:metodo}, function(data){
        $("#page-wrapper").html(data);
        });
}

function cargarCreatePredioProceso(id)
{
       var metodo = "createPredioProceso";

        $.post(url,{metodo:metodo, id:id}, function(data){
        $("#page-wrapper").html(data);
        });
}

function cargarEditPredio(id)
{	
        var metodo = "editPredio";
        var di = "id="+id;

        $.post(url,{metodo:metodo, id:id}, function(data){
        $("#page-wrapper").html(data);
        });

}

function cargarFormParticipantesPredio()
    {
        var url = "../core/controllers/participantesController.php";
        var metodo = 'createParticipante';

        $.post(url,{metodo:metodo}, function(data)
        {
        $("#formModalDueno").html(data);
        $("#formModalDemandado").html('4');
        $('#cancelarStoreParticipante, #migas, #storeParticipante').remove();
        $('#relacionar_dueno2').show();
        $('#relacionar_dueno').hide();
        });
    }

function storeParticipanteRelacion()
    {
            var datos = $('#form-create').serialize();
            var metodo = "&metodo=storeParticipanteProceso";
            var url = "../core/controllers/participantesController.php";
            alert(datos);

            $.post(url,datos+metodo, function(data){
                console.log(data);
            var datos = jQuery.parseJSON(data);

            $('#demandado, #dueno').val(datos.nom_datos+' ID: '+datos.num_dc);
            $('input[name=persona], input[name=dueno]').val(datos.id_datos);
            });
    }


function agregarPropietarioPredio(id)
{ 
        var metodo = "indexPropietarioPredio";
        $.post(url,{id:id, metodo:metodo}, function(data){
        $(".modal-body-1").html(data);
        $('#storeParticipantePredioProceso').hide();
        });
}

function validarPredio()
{
        var url = "../core/controllers/prediosController.php";
        var metodo = "&metodo=validarPredio";
        var datos = $('#form-validar-predio').serialize();
        $.post(url,datos+metodo, function(data){
           // console.log(data);
        $("#page-wrapper").html(data);
        });
}
////////crud participantes////////

function storePredio()
{
	var datos = $('#form-create-predio').serialize();
	var metodo = "metodo=storePredio";

	  $.post(url,datos+'&'+metodo, function(data){
        $("#page-wrapper").html(data);
        });
}



function  updatePredio(id)
{
	var datos = $('#form-create').serialize();
	var metodo = "metodo=updatePredio";

	  $.post(url,datos+'&'+metodo+'&'+'id='+id, function(data){
        $("#page-wrapper").html(data);
        });
}


function storeParticipantePredio(id)
{
        var datos = $('#form-create-dueno').serialize();
        var metodo = "metodo=storeParticipantePredio";
        var carga =  "carga=predio"; 

          $.post(url,datos+'&'+carga+'&'+metodo+'&id='+id, function(data){
        $(".modal-body-1").html(data);
        console.log(data);
        });
}

/////////////vistas  roles //////////////

function cargarUsuariosParticipantes()
{
        var url = "../core/controllers/participantesController.php";
        var metodo = "indexUsuariosPredio";

        $.post(url,{metodo:metodo}, function(data){
        $("#page-wrapper").html(data);
        });
}

///////////////otras funciones

