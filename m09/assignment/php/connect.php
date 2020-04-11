<?php

//Error Debug
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Connect to DB
function makeConn() {
	$host = "localhost";
	$user = "yuyin617";
	$pass = "lIxIHYPf4HHw";
	$dbname = "wnm617Web";

	$c = new mysqli($host,$user,$pass,$dbname);
	if($c->connect_errno) die($c->connect_error);
	$c->set_charset('utf8');
	return $c;
}
