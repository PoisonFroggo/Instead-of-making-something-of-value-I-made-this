<?php
require_once(__DIR__ . '/../../Config/bootstrap.php');


// Get the action to perform
$action = filter_input(INPUT_POST, 'action');
if ($action === NULL) {
    $action = filter_input(INPUT_GET, 'action');
    if ($action === NULL) {
        $action = 'list_students';
    }
}

switch ($action) {
    default:
        include(LOGINS_VIEW_PATH . '/RegisterView.php');
        break;

    case 'account_login':
        include(LOGINS_VIEW_PATH . '/LoginView.php');
        break;
        
    case 'account_register':
        include(LOGINS_VIEW_PATH . '/RegisterView.php');
        break;
    
    case 'login':
        $username = filter_input(INPUT_POST, 'username');
        $password = filter_input(INPUT_POST, 'password');
        echo($username);
        echo($password);
        break;

    case 'register':
        $username = filter_input(INPUT_POST, 'username');
        $password = filter_input(INPUT_POST, 'password');
        echo($username);
        echo($password);
        break;
        
}
?>