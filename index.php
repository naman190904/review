<?php
$con=new mysqli("localhost","root","","student information");

$result=$con->query("SELECT * FROM student information");
foreach($result as $value)
{
    echo $value['id'];
    echo $value['name'];
    echo $value['email'];
    echo $value['grade'];
}

?>