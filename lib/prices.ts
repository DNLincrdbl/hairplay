export type TierPrice = {
  i: string;
  ii: string;
  iii: string;
};

export type Service = {
  name: string;
  desc?: string;
  prices: TierPrice;
};

export type FlatItem = {
  name: string;
  price: string;
};

export const priceValidFrom = "2026. 03. 01-től";

export const cutServices: Service[] = [
  {
    name: "Fazonvágás",
    desc: "Mosás, fazonvágás, felszíni vágás, szárítás, fejmasszázs",
    prices: { i: "8 800", ii: "10 500", iii: "12 300" },
  },
  {
    name: "Egészségügyi vágás",
    desc: "Mosás, fejmasszázs, szárazon pár cm vágás a végekből + a felszínből",
    prices: { i: "7 000", ii: "8 800", iii: "10 500" },
  },
  {
    name: "Mosás, szárítás",
    desc: "Mosás, szárítás, fejmasszázs, hullámosítás vagy vasalás",
    prices: { i: "6 300", ii: "7 900", iii: "9 600" },
  },
];

export const cutAddons: FlatItem[] = [
  { name: "Steampod hajkezelés", price: "+2 000 / 2 500 / 3 000" },
  { name: "Fibre Clinix", price: "+4 000 / 4 500 / 5 000" },
  { name: "JOICO 4 lépcsős kezelés", price: "+7 000 / 8 000 / 9 000" },
  { name: "Gőzterápia regeneráló hajpakolással", price: "+2 200 / 2 500 / 2 900" },
  { name: "Göndörítés", price: "+1 800 / 2 700 / 3 600" },
];

export const colorServices: Service[] = [
  {
    name: "Tőfestés",
    desc: "Tőfestés, mosás, pakolás, szárítás, fejmasszázs",
    prices: { i: "16 000", ii: "18 000", iii: "20 500-tól" },
  },
  {
    name: "Teljes festés",
    desc: "Teljes festés, mosás, pakolás, szárítás, fejmasszázs",
    prices: { i: "18 500", ii: "21 500", iii: "25 000-tól" },
  },
  {
    name: "Árnyalás",
    desc: "Balayage színfrissítése, mosás, szárítás, fejmasszázs — szőkítés nélkül",
    prices: { i: "14 500", ii: "16 500", iii: "19 000-tól" },
  },
  {
    name: "Balayage frissítés",
    desc: "Általunk készített balayage frissítése, max. 6–7 hónapos lenövéssel",
    prices: { i: "27 500", ii: "33 500", iii: "41 000-tól" },
  },
  {
    name: "Expressz balayage",
    desc: "Gyors frissítés arc körül, választéknál, vagy natúr hajban napszítta hatás",
    prices: { i: "25 000", ii: "29 500", iii: "37 000-tól" },
  },
  {
    name: "Balayage festés",
    desc: "Balayage árnyalással, mosás, szárítás, fejmasszázs, pakolás, hullámosítás",
    prices: { i: "30 000", ii: "38 000", iii: "47 000-tól" },
  },
];

export const colorAddons: FlatItem[] = [
  { name: "Fazonvágás festés mellé", price: "+3 600" },
  { name: "Egészségügyi hajvágás", price: "+1 800-tól" },
  { name: "Frufru igazítás festés, szárítás mellé", price: "+1 000" },
  { name: "Frufru igazítása szárazon", price: "1 800" },
  { name: "Tőfestés árnyalás vagy balayage mellé", price: "3 000 – 5 000" },
  { name: "Tőárnyalás", price: "3 000" },
];

export const menItems: FlatItem[] = [
  { name: "Gépi egyhossz mosással + fejmasszázs", price: "3 500" },
  { name: "Normál hajvágás mosással + fejmasszázs", price: "5 400" },
  { name: "Hajvágás borotvás átmenettel, mosás, fejmasszázs", price: "7 000" },
  { name: "Szakáll igazítás", price: "2 600" },
];

export const kidsItems: FlatItem[] = [
  { name: "Kisfiú hajvágás", price: "3 800" },
  { name: "Kislány hajvágás mosás nélkül", price: "3 600" },
  { name: "Kislány, extra hosszú haj, mosás nélkül", price: "5 300" },
  { name: "Kislány hajvágás mosással", price: "−20% a női vágás árából" },
];

