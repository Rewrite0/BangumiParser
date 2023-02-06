import TitleParser from './src/parser';

const list = [
  '[爱恋字幕社&波子汽水汉化组][10月新番][我想成为影之强者][Kage no Jitsuryokusha ni Naritakute!][小剧场][14][1080p][MP4][BIG5][繁中]',
  '[桜都字幕组] 我想成为影之强者！ / Kage no Jitsuryokusha ni Naritakute! [17][1080p][繁体内嵌]',
  '[轻之国度字幕组][想要成为影之实力者！/我想成为影之强者！][15][附小剧场][GB][720P][MP4]',
  '[LoliHouse] 想要成为影之实力者 / 我想成为影之强者 / Kage no Jitsuryokusha ni Naritakute! - 16 [WebRip 1080p HEVC-10bit AAC][简繁内封字幕]',
  '[Lilith-Raws] 我想成为影之强者！ / Kage no Jitsuryokusha ni Naritakute! - 16 [Baha][WEB-DL][1080p][AVC AAC][CHT][MP4]',
  '[ANi] The Eminence in Shadow - 我想成为影之强者！ - 17 [1080P][Baha][WEB-DL][AAC AVC][CHT][MP4]',
  '[NC-Raws] 想要成为影之实力者！ / Kage no Jitsuryokusha ni Naritakute! - 17 (B-Global 3840x2160 HEVC AAC MKV)',
  '[星空字幕组][想要成为影之实力者 / Kage no Jitsuryokusha ni Naritakute!][15][繁日双语][1080P][WEBrip][MP4](急招校对、后期)',
  '[霜庭云花Sub][急招募][想要成为影之实力者！ / 阴の実力者になりたくて！ / Kage no Jitsuryokusha ni Naritakute!][11][1080P][AVC][简日内嵌][WebRip]（检索：我想成为影之强者！）',
  '[波洛咖啡厅PCSUB][想要成为影之实力者Kage no Jitsuryokusha ni Naritakute][05][简日CHS_JP][1080P][MP4_AAC][网盘][急招后期]',
  '[NaN-Raws]我想成为影之强者！[2][Bahamut][WEB-DL][1080P][AVC_AAC][CHT][MP4][bangumi.online]',
  '[极彩字幕组] 想要成为影之实力者 / Kage no Jitsuryokusha ni Naritakute! [01][1080P][x265][简繁内封]',
  '[猎户手抄部] 智酱是女生！/ 小智是女孩啦！Tomo-chan wa Onnanoko! [02] [1080p] [简中内嵌] [2023年1月番]',
  '【幻樱字幕组】【1月新番】【智酱是女生 Tomo-chan wa Onnanko!】【01】【GB_MP4】【1280X720】',
  '[Lilith-Raws] 吸血鬼马上死 / Kyuuketsuki Sugu Shinu S02 - 04 [Baha][WEB-DL][1080p][AVC AAC][CHT][MP4] [463.2MB]',
  '[NC-Raws] 吸血鬼马上死 第二季 / Kyuuketsuki Sugu Shinu 2 - 04 (CR 1920x1080 AVC AAC MKV) [1.3GB]',
  '[猎户不鸽压制] 吸血鬼马上死 第二季 Kyuuketsuki Sugu Shinu S2 [01] [1080p] [简中内嵌] [2023年1月番] [394.8 MB]',
  '[天月搬运组] 给不灭的你 第二季 / Fumetsu no Anata e 2nd Season - 14 [1080P][简繁日外挂] [153.2MB]',
  '【幻樱字幕组】【10月新番】【致不灭的你第二季 Fumetsu no Anata e Season 2】【13】【GB_MP4】【1280X720】 [193.8MB]',
  '[诸神字幕组][致不灭的你 第二季][To Your Eternity S2][12][简繁日语字幕][1080P][MKV HEVC] [670.2 MB]',
  '【悠哈璃羽字幕社】[虚构推理_Kyokou Suiri S02][03][x264 1080p][CHT] [201.7MB]',
  '[桜都字幕组] 入间同学入魔了！第3季 / Mairimashita! Iruma-kun 3rd Season [15][1080p][简繁内封] [418.6 MB]',
  '[NC-Raws] 我的英雄学院 第六季 / Boku no Hero Academia S6 - 17 (B-Global 1920x1080 HEVC AAC MKV)',
  '[Amor字幕组&云歌字幕组][魔王学院的不适任者～史上最强的魔王始祖，转生就读子孙们的学校～ 第2季][04][CHS_JP][1080P][HDrip][MP4][急招翻译校对时轴特效] [982.9MB]',
];

list.map((item) => {
  const info = TitleParser.parser(item);
  console.log('info', info);
});
