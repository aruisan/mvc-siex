# Activar RewriteEngine
RewriteEngine on

# Reescribir la URL base de donde esta nuestro sitio

RewriteBase /mvc
SetEnvIf RUTA_BASE ^(.*)$ RUTA_BASE=/mvc/

RewriteRule ^([a-zA-Z0-9_-]+)/([a-zA-Z0-9_-]+)/([a-zA-Z0-9_-]+)/([a-zA-Z0-9_-]+)/([a-zA-Z0-9_-]+)/([a-zA-Z0-9_-]+)/?$ index.php?controller=$1&action=$2&$3=$4&$5=$6 [L]
RewriteRule ^([a-zA-Z0-9_-]+)/([a-zA-Z0-9_-]+)/([a-zA-Z0-9_-]+)/([a-zA-Z0-9_-]+)/?$ index.php?controller=$1&action=$2&$3=$4 [L]
RewriteRule ^([a-zA-Z0-9_-]+)/([a-zA-Z0-9_-]+)/?$ index.php?controller=$1&action=$2 [L]
RewriteRule ^([a-zA-Z0-9_-]+)/?$ index.php?controller=$1&action=index [L]
