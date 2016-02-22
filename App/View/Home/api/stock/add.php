<?php 
	require_once( $_SERVER['DOCUMENT_ROOT'].'/stock/sqlHelper.php');

// if($_POST['submit']){
	$code = $_POST['code'];
	$name = $_POST['name'];
	$rating = $_POST['rating'];
	$price = $_POST['price'];
	$type = $_POST['type'];
	$topic = $_POST['topic'];
	$reason = $_POST['reason'];
	$create_time = date('y-m-d h:i:s',time());
	$author = $_POST['author'];
	$arr = array();
	if(!empty($code) && !empty($name) && !empty($rating) && !empty($price) && !empty($type) && !empty($topic)){
		$sqlStr = "insert into stock (code,name,rating,price,type,topic,reason,author,create_time) values ('".$code."','".$name."','".$rating."','".$price."','".$type."','".$topic."','".$reason."','".$author."','".$create_time."')";

		$result = sqlHelper::execQuery($sqlStr);
		
		if($result){
			$arr = array(
				'errno' => 0,
				'msg'  => "成功"
			);
		}else{
			$arr = array(
				'errno' => 1,
				'msg'  => "失败"
			);
		}
	}else{
		$arr = array(
			'errno' => 1,
			'msg' => '失败：字段不能为空'
		);
	}
	echo json_encode($arr);
// }
?>