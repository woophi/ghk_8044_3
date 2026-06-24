import { BottomSheet } from '@alfalab/core-components/bottom-sheet/cssm';
import { Button } from '@alfalab/core-components/button/cssm';
import { Checkbox } from '@alfalab/core-components/checkbox/cssm';
import { Gap } from '@alfalab/core-components/gap/cssm';
import { PureCell } from '@alfalab/core-components/pure-cell/cssm';
import { Typography } from '@alfalab/core-components/typography/cssm';
import { ExclamationCircleMIcon } from '@alfalab/icons-glyph/ExclamationCircleMIcon';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import detailsImg from './assets/details.png';
import firstPlaceImg from './assets/place1.svg';

import hbImg from './assets/hb.png';
import lockImg from './assets/lock.svg';
import radarImg from './assets/radar.svg';
import { achievementSlides, avaSlides, boardSlides, bundles, figSlides, listItems, phoneSlides } from './data';
import { LS, LSKeys } from './ls';
import { appSt } from './style.css';

const LINK =
  'alfabank://sdui_screen?endpoint=v1%2Fgrowthhack-widget-experiment%2Fwidgets%2F0c1eaaaa-f56e-4e81-8f3a-1043f0025e0f&presentationTypeWeb=PRESENT&title=%D0%A8%D0%B0%D1%85%D0%BC%D0%B0%D1%82%D1%8B&screenName=loyalty_1_final';

