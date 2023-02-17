import { describe, it, expect } from 'vitest';
import { TitleParser } from '../src/parser';
import { list } from './testList';

describe.each(list)(
  'TitleParser test: $title',
  ({ title, name, group, season, episode, dpi, subtitle }) => {
    const info = new TitleParser().parser(title);

    it('name parser', () => {
      expect(info.name).toBe(name);
    });

    it('group parser', () => {
      expect(info.group).toBe(group);
    });

    it('season parser', () => {
      expect(info.season).toBe(season);
    });

    it('episode parser', () => {
      expect(info.episode).toBe(episode);
    });

    it('dpi parser', () => {
      expect(info.dpi).toBe(dpi);
    });

    it('subtitle parser', () => {
      expect(info.subtitle).toBe(subtitle);
    });
  }
);
