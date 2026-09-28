import GameShowcase from "@/components/GameShowcase";
const copy={
 en:[{title:"Follow the candies",text:"Match candies to meet each level’s goals. The next stop is waiting on the candy road."},{title:"Keep the chain going",text:"Let matches cascade. Use multiplier dust when you want to raise the stakes."},{title:"Build your Candy Island",text:"Progress through levels to restore and upgrade an island filled with candy buildings."},{title:"Shake things up",text:"A stuck board isn’t the end. Hit SHAKE and look for your next match."}],
 tr:[{title:"Şekerlerin peşinden git",text:"Bölüm hedefleri için şekerleri eşleştir. Şeker yolunda sıradaki durak seni bekliyor."},{title:"Zinciri uzat",text:"Eşleşmeler birbirini tetiklesin. Çarpanı büyütmek için çarpan tozunu kullan."},{title:"Şeker Adanı geliştir",text:"Bölümlerde ilerledikçe şeker yapılarıyla dolu adanı yenile ve geliştir."},{title:"Bir de çalkala",text:"Tahta tıkandıysa oyun bitmez. ÇALKALA’ya bas ve yeni eşleşmeni bul."}],
};
export default function JellyChainRushPage({lang="en"}:{lang?:"en"|"tr"}) { return <GameShowcase slug="jelly-chain-rush" lang={lang} features={copy[lang]} />; }
