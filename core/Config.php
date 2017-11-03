<?php


class Config
{

	function default_controller()
	{
		return $default_controller = 'principal';
	}
	

	function url_base() 
	{
		define("NAME_SERVER", "/mvc/");
		return $_SERVER["REQUEST_SCHEME"]."://".$_SERVER["SERVER_NAME"]."".NAME_SERVER;
	}
	
}