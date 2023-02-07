# bangumi title parser

> 用于解析中文字幕组发布的番剧文件名中的字幕组名, 番剧名, 季度, 集数, 视频分辨率, 字幕类型

## 安装

```
  npm i bangumi-title-parser
```

## 使用

> 具体可解析标题可查看
> [测试文件](https://github.com/Rewrite0/bangumiParser/blob/main/tests/titleParser.test.ts#L24)
> 中所罗列的标题

```
  import { TitleParser } from 'bangumi-title-parser'

  const info = new TitleParser().parser(/* 待解析标题 */)
```
