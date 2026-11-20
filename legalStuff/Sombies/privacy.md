# Datenschutzerklärung für Sombies

**Stand: 20.11.2026**

## 1. Verantwortlicher

Verantwortlich für die Verarbeitung personenbezogener Daten im Zusammenhang mit der App Sombies ist:

**Simon Ströbele**  
[STRASSE UND HAUSNUMMER]
[PLZ UND ORT]
Deutschland

E-Mail: sake_haze3b@icloud.com

Im Folgenden wird diese Person als „Betreiber“, „wir“ oder „uns“ bezeichnet.

## 2. Allgemeine Hinweise zur Datenverarbeitung

Sombies ist ein standortbasiertes Spiel, bei dem reale Bewegungen und geografische Positionen in das Spielerlebnis eingebunden werden. Die App bietet unter anderem Funktionen für Einzelspieler und Multiplayer.

Der Schutz deiner personenbezogenen Daten ist uns wichtig. Wir verarbeiten personenbezogene Daten nur, soweit dies für den Betrieb, die Bereitstellung und die Verbesserung der App erforderlich ist oder eine andere rechtliche Grundlage besteht.

Die Verarbeitung erfolgt insbesondere auf Grundlage der Datenschutz-Grundverordnung (DSGVO).

## 3. Welche Daten werden verarbeitet?

Je nach Nutzung der App können folgende Daten verarbeitet werden:

### 3.1 Kontodaten

Wenn du ein Benutzerkonto erstellst oder dich anmeldest, können folgende Daten verarbeitet werden:

- E-Mail-Adresse
- Passwort beziehungsweise ein von unserem Authentifizierungsdienst verwalteter Passwort-Hash
- Benutzername beziehungsweise Accountname
- Eindeutige Benutzer-ID
- Anmelde- und Kontostatus

Die Authentifizierung erfolgt über Supabase Auth.

Wir speichern dein Passwort nicht im Klartext. Die technische Verarbeitung und Speicherung von Zugangsdaten erfolgt über den verwendeten Authentifizierungsdienst.

### 3.2 Standortdaten und Bewegungsdaten

Da Sombies ein standortbasiertes Spiel ist, benötigt die App gegebenenfalls Zugriff auf den Standort deines Geräts.

Dabei können insbesondere folgende Daten verarbeitet werden:

- Aktuelle geografische Position (GPS-Koordinaten)
- Bewegungsrichtung
- Geschwindigkeit
- Zurückgelegte Strecke
- Zeitpunkte von Standortaktualisierungen

Diese Daten werden verwendet, um die standortbasierten Spielfunktionen bereitzustellen.

Die Standortberechtigung kannst du jederzeit in den Einstellungen deines Geräts ändern oder widerrufen. Ohne Standortzugriff können bestimmte Spielfunktionen möglicherweise nicht oder nur eingeschränkt verwendet werden.

**Wichtig:** [BITTE VOR VERÖFFENTLICHUNG PRÜFEN: Werden Standortdaten ausschließlich auf dem Gerät verarbeitet oder werden GPS-Koordinaten beziehungsweise daraus abgeleitete Bewegungsdaten auch an andere Spieler oder an unsere Server übertragen? Hier muss die tatsächliche Funktionsweise beschrieben werden.]

### 3.3 Spiel- und Kontofortschrittsdaten

Zur Bereitstellung der Spielfunktionen können unter anderem folgende Daten gespeichert werden:

- Accountname
- Spielerlevel
- Erfahrungspunkte (XP)
- Münzen und andere Spielwährungen
- Inventargegenstände
- Saisonfortschritt und Season-Pass-Daten
- Freigeschaltete oder beanspruchte Belohnungen
- Gespeicherte Spielrunden und Spielstände

Ein Teil dieser Daten kann lokal auf deinem Gerät gespeichert werden. Für kontobezogene Funktionen und Backups können Daten außerdem über unsere Server verarbeitet werden.

### 3.4 Multiplayer-Daten

Wenn du Multiplayer-Funktionen verwendest, können Daten verarbeitet werden, die für die Verbindung und Kommunikation mit anderen Spielern erforderlich sind.

Dazu können insbesondere gehören:

- Benutzername beziehungsweise Accountname
- Spieler-ID
- Spielstatus
- Spielbezogene Positionen oder Bewegungsinformationen, soweit für die Multiplayer-Funktion erforderlich
- Informationen über den aktuellen Spielraum beziehungsweise die Spielsession

Für Online-Multiplayer verwendet Sombies Supabase Realtime und weitere Supabase-Dienste.

**Bitte prüfen und ergänzen:** [BESCHREIBUNG DER KONKRET ÜBERTRAGENEN MULTIPLAYER-DATEN UND DEREN SPEICHERDAUER.]

