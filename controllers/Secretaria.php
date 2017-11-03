<?php
require_once  './vendor/autoload.php';

Class Secretaria extends Controller
{

		

	function __construct()
	{
		parent::__construct();
		
	}



	public function index()
	{
		$load = new LoadModel("SecretariaModel");
		$Model = new SecretariaModel();

		$datos = $Model->indexModel();

		$loader = new Twig_Loader_Filesystem('./views');
		$twig = new Twig_Environment($loader, []);
		echo $twig->render('/Predios/Secretaria/index.twig', compact('datos', 'paginador'));
		//$ViewUsuarios = new Views('demo.php', compact('data'));
	}

	public function create()
	{
		$loader = new Twig_Loader_Filesystem('./views');
		$twig = new Twig_Environment($loader, []);
		echo $twig->render('/User/create.twig');
	}


	public function edit()
	{
		$id = $_GET['id'];
		$load = new LoadModel("UsersModel");
		$cmodel = new UsersModel();
		$datos = $cmodel->editModel($id);

		$loader = new Twig_Loader_Filesystem('./views');
		$twig = new Twig_Environment($loader, []);
		echo $twig->render('/User/create.twig',compact('datos'));
	}

}