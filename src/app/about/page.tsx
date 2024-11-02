import Image from "next/image";
import Link from "next/link";

import ProfilePic from "../../images/profile-pic.webp";

import PhoneIcon from "@/components/icons/PhoneIcon";
import WhatsappIcon from "@/components/icons/WhatsappIcon";
import {InstagramIcon} from "@/components/icons/InstagramIcon";
import GithubIcon from "@/components/icons/GithubIcon";
import LocationIcon from "@/components/icons/LocationIcon";
const page = () => {
  return (
    <section className="flex min-h-screen w-full flex-col items-center justify-center space-x-6 rounded-xl bg-primary p-6 text-white md:flex-row md:px-20">
      <div className="flex w-full items-center justify-center">
        <Image
          alt="Marlon Chaviano Photo"
          className="w-full max-w-[400px] rounded-xl border border-4 border-white shadow-2xl transition-transform duration-300 md:hover:-translate-y-10 md:hover:scale-[1.2]"
          height={350}
          src={ProfilePic}
          width={350}
        />
      </div>
      <div className="w-1/2 xs:w-full">
        <div className="mt-6 flex items-center space-x-2">
          <h1 className="text-3xl font-bold">Marlon Chaviano</h1>
          <a
            download
            className="rounded-xl border bg-primary p-2 font-semibold text-white transition duration-200 hover:bg-white hover:text-primary"
            href="/Marlon Chaviano.pdf"
            rel="noopener noreferrer"
          >
            Descargar CV
          </a>
        </div>
        <p className="mt-4 text-xs md:text-sm lg:text-lg xl:text-2xl">
          Soy un desarrollador web apasionado por la maquetación y el diseño de interfaces. Me
          destaco en la creación de sitios web atractivos y funcionales gracias a mi dominio de
          herramientas modernas como Next.js y Tailwind CSS. Siempre estoy al tanto de las últimas
          tendencias en desarrollo, lo que me permite ofrecer soluciones innovadoras y eficientes.
        </p>
        <p className="mt-4 text-xs md:text-sm lg:text-lg xl:text-2xl">
          Me entusiasma trabajar en equipo y estoy siempre dispuesto a aprender, lo que me convierte
          en un colaborador valioso en cualquier proyecto. No solo me enfoco en la técnica; también
          me preocupo por la experiencia del usuario, asegurándome de que cada página sea intuitiva
          y agradable. Sin duda, mi dedicación y creatividad son un gran aporte en el mundo del
          desarrollo web.
        </p>
        <div className="mt-10 flex items-center space-x-3">
          <a
            className="flex w-fit space-x-2 border-r p-2 shadow-2xl transition-all duration-300 hover:border-b-0 hover:text-active"
            href="tel:+5354897630"
            rel="noopener noreferrer"
          >
            <span>Llamar</span>
            <span>
              <PhoneIcon />
            </span>
          </a>
          <a href="https://wa.me/54897630" rel="noopener noreferrer" target="_blank">
            <WhatsappIcon />
          </a>
          <a
            href="https://www.instagram.com/marlon.developer/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <InstagramIcon />
          </a>
          <a href="https://github.com/Marlon-Chaviano" rel="noopener noreferrer" target="_blank">
            <GithubIcon />
          </a>

          <div className="flex items-center space-x-1 italic">
            <span>
              <LocationIcon />
            </span>
            <span>Villa Clara - Cuba</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