Bei lokalen Multiplayer-Verbindungen über Bluetooth können Daten direkt zwischen den beteiligten Geräten ausgetauscht werden. Welche Daten dabei übertragen werden, richtet sich nach der verwendeten Spielfunktion.

### 3.5 Apple Health

Sombies kann Apple Health beziehungsweise HealthKit verwenden, um Lauftrainings und zugehörige Daten in Apple Health zu speichern.

Dazu können insbesondere gehören:

- Trainingsdaten
- Zurückgelegte Distanz
- Trainingsroute

Die App fordert hierfür die entsprechenden Berechtigungen von Apple Health an.

Nach dem derzeitigen technischen Stand verwendet Sombies HealthKit zum Schreiben von Daten. Ein Auslesen von Gesundheitsdaten ist in der aktuellen Implementierung nicht vorgesehen.

Gesundheitsdaten werden besonders geschützt. Wir verwenden sie ausschließlich für die beschriebenen Funktionen.

**Wichtig:** [BITTE BESTÄTIGEN: Werden Gesundheitsdaten oder Trainingsrouten ausschließlich in Apple Health gespeichert oder werden sie zusätzlich an Supabase beziehungsweise andere Server übertragen? Falls eine Übertragung erfolgt, muss diese hier genau beschrieben werden.]

Du kannst Berechtigungen für Apple Health jederzeit in den Einstellungen deines Geräts verwalten.

## 4. Verwendete Dienste und Empfänger

### 4.1 Supabase

Für die Authentifizierung, Online-Multiplayer-Funktionen und die Speicherung bestimmter Kontodaten und Backups verwenden wir Supabase.

Anbieter:

Supabase Inc.  
[AKTUELLE ANSCHRIFT DES ANBIETERS ERGÄNZEN]

Projektadresse:  
https://hdqubxxsjkucpyxbcjgv.supabase.co

Je nach Funktion können insbesondere Kontodaten, Benutzer-IDs, Spielstände und Multiplayer-Daten verarbeitet werden.

Backups können im Supabase Storage gespeichert werden. Dabei wird ein Backup dem jeweiligen Benutzerkonto zugeordnet.

Die konkrete Speicherung, die eingesetzten Serverstandorte sowie mögliche Unterauftragsverarbeiter richten sich nach den von uns verwendeten Supabase-Diensten und den dazugehörigen Vertragsbedingungen.

Weitere Informationen zum Datenschutz bei Supabase:

https://supabase.com/privacy

**Vor Veröffentlichung ergänzen:**
- Tatsächlicher Hosting-Standort beziehungsweise die konfigurierte Supabase-Region: [REGION]
- Eingesetzte Unterauftragsverarbeiter: [ANGABEN]
- Besteht ein Vertrag zur Auftragsverarbeitung (AV-Vertrag) mit Supabase? [JA/NEIN – PRÜFEN]

### 4.2 Apple

Sombies wird auf Apple-Geräten verwendet und kann Apple Health beziehungsweise HealthKit integrieren.

Die Verarbeitung durch Apple erfolgt zusätzlich nach den Datenschutzbestimmungen von Apple.

Weitere Informationen:

https://www.apple.com/legal/privacy/

## 5. Zwecke und Rechtsgrundlagen der Verarbeitung

Wir verarbeiten personenbezogene Daten insbesondere zu folgenden Zwecken:

| Zweck | Mögliche Rechtsgrundlage |
|---|---|
| Erstellung und Verwaltung eines Benutzerkontos | Art. 6 Abs. 1 lit. b DSGVO |
| Bereitstellung der Spielfunktionen | Art. 6 Abs. 1 lit. b DSGVO |
| Verarbeitung von Standortdaten für standortbasierte Spielfunktionen | Art. 6 Abs. 1 lit. b DSGVO und gegebenenfalls Art. 6 Abs. 1 lit. a DSGVO |
| Online-Multiplayer und Synchronisierung | Art. 6 Abs. 1 lit. b DSGVO |
| Speicherung von Spielständen und Backups | Art. 6 Abs. 1 lit. b DSGVO |
| Speicherung von Trainingsdaten in Apple Health | Art. 6 Abs. 1 lit. a DSGVO in Verbindung mit den erteilten HealthKit-Berechtigungen |

Die jeweils einschlägige Rechtsgrundlage hängt von der konkreten Funktion und ihrer technischen Umsetzung ab.

## 6. Speicherdauer

Personenbezogene Daten werden nur so lange gespeichert, wie dies für die jeweiligen Zwecke erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen.

