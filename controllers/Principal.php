<?php
require_once  './vendor/autoload.php';

Class Principal extends Controller
{

	function __construct()
	{
		parent::__construct();	
	}

	public function index($twig, $url_base )
	{
		echo $twig->render('/Principal/index.twig', compact('url_base'));
	}


	public function create($twig, $url_base)
	{
		//llamamiento a el model 
		$load = new LoadModel("PrincipalModel");
		$model = new PrincipalModel();

		echo $twig->render('/Principal/create.twig', compact('url_base'));
	}


	public function edit()
	{
		$id = $_GET['id'];
		$datos = $Model->editModel($id);

		$loader = new Twig_Loader_Filesystem('./views');
		$twig = new Twig_Environment($loader, []);
		echo $twig->render('/User/create.twig',compact('datos'));
	}

}