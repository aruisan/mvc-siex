
var url = "../core/controllers/registrosController.php";

/////////////// vistas /////////////////////////////

function cargarCreateRegistro(tipo)
{
        var metodo = "createRegistros";
        $.post(url,{metodo:metodo, tipo:tipo}, function(data){
        $("#page-wrapper").html(data);
        });
}


////////crud 

  function  storeRegistro()
    {
        var url = "../core/controllers/registrosController.php";
        var datos = new FormData($("#form-create-registro")[0]);
        datos.append("metodo", "storeRegistros");
        alert(datos);
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

///////////////otras funciones

