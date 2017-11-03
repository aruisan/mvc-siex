<?php
/*
	obtenemos la url de nuestro sitio, muy util para trabajar con recursos
*/

Class Funciones 
{
	function url_base() 
	{
		return $_SERVER["REQUEST_SCHEME"]."://".$_SERVER["SERVER_NAME"]."".NAME_SERVER;
	}
}