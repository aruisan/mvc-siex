<?php 


class Controller 
{


	function __construct()
	{	

		//llamamiento de twig
		$loader = new Twig_Loader_Filesystem('./views');
		$twig = new Twig_Environment($loader, []);

		//llammamiento de url base
		$config = new Config();
		$url_base = $config->url_base(); 


		if($_GET && isset($_GET['action']))
		{
			$action = $_GET['action'];
			if(method_exists($this, $action))
			{
				$this->$action($twig, $url_base);

			}else{
				die("funcion no existe");
			}
		}else{
			if(method_exists($this, 'index'))
			{
				$this->index($twig, $url_base);
				
			}else{
				die("indice no definido");
			}
		}
	}
}