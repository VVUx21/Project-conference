import Image from 'next/image'

interface Sponsor {
  name: string
  logoSrc: string
  website: string
  altText?: string
}

const sponsors: Sponsor[] = [
  {
    name: 'Sponsor Three',
    logoSrc: 'https://res.cloudinary.com/dgtdkqfsx/image/upload/v1751311903/IMG-20250630-WA0005_yzwgjx.jpg',
    website: '/#sponsorship',
    altText: 'Sponsor Three Logo',
  },
  {
    name: 'Sponsor One',
    logoSrc: 'https://res.cloudinary.com/dgtdkqfsx/image/upload/v1751872914/WhatsApp_Image_2025-07-02_at_09.58.50_e152538e_ikibco.jpg',
    website: '/#sponsorship',
    altText: 'Sponsor One Logo',
  },
  {
    name: 'Sponsor Two',
    logoSrc: 'https://res.cloudinary.com/dgtdkqfsx/image/upload/v1751311903/IMG-20250630-WA0004_h32omt.jpg',
    website: '/#sponsorship',
    altText: 'Sponsor Two Logo',
  },
  {
    name: 'Sponsor Four',
    logoSrc: 'https://res.cloudinary.com/dgtdkqfsx/image/upload/v1751311903/IMG-20250630-WA0001_ddfwks.jpg',
    website: '/#sponsorship',
    altText: 'Sponsor Four Logo',
  },
  {
    name: 'Sponsor Five',
    logoSrc: 'https://res.cloudinary.com/dgtdkqfsx/image/upload/v1751311903/IMG-20250630-WA0003_k249ha.jpg',
    website: '/#sponsorship',
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
            rounded-xl p-8
            bg-gradient-to-br from-orange-50 to-orange-100
            border border-orange-200/50
            shadow-md hover:shadow-xl
            transform transition-all 
            duration-300 ease-in-out 
            hover:scale-105 hover:-translate-y-1
            hover:bg-gradient-to-br hover:from-orange-100 hover:to-orange-150
            group relative overflow-hidden
            min-h-[140px] w-full
            flex items-center justify-center
          "
        >
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-orange-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <Image
            src={sponsor.logoSrc}
            alt={sponsor.altText ?? sponsor.name}
            width={160}
            height={80}
            className="object-contain mx-auto relative z-10 filter group-hover:brightness-110 transition-all duration-300"
          />
        </a>
      ))}
    </div>
    </div>
  </section>
)

export default Sponsorship
