<?php
/*
--------------------------------------------------------------------
----------Debug, comment out if not debugging-----------------------
--------------------------------------------------------------------
*/
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

//Start session with cookie

setcookie('userid', 99, strtotime('1 year'), '/');

$userid = filter_input(INPUT_COOKIE, 'userid', FILTER_VALIDATE_INT);
echo($userid);

//requires/includes
require_once('Config/database.php');
require_once('Config/bootstrap.php');
//Include database functions


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