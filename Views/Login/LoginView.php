<?php require_once(__DIR__ . '/../../Config/bootstrap.php'); ?>
<?php include(HEADER1); ?>
    

    <form action="" method="POST">

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

<?php include(FOOTER1); ?>