export const App = () => {
  const [loading, setLoading] = useState(false);
  const [openBs, setOpenBs] = useState(false);
  const [bundlesState, setBundlesState] = useState<string[]>(['Альфа-Шахматы']);

  const bundlesSum = bundlesState.reduce((sum, title) => {
    const bundle = bundles.find(b => b.title === title);
    return sum + (bundle ? (typeof bundle.price === 'number' ? bundle.price : 0) : 0);
  }, 0);

  useEffect(() => {
    if (!LS.getItem(LSKeys.UserId, null)) {
      LS.setItem(LSKeys.UserId, Date.now());
    }
  }, []);

  const submit = () => {
    setLoading(true);

    window.location.replace(LINK);
  };

  return (
    <>
      <div className={appSt.container}>
        <div className={appSt.boxHero}>
          <div>
            <Typography.TitleResponsive style={{ marginTop: '1rem' }} tag="h1" view="medium" weight="bold">
              Альфа-Шахматы
            </Typography.TitleResponsive>
            <Typography.Text view="primary-small" color="secondary">
              с призовым фондом
            </Typography.Text>
          </div>
          <img
            src={hbImg}
            alt="HB"
            width="100%"
            height={260}
            style={{ objectFit: 'cover', transform: 'scale(1.1)', margin: '-1rem 0 1rem' }}
          />
          <Typography.Text view="primary-small" color="secondary">
            Участвуйте в онлайн турнире с оффлайн финалом в Москве
          </Typography.Text>
        </div>

        <div style={{ marginLeft: '20px' }}>
          <Swiper slidesPerView="auto" spaceBetween={8} slidesOffsetAfter={20}>
            {phoneSlides.map((slide, index) => (
              <SwiperSlide style={{ width: 'fit-content' }} key={index}>
                <div className={appSt.slidePhone}>
                  <img src={slide.img} alt={`Phone Slide ${index + 1}`} width={200} />
                  <div>
                    <Typography.TitleResponsive tag="h3" view="medium" weight="bold">
                      {slide.title}
                    </Typography.TitleResponsive>
                    <Typography.Text view="primary-small" color="secondary">
                      {slide.text}
                    </Typography.Text>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className={appSt.boxBP}>
          <Typography.TitleResponsive tag="h3" view="medium" weight="bold">
            Сезонный пропуск
          </Typography.TitleResponsive>

          <div>
            <div className={appSt.row}>
              <Typography.Text view="primary-large" weight="medium">
                Рамки аватаров
              </Typography.Text>

              <div className={appSt.tag}>
                <Typography.Text view="primary-small" color="secondary">
                  0 из 20
                </Typography.Text>
              </div>
            </div>
            <Typography.Text view="primary-small" color="secondary">
              Уникальная рамка за каждый уровень мастерства
            </Typography.Text>
          </div>

          <div>
            <Swiper slidesPerView="auto" spaceBetween={8}>
              {avaSlides.map((slide, index) => (
                <SwiperSlide style={{ width: 'fit-content' }} key={index}>
                  <div className={appSt.slideAva}>
                    <Typography.TitleResponsive tag="h3" view="small" weight="bold">
                      {slide.title}
                    </Typography.TitleResponsive>
                    <div style={{ height: '80px', margin: `${index > 6 ? '-20px' : '0'} auto 0` }}>
                      <img src={slide.img} alt={`Avatar Slide ${index + 1}`} width={80} />
                    </div>
                    <div className={appSt.row} style={{ marginTop: 'auto' }}>
                      <Typography.Text view="primary-small" color="secondary">
                        Уровень {index + 1}
                      </Typography.Text>
                      <img src={lockImg} alt="Lock" width={28} height={28} />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div>
            <div className={appSt.row}>
              <Typography.Text view="primary-large" weight="medium">
                Наборы досок
              </Typography.Text>

              <div className={appSt.tag}>
                <Typography.Text view="primary-small" color="secondary">
                  0 из 5
                </Typography.Text>
              </div>
            </div>
            <Typography.Text view="primary-small" color="secondary">
              5 разных настроений игры
            </Typography.Text>
          </div>

          <div>
            <Swiper slidesPerView="auto" spaceBetween={8}>
              {boardSlides.map((slide, index) => (
                <SwiperSlide style={{ width: 'fit-content' }} key={index}>
                  <img src={slide.img} alt={`Board Slide ${index + 1}`} width={100} height={100} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div>
            <div className={appSt.row}>
              <Typography.Text view="primary-large" weight="medium">
                Наборы фигур
              </Typography.Text>

              <div className={appSt.tag}>
                <Typography.Text view="primary-small" color="secondary">
                  0 из 6
                </Typography.Text>
              </div>
            </div>
            <Typography.Text view="primary-small" color="secondary">
              Армия со своим характером
            </Typography.Text>
          </div>

          <div>
            <Swiper slidesPerView="auto" spaceBetween={8}>
              {figSlides.map((slide, index) => (
                <SwiperSlide style={{ width: 'fit-content' }} key={index}>
                  <img src={slide.img} alt={`Figure Slide ${index + 1}`} width={100} height={100} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div className={appSt.boxBP}>
          <Typography.TitleResponsive tag="h3" view="medium" weight="bold">
            Система прогрессии
          </Typography.TitleResponsive>

          <div>
            <div className={appSt.row}>
              <Typography.Text view="primary-large" weight="medium">
                Радар навыков
              </Typography.Text>

              <div className={appSt.tag}>
                <Typography.Text view="primary-small" color="secondary">
                  Юниор
                </Typography.Text>
              </div>
            </div>
            <Typography.Text view="primary-small" color="secondary">
              Отслеживайте изменения собственных игровых привычек
            </Typography.Text>
          </div>

          <img src={radarImg} alt="Radar" width="100%" height={226} style={{ objectFit: 'contain' }} />

          <PureCell className={appSt.bannerCell}>
            <PureCell.Content>
              <PureCell.Main>
                <Typography.Text view="primary-small" color="secondary">
                  Рейтинг обновляется каждые 5 игр
                </Typography.Text>
              </PureCell.Main>
            </PureCell.Content>
            <PureCell.Graphics verticalAlign="center">
              <ExclamationCircleMIcon color="#898991" />
            </PureCell.Graphics>
          </PureCell>

          <div style={{ marginTop: '1rem' }}>
            <div className={appSt.row}>
              <Typography.Text view="primary-large" weight="medium">
                ИИ-Ассистент
              </Typography.Text>

              <div className={appSt.tag}>
                <Typography.Text view="primary-small" color="secondary">
                  Бот
                </Typography.Text>
              </div>
            </div>
            <Typography.Text view="primary-small" color="secondary">
              Автоподсказки в игре и технический анализ партий
            </Typography.Text>
          </div>

          <img src={detailsImg} alt="Details" width="100%" height={271} style={{ objectFit: 'contain' }} />

          <div style={{ marginTop: '1rem' }}>
            <div className={appSt.row}>
              <Typography.Text view="primary-large" weight="medium">
                Обучение
              </Typography.Text>

              <div className={appSt.tag}>
                <Typography.Text view="primary-small" color="secondary">
                  0 из 318
                </Typography.Text>
              </div>
            </div>
            <Typography.Text view="primary-small" color="secondary">
              Развивайте свои слабые стороны, укрепляйте сильные
            </Typography.Text>
          </div>

          <div>
            <Swiper slidesPerView="auto" spaceBetween={8}>
              {achievementSlides.map((slide, index) => (
                <SwiperSlide style={{ width: 'fit-content' }} key={index}>
                  <div className={appSt.slideAch}>
                    <div>
                      <Typography.TitleResponsive tag="h3" view="small" weight="bold">
                        {slide.title}
                      </Typography.TitleResponsive>
                      <Typography.Text view="primary-small" color="secondary">
                        {slide.subtitle}
                      </Typography.Text>
                    </div>
                    <img
                      style={{
                        position: 'absolute',
                        right: 0,
                        bottom: 0,
                      }}
                      src={slide.img}
                      alt={`Achievement Slide ${index + 1}`}
                      width={160}
                      height={160}
                    />
                    <div className={appSt.row} style={{ marginTop: 'auto', position: 'relative', zIndex: 1 }}>
                      <Typography.Text view="primary-small" color="secondary">
                        {slide.count}
                      </Typography.Text>
                      <img src={lockImg} alt="Lock" width={28} height={28} />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div className={appSt.boxAccess}>
          <div className={appSt.row}>
            <Typography.TitleResponsive tag="h3" view="medium" weight="bold">
              Турнирный допуск
            </Typography.TitleResponsive>

            <div className={appSt.tag}>
              <Typography.Text view="primary-small" color="secondary">
                16+
              </Typography.Text>
            </div>
          </div>

          <PureCell className={appSt.bannerCell}>
            <PureCell.Content>
              <PureCell.Main>
                <Typography.Text view="primary-small" color="secondary">
                  Примите участи в турнире с призовым фондом в 10 000 000 ₽
                </Typography.Text>
              </PureCell.Main>
            </PureCell.Content>
            <PureCell.Graphics verticalAlign="center">
              <ExclamationCircleMIcon color="#898991" />
            </PureCell.Graphics>
          </PureCell>

          <div className={appSt.list}>
            <PureCell className={appSt.listCell}>
              <PureCell.Graphics verticalAlign="center">
                <img src={firstPlaceImg} alt="First Place" width={44} height={44} style={{ transform: 'scale(1.5)' }} />
              </PureCell.Graphics>
              <PureCell.Content>
                <PureCell.Main>
                  <div className={appSt.row}>
                    <Typography.Text view="primary-medium" weight="medium">
                      Атомный огурец
                    </Typography.Text>
                    <Typography.Text view="primary-small" color="secondary">
                      104 победы
                    </Typography.Text>
                  </div>
                  <Typography.Text view="primary-small" color="secondary">
                    Оффлайн-полуфиналист
                  </Typography.Text>
                </PureCell.Main>
              </PureCell.Content>
            </PureCell>
            {listItems.map((item, index) => (
              <PureCell className={appSt.listCellSecondary} key={index}>
                <PureCell.Graphics verticalAlign="center">
                  <img src={item.img} alt={item.title} width={44} height={44} />
                </PureCell.Graphics>
                <PureCell.Content>
                  <PureCell.Main>
                    <div className={appSt.row}>
                      <Typography.Text view="primary-medium" weight="medium">
                        {item.title}
                      </Typography.Text>
                      <Typography.Text view="primary-small" color="secondary">
                        {item.wins}
                      </Typography.Text>
                    </div>
                    <Typography.Text view="primary-small" color="secondary">
                      {item.subtitle}
                    </Typography.Text>
                  </PureCell.Main>
                </PureCell.Content>
              </PureCell>
            ))}
          </div>
          <Gap size={96} />
        </div>
      </div>

      <div className={appSt.bottomBtn}>
        <Button block view="primary" onClick={() => setOpenBs(true)} style={{ borderRadius: '2rem' }}>
          Играть бесплатно
        </Button>
      </div>

      <BottomSheet
        open={openBs}
        onClose={() => {
          setOpenBs(false);
        }}
        hasCloser
        title="Выберите пакет"
        titleAlign="left"
        stickyHeader
        actionButton={
          <Button loading={loading} block view="primary" onClick={submit} style={{ borderRadius: '2rem' }}>
            Играть {bundlesSum === 0 ? 'бесплатно' : `за ${bundlesSum} ₽`}
          </Button>
        }
      >
        <div className={appSt.container} style={{ padding: 0 }}>
          {bundles.map((bundle, index) => (
            <PureCell
              className={appSt.listCell}
              key={index}
              onClick={() =>
                setBundlesState(prev =>
                  bundlesState.includes(bundle.title)
                    ? prev.filter(title => title !== bundle.title)
                    : [...prev, bundle.title],
                )
              }
            >
              <PureCell.Graphics verticalAlign="center">
                <img src={bundle.img} alt={bundle.title} width={44} height={44} />
              </PureCell.Graphics>
              <PureCell.Content>
                <PureCell.Main>
                  <Typography.Text view="primary-medium" weight="medium">
                    {bundle.title}
                  </Typography.Text>
                  <Typography.Text view="primary-small" color="secondary">
                    {typeof bundle.price === 'number' ? `${bundle.price} ₽` : bundle.price}
                  </Typography.Text>
                </PureCell.Main>
              </PureCell.Content>

              <PureCell.Graphics verticalAlign="center">
                <Checkbox size={24} checked={bundlesState.includes(bundle.title)} />
              </PureCell.Graphics>
            </PureCell>
          ))}
        </div>
      </BottomSheet>
    </>
  );
};
