<?php


class Config
{

	function default_controller()
	{
		return $default_controller = 'principal';
	}
	

	function url_base() 
	{
		//CONFIGURACION DEL DOMINIO
		define("PUERTO", ":8080");
		define("NAME_SERVER", $_SERVER["SERVER_NAME"]."".PUERTO.""."/mvc/");


		return $_SERVER["REQUEST_SCHEME"]."://".NAME_SERVER;
	}
	
}