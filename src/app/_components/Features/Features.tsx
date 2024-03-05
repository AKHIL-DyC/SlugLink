import FeatureCard from "~/ui/featureCard";
import LinkSvg from "~/utils/LinkSvg";
import QrSvg from "~/utils/QrSvg";

const cardContent = [
  {
    title: "URL Shortener",
    description: "Manage your links with ease. SlugLink allows you to create, update, and delete links.",
    icon: <LinkSvg className="fill-amber-500 h-10 w-10" />,
    href: "/create",
    type: "Link",
    arrayFeatures: [
      "URL shortening with ease",
      "Customize your links",
      "Track your links",
      "Organize your links"
    ]
  },
  {
    title: "QR Codes",
    description: "Create and manage QR codes. SlugLink allows you to create, update, and delete QR codes.",
    icon: <QrSvg className="fill-lime-400 h-10 w-10" />,
    href: "/qrcode",
    type: "QR Code",
    arrayFeatures: [
      "Create QR Codes with ease",
      "Customizable QR Codes with ease",
      "Track your QR Codes",
      "Organize your QR Codes"
    ]
  }
]

export default function Feature () {
  return (
    <section className="grid grid-cols-2 gap-6 mt-8">
      {cardContent.map((card, i) => {
        return <FeatureCard key={i} title={card.title} description={card.description} icon={card.icon} href={card.href} type={card.type} arrayFeatures={card.arrayFeatures}/>
      })}
    </section>
  )
}