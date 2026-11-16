import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";

gsap.registerPlugin(ScrollTrigger, Flip);

export default function HeroSection() {
  const wrapRef = useRef(null);
  const galleryRef = useRef(null);

  useEffect(() => {
    let flipCtx = gsap.context(() => {});

    const createTween = () => {
      flipCtx.revert(); // Bersihkan tween sebelumnya (terutama saat ukuran layar berubah/resize)

      flipCtx.add(() => {
        const galleryElement = galleryRef.current;
        const galleryItems = gsap.utils.toArray(
          ".gallery__item",
          galleryElement,
        );

        // 1. Pastikan class final dihapus lebih dulu agar state awal benar-benar Bento Grid
        galleryElement.classList.remove("gallery--final");

        // 2. Tambahkan class final HANYA UNTUK MENGAMBIL STATE (posisi akhir)
        galleryElement.classList.add("gallery--final");
        const flipState = Flip.getState(galleryItems);

        // 3. KEMBALIKAN KE BENTO lagi. Ini rahasianya! Container akan kembali ke ukuran 100vh yang rapi
        galleryElement.classList.remove("gallery--final");

        // 4. Buat animasi Flip.to yang akan mengubah dari Bento menuju state akhir tadi
        const flip = Flip.to(flipState, {
          simple: true,
          ease: "expoScale(1, 5)", // Ease khusus ini membuat zoom ke tengah terasa sangat premium
        });

        // 5. Buat timeline dan masukkan animasi Flip tadi
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: galleryElement, // Trigger pas bagian tengah bento menyentuh tengah layar
            start: "center center",
            end: "+=150%", // Panjang scroll
            scrub: true,
            pin: wrapRef.current, // Pin wrapper-nya (bukan gallery-nya)
          },
        });
        tl.add(flip);

        return () => gsap.set(galleryItems, { clearProps: "all" });
      });
    };

    createTween();

    // Responsif: Kalkulasi ulang posisi saat layar di-resize (seperti pada contoh JS GSAP)
    window.addEventListener("resize", createTween);
    return () => {
      window.removeEventListener("resize", createTween);
      flipCtx.revert();
    };
  }, []);

  return (
    <div className="w-full bg-white dark:bg-dark transition-colors duration-500">
      {/* BENTO GALLERY */}
      <section ref={wrapRef} className="gallery-wrap relative bg-white dark:bg-dark">
        <div ref={galleryRef} className="gallery gallery--bento" id="gallery-8">
          <div className="gallery__item">
            <img
              src="https://awsimages.detik.net.id/community/media/visual/2019/03/08/96d60356-f54f-4b9d-a5af-4cbc8c24f3c7_43.jpeg?w=1200"
              alt="Kegiatan"
            />
          </div>
          <div className="gallery__item">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/1/11/Leopard_%28Panthera_pardus%29_%2852731299932%29.jpg?utm_source=id.wikipedia.org&utm_campaign=index&utm_content=original"
              alt="Kegiatan"
            />
          </div>

          {/* ITEM KE-3: INI YANG AKAN MEMBESAR MENUJU LAYAR PENUH (FOKUS TENGAH) */}
          <div className="gallery__item relative overflow-hidden flex justify-center items-center">
            <img
              src="https://lahatpos.disway.id/upload/85d2561f4b7b83c2c946483420a681a4.png"
              alt="Fokus Utama"
              className="opacity- object-cover w-full h-full"
            />
            <div className="absolute inset-0 flex items-center justify-center"></div>
          </div>

          <div className="gallery__item">
            <img src="./landingPage/2.jpg" alt="Kegiatan" />
          </div>
          <div className="gallery__item">
            <img
              src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/a4/d3/41/the-most-of-i-like.jpg?w=1200&h=-1&s=1"
              alt="Kegiatan"
            />
          </div>
          <div className="gallery__item">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/1/11/Leopard_%28Panthera_pardus%29_%2852731299932%29.jpg?utm_source=id.wikipedia.org&utm_campaign=index&utm_content=original"
              alt="Kegiatan"
            />
          </div>
          <div className="gallery__item">
            <img
              src="https://b581640.assetcdn.net/581640/wp-content/uploads/2025/06/image-1.jpeg?lossy=1&strip=1&webp=1"
              alt="Kegiatan"
            />
          </div>
          <div className="gallery__item">
            <img
              src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=500"
              alt="Kegiatan"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
