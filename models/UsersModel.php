<?php 
class UsersModel extends Model 
{


	public function ingresarModel(string $nick, int $password)
	{
		$query = $this->db->query("SELECT a.id_usuarios, b.nom_datos, c.*, d.nom_rol as rol 
		FROM usuarios a, datos b, alcaldia c, roles d 
		WHERE a.nick = '$nick' AND a.password = '$password'
		AND a.id_datos = b.id_datos  AND a.id_alcaldia = c.id_alcaldia AND a.id_rol = d.id_rol");
		$datos = $query->fetch();

		if($query->rowCount() < 1){
			return 'no se logueo';
		}else{
			return $datos;
			$_SESSION['nom_secre'] = $datos->nom_datos;
			$_SESSION['ciudad_secre'] = $datos->nom_alcaldia;
			$_SESSION['logo_secre'] = $datos->logo;
			$_SESSION['escudo_secre'] = $datos->escudo;
			$_SESSION['rol'] = $datos->rol;
		}	
	}

	public function indexModel()
	{
		$result = $this->db->query("SELECT a.id_datos, a.nom_datos, a.num_dc, a.email, a.direccion from datos a WHERE id_datos > 10000");
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