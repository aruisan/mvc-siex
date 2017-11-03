<?php 
class SecretariaModel extends Model 
{

	public function indexModel() 
	{
		$result = $this->db->query("SELECT a.id_predial, a.num_ficha_catastral, a.num_matricula_inmoviliaria, a.direccion_predio, a.num_expediente FROM predial a WHERE num_expediente <> '' AND id_predial > 20000");
		return $result->fetchAll();
	}

	public function storeModel(int $id, string $nombres, string $dc, string $correo)
	{
		$pst = $this->db->prepare('insert into datos values(null, :nombres, :dc, :correo)');
		$pst->bindParam(':nombres', $nombres, PDO::PARAM_STR);
		$pst->bindParam(':dc', $dc, PDO::PARAM_STR);
		$pst->bindParam(':correo', $correo, PDO::PARAM_STR);
		return $pst->execute();
	}

	public function updateModel(int $id, string $nombres, string $dc, string $correo)
	{
		$pst = $this->db->prepare('update set datos nom_datos = :nombres,
									num_dc = :dc, email = :correo 
									where id_datos = :id');
		$pst->bindParam(':id', $id, PDO::PARAM_INT);
		$pst->bindParam(':nombres', $nombres, PDO::PARAM_STR);
		$pst->bindParam(':dc', $dc, PDO::PARAM_STR);
		$pst->bindParam(':correo', $correo, PDO::PARAM_STR);
		return $pst->execute();
	}


	public function deleteModel(int $id)
	{
		$pst = $this->db->prepare('delete from contactos where id = :id');
		$pst->bindParam(':id', $id, PDO::PARAM_INT);
		return $pst->execute();
	}
	
		public function editModel(int $id)
	{
		$pst = $this->db->query('select * from datos where id_datos = :id');
		$pst->bindParam(':id', $id, PDO::PARAM_INT);
		return  $pst->fetch();
	}
	
}




