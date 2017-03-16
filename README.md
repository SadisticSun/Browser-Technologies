# Browser Technologies  

## Opdracht 1.1: Breek het web  

### Feature 1: Afbeeldingen uitzetten  

Websites getest: 
* http://www.tele2.nl
* https://tweakers.net/

#### Hoe?: 
* Chrome:
 	1.  Instellingen 
 	2.  Geavanceerde instellingen 
 	3.  Instellingen voor content 
 	4.  Geen afbeeldingen tonen

* Firefox: 
	1.  In adresbalk “about:config" 
	2.  Zoek “permissions.default.image 
	3.  Zet value op: 
		* 2 -> Blokkeer enkel afbeeldingen van derde partijen
		* 3 -> Blokkeer alle afbeeldingen 
		
* Safari:
	1. Toon ontwikkel menu 
	2. Schakel afbeeldingen uit

#### Welke problemen veroorzaakt dit voor de gebruiker?
##### http://www.tele2.nl

De website van Tele2 bevat veel afbeeldingen van telefoons. 
Door de afbeeldingen uit te schakelen is de gebruiker afhankelijk van de tekstuele inhoud van de website. 
Wat opvallend is dat de website zeer goed bruikbaar is zonder afbeeldingen. De gebruiker kan nog steeds producten bekijken,
informatie opvragen of iets bestellen. Dit getuigt dat de afbeeldingen op deze site enkel als hulpmiddel dienen
en niet essentieel zijn.

