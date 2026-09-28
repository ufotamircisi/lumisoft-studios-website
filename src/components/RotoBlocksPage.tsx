import GameShowcase from "@/components/GameShowcase";
const copy={
 en:[{title:"Three pieces. Then a turn.",text:"Place your set of three. The whole board rotates clockwise, including the blocks you just placed."},{title:"Make room",text:"Fill rows or columns to clear space. In Classic mode, keep the board open and build your score."},{title:"Adventure goals",text:"Complete handcrafted levels by clearing goal icons through full rows and columns."},{title:"Take your time",text:"Look at the gaps before you place a piece. Free to play, with ads."}],
 tr:[{title:"Üç parça. Sonra dönüş.",text:"Üç parçanı yerleştir. Az önce koyduğun bloklarla birlikte tüm tahta saat yönünde döner."},{title:"Yer aç",text:"Satır veya sütunları doldurarak yer aç. Klasik modda tahtayı açık tut ve skorunu yükselt."},{title:"Macera hedefleri",text:"Dolu satır ve sütunlarla görev ikonlarını topla, özenle hazırlanmış bölümleri tamamla."},{title:"Kendi hızında oyna",text:"Parçayı koymadan önce boşluklara bak. Ücretsiz ve reklam destekli."}],
};
export default function RotoBlocksPage({lang="en"}:{lang?:"en"|"tr"}) { return <GameShowcase slug="roto-blocks" lang={lang} features={copy[lang]} />; }
