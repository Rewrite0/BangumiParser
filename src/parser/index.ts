import nzh from 'nzh';

/** 该集信息 */
export interface BangumiInfo {
  /** 字幕组 */
  group: string | null;
  /** 番名 */
  name: string | null;
  /** 季度 */
  season: number;
  /** 集数 */
  episode: number | null;
  /** 分辨率 */
  dpi: string | null;
  /** 字幕 */
  subtitle: string | null;
}

export class TitleParser {
  private preTitle: string;
  private titleArray: Array<string>;
  private bangumiInfo: BangumiInfo;

  constructor() {
    this.preTitle = '';
    this.titleArray = [];
    this.bangumiInfo = {
      group: null,
      name: null,
      season: 1,
      episode: null,
      dpi: null,
      subtitle: null,
    };
  }

  /** 解析标题 */
  parser(title: string) {
    this.preProcess(title)
      .getGroupName()
      .getSeason()
      .getEpisode()
      .getDPI()
      .getSubTitle()
      .getName();

    return this.bangumiInfo;
  }

  /** 标题预处理, 替换特殊字符 */
  private preProcess(rawTitle: string) {
    this.preTitle = rawTitle
      .replace(/[【(（<]/g, '[')
      .replace(/[】)）>]/g, ']')
      .replace(/\//g, '-')
      .replace(/\d{1,2}月新番/, '')
      .replace(/(\d{0,}\.)?\dGB/, '')
      .replace(/(\[\])/g, '')
      .replace(/★/g, '')
      .replace('招募翻译', '');

    return this;
  }

  /** 字幕组名 */
  private getGroupName() {
    this.titleArray = this.preTitle.split(/[\[\]]/).filter((e) => e !== '' && e !== ' ');
    this.bangumiInfo.group = this.titleArray[0];

    this.preTitle = this.preTitle
      .replace(new RegExp(this.bangumiInfo.group), '')
      .replace('[]', '')
      .trim();

    return this;
  }

  /** 季度 */
  private getSeason() {
    const titleReg = /[第].[季期]|[sS]\d{1,2}|[sS]eason \d{1,2}/g;
    const res = this.preTitle.match(titleReg);

    const zh2num = nzh.cn.decodeS;

    if (res === null) {
      this.bangumiInfo.season = 1;
    } else {
      const preSeason = res[0]
        .replace(/[第季期]/g, '')
        .replace(/[sS]/g, '')
        .replace(/[eaon]\s/g, '');

      if (isNaN(Number(preSeason))) {
        // 汉字数字
        this.bangumiInfo.season = Number(zh2num(preSeason));
      } else {
        // 数字
        this.bangumiInfo.season = Number(preSeason);
      }
    }

    this.preTitle = this.preTitle
      .replace(/[第].[季期]/, '')
      .replace(/[sS]\d{1,2}/, '')
      .replace(/\d[st|nd|rd|th].*[sS]eason/g, '');

    return this;
  }

  /** 集数 */
  private getEpisode() {
    const res = this.preTitle
      .split(/[\[\]\-第集话]/)
      .filter((e) => e !== '' && e !== ' ');

    const filterNumber = (arr: string[]) => {
      const res = arr.filter((e) => !isNaN(Number(e)));

      if (res.length !== 0) {
        return Number(res[0]);
      } else {
        return null;
      }
    };

    if (filterNumber(res)) {
      this.bangumiInfo.episode = filterNumber(res);
    } else {
      const res = this.preTitle.split(' ');
      this.bangumiInfo.episode = filterNumber(res);
    }

    this.preTitle = this.preTitle
      .replace(/[第]\d{1,}集/, ' ')
      .replace(new RegExp(`[0]{0,1}${this.bangumiInfo.episode}`), '')
      .replace('[]', '')
      .trim();

    return this;
  }

  private getDPI() {
    const dpi = this.preTitle.match(/(\d{3,}[xX*])\d{3,}|\d{3,}[pP]{1}|4k/)?.[0] ?? null;

    if (dpi !== null) {
      this.preTitle = this.preTitle.replace(`${dpi}`, '').replace('[]', '');
    }

    this.bangumiInfo.dpi = dpi;

    return this;
  }

  private getSubTitle() {
    const reg =
      /CHT|CHS|GB|BIG5|[简繁日中粤]{1,}[体]?(.*字幕|外挂|内嵌|内封|双语|雙語|语)?/;
    const list = this.preTitle
      .split(/[\[\]]/)
      .map((e) => e.match(reg)?.[0])
      .filter((e) => e);

    const maxLength = Math.max(...list.map((e) => e.length));
    const subtitle = list.filter((e) => e.length === maxLength)?.[0] ?? null;

    if (subtitle !== null) {
      this.preTitle = this.preTitle
        .replace(`${subtitle}`, '')
        .replace(reg, '')
        .replace('[]', '');
    }

    this.bangumiInfo.subtitle = subtitle;

    return this;
  }

  private getName() {
    this.preTitle = this.preTitle.replace(/\]\s?\-/, ']').replace(/\-\s{1,}\[/, '[');

    const matchName = this.preTitle.match(/[\u4e00-\u9fa5，,]{2,}/);

    this.bangumiInfo.name = matchName?.[0]?.trim() ?? null;

    if (matchName === null) {
      const en = this.preTitle.match(/[a-zA-Z0-9{0,}(\s-\s)?]{2,}/);

      this.bangumiInfo.name = en?.[0]?.trim() ?? null;
    }

    return this;
  }
}