![Tele2 site zonder afbeeldingen](https://raw.github.com/SadisticSun/Browser-Technologies/master/README%20img/tele2_noimg1.png?raw=true)

![Tele2 site zonder afbeeldingen](https://raw.github.com/SadisticSun/Browser-Technologies/master/README%20img/tele2_noimg2.png?raw=true)

#### Oplossing: 
Niet echt nodig. Zoals hierboven beschreven werkt de website naar behoren. 
Het kleurgebruik van de huisstijl heeft hier een rol in. Eventueel zou er wel gebruik gemaakt kunnen worden 
van SVG afbeeldingen. Deze worden niet geblokkeerd (getest op [http://tutorials.jenkov.com/svg/svg-examples.html] met afbeeldingen uitgeschakeld.).

##### http://www.tweakers.net
De site van Tweakers komt er wat minder goed mee weg. 
Hoewel de content nog steeds te lezen is en de navigatie ook nog steeds werkt, 
is het toch een stuk minder snel duidelijk waar een bepaald artikel over gaat. 
Vooral de reviews komen niet goed uit de verf wanneer er geen afbeeldingen getoond worden. 
Video werkt echter wel. De sectie ‘Vraag en Aanbod’ is ten dode opgeschreven wanneer er geen afbeeldingen zichtbaar zijn. 
Dit omdat het aannemelijk is dat de gebruiker fotomateriaal van een aangeboden product wil zien.

![Tweakers site zonder afbeeldingen](https://raw.github.com/SadisticSun/Browser-Technologies/master/README%20img/tweakers_noimg1.png?raw=true)

![Tweakers site zonder afbeeldingen](https://raw.github.com/SadisticSun/Browser-Technologies/master/README%20img/tweakers_noimg2.png?raw=true)

#### Oplossing: 
De website blijft goed bruikbaar door het gebruik van goede titels en alt-attributen. 
Op de marktplaats pagina zou het een overweging zijn om de conditie van het aangeboden product voorop te stellen, 
aangezien het aannemelijk is dat daar veel naar gekeken wordt.

___

### Feature 2: Kleur uitzetten

Websites getest: 
 * http://www.tele2.nl
 * https://tweakers.net/
 
#### Hoe?: 
Chrome:
 * Download plugin ‘Greyscale’

Firefox: 
 * Download plugin ‘No Colors’

Safari: 
 * Geen extensie beschikbaar

#### Welke problemen veroorzaakt dit voor de gebruiker?

##### https://www.tele2.nl
De plugin Greyscale schakelt alle kleuren uit en toont enkel grijstinten op de huidige pagina.
Hierdoor is goed zichtbaar dat de vormgeving van de site nog steeds werkt en er een duidelijk onderscheid is 
tussen alle elementen. Er zijn een paar elementen die minder goed leesbaar worden, zoals de informatie onder de telefoons.

![Tele2 met grijstinten](https://raw.github.com/SadisticSun/Browser-Technologies/master/README%20img/tele2_grey1.png?raw=true)

![Tele2 met grijstinten](https://raw.github.com/SadisticSun/Browser-Technologies/master/README%20img/tele2_grey2.png?raw=true)

#### Oplossing: 
De beschrijving van de abonnementen op de toestellen pagina voorzien van een iets donkerdere kleur.

##### http://www.tweakers.net
Op deze site valt op dat de ‘je gebruikt een ad-blocker’ melding een beetje verdwijnt op de achtergrond. 
De gebruikte kleur geel valt weg wanneer Greyscale geactiveerd wordt.

![Tweakers met grijstinten](https://raw.github.com/SadisticSun/Browser-Technologies/master/README%20img/tweakers_grey.png?raw=true)

#### Oplossing: 
Verhoog het contrast de achtergrond van deze meldingen ten opzichte van de rest van de pagina.

___

## Opdracht 1.2 Funda App Progressive Enhancement Check
Test om te kijken wat het effect is van het uitschakelen van bepaalde browser features
op de app en de mogelijke oplossingen om deze effecten te ondervangen.

### Feature 1: Afbeeldingen uitschakelen
#### Effect:
In Chrome worden er in lijn der verwachting geen afbeeldingen geladen, maar in Firefox worden SVG's wel geladen wanneer de instellingen afbeeldingen niet toestaan. Safari gedraagt zich zoals verwacht.

![Funda app met afbeeldingen](https://raw.github.com/SadisticSun/Browser-Technologies/master/README%20img/funda_img.png?raw=true)

![Funda app zonder afbeeldingen](https://raw.github.com/SadisticSun/Browser-Technologies/master/README%20img/funda_noimg.png?raw=true)

### Feature 2: Custom Fonts uitschakelen
#### Effect:
Aangezien er geen gebruik is gemaakt van extern ingeladen fonts heeft dit geen effect gehad.

### Feature 3: JavaScript uitschakelen
#### Effect:
Wanneer JS uitgeschakeld is functioneert de app niet meer. Er wordt geen data meer ingeladen en de app blijft op het startscherm hangen.

### Feature 4: Kleur controle (Sim Daltonism)
#### Effect:
Om deze feature te testen heb ik gebruik gemaakt van de app Sim Daltonism. Deze app simuleert de condities van iemand die kleurenblind is en biedt ook allerlei varianten van kleurenblindheid. Deze tool zou essentieel moeten zijn voor zowel designers als developers om te controleren of het gebruikte kleurenpalette werkt. Het resultaat is dat de gebruikte kleuren voldoende contrast hebben om onderscheid te kunnen maken tussen de interactieve elementen op de pagina's. 

![Funda app met kleurcontrole](https://raw.github.com/SadisticSun/Browser-Technologies/master/README%20img/funda_color1.png?raw=true)

![Funda app met kleurcontrole](https://raw.github.com/SadisticSun/Browser-Technologies/master/README%20img/funda_color2.png?raw=true)

![Funda app met kleurcontrole](https://raw.github.com/SadisticSun/Browser-Technologies/master/README%20img/funda_color3.png?raw=true)

![Funda app met kleurcontrole](https://raw.github.com/SadisticSun/Browser-Technologies/master/README%20img/funda_color4.png?raw=true)

### Feature 5: Trage breedbandsnelheid
#### Effect:
Ik heb de laadtijd van de app gemeten op 2G Regular (Chrome Dev Tools) snelheid. 
Het resultaat is als volgt.

	+ DOMContentLoaded @ 620ms
	+ Full Load @ 633ms
	+ Opzoeken en tonen data @ +/- 24s

[Ik maakte een gifje ervan! Bekijk hem hier](https://github.com/SadisticSun/Browser-Technologies/blob/master/README%20img/gifje.gif)

Het valt op dat het opzoeken van locatiegegevens en de API data een aantal keer mislukt omdat de timeout op het ophalen van de locatiegegevens verlopen is. Door deze timeout, nu op max 10sec, te verhogen naar 20sec zou dit opgelost kunnen worden, echter zal de applicatie in de huidige staat er dan ook 20 seconden over doen om een locatie te bepalen, ongeacht internet snelheid.

### Feature 6: Cookies uitschakelen
#### Effect:
De app maakt geen gebruik van cookies en dus heeft het uitschakelen daarvan geen effect gehad. De app werkt zoals bedoeld.
Een mogelijkheid zou zijn om de locatie van de gebruiker op te slaan in een cookie die maximaal een dag houdbaar is. Zo hoeft de gebruiker niet elke keer toestemming te geven om locatiegegevens te delen.

### Feature 7: localStorage gebruiken
#### Effect:
Ook hier is geen gebruik van gemaakt in de app, maar zou wellicht een optie kunnen zijn. Zo zou de Funda data direct opgehaald kunnen worden en opgeslagen in localStorage voor snelle toegang in plaats van een API call uitvoeren om een detail pagina te bekijken. Het probleem is echter dat de data dan voor altijd opgeslagen zal worden op de harde schijf van de gebruiker, en de maximale toegewezen ruimte hiervoor verschilt per browser met een maximum van 10MB op voor de grotere browsers. Wanneer deze localStorage door andere sites/apps gebruikt wordt kan het zijn dat deze al snel vol is en de app niet meer werkt.
Een variant op localStorage is sessionStorage, die de gegevens alleen gedurende de sessie bewaart en de ruimte daarna weer vrijmaakt.

![localStorage opslag grootte](https://raw.github.com/SadisticSun/Browser-Technologies/master/README%20img/localStorage_sizes.png?raw=true)

### Feature 8: Muis/trackpad uitschakelen
#### Effect:
Het navigeren door de app zonder muis of trackpad gaat goed, met uitzondering van de eerste pagina met de zoek knop. Deze wordt niet geselecteerd wanneer je met de TAB toets wilt navigeren.
De overzichtspagina werkt echter prima met TAB en ENTER. Je kunt door alle 'Bekijken' knoppen heen tabben en met enter de details bekijken. Ook kun je gemakkelijk terug van de detailpagina naar de overzichtspagina. 