export const occasionItems: FlatItem[] = [
  { name: "Félhosszú haj", price: "7 500-tól" },
  { name: "Hosszú haj", price: "8 500-tól" },
  { name: "Extra hosszú haj", price: "10 000-tól" },
  { name: "Göndörítés, hullámosítás", price: "3 500" },
  { name: "Göndörítés, extra hosszú haj", price: "5 300" },
  { name: "Steampodos vasalás", price: "3 500" },
];

export const keratinItems: FlatItem[] = [
  { name: "Félhosszú haj", price: "26 500" },
  { name: "Hosszú haj", price: "32 000" },
  { name: "Extra hosszú haj", price: "36 500-tól" },
];

export const braidItems: FlatItem[] = [
  { name: "Teljes hajtömeg egybe fonása", price: "3 000" },
  { name: "2 fonat", price: "3 500" },
  { name: "3 fonat", price: "4 500" },
  { name: "4 fonat", price: "6 000" },
  { name: "5 fonat", price: "7 500" },
  { name: "Tincsek fonása", price: "1 800 / db" },
  { name: "4 vagy több tincstől", price: "1 500 / db" },
  { name: "Hajpánt fonat", price: "2 000" },
  { name: "Egyedi, összetettebb fonások", price: "árajánlat alapján" },
];

export const extensionBraidItems: FlatItem[] = [
  { name: "2 fonat", price: "5 300" },
  { name: "3 fonat", price: "7 000" },
  { name: "4 fonat", price: "8 800" },
  { name: "5 fonat", price: "10 500" },
  { name: "További tincs póthajjal", price: "+2 000 / db" },
  { name: "Hajpánt fonás", price: "3 000" },
  { name: "Egyedi, összetettebb fonások", price: "árajánlat alapján" },
];

export const categories = [
  {
    id: "I",
    title: "I. kategória",
    items: [
      "Rövid haj — vékony, normál vagy vastagszálú",
      "Vállig érő, vagy váll alatt pár cm-rel — vékony / normálszálú",
    ],
  },
  {
    id: "II",
    title: "II. kategória",
    items: [
      "Vállig érő — vastagszálú",
      "Hosszú, váll alatt, de könyék / mell felett — vékony / normálszálú",
    ],
  },
  {
    id: "III",
    title: "III. kategória",
    items: [
      "Hosszú, váll alatt, de könyék / mell felett — vastagszálú",
      "Extra hosszú, könyék vagy mell alá érő — vékony / normál / vastag szálú",
    ],
  },
];

export const categoryNotes = [
  "Erősen kócolódó hajnál válassz eggyel nagyobb kategóriát.",
  "Nagy mértékű őszfedésnél válassz eggyel nagyobb kategóriát.",
  "Ha a korrekció, színleszedés vagy szőkítés túlnyúlik az időkereten, felárat számolunk.",
  "Extra hosszú és extra mennyiségű haj esetén jelezd közösségi oldalainkon.",
];

export const priceNotes = [
  "Az árak forintban értendők, és tartalmazzák az ÁFÁ-t.",
  "A fizetés kizárólag készpénzben lehetséges.",
  "Az árak tájékoztató jellegűek, bizonyos esetekben eltérhetnek.",
];

export function formatFt(value: string) {
  const v = value.trim();
  if (!v || /árajánlat|%/i.test(v) || /\bFt\b/.test(v)) return v;
  if (/\/\s*db/i.test(v)) return v.replace(/\s*\/\s*db/i, " Ft / db");
  if (/-tól$/i.test(v)) return v.replace(/\s*-tól$/i, " Ft-tól");
  return `${v} Ft`;
}

export const featured = [
  { name: "Fazonvágás", from: "8 800", href: "/arak#vagas" },
  { name: "Tőfestés", from: "16 000", href: "/arak#festes" },
  { name: "Balayage", from: "25 000", href: "/arak#festes" },
  { name: "Férfi vágás", from: "3 500", href: "/arak#ferfi" },
];
