<?php 
class Views
{
	function __construct($view, $data = null)
	{
		if(file_exists('./views/'.$view))
		{
			require('./views/'.$view);

		}else{
			die('vista no encontrada');
		}
	}
}

