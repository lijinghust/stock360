-- phpMyAdmin SQL Dump
-- version 4.3.3
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2015-01-26 16:31:12
-- 服务器版本： 5.6.22
-- PHP Version: 5.4.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `test`
--

-- --------------------------------------------------------

--
-- 表的结构 `stock`
--

CREATE TABLE IF NOT EXISTS `stock` (
  `id` int(11) NOT NULL,
  `date` date NOT NULL COMMENT '股票操作日期',
  `code` varchar(6) NOT NULL COMMENT '代码',
  `name` varchar(50) NOT NULL COMMENT '名字',
  `rating` float NOT NULL COMMENT '星级',
  `price` float NOT NULL COMMENT '买入指导价',
  `type` int(10) NOT NULL COMMENT '类型（短线，中线。。）',
  `topic` varchar(200) NOT NULL COMMENT '概念',
  `reason` text NOT NULL COMMENT '原因',
  `create_time` datetime NOT NULL,
  `author` varchar(50) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8 COMMENT='股票信息';

--
-- 转存表中的数据 `stock`
--

INSERT INTO `stock` (`id`, `date`, `code`, `name`, `rating`, `price`, `type`, `topic`, `reason`, `create_time`, `author`) VALUES
(29, '2015-01-27', '300352', '北信源', 4.5, 29.73, 1, '网络安全', '    <p>\r\n 		<img src="http://v1.freep.cn/3tb_1501262341064ba4512293.png">\r\n    </p>\r\n    <p>\r\n    	1月26日龙虎榜显示，前五买家中有三家机构，预示后期会创新高。\r\n    </p>\r\n    <p>\r\n        分析人士表示，“棱镜门”事件后，网络安全信息安全业景气度提升，禁用Windows8给国产操作系统带来新的机遇，在我国加快经济转型的大背景下国产化替代已成大势所趋，尤其是国产软件业在“努力建设知识产权强国”的新目标下将迎来巨大发展空间。\r\n    </p>\r\n    <p>\r\n        近几年以来，国产软件领域的政策利好不断，2014年5月20日中央国家机关政府采购中心发布通知，要求采购的所有计算机类产品不允许安装Windows8操作系统。2014年9月份，银监会网站发布《关于应用安全可控\r\n        <span>\r\n            <a class="a-tips-Article-QQ" href="http://stockhtm.finance.qq.com/sstock/ggcx/159939.shtml"\r\n            target="_blank">\r\n                信息技术\r\n            </a>\r\n        </span>\r\n        加强银行业网络安全和信息化建设的指导意见》，要求安全可控信息技术2019年在银行业总体达到75%左右的使用率。2014年11月份国家集成电路产业基金成立，千亿元资金将投资到集成电路领域，这些政策给国产软件业发展带来良好的\r\n        <!--keyword-->\r\n        <a class="a-tips-Article-QQ" href="http://finance.qq.com/l/financenews/domestic/index.htm"\r\n        target="_blank">\r\n            <!--/keyword-->\r\n            宏观\r\n            <!--keyword-->\r\n        </a>\r\n        <!--/keyword-->\r\n        面支撑。\r\n    </p>\r\n    <p>\r\n        值得一提的是，当前年报披露已经开始，分析人士认为，绩优国产软件概念股更容易受到资金青睐，迎来补涨\r\n        <!--keyword-->\r\n        <a class="a-tips-Article-QQ" href="http://stockapp.finance.qq.com/mstats/"\r\n        target="_blank">\r\n            <!--/keyword-->\r\n            行情\r\n            <!--keyword-->\r\n        </a>\r\n        <!--/keyword-->\r\n        。目前有7只国产软件概念股披露了2014年年报预告，其中净利润同比预计实现增长的个股有6只，分别为：\r\n        <span>\r\n            <a class="a-tips-Article-QQ" href="http://stockhtm.finance.qq.com/sstock/ggcx/002280.shtml"\r\n            target="_blank">\r\n                新世纪\r\n            </a>\r\n        </span>\r\n        （630.96%）、\r\n        <span>\r\n            <a class="a-tips-Article-QQ" href="http://stockhtm.finance.qq.com/sstock/ggcx/002195.shtml"\r\n            target="_blank">\r\n                海隆软件\r\n            </a>\r\n        </span>\r\n        （280%）、中科金财（50%）、\r\n        <span>\r\n            <a class="a-tips-Article-QQ" href="http://stockhtm.finance.qq.com/sstock/ggcx/002065.shtml"\r\n            target="_blank">\r\n                东华软件\r\n            </a>\r\n        </span>\r\n        （40%）、\r\n        <span>\r\n            <a class="a-tips-Article-QQ" href="http://stockhtm.finance.qq.com/sstock/ggcx/002153.shtml"\r\n            target="_blank">\r\n                石基信息\r\n            </a>\r\n        </span>\r\n        （30%）和\r\n        <span>\r\n            <a class="a-tips-Article-QQ" href="http://stockhtm.finance.qq.com/sstock/ggcx/002279.shtml"\r\n            target="_blank">\r\n                久其软件\r\n            </a>\r\n        </span>\r\n        （26.19%）。\r\n    </p>\r\n    <p>\r\n        <span>\r\n            <a class="a-tips-Article-QQ" href="http://stockhtm.finance.qq.com/sstock/ggcx/000562.shtml"\r\n            target="_blank">\r\n                宏源证券\r\n            </a>\r\n        </span>\r\n        表示，目前我国信息化基础设施建设相对落后，核心技术\r\n        <!--keyword-->\r\n        <a class="a-tips-Article-QQ" href="http://stockhtm.finance.qq.com/hcenter/index.htm?page=1020183"\r\n        target="_blank">\r\n            <!--/keyword-->\r\n            自主创新\r\n            <!--keyword-->\r\n        </a>\r\n        <!--/keyword-->\r\n        能力相对落后，这些都极大的威胁了我国国家安全和未来经济增长质量，因此信息化建设的自主可控将是国家网络安全和信息化的重中之重。国家必然从软件、硬件等领域加速独立、创新的自主知识产权信息安全体系构建，预计IT基础设施领域去IOE、应用软件领域去SOA国产化进程将进一步加速，国产软件的大时代已经到来。从投资策略来看，看好自主可控相关标的：\r\n        <span>\r\n            <a class="a-tips-Article-QQ" href="http://stockhtm.finance.qq.com/sstock/ggcx/002368.shtml"\r\n            target="_blank">\r\n                太极股份\r\n            </a>\r\n        </span>\r\n        、\r\n        <span>\r\n            <a class="a-tips-Article-QQ" href="http://stockhtm.finance.qq.com/sstock/ggcx/600718.shtml"\r\n            target="_blank">\r\n                东软集团\r\n            </a>\r\n        </span>\r\n        、\r\n        <span>\r\n            <a class="a-tips-Article-QQ" href="http://stockhtm.finance.qq.com/sstock/ggcx/600588.shtml"\r\n            target="_blank">\r\n                用友软件\r\n            </a>\r\n        </span>\r\n        ；信息安全相关标的：\r\n        <span>\r\n            <a class="a-tips-Article-QQ" href="http://stockhtm.finance.qq.com/sstock/ggcx/002439.shtml"\r\n            target="_blank">\r\n                启明星辰\r\n            </a>\r\n        </span>\r\n        ；交易性标的：\r\n        <span>\r\n            <a class="a-tips-Article-QQ" href="http://stockhtm.finance.qq.com/sstock/ggcx/600536.shtml"\r\n            target="_blank">\r\n                中国软件\r\n            </a>\r\n        </span>\r\n        、北信源、\r\n        <span>\r\n            <a class="a-tips-Article-QQ" href="http://stockhtm.finance.qq.com/sstock/ggcx/300369.shtml"\r\n            target="_blank">\r\n                绿盟科技\r\n            </a>\r\n        </span>\r\n        。\r\n    </p>', '2015-01-26 23:52:23', 'lijinghust@126.com'),
(30, '2015-01-27', '300005', '探路者', 4.5, 23.05, 1, '体育足球概念，智能穿戴，在线旅游，O2O', '	<p>\r\n		<img src="http://v1.freep.cn/3tb_150127000218j7u0512293.png">\r\n	</p>\r\n	<p>\r\n		1月26日龙虎榜显示，买入前五中有四家为机构，且买入远大于卖出，虽然机构观点略有分歧，后市依然非常看好。今日股价突破前期新高，上方抛售压力不大，可以预见股价还可见新高。\r\n	</p>\r\n    <p>\r\n        　　周一，体育概念再度爆发，板块整体涨幅达5.64%。个股方面，探路者、贵人鸟、江苏舜天涨停，中体产业涨9.66%，中信国安涨8.16%，雷曼光电涨8%，双象股份涨6.11%。\r\n    </p>\r\n    <p>\r\n        　　\r\n        <a target="_blank" class="art_links baike_words" href="http://data.10jqka.com.cn/funds/ggzjl/">\r\n            资金流向\r\n        </a>\r\n        方面，板块内当天资金净流入超2000万的个股达8只，其中，中体产业净流入19925.15万元，江苏舜天(10589.06万元)，探路者(8801.75万元)，中信国安(7686.09万元)，亚泰集团(6599.11万元)，泰达股份(6298.90万元)，贵人鸟(5867.66万元)，雷曼光电(2825.67万元)，上述8只个股累计实现资金净流入6.86亿元。\r\n    </p>\r\n    <p>\r\n        　　消息面上，据路 透中文网1月26日消息，接近官方的消息人士透露，中国将大力推进足球业发展，鼓励多元资本投入和通过资本市场发展壮大足球俱乐部。国务院已审议通过了中国足球改革总体方案，近日将由中央深改领导小组进行审议。\r\n    </p>\r\n    <p>\r\n        　　消息人士称，推进足球改革与发展包括进一步改革足球管理体制，推行政社分开、政企分开、管办分离，加快推进体育行业协会与行政机关脱钩。 　\r\n    </p>\r\n    <p>\r\n        　　足球产业是体育产业中最大的产业，中国拟以推进足球改革与发展作为突破口，力争一段时期内，将体育大国建设成为体育强国。 　\r\n    </p>\r\n    <p>\r\n        　　据了解，改革完善足球俱乐部制度、改革足球赛事收益分配机制、加强足球运动场馆的建设，uoko加大政府对足球发展的投入力度，将成为此轮足球改革的重要内容。为此，国家拟专门制定足球场馆建设“十三五”规划。\r\n        　\r\n    </p>\r\n    <p>\r\n        　　消息人士表示，中国还将建立中国足球产业发展基金，并通过增加足球彩票发行的种类和规模，进一步增加足球资金的投入。 　\r\n    </p>\r\n    <p>\r\n        　　分析称，足球改革方案的推出有望给足球为代表的体育产业带来实质性利好。A股上市公司中，雷曼光电、中体产业、江苏舜天、金丰投资、泰达股份等近期值得持续关注。\r\n    </p>', '2015-01-27 00:05:04', 'lijinghust@126.com');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `stock`
--
ALTER TABLE `stock`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `stock`
--
ALTER TABLE `stock`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=31;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
