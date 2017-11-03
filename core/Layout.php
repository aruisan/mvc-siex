<?php 
class Layout 
{
	function __construct()
	{
		require("config.php");
		if(file_exists('./views/'.$view))
		{
			if(file_exists("./views/Layout/".$header))require("./views/Layout/".$header)else die("encabezado no encontrado");
			require('./views/'.$views);
			if(file_exists('./views/Layout/'.$footer))require("./views/Layout/".$footer)else die("footer no encontrado");;
		}else{
			die("sitio no encontrado");
		}
	}
}