<?php 
	require_once( $_SERVER['DOCUMENT_ROOT'].'/stock/sqlHelper.php');

	$sqlStr = 'SELECT * FROM weixin';
	$result = sqlHelper::execQuery($sqlStr);
	
	if($result){
		$data = array();
		while($row = mysql_fetch_row($result)){
			$arr = array(
				'name' => $row[1],
				'intor' => $row[2],
				'img' => $row[3],
				'time' => $row[4]
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
// 			'name' => "股票帝",
// 			'intro' => "用最简单的方式解读股票涨跌趋势，用最安全的方式盈利。",
// 			'img' => "http://p4.qhimg.com/d/inn/ab1406ff/getqrcode.jpg"
// 		),
// 		array(
// 			'name' => "股票哥",
// 			'intro' => "提供全球及国内股票资讯",
// 			'img' => "http://p4.qhimg.com/d/inn/ab1406ff/getqrcode.jpg"
// 		),
// 	)
// );

// echo json_encode($arr);

?>