<?php

// url: http://localhost/calculator/API/queries/getParameters.php

include("../connection.php");
include("../cors.php");

function getParameters()
{
    $connection = connection();

    $deliveries = $connection -> query('SELECT * FROM deliveries ORDER BY price ASC');
    $dimensions = $connection -> query('SELECT * FROM dimensions ORDER BY price ASC');
    $sides = $connection -> query('SELECT * FROM sides ORDER BY price ASC');
    $papers = $connection -> query('SELECT * FROM papers ORDER BY price ASC');
    $units = $connection -> query('SELECT * FROM units ORDER BY parameter ASC');
    
    $parameters = new stdClass();
    $parameters -> deliveries = $deliveries -> fetchAll();
    $parameters -> dimensions = $dimensions -> fetchAll();
    $parameters -> sides = $sides -> fetchAll();
    $parameters -> papers = $papers -> fetchAll();
    $parameters -> units = $units -> fetchAll();

    $data = new stdClass();
    $data -> parameters = $parameters;

    $response = new stdClass();
    $response -> data = $data;

    return $response;
}

$parameters = getParameters();
echo json_encode($parameters);

?>