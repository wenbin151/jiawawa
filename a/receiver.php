<?php

// �����й���΢��ħ��

defined('IN_IA') or die('Access Denied');
class fendou_jjleModuleReceiver extends WeModuleReceiver
{
	public function receive()
	{
		$type = $this->message['type'];
	}
}