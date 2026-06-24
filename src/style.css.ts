import { style } from '@vanilla-extract/css';

const bottomBtn = style({
  position: 'fixed',
  zIndex: 2,
  width: '100%',
  padding: '12px 20px',
  bottom: 0,
});

const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
});

const boxHero = style({
  display: 'flex',
  padding: '1rem 20px 20px',
  flexDirection: 'column',
  gap: '1rem',
  borderRadius: '0 0 2rem 2rem',
  backgroundColor: '#FFFFFF',
  textAlign: 'center',
  overflow: 'hidden',
});

const row = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const slidePhone = style({
  width: '280px',
  borderRadius: '2rem',
  backgroundColor: '#E6E7E9',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1rem',
  padding: '0 1rem 1rem',
});

const boxBP = style({
  display: 'flex',
  padding: '20px',
  flexDirection: 'column',
  gap: '1rem',
  borderRadius: '2rem',
  backgroundColor: '#FFFFFF',
});

const tag = style({
  borderRadius: '9999px',
  padding: '2px 8px',
  backgroundColor: '#F2F3F5',
});

const slideAva = style({
  width: '160px',
  height: '210px',
  borderRadius: '24px',
  backgroundColor: '#F2F3F5',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  padding: '1rem',
});

const bannerCell = style({
  border: '1px solid #F2F3F5',
  borderRadius: '24px',
  padding: '1rem',
  textAlign: 'left',
});

const slideAch = style({
  width: '160px',
  height: '210px',
  borderRadius: '24px',
  backgroundColor: '#F2F3F5',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  padding: '1rem',
  position: 'relative',
  overflow: 'hidden',
});

const boxAccess = style({
  display: 'flex',
  padding: '20px',
  flexDirection: 'column',
  gap: '1rem',
  borderRadius: '2rem 2rem 0 0',
  backgroundColor: '#FFFFFF',
});

const list = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
});

const listCell = style({
  borderRadius: '24px',
  backgroundColor: '#F2F3F5',
  padding: '8px 1rem 8px 8px',
});

const listCellSecondary = style({
  borderRadius: '24px',
  padding: '8px 1rem 8px 8px',
  border: '1px dashed #E6E7E9',
});

export const appSt = {
  bottomBtn,
  container,
  boxHero,
  row,
  slidePhone,
  boxBP,
  tag,
  slideAva,
  bannerCell,
  slideAch,
  boxAccess,
  list,
  listCell,
  listCellSecondary,
};
