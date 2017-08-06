<?php

// 锦尚中国·微信魔方

pdo_query("CREATE TABLE IF NOT EXISTS `ims_fendou_jjle_ad` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `weid` int(10) unsigned NOT NULL,
  `title` varchar(50) NOT NULL DEFAULT '',
  `thumb` varchar(300) NOT NULL DEFAULT '',
  `description` varchar(100) DEFAULT NULL,
  `url` varchar(300) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
CREATE TABLE IF NOT EXISTS `ims_fendou_jjle_admin` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `gid` int(10) NOT NULL DEFAULT '0',
  `weid` int(10) unsigned NOT NULL,
  `from_user` varchar(80) NOT NULL,
  `nickname` varchar(80) NOT NULL,
  `headimgurl` varchar(255) NOT NULL,
  `prizes` varchar(100) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
CREATE TABLE IF NOT EXISTS `ims_fendou_jjle_convert` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `weid` int(11) NOT NULL,
  `gid` int(11) NOT NULL DEFAULT '0',
  `openid` varchar(200) NOT NULL,
  `uid` int(11) NOT NULL DEFAULT '0',
  `nickname` varchar(200) NOT NULL,
  `giftid` int(11) NOT NULL DEFAULT '0',
  `giftname` varchar(50) NOT NULL,
  `createtime` int(11) NOT NULL DEFAULT '0',
  `istaken` tinyint(1) NOT NULL,
  `admin` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
CREATE TABLE IF NOT EXISTS `ims_fendou_jjle_game` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `weid` int(11) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '0',
  `gametype` tinyint(1) NOT NULL DEFAULT '0' COMMENT '游戏模式',
  `grouptype` varchar(50) NOT NULL COMMENT '组别要求',
  `rewardtype` tinyint(1) NOT NULL DEFAULT '0' COMMENT '奖励模式',
  `credits` int(10) NOT NULL DEFAULT '0' COMMENT '每次消耗积分',
  `addcredits` int(10) NOT NULL DEFAULT '0' COMMENT '分享增加积分',
  `jointype` tinyint(1) NOT NULL DEFAULT '0' COMMENT '游戏参与模式',
  `maxgame` int(10) NOT NULL DEFAULT '0' COMMENT '可玩次数',
  `title` varchar(200) NOT NULL COMMENT '回复标题',
  `starttime` int(10) NOT NULL DEFAULT '0' COMMENT '开始时间',
  `endtime` int(10) NOT NULL DEFAULT '0' COMMENT '结束时间',
  `gametime` int(2) NOT NULL DEFAULT '10' COMMENT '游戏时间',
  `info` mediumtext COMMENT '游戏说明',
  `rule` mediumtext COMMENT '游戏规则',
  `gzurl` varchar(500) DEFAULT NULL COMMENT '关注连接',
  `sjurl` varchar(500) DEFAULT NULL COMMENT '升级连接',
  `jfurl` varchar(500) DEFAULT NULL COMMENT '积分链接',
  `ranking` int(10) NOT NULL DEFAULT '0' COMMENT '奖励多少人',
  `need` int(10) NOT NULL DEFAULT '0' COMMENT '需要跑多分',
  `difficulty` tinyint(1) NOT NULL DEFAULT '0' COMMENT '游戏难度',
  `adlist` varchar(50) NOT NULL COMMENT '广告',
  `code` varchar(50) NOT NULL COMMENT '手机端登陆',
  `gameend_title` varchar(250) DEFAULT NULL COMMENT '分享文字',
  `gameend2_title` varchar(250) DEFAULT NULL COMMENT '分享文字',
  `share_title` varchar(250) DEFAULT NULL COMMENT '分享文字',
  `thumb_share` varchar(250) DEFAULT NULL COMMENT '分享文字',
  `share_link` varchar(250) DEFAULT NULL COMMENT '分享连接',
  `helpnum` int(3) NOT NULL DEFAULT '0' COMMENT '助力限制人数',
  `game_bg` varchar(250) DEFAULT NULL COMMENT '背景',
  `game_playbg` varchar(250) DEFAULT NULL COMMENT '背景',
  `game_role1_n` varchar(250) DEFAULT NULL COMMENT '开始形象',
  `game_role1_h` varchar(250) DEFAULT NULL COMMENT '被夹后',
  `game_role1_m` int(10) NOT NULL DEFAULT '10' COMMENT '分值',
  `game_role2_n` varchar(250) DEFAULT NULL COMMENT '开始形象',
  `game_role2_h` varchar(250) DEFAULT NULL COMMENT '被夹后',
  `game_role2_m` int(10) NOT NULL DEFAULT '10' COMMENT '分值',
  `game_role3_n` varchar(250) DEFAULT NULL COMMENT '开始形象',
  `game_role3_h` varchar(250) DEFAULT NULL COMMENT '被夹后',
  `game_role3_m` int(10) NOT NULL DEFAULT '10' COMMENT '分值',
  `game_role4_n` varchar(250) DEFAULT NULL COMMENT '开始形象',
  `game_role4_h` varchar(250) DEFAULT NULL COMMENT '被夹后',
  `game_role4_m` int(10) NOT NULL DEFAULT '10' COMMENT '分值',
  `game_role4_md` int(10) NOT NULL DEFAULT '10' COMMENT '分值',
  `appid` varchar(250) DEFAULT NULL COMMENT 'appid',
  `secret` varchar(250) DEFAULT NULL COMMENT 'secret',
  `wishing` varchar(128) DEFAULT NULL,
  `send_name` varchar(128) DEFAULT NULL,
  `mchid` varchar(20) DEFAULT NULL,
  `ip` varchar(25) DEFAULT NULL,
  `signkey` varchar(100) DEFAULT NULL,
  `rootca` tinyint(1) DEFAULT '0',
  `apiclient_cert` tinyint(1) DEFAULT '0',
  `apiclient_key` tinyint(1) DEFAULT '0',
  `info_1` varchar(250) DEFAULT NULL COMMENT '被夹后',
  `info_2` varchar(250) DEFAULT NULL COMMENT '被夹后',
  `info_3` varchar(250) DEFAULT NULL COMMENT '被夹后',
  `info_4` varchar(250) DEFAULT NULL COMMENT '被夹后',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
CREATE TABLE IF NOT EXISTS `ims_fendou_jjle_gift` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `gid` int(10) unsigned NOT NULL DEFAULT '0',
  `weid` int(11) NOT NULL,
  `thumb` varchar(255) DEFAULT NULL COMMENT '奖品图片',
  `thumb2` varchar(255) DEFAULT NULL COMMENT '奖品图片',
  `sponsor` varchar(50) DEFAULT NULL COMMENT '赞助商',
  `title` varchar(50) NOT NULL COMMENT '奖品名称',
  `description` varchar(100) NOT NULL DEFAULT '' COMMENT '描述',
  `need` int(5) NOT NULL COMMENT '数量',
  `total` int(5) NOT NULL COMMENT '数量',
  `remain` int(5) NOT NULL COMMENT '剩余数量',
  `probalilty` int(3) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
CREATE TABLE IF NOT EXISTS `ims_fendou_jjle_member` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `gid` int(11) NOT NULL COMMENT '主题id',
  `weid` int(11) NOT NULL,
  `from_user` varchar(100) NOT NULL,
  `openid` varchar(100) NOT NULL,
  `unionid` varchar(100) NOT NULL,
  `num` int(11) NOT NULL DEFAULT '0',
  `mark` int(11) NOT NULL DEFAULT '0',
  `helpid` int(11) NOT NULL DEFAULT '0',
  `nickname` varchar(100) NOT NULL,
  `sex` tinyint(1) NOT NULL DEFAULT '0',
  `headimgurl` varchar(255) NOT NULL,
  `time` int(13) DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
CREATE TABLE IF NOT EXISTS `ims_fendou_jjle_reply` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `weid` int(11) NOT NULL,
  `rid` int(10) unsigned NOT NULL DEFAULT '0',
  `gid` int(10) unsigned NOT NULL DEFAULT '0',
  `status` tinyint(1) NOT NULL DEFAULT '0',
  `title` varchar(200) NOT NULL COMMENT '回复标题',
  `cover` varchar(250) NOT NULL COMMENT '图文回复图片',
  `description` varchar(250) NOT NULL COMMENT '图文回复描述',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
");
if (pdo_tableexists('fendou_jjle_ad')) {
	if (!pdo_fieldexists('fendou_jjle_ad', 'id')) {
		pdo_query('ALTER TABLE ' . tablename('fendou_jjle_ad') . ' ADD `id` int(10) unsigned NOT NULL auto_increment  COMMENT \'\';');
	}
}
if (pdo_tableexists('fendou_jjle_ad')) {
	if (!pdo_fieldexists('fendou_jjle_ad', 'weid')) {
		pdo_query('ALTER TABLE ' . tablename('fendou_jjle_ad') . ' ADD `weid` int(10) unsigned NOT NULL   COMMENT \'\';');
	}
}
if (pdo_tableexists('fendou_jjle_ad')) {
	if (!pdo_fieldexists('fendou_jjle_ad', 'title')) {
		pdo_query('ALTER TABLE ' . tablename('fendou_jjle_ad') . ' ADD `title` varchar(50) NOT NULL   COMMENT \'\';');
	}
}
if (pdo_tableexists('fendou_jjle_ad')) {
	if (!pdo_fieldexists('fendou_jjle_ad', 'thumb')) {
		pdo_query('ALTER TABLE ' . tablename('fendou_jjle_ad') . ' ADD `thumb` varchar(300) NOT NULL   COMMENT \'\';');
	}
}
if (pdo_tableexists('fendou_jjle_ad')) {
	if (!pdo_fieldexists('fendou_jjle_ad', 'description')) {
		pdo_query('ALTER TABLE ' . tablename('fendou_jjle_ad') . ' ADD `description` varchar(100)    COMMENT \'\';');
	}
}
if (pdo_tableexists('fendou_jjle_ad')) {
	if (!pdo_fieldexists('fendou_jjle_ad', 'url')) {
		pdo_query('ALTER TABLE ' . tablename('fendou_jjle_ad') . ' ADD `url` varchar(300) NOT NULL   COMMENT \'\';');
	}
}
if (pdo_tableexists('fendou_jjle_admin')) {
	if (!pdo_fieldexists('fendou_jjle_admin', 'id')) {
		pdo_query('ALTER TABLE ' . tablename('fendou_jjle_admin') . ' ADD `id` int(10) unsigned NOT NULL auto_increment  COMMENT \'\';');
	}
}
if (pdo_tableexists('fendou_jjle_admin')) {
	if (!pdo_fieldexists('fendou_jjle_admin', 'gid')) {
		pdo_query('ALTER TABLE ' . tablename('fendou_jjle_admin') . ' ADD `gid` int(10) NOT NULL  DEFAULT 0 COMMENT \'\';');
	}
}
if (pdo_tableexists('fendou_jjle_admin')) {
	if (!pdo_fieldexists('fendou_jjle_admin', 'weid')) {
		pdo_query('ALTER TABLE ' . tablename('fendou_jjle_admin') . ' ADD `weid` int(10) unsigned NOT NULL   COMMENT \'\';');
	}
}
if (pdo_tableexists('fendou_jjle_admin')) {
	if (!pdo_fieldexists('fendou_jjle_admin', 'from_user')) {
		pdo_query('ALTER TABLE ' . tablename('fendou_jjle_admin') . ' ADD `from_user` varchar(80) NOT NULL   COMMENT \'\';');
	}
}
if (pdo_tableexists('fendou_jjle_admin')) {
	if (!pdo_fieldexists('fendou_jjle_admin', 'nickname')) {
		pdo_query('ALTER TABLE ' . tablename('fendou_jjle_admin') . ' ADD `nickname` varchar(80) NOT NULL   COMMENT \'\';');
	}
}
if (pdo_tableexists('fendou_jjle_admin')) {
	if (!pdo_fieldexists('fendou_jjle_admin', 'headimgurl')) {
		pdo_query('ALTER TABLE ' . tablename('fendou_jjle_admin') . ' ADD `headimgurl` varchar(255) NOT NULL   COMMENT \'\';');
	}
}
if (pdo_tableexists('fendou_jjle_admin')) {
	if (!pdo_fieldexists('fendou_jjle_admin', 'prizes')) {
		pdo_query('ALTER TABLE ' . tablename('fendou_jjle_admin') . ' ADD `prizes` varchar(100) NOT NULL   COMMENT \'\';');
	}
}
if (pdo_tableexists('fendou_jjle_admin')) {
	if (!pdo_fieldexists('fendou_jjle_admin', 'status')) {
		pdo_query('ALTER TABLE ' . tablename('fendou_jjle_admin') . ' ADD `status` tinyint(1) NOT NULL  DEFAULT 0 COMMENT \'\';');
	}
}
if (pdo_tableexists('fendou_jjle_convert')) {
	if (!pdo_fieldexists('fendou_jjle_convert', 'id')) {
		pdo_query('ALTER TABLE ' . tablename('fendou_jjle_convert') . ' ADD `id` int(11) NOT NULL auto_increment  COMMENT \'\';');
	}
}
if (pdo_tableexists('fendou_jjle_convert')) {
	if (!pdo_fieldexists('fendou_jjle_convert', 'weid')) {
		pdo_query('ALTER TABLE ' . tablename('fendou_jjle_convert') . ' ADD `weid` int(11) NOT NULL   COMMENT \'\';');
	}
}
if (pdo_tableexists('fendou_jjle_convert')) {
	if (!pdo_fieldexists('fendou_jjle_convert', 'gid')) {
		pdo_query('ALTER TABLE ' . tablename('fendou_jjle_convert') . ' ADD `gid` int(11) NOT NULL  DEFAULT 0 COMMENT \'\';');
	}
}
if (pdo_tableexists('fendou_jjle_convert')) {
	if (!pdo_fieldexists('fendou_jjle_convert', 'openid')) {
		pdo_query('ALTER TABLE ' . tablename('fendou_jjle_convert') . ' ADD `openid` varchar(200) NOT NULL   COMMENT \'\';');
	}
}
if (pdo_tableexists('fendou_jjle_convert')) {
	if (!pdo_fieldexists('fendou_jjle_convert', 'uid')) {
		pdo_query('ALTER TABLE ' . tablename('fendou_jjle_convert') . ' ADD `uid` int(11) NOT NULL  DEFAULT 0 COMMENT \'\';');
	}
}
if (pdo_tableexists('fendou_jjle_convert')) {
	if (!pdo_fieldexists('fendou_jjle_convert', 'nickname')) {
		pdo_query('ALTER TABLE ' . tablename('fendou_jjle_convert') . ' ADD `nickname` varchar(200) NOT NULL   COMMENT \'\';');
	}
}
if (pdo_tableexists('fendou_jjle_convert')) {
	if (!pdo_fieldexists('fendou_jjle_convert', 'giftid')) {
		pdo_query('ALTER TABLE ' . tablename('fendou_jjle_convert') . ' ADD `giftid` int(11) NOT NULL  DEFAULT 0 COMMENT \'\';');
	}
}
if (pdo_tableexists('fendou_jjle_convert')) {
	if (!pdo_fieldexists('fendou_jjle_convert', 'giftname')) {
		pdo_query('ALTER TABLE ' . tablename('fendou_jjle_convert') . ' ADD `giftname` varchar(50) NOT NULL   COMMENT \'\';');
	}
}
if (pdo_tableexists('fendou_jjle_convert')) {
	if (!pdo_fieldexists('fendou_jjle_convert', 'createtime')) {
		pdo_query('ALTER TABLE ' . tablename('fendou_jjle_convert') . ' ADD `createtime` int(11) NOT NULL  DEFAULT 0 COMMENT \'\';');
	}
}
if (pdo_tableexists('fendou_jjle_convert')) {
	if (!pdo_fieldexists('fendou_jjle_convert', 'istaken')) {
		pdo_query('ALTER TABLE ' . tablename('fendou_jjle_convert') . ' ADD `istaken` tinyint(1) NOT NULL   COMMENT \'\';');
	}
}
if (pdo_tableexists('fendou_jjle_convert')) {
	if (!pdo_fieldexists('fendou_jjle_convert', 'admin')) {
		pdo_query('ALTER TABLE ' . tablename('fendou_jjle_convert') . ' ADD `admin` varchar(200) NOT NULL   COMMENT \'\';');
	}
}
if (pdo_tableexists('fendou_jjle_game')) {
	if (!pdo_fieldexists('fendou_jjle_game', 'id')) {
		pdo_query('ALTER TABLE ' . tablename('fendou_jjle_game') . ' ADD `id` int(10) unsigned NOT NULL auto_increment  COMMENT \'\';');
	}
}
if (pdo_tableexists('fendou_jjle_game')) {
	if (!pdo_fieldexists('fendou_jjle_game', 'weid')) {
		pdo_query('ALTER TABLE ' . tablename('fendou_jjle_game') . ' ADD `weid` int(11) NOT NULL   COMMENT \'\';');
	}
}
if (pdo_tableexists('fendou_jjle_game')) {
	if (!pdo_fieldexists('fendou_jjle_game', 'status')) {
		pdo_query('ALTER TABLE ' . tablename('fendou_jjle_game') . ' ADD `status` tinyint(1) NOT NULL  DEFAULT 0 COMMENT \'\';');
	}
}
if (pdo_tableexists('fendou_jjle_game')) {
	if (!pdo_fieldexists('fendou_jjle_game', 'gametype')) {
		pdo_query('ALTER TABLE ' . tablename('fendou_jjle_game') . ' ADD `gametype` tinyint(1) NOT NULL  DEFAULT 0 COMMENT \'游戏模式\';');
	}
}
if (pdo_tableexists('fendou_jjle_game')) {
	if (!pdo_fieldexists('fendou_jjle_game', 'grouptype')) {
		pdo_query('ALTER TABLE ' . tablename('fendou_jjle_game') . ' ADD `grouptype` varchar(50) NOT NULL   COMMENT \'组别要求\';');
	}
}
if (pdo_tableexists('fendou_jjle_game')) {
	if (!pdo_fieldexists('fendou_jjle_game', 'rewardtype')) {
		pdo_query('ALTER TABLE ' . tablename('fendou_jjle_game') . ' ADD `rewardtype` tinyint(1) NOT NULL  DEFAULT 0 COMMENT \'奖励模式\';');
	}
}
if (pdo_tableexists('fendou_jjle_game')) {
	if (!pdo_fieldexists('fendou_jjle_game', 'credits')) {
		pdo_query('ALTER TABLE ' . tablename('fendou_jjle_game') . ' ADD `credits` int(10) NOT NULL  DEFAULT 0 COMMENT \'每次消耗积分\';');
	}
}
if (pdo_tableexists('fendou_jjle_game')) {
	if (!pdo_fieldexists('fendou_jjle_game', 'addcredits')) {
		pdo_query('ALTER TABLE ' . tablename('fendou_jjle_game') . ' ADD `addcredits` int(10) NOT NULL  DEFAULT 0 COMMENT \'分享增加积分\';');
	}
}
if (pdo_tableexists('fendou_jjle_game')) {
	if (!pdo_fieldexists('fendou_jjle_game', 'jointype')) {
		pdo_query('ALTER TABLE ' . tablename('fendou_jjle_game') . ' ADD `jointype` tinyint(1) NOT NULL  DEFAULT 0 COMMENT \'游戏参与模式\';');
	}
}
if (pdo_tableexists('fendou_jjle_game')) {
	if (!pdo_fieldexists('fendou_jjle_game', 'maxgame')) {
		pdo_query('ALTER TABLE ' . tablename('fendou_jjle_game') . ' ADD `maxgame` int(10) NOT NULL  DEFAULT 0 COMMENT \'可玩次数\';');
	}
}
if (pdo_tableexists('fendou_jjle_game')) {
	if (!pdo_fieldexists('fendou_jjle_game', 'title')) {
		pdo_query('ALTER TABLE ' . tablename('fendou_jjle_game') . ' ADD `title` varchar(200) NOT NULL   COMMENT \'回复标题\';');
	}
}
if (pdo_tableexists('fendou_jjle_game')) {
	if (!pdo_fieldexists('fendou_jjle_game', 'starttime')) {
		pdo_query('ALTER TABLE ' . tablename('fendou_jjle_game') . ' ADD `starttime` int(10) NOT NULL  DEFAULT 0 COMMENT \'开始时间\';');
	}
}
if (pdo_tableexists('fendou_jjle_game')) {
	if (!pdo_fieldexists('fendou_jjle_game', 'endtime')) {
		pdo_query('ALTER TABLE ' . tablename('fendou_jjle_game') . ' ADD `endtime` int(10) NOT NULL  DEFAULT 0 COMMENT \'结束时间\';');
	}
}
if (pdo_tableexists('fendou_jjle_game')) {
	if (!pdo_fieldexists('fendou_jjle_game', 'gametime')) {
		pdo_query('ALTER TABLE ' . tablename('fendou_jjle_game') . ' ADD `gametime` int(2) NOT NULL  DEFAULT 10 COMMENT \'游戏时间\';');
	}
}
if (pdo_tableexists('fendou_jjle_game')) {
	if (!pdo_fieldexists('fendou_jjle_game', 'info')) {
		pdo_query('ALTER TABLE ' . tablename('fendou_jjle_game') . ' ADD `info` mediumtext    COMMENT \'游戏说明\';');
	}
}
if (pdo_tableexists('fendou_jjle_game')) {
	if (!pdo_fieldexists('fendou_jjle_game', 'rule')) {
		pdo_query('ALTER TABLE ' . tablename('fendou_jjle_game') . ' ADD `rule` mediumtext    COMMENT \'游戏规则\';');
	}
}
if (pdo_tableexists('fendou_jjle_game')) {
	if (!pdo_fieldexists('fendou_jjle_game', 'gzurl')) {
		pdo_query('ALTER TABLE ' . tablename('fendou_jjle_game') . ' ADD `gzurl` varchar(500)    COMMENT \'关注连接\';');
	}
}
if (pdo_tableexists('fendou_jjle_game')) {
	if (!pdo_fieldexists('fendou_jjle_game', 'sjurl')) {
		pdo_query('ALTER TABLE ' . tablename('fendou_jjle_game') . ' ADD `sjurl` varchar(500)    COMMENT \'升级连接\';');
	}
}
if (pdo_tableexists('fendou_jjle_game')) {
	if (!pdo_fieldexists('fendou_jjle_game', 'jfurl')) {
		pdo_query('ALTER TABLE ' . tablename('fendou_jjle_game') . ' ADD `jfurl` varchar(500)    COMMENT \'积分链接\';');
	}
}
if (pdo_tableexists('fendou_jjle_game')) {
	if (!pdo_fieldexists('fendou_jjle_game', 'ranking')) {
		pdo_query('ALTER TABLE ' . tablename('fendou_jjle_game') . ' ADD `ranking` int(10) NOT NULL  DEFAULT 0 COMMENT \'奖励多少人\';');
	}
}
if (pdo_tableexists('fendou_jjle_game')) {
	if (!pdo_fieldexists('fendou_jjle_game', 'need')) {
		pdo_query('ALTER TABLE ' . tablename('fendou_jjle_game') . ' ADD `need` int(10) NOT NULL  DEFAULT 0 COMMENT \'需要跑多分\';');
	}
}
if (pdo_tableexists('fendou_jjle_game')) {
	if (!pdo_fieldexists('fendou_jjle_game', 'difficulty')) {
		pdo_query('ALTER TABLE ' . tablename('fendou_jjle_game') . ' ADD `difficulty` tinyint(1) NOT NULL  DEFAULT 0 COMMENT \'游戏难度\';');
	}
}
if (pdo_tableexists('fendou_jjle_game')) {
	if (!pdo_fieldexists('fendou_jjle_game', 'adlist')) {
		pdo_query('ALTER TABLE ' . tablename('fendou_jjle_game') . ' ADD `adlist` varchar(50) NOT NULL   COMMENT \'广告\';');
	}
}
if (pdo_tableexists('fendou_jjle_game')) {
	if (!pdo_fieldexists('fendou_jjle_game', 'code')) {
		pdo_query('ALTER TABLE ' . tablename('fendou_jjle_game') . ' ADD `code` varchar(50) NOT NULL   COMMENT \'手机端登陆\';');
	}
}
if (pdo_tableexists('fendou_jjle_game')) {
	if (!pdo_fieldexists('fendou_jjle_game', 'gameend_title')) {
		pdo_query('ALTER TABLE ' . tablename('fendou_jjle_game') . ' ADD `gameend_title` varchar(250)    COMMENT \'分享文字\';');
	}
}
if (pdo_tableexists('fendou_jjle_game')) {
	if (!pdo_fieldexists('fendou_jjle_game', 'gameend2_title')) {
		pdo_query('ALTER TABLE ' . tablename('fendou_jjle_game') . ' ADD `gameend2_title` varchar(250)    COMMENT \'分享文字\';');
	}
}
if (pdo_tableexists('fendou_jjle_game')) {
	if (!pdo_fieldexists('fendou_jjle_game', 'share_title')) {
		pdo_query('ALTER TABLE ' . tablename('fendou_jjle_game') . ' ADD `share_title` varchar(250)    COMMENT \'分享文字\';');
	}
}
if (pdo_tableexists('fendou_jjle_game')) {
	if (!pdo_fieldexists('fendou_jjle_game', 'thumb_share')) {
		pdo_query('ALTER TABLE ' . tablename('fendou_jjle_game') . ' ADD `thumb_share` varchar(250)    COMMENT \'分享文字\';');
	}
}
if (pdo_tableexists('fendou_jjle_game')) {
	if (!pdo_fieldexists('fendou_jjle_game', 'share_link')) {
		pdo_query('ALTER TABLE ' . tablename('fendou_jjle_game') . ' ADD `share_link` varchar(250)    COMMENT \'分享连接\';');
	}
}
if (pdo_tableexists('fendou_jjle_game')) {
	if (!pdo_fieldexists('fendou_jjle_game', 'helpnum')) {
		pdo_query('ALTER TABLE ' . tablename('fendou_jjle_game') . ' ADD `helpnum` int(3) NOT NULL  DEFAULT 0 COMMENT \'助力限制人数\';');
	}
}
if (pdo_tableexists('fendou_jjle_game')) {
	if (!pdo_fieldexists('fendou_jjle_game', 'game_bg')) {
		pdo_query('ALTER TABLE ' . tablename('fendou_jjle_game') . ' ADD `game_bg` varchar(250)    COMMENT \'背景\';');
	}
}
if (pdo_tableexists('fendou_jjle_game')) {
	if (!pdo_fieldexists('fendou_jjle_game', 'game_playbg')) {
		pdo_query('ALTER TABLE ' . tablename('fendou_jjle_game') . ' ADD `game_playbg` varchar(250)    COMMENT \'背景\';');
	}
}
if (pdo_tableexists('fendou_jjle_game')) {
	if (!pdo_fieldexists('fendou_jjle_game', 'game_role1_n')) {
		pdo_query('ALTER TABLE ' . tablename('fendou_jjle_game') . ' ADD `game_role1_n` varchar(250)    COMMENT \'开始形象\';');
	}
}
if (pdo_tableexists('fendou_jjle_game')) {
	if (!pdo_fieldexists('fendou_jjle_game', 'game_role1_h')) {
		pdo_query('ALTER TABLE ' . tablename('fendou_jjle_game') . ' ADD `game_role1_h` varchar(250)    COMMENT \'被夹后\';');
	}
}
if (pdo_tableexists('fendou_jjle_game')) {
	if (!pdo_fieldexists('fendou_jjle_game', 'game_role1_m')) {
		pdo_query('ALTER TABLE ' . tablename('fendou_jjle_game') . ' ADD `game_role1_m` int(10) NOT NULL  DEFAULT 10 COMMENT \'分值\';');
	}
}
if (pdo_tableexists('fendou_jjle_game')) {
	if (!pdo_fieldexists('fendou_jjle_game', 'game_role2_n')) {
		pdo_query('ALTER TABLE ' . tablename('fendou_jjle_game') . ' ADD `game_role2_n` varchar(250)    COMMENT \'开始形象\';');
	}
}
if (pdo_tableexists('fendou_jjle_game')) {
	if (!pdo_fieldexists('fendou_jjle_game', 'game_role2_h')) {
		pdo_query('ALTER TABLE ' . tablename('fendou_jjle_game') . ' ADD `game_role2_h` varchar(250)    COMMENT \'被夹后\';');
	}
}
if (pdo_tableexists('fendou_jjle_game')) {
	if (!pdo_fieldexists('fendou_jjle_game', 'game_role2_m')) {
		pdo_query('ALTER TABLE ' . tablename('fendou_jjle_game') . ' ADD `game_role2_m` int(10) NOT NULL  DEFAULT 10 COMMENT \'分值\';');
	}
}
if (pdo_tableexists('fendou_jjle_game')) {
	if (!pdo_fieldexists('fendou_jjle_game', 'game_role3_n')) {
		pdo_query('ALTER TABLE ' . tablename('fendou_jjle_game') . ' ADD `game_role3_n` varchar(250)    COMMENT \'开始形象\';');
	}
}
if (pdo_tableexists('fendou_jjle_game')) {
	if (!pdo_fieldexists('fendou_jjle_game', 'game_role3_h')) {
		pdo_query('ALTER TABLE ' . tablename('fendou_jjle_game') . ' ADD `game_role3_h` varchar(250)    COMMENT \'被夹后\';');
	}
}
if (pdo_tableexists('fendou_jjle_game')) {
	if (!pdo_fieldexists('fendou_jjle_game', 'game_role3_m')) {
		pdo_query('ALTER TABLE ' . tablename('fendou_jjle_game') . ' ADD `game_role3_m` int(10) NOT NULL  DEFAULT 10 COMMENT \'分值\';');
	}
}
if (pdo_tableexists('fendou_jjle_game')) {
	if (!pdo_fieldexists('fendou_jjle_game', 'game_role4_n')) {
		pdo_query('ALTER TABLE ' . tablename('fendou_jjle_game') . ' ADD `game_role4_n` varchar(250)    COMMENT \'开始形象\';');
	}
}
if (pdo_tableexists('fendou_jjle_game')) {
	if (!pdo_fieldexists('fendou_jjle_game', 'game_role4_h')) {
		pdo_query('ALTER TABLE ' . tablename('fendou_jjle_game') . ' ADD `game_role4_h` varchar(250)    COMMENT \'被夹后\';');
	}
}
if (pdo_tableexists('fendou_jjle_game')) {
	if (!pdo_fieldexists('fendou_jjle_game', 'game_role4_m')) {
		pdo_query('ALTER TABLE ' . tablename('fendou_jjle_game') . ' ADD `game_role4_m` int(10) NOT NULL  DEFAULT 10 COMMENT \'分值\';');
	}
}
if (pdo_tableexists('fendou_jjle_game')) {
	if (!pdo_fieldexists('fendou_jjle_game', 'game_role4_md')) {
		pdo_query('ALTER TABLE ' . tablename('fendou_jjle_game') . ' ADD `game_role4_md` int(10) NOT NULL  DEFAULT 10 COMMENT \'分值\';');
	}
}
if (pdo_tableexists('fendou_jjle_game')) {
	if (!pdo_fieldexists('fendou_jjle_game', 'appid')) {
		pdo_query('ALTER TABLE ' . tablename('fendou_jjle_game') . ' ADD `appid` varchar(250)    COMMENT \'appid\';');
	}
}
if (pdo_tableexists('fendou_jjle_game')) {
	if (!pdo_fieldexists('fendou_jjle_game', 'secret')) {
		pdo_query('ALTER TABLE ' . tablename('fendou_jjle_game') . ' ADD `secret` varchar(250)    COMMENT \'secret\';');
	}
}
if (pdo_tableexists('fendou_jjle_game')) {
	if (!pdo_fieldexists('fendou_jjle_game', 'wishing')) {
		pdo_query('ALTER TABLE ' . tablename('fendou_jjle_game') . ' ADD `wishing` varchar(128)    COMMENT \'\';');
	}
}
if (pdo_tableexists('fendou_jjle_game')) {
	if (!pdo_fieldexists('fendou_jjle_game', 'send_name')) {
		pdo_query('ALTER TABLE ' . tablename('fendou_jjle_game') . ' ADD `send_name` varchar(128)    COMMENT \'\';');
	}
}
if (pdo_tableexists('fendou_jjle_game')) {
	if (!pdo_fieldexists('fendou_jjle_game', 'mchid')) {
		pdo_query('ALTER TABLE ' . tablename('fendou_jjle_game') . ' ADD `mchid` varchar(20)    COMMENT \'\';');
	}
}
if (pdo_tableexists('fendou_jjle_game')) {
	if (!pdo_fieldexists('fendou_jjle_game', 'ip')) {
		pdo_query('ALTER TABLE ' . tablename('fendou_jjle_game') . ' ADD `ip` varchar(25)    COMMENT \'\';');
	}
}
if (pdo_tableexists('fendou_jjle_game')) {
	if (!pdo_fieldexists('fendou_jjle_game', 'signkey')) {
		pdo_query('ALTER TABLE ' . tablename('fendou_jjle_game') . ' ADD `signkey` varchar(100)    COMMENT \'\';');
	}
}
if (pdo_tableexists('fendou_jjle_game')) {
	if (!pdo_fieldexists('fendou_jjle_game', 'rootca')) {
		pdo_query('ALTER TABLE ' . tablename('fendou_jjle_game') . ' ADD `rootca` tinyint(1)   DEFAULT 0 COMMENT \'\';');
	}
}
if (pdo_tableexists('fendou_jjle_game')) {
	if (!pdo_fieldexists('fendou_jjle_game', 'apiclient_cert')) {
		pdo_query('ALTER TABLE ' . tablename('fendou_jjle_game') . ' ADD `apiclient_cert` tinyint(1)   DEFAULT 0 COMMENT \'\';');
	}
}
if (pdo_tableexists('fendou_jjle_game')) {
	if (!pdo_fieldexists('fendou_jjle_game', 'apiclient_key')) {
		pdo_query('ALTER TABLE ' . tablename('fendou_jjle_game') . ' ADD `apiclient_key` tinyint(1)   DEFAULT 0 COMMENT \'\';');
	}
}
if (pdo_tableexists('fendou_jjle_game')) {
	if (!pdo_fieldexists('fendou_jjle_game', 'info_1')) {
		pdo_query('ALTER TABLE ' . tablename('fendou_jjle_game') . ' ADD `info_1` varchar(250)    COMMENT \'被夹后\';');
	}
}
if (pdo_tableexists('fendou_jjle_game')) {
	if (!pdo_fieldexists('fendou_jjle_game', 'info_2')) {
		pdo_query('ALTER TABLE ' . tablename('fendou_jjle_game') . ' ADD `info_2` varchar(250)    COMMENT \'被夹后\';');
	}
}
if (pdo_tableexists('fendou_jjle_game')) {
	if (!pdo_fieldexists('fendou_jjle_game', 'info_3')) {
		pdo_query('ALTER TABLE ' . tablename('fendou_jjle_game') . ' ADD `info_3` varchar(250)    COMMENT \'被夹后\';');
	}
}
if (pdo_tableexists('fendou_jjle_game')) {
	if (!pdo_fieldexists('fendou_jjle_game', 'info_4')) {
		pdo_query('ALTER TABLE ' . tablename('fendou_jjle_game') . ' ADD `info_4` varchar(250)    COMMENT \'被夹后\';');
	}
}
if (pdo_tableexists('fendou_jjle_gift')) {
	if (!pdo_fieldexists('fendou_jjle_gift', 'id')) {
		pdo_query('ALTER TABLE ' . tablename('fendou_jjle_gift') . ' ADD `id` int(11) NOT NULL auto_increment  COMMENT \'\';');
	}
}
if (pdo_tableexists('fendou_jjle_gift')) {
	if (!pdo_fieldexists('fendou_jjle_gift', 'gid')) {
		pdo_query('ALTER TABLE ' . tablename('fendou_jjle_gift') . ' ADD `gid` int(10) unsigned NOT NULL  DEFAULT 0 COMMENT \'\';');
	}
}
if (pdo_tableexists('fendou_jjle_gift')) {
	if (!pdo_fieldexists('fendou_jjle_gift', 'weid')) {
		pdo_query('ALTER TABLE ' . tablename('fendou_jjle_gift') . ' ADD `weid` int(11) NOT NULL   COMMENT \'\';');
	}
}
if (pdo_tableexists('fendou_jjle_gift')) {
	if (!pdo_fieldexists('fendou_jjle_gift', 'thumb')) {
		pdo_query('ALTER TABLE ' . tablename('fendou_jjle_gift') . ' ADD `thumb` varchar(255)    COMMENT \'奖品图片\';');
	}
}
if (pdo_tableexists('fendou_jjle_gift')) {
	if (!pdo_fieldexists('fendou_jjle_gift', 'thumb2')) {
		pdo_query('ALTER TABLE ' . tablename('fendou_jjle_gift') . ' ADD `thumb2` varchar(255)    COMMENT \'奖品图片\';');
	}
}
if (pdo_tableexists('fendou_jjle_gift')) {
	if (!pdo_fieldexists('fendou_jjle_gift', 'sponsor')) {
		pdo_query('ALTER TABLE ' . tablename('fendou_jjle_gift') . ' ADD `sponsor` varchar(50)    COMMENT \'赞助商\';');
	}
}
if (pdo_tableexists('fendou_jjle_gift')) {
	if (!pdo_fieldexists('fendou_jjle_gift', 'title')) {
		pdo_query('ALTER TABLE ' . tablename('fendou_jjle_gift') . ' ADD `title` varchar(50) NOT NULL   COMMENT \'奖品名称\';');
	}
}
if (pdo_tableexists('fendou_jjle_gift')) {
	if (!pdo_fieldexists('fendou_jjle_gift', 'description')) {
		pdo_query('ALTER TABLE ' . tablename('fendou_jjle_gift') . ' ADD `description` varchar(100) NOT NULL   COMMENT \'描述\';');
	}
}
if (pdo_tableexists('fendou_jjle_gift')) {
	if (!pdo_fieldexists('fendou_jjle_gift', 'need')) {
		pdo_query('ALTER TABLE ' . tablename('fendou_jjle_gift') . ' ADD `need` int(5) NOT NULL   COMMENT \'数量\';');
	}
}
if (pdo_tableexists('fendou_jjle_gift')) {
	if (!pdo_fieldexists('fendou_jjle_gift', 'total')) {
		pdo_query('ALTER TABLE ' . tablename('fendou_jjle_gift') . ' ADD `total` int(5) NOT NULL   COMMENT \'数量\';');
	}
}
if (pdo_tableexists('fendou_jjle_gift')) {
	if (!pdo_fieldexists('fendou_jjle_gift', 'remain')) {
		pdo_query('ALTER TABLE ' . tablename('fendou_jjle_gift') . ' ADD `remain` int(5) NOT NULL   COMMENT \'剩余数量\';');
	}
}
if (pdo_tableexists('fendou_jjle_gift')) {
	if (!pdo_fieldexists('fendou_jjle_gift', 'probalilty')) {
		pdo_query('ALTER TABLE ' . tablename('fendou_jjle_gift') . ' ADD `probalilty` int(3) NOT NULL   COMMENT \'\';');
	}
}
if (pdo_tableexists('fendou_jjle_member')) {
	if (!pdo_fieldexists('fendou_jjle_member', 'id')) {
		pdo_query('ALTER TABLE ' . tablename('fendou_jjle_member') . ' ADD `id` int(11) NOT NULL auto_increment  COMMENT \'\';');
	}
}
if (pdo_tableexists('fendou_jjle_member')) {
	if (!pdo_fieldexists('fendou_jjle_member', 'gid')) {
		pdo_query('ALTER TABLE ' . tablename('fendou_jjle_member') . ' ADD `gid` int(11) NOT NULL   COMMENT \'主题id\';');
	}
}
if (pdo_tableexists('fendou_jjle_member')) {
	if (!pdo_fieldexists('fendou_jjle_member', 'weid')) {
		pdo_query('ALTER TABLE ' . tablename('fendou_jjle_member') . ' ADD `weid` int(11) NOT NULL   COMMENT \'\';');
	}
}
if (pdo_tableexists('fendou_jjle_member')) {
	if (!pdo_fieldexists('fendou_jjle_member', 'from_user')) {
		pdo_query('ALTER TABLE ' . tablename('fendou_jjle_member') . ' ADD `from_user` varchar(100) NOT NULL   COMMENT \'\';');
	}
}
if (pdo_tableexists('fendou_jjle_member')) {
	if (!pdo_fieldexists('fendou_jjle_member', 'openid')) {
		pdo_query('ALTER TABLE ' . tablename('fendou_jjle_member') . ' ADD `openid` varchar(100) NOT NULL   COMMENT \'\';');
	}
}
if (pdo_tableexists('fendou_jjle_member')) {
	if (!pdo_fieldexists('fendou_jjle_member', 'unionid')) {
		pdo_query('ALTER TABLE ' . tablename('fendou_jjle_member') . ' ADD `unionid` varchar(100) NOT NULL   COMMENT \'\';');
	}
}
if (pdo_tableexists('fendou_jjle_member')) {
	if (!pdo_fieldexists('fendou_jjle_member', 'num')) {
		pdo_query('ALTER TABLE ' . tablename('fendou_jjle_member') . ' ADD `num` int(11) NOT NULL  DEFAULT 0 COMMENT \'\';');
	}
}
if (pdo_tableexists('fendou_jjle_member')) {
	if (!pdo_fieldexists('fendou_jjle_member', 'mark')) {
		pdo_query('ALTER TABLE ' . tablename('fendou_jjle_member') . ' ADD `mark` int(11) NOT NULL  DEFAULT 0 COMMENT \'\';');
	}
}
if (pdo_tableexists('fendou_jjle_member')) {
	if (!pdo_fieldexists('fendou_jjle_member', 'helpid')) {
		pdo_query('ALTER TABLE ' . tablename('fendou_jjle_member') . ' ADD `helpid` int(11) NOT NULL  DEFAULT 0 COMMENT \'\';');
	}
}
if (pdo_tableexists('fendou_jjle_member')) {
	if (!pdo_fieldexists('fendou_jjle_member', 'nickname')) {
		pdo_query('ALTER TABLE ' . tablename('fendou_jjle_member') . ' ADD `nickname` varchar(100) NOT NULL   COMMENT \'\';');
	}
}
if (pdo_tableexists('fendou_jjle_member')) {
	if (!pdo_fieldexists('fendou_jjle_member', 'sex')) {
		pdo_query('ALTER TABLE ' . tablename('fendou_jjle_member') . ' ADD `sex` tinyint(1) NOT NULL  DEFAULT 0 COMMENT \'\';');
	}
}
if (pdo_tableexists('fendou_jjle_member')) {
	if (!pdo_fieldexists('fendou_jjle_member', 'headimgurl')) {
		pdo_query('ALTER TABLE ' . tablename('fendou_jjle_member') . ' ADD `headimgurl` varchar(255) NOT NULL   COMMENT \'\';');
	}
}
if (pdo_tableexists('fendou_jjle_member')) {
	if (!pdo_fieldexists('fendou_jjle_member', 'time')) {
		pdo_query('ALTER TABLE ' . tablename('fendou_jjle_member') . ' ADD `time` int(13)    COMMENT \'\';');
	}
}
if (pdo_tableexists('fendou_jjle_member')) {
	if (!pdo_fieldexists('fendou_jjle_member', 'status')) {
		pdo_query('ALTER TABLE ' . tablename('fendou_jjle_member') . ' ADD `status` tinyint(1) NOT NULL  DEFAULT 0 COMMENT \'\';');
	}
}
if (pdo_tableexists('fendou_jjle_reply')) {
	if (!pdo_fieldexists('fendou_jjle_reply', 'id')) {
		pdo_query('ALTER TABLE ' . tablename('fendou_jjle_reply') . ' ADD `id` int(10) unsigned NOT NULL auto_increment  COMMENT \'\';');
	}
}
if (pdo_tableexists('fendou_jjle_reply')) {
	if (!pdo_fieldexists('fendou_jjle_reply', 'weid')) {
		pdo_query('ALTER TABLE ' . tablename('fendou_jjle_reply') . ' ADD `weid` int(11) NOT NULL   COMMENT \'\';');
	}
}
if (pdo_tableexists('fendou_jjle_reply')) {
	if (!pdo_fieldexists('fendou_jjle_reply', 'rid')) {
		pdo_query('ALTER TABLE ' . tablename('fendou_jjle_reply') . ' ADD `rid` int(10) unsigned NOT NULL  DEFAULT 0 COMMENT \'\';');
	}
}
if (pdo_tableexists('fendou_jjle_reply')) {
	if (!pdo_fieldexists('fendou_jjle_reply', 'gid')) {
		pdo_query('ALTER TABLE ' . tablename('fendou_jjle_reply') . ' ADD `gid` int(10) unsigned NOT NULL  DEFAULT 0 COMMENT \'\';');
	}
}
if (pdo_tableexists('fendou_jjle_reply')) {
	if (!pdo_fieldexists('fendou_jjle_reply', 'status')) {
		pdo_query('ALTER TABLE ' . tablename('fendou_jjle_reply') . ' ADD `status` tinyint(1) NOT NULL  DEFAULT 0 COMMENT \'\';');
	}
}
if (pdo_tableexists('fendou_jjle_reply')) {
	if (!pdo_fieldexists('fendou_jjle_reply', 'title')) {
		pdo_query('ALTER TABLE ' . tablename('fendou_jjle_reply') . ' ADD `title` varchar(200) NOT NULL   COMMENT \'回复标题\';');
	}
}
if (pdo_tableexists('fendou_jjle_reply')) {
	if (!pdo_fieldexists('fendou_jjle_reply', 'cover')) {
		pdo_query('ALTER TABLE ' . tablename('fendou_jjle_reply') . ' ADD `cover` varchar(250) NOT NULL   COMMENT \'图文回复图片\';');
	}
}
if (pdo_tableexists('fendou_jjle_reply')) {
	if (!pdo_fieldexists('fendou_jjle_reply', 'description')) {
		pdo_query('ALTER TABLE ' . tablename('fendou_jjle_reply') . ' ADD `description` varchar(250) NOT NULL   COMMENT \'图文回复描述\';');
	}
}