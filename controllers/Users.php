<?php
require_once  './vendor/autoload.php';

Class Users extends Controller
{
	function __construct()
	{
		parent::__construct();
		
	}

	public function ingresarFuncionario($twig)
	{
		$load = new LoadModel("UsersModel");
		$cmodel = new UsersModel();
		$datos = $cmodel->ingresarModel($_POST['nick'], $_POST['pass']);

		header('location:'.NAME_SERVER.''.$datos->rol);
	}

	public function index()
	{
		$load = new LoadModel("UsersModel");
		$model = new UsersModel();

		$datos = $model->indexModel();

		$loader = new Twig_Loader_Filesystem('./views');
		$twig = new Twig_Environment($loader, []);
		echo $twig->render('/User/index.twig', compact('datos', 'paginador'));
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