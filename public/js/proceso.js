
    ////////function Vistas proceso////////

 

    function cargarEditProceso(id)
    {
        var url = "../core/controllers/procesopredialController.php";
        var metodo = "editProceso";


        $.post(url,{metodo:metodo, id:id}, function(data){
        $("#page-wrapper").html(data);
        });
    }


       

 function cargarFormParticipantes()
    {
        var url = "../core/controllers/participantesController.php";
        var metodo = 'createParticipante';

        $.post(url,{metodo:metodo}, function(data)
        {
        $("#formModalDemandado").html(data);
        $("#formModalDueno").html('');
        $('#cancelarStoreParticipante, #migas, #storeParticipante').remove();
        $('#relacionar2').show();
        $('#relacionar').hide();
        });
    }


////////crud proceso////////
    function storeProceso()
    {
        var url = "../core/controllers/procesopredialController.php";
        var metodo = "&metodo=storeProceso";
        var datos = $('#form-create-proceso').serialize();

        $.post(url,datos+metodo, function(data){
            console.log(data);
        $("#page-wrapper").html(data);
        });
    }

        function updateProceso(di)
    {
        var url = "../core/controllers/procesopredialController.php";
        var metodo = "metodo=updateProceso";
        var id = "id="+di;
        var datos = $('#form-editar-proceso').serialize();
        alert(datos);

        $.post(url,datos+'&'+metodo+'&'+id, function(data){
            console.log(data);
        $("#page-wrapper").html(data);
        });
    }


    function relacionar()
    {
        var id = $('input[name=id]').val();
        var nom = $('input[name=nom]').val();
        var dc = $('input[name=dc]').val();

        $('#demandado, #dueno').val(nom+' ID: '+dc);
        $('input[name=persona], input[name=dueno]').val(id);
    }


    function indexPredioProceso(id, expediente)
    {
        var url = "../core/controllers/procesopredialController.php";
        var metodo = "indexPredioProceso";

        $.post(url,{metodo:metodo, id:id, exp:expediente}, function(data){
        $("#page-wrapper").html(data);
        $('#createPredio').hide();
        $('#createPredioProceso').show();
        });
    }

    function agregarPropietarioPredioProceso(id)
    {
        var metodo = "indexPropietarioPredio";
        var url = "../core/controllers/prediosController.php";
        $.post(url,{id:id, metodo:metodo}, function(data){
        $("#page-wrapper").html(data);
        $('#storeParticipantePredio').hide();
        });
    }

    function storeParticipantePredioProceso(id)
    {
        var datos = $('#form-create-dueno').serialize();
        var url = "../core/controllers/prediosController.php";
        var metodo = "metodo=storeParticipantePredio";
        var carga =  "carga=proceso";   

          $.post(url,datos+'&'+carga+'&'+metodo+'&id='+id, function(data){
        $("#page-wrapper").html(data);
        });
    }