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
        { name: "Home", id: "hero" },
        { name: "The Crew", id: "crew" },
        { name: "Join Us", id: "contact" },
      ]}
      brandName="LNAV Boys"
      button={{ text: "Get Started", href: "#contact" }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitKpi
      background={{ variant: "gradient-bars" }}
      title="The LNAV Boys Gausdal"
      description="Helt strålende gruppe med hovedfokus på hvor mange mg per pose. Kjenner du deg igjen? Bli med nå! "
      kpis={[
        { value: "100%", label: "Performance" },
        { value: "24/7", label: "Dedication" },
        { value: "1st", label: "Standard" },
      ]}
      enableKpiAnimation={true}
      imageSrc="http://img.b2bpic.net/free-photo/water-texture_23-2148121772.jpg?_wi=1"
      mediaAnimation="slide-up"
      avatars={[
        { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BjXAnoworSdu1tQ699nIwLVcAX/uploaded-1775003942373-96z36x51.png", alt: "Magnus" },
        { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BjXAnoworSdu1tQ699nIwLVcAX/uploaded-1775003952420-p6utmii4.png", alt: "Ole" },
        { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BjXAnoworSdu1tQ699nIwLVcAX/uploaded-1775003961065-cq079mia.png", alt: "Kristoffer" },
        { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BjXAnoworSdu1tQ699nIwLVcAX/uploaded-1775003969615-mpdayxid.png", alt: "Torben" },
        { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BjXAnoworSdu1tQ699nIwLVcAX/uploaded-1775003977864-ch3khz3r.png", alt: "Eirik" },
      ]}
      avatarText="Join our elite crew of 5 experts"
      marqueeItems={[
        { type: "text", text: "Elite Performance" },
        { type: "text", text: "Uncompromising Quality" },
        { type: "text", text: "Luxury Standard" },
        { type: "text", text: "Global Reach" },
        { type: "text", text: "Innovation Driven" },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TestimonialAboutCard
      useInvertedBackground={false}
      tag="Våres Filosofi "
      title="Beyond the Ordinary"
      description="Vi er ikke bare en gruppe individer; vi er en bevegelse bygget på tillit, luksus og ubøyelig fortreffelighet. Gausdal er stedet hvor vi omdefinerer profesjonalitet. "
      subdescription="Hvert prosjekt er et engasjement. Hvert medlem er en mester i sitt fag. "
      icon={Award}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BjXAnoworSdu1tQ699nIwLVcAX/uploaded-1775004141920-m1gqz97m.png"
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
        { id: "1", name: "Theodor ", role: " G3 vitenskaper", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BjXAnoworSdu1tQ699nIwLVcAX/uploaded-1775004209225-sokffy0v.png" },
        { id: "2", name: "Lars ", role: "Autistisk mental leder ", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BjXAnoworSdu1tQ699nIwLVcAX/uploaded-1775004251885-n5tac8ee.png" },
        { id: "3", name: "", role: "ATV-ragger ", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BjXAnoworSdu1tQ699nIwLVcAX/uploaded-1775004290895-stv45x6u.png" },
        { id: "4", name: "Varg ", role: "Dritt 125 motorsykkel ", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BjXAnoworSdu1tQ699nIwLVcAX/uploaded-1775004368607-nkvraz7x.png" },
        { id: "5", name: "Johannes ", role: "Sterk, søt og alt. ", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BjXAnoworSdu1tQ699nIwLVcAX/uploaded-1775004398962-rf19l1px.png" },
        { id: "6", name: "Minecraft ", role: "Adolf Hitler ", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BjXAnoworSdu1tQ699nIwLVcAX/uploaded-1775004468516-jdq66kdx.png" },
      ]}
      title="Meet the Boys"
      description="Grunnlaget for vår suksess. 
Drevet, dristig og ubeskjedent profesjonell. "
    />
  </div>

  <div id="ecommerce" data-section="ecommerce">
      <ProductCatalogItem product={{ id: "1", name: "Exclusive LNAV Signert Schni", price: "$929", imageSrc: "http://img.b2bpic.net/free-photo/water-texture_23-2148121772.jpg?_wi=2", rating: 5, category: "Apparel" }} />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{ variant: "sparkles-gradient" }}
      text="Tror du at du har det som trengs? Send inn søknaden din og vent på det uunngåelige avslagsbrevet. Eller kanskje, bare kanskje, overrask oss. "
      buttons={[
        { text: "Søk Nå! ", href: "#" },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="http://img.b2bpic.net/free-vector/professional-business-card-template_23-2147967328.jpg"
      columns={[
        { title: "Company", items: [{ label: "About Us", href: "#" }, { label: "Careers", href: "#" }] },
        { title: "Support", items: [{ label: "Contact", href: "#" }, { label: "Privacy", href: "#" }] },
      ]}
      copyrightText="© 2025 LNAV Boys Gausdal"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
