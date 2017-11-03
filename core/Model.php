<?php 

class Model 
{
	public $db = null;

	function __construct()
	{
		try
		{
			$this->db = $this->getConnection();
		}
		catch(PDOException $ex)
		{
			die('no se pdo conectar');
		}

	}

	private function getConnection()
	{
		$host = "localhost";
		$user = "root";
		$pass = "";
		$database = "siex_nube";
		$charset = "utf8";
		$opt = [PDO::ATTR_CASE => PDO::CASE_LOWER, PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION, PDO::ATTR_ORACLE_NULLS => PDO::NULL_EMPTY_STRING, PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_OBJ];
		$pdo = new pdo("mysql:host={$host};dbname={$database};charset={$charset}", $user, $pass, $opt);
		$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
		return $pdo;
	}
}