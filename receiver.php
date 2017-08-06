<?php

// 锦尚中国·微信魔方

defined('IN_IA') or die('Access Denied');
class fendou_jjleModuleReceiver extends WeModuleReceiver
{
	public function receive()
	{
		$type = $this->message['type'];
	}
}