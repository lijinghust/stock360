-- phpMyAdmin SQL Dump
-- version 4.3.3
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2015-03-28 19:07:04
-- 服务器版本： 5.6.22
-- PHP Version: 5.4.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `test`
--

-- --------------------------------------------------------

--
-- 表的结构 `article`
--

CREATE TABLE IF NOT EXISTS `article` (
  `id` int(11) NOT NULL,
  `title` varchar(200) NOT NULL COMMENT '标题',
  `content` text NOT NULL COMMENT '内容',
  `pub_time` datetime NOT NULL COMMENT '发布时间',
  `type` int(11) NOT NULL COMMENT '类型'
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `article`
--

INSERT INTO `article` (`id`, `title`, `content`, `pub_time`, `type`) VALUES
(2, '股票怎么开户？', '<p style="clear: both; white-space: normal;">\r\n    <span style="font-size: 18px;">很多人说，现在买股票就相当于十年前买房子，上周开户数量是近7年来新高，连扫地阿姨和和尚都去开户了，可见当前股市的火爆，被认为是牛市的起点。什么？你竟然没有股票账户，简直弱爆了，赶快去开一个吧，本文就是介绍怎么开户的一篇文章。</span>\r\n</p>\r\n<p style="clear: both; white-space: normal;">\r\n    <span style="font-size: 18px;">炒股首先要进行开户，那么开户都需要什么材料呢？怎么开户？有多少钱才能炒股呢？以下为您一一解答。</span>\r\n</p>\r\n<p style="clear: both; white-space: normal;">\r\n    <span style="font-size: 18px;">一. 开户需要什么材料？</span>\r\n</p>\r\n<p style="clear: both; white-space: normal;">\r\n    <span style="font-size: 18px;">1.&nbsp;<span style="background-color: rgb(255, 255, 0);">身份证</span></span>\r\n</p>\r\n<p style="clear: both; white-space: normal;">\r\n    <span style="font-size: 18px;">2.&nbsp;<span style="background-color: rgb(255, 255, 0);">银行卡</span>&nbsp;（最好是大的银行，如招商银行，中国银行，工商银行等）</span>\r\n</p>\r\n<p style="clear: both; white-space: normal;">\r\n    <span style="font-size: 18px;">3.&nbsp;<span style="background-color: rgb(255, 255, 0);">开户者本人</span></span>\r\n</p>\r\n<p style="clear: both; white-space: normal;">\r\n    <span style="font-size: 18px;">二. 怎么开户？</span>\r\n</p>\r\n<p style="clear: both; white-space: normal;">\r\n    <span style="font-size: 18px;">1.&nbsp;<span style="background-color: rgb(255, 255, 0);">网上开户</span>：需准备手机、带摄像头的电脑（配麦克风），然后跟着提示操作就可以了。</span>\r\n</p>\r\n<p style="clear: both; white-space: normal;">\r\n    <span style="font-size: 18px;"><span class="Apple-tab-span" style="white-space: pre;">	</span>推荐国金证券的佣金宝(http://www.yongjinbao.com.cn/)，招商证券(http://kh.newone.com.cn/)，华泰证券(https://member.zhangle.com/openMobile/index.jsp)，国泰君安(https://one.gtja.com/kh/busimanage/index.jsp)</span>\r\n</p>\r\n<p style="clear: both; white-space: normal;">\r\n    <span style="font-size: 18px;">2.&nbsp;<span style="background-color: rgb(255, 255, 0);">营业厅开户</span></span>\r\n</p>\r\n<p style="clear: both; white-space: normal;">\r\n    <span style="font-size: 18px;"><span class="Apple-tab-span" style="white-space: pre;">	</span>优点：网上开户可以随时开户，不受时间限制，开户时间只需要半个小时左右；营业厅开户则需在周一至周五（非法定节假日）9:00~15:00内办理，时间花费在2到3个小时</span>\r\n</p>\r\n<p style="clear: both; white-space: normal;">\r\n    <span style="font-size: 18px;"><span class="Apple-tab-span" style="white-space: pre;">	</span>缺点：<span style="background-color: rgb(255, 255, 0);">网上开户只能开通主板和中小板，不能开通创业板</span><span style="background-color: rgb(255, 255, 0);">，创业板必须到营业厅去开户</span>，融资融券账户也只能在开户6个月后去营业厅办理。营业厅开户则需在营业厅开户成功后，本人带着在营业厅开好的账户去银行，将你的银行卡与证券账号绑定起来。</span>\r\n</p>\r\n<p style="clear: both; white-space: normal;">\r\n    <span style="font-size: 18px;"><span class="Apple-tab-span" style="white-space: pre;">	</span><span style="background-color: rgb(255, 255, 0);">选择开户证券公司</span>的原则：</span>\r\n</p>\r\n<p style="clear: both; white-space: normal;">\r\n    <span style="font-size: 18px;"><span class="Apple-tab-span" style="white-space: pre;">	</span>1. 营业厅离家或者工作单位近（方便以后办理业务，如修改密码、开通创业板、开通融资融券账户等）</span>\r\n</p>\r\n<p style="clear: both; white-space: normal;">\r\n    <span style="font-size: 18px;"><span class="Apple-tab-span" style="white-space: pre;">	</span>2. 选择大的证券公司（可以保证服务稳定，比如小的证券公司服务不稳定导致交易延迟或者失败）</span>\r\n</p>\r\n<p style="clear: both; white-space: normal;">\r\n    <span style="font-size: 18px;"><span class="Apple-tab-span" style="white-space: pre;">	</span>推荐证券公司：招商证券，华泰证券，中信证券，银河证券，国泰君安等</span>\r\n</p>\r\n<p style="clear: both; white-space: normal;">\r\n    <span style="font-size: 18px;">三. 费用</span>\r\n</p>\r\n<p style="clear: both; white-space: normal;">\r\n    <span style="font-size: 18px;"><span class="Apple-tab-span" style="white-space: pre;">	</span>1. 开户费用：深圳证券账户50元，上海证券账户40元，一共是90元。不过一般免收</span>\r\n</p>\r\n<p style="clear: both; white-space: normal;">\r\n    <span style="font-size: 18px;"><span class="Apple-tab-span" style="white-space: pre;">	</span>2. 交易费用：</span>\r\n</p>\r\n<p style="clear: both; white-space: normal;">\r\n    <span style="font-size: 18px;"><span class="Apple-tab-span" style="white-space: pre;">	</span>（1） 印花税：只在卖出股票的时候收取，收费方式为成交金额的千分之一，由国家进行征收</span>\r\n</p>\r\n<p style="clear: both; white-space: normal;">\r\n    <span style="font-size: 18px;"><span class="Apple-tab-span" style="white-space: pre;">	</span>（2） 过户费：只在买卖上海股票的时候收取，收费方式为成交股数的万分之六，不足一元按一元收取</span>\r\n</p>\r\n<p style="clear: both; white-space: normal;">\r\n    <span style="font-size: 18px;"><span class="Apple-tab-span" style="white-space: pre;">	</span>（3）&nbsp;<span style="background-color: rgb(255, 255, 0);">交易佣金</span>：由开户券商收取，目前一般在<span style="background-color: rgb(255, 255, 0);">万分之三左右</span>（高于万分之五的证券公司就是坑人的了，果断换一家），可以根据个人情况谈判，资金量大（30万以上短线交易）的情况最低可拿到万分之二的佣金</span>\r\n</p>\r\n<p style="clear: both; white-space: normal;">\r\n    <span style="font-size: 18px;">当所有一切都完成之后，您的股票账户就开通成功了，第二天就可以进行股票交易了。恭喜您，赶上了一个大牛市，坐等资产翻倍升值吧！</span>\r\n</p>\r\n<p style="clear: both; white-space: normal;">\r\n    <span style="color: rgb(84, 141, 212); font-size: 18px;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;长按图片识别图中二维码</span>\r\n</p>\r\n<p style="clear: both; white-space: normal;">\r\n    <span style="color: rgb(84, 141, 212); font-size: 18px;"><img src="https://mmbiz.qlogo.cn/mmbiz/xSsT5zbzvR7P8RfZiaFjAkxM8GPJ2oHFhibUZUsIUd3FtLPLEorSzR2LD5kficvJH61KiaO7ibpJSMicd1IOEgW0vl5Q/0" data-ratio="1" data-w="430" style="max-width: 100%; height: auto !important;"/></span>\r\n</p>\r\n<p>\r\n    <span style="color: rgb(84, 141, 212); font-size: 18px;"><br/></span>\r\n</p>\r\n<p>\r\n    <br/>\r\n</p>', '2015-03-29 02:52:40', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `article`
--
ALTER TABLE `article`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `article`
--
ALTER TABLE `article`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;