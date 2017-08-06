<?php

// 锦尚中国·微信魔方

defined('IN_IA') or die('Access Denied');
class fendou_jjleModule extends WeModule
{
	public function fieldsFormDisplay($rid = 0)
	{
		global $_W, $_GPC;
		$reply = pdo_fetch("SELECT * FROM " . tablename('fendou_jjle_reply') . " WHERE rid = :rid", array(':rid' => $rid));
		load()->func('tpl');
		$list = pdo_fetchall("SELECT id,title FROM " . tablename('fendou_jjle_game') . " WHERE weid = :weid order by id desc", array(':weid' => $_W['uniacid']));
		include $this->template('form');
	}
	public function fieldsFormValidate($rid = 0)
	{
		return '';
	}
	public function fieldsFormSubmit($rid)
	{
		global $_W, $_GPC;
		$id = intval($_GPC['reply_id']);
		if (!intval($_GPC['gid'])) {
			message("游戏编号不能为空");
		}
		$insert = array('rid' => $rid, 'gid' => $_GPC['gid'], 'weid' => $_W['uniacid'], 'cover' => $_GPC['cover'], 'title' => $_GPC['title'], 'description' => $_GPC['description']);
		if (empty($id)) {
			$insert['status'] = 1;
			pdo_insert('fendou_jjle_reply', $insert);
		} else {
			pdo_update('fendou_jjle_reply', $insert, array('id' => $id));
		}
	}
	public function ruleDeleted($rid)
	{
		load()->func('file');
		pdo_delete('fendou_jjle_reply', array('id' => $rid));
		return true;
	}
	public function settingsDisplay($settings)
	{
		global $_GPC, $_W;
		if (checksubmit()) {
			$cfg = array('key_wordtime' => intval($_GPC['key_wordtime']));
			if ($this->saveSettings($cfg)) {
				message('保存成功', 'refresh');
			}
		}
		load()->func('tpl');
		include $this->template('setting');
	}
}