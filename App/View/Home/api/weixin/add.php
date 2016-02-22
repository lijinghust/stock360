<?php 
	require_once( $_SERVER['DOCUMENT_ROOT'].'/stock/sqlHelper.php');

	$name = $_POST['name'];
	$intro = $_POST['intro'];
	$img = $_POST['img'];
	$arr = array();
	if(!empty($name) && !empty($img) && !empty($intro)){
		$sqlStr = "insert into weixin (name,intro,img) values ('".$name."','".$intro."','".$img."')";

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
			'msg' => '失败:字段不能为空'
		);
	}
	echo json_encode($arr);
?>