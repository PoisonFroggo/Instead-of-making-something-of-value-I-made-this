<?php
/*
--------------------------------------------------------------------
----------Debug, comment out if not debugging-----------------------
--------------------------------------------------------------------
*/
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

//requires/includes
require_once('Config/database.php');
require_once('Config/bootstrap.php');
//Include database functions

//Start session with cookie

setcookie('remember_me', 99, strtotime('1 year'), '/');
if (isset($_COOKIE['remember_me'])) {
    echo "Cookie is set! Value: " . htmlspecialchars($_COOKIE['remember_me']);
} else {
    echo "Cookie is not set.";
}



//Get action
$action = filter_input(INPUT_POST, 'action');
if($action === NULL) {
    $action = filter_input(INPUT_GET, 'action');
    if ($action === NULL) {
        $action = 'login';
    }
}

switch ($action) {
    case 'login':
        include(LOGINS_CNTRL_PATH . '/LoginController.php');
        break;

    default:
        include(LOGINS_CNTRL_PATH . '/LoginController.php');
        break;
}
?>