- Kontodaten werden grundsätzlich so lange gespeichert, wie das Benutzerkonto besteht.
- Spielstände und Fortschrittsdaten werden gespeichert, solange sie für die Bereitstellung des Kontos und der Spielfunktionen benötigt werden.
- Backups werden entsprechend ihrer vorgesehenen Funktion gespeichert.
- Standort- und Bewegungsdaten werden entsprechend der jeweiligen Spielfunktion verarbeitet. [KONKRETE SPEICHERDAUER ERGÄNZEN.]
- Nach einer Kontolöschung werden personenbezogene Daten gelöscht, soweit keine gesetzlichen Aufbewahrungspflichten oder sonstigen zulässigen Gründe für eine weitere Speicherung bestehen.

## 7. Löschung des Benutzerkontos

Du kannst die Löschung deines Benutzerkontos beantragen.

Hierzu kannst du uns unter folgender Adresse kontaktieren:

sake_haze3b@icloud.com

Bei einer Kontolöschung werden die mit deinem Konto verbundenen personenbezogenen Daten und Spielstände gelöscht, soweit keine gesetzlichen Aufbewahrungspflichten oder sonstigen rechtmäßigen Gründe für eine weitere Speicherung bestehen.

**Vor Veröffentlichung ergänzen:** [BESCHREIBUNG DES TATSÄCHLICHEN LÖSCHPROZESSES, INSBESONDERE SUPABASE-AUTH-KONTO, DATENBANKDATEN UND BACKUPS.]

## 8. Weitergabe von Daten

Wir verkaufen personenbezogene Daten nicht.

Eine Weitergabe erfolgt nur, soweit dies für den Betrieb der App erforderlich ist, eine rechtliche Verpflichtung besteht oder eine andere zulässige Rechtsgrundlage vorliegt.

Empfänger können insbesondere technische Dienstleister sein, die wir für Authentifizierung, Hosting, Speicherung und Multiplayer-Funktionen einsetzen.

## 9. Datenübermittlung in Drittländer

Bei der Nutzung von externen Diensten kann eine Verarbeitung personenbezogener Daten außerhalb der Europäischen Union beziehungsweise des Europäischen Wirtschaftsraums nicht ausgeschlossen werden.

Sofern personenbezogene Daten in ein Drittland übermittelt werden, erfolgt dies nur unter Beachtung der Voraussetzungen der Art. 44 ff. DSGVO.

Die konkreten Übermittlungsmechanismen und Garantien sind anhand der eingesetzten Dienstleister und deren Vertragsbedingungen zu prüfen.

## 10. Deine Rechte

Du hast nach Maßgabe der DSGVO insbesondere folgende Rechte:

- Recht auf Auskunft gemäß Art. 15 DSGVO
- Recht auf Berichtigung gemäß Art. 16 DSGVO
- Recht auf Löschung gemäß Art. 17 DSGVO
- Recht auf Einschränkung der Verarbeitung gemäß Art. 18 DSGVO
- Recht auf Datenübertragbarkeit gemäß Art. 20 DSGVO
- Recht auf Widerspruch gemäß Art. 21 DSGVO
- Recht auf Widerruf erteilter Einwilligungen mit Wirkung für die Zukunft gemäß Art. 7 Abs. 3 DSGVO

Zur Ausübung deiner Rechte kannst du uns kontaktieren:

sake_haze3b@icloud.com

Außerdem hast du das Recht, dich bei einer Datenschutz-Aufsichtsbehörde zu beschweren.

## 11. Berechtigungen des Geräts

Sombies kann abhängig von den verwendeten Funktionen folgende Berechtigungen anfordern:

- **Standort:** Für standortbasierte Spielfunktionen.
- **Bluetooth beziehungsweise lokale Netzwerkfunktionen:** Für lokale Multiplayer-Verbindungen, soweit verwendet.
- **Apple Health:** Zum Speichern von Trainingsdaten und Trainingsrouten.

Du kannst Berechtigungen jederzeit in den Systemeinstellungen deines Geräts verwalten. Das Deaktivieren bestimmter Berechtigungen kann dazu führen, dass einzelne Funktionen nicht mehr verfügbar sind.

## 12. Datensicherheit

Wir setzen angemessene technische und organisatorische Maßnahmen ein, um personenbezogene Daten vor Verlust, Missbrauch, unbefugtem Zugriff und unberechtigter Offenlegung zu schützen.

Eine vollständige Sicherheit der Datenübertragung und Datenspeicherung kann jedoch nicht garantiert werden.

## 13. Änderungen dieser Datenschutzerklärung

Wir behalten uns vor, diese Datenschutzerklärung anzupassen, wenn sich die App, die verwendeten Dienste oder die rechtlichen Anforderungen ändern.

Die jeweils aktuelle Version wird unter folgender Adresse veröffentlicht:

[URL ZUR DATENSCHUTZERKLÄRUNG]

## 14. Kontakt

Bei Fragen zum Datenschutz oder zur Verarbeitung deiner personenbezogenen Daten kannst du uns jederzeit kontaktieren:

**Simon Ströbele**
E-Mail: [sake_haze3b@icloud.com](mailto:sake_haze3b@icloud.com)
