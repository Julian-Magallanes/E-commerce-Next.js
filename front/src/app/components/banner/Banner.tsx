'use client'
import Image from 'next/image';
import styles from './Banner.module.css';
import { useEffect } from 'react';

export default function Banner() {
    let slideIndex: number = 1;

    useEffect(() => {
        showSlides(slideIndex);
    }, []);

    // Next/previous controls
    function plusSlides(n: number): void {
        showSlides(slideIndex += n);
    }

    // Thumbnail image controls
    function currentSlide(n: number): void {
        showSlides(slideIndex = n);
    }

    function showSlides(n: number): void {
        if (typeof document !== 'undefined') {
            let i: number;
            let slides: HTMLCollectionOf<Element> = document.getElementsByClassName(styles.mySlides);
            
            if (n > slides.length) { slideIndex = 1; }
            if (n < 1) { slideIndex = slides.length; }
            for (i = 0; i < slides.length; i++) {
                (slides[i] as HTMLElement).style.display = "none";
            }
            
            (slides[slideIndex - 1] as HTMLElement).style.display = "block";
            
        }
    }

    return (
        <div className={styles.slideshowContainer}>
            {/* Full-width images with number and caption text */}
            <div className={`${styles.mySlides} ${styles.fade}`}>
                <Image src="https://res.cloudinary.com/dzxrc9b6o/image/upload/v1713049165/Next/Celulares-nacionales-slider-desktop_ylgodu.webp" alt='slideimg1' width={1400} height={400} loading="lazy"/>
            </div>

            <div className={`${styles.mySlides} ${styles.fade}`}>
                <Image src="https://res.cloudinary.com/dzxrc9b6o/image/upload/v1713049236/Next/Macro-slider-desktopo_t1jca0.webp"alt='slideimg2' width={1400} height={400} loading="lazy"/>
            </div>

            <div className={`${styles.mySlides} ${styles.fade}`}>
                <Image src="https://res.cloudinary.com/dzxrc9b6o/image/upload/v1713049352/Next/Tiendas-slider-desktop_hctzfb.webp"alt='slideimg3' width={1400} height={400} loading="lazy"/>
            </div>

            {/* Next and previous buttons */}
            <a className={styles.prev} onClick={() => plusSlides(-1)}>&#10094;</a>
            <a className={styles.next} onClick={() => plusSlides(1)}>&#10095;</a>
        </div>
    );
}
/*<Image        fill        src="/example.png"        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"      />*/