"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroSplitKpi from '@/components/sections/hero/HeroSplitKpi';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCatalogItem from '@/components/ecommerce/productCatalog/ProductCatalogItem';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import { Award } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="directional-hover"
        defaultTextAnimation="background-highlight"
        borderRadius="pill"
        contentWidth="small"
        sizing="largeSmall"
        background="none"
        cardStyle="soft-shadow"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="glass"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "The Crew",
          id: "crew",
        },
        {
          name: "Join Us",
          id: "contact",
        },
      ]}
      brandName="LNAV Boys"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitKpi
      background={{
        variant: "gradient-bars",
      }}
      title="The LNAV Boys Gausdal"
      description="Excellence in every detail. A curated crew of professionals dedicated to the highest standards of industry performance and camaraderie."
      kpis={[
        {
          value: "100%",
          label: "Performance",
        },
        {
          value: "24/7",
          label: "Dedication",
        },
        {
          value: "1st",
          label: "Standard",
        },
      ]}
      enableKpiAnimation={true}
      imageSrc="http://img.b2bpic.net/free-photo/water-texture_23-2148121772.jpg"
      mediaAnimation="slide-up"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/close-up-portrait-attractive-male-model-color-flash-light_158595-5111.jpg",
          alt: "Magnus",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-beautiful-young-business-woman_158595-4756.jpg",
          alt: "Ole",
        },
        {
          src: "http://img.b2bpic.net/free-photo/closeup-portrait-handsome-confident-stylish-hipster-lambersexual-model-sexy-modern-man-dressed-elegant-black-suit-fashion-male-posing-studio-dark-background-spectacles_158538-21665.jpg",
          alt: "Kristoffer",
        },
        {
          src: "http://img.b2bpic.net/free-photo/interested-handsome-black-man-looking-ecstatic-young-male-model-hat-sitting-stairs_197531-22072.jpg",
          alt: "Torben",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-stylish-blond-bearded-male-dressed-suit-grey-background_613910-1267.jpg",
          alt: "Eirik",
        },
      ]}
      avatarText="Join our elite crew of 50+ experts"
      marqueeItems={[
        {
          type: "text",
          text: "Elite Performance",
        },
        {
          type: "text",
          text: "Uncompromising Quality",
        },
        {
          type: "text",
          text: "Luxury Standard",
        },
        {
          type: "text",
          text: "Global Reach",
        },
        {
          type: "text",
          text: "Innovation Driven",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TestimonialAboutCard
      useInvertedBackground={false}
      tag="Our Philosophy"
      title="Beyond the Ordinary"
      description="We are not just a group of individuals; we are a movement built on trust, luxury, and unrelenting excellence. Gausdal is where we redefine professionalism."
      subdescription="Every project is a commitment. Every member is a master of their craft."
      icon={Award}
      imageSrc="http://img.b2bpic.net/free-photo/portrait-happy-businesswoman-office_23-2148452705.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="crew" data-section="crew">
      <TeamCardOne
      animationType="depth-3d"
      textboxLayout="split"
      gridVariant="asymmetric-60-wide-40-narrow"
      useInvertedBackground={true}
      members={[
        {
          id: "1",
          name: "Magnus",
          role: "Founder & Visionary",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-attractive-male-model-color-flash-light_158595-5111.jpg",
        },
        {
          id: "2",
          name: "Ole",
          role: "Operational Lead",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-beautiful-young-business-woman_158595-4756.jpg",
        },
        {
          id: "3",
          name: "Kristoffer",
          role: "Design Strategist",
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-portrait-handsome-confident-stylish-hipster-lambersexual-model-sexy-modern-man-dressed-elegant-black-suit-fashion-male-posing-studio-dark-background-spectacles_158538-21665.jpg",
        },
        {
          id: "4",
          name: "Torben",
          role: "Execution Specialist",
          imageSrc: "http://img.b2bpic.net/free-photo/interested-handsome-black-man-looking-ecstatic-young-male-model-hat-sitting-stairs_197531-22072.jpg",
        },
        {
          id: "5",
          name: "Eirik",
          role: "Creative Lead",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-stylish-blond-bearded-male-dressed-suit-grey-background_613910-1267.jpg",
        },
        {
          id: "6",
          name: "Sindre",
          role: "Technical Director",
          imageSrc: "http://img.b2bpic.net/free-photo/handsome-groom-classy-black-suit-stands-dark-room_8353-7083.jpg",
        },
      ]}
      title="Meet the Boys"
      description="The foundation of our success. Driven, bold, and unapologetically professional."
    />
  </div>

  <div id="ecommerce" data-section="ecommerce">
      <ProductCatalogItem />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "sparkles-gradient",
      }}
      text="Think you have what it takes? Submit your application and wait for the inevitable rejection letter. Or maybe, just maybe, surprise us."
      buttons={[
        {
          text: "Apply Now",
          href: "#",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="http://img.b2bpic.net/free-vector/professional-business-card-template_23-2147967328.jpg"
      columns={[
        {
          title: "Company",
          items: [
            {
              label: "About Us",
              href: "#",
            },
            {
              label: "Careers",
              href: "#",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "Contact",
              href: "#",
            },
            {
              label: "Privacy",
              href: "#",
            },
          ],
        },
      ]}
      copyrightText="© 2025 LNAV Boys Gausdal"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
