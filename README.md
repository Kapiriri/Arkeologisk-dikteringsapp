# Fältdiktat

Diktera fältanteckningar vid arkeologisk utredning (etapp 1 och 2). Texten formateras automatiskt enligt RAÄ:s praxis för beskrivningar i Fornreg/Fornsök: förkortningar (diam, h, dj, br, l, tj, st, ca), mått med längsta måttet först, längdriktning inom parentes, väderstreck och skiljetecken.

## Lägga upp på GitHub Pages

1. Skapa ett nytt repo på github.com, t.ex. `faltdiktat`. Välj **Public**.
2. Klicka **Add file → Upload files** och ladda upp alla filer i den här mappen:
   `index.html`, `sw.js`, `manifest.webmanifest`, `icon-192.png`, `icon-512.png`, `apple-touch-icon.png`, `README.md`.
3. Gå till **Settings → Pages**. Under *Build and deployment* väljer du **Deploy from a branch**, gren **main** och mapp **/ (root)**. Spara.
4. Efter en till två minuter finns appen på `https://DITT-ANVÄNDARNAMN.github.io/faltdiktat/`.

Vid uppdatering laddar du bara upp den nya `index.html` igen. Telefonerna hämtar den nya versionen nästa gång de har täckning.

## Första gången på iPhone

1. Öppna länken i **Safari**.
2. Kontrollera att **Siri och diktering** är på: Inställningar → Siri.
3. Tillåt mikrofonen för sidan så att frågan inte kommer varje gång: tryck på **aA** i adressfältet → **Webbplatsinställningar** → **Mikrofon** → **Tillåt**.
4. Vill du ha en ikon på hemskärmen: Dela → **Lägg till på hemskärmen** och stäng av **Öppna som webbapp**. I webbappsläget fungerar inte röststyrningen på iPhone.

På Android och dator: använd **Chrome**. Microsoft Edge kan i dag inte känna igen svenska.

## I fält

- Tryck på mikrofonen och prata i korta led med en kort paus emellan. Pausen blir ett kommatecken, och ord som *Fyllning*, *Kantkedja* och *I mitten* börjar en ny mening.
- **ångra** tar bort senaste ledet. **… ångra** i slutet av en mening stryker den meningen.
- **ny lämning** öppnar ett nytt kort. **rubrik L 1990 kolon 1234** sätter kortets rubrik.
- **terräng**, **orientering**, **tradition** och **anmärkning** börjar ett nytt fält på egen rad.
- **position** sparar GPS-positionen i SWEREF 99 TM.
- Hör taligenkänningen fel på ett ord: tryck på ordet och välj rätt fackord. Appen lär sig rättningen till nästa gång.
- Utan täckning: appen öppnas ändå, och du dikterar med tangentbordets mikrofon (Inställningar i appen).

**Anteckningarna sparas bara i telefonen.** Exportera och kopiera dem till rapporten i slutet av varje fältdag.

## Om ordlistan

Rättningen av fackord använder en inbyggd arkeologisk ordlista (cirka 375 termer med böjningsformer) och en svensk ordlista för att aldrig rätta om vanliga ord. Den svenska ordlistan bygger på [FrequencyWords](https://github.com/hermitdave/FrequencyWords) av Hermit Dave, licens CC BY-SA 4.0.
