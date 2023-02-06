import { it, expect } from 'vitest';
import TitleParser from '../src/parser';

const result = (
  name: string,
  group: string,
  season: number,
  episode: number,
  dpi: string | null,
  subtitle: string | null
) => {
  return {
    name,
    group,
    season,
    episode,
    dpi,
    subtitle,
  };
};

const list = [
  {
    title: '【悠哈璃羽字幕社】[虚构推理_Kyokou Suiri S02][03][x264 1080p][CHT] [201.7MB]',
    ...result('虚构推理', '悠哈璃羽字幕社', 2, 3, '1080p', 'CHT'),
  },
  {
    title:
      '[漫貓字幕社][1月新番][虛構推理 第二季][Kyokou Suiri Season 2][04][1080P][MP4][繁日雙語]',
    ...result('虛構推理', '漫貓字幕社', 2, 4, '1080P', '繁日雙語'),
  },
  {
    title:
      '[桜都字幕组] 我想成为影之强者！ / Kage no Jitsuryokusha ni Naritakute! [17][1080p][繁体内嵌]',
    ...result('我想成为影之强者', '桜都字幕组', 1, 17, '1080p', '繁体内嵌'),
  },
  {
    title:
      '[LoliHouse] 想要成为影之实力者 / 我想成为影之强者 / Kage no Jitsuryokusha ni Naritakute! - 16 [WebRip 1080p HEVC-10bit AAC][简繁内封字幕]',
    ...result('想要成为影之实力者', 'LoliHouse', 1, 16, '1080p', '简繁内封字幕'),
  },
  {
    title:
      '[波洛咖啡厅PCSUB][想要成为影之实力者Kage no Jitsuryokusha ni Naritakute][05][简日CHS_JP][1080P][MP4_AAC][网盘][急招后期]',
    ...result('想要成为影之实力者', '波洛咖啡厅PCSUB', 1, 5, '1080P', '简日'),
  },
  {
    title:
      '[NaN-Raws]我想成为影之强者！[2][Bahamut][WEB-DL][1080P][AVC_AAC][CHT][MP4][bangumi.online]',
    ...result('我想成为影之强者', 'NaN-Raws', 1, 2, '1080P', 'CHT'),
  },
  {
    title:
      '[Lilith-Raws] 吸血鬼马上死 / Kyuuketsuki Sugu Shinu S02 - 04 [Baha][WEB-DL][1080p][AVC AAC][CHT][MP4] [463.2MB]',
    ...result('吸血鬼马上死', 'Lilith-Raws', 2, 4, '1080p', 'CHT'),
  },
  {
    title:
      '[NC-Raws] 吸血鬼马上死 第二季 / Kyuuketsuki Sugu Shinu 2 - 04 (CR 1920x1080 AVC AAC MKV) [1.3GB]',
    ...result('吸血鬼马上死', 'NC-Raws', 2, 4, '1920x1080', null),
  },
  {
    title:
      '[猎户不鸽压制] 吸血鬼马上死 第二季 Kyuuketsuki Sugu Shinu S2 [01] [1080p] [简中内嵌] [2023年1月番] [394.8 MB]',
    ...result('吸血鬼马上死', '猎户不鸽压制', 2, 1, '1080p', '简中内嵌'),
  },
  {
    title:
      '【幻樱字幕组】【10月新番】【致不灭的你第二季 Fumetsu no Anata e Season 2】【13】【GB_MP4】【1280X720】 [193.8MB]',
    ...result('致不灭的你', '幻樱字幕组', 2, 13, '1280X720', 'GB'),
  },
  {
    title:
      '[桜都字幕组] 入间同学入魔了！第3季 / Mairimashita! Iruma-kun 3rd Season [15][1080p][简繁内封] [418.6 MB]',
    ...result('入间同学入魔了', '桜都字幕组', 3, 15, '1080p', '简繁内封'),
  },
  {
    title:
      '[NC-Raws] 我的英雄学院 第六季 / Boku no Hero Academia S6 - 17 (B-Global 1920x1080 HEVC AAC MKV)',
    ...result('我的英雄学院', 'NC-Raws', 6, 17, '1920x1080', null),
  },
  {
    title:
      '[星空字幕组][魔王学院的不适任者 二期 / 魔王学院的不适合者 二期 / Maou Gakuin no Futekigousha S2][04][繁日双语][1080P][WEBrip][MP4]（急招校对、后期） [706.06 MB]',
    ...result('魔王学院的不适任者', '星空字幕组', 2, 4, '1080P', '繁日双语'),
  },
  {
    title:
      '[Amor字幕组&云歌字幕组][魔王学院的不适任者～史上最强的魔王始祖，转生就读子孙们的学校～ 第2季][04][CHS_JP][1080P][HDrip][MP4][急招翻译校对时轴特效] [982.9MB]',
    ...result('魔王学院的不适任者', 'Amor字幕组&云歌字幕组', 2, 4, '1080P', 'CHS'),
  },
];

it('group parser', () => {
  list.map(({ title, group }) => {
    expect(TitleParser.parser(title).group).toBe(group);
  });
});

it('season parser', () => {
  list.map(({ title, season }) => {
    expect(TitleParser.parser(title).season).toBe(season);
  });
});

it('episode parser', () => {
  list.map(({ title, episode }) => {
    expect(TitleParser.parser(title).episode).toBe(episode);
  });
});

it('dpi parser', () => {
  list.map(({ title, dpi }) => {
    expect(TitleParser.parser(title).dpi).toBe(dpi);
  });
});

it('subtitle parser', () => {
  list.map(({ title, subtitle }) => {
    expect(TitleParser.parser(title).subtitle).toBe(subtitle);
  });
});

it('name parser', () => {
  list.map(({ title, name }) => {
    expect(TitleParser.parser(title).name).toBe(name);
  });
});
