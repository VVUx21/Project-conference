"use client";
import Image from "next/image";
import logo from "./ContactAssets/NITR logo.png";
import cvmilogo from "./ContactAssets/cvmi_logo 1.png";
import Link from "next/link";

import { Mail, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export default function Contact() {
  // Scroll to specific section
  const handleClick = (e, href) => {
    e.preventDefault();
    if (href) {
      const targetElement = document.getElementById(href);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };
  return (
    <div id="contactus" className="bg-white">
      {/* Contact Header */}
      <div className="py-10 mx-16 my-2.5">
        <h2 className="text-5xl font-bold text-[#CC5F00]">
          Contact Us
        </h2>
        <div className="w-56 h-1 bg-[#CC5F00] mx-6 mt-2"></div>
        <p className="mt-4 text-lg">
          For inquiries, please email us at{" "}
          <span className="font-bold text-black">
            <a href="mailto:cvmi2025@nitrkl.ac.in" className="hover:underline">
              cvmi2025@nitrkl.ac.in
            </a>
          </span>
          .
        </p>
      </div>

      {/* Footer Section */}
      <footer className="bg-[#0F0F0F] text-white py-10 rounded-t-3xl">
        <div className="container mx-auto flex flex-col md:flex-row justify-between my-5 px-6 ">
          {/* Conference Details */}
          <div>
            <h3 className="text-lg font-semibold">
              International Conference on Computer Vision & Machine Intelligence CVMI-2025
            </h3>
            
            {/* Social Icons */}
            <ul className="flex space-x-4 mt-4">
            {[
              {
                icon: Twitter,
                name: "Twitter",
                url: "#",
              },
              {
                icon: Instagram,
                name: "Instagram",
                url: "#",
              },
              {
                icon: Facebook,
                name: "Facebook",
                url: "#",
              },
              {
                icon: Linkedin ,
                name: "Linkedin",
                url: "#",
              },
            ].map((social) => (
              <li key={social.name}>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center group"
                >
                  <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                    <social.icon className="w-4 h-4 text-white"  />
                  </div>
                
                </a>
              </li>
            ))}
          </ul>
          
            <div className="w-64 h-0.5 bg-gray-700 mx-1 mt-2"></div>
            <div className="max-w-md my-4">
            <p className="mt-4 text-sm text-gray-400">
              The 4th International Conference on Computer Vision & Machine
              Intelligence (CVMI-2025) is being organized by the Electronics &
              Communication Engineering Department at NIT Rourkela from October 12–13, 2025.
            </p>
            </div>
          </div>

          {/* Navigation Menu */}
          <div className="text-sm space-y-2">
            <ul className="space-y-1">
            {[
              {
                name: "Home",
                href: "home",
              },
              {
                name: "About Us",
                href: "aboutus",
              },
              {
                name: "Schedule & Agenda",
                href: "",
              },
              {
                name:"CVMI-2025 Attractions",
                href: "",
              },
              {
                name:"Topics of CVMI-2025",
                href: "topics",
              },
              {
                name:"Paper Submission",
                href: "",
              },
              {
                name:"CVMI-2025 Organizing Committee",
                href: "ourteam",
              },
              {
                name: "Contact Us",
                href: "contactus",
              },
            ].map((key) => (
              <li key={key.name}>
                <Link
                  href={`#${key.href}`}
                  onClick={(e) => handleClick(e, key.href)}
                  className="flex items-center group hover:underline cursor-pointer"
                >
                  {key.name}
                </Link>
              </li>
            ))}
          </ul>
          </div>
          
          {/* Contact Information */}
          <div className="text-sm">
            <h3 className="text-lg font-semibold">CONTACT US</h3>
            <p className="mt-2 flex items-center space-x-2">
              <Mail className="w-5 h-5 text-gray-400" />
              <span>cvmi2025@nitrkl.ac.in</span>
            </p>
          </div>
        </div>
        <div className="w-[98%] h-0.5 bg-gray-700 mx-4 mt-2"></div>

        {/* Footer Bottom */}
        <div className="flex flex-col justify-between items-center">
          <div className="flex justify-between items-end w-full">
            <div className="text-gray-500 text-md mt-6 mx-5">
              @CVMI-2025
            </div>
            <div className="flex items-center gap-12 mt-3 mx-5">
              <Image
                src={cvmilogo}
                alt="cvmiLogo"
                width={125}
                height={20}
              />
              <Image
                src={logo}
                alt="NITR Logo"
                width={50}
                height={50}
              />
            </div>
          </div>
        </div>
        <div className="text-[#CC5F00] text-md text-center mt-4">
            Designed and developed with <span className="text-[#CC5F00]">❤️</span> by Team Webwiz
          </div>
      </footer>
    </div>
  );
}
