import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: '完全开源',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        完全开源的软硬件设计，基于MIT许可证
      </>
    ),
  },
  {
    title: 'DIY',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        我们提供了详细的DIY教程，所有器件都是精挑细选的
      </>
    ),
  },
  {
    title: '高效率',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        在树莓派5 4-wire SPI@62.5Mbps 接口下有平均 40fps 的刷新率
      </>
    ),
  },
  {
    title: '驱动安装方便',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        您可以简单地通过 curl 获取并执行我们提供的脚本完成驱动安装
      </>
    ),
  },
  {
    title: 'DRM驱动开发',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        使用此拓展板初步了解内核DRM驱动开发
      </>
    ),
  },
  {
    title: '广泛的兼容性',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        随着项目的开发，更多的屏幕及触摸型号将被支持
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
