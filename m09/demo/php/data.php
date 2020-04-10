<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

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


function fetchAll($r) {
	$a = [];
	while($row = $r->fetch_assoc())
		$a[] = $row;
	return $a;
}


// $c = connection, $ps = prepared statement, $st = statement type, $p = parameters
function makeQuery($c,$ps,$st,$p) {
	if($st!="" && $statement = @$c->prepare($ps)){
			if(
				@$statement->bind_param($st, ...$p) &&
				@$statement->execute()
			) {
				try{
					$r =fetchAll($statement->get_result());
					//$r = $statement->bind_result($id);
					
				}
				catch(Exception $e){
					var_dump($e->getMessage());
				}
				
				
				return [
					"params"=>$p,
					"qry"=>$ps,
					"result"=>$r
				];
			}
	} else {
		$r = $c->query($ps);
		if(!$c->errno) return [
			"qry"=>$ps,
			"result"=>fetchAll($r)
		];
	}
	
	return [
		"qry"=>$ps,
		"error"=>$c->error
	];
	
}


function makeStatement($c,$t,$p) {
	switch($t) {
		case "users_all":
			return makeQuery($c,"SELECT * FROM `track_users`","",$p);
		case "animals_all":
			return makeQuery($c,"SELECT * FROM `track_animals`","",$p);
		case "locations_all":
			return makeQuery($c,"SELECT * FROM `track_locations`","",$p);


		/*
		SELECT * FROM table WHERE id=? AND price=? AND category=?
		ids
		67,59.99,'fruit'
		*/


		case "animals_from_user":
			return makeQuery($c,"SELECT * FROM `track_animals` WHERE uid = ?","i",$p);

		case "locations_from_animal":
			return makeQuery($c,"SELECT * FROM `track_locations` WHERE aid = ?","i",$p);


		case "user_by_id":
			return makeQuery($c,"SELECT * FROM `track_users` WHERE id = ?","i",$p);
		case "animal_by_id":
			return makeQuery($c,"SELECT * FROM `track_animals` WHERE id = ?","i",$p);
		case "location_by_id":
			return makeQuery($c,"SELECT * FROM `track_locations` WHERE id = ?","i",$p);


		case "check_login":
			return makeQuery($c,"SELECT id FROM `track_users` WHERE username = ? AND password = md5(?)","ss",$p);
	}
}



// POST AND GET DUMP
$data = json_decode(file_get_contents("php://input"));

echo json_encode(
	makeStatement(
		makeConn(),
		@$data->type,
		@$data->params
	),
	JSON_NUMERIC_CHECK
);
