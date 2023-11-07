<?php

// url: http://localhost/calculator/API/queries/postParameter.php

include("../connection.php");
include("../cors.php");

function postParameter($body)
{
    $connection = connection();
    
    try {
        $table = $body -> table;

        if($table==="units") {
            $sql = $connection -> prepare("INSERT INTO $table(parameter) VALUES (?)");
            return $sql -> execute([$body -> parameter]);
        }

        $sql = $connection -> prepare("INSERT INTO $table(parameter, price) VALUES (?, ?)");
        return $sql -> execute([$body -> parameter, $body -> price]);

} catch(PDOException $error) {
    echo $error -> getMessage();
}
}

$body = json_decode(file_get_contents("php://input"));
postParameter($body);

$response = new stdClass();
$response -> data = "Post realizado correctamente." . "\n";
echo json_encode($response);

?>