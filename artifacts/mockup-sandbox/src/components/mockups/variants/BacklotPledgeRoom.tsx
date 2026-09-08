import { useState } from "react";
import {
  ArrowRight,
  Check,
  Clapperboard,
  Film,
  Heart,
  MapPin,
  Minus,
  Plus,
  Star,
  Ticket,
  Users,
} from "lucide-react";

const rewards = [
  { name: "The Usher", price: 15, detail: "Digital premiere + your name in the crawl", color: "#e6d6b8" },
  { name: "The Regular", price: 45, detail: "Poster, photo zine + early stream", color: "#d1dcae" },
  { name: "The Neighbor", price: 120, detail: "Premiere seat + diner breakfast with the crew", color: "#f0bd68" },
];

export default function BacklotPledgeRoom() {
  const [selected, setSelected] = useState(1);
  const [quantity, setQuantity] = useState(1);
  const [pledged, setPledged] = useState(false);

  const chosen = rewards[selected];
  const total = chosen.price * quantity;

  return (
    <main
      className="min-h-screen overflow-hidden bg-[#efe4cc] text-[#29241e]"
      style={{ fontFamily: "'Archivo', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700;800&family=Fraunces:opsz,wght@9..144,600;9..144,900&family=Chivo+Mono:wght@400;600;700&display=swap');
        .bp-display { font-family: 'Fraunces', serif; }
        .bp-mono { font-family: 'Chivo Mono', monospace; }
        .bp-grain { position: relative; }
        .bp-grain:after { content:''; pointer-events:none; position:absolute; inset:0; opacity:.16; background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140' viewBox='0 0 140 140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E"); mix-blend-mode:multiply; }
        .bp-ticket { clip-path: polygon(0 13%, 4% 13%, 4% 0, 96% 0, 96% 13%, 100% 13%, 100% 87%, 96% 87%, 96% 100%, 4% 100%, 4% 87%, 0 87%); }
        @keyframes bp-rise { from { opacity:0; transform:translateY(12px) } to { opacity:1; transform:translateY(0) } }
        .bp-rise { animation: bp-rise .65s ease both; }
      `}</style>

      <div className="mx-auto max-w-[1180px] px-4 py-4 md:px-7 md:py-7">
        <header className="bp-rise flex items-center justify-between border-b-2 border-[#29241e] pb-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#29241e] bg-[#bd5738] text-[#f7edda]">
              <Clapperboard size={22} />
            </div>
            <div>
              <div className="bp-display text-2xl font-black leading-none tracking-tight">BACKLOT</div>
              <div className="bp-mono mt-1 text-[9px] uppercase tracking-[.18em] text-[#76634c]">independent film, in public</div>
            </div>
          </div>
          <div className="hidden items-center gap-5 md:flex">
            <span className="bp-mono text-[10px] uppercase tracking-widest text-[#76634c]">Campaign 07 / 2025</span>
            <button className="bp-mono border-2 border-[#29241e] bg-[#f8efdF] px-4 py-2 text-[10px] font-bold uppercase tracking-widest shadow-[3px_3px_0_#29241e] transition-transform hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none">
              Sign in
            </button>
          </div>
        </header>

        <section className="grid gap-5 py-7 md:grid-cols-[1.15fr_.85fr] md:py-10">
          <div className="bp-rise" style={{ animationDelay: ".08s" }}>
            <div className="bp-mono mb-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.22em] text-[#bd5738]">
              <span className="h-2 w-2 rounded-full bg-[#bd5738]" /> Live from the backlot
            </div>
            <h1 className="bp-display max-w-[650px] text-[clamp(3.5rem,8vw,7.6rem)] font-black leading-[.87] tracking-[-.06em]">
              Pull up a seat.
            </h1>
            <p className="mt-6 max-w-[510px] text-[15px] leading-7 text-[#665541]">
              <span className="font-bold text-[#29241e]">Dust on the Dashboard</span> is a road movie about a father, a daughter, and a pickup that barely runs. This is the part where the audience joins the crew.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
              <div className="flex items-center gap-1">
                {[0, 1, 2, 3, 4].map((i) => <Star key={i} size={16} className="fill-[#d89b31] text-[#29241e]" />)}
                <span className="bp-mono ml-2 text-[11px]">4.8 / 12,440</span>
              </div>
              <span className="h-4 w-px bg-[#b9a98d]" />
              <span className="bp-mono flex items-center gap-1 text-[11px] text-[#76634c]"><Users size={13} /> 2,418 backers</span>
            </div>
          </div>

          <div className="bp-rise relative min-h-[275px] overflow-hidden border-2 border-[#29241e] bg-[#bd5738] p-5 text-[#f8efdf] shadow-[5px_5px_0_#29241e]" style={{ animationDelay: ".16s" }}>
            <div className="absolute -right-8 -top-9 h-44 w-44 rounded-full border-[18px] border-[#d89b31] opacity-80" />
            <div className="absolute bottom-5 right-6 rotate-[-12deg] border-2 border-[#29241e] bg-[#d89b31] px-3 py-2 text-center text-[#29241e] shadow-[3px_3px_0_#29241e]">
              <div className="bp-mono text-[9px] font-bold uppercase tracking-widest">New Mexico</div>
              <MapPin size={18} className="mx-auto mt-1" />
            </div>
            <div className="relative z-10 flex h-full flex-col justify-between">
              <div className="bp-mono text-[10px] uppercase tracking-[.2em] text-[#f2ceb8]">A film by Carla Ybarra</div>
              <div>
                <Film size={32} strokeWidth={1.4} />
                <div className="bp-display mt-3 max-w-[390px] text-4xl font-black leading-[.93]">Every mile has a story.</div>
                <div className="bp-mono mt-4 text-[10px] uppercase tracking-widest text-[#f2ceb8]">96 min · drama · feature film</div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-5 border-t-2 border-[#29241e] pt-6 md:grid-cols-[.9fr_1.1fr]">
          <div className="bp-rise" style={{ animationDelay: ".22s" }}>
            <div className="flex items-end justify-between">
              <div>
                <div className="bp-mono text-[10px] font-bold uppercase tracking-[.2em] text-[#76634c]">The community cut</div>
                <div className="bp-display mt-1 text-5xl font-black">$127,430</div>
              </div>
              <div className="bp-mono text-right text-[10px] uppercase leading-5 text-[#76634c]">of $150,000 goal<br /><span className="font-bold text-[#bd5738]">11 days left</span></div>
            </div>
            <div className="mt-4 h-5 border-2 border-[#29241e] bg-[#d9c9a9] p-[3px]">
              <div className="bp-grain h-full bg-[#7c946f]" style={{ width: "85%" }} />
            </div>
            <div className="mt-5 grid grid-cols-3 border-y-2 border-[#29241e] py-3">
              <div><div className="bp-mono text-[9px] uppercase text-[#76634c]">Crew paid</div><div className="mt-1 font-bold">100%</div></div>
              <div><div className="bp-mono text-[9px] uppercase text-[#76634c]">On set</div><div className="mt-1 font-bold">Oct 14</div></div>
              <div><div className="bp-mono text-[9px] uppercase text-[#76634c]">Next unlock</div><div className="mt-1 font-bold">$150K</div></div>
            </div>
            <div className="mt-6 bg-[#29241e] p-4 text-[#f8efdf]">
              <div className="bp-mono text-[10px] uppercase tracking-widest text-[#d89b31]">Why this exists</div>
              <p className="bp-display mt-2 text-[23px] leading-tight">“A small film can still feel like a big night out.”</p>
              <div className="bp-mono mt-3 text-[10px] text-[#bcae97]">— Denny W., backer since 2021</div>
            </div>
          </div>

          <div className="bp-rise border-2 border-[#29241e] bg-[#f8efdf] p-4 shadow-[4px_4px_0_#29241e] md:p-5" style={{ animationDelay: ".3s" }}>
            <div className="flex items-center justify-between border-b-2 border-[#29241e] pb-3">
              <div><div className="bp-mono text-[10px] font-bold uppercase tracking-[.18em] text-[#bd5738]">Choose your seat</div><h2 className="bp-display mt-1 text-3xl font-black">Join the picture</h2></div>
              <Ticket className="text-[#bd5738]" size={27} />
            </div>
            <div className="mt-4 space-y-2">
              {rewards.map((reward, index) => (
                <button key={reward.name} onClick={() => { setSelected(index); setPledged(false); }} className={`flex w-full items-center gap-3 border-2 border-[#29241e] p-3 text-left transition-transform hover:-translate-y-0.5 ${selected === index ? "shadow-[3px_3px_0_#29241e]" : "opacity-75"}`} style={{ backgroundColor: selected === index ? reward.color : "#efe4cc" }}>
                  <span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-[#29241e] ${selected === index ? "bg-[#bd5738] text-[#f8efdf]" : ""}`}>{selected === index && <Check size={13} />}</span>
                  <span className="min-w-0 flex-1"><span className="bp-display block text-lg font-semibold leading-none">{reward.name}</span><span className="mt-1 block text-[11px] text-[#665541]">{reward.detail}</span></span>
                  <span className="bp-mono text-lg font-bold">${reward.price}</span>
                </button>
              ))}
            </div>
            <div className="mt-4 flex items-center justify-between border-t-2 border-dashed border-[#c4b393] pt-4">
              <div><div className="bp-mono text-[10px] uppercase tracking-widest text-[#76634c]">Seats reserved</div><div className="mt-1 flex items-center gap-2"><button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="border-2 border-[#29241e] p-1"><Minus size={13} /></button><span className="w-5 text-center font-bold">{quantity}</span><button onClick={() => setQuantity(quantity + 1)} className="border-2 border-[#29241e] p-1"><Plus size={13} /></button></div></div>
              <div className="text-right"><div className="bp-mono text-[10px] uppercase tracking-widest text-[#76634c]">Your pledge</div><div className="bp-display text-3xl font-black">${total}</div></div>
            </div>
            <button onClick={() => setPledged(true)} className={`bp-ticket mt-4 flex w-full items-center justify-center gap-2 py-4 font-bold uppercase tracking-widest transition-colors ${pledged ? "bg-[#7c946f] text-[#f8efdf]" : "bg-[#d89b31] hover:bg-[#bd5738] hover:text-[#f8efdf]"}`}>
              {pledged ? <><Heart size={17} fill="currentColor" /> You're in the credits</> : <>Reserve this seat <ArrowRight size={17} /></>}
            </button>
            <p className="bp-mono mt-3 text-center text-[9px] uppercase tracking-wide text-[#76634c]">No money moves until the campaign reaches its goal</p>
          </div>
        </section>

        <footer className="mt-7 flex flex-col justify-between gap-3 border-t-2 border-[#29241e] pt-4 md:flex-row">
          <span className="bp-mono text-[10px] uppercase tracking-[.18em] text-[#76634c]">Dirt Road Pictures · made with actual people</span>
          <span className="bp-mono flex items-center gap-2 text-[10px] uppercase tracking-[.18em]"><span className="h-2 w-2 rounded-full bg-[#7c946f]" /> Budget posted line by line</span>
        </footer>
      </div>
    </main>
  );
}