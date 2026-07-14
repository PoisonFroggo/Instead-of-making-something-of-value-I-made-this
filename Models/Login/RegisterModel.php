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
function findUser($username) {
    global $db;
    $sql = "SELECT id, username, pwhash
                FROM users
                WHERE username = ?";
    try {
        $stmt = $db->prepare($sql); 
        $stmt->execute([$username]); //question mark allows for an array of values to be input, as this is one input, it only has a single item, but this can be used several times
        return $stmt->fetch(PDO::FETCH_ASSOC);
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
    generateRememberMeToken($username, $password);
    return true;
}

function generateRememberMeToken($username, $password) {
    global $db;
    $user = findUser($username);
    echo($user['id']);

    $token = bin2hex(random_bytes(32));
    $tokenHash = password_hash($password, PASSWORD_DEFAULT); //PASSWORD_DEFAULT is the encryption method

    //Expires in 30 days
    $expires = date('Y-m-d H:i:s', strtotime('+30 days'));

    $stmt = $db->prepare("
        INSERT INTO remember_tokens
        (user_id, token_hash, expiration)
        VALUES (?, ?, ?)
    ");

    $stmt->execute([
        $user['id'],
        $tokenHash,
        $expires
    ]);

    // Store the plain token in the cookie
    setcookie(
        "remember_token",
        $token,
        [
            "expires" => strtotime("+30 days"),
            "path" => "/",
            "httponly" => true,
            "secure" => true,      // Use HTTPS
            "samesite" => "Lax"  //Means user gets the cookie only when visiting the site or clicking a link from another site on webpages. Forms and AJAX requests do not work (Check to see if I can do internal Forms/AJAX. Also figure out what an AJAX is.)
        ]
    );
}
?>