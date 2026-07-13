<?php
require_once __DIR__.'/../../Config/bootstrap.php';
require_once DATABASE;

/*
Admin/User table structure:
|id       | int         | NOT NULL | Primary key | No default | auto_increment
|username | varchar(50) | NOT NULL | UNIQUE      | No default |
|hash     | varchar(255)| NOT NULL |             | No default |
*/

//General use function for verifying user credentials, returns the user as an associative array
function findUser($username, $password) {
    global $db;
    $sql = "SELECT id, username, pwhash
                FROM users
                WHERE username = ?";
    try {
        $stmt->execute([$username]); //question mark allows for an array of values to be input, as this is one input, it only has a single item, but this can be used several times
        return $stmt->fetch(PDO_FETCH_ASSOC);
    } catch (PDOException $e) {
        throw $e;
    }
}

function createUser($username, $password) {
    global $db;
    //hash password
    $pwhash = password_hash($password, PASSWORD_DEFAULT);

    $sql = "INSERT INTO users (username, pwhash)
                VALUES (:username, :pwhash)";

    try {
        $stmt = $db->prepare($sql);

        return $stmt->execute([
            ':username' => $username,
            ':pwhash' => $pwhash
        ]);

        return true;
    } catch (PDOException $e) {
        throw $e;
    }
}

function loginUser($username, $password) {
    global $db;
    $user = findUser($username);
    if(!$user){
        return false;
    }
        
    if(!password_verify($password, $user['pwhash'])) {
        return false;
    }
    if(session_status() === PHP_SESSION_NONE) {
        session_start();
    }

    $_SESSION['user_id'] = $user['id'];
    $_SESSION['username'] = $user['username'];
    return true;
}

function generateRememberMeToken() {
    
}
?>