// components/Sponsorship.tsx
import Image from 'next/image'

interface Sponsor {
  name: string
  logoSrc: string
  website: string
  altText?: string
}

const sponsors: Sponsor[] = [
  {
    name: 'Sponsor One',
    logoSrc: 'https://res.cloudinary.com/dgtdkqfsx/image/upload/v1751311903/IMG-20250630-WA0002_sak5ct.jpg',
    website: 'https://cvmi2025.nitrkl.ac.in/#sponsorship',
    altText: 'Sponsor One Logo',
  },
  {
    name: 'Sponsor Two',
    logoSrc: 'https://res.cloudinary.com/dgtdkqfsx/image/upload/v1751311903/IMG-20250630-WA0004_h32omt.jpg',
    website: 'https://cvmi2025.nitrkl.ac.in/#sponsorship',
    altText: 'Sponsor Two Logo',
  },
  {
    name: 'Sponsor Three',
    logoSrc: 'https://res.cloudinary.com/dgtdkqfsx/image/upload/v1751311903/IMG-20250630-WA0005_yzwgjx.jpg',
    website: 'https://cvmi2025.nitrkl.ac.in/#sponsorship',
    altText: 'Sponsor Three Logo',
  },
  {
    name: 'Sponsor Four',
    logoSrc: 'https://res.cloudinary.com/dgtdkqfsx/image/upload/v1751311903/IMG-20250630-WA0001_ddfwks.jpg',
    website: 'https://cvmi2025.nitrkl.ac.in/#sponsorship',
    altText: 'Sponsor Four Logo',
  },
  {
    name: 'Sponsor Five',
    logoSrc: 'https://res.cloudinary.com/dgtdkqfsx/image/upload/v1751311903/IMG-20250630-WA0003_k249ha.jpg',
    website: 'https://cvmi2025.nitrkl.ac.in/#sponsorship',
    altText: 'Sponsor Five Logo',
  },
]

const Sponsorship: React.FC = () => (
  <section id="sponsorship" className="text-white p-6 sm:p-10 md:px-16">
    <div className="w-full">
      <h1 className="md:text-5xl text-3xl font-bold underline text-[#CC5F00] mb-8 sm:mb-6 text-left relative">
      Our Sponsors
            </h1>
      <div className="grid grid-cols-3 gap-6 items-center justify-items-center max-w-5xl mx-auto">
        {sponsors.map((sponsor) => (
          <a
            key={sponsor.name}
            href={sponsor.website}
            target="_blank"
            rel="noopener noreferrer"
            className="
              block rounded-lg 
              transform transition 
              duration-300 ease-in-out 
              hover:scale-105 hover:rotate-1 hover:shadow-lg hover:opacity-90
            "
          >
            <Image
              src={sponsor.logoSrc}
              alt={sponsor.altText ?? sponsor.name}
              width={160}
              height={80}
              className="object-contain mx-auto"
            />
          </a>

        ))}
      </div>
    </div>
  </section>
)

export default Sponsorship
