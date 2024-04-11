'use client'
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
                <img src="https://res.cloudinary.com/dzxrc9b6o/image/upload/v1712802830/Next/Celulares-nacionales-slider-desktop_mxcldv.jpg" style={{ width: "100%" }} />
            </div>

            <div className={`${styles.mySlides} ${styles.fade}`}>
                <img src="https://res.cloudinary.com/dzxrc9b6o/image/upload/v1712802830/Next/Tiendas-slider-desktop_frwlne.jpg" style={{ width: "100%" }} />
            </div>

            <div className={`${styles.mySlides} ${styles.fade}`}>
                <img src="https://res.cloudinary.com/dzxrc9b6o/image/upload/v1712802830/Next/Macro-slider-desktopo_u2jqbd.jpg" style={{ width: "100%" }} />
            </div>

            {/* Next and previous buttons */}
            <a className={styles.prev} onClick={() => plusSlides(-1)}>&#10094;</a>
            <a className={styles.next} onClick={() => plusSlides(1)}>&#10095;</a>
        </div>
    );
}