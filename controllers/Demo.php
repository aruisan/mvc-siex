<?php
require_once  './vendor/autoload.php';

Class Demo extends Controller
{

	function __construct()
	{
		parent::__construct();	
	}

	public function index($twig, $url_base )
	{
		echo $twig->render('/Demo/index.twig', compact('url_base'));
	}


	public function create($twig, $url_base)
	{
		//llamamiento a el model 
		$load = new LoadModel("PrincipalModel");
		$model = new PrincipalModel();

		echo $twig->render('/Principal/create.twig', compact('url_base'));
	}


}