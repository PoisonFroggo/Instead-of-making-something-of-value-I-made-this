<?php require_once(__DIR__ . '/../../Config/bootstrap.php'); ?>
<?php include(HEADER1); ?>
    
<header>
<h1>REGISTER</h1>
</header>
<main>
    <nav>
        <p><a href=".?action=account_login">Login</a></p>
        <p><a href=".?action=account_register">Register</a></p>
    </nav>
    <div1>
    <form action="." method="post">
        <input type="hidden" name="action" value="register">

        <label for="username">
            Username
        </label>

        <input
            type="text"
            id="username"
            name="username"
            required>

        <br><br>

        <label for="password">
            Password
        </label>

        <input
            type="password"
            id="password"
            name="password"
            required>

        <br><br>

        <button type="submit">
            Login
        </button>

    </form>
    </div1>
</main>

<?php include(FOOTER1); ?>