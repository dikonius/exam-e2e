Först skapade jag en user stories-fil där jag beskrev fyra delar av mitt projekt: Navigation, Favourite Feature, Add New Book Feature och Favourite New Book Feature.

Därefter skrev jag stegvisa instruktioner för hur varje del skulle testas.

Sedan började jag testa navigeringen genom att skriva kod i exakt samma ordning som beskrivits i mina user stories.

När jag körde det första testet upptäckte jag ett problem: Playwright letade efter tester i fel mapp. Jag löste detta.

Därefter stötte jag på ett problem med locator.getByText, så jag läste dokumentationen för att åtgärda felet.

Koden för navigationstestet blev klar, och allt fungerade som förväntat.

Jag öppnade testrapporten för att säkerställa att hela testkedjan var inkluderad.

Därefter började jag arbeta med Favourite Feature.

Jag skrev kod för Favourite Feature och använde getByTestId.

Testrapporten visade att allt fungerade korrekt.

Sedan skrev jag kod för Add New Book Feature.

Jag upptäckte att "label" inte var kopplad till "input" med "for" och input-id.

Därför använde jag getByTestId istället.

Testkörningen visade att allt var grönt.

Därefter skrev jag kod för Favourite Feature för ny tillagd bok.

Eftersom koden var densamma som för Favourite Feature och Add New Book Feature slog jag ihop dem och ändrade endast namnen på locatorerna.

Alla fyra tester visade grönt.