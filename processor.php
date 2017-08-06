<?php

// 锦尚中国·微信魔方

defined('IN_IA') or die('Access Denied');
class fendou_jjleModuleProcessor extends WeModuleProcessor
{
	public function respond()
	{
		$reply = pdo_fetch("SELECT * FROM " . tablename('fendou_jjle_reply') . " WHERE rid = :rid", array(':rid' => $this->rule));
		if (!empty($reply)) {
			$rid = $this->rule;
			$response[] = array('title' => $reply['title'], 'description' => $reply['description'], 'picurl' => $_W['attachurl'] . $reply['cover'], 'url' => $this->createMobileUrl('index', array('id' => $reply['gid'])));
			return $this->respNews($response);
		}
	}
}