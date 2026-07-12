<?php
/*
    This file stores definitions for constant paths and is referenced/included 
    at the top of all subsequent files which need to navigate paths.
*/
define('ROOT', dirname(__DIR__));

//Base navigation definitions
define('CONFIG_PATH', ROOT . '/Config');
define('CONTROLLERS_PATH', ROOT . '/Controllers');
define('MODELS_PATH', ROOT . '/Model');
define('VIEWS_PATH', ROOT . '/Views');
define('CSS_PATH', '/CSS');
define('LAYOUT_PATH' , VIEWS_PATH . '/Layout');

//Definitions for layout assistance
define('HEADER1' , LAYOUT_PATH . '/header.php');
define('FOOTER1' , LAYOUT_PATH . '/footer.php');

//Login related definitions
define('LOGINS_CNTRL_PATH', CONTROLLERS_PATH . '/Login');
define('LOGINS_VIEW_PATH', VIEWS_PATH . '/Login');

//Stylesheet definitions
define('CSS_PRAISE_GHERKIN', CSS_PATH . '/Praise_Gherkin_Source.css');
define('CSS_LOREDUMP', CSS_PATH . '/Loredump_Source.css');

define('CSS_URL', '/CSS');
define('CSS_PRAISE_GHERKIN2', CSS_URL . '/Praise_Gherkin_Source.css');
?>