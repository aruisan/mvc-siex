<?php


Class Tablas extends Controller
{

	function ProcesoPredial()
	{
			$sql = "SELECT p.id_proceso, p.ff, p.num_expediente, p.total_deuda, p.ubicacion, t.nom_tipo_proceso 
					FROM procesos p, tipo_procesos t
					WHERE t.id_tipo_proceso = p.id_tipo_proceso";
			$consulta = $conexion->query($sql);
			while($datos = $consulta->fetch_object())
					{
						$data['data'][] = $datos;
					}

			echo json_encode($data);
			mysqli_free_result($consulta);
			mysqli_close($conexion);

	}


	function Participantes()
	{
			$sql = "SELECT a.id_datos, a.nom_datos, a.num_dc, a.email, a.direccion, a.celular FROM datos a";
			$consulta = $conexion->query($sql);
			while($datos = $consulta->fetch_object())
					{
						$data['data'][] = $datos;
					}

			echo json_encode($data);
			mysqli_free_result($consulta);
			mysqli_close($conexion);
	}

	function Relaciones($conexion)
	{
		$sql = "SELECT relaciones_procesos.*, datos.nom_datos, procesos.num_expediente  
	                FROM relaciones_procesos, datos, procesos 
	                WHERE relaciones_procesos.id_datos=datos.id_datos 
	                AND relaciones_procesos.expediente = procesos.num_expediente";
			$consulta = $conexion->query($sql);
			while($datos = $consulta->fetch_object())
					{
						$data['data'][] = $datos;
					}

			echo json_encode($data);
			mysqli_free_result($consulta);
			mysqli_close($conexion);
	}

	function Predios()
	{
				$conexion = new mysqli('localhost', 'root', '', 'siex_nube');
				$acentos = $conexion->query("SET NAMES 'utf8'");
					if ($conexion->connect_error){

						die('Error en la conexion'.$conexion->connect_error);
					}

			$sql = "SELECT a.id_predial, a.num_ficha_catastral, a.num_matricula_inmoviliaria, a.direccion_predio, a.num_expediente FROM predial a WHERE num_expediente <> ''";
			$consulta = $conexion->query($sql);
			while($datos = $consulta->fetch_object())
					{
						$data['data'][] = $datos;
					}

			echo json_encode($data);
			mysqli_free_result($consulta);
			mysqli_close($conexion);	
	}
}

?>