import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Сервер не працює',
    imgSrc: require('@site/static/img/fishing.png').default,
    description: (
      <>
        Роботу сервера було зупинено та відкладено на невідомий термін у зв'язку з відсутністю гравців. Деталі про плани на запуск сервера можна знайти в <a href="https://discord.gg/TYs8FjvzFf" target='_blank'>нашій спільноті</a>.
      </>
    ),
  },
];

function Feature({imgSrc, title, description}) {
  return (
    <div className={clsx('col col--4')} style={{margin: 'auto'}}>
      <div className="text--center">
        <img src={imgSrc} className={styles.featureImg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}