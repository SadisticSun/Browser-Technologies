# Browser Technologies  

## Opdracht 1: Breek het web  

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

#### Oplossing: De website blijft goed bruikbaar door het gebruik van goede titels en alt-attributen. 
Op de marktplaats pagina zou het een overweging zijn om de conditie van het aangeboden product voorop te stellen, 
aangezien het aannemelijk is dat daar veel naar gekeken wordt.

___

### Feature 2: Kleur uitzetten

Websites getest: 
 * http://www.tele2.nl
 * https://tweakers.net/
 
#### Hoe?: 
* Chrome:
+ Download plugin ‘Greyscale’

Firefox: 
+ Download plugin ‘No Colors’
Safari: 
+ Geen extensie beschikbaar

#### Welke problemen veroorzaakt dit voor de gebruiker?

##### https://www.tele2.nl
De plugin Greyscale schakelt alle kleuren uit en toont enkel grijstinten op de huidige pagina.
Hierdoor is goed zichtbaar dat de vormgeving van de site nog steeds werkt en er een duidelijk onderscheid is 
tussen alle elementen. Er zijn een paar elementen die minder goed leesbaar worden, zoals de informatie onder de telefoons.

#### Oplossing: 
De beschrijving van de abonnementen op de toestellen pagina voorzien van een iets donkerdere kleur.

##### http://www.tweakers.net
Op deze site valt op dat de ‘je gebruikt een ad-blocker’ melding een beetje verdwijnt op de achtergrond. 
De gebruikte kleur geel valt weg wanneer Greyscale geactiveerd wordt.

#### Oplossing: 
Verhoog het contrast de achtergrond van deze meldingen ten opzichte van de rest van de pagina.
