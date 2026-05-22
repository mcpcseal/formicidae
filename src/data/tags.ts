import type { Tag } from '../types';

export const TAGS: Record<string, Tag> = {
  building:    { id: 'building',    label: '건축',     color: '#86efac', bgColor: '#14532d' },
  exploration: { id: 'exploration', label: '탐험',     color: '#93c5fd', bgColor: '#1e3a5f' },
  combat:      { id: 'combat',      label: '전투',     color: '#fca5a5', bgColor: '#7f1d1d' },
  base:        { id: 'base',        label: '기지',     color: '#fcd34d', bgColor: '#78350f' },
  farming:     { id: 'farming',     label: '농업',     color: '#bef264', bgColor: '#365314' },
  pvp:         { id: 'pvp',         label: 'PvP',      color: '#f0abfc', bgColor: '#4a044e' },
  event:       { id: 'event',       label: '이벤트',   color: '#fdba74', bgColor: '#7c2d12' },
  daily:       { id: 'daily',       label: '일상',     color: '#cbd5e1', bgColor: '#1e293b' },
  redstone:    { id: 'redstone',    label: '레드스톤', color: '#fca5a5', bgColor: '#450a0a' },
  underground: { id: 'underground', label: '지하',     color: '#d6d3d1', bgColor: '#292524' },
  nether:      { id: 'nether',      label: '네더',     color: '#fb923c', bgColor: '#431407' },
  end:         { id: 'end',         label: '엔드',     color: '#c4b5fd', bgColor: '#2e1065' },
};

export const TAG_LIST: Tag[] = Object.values(TAGS);
