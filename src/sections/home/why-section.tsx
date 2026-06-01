import { LandingContent, LandingSection } from "@/src/lib/landing-page";

const whyItems = [
  {
    firstLine: "Markanızı dijitale taşıyor, modern ve güven",
    secondLine: "veren web deneyimleri kuruyoruz.",
  },
  {
    firstLine: "Sıfırdan, elle hazırlanmış, modern teknolojilerle",
    secondLine: "kurulmuş ve büyümeye açık yapılar sunuyoruz.",
  },
  {
    firstLine: "Hız, mobil uyum ve temiz kod odağıyla",
    secondLine: "uzun ömürlü web siteleri hazırlıyoruz.",
  },
] as const;

export default function WhySection() {
  return (
    <LandingSection className={styles.section} sectionBg="#5d79b3">
      <LandingContent
        title="Neden KolaySiten?"
        className={styles.content}
        contentClassName={styles.listWrap}
        titleClassName={styles.title}
      >
        <div className={styles.contentGrid}>
          <ul className={styles.list} aria-label="KolaySiten avantajları">
            {whyItems.map((item) => (
              <li key={item.firstLine} className={styles.item}>
                <span className={styles.bullet} aria-hidden="true">
                  <span className={styles.bulletDot} />
                </span>
                <p className={styles.itemText}>
                  <span className={styles.itemLine}>{item.firstLine}</span>
                  <span className={styles.itemLine}>{item.secondLine}</span>
                </p>
              </li>
            ))}
          </ul>
          <div className={styles.emptyPanel} aria-hidden="true" />
        </div>
      </LandingContent>
    </LandingSection>
  );
}

const styles = {
  section: "px-2 py-24 text-white min-[380px]:px-5 min-[380px]:py-28 sm:px-8 md:px-16 md:py-20 xl:py-32",
  content: "gap-6 min-[380px]:gap-7",
  title:
    "text-2xl font-semibold leading-[1.04] text-white min-[380px]:text-3xl sm:text-4xl md:text-5xl",
  listWrap: "max-w-full xl:w-full",
  contentGrid: "w-full xl:grid xl:grid-cols-2 xl:gap-12",
  list: "flex w-full flex-col gap-2.5 min-[380px]:gap-3 xl:gap-4",
  emptyPanel: "hidden xl:block",
  item:
    "flex items-start gap-2 rounded-lg border border-white/20 bg-white/10 px-2 py-3 shadow-[0_16px_34px_rgba(16,32,64,0.12)] backdrop-blur-sm min-[380px]:gap-3 min-[380px]:px-4 min-[380px]:py-4 xl:px-5 xl:py-5",
  bullet:
    "mt-1.5 flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full bg-white/20 min-[380px]:h-5 min-[380px]:w-5",
  bulletDot: "h-1.5 w-1.5 rounded-full bg-white min-[380px]:h-2 min-[380px]:w-2",
  itemText:
    "min-w-0 text-[10px] leading-5 text-white/90 min-[360px]:text-[11px] min-[380px]:text-[13px] min-[430px]:text-[15px] min-[430px]:leading-7 sm:text-base sm:leading-7 md:text-lg md:leading-8",
  itemLine: "block whitespace-nowrap",
} as const;
