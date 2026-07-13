<?php require_once(__DIR__.'/../Config/bootstrap.php'); ?>
<?php include VIEWS_PATH.'/Layout/header.php'; ?>

<main>
    <h1>Database Error</h1>
    <p>There was an error connecting to the lannie database</p>
    <p>Error msg: <?php echo $error_message; ?></p>
    <p>&nbsp;</p>
</main>

<?php include VIEWS_PATH.'/Layout/footer.php'; ?>