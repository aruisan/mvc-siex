

/////////////// vistas Archivos /////////////////////////////


 function indexArchivo(id)
    {
        var url = "../core/controllers/archivosController.php";
        var metodo = "indexArchivo";
        var menu = "menuArchivo";
        $.post(url,{metodo:metodo, id:id}, function(data){
        $("#page-wrapper").html(data);
        });
    }
    
function cargarCreatePredio()
{
        var metodo = "createPredio";

        $.post(url,{metodo:metodo}, function(data){
        $("#page-wrapper").html(data);
        });
}

     function cargarCreateArchivo()
    {
        var url = "../core/controllers/archivosController.php";
        var metodo = "createArchivo";

        $.post(url,{metodo:metodo}, function(data){
          $('#updateArchivo').hide();
          $('#storeArchivo').show();
        $(".modal-body-2").html(data);
        });
    }

    function cargarEditArchivo(id)
    {
        var url = "../core/controllers/archivosController.php";
        var metodo = "editArchivo";

        $.post(url,{metodo:metodo, id:id}, function(data){
          $('#updateArchivo').show();
          $('#storeArchivo').hide();
        $(".modal-body-2").html(data);
        });
    
    }

    function storeArchivo(id)
    {
        var url = "../core/controllers/archivosController.php";
        var datos = new FormData($("#form-archivo")[0]);
        datos.append("metodo", "storeArchivo");
        datos.append("id", id);

        $.ajax({
              type: "POST",
              url: url,
              data: datos,
              contentType: false, //importante enviar este parametro en false
              processData: false, //importante enviar este parametro en false
              success: function(data){ 
              console.log(data);   
                 $("#page-wrapper").html(data);
              },
              error: function (r) {
                  
                  alert("Error del servidor");
              }
          });


    }

    function updateArchivo(id)
    {
      var url = "../core/controllers/archivosController.php";
        var datos = new FormData($("#form-archivo")[0]);
        datos.append("metodo", "updateArchivo");
        datos.append("id", id);

        $.ajax({
              type: "POST",
              url: url,
              data: datos,
              contentType: false, //importante enviar este parametro en false
              processData: false, //importante enviar este parametro en false
              success: function(data){  
                 $("#page-wrapper").html(data);
              },
              error: function (r) {
                  
                  alert("Error del servidor");
              }
          });
    }

   



/////////////// impulsos /////////////////////////////
 function cargarImpulso(id)
    {
      edit(id, 'archivos', 'createImpulso', '#formulario-impulso');
      edit(id, 'predios', 'editPredio', '#editarPredio');
    }

function obtenerTipoImpulso()
{
        var url = "../core/controllers/archivosController.php";
        var metodo = "obtenerTipoImpulso";
        var id = $('#categoria').val();

        $.post(url,{metodo:metodo, id:id}, function(data){
          console.log(data);
          $("#impulso").html(data);                               
        });
}

    function cargarEditImpulso(id)
    {
       edit(id, 'archivos', 'editImpulso', '#formulario-impulso');
    }


    function cargarAprobarImpulso(di, id)
    {
      var url = "../core/controllers/archivosController.php";
        var metodo = "cargarAprobarImpulso";

        $.post(url,{metodo:metodo, id:id, di:di}, function(data){
          $('#aprobarImpulso').html(data);
          });
    }

  ////////crud impulso


   function crudImpulso(metodo, form, id)
    {
        var url = "../core/controllers/archivosController.php";
        var metodo = "&metodo="+metodo;
        var di = "&id="+id;
        var data = $('#form-'+form+'-impulso').serialize();
        alert(data);
        $.post(url,data+metodo+di, function(data){
        $("#formulario-impulso").html(data);
        });
    }

    function storeAprobarImpulso(di)
    {
      var url = "../core/controllers/archivosController.php";
        var metodo = "&metodo=storeAprobarImpulso";
        var data = $('#form-aprobar-impulso').serialize();
        var di = "&di="+di;

        $.post(url,data+metodo+di, function(data){
          console.log(data);
        $("#formulario-impulso").html(data);
        });
    }