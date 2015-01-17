<?php 
	require_once( $_SERVER['DOCUMENT_ROOT'].'/stock/sqlHelper.php');

	$sqlStr = 'SELECT * FROM stock';
	$result = sqlHelper::execQuery($sqlStr);
	
	if($result){
		$data = array();
		while($row = mysql_fetch_row($result)){
			$arr = array(
				'code' => $row[1],
				'name' => $row[2],
				'rating' => $row[3],
				'price' => $row[4],
				'type' => $row[5],
				'topic' => $row[6],
				'reason' => $row[7],
				'create_time' => $row[8],
				'author' => $row[9]
			);
			array_push($data,$arr);
		}
	}else{
		$data = "";
	}
	$arr = array(
		'errno' => 0,
		'data'  => $data
	);
	echo json_encode($arr);
	
?>
<?php 
// $arr = array(
// 	'errno' => 0,
// 	'data' => array(
// 		array(
// 			'code' => "000901",
// 			'name' => "航天科技",
// 			'rating' => 5,
// 			'type' => '短线',
// 			'topic' => '军工，航天',
// 			'reason' => "用最简单的方式解读股票涨跌趋势，用最安全的方式盈利。"
// 		),
// 		array(
// 			'code' => "600391",
// 			'name' => "成发科技",
// 			'rating' => 4.7,
// 			'type' => '一夜情',
// 			'topic' => '军工，航天，重组',
// 			'reason' => "提供全球及国内股票资讯"
// 		),
// 	)
// );

// echo json_encode($arr);

?>

