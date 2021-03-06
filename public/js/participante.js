


/////////////// vistas participantes /////////////////////////////
function cargarParticipantes()
{
        var url = "../core/controllers/participantesController.php";
        var metodo = "indexParticipante";

        $.post(url,{metodo:metodo}, function(data){
        $("#page-wrapper").html(data);
        });
}

function cargarPredios()
{       
        var url = "../core/controllers/prediosController.php";
        var metodo = "indexPredio";

        $.post(url,{metodo:metodo}, function(data){
        $("#page-wrapper").html(data);
        });
}



function cargarRelaciones()
{
        var url = "../core/controllers/relacionesController.php";
        var metodo = "indexRelacion";

        $.post(url,{metodo:metodo}, function(data){
        $("#page-wrapper").html(data);
        });
}















function cargarCreateParticipante()
{
        var url = "../core/controllers/participantesController.php";
        var metodo = "createParticipante";

        $.post(url,{metodo:metodo}, function(data){
        $("#page-wrapper").html(data);
        });
}

function cargarEditParticipante(id)
{	
	var url = "../core/controllers/participantesController.php";
        var metodo = "editParticipante";
        var di = "id="+id;

        $.post(url,{metodo:metodo, id:id}, function(data){
        $("#page-wrapper").html(data);
        });

}


////////crud participantes////////

function storeParticipante()
{
	var datos = $('#form-create').serialize();
	var metodo = "&metodo=storeParticipante";
	var url = "../core/controllers/participantesController.php";

	  $.post(url,datos+metodo, function(data){
        $("#page-wrapper").html(data);
        });
}



function  updateParticipante(id)
{
	var datos = $('#form-create').serialize();
	var metodo = "metodo=updateParticipante";
	var url = "../core/controllers/participantesController.php";

	  $.post(url,datos+'&'+metodo+'&'+'id='+id, function(data){
        $("#page-wrapper").html(data);
        });
}


/////////////vistas  roles //////////////

function cargarUsuariosParticipantes()
{
        var url = "../core/controllers/participantesController.php";
        var metodo = "indexUsuariosParticipante";

        $.post(url,{metodo:metodo}, function(data){
        $("#page-wrapper").html(data);
        });
}

///////////////otras funciones


function validarDC()
{
        var url = "../core/controllers/participantesController.php";
        var metodo = "validarDcParticipante";
        var dc = $('#dc').val();

        $.post(url,{metodo:metodo, dc:dc}, function(data){
       // console.log(data);
                if(data == 0)
                {
                    $('#storeParticipante, #relacionar2, #relacionar_dueno2').show();
                    $('#cancelarStoreParticipante, #relacionar, #relacionar_dueno').hide();

                    $('input[name=nom]').val('');
                    $('input[name=email]').val('');
                    $('input[name=direccion]').val('');
                    $('input[name=telefono]').val('');
                        
                }else{
                        datos = jQuery.parseJSON(data);
                        $('input[name=id]').val(datos.id_datos);
                        $('input[name=nom]').val(datos.nom_datos);
                        $('input[name=email]').val(datos.email);
                        $('input[name=direccion]').val(datos.direccion);
                        $('input[name=telefono]').val(datos.telefono);
                                if(datos.tipo_persona=='NATURAL')
                                {      
                                        $('#persona').find("option[value='NATURAL']").remove();
                                        $('#persona').append('<option value="'+datos.tipo_persona+'" selected="selected">'+datos.tipo_persona+'</option>');                 
                                }else if(datos.tipo_persona=='JURIDICA')
                                {
                                        $('#persona').find("option[value='JURIDICA']").remove();
                                        $('#persona').append('<option value="'+datos.tipo_persona+'" selected="selected">'+datos.tipo_persona+'</option>');
                                }
                        $('#storeParticipante, #relacionar2, #relacionar_dueno2').hide();
                        $('#cancelarStoreParticipante, #relacionar, #relacionar_dueno').show();
                }  
        });
}

function cambioPersona()
{
        var persona = $('#persona').val();

        if(persona == 'NATURAL'){
                $('#representante').hide();
        }else if(persona == "JURIDICA"){
                 $('#representante').show();
        } 
}



