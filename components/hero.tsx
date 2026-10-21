import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { campaign } from "@/lib/campaign"
import { WhatsappIcon } from "@/components/whatsapp-icon"

export const Hero = () => (
  <section id="inicio" className="relative isolate overflow-hidden bg-navy-950 text-cream-50">
    <Image src="/hero-bg.jpeg" alt="" fill priority sizes="100vw" className="-z-10 object-cover opacity-80" />
    <div className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-950 via-navy-950/50 to-transparent" />
    <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pt-12 pb-20 sm:px-6 sm:pt-20 sm:pb-28 lg:grid-cols-2">
      <div className="flex flex-col gap-7">
        <p className="leading-none font-bold tracking-tight">
          <span className="block text-sm font-semibold uppercase tracking-[0.4em] text-cream-50/70">Esquenta</span>
          <span className="mt-2 block bg-gradient-to-r from-gold-300 via-gold-400 to-gold-700 bg-clip-text text-6xl text-transparent sm:text-7xl">
            Pré-Black
          </span>
          <span className="mt-2 block text-lg font-medium tracking-[0.4em] text-cream-50/80">ANJOS</span>
        </p>
        <h1 className="text-3xl font-semibold leading-tight tracking-tight text-balance sm:text-5xl">
          Uma seleção dos nossos melhores produtos <span className="text-gold-400">para você sentir e levar.</span>
        </h1>
        <p className="max-w-lg text-base text-cream-50/80 sm:text-lg">
          Conjuntos box das melhores linhas Anjos em até {campaign.maxInstallments}x sem juros. Promoção válida
          enquanto durarem os estoques.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href="#lojas"
            data-track="cta"
            data-placement="hero"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-400 px-7 py-4 text-base font-semibold text-navy-950 transition-colors hover:bg-gold-300"
          >
            <WhatsappIcon className="size-5" />
            Falar com vendedor
          </a>
          <a
            href="#produtos"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-cream-50/30 px-7 py-4 text-base font-medium transition-colors hover:border-gold-400 hover:text-gold-400"
          >
            Ver ofertas
            <ArrowRight className="size-4" />
          </a>
        </div>
      </div>
      <div className="flex justify-center lg:justify-end">
        <div className="relative grid aspect-square w-64 place-items-center rounded-full bg-gradient-to-br from-gold-300 to-gold-500 text-navy-950 shadow-2xl shadow-gold-500/20 sm:w-80">
          <div className="absolute inset-3 rounded-full border-2 border-dashed border-navy-950/25" />
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em]">Produtos com até</p>
            <p className="text-8xl leading-none font-bold tracking-tighter sm:text-9xl">
              {campaign.maxDiscount}
              <span className="align-top text-4xl sm:text-5xl">%</span>
            </p>
            <p className="text-3xl font-bold tracking-[0.3em]">OFF</p>
          </div>
        </div>
      </div>
    </div>
  </section>
)
