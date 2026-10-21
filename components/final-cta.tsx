import { WhatsappIcon } from "@/components/whatsapp-icon"

export const FinalCta = () => (
  <section className="bg-cream-100 py-16 sm:py-20">
    <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 text-center sm:px-6">
      <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
        As ofertas de Pré-Black valem enquanto durarem os estoques.
      </h2>
      <p className="max-w-xl text-navy-700">
        Garanta o seu conjunto box antes que acabe. Fale agora com um vendedor da loja mais perto de você.
      </p>
      <a
        href="#lojas"
        data-track="cta"
        data-placement="final"
        className="inline-flex items-center gap-2 rounded-full bg-navy-950 px-8 py-4 text-base font-semibold text-cream-50 transition-colors hover:bg-navy-800"
      >
        <WhatsappIcon className="size-5" />
        Garantir minha oferta
      </a>
    </div>
  </section>
)
