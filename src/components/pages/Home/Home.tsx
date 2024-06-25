import React from "react";
import styles from "./Home.module.scss";
import clsx from "clsx";
import LogoIcon from "./kicon2.png"
import {MainFooter} from "../../MainFooter/MainFooter.tsx"

export type HomeProps = {
  className?: string;
};

export const Home: React.FC<HomeProps> = ({ className }) => {

  return (
    <div className={clsx(styles.Home, className)}>
        <div className={styles.container}>
            <div dir="rtl" className={styles.header}>
                <img className={styles.headerLogo} src={LogoIcon} alt={"لوگو"}></img>
                <div className={styles.headerText}>خوشه</div>
            </div>

            <div dir="rtl" className={styles.bannerFrame}>
                <div className={styles.banner}>بنر 1</div>
                <div className={styles.banner}>بنر 2</div>
                <div className={styles.banner}>بنر 3</div>
            </div>
            <div dir="rtl" className={styles.cardFrame}>
                <div dir="rtl" className={styles.cardFrameTitle}>
                    پیشنهادی خوشه
                </div>
                <div dir="rtl" className={styles.cardSlider}>
                    <div className={styles.card}>درس 1</div>
                    <div className={styles.card}>درس 2</div>
                    <div className={styles.card}>درس 3</div>
                </div>
            </div>
            <div dir="rtl" className={styles.cardFrame}>
                <div dir="rtl" className={styles.cardFrameTitle}>
                    سریع و کوتاه
                </div>
                <div dir="rtl" className={styles.cardSlider}>
                    <div className={styles.card}>درس 1</div>
                    <div className={styles.card}>درس 2</div>
                    <div className={styles.card}>درس 3</div>
                </div>
            </div>
            <div dir="rtl" className={styles.cardFrame}>
                <div dir="rtl" className={styles.cardFrameTitle}>
                    تاریخ
                </div>
                <div dir="rtl" className={styles.cardSlider}>
                    <div className={styles.card}>درس 1</div>
                    <div className={styles.card}>درس 2</div>
                    <div className={styles.card}>درس 3</div>
                </div>
            </div>
            <div dir="rtl" className={styles.cardFrame}>
                <div dir="rtl" className={styles.cardFrameTitle}>
                    خودیاری و توسعه فردی
                </div>
                <div dir="rtl" className={styles.cardSlider}>
                    <div className={styles.card}>درس 1</div>
                    <div className={styles.card}>درس 2</div>
                    <div className={styles.card}>درس 3</div>
                </div>
            </div>

            <div dir="rtl" className={styles.categoryBubbles}>
                <div dir="rtl" className={styles.categoryBubbleRow}>
                    <div dir="rtl" className={styles.categoryBubble}>توسعه فردی</div>
                    <div dir="rtl" className={styles.categoryBubble}>روانشناسی</div>
                    <div dir="rtl" className={styles.categoryBubble}>تاریخ</div>
                </div>
                <div dir="rtl" className={styles.categoryBubbleRow}>
                    <div dir="rtl" className={styles.categoryBubble}>زبان</div>
                    <div dir="rtl" className={styles.categoryBubble}>کسب و کار</div>
                    <div dir="rtl" className={styles.categoryBubble}>مدیریت</div>
                </div>
                <div dir="rtl" className={styles.categoryBubbleRow}>
                    <div dir="rtl" className={styles.categoryBubble}>داستان و ادبیات</div>
                    <div dir="rtl" className={styles.categoryBubble}>جامعه شناسی</div>
                    <div dir="rtl" className={styles.categoryBubble}>جستجو 🔎</div>
                </div>
            </div>

            <div dir="rtl" className={styles.suggestUs}>
                <div dir="rtl" className={styles.suggestUsTitle}>
                    ما به طور منظم محتواهای جدیدی به خوشه اضافه می‌کنیم
                </div>
                <div dir="rtl" className={styles.suggestUsSubtitle}>
                    اگه موضوع، کتاب یا مقاله‌ی خاصی هست که دوست داری به خوشه اضافه بشه،
                    این‌جا به ما پیشنهاد بده.
                </div>
                <div dir="rtl" className={styles.suggestUsCta}>پیشنهاد بده</div>
            </div>

            <MainFooter/>

        </div>
    </div>
  );
};
