import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import image2 from "@/assets/image2.png";
import image from "@/assets/image.png";



const occasions = [
  { icon: "❤️", title: "Anniversary Love Letters" },
  { icon: "🌹", title: "Valentine's Day Surprises" },
  { icon: "💌", title: "Long-Distance Messages" },
  { icon: "🙏", title: "Apology & Reconnection Letters" },
  { icon: "💍", title: "Proposal & Commitment Moments" },
];

const Occasions = () => {
  return (
    <>
      <section id="occasions" className="py-24 px-6 bg-gradient-warm">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              Perfect For Every <span className="italic text-burgundy-light">Occasion</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {occasions.map((occasion, i) => (
              <div
                key={i}
                className="bg-card rounded-2xl p-8 text-center border border-border hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-5xl mb-4">{occasion.icon}</div>
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {occasion.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section id="masterpiece-category" className="py-24 px-6 bg-gradient-warm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-amber-700 mb-4">
              {/* Choisissez votre type de lettre */}
              Select Your Masterpiece Category
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {/* Sélectionnez le style qui correspond à votre intention. Nos experts doctorants en littérature feront le reste. */}
              Choose the style that reflects your intent. Our PhD literature experts will craft the rest.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Love Letter */}
            <Link to="/commander">
              <div className="bg-gradient-to-br from-red-950 to-red-900 rounded-3xl p-10 border border-red-800/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-6xl mb-6 text-amber-300">❤️</div>
                <h3 className="font-display text-2xl font-bold text-white mb-3">
                  {/* Love Letter */}
                  The Love Letter
                </h3>
                <p className="text-slate-300 mb-6">
                  {/* Lettre romantique, originale et émotionnelle, adaptée à votre relation unique. */}
                  A romantic, original, and deeply emotional tribute tailored to your unique bond.
                </p>
                <Button className="text-amber-300 font-semibold hover:text-amber-200 transition-colors">
                  {/* Commencer → */}
                  Get Started →
                </Button>
              </div>
            </Link>

            {/* Apology Letter */}
            <Link to="/commander">
              <div className="bg-gradient-to-br from-blue-950 to-blue-900 rounded-3xl p-10 border border-blue-800/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-6xl mb-6 text-amber-300">🤝</div>
                <h3 className="font-display text-2xl font-bold text-white mb-3">
                  {/* Apology Letter */}
                  The Apology Letter
                </h3>
                <p className="text-slate-300 mb-6">
                  {/* Lettre d'excuse sincère, soigneusement formulée pour réparer une relation délicate. */}
                  A sincere and carefully worded letter designed to mend and heal delicate relationships.
                </p>
                <Button className="text-amber-300 font-semibold hover:text-amber-200 transition-colors">
                  {/* Commencer → */}
                  Get Started →
                </Button>
              </div>
            </Link>

            {/* Breakup Letter */}
            <Link to="/commander">
              <div className="bg-gradient-to-br from-purple-950 to-purple-900 rounded-3xl p-10 border border-purple-800/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-6xl mb-6 text-amber-300">✂️</div>
                <h3 className="font-display text-2xl font-bold text-white mb-3">
                  {/* Breakup Letter */}
                  The Breakup Letter
                </h3>
                <p className="text-slate-300 mb-6">
                  {/* Lettre respectueuse et claire pour mettre fin à une relation sans conflit. */}
                  A respectful, clear, and dignified closing to end a relationship without conflict.
                </p>
                <Button className="text-amber-300 font-semibold hover:text-amber-200 transition-colors">
                  {/* Commencer → */}
                  Get Started →
                </Button>
              </div>
            </Link>

            {/* Confession Letter */}
            <Link to="/commander">
              <div className="bg-gradient-to-br from-yellow-900 to-yellow-800 rounded-3xl p-10 border border-yellow-700/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-6xl mb-6 text-amber-300">✨</div>
                <h3 className="font-display text-2xl font-bold text-white mb-3">
                  {/* Confession Letter */}
                  The Confession Letter
                </h3>
                <p className="text-slate-300 mb-6">
                  {/* Avouez vos sentiments, exprimez une émotion forte ou surprenez quelqu'un de spécial */}
                  Reveal your deepest feelings and surprise someone special with an unforgettable admission.
                </p>
                <Button className="text-amber-300 font-semibold hover:text-amber-200 transition-colors">
                  {/* Commencer → */}
                  Get Started →
                </Button>
              </div>
            </Link>
          </div>
        </div>
      </section >


      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="text-left">
            <h2 className="text-2xl uppercase  tracking-widest text-red-900 mb-4">
              {/* L’EXPERT DERRIÈRE LES MOTS */}
              THE MASTERMIND BEHIND THE WORDS
            </h2>

            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
              {/* Rencontrez l’esprit derrière les mots */}
              Meet the Soul behind the Craft
            </h2>

            <p className="text-lg text-slate-700 mb-4 max-w-xl">
              {/* Ce projet a été créé avec une mission : ramener la sincérité, la littérature et l’émotion dans les histoires d’amour modernes. */}
              This project was born from a single mission: to restore sincerity, literature, and raw emotion to modern love stories.
            </p>

            <p className="text-lg text-slate-700 mb-6 max-w-xl">
              {/* Inspiré par la recherche académique en littérature et une passion pour l’écriture romantique, chaque lettre est conçue pour être profondément personnelle, humaine et inoubliable. */}
              Inspired by academic literary research and a lifelong passion for romantic prose, every letter is engineered to be deeply personal, profoundly human, and forever unforgettable.
            </p>

            <p className="italic text-amber-700 font-semibold">
              {/* Parce que parfois, les bons mots changent tout. */}
              Because sometimes, the right words change everything.
            </p>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="w-full max-w-md bg-white rounded-3xl p-2 shadow-lg border border-slate-200">
              <img src={image2} alt="Auteur à l'ordinateur" className="w-full h-100 object-cover rounded-2xl" />
            </div>
          </div>
        </div>
      </section>


      <section className="py-24 px-6 bg-dark-900 text-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="uppercase text-sm text-amber-300 tracking-widest">
              {/* Options Premium */}
              Premium Enhancements
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-amber-400 mt-2">
              {/* Sublimez votre lettre */}
              Elevate your words into an everlasting gift.
            </h2>
            <p className="max-w-2xl mx-auto text-slate-400 mt-2">
              {/* Des options exclusives pour transformer vos mots en un cadeau inoubliable. */}
              Exclusive options to transform your words into an unforgettable gift.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-4">
              <div className="bg-card rounded-xl p-6 border border-amber-800/30 flex items-start justify-between">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red-900 rounded-md flex items-center justify-center text-white">📄</div>
                  <div>
                    <h4 className="font-semibold text-red-900 text-foreground">
                      {/* Lettre Digitale Instantanée */}
                      Instant Digital Manuscript
                    </h4>
                    <p className="text-sm text-slate-400">
                      {/* Recevez votre lettre personnalisée en quelques secondes au format PDF. */}
                      Receive your personalized letter in seconds as a highresolution PDF.
                    </p>
                  </div>
                </div>
                <div className="text-amber-300 font-semibold">Included</div>
              </div>

              <div className="bg-card rounded-xl p-6 border border-amber-800/30 flex items-start justify-between">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red-900 rounded-md flex items-center justify-center text-white">⚡</div>
                  <div>
                    <h4 className="font-semibold text-red-900 text-foreground">
                      {/* Livraison Prioritaire (4H) */}
                      Priority Delivery (4H)
                    </h4>
                    <p className="text-sm text-slate-400">
                      {/* Besoin urgent ? Votre lettre livrée en 4 heures maximum. */}
                      In a rush? Your masterpiece delivered to your inbox in under 4 hours.
                    </p>
                  </div>
                </div>
                <div className="text-amber-300 font-semibold">+$19.90</div>
              </div>

              <div className="bg-card rounded-xl p-6 border border-amber-800/30 flex items-start justify-between">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red-900 rounded-md flex items-center justify-center text-white">✉️</div>
                  <div>
                    <h4 className="font-semibold text-red-900 text-foreground">Premium Art-Email</h4>
                    <p className="text-sm text-slate-400">Delivered to your recipient with an exquisite artistic layout and design.</p>
                  </div>
                </div>
                <div className="text-amber-300 font-semibold">+$9.90</div>
              </div>

              <div className="bg-card rounded-xl p-6 border border-amber-800/30 flex items-start justify-between">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red-900 rounded-md flex items-center justify-center text-white">📜</div>
                  <div>
                    <h4 className="font-semibold text-red-900 text-foreground">Luxury Paper & GoldWax Seal</h4>
                    <p className="text-sm text-slate-400">Printed on premium archival paper, hand-sealed with wax in an elegant envelope.</p>
                  </div>
                </div>
                <div className="text-amber-300 font-semibold">+$29.90</div>
              </div>

              <div className="bg-card rounded-xl p-6 border border-amber-800/30 flex items-start justify-between">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red-900 rounded-md flex items-center justify-center text-white">🖼️</div>
                  <div>
                    <h4 className="font-semibold text-red-900 text-foreground">Framed Heritage Edition</h4>
                    <p className="text-sm text-slate-400">Your letter professionally framed and delivered in luxury packaging to your doorstep. </p>
                  </div>
                </div>
                <div className="text-amber-300 font-semibold">+$59.90</div>
              </div>
            </div>

            <div className="flex justify-center md:justify-end">
              <div className="w-full max-w-md rounded-2xl overflow-hidden shadow-2xl">
                <img src={image} alt="Options premium" className="w-full h-full object-cover rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>


    </>
  );
};

export default Occasions;
