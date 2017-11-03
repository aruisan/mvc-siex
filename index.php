<?php 
require('core/Controller.php');
require('core/Config.php');
//require('core/Views.php');
require('core/Model.php');
require('core/LoadModel.php');
require('core/Functions.php');



if($_GET && isset($_GET['controller']))
{
	

	$default_controller = $_GET['controller'];
	if(file_exists('controllers/'.$default_controller.'.php'))
		require('controllers/'.$default_controller.'.php');
	else
		die('Controlador no encontrado');
}else{
	// se hace el llamamiento de la clase config
	$config = new Config();
	$default_controller = $config->default_controller();

	if(file_exists('controllers/'.$default_controller.'.php'))
		require('controllers/'.$default_controller.'.php');
	else
		die('Controlador no encontrado');
}
 $app = new $default_controller();