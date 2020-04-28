<?php

//Error Debug
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

//include Connenction
include 'connect.php';

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
                /*  
                    Using get_result must select the mysqlnd
                    get_result method might not work in mysqli, but work in nd_mysqli
                */
				try{
					$r =fetchAll($statement->get_result());
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
		
		//Fetch all of the user information
		case "cat_user":
			return makeQuery($c,"SELECT * FROM `cat_user`","",$p);
		//Fetch all of the cat information
		case "cat_collection_all":
			return makeQuery($c,"SELECT c.*, i.i_img, b.b_name FROM `cat_collection` c JOIN `cat_image` i ON c.a_id = i.i_aid JOIN `cat_breed` b ON c.a_bid = b.b_id GROUP BY c.a_id","",$p);
		//Fetch all of the cat location
		case "cat_location":
			return makeQuery($c,"SELECT * FROM `cat_location`","",$p);
		//Fetch all of the breed information
		case "cat_breed":
			return makeQuery($c,"SELECT * FROM `cat_breed`","",$p);

			
		/*
		SELECT * FROM table WHERE id=? AND price=? AND category=?
		i(integer) d(decimal) s(string)
		67,59.99,'fruit'
		*/
		//Fetch all of the cat information by type
		case "cat_collection_type":
			return makeQuery($c,"SELECT c.*, i.*, b.b_name FROM `cat_collection` AS c JOIN `cat_image` AS i ON c.a_id = i.i_aid JOIN `cat_breed` AS b ON c.a_bid = b.b_id WHERE c.a_type = ? GROUP BY c.a_id","i",$p);
		//Fetch a specific cat information by a_id
		case "cat_from_collection":
			return makeQuery($c,"SELECT * FROM `cat_collection` RIGHT JOIN `cat_image` ON cat_image.i_aid = cat_collection.a_id WHERE a_id = ? ORDER BY cat_image.i_id DESC","i",$p);
		//Fetch a specific cat location by l_aid
		case "locations_from_cat":
			return makeQuery($c,"SELECT * FROM `cat_location` WHERE l_aid = ?","i",$p);
		//Fetch a specific cat information by a_id
		case "user_by_id":
			return makeQuery($c,"SELECT * FROM `cat_user` WHERE u_id = ?","i",$p);
		//Fetch a specific cat information by a_id
		case "cat_by_id":
			return makeQuery($c,"SELECT * FROM `cat_collection` AS c LEFT JOIN (SELECT * FROM `cat_breed`) AS b ON c.a_bid = b.b_id WHERE a_id = ?","i",$p);
		//Fetch a specific cat information by a_id
		case "location_by_id":
			return makeQuery($c,"SELECT * FROM `cat_location` WHERE l_id = ?","i",$p);
		
		//Fetch All of Recent Cat Location
		case "recent_cat_locations":
			return makeQuery($c,"SELECT c.*, l.* FROM `cat_collection` AS c LEFT JOIN (SELECT * FROM `cat_location` ORDER BY l_create_date) AS l ON c.a_id = l.l_aid WHERE c.a_uid = ? GROUP BY l.l_aid","i",$p);
			
		//Fetch a user id that matches u_name and u_password
		case "check_login":
			return makeQuery($c,"SELECT u_id FROM `cat_user` WHERE u_username = ? AND u_password = md5(?)","ss",$p);
		
		
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
