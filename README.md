Först skapade jag en user stories-fil där jag beskrev fyra delar av mitt projekt: Navigation, Favourite Feature, Add New Book Feature och Favourite New Book Feature.

Sedan skrev jag stegvisa instruktioner för hur man testar varje del.

Därefter började jag testa navigeringen genom att skriva kod i exakt samma ordning som jag beskrev i mina user stories.

Jag körde det första testet och upptäckte ett problem med att Playwright letade efter tester i fel mapp – det löste jag.

Efter det stötte jag på ett problem med locator.getByText, så jag läste dokumentationen för att åtgärda felet.

Koden för navigationstestet blev klar, och allt fungerade som det skulle.

Jag öppnade testrapporten för att säkerställa att hela testkedjan var med.

Därefter började jag med Favourite Feature.

Jag skrev kod till Favourites feature och använd getByTestId 

Test rapport visade att allting fungerar korrekt

Jag skrev kod för Add-new-book feature

Uptcäkte att "label" är inte kopplat till "input" med "for" och input id.

Så jag har använt getByTestId istället.

Kod test visade allting grönt.

