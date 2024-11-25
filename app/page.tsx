'use client'
import Ads from "@/components/Ads";
import Event from "@/components/Event";
import SocialGallery from "@/components/SocialGallery";
import "./globals.css";
export default function Home() {
  return (
    <section className="overflow-hidden">
      <Ads />
      <Event />
      <SocialGallery />
    </section>
  );
}
