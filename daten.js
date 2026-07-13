/* =========================================================================
   Baustoffkunde – Lerninhalte (Karteikarten + Prüfungsfragen)
   Quelle: Vorlesung Prof. Dr.-Ing. M. Ayoubi (Teil 1 & Teil 2) + Fragenkatalog
   =========================================================================*/

/* ---- FÄCHER (Reiter) ---- */
const FAECHER = ["Baustoffkunde", "Bauphysik"];

/* ---- THEMENGEBIETE ----
   fach = zu welchem Reiter das Thema gehört  */
const THEMEN = [
  /* === BAUSTOFFKUNDE === */
  { id: "holz-aufbau",   name: "Holz · Aufbau & Anatomie",     fach: "Baustoffkunde", farbe: "#3f9a5c" },
  { id: "holz-feuchte",  name: "Holz · Feuchte & Dichte",      fach: "Baustoffkunde", farbe: "#3f9a5c" },
  { id: "holz-mechanik", name: "Holz · Mechanik & Verformung", fach: "Baustoffkunde", farbe: "#3f9a5c" },
  { id: "holz-schutz",   name: "Holz · Schäden & Schutz",      fach: "Baustoffkunde", farbe: "#3f9a5c" },
  { id: "holz-sortier",  name: "Holz · Bauholz & Sortierung",  fach: "Baustoffkunde", farbe: "#3f9a5c" },
  { id: "holz-werkstoff",name: "Holz · BSH & Holzwerkstoffe",  fach: "Baustoffkunde", farbe: "#3f9a5c" },
  { id: "stahl-herst",   name: "Stahl · Herstellung & Gefüge", fach: "Baustoffkunde", farbe: "#4a7bb5" },
  { id: "stahl-waerme",  name: "Stahl · Wärmebehandlung",      fach: "Baustoffkunde", farbe: "#4a7bb5" },
  { id: "stahl-eig",     name: "Stahl · Eigenschaften/Prüfung",fach: "Baustoffkunde", farbe: "#4a7bb5" },
  { id: "stahl-korr",    name: "Stahl · Korrosion",            fach: "Baustoffkunde", farbe: "#4a7bb5" },
  { id: "stahl-beton",   name: "Stahl · Beton- & Spannstahl",  fach: "Baustoffkunde", farbe: "#4a7bb5" },
  { id: "grundlagen",    name: "Grundlagen · Mechanik/Kennwerte", fach: "Baustoffkunde", farbe: "#b5793f" },
  { id: "bk-rechnen",    name: "Rechnen · Formeln & Aufgaben", fach: "Baustoffkunde", farbe: "#b5793f" },

  /* === BAUPHYSIK === */
  { id: "bp-waerme",     name: "Wärme · Grundlagen & Transport", fach: "Bauphysik", farbe: "#d98a3d" },
  { id: "bp-waerme-rech",name: "Wärme · R, U & Nachweis (Formeln)", fach: "Bauphysik", farbe: "#c56f3c" },
  { id: "bp-feuchte",    name: "Feuchte · Luftfeuchte & Tauwasser", fach: "Bauphysik", farbe: "#3d96a8" },
  { id: "bp-feuchte-tr", name: "Feuchte · Diffusion, µ & Nachweis", fach: "Bauphysik", farbe: "#3f77a8" },
  { id: "bp-schall",     name: "Schallschutz",                 fach: "Bauphysik", farbe: "#8a6bb0" },
  { id: "bp-brand",      name: "Brandschutz",                  fach: "Bauphysik", farbe: "#c0453f" }
];

/* ---- KARTEIKARTEN ----
   f = Vorderseite (Frage/Begriff), b = Rückseite (Antwort), t = ThemenID  */
const KARTEN = [
  /* ================= HOLZ – AUFBAU & ANATOMIE ================= */
  { t:"holz-aufbau", f:"Wodurch wächst ein Baum in die Dicke?", b:"Durch das <b>sekundäre Dickenwachstum</b>: Zellteilung des Kambiums. Neue Zellen werden nach innen (Holz) und außen (Bast) abgeschoben." },
  { t:"holz-aufbau", f:"Was ist das Kambium?", b:"Eine extrem schmale, <b>teilungsfähige Zellschicht</b> zwischen Holz und Rinde. Es erzeugt das Dickenwachstum." },
  { t:"holz-aufbau", f:"Unterschied Frühholz ↔ Spätholz", b:"<b>Frühholz</b>: im Frühjahr, dünnwandige, großporige (weitlumige) Zellen → schneller Wassertransport.<br><b>Spätholz</b>: im Sommer, dickwandige, englumige Zellen (dunkel) → sorgt für die Festigkeit." },
  { t:"holz-aufbau", f:"Unterschied Kernholz ↔ Splintholz", b:"<b>Splintholz</b>: lebend, äußere Randzone, weich & hell, Nährstofftransport.<br><b>Kernholz</b>: abgestorben, Stamminneres, dicke Zellwände, schwerer & härter, dunkel, keine Wasserführung (Einlagerung von Harzen, Gerbstoffen → höhere Dauerhaftigkeit)." },
  { t:"holz-aufbau", f:"Wie breit ist ein Jahrring typischerweise – und wovon hängt er ab?", b:"<b>1 bis 6 mm</b>, stark umweltabhängig. Eng aneinander = feinjähriges Holz, sehr breit = grobjähriges Holz. Rohdichte und Festigkeit werden wesentlich von der Jahrringbreite beeinflusst." },
  { t:"holz-aufbau", f:"Was sind Holz-/Markstrahlen?", b:"Helle, feine Linien (≤ 1 mm Breite), die aus der Stammmitte <b>radial nach außen</b> verlaufen. Sie sorgen für den radialen Transport von Wasser und Nährstoffen." },
  { t:"holz-aufbau", f:"Wofür dienen Harzkanäle?", b:"Sie verlaufen längs und quer zur Stammachse und dienen dem <b>Harztransport</b>. Wunden werden verklebt → der Baum wird geschützt. (Nicht in allen Holzarten vorhanden.)" },
  { t:"holz-aufbau", f:"Was ist die Markröhre (Mark)?", b:"Speichergewebe im jungen Spross (Fett, Stärke), Durchmesser meist nur wenige mm. Stirbt relativ früh ab (Ausnahme Birke, Buche, Erle bis ~10 Jahre)." },
  { t:"holz-aufbau", f:"Die 3 Hauptbestandteile der Holzsubstanz (92–98 M.-%)", b:"<b>Zellulose, Hemizellulose und Lignin.</b> Dazu 2–8 M.-% Extraktstoffe & anorganische Bestandteile." },
  { t:"holz-aufbau", f:"Welche Aufgabe hat Zellulose im Holz?", b:"Bildet die <b>Gerüstsubstanz</b> der Zellwand (aus Glucose-Einheiten / Polysacchariden). Verantwortlich vor allem für die <b>Zugfestigkeit</b> des Holzes." },
  { t:"holz-aufbau", f:"Welche Aufgabe hat Lignin im Holz?", b:"Umhüllt und durchdringt das Gerüst aus Zellulose/Hemizellulose → <b>Verholzung (Lignifizierung)</b>. Versteift die Zellwand, sorgt für die <b>Druckfestigkeit</b> und schützt vor Wind/Schädlingen." },
  { t:"holz-aufbau", f:"Welche Aufgabe hat Hemizellulose?", b:"Aus Zuckereinheiten aufgebaut (kürzere, verzweigte Ketten) → sorgt für die <b>Verbindung zwischen Zellulose und Lignin</b>." },
  { t:"holz-aufbau", f:"Woraus besteht das Xylem bei Nadelholz – und wie viel Anteil?", b:"Hauptsächlich aus <b>Tracheiden</b> (wasserleitende Zellen): lang (2–5 mm), dünn (10–50 µm), 90–95 % des Körperanteils. Dazu Markstrahlen für die radiale Versorgung." },
  { t:"holz-aufbau", f:"Wie transportiert Laubholz Wasser (statt über Tracheiden)?", b:"Über <b>Tracheen (Gefäße, Poren)</b> – weitlumige Gefäße mit großem Durchmesser. Laubholz hat mehr Zelltypen und größere Arbeitsteilung als Nadelholz." },
  { t:"holz-aufbau", f:"Was bedeutet ringporig ↔ zerstreutporig?", b:"Anordnung der Gefäße (Poren) bei Laubhölzern.<br><b>Ringporig</b>: große Poren gehäuft im Frühholzring (z.B. Eiche, Rüster).<br><b>Zerstreutporig</b>: Poren gleichmäßig über den Jahrring verteilt (z.B. Buche)." },
  { t:"holz-aufbau", f:"Die 3 wichtigen Schnittrichtungen im Holz", b:"<b>Querschnitt (Hirnholz)</b>: Jahrringe/Holzstrahlen gut sichtbar → Holzartenbestimmung.<br><b>Radialschnitt (Spiegelschnitt)</b>: durch die Mitte des Stammes.<br><b>Tangentialschnitt (Fladerschnitt)</b>: außerhalb der Mitte, bogenförmige Jahrringlinien = Fladerung." },

  /* ================= HOLZ – FEUCHTE & DICHTE ================= */
  { t:"holz-feuchte", f:"Formel & Definition der Holzfeuchte u", b:"u = (m<sub>feucht</sub> − m<sub>trocken</sub>) / m<sub>trocken</sub> · 100 [M.-%]<br>Massebezogene Feuchte = Wassermenge bezogen auf die Masse der <b>trockenen</b> Probe (nicht der feuchten!)." },
  { t:"holz-feuchte", f:"Welche Feuchte hat frisch geschlagenes Holz?", b:"<b>40 bis 60 M.-%</b> (Extremfall Splintholz der Tanne bis 200 M.-%)." },
  { t:"holz-feuchte", f:"Was ist der Fasersättigungspunkt (FSP)?", b:"Zustand, in dem die Zellwände vollständig mit gebundenem Wasser gesättigt sind, aber noch <b>kein freies Wasser</b> in den Zellhohlräumen ist. Europäische Hölzer: <b>18–35 M.-%</b>, im Mittel ~30 M.-%." },
  { t:"holz-feuchte", f:"Was ist die Gleichgewichts-/Ausgleichsfeuchte?", b:"Die Holzfeuchte, bei der Holz aus dem Umgebungsklima <b>weder Feuchte aufnimmt noch abgibt</b>. Sie ist nicht konstant, sondern hängt von der relativen Luftfeuchte ab. Bauholz-Bereich meist u = 12–18 %." },
  { t:"holz-feuchte", f:"Charakteristische Holzfeuchte in den Nutzungsklassen (NKL)", b:"<b>NKL 1</b>: ~12 % (T=20°C, φ=65 %)<br><b>NKL 2</b>: ~20 % (φ ≤ 85 %)<br><b>NKL 3</b>: 12–24 % (höhere Feuchten als NKL 2, z.B. Außen/Wasser)." },
  { t:"holz-feuchte", f:"Wie wird die Holzfeuchte im Darrverfahren bestimmt? (DIN EN 13183-1)", b:"Probe im Trockenschrank bei <b>T = 103 °C</b> bis zur Gewichtskonstanz trocknen (Wasser vollständig entzogen). Feuchte über das Trockengewicht ermitteln. Dauer ~12–24 h. Beim Darren nehmen die Abmessungen durch Schwinden ab." },
  { t:"holz-feuchte", f:"Definition & Formel der Dichte (Reindichte) ρ", b:"ρ = m / V &nbsp;[kg/m³], mit V = Stoffvolumen <b>ohne Poren</b>. Die Reindichte der Zellwände ist bei allen Holzarten fast gleich (~1550 kg/m³). Vergleich: Wasser 1000, Glas 2500, Stahl 7850 kg/m³." },
  { t:"holz-feuchte", f:"Definition & Formel der Rohdichte ρ_R", b:"ρ<sub>R</sub> = m / V<sub>R</sub> &nbsp;[kg/m³], mit V<sub>R</sub> = Gesamtvolumen <b>einschließlich Poren</b>. Drückt den Porengehalt aus. Holz ~400–800 kg/m³. Angabe nach DIN EN 384 bei Normalklima (u ≈ 12 %)." },
  { t:"holz-feuchte", f:"Rohdichte-Extremwerte im Holz", b:"<b>Balsaholz ~130 kg/m³</b> und <b>Pockholz ~1230 kg/m³</b> – entspricht Gesamtporigkeiten von ca. 92 bis 21 Vol.-%. Stärkster Einflussfaktor auf die Rohdichte ist die Holzart." },
  { t:"holz-feuchte", f:"Definition & Formel der Porigkeit (Porosität) P", b:"P = V<sub>Poren</sub> / V<sub>R</sub> · 100 [Vol.-%]. Anteil der Poren am Gesamtvolumen.<br>Feststoffanteil d = ρ<sub>R</sub>/ρ · 100 %; &nbsp; p = (1 − ρ<sub>R</sub>/ρ) · 100 %." },
  { t:"holz-feuchte", f:"Rechenbeispiel: Porenanteil von Balsaholz (ρ_R=130, ρ=1550)", b:"d = 130/1550 · 100 = <b>8,4 %</b> (Feststoffanteil)<br>p = 100 − 8,4 = <b>91,6 %</b> (Porenanteil)." },
  { t:"holz-feuchte", f:"Was ist Adsorption im Holz?", b:"Anlagerung von Wassermolekülen an Oberflächen hygroskopischer Stoffe. Bei niedriger Luftfeuchte in monomolekularen Schichten, bei steigendem Dampfdruck in multimolekularen Schichten." },
  { t:"holz-feuchte", f:"Definition Schüttdichte ρ_s", b:"ρ<sub>s</sub> = m / V<sub>Gefäß</sub> [kg/m³] – Masse bezogen auf das <b>Gefäßvolumen</b> (inkl. Zwischenräume der Schüttung). Z.B. Zement 900–1900 kg/m³. Abhängig von der Korngröße des Schüttguts." },

  /* ================= HOLZ – MECHANIK & VERFORMUNG ================= */
  { t:"holz-mechanik", f:"Rangfolge der Festigkeiten von Holz (bezogen auf Zugfestigkeit ∥ Faser)", b:"<b>Zug &gt; Biege &gt; Druck &gt; Scher</b><br>Druckfestigkeit ≈ 50 % · Biegefestigkeit ≈ 80 % · Scherfestigkeit ≈ 10 % der Zugfestigkeit. Zug ist ~2× so groß wie Druck." },
  { t:"holz-mechanik", f:"Warum ist Holz anisotrop?", b:"Wegen der Ausrichtung der Zellulosefasern. Eigenschaften unterscheiden sich stark je Richtung: parallel zur Faser deutlich fester als quer. Quer zur Faser große Verformungen." },
  { t:"holz-mechanik", f:"Zusammenhang Rohdichte ↔ Festigkeit", b:"Es besteht ein <b>linearer Zusammenhang</b>: je größer die Rohdichte, desto größer die Festigkeit (mehr Zellwandsubstanz). Gilt für Zug- und Druckfestigkeit." },
  { t:"holz-mechanik", f:"Wie beeinflusst die Holzfeuchte die Festigkeit? (im hygroskopischen Bereich)", b:"Feuchtezunahme bis FSP (~30 %) <b>vermindert Festigkeit und E-Modul</b>. Die <b>Druckfestigkeit</b> wird viel stärker beeinflusst als die Zugfestigkeit (Wasser vergrößert Micellenabstand → Kohäsionskräfte quer zur Faser sinken)." },
  { t:"holz-mechanik", f:"Nadelholz ↔ Laubholz: Druckfestigkeit", b:"<b>Laubholz &gt; Nadelholz</b> – Laubholz hat i.d.R. die höhere Dichte und damit die höhere Druckfestigkeit." },
  { t:"holz-mechanik", f:"Hooksches Gesetz – Formel & Bedeutung", b:"σ = E · ε &nbsp;(im linear-elastischen Bereich).<br>Proportionaler Zusammenhang zwischen Spannung σ und Dehnung ε. E = Elastizitätsmodul = Materialkennwert für das linear-elastische Verhalten." },
  { t:"holz-mechanik", f:"Definition der Dehnung ε", b:"ε = Δl / l₀ – relative Längenänderung eines Körpers unter Belastung. <b>Dimensionslos</b> und unabhängig von der Anfangslänge → beschreibt die Materialeigenschaft." },
  { t:"holz-mechanik", f:"Zug-/Druckspannung – Formel", b:"σ = F / A &nbsp;[N/mm²]. Spannung = Kraft pro Querschnittsfläche. Die <b>flächenunabhängige</b> Kenngröße für den Belastungsgrad → erlaubt Materialvergleich (Index t = Zug, c = Druck)." },
  { t:"holz-mechanik", f:"Schwinden & Quellen – was passiert und ab wann?", b:"„Arbeiten“ des Holzes: Feuchteänderung <b>unterhalb des FSP</b> ändert die Maße (Zellwände ziehen sich zusammen/quellen). Freies Wasser hat <b>keinen Einfluss</b>. Unterhalb FSP verläuft die Kurve linear." },
  { t:"holz-mechanik", f:"Verhältnis Schwinden/Quellen in den 3 Raumrichtungen (Nadelholz)", b:"längs : radial : tangential ≈ <b>1 : 10 : 20</b>. Die tangentiale Maßänderung ist am größten (dickere Spätholz-Zellwände ändern sich stärker)." },
  { t:"holz-mechanik", f:"Unterschied Quelldehnung ↔ Schwinddehnung (Bezugslänge)", b:"Quelldehnung ε<sub>Q</sub> = Δl/l₀ &nbsp;(bezogen auf <b>darrtrockene</b> Länge l₀).<br>Schwinddehnung ε<sub>s</sub> = Δl/l<sub>w</sub> &nbsp;(bezogen auf <b>nasse</b> Länge l<sub>w</sub>)." },
  { t:"holz-mechanik", f:"Was ist Kriechen?", b:"Zeitabhängige <b>Verformungszunahme unter gleichbleibender (Dauer-)Last</b>. Nimmt zu mit Holzfeuchte, Temperatur, Last und dünnem Querschnitt. Bei Druck & Biegung größer als bei Zug." },
  { t:"holz-mechanik", f:"Formel der Kriechzahl φ", b:"φ = ε<sub>k</sub> / ε<sub>el</sub> &nbsp;(Kriechdehnung / elastische Dehnung). Je größer der Winkel zwischen Last- und Faserrichtung, desto größer φ (senkrecht ~8× größer als parallel)." },
  { t:"holz-mechanik", f:"Was ist (Spannungs-)Relaxation?", b:"Zeitabhängige <b>Spannungsabnahme bei konstant gehaltener Verformung</b>. Beispiel: Verstimmen von Saiteninstrumenten, Nachlassen einer Schraubzwinge." },
  { t:"holz-mechanik", f:"Biegespannung im Einfeldträger (mittige Einzellast) – Formel", b:"σ = M / W = (F·l/4) / (b·h²/6) [N/mm²].<br>M = F·l/4 (Moment bei mittiger Einzellast), W = b·h²/6 (Widerstandsmoment Rechteck). Hochkant ergibt größeren Widerstand." },
  { t:"holz-mechanik", f:"Biegemoment bei Gleichlast q (Einfeldträger)", b:"M = q·l²/8. Eingesetzt in σ = M/W mit W = b·h²/6 für Rechteckquerschnitt." },
  { t:"holz-mechanik", f:"Dauerstandfestigkeit von Holz", b:"Relativ gering: <b>weniger als 60 %</b> der Kurzzeitfestigkeit (fehlerfreie Fichte, trockenes Innenklima ~50 %, teils 40–50 %). Bei ungünstigem Klima noch geringer." },
  { t:"holz-mechanik", f:"Wovon hängt die Härte des Holzes ab? (Brinell)", b:"Von Holzart, Rohdichte und Feuchte. In Faserrichtung ~2× so groß wie quer. <b>Sinkende Feuchte → höhere Härte</b> (Maximum im darrtrockenen Zustand). Einteilung in Weich-, mittelharte und sehr harte Hölzer." },

  /* ================= HOLZ – SCHÄDEN & SCHUTZ ================= */
  { t:"holz-schutz", f:"Die zwei zentralen Parameter für biologischen Holzbefall", b:"<b>Holzfeuchte und Temperatur.</b> Holzzerstörende Pilze brauchen mindestens ~20 M.-% Feuchte." },
  { t:"holz-schutz", f:"Einteilung der holzzerstörenden Pilze nach Fäuletyp", b:"<b>Braunfäule (BF)</b>, <b>Weißfäule (WF)</b>, <b>Moderfäule (MF)</b>." },
  { t:"holz-schutz", f:"Braunfäule – was wird abgebaut, wie sieht es aus?", b:"Abbau von <b>Cellulose und Hemicellulose</b>; das braune Lignin bleibt → Holz wird braun. Führt zu Rohdichte-/Festigkeitsverlust, typischer <b>Würfelbruch</b> (Risse längs & quer). Erreger u.a. Echter Hausschwamm." },
  { t:"holz-schutz", f:"Weißfäule – was wird abgebaut, wie sieht es aus?", b:"Pilze bauen den „braunen“ Holzinhaltsstoff <b>Lignin</b> ab. Holz lockert fasrig auf, verfärbt sich hell/weiß. Volumenschwindung & Verformung meist gering. Tritt oft an lebenden Bäumen auf." },
  { t:"holz-schutz", f:"Moderfäule (MF) – wann tritt sie auf?", b:"Bei <b>sehr hohen Holzfeuchten im Erdkontakt</b> oder starken Verunreinigungen. Vor allem <b>Zellulose</b>-Abbau, kavernenartige Erscheinungen, feiner schollenartiger Würfelbruch. Laubholz stärker gefährdet als Nadelholz." },
  { t:"holz-schutz", f:"Was bewirken Bläuepilze (holzverfärbende Pilze)?", b:"Nur <b>Verfärbung</b> (bläulich), <b>kein Abbau der Zellwände</b> → i.d.R. kein Festigkeitsverlust. Sie ernähren sich nur von Splintholz-Inhaltsstoffen (nicht Lignin/Cellulose). Brauchen ~40–180 % Feuchte, 15–35 °C." },
  { t:"holz-schutz", f:"Echter Hausschwamm – warum so gefährlich?", b:"Braunfäule mit grobem Würfelbruch; besitzt ein Oberflächen-/Strangsystem, kann Wasser transportieren, meterweit Holz überwuchern und <b>Mauerwerk durchwachsen</b>. Sanierung besonders aufwendig." },
  { t:"holz-schutz", f:"Wichtige holzzerstörende Insekten (Trockenholz)", b:"<b>Gewöhnlicher Nagekäfer</b> (Anobium, Loch 1–2 mm), <b>Hausbock</b> (Nadel-Splintholz, ovales Loch ~4×7 mm), <b>Brauner Splintholzkäfer</b> (Lyctus, stärkehaltiges Laubholz). Zerstörung durch die <b>Larven</b>." },
  { t:"holz-schutz", f:"Was ist baulicher (konstruktiver) Holzschutz?", b:"Konstruktive Maßnahmen zur Vermeidung von <b>Feuchteanreicherung</b>: Einbau von trockenem Holz (u ≤ 20 %), Schutz vor Niederschlag/Spritzwasser/Tauwasser, Dachüberstand, Tropfkanten, Hirnholzschutz. (Nicht chemisch!)" },
  { t:"holz-schutz", f:"Baulicher Holzschutz: Höhe des Spritzwasserschutzes am Sockel", b:"Mindestens <b>30 cm</b> hoher Schutz gegen Spritzwasser. Der Sockel einer Holzfassade/Stütze ist besonders feuchteanfällig." },
  { t:"holz-schutz", f:"Was ist chemischer Holzschutz?", b:"Einsatz von <b>Holzschutzmitteln</b> (z.B. Bor-/Fluor-Salze) durch Imprägnieren, Bohrlochtränkung, Spritz-/Schaumverfahren. Nach Reihe DIN 68800. (Im Gegensatz zum baulichen Holzschutz.)" },
  { t:"holz-schutz", f:"Aufgaben der Oberflächenbehandlung/Beschichtung von Holz", b:"Dekorative Wirkung, Schutz vor Auffeuchtung, Schutz vor holzzerstörenden Organismen und Schutz vor <b>UV-Strahlung</b>." },
  { t:"holz-schutz", f:"Chemische Beständigkeit von Holz (pH-Bereich)", b:"Im Bereich <b>2 &lt; pH &lt; 11</b> ist die Holzkorrosion gering. Nur stark saure/alkalische Lösungen wirken korrosiv. Nadelhölzer sind korrosionsfester als Laubhölzer." },

  /* ================= HOLZ – BAUHOLZ & SORTIERUNG ================= */
  { t:"holz-sortier", f:"Die 3 visuellen Sortierklassen nach DIN 4074-1 (Nadelschnittholz)", b:"<b>S7</b> (geringe Tragfähigkeit), <b>S10</b> (normal), <b>S13</b> (hohe Tragfähigkeit). Die Zahl gibt die zulässige Biegespannung an → S7 = mind. 7 N/mm² Biegefestigkeit." },
  { t:"holz-sortier", f:"Zuordnung visuelle ↔ maschinelle Sortierklasse / Festigkeitsklasse", b:"S7 → C16(M), S10 → C24(M), S13 → C30(M). (M = maschinelle Sortierung, C = Festigkeitsklasse nach DIN EN 338.)" },
  { t:"holz-sortier", f:"Welche Merkmale werden bei der visuellen Sortierung geprüft?", b:"U.a. Äste, Faserneigung, Markröhre, Jahrringbreite, Risse, Baumkante, Krümmung, Verfärbungen/Fäule, Druckholz, Insektenfraß." },
  { t:"holz-sortier", f:"Welche Risse sind generell NICHT zulässig?", b:"<b>Blitzrisse und Ringschäle</b> – sie sind bereits am Rundholz vorhanden und in keiner Sortierklasse zulässig. Schwindrisse (bei der Trocknung entstanden) sind begrenzt zulässig." },
  { t:"holz-sortier", f:"Wie wird die Ästigkeit A bestimmt?", b:"Relative Bezugsgröße: A = a/h (Ast auf größerer Seite) bzw. A = a/b (Schmalseite). Der <b>ungünstigste Wert ist maßgebend</b>; a = kleinster sichtbarer Durchmesser (Astmaße &lt; 5 mm zählen nicht)." },
  { t:"holz-sortier", f:"Faserneigung – Grenzwerte für Kanthölzer (S7/S10/S13)", b:"S7: bis 12 % · S10: bis 12 % · S13: bis 7 %. <b>Kleinere Faserneigung → höhere Tragfähigkeit.</b> Messung z.B. mit Reißnadel (DIN EN 1309-3)." },
  { t:"holz-sortier", f:"Markröhre – Zulässigkeit je Sortierklasse", b:"S7: zulässig · S10: zulässig · <b>S13: nicht zulässig.</b> Kriterium ist nur Vorhandensein ja/nein (gilt auch bei teilweisem Verlauf im Querschnitt)." },
  { t:"holz-sortier", f:"Was ist Druckholz?", b:"Reaktionsholz der Nadelhölzer auf der Unterseite schiefstehender Stämme/Äste. Merkmale: rötliche Färbung, <b>erhöhte Lignineinlagerung</b>, erhöhte Rohdichte, verstärktes Schwindmaß in axialer Richtung." },
  { t:"holz-sortier", f:"Schnittholzeinteilung nach DIN 4074-1 (Latte, Brett, Bohle, Kantholz)", b:"<b>Latte</b>: d ≤ 40 mm, b &lt; 80 mm<br><b>Brett</b>: d ≤ 40 mm, b ≥ 80 mm<br><b>Bohle</b>: d &gt; 40 mm, b &gt; 3d<br><b>Kantholz</b>: b ≤ h ≤ 3b, b &gt; 40 mm" },
  { t:"holz-sortier", f:"Definition Schnittholz (DIN 4074-1)", b:"Holzerzeugnis von <b>mind. 6 mm Dicke</b>, hergestellt durch Sägen oder Spanen von Rundholz <b>parallel zur Stammachse</b>." },
  { t:"holz-sortier", f:"Vorteile Nadelholz ↔ Laubholz als Baustoff", b:"<b>Nadelholz</b>: leichter, geringeres Schwinden/Quellen, preiswerter, gleichmäßiger Wuchs, einfache Bearbeitung.<br><b>Laubholz</b>: höhere Dichte/Härte/Druckfestigkeit, schlankere Konstruktionen, höhere Lochlaibungsfestigkeit (Anschlüsse)." },
  { t:"holz-sortier", f:"Vor-/Nachteile Rundholz gegenüber Schnittholz", b:"<b>+</b> Ausnutzung des Querschnitts, ungestörter Faserverlauf, höhere Tragfähigkeit.<br><b>−</b> aufwendige Verbindungen, schwerer Transport, veränderliche Querschnittsfläche. Einbau i.d.R. mit u ≤ 20 %." },

  /* ================= HOLZ – BSH & HOLZWERKSTOFFE ================= */
  { t:"holz-werkstoff", f:"Was ist Brettschichtholz (BSH / GL)?", b:"Aus mind. <b>3 parallel in Längsrichtung geschichteten, verklebten Vollholz-Lamellen</b> (Brettern). Standard aus Fichte, Bretter ~33 mm dick, getrocknet auf 12–15 %, keilgezinkt." },
  { t:"holz-werkstoff", f:"Vorteile von Brettschichtholz gegenüber Vollholz", b:"Größere Querschnitte/Spannweiten, gekrümmte & tordierte Bauteile, bessere Holzausnutzung (schlanker), <b>geringere Formänderung bei Feuchtewechsel</b>, hochwertige Oberfläche, leicht bearbeitbar." },
  { t:"holz-werkstoff", f:"Homogener ↔ kombinierter Aufbau bei BSH", b:"<b>Homogen (h)</b>: alle Lamellen derselben Sortierklasse.<br><b>Kombiniert (c)</b>: Lamellen unterschiedlicher Sortierklassen – höherwertige außen (Rand-Zugzone), geringerwertige innen. GL = Glulam." },
  { t:"holz-werkstoff", f:"Besonderheiten von Baufurniersperrholz (BFU) ggü. Bauschnittholz", b:"Durch <b>kreuzweise Verleimung</b> der Furnierlagen: Kraftübertragung in zwei Richtungen und <b>verringerte Anisotropie</b> → höhere Dimensionsstabilität, weniger Schwinden/Quellen." },
  { t:"holz-werkstoff", f:"Was sind Holzwerkstoffe? (Definition)", b:"Industriell gefertigte Werkstoffe, hergestellt durch <b>Zerkleinern von Holz</b> und Zusammenfügen der Strukturelemente (mit/ohne Bindemittel). Größe/Form der Partikel bestimmen Art und Eigenschaften." },
  { t:"holz-werkstoff", f:"Vorteile von Holzwerkstoffen ggü. Bauschnittholz", b:"Bessere Rohstoffausnutzung, große Homogenität und <b>verringerte Anisotropie</b>, erhöhte Dauerhaftigkeit, formstabiler, teils besserer Feuerwiderstand, viele Formen/Dimensionen. Nachteil: mögliche Schadstoffe, mehr Energieeinsatz." },
  { t:"holz-werkstoff", f:"Nass- ↔ Trockenverfahren (Faserplatten)", b:"<b>Nassverfahren</b>: ohne Bindemittel, Bindung über holzeigenes <b>Lignin</b> (Verfilzung) unter hohem Pressdruck.<br><b>Trockenverfahren</b>: getrocknete, geleimte Fasern → Zugabe von Klebstoff/Bindemittel nötig." },
  { t:"holz-werkstoff", f:"Was ist Brettsperrholz (BSP / CLT)?", b:"Flächiges Massivholzprodukt aus mind. <b>3 rechtwinklig zueinander verklebten Brettlagen</b> aus Nadelschnittholz. Zählt zu den Massivholzbauweisen; Formate bis 4,8 × 20 m." },
  { t:"holz-werkstoff", f:"Was ist Furnierschichtholz (FSH)?", b:"Aus ca. 3 mm dicken <b>Schälfurnieren</b> aus Nadelholz, mit Phenolharz verklebt. Faserverlauf überwiegend <b>parallel</b> zur Längsrichtung (ggf. wenige Querlagen). Balken- und plattenförmig." },
  { t:"holz-werkstoff", f:"Anorganische ↔ organische Bindemittel für Holzwerkstoffe", b:"<b>Anorganisch</b> (Gips, Zement, Magnesit): thermisch stabil, nicht brennbar, schädlingsresistent.<br><b>Organisch</b> (UF, MF, PF, PMDI-Harze): geringere Rohdichte, hohe Festigkeit – aber ggf. Formaldehydabgabe." },
  { t:"holz-werkstoff", f:"Warum ist Formaldehyd bei Holzwerkstoffen relevant?", b:"Seit 2014 als „kann Krebs erzeugen“ eingestuft. Emissionsarme Werkstoffe halten den Grenzwert (0,05 ppm) ein; formaldehydarme (RAL-Umweltzeichen) max. 0,1 ppm Ausgleichskonzentration." },

  /* ================= STAHL – HERSTELLUNG & GEFÜGE ================= */
  { t:"stahl-herst", f:"Definition Stahl (DIN EN 10020)", b:"Eisenwerkstoff mit <b>bis zu 2 % Kohlenstoff</b>. Eisenwerkstoffe = Werkstoffe, deren Massenanteil an Eisen von keinem anderen Element übertroffen wird." },
  { t:"stahl-herst", f:"Roheisen ↔ Gusseisen ↔ Stahl (C-Gehalt)", b:"<b>Roheisen</b>: ~5 % C (aus Hochofen).<br><b>Gusseisen</b>: ~2–3 % C, niedriger Schmelzpunkt (~1200 °C), gut gießbar, spröder.<br><b>Stahl</b>: bis 2 % C, schmiedbar/schweißbar." },
  { t:"stahl-herst", f:"Was ist „Frischen“?", b:"Vorgang, bei dem der Gehalt an <b>Kohlenstoff und unerwünschten Begleitelementen</b> (z.B. Schwefel, Phosphor) des Roheisens durch <b>Oxidation</b> gesenkt wird. Baustähle danach ~0,1–0,5 % C." },
  { t:"stahl-herst", f:"Die zwei Verfahren der Stahlerzeugung", b:"<b>Sauerstoffblasverfahren</b> (~60 % weltweit, Konverter, große Wärmemengen frei) und <b>Elektrolichtbogenofen-Verfahren</b> (teurer, für höherwertige/legierte Stähle und <b>Schrott-Recycling</b>)." },
  { t:"stahl-herst", f:"Einfluss des Kohlenstoffgehalts auf den Stahl", b:"~0,1 % C: weich, zäh, gut bearbeitbar. Ab 0,3 % C: durch Abschrecken härtbar. ~0,6 % C: wenig verformbar, <b>nicht schweißbar</b>. Betonstahl: max. 0,22 % C." },
  { t:"stahl-herst", f:"Unberuhigt (FU) vergossener Stahl", b:"Sauerstoff bleibt gebunden → beim Erkalten Gasblasen (CO). <b>Inhomogen</b>, Seigerungen im Kern, weiche Randzone, schlechte Schweißbarkeit. Für warmgewalzte Baustähle nicht mehr zulässig." },
  { t:"stahl-herst", f:"Vollberuhigt (FF) vergossener Stahl", b:"Durch Zugabe von <b>Aluminium</b> (≥ 0,02 %) verschlackt fast der ganze Sauerstoff. Ergebnis: sehr sauberer, feinkörniger, zäher Stahl → <b>lässt sich sehr gut verformen und schweißen</b>." },
  { t:"stahl-herst", f:"Was ist Desoxidation?", b:"Entfernen von Sauerstoff durch Zugabe von Desoxidationsmitteln (Si, Ca, Mn), die eine höhere Affinität zu Sauerstoff besitzen als Eisen → gleichmäßigeres Gefüge, bessere Qualität." },
  { t:"stahl-herst", f:"Blockguss ↔ Strangguss", b:"<b>Blockguss</b>: diskontinuierlich in Kokillen, ~5 % der Menge, für Sonderprodukte.<br><b>Strangguss</b>: kontinuierlich (~90 % weltweit), weniger Schrott, gleichmäßiges Erstarrungsgefüge, nur beruhigte Schmelzen." },
  { t:"stahl-herst", f:"Ferrit (α-Eisen) – Eigenschaften", b:"Kubisch-raumzentriertes α-Gitter, kann C praktisch <b>nicht lösen</b>. Relativ weich, zäh, gut verformbar, korrosionsanfällig – Eigenschaften ähnlich reinem Eisen." },
  { t:"stahl-herst", f:"Austenit (γ-Eisen) – Eigenschaften", b:"Kubisch-flächenzentriertes γ-Gitter (größer als α) → kann <b>Kohlenstoff weit besser lösen</b>. Weich, zäh, gut verformbar; bei hoher Abkühlgeschwindigkeit entsteht daraus Martensit." },
  { t:"stahl-herst", f:"Zementit (Fe₃C) & Perlit", b:"<b>Zementit</b> = Eisenkarbid Fe₃C (ab &gt;0,8 % C ausgeschieden): sehr hart, spröde, schlecht zerspanbar.<br><b>Perlit</b> = Lamellen aus Ferrit + Zementit (Perlitpunkt: 0,8 % C, 723 °C)." },
  { t:"stahl-herst", f:"Was ist Martensit?", b:"Bei sehr schnellem Abkühlen (Abschrecken) entsteht ein <b>nadeliges, sehr hartes Gefüge</b> mit hoher Zugfestigkeit, aber fast keiner Bruchdehnung → sehr spröde (zwangsgelöste C-Atome im Gitter)." },
  { t:"stahl-herst", f:"Warmumformung (naturhart) ↔ Kaltumformung", b:"<b>Warm</b> (über Rekristallisationstemp.): Kornneubildung, große Verformung mit wenig Kraft, feinkörnig, höhere Duktilität, schlechtere Oberfläche.<br><b>Kalt</b> (darunter): blanke Oberfläche, <b>Festigkeit & Härte steigen</b>, Zähigkeit sinkt, Anisotropie." },
  { t:"stahl-herst", f:"Einfluss der Korngröße auf die Stahleigenschaften", b:"<b>Feinkörnig</b>: bessere Festigkeit & Kerbschlagzähigkeit (Isotropie).<br><b>Grobkörnig</b>: niedrigere Zähigkeit/Festigkeit, einziger Vorteil bessere Zerspanbarkeit. Schnelles Abkühlen → mehr Keime → kleinere Körner." },

  /* ================= STAHL – WÄRMEBEHANDLUNG ================= */
  { t:"stahl-waerme", f:"Die 3 Schritte beim Glühen", b:"1. langsames Erwärmen auf eine bestimmte Temperatur, 2. Halten der Temperatur, 3. langsames, geregeltes Abkühlen auf Raumtemperatur." },
  { t:"stahl-waerme", f:"Normalglühen – Zweck & Ablauf", b:"Erwärmen knapp über den oberen Umwandlungspunkt (max ~950 °C), Perlit wandelt in Austenit, dann <b>langsames Abkühlen an der Luft</b>. Ergebnis: feinkörniges, gleichmäßiges Gefüge mit reproduzierbaren Kennwerten." },
  { t:"stahl-waerme", f:"Weichglühen – Zweck", b:"Erhitzen ~650–750 °C bis zur Gefügeumwandlung → verringert Härte/Festigkeit, verbessert <b>Zerspanbarkeit und Kaltverformbarkeit</b> (Walzen, Drahtziehen), vermeidet Rissbildung." },
  { t:"stahl-waerme", f:"Spannungsarmglühen – Zweck", b:"~550–650 °C: <b>Abbau innerer Spannungen ohne Gefügeänderung</b> (z.B. nach Kaltverformung, ungleichem Abkühlen, Schweißen). Vorteile: verzugsarme Weiterverarbeitung, Vermeidung von Härterissen." },
  { t:"stahl-waerme", f:"Härten – Ziel & Ablauf", b:"<b>Sehr schnelles Abkühlen (Abschrecken)</b> in Wasser/Öl → Bildung von Martensit → hohe Härte, Verschleißfestigkeit & Festigkeit, aber Zähigkeit/Kaltverformbarkeit sinken. Reine C-Stähle nur ~10 mm tief durchhärtbar." },
  { t:"stahl-waerme", f:"Vergüten – was und warum?", b:"<b>Härten + Wiedererwärmen (Anlassen, ~100–300 °C) + langsames Abkühlen.</b> Der spröde Martensit wird zäher. Vergütungsstähle werden mechanisch höher belastbar → kleinere Bauteilabmessungen." },
  { t:"stahl-waerme", f:"Die 3 Wärmebehandlungs-Kurven im Spannungs-Dehnungs-Diagramm (Klausur!)", b:"<b>Stahl 1 = gehärtet</b> (rasches Abkühlen in Wasser/Öl → hart, spröde).<br><b>Stahl 2 = vergütet</b> (Härten + Wiedererwärmen + langsames Abkühlen).<br><b>Stahl 3 = normalgeglüht</b> (langsames Abkühlen an der Luft → zäh, duktil)." },
  { t:"stahl-waerme", f:"Was ist Alterung (Reckalterung) bei Stahl?", b:"Ungewollte, zeit-/temperaturabhängige Veränderung v.a. bei kaltverformten, niedrig gekohlten Stählen: <b>Härte, Streckgrenze, Zugfestigkeit steigen</b>, Plastizität, Bruchdehnung & Kerbschlagarbeit sinken." },

  /* ================= STAHL – EIGENSCHAFTEN & PRÜFUNG ================= */
  { t:"stahl-eig", f:"E-Modul von Baustahl und Betonstahl", b:"<b>Baustahl</b>: E = 210 000 N/mm² (DIN EN 1993-1-1).<br><b>Betonstahl</b>: E = 200 000 N/mm² (DIN 1045-1). Üblich 190 000–230 000 N/mm²." },
  { t:"stahl-eig", f:"Was zeigt der Zugversuch (DIN EN 10002)?", b:"Ermittelt Festigkeits- und Verformungskennwerte: Streckgrenze, Zugfestigkeit, Bruchdehnung. Auch die Art der Behandlung (kalt/warm) ist erkennbar → 3 Bereiche: elastisch, plastisch (Verfestigung), Einschnürung." },
  { t:"stahl-eig", f:"Was ist die Streckgrenze R_e?", b:"Spannung, die den <b>Beginn des plastischen Fließens</b> kennzeichnet. Unterschieden werden obere (R<sub>eH</sub>) und untere (R<sub>eL</sub>) Streckgrenze. R<sub>e</sub> = F<sub>e</sub>/S₀." },
  { t:"stahl-eig", f:"Was ist die 0,2 %-Dehngrenze (R_p0,2)?", b:"Ersatz-Streckgrenze für Stähle <b>ohne ausgeprägten Fließbereich</b> (z.B. kaltverformt): die Spannung, die einer bleibenden Dehnung von 0,2 % zugeordnet ist." },
  { t:"stahl-eig", f:"Was ist die Zugfestigkeit R_m?", b:"Die auf den <b>Anfangsquerschnitt</b> bezogene maximal auftretende Zugkraft (Höchstkraft). Nach Überschreiten der Streckgrenze erreicht man bei der Höchstkraft R<sub>m</sub>." },
  { t:"stahl-eig", f:"Was beschreibt die Bruchdehnung A?", b:"Verlängerung der Probe nach dem Bruch. Setzt sich aus Gleichmaßdehnung + Einschnürdehnung zusammen und charakterisiert die <b>Duktilität</b> (Verformungsfähigkeit). Naturhart hat höhere Bruchdehnung als kaltverformt." },
  { t:"stahl-eig", f:"Was ist der Kerbschlagbiegeversuch (Charpy, DIN EN 10045)?", b:"Eine gekerbte Probe wird im Pendelschlagwerk <b>schlagartig auf Biegung</b> beansprucht. Ergebnis: Kerbschlagarbeit KV/KU [J] → Maß für <b>Sprödbruchempfindlichkeit</b> und Schweißeignung." },
  { t:"stahl-eig", f:"Was ist die Übergangstemperatur T_Ü?", b:"Temperatur des Übergangs von zähem <b>Verformungsbruch</b> zu verformungsarmem <b>Sprödbruch</b>. Je tiefer T<sub>Ü</sub>, desto größer der sichere Betriebstemperaturbereich." },
  { t:"stahl-eig", f:"Wann neigt Stahl zum Sprödbruch?", b:"Bei niedrigen Temperaturen, grobkörnigem Gefüge, hohen Verformungsgeschwindigkeiten und dreiachsigen Spannungszuständen (z.B. an Kerben)." },
  { t:"stahl-eig", f:"Die beiden Härteprüfverfahren", b:"<b>Brinell</b> (Eindringkörper: Hartmetallkugel) und <b>Vickers</b> (Eindringkörper: Diamantpyramide). Härte = Widerstand gegen das Eindringen eines härteren Körpers." },
  { t:"stahl-eig", f:"Was ist Dauerschwingfestigkeit (Ermüdung)?", b:"Durch wiederholte Be-/Entlastung wächst die Schädigung bis zum Bruch (Ermüdung). Kennwert n. Wöhler = Spannungsausschlag, den der Stahl bei beliebig vielen Lastwechseln (~2·10⁶) ohne Bruch aushält. Gefährlich: <b>Bruch ohne Vorwarnung</b>." },
  { t:"stahl-eig", f:"Dauerstandverhalten von Stahl", b:"Bis ~400 °C keine zeitabhängige Verformung (Kriechen) bei Dauerlast → Dauerstandfestigkeit ≈ Kurzzeitfestigkeit. Ausnahme: hochbelastete Spannstähle (Kriechen/Relaxation schon bei Raumtemperatur)." },
  { t:"stahl-eig", f:"Was ist Schweißeignung? (Stoffeigenschaft)", b:"Fähigkeit eines Werkstoffs, eine untrennbare Schweißverbindung einzugehen. Stähle gelten als schweißgeeignet bei <b>weniger als 0,3 % Kohlenstoff</b>." },
  { t:"stahl-eig", f:"Schmelzschweißen ↔ Pressschweißen", b:"<b>Schmelzschweißen</b>: örtlicher Schmelzfluss <b>ohne Druck</b>, mit/ohne Zusatz (z.B. Lichtbogenhand-, MSG-, UP-, Gasschweißen).<br><b>Pressschweißen</b>: Verbindung <b>unter Druck</b>, ggf. mit Erwärmung (z.B. Punkt-, Bolzenschweißen)." },
  { t:"stahl-eig", f:"Vorteile des Bauens mit Stahl", b:"Filigrane Konstruktionen/kleine Querschnitte, große (stützenfreie) Spannweiten, schweißbar, kurze Bauzeit, leichte Demontage/Wiederaufbau, recyclebar (ohne Qualitätsverlust), hoher E-Modul (~200 000 N/mm²), duktil." },

  /* ================= STAHL – KORROSION ================= */
  { t:"stahl-korr", f:"Definition Korrosion", b:"Reaktion eines Werkstoffs mit seiner Umgebung – durch <b>Oxidation</b> verursachte Zerstörung durch chemische/elektrochemische Reaktion mit Bestandteilen der Umgebung (Luftsauerstoff, Wasser, Erdreich)." },
  { t:"stahl-korr", f:"Voraussetzungen für den Korrosionsprozess", b:"Elektrische Leitfähigkeit, mögliche anodische Eisenauflösung, <b>Elektrolyt</b> in Kontakt mit dem Metall, <b>Potentialdifferenzen</b> und <b>Sauerstoff</b> im Elektrolyten." },
  { t:"stahl-korr", f:"Anodischer ↔ kathodischer Teilprozess", b:"<b>Anodisch</b> (Metallauflösung): Me → Me⁺ + e⁻.<br><b>Kathodisch</b> (Bildung von Hydroxylionen): H₂O + ½O₂ + 2e⁻ → 2(OH)⁻." },
  { t:"stahl-korr", f:"Was ist Rost?", b:"Korrosionsprodukt aus Eisen/Stahl durch Oxidation mit Sauerstoff in Gegenwart von Wasser (rötlich). Rost ist <b>porös</b>, schützt nicht vor weiterer Zersetzung, hat geringe Festigkeit; Volumen-/Massenzunahme → Abplatzen." },
  { t:"stahl-korr", f:"Was ist Lochfraßkorrosion?", b:"Enge, tiefe lochförmige Narben durch sehr eng begrenzte <b>Anodenbereiche</b>; anodische und kathodische Bereiche sind örtlich klar getrennt. Entsteht z.B. durch Chlorid oder Durchbrechen einer passivierenden Deckschicht." },
  { t:"stahl-korr", f:"Was ist Kontaktkorrosion?", b:"Bei Kontakt zweier Metalle mit <b>Potentialdifferenz</b> korrodiert das <b>unedlere</b> Metall. Je größer die Potentialdifferenz und je größer das Verhältnis Kathoden-/Anodenfläche, desto stärker der Abtrag. Regel: Befestigungsmittel edler wählen." },
  { t:"stahl-korr", f:"Was ist Spaltkorrosion?", b:"In engen Spalten hält sich Feuchte, Sauerstoffzufuhr ist behindert → schlechte Belüftung senkt das Potential → dort bilden sich bevorzugt anodische Bereiche mit hohen Abtragsraten." },
  { t:"stahl-korr", f:"Was ist Spannungsrisskorrosion (SpRK)?", b:"Rissbildung unter gleichzeitigem Einfluss statischer Zugspannung + Korrosion (trans- oder interkristallin). Typisch bei <b>hochfesten Stählen (Spannstählen, Seilen)</b>. 3 Bedingungen: empfindlicher Werkstoff, Zugspannung, spezifisches Angriffsmittel." },
  { t:"stahl-korr", f:"Aktiver ↔ passiver Korrosionsschutz", b:"<b>Aktiv</b>: Eingriff in den Korrosionsvorgang – konstruktive Gestaltung (Wasserabfluss!), Auswahl widerstandsfähiger Stoffe, kathodischer Schutz.<br><b>Passiv</b>: <b>Trennung vom angreifenden Medium</b> durch Beschichtungen oder metallische Überzüge." },
  { t:"stahl-korr", f:"Maßnahmen des aktiven Korrosionsschutzes (Gestaltung)", b:"Wasser/Flüssigkeiten ableiten, geneigte Oberflächen, offene Profile vermeiden, Spalten verschließen, durchgehende Schweißnähte (Punktschweißen vermeiden), Kanten runden, für Wasserabfluss an Stützenfüßen sorgen." },
  { t:"stahl-korr", f:"Passiver Korrosionsschutz durch Verzinken", b:"Zinküberzug wirkt als <b>Schutzschicht + kathodischer Schutz</b> (Zink korrodiert als unedleres Metall zuerst, schützt auch beschädigte Stellen). Verfahren: Feuer-, Spritz-, galvanische Verzinkung. Feuerverzinken bei T ~450 °C." },
  { t:"stahl-korr", f:"Ab welcher Luftfeuchte tritt nennenswerte Korrosion auf?", b:"Bei relativer Luftfeuchte <b>über ~75 % r. F.</b> treten Korrosionsabtragungen (mehr als Flugrost) auf. Einfluss: Luftverunreinigungen, Niederschlag, Temperatur, Wind, Staub." },
  { t:"stahl-korr", f:"Wetterfeste Baustähle – Prinzip", b:"Erhöhter Widerstand gegen atmosphärische Korrosion: durch Legierungsanteile (Cu, Cr, Ni, P) bildet sich unter Witterung eine schützende <b>oxidische Deckschicht</b>. Nicht bei ständiger Befeuchtung/Chlorid/Tausalz." },
  { t:"stahl-korr", f:"Nichtrostende Stähle – Prinzip (DIN EN 10088)", b:"Bilden bei Kontakt mit Sauerstoff eine dünne, festhaftende <b>Passivschicht aus Chromoxiden</b>, die sich nach Beschädigung <b>selbstheilend</b> neu bildet. Weitere Legierungselemente (Ni, Mo) erhöhen den Widerstand." },

  /* ================= STAHL – BETON- & SPANNSTAHL ================= */
  { t:"stahl-beton", f:"Kennwerte von Betonstahl B500B (DIN 488-1)", b:"Charakteristische Streckgrenze <b>500 N/mm²</b>, hohe Duktilität (Klasse B), warmgewalzt & gerippt. B500A = normal duktil (kaltverformt). E = 200 000 N/mm²." },
  { t:"stahl-beton", f:"Wozu dient Bewehrung im Beton?", b:"Beton ist druckfest, aber zugschwach → der Betonstahl übernimmt die <b>Zugkräfte</b> (z.B. in der Zugzone bei Biegung)." },
  { t:"stahl-beton", f:"Kennzeichnung B500A ↔ B500B über Rippen", b:"<b>B500A</b>: 3 Rippenreihen. <b>B500B</b>: 2 bzw. 4 Rippenreihen. Werkkennzeichen (verbreiterte/ausgelassene Schrägrippen) wiederholen sich max. alle 1,5 m." },
  { t:"stahl-beton", f:"Herstellverfahren von Betonstahl (DIN 488-1)", b:"warmgewalzt (ohne Nachbehandlung), warmgewalzt + aus der Walzhitze wärmebehandelt, warmgewalzt + kaltgereckt, oder kaltverformt (Ziehen/Kaltwalzen)." },
  { t:"stahl-beton", f:"R-Matten ↔ Q-Matten (Betonstahlmatten)", b:"<b>R-Matten</b>: Nennquerschnitt nur in Hauptrichtung → <b>einachsige</b> Lastabtragung (Querrichtung ≥ 20 %).<br><b>Q-Matten</b>: in beiden Richtungen gleicher Stahlquerschnitt → <b>zweiachsige</b> Lastabtragung." },
  { t:"stahl-beton", f:"Lagermatten ↔ Listenmatten", b:"<b>Lagermatten</b>: festes Typenprogramm, L = 6,0 m, B = 2,30 m.<br><b>Listenmatten</b>: vom Konstrukteur frei gewählter Aufbau, angepasst an die Bewehrungsaufgabe (L bis 12 m, B bis 2,65 m)." },
  { t:"stahl-beton", f:"Anforderungen an Spannstahl", b:"Hohe Zugfestigkeit R<sub>m</sub> & Streckgrenze (0,2 %-Dehngrenze), hohe Dauerschwingfestigkeit, ausreichende Duktilität, <b>geringe Relaxation & geringes Kriechen</b>, guter Haftverbund, ausreichender Korrosionswiderstand." },
  { t:"stahl-beton", f:"Warum ist Spannstahl nicht schweißbar?", b:"Kohlenstoffgehalt ~0,50 % (herkömmliche Verfahren erfordern C ≤ 0,20 %). Deutlich höherer C-Gehalt als Betonstahl (max 0,22 %)." },
  { t:"stahl-beton", f:"Spannverfahren nach Verbundwirkung", b:"<b>Mit Verbund</b>: sofortiger Verbund (Spannbett) oder nachträglicher Verbund (Verpressen der Spannkanäle).<br><b>Ohne Verbund</b>: intern (im Betonquerschnitt) oder extern (außerhalb)." },
  { t:"stahl-beton", f:"Lieferformen von Spannstahl", b:"<b>Stäbe</b> (warmgewalzt, gereckt, angelassen; Ø 18–40 mm), <b>Drähte</b> (kaltgezogen/vergütet), <b>Litzen</b> (Verseilen von 3 oder 7 Einzeldrähten; bekannteste Form)." },

  /* ================= GRUNDLAGEN ================= */
  { t:"grundlagen", f:"Die wichtigsten Beanspruchungsarten", b:"Zug, Druck, Biegung, Scheren (Schub), Spaltzug (Spalten) und Torsion (Tordieren)." },
  { t:"grundlagen", f:"Unterschied Spannung ↔ Festigkeit", b:"<b>Spannung</b> σ = F/A: die aktuelle, flächenunabhängige Beanspruchung.<br><b>Festigkeit</b> f = maxF/A: die <b>maximale</b> Beanspruchung, bevor Versagen eintritt (Tragfähigkeit)." },
  { t:"grundlagen", f:"Federgesetz – Formel", b:"F = c · Δl, mit c = Federkonstante. Beschreibt die (linear-)elastische Verformung von Festkörpern: Verformung proportional zur einwirkenden Kraft." },
  { t:"grundlagen", f:"Elastisch ↔ plastisch", b:"<b>Elastisch</b>: reversibel, nach Entlastung keine bleibende Verformung (Hooksches Gesetz gilt).<br><b>Plastisch</b>: bleibende (irreversible) Verformung nach Überschreiten der Elastizitätsgrenze." },
  { t:"grundlagen", f:"Definition & Formel Dichte (Reindichte)", b:"ρ = m / V [kg/m³], V = Stoffvolumen <b>ohne</b> Poren. Wasser 1000, Glas 2500, Stahl 7850 kg/m³." },
  { t:"grundlagen", f:"Definition & Formel Rohdichte", b:"ρ<sub>R</sub> = m / V<sub>R</sub> [kg/m³], V<sub>R</sub> = Gesamtvolumen <b>inkl.</b> Kornporen. Beton 2000–2800, Holz 400–800, Mauerwerk 600–2000 kg/m³." },
  { t:"grundlagen", f:"Geschlossene ↔ offene Poren", b:"<b>Geschlossene Poren</b>: von außen nicht zugänglich.<br><b>Offene Poren</b>: Wasser, Gase und gelöste Substanzen können in den Baustoff eindringen." },
  { t:"grundlagen", f:"Kraft, Gewicht – Formeln", b:"Kraft F = m · a (Masse × Beschleunigung).<br>Gewicht G = m · g, mit g = 9,81 m/s² (Erdbeschleunigung)." },
  { t:"grundlagen", f:"Was ist Kriechen? (allgemein)", b:"Verformungszunahme unter <b>Dauerlast</b>. Gilt für metallische Werkstoffe, Holz/Holzwerkstoffe und Beton – muss bei konstruktiven Aufgaben berücksichtigt werden (z.B. durchbiegende Bücherregale)." },
  { t:"grundlagen", f:"Was ist Dauerstandfestigkeit?", b:"Die größte konstante Spannung, die ein Baustoff während seiner gesamten Lebensdauer erträgt. Beton ~15 %, Holz ~40–50 % der Kurzzeitfestigkeit." },
  { t:"grundlagen", f:"Was ist Verschleiß-/Abnutzwiderstand?", b:"Wichtige Eigenschaft für Baustoffe von Fußböden, Gehwegen, Treppen und Straßen." },
  { t:"grundlagen", f:"Massebezogene Feuchte – Formel (allg. Baustoffe)", b:"u = m<sub>w</sub> / m<sub>d</sub> · 100 = (m<sub>h</sub> − m<sub>d</sub>) / m<sub>d</sub> · 100 [M.-%]. Wassermenge bezogen auf die <b>trockene</b> Masse." },
  { t:"grundlagen", f:"Volumenbestimmung eines unregelmäßigen Festkörpers", b:"Über Wasserverdrängung (<b>Archimedisches Prinzip</b>): V<sub>Körper</sub> = V₂ − V₁ (Flüssigkeitsanstieg), oder per Tauchwägung bzw. Überlaufgefäß." },

  /* ================= BAUSTOFFKUNDE – RECHNEN & FORMELN (Altklausur-Aufgabentypen) ================= */
  { t:"bk-rechnen", f:"Feuchte-Grundformel und die wichtigsten Umstellungen", b:"u = (m<sub>h</sub> − m<sub>d</sub>)/m<sub>d</sub> · 100 [M.-%]<br>Trockenmasse: <b>m<sub>d</sub> = m<sub>h</sub> / (1 + u)</b> (u als Dezimalzahl!)<br>Feuchtmasse: m<sub>h</sub> = m<sub>d</sub> · (1 + u)<br>Wassermenge: m<sub>w</sub> = m<sub>h</sub> − m<sub>d</sub>" },
  { t:"bk-rechnen", f:"Transportaufgabe: Wie viele Platten/Hölzer darf das Fahrzeug laden? (Vorgehen)", b:"1. Volumen V = l·b·d (je Stück).<br>2. Masse bei <b>gegebener</b> Feuchte: m = ρ<sub>R</sub>·V.<br>3. Auf <b>Gleichgewichtsfeuchte</b> umrechnen: erst m<sub>d</sub> = m/(1+u<sub>geg.</sub>), dann m<sub>12%</sub> = m<sub>d</sub>·(1,12).<br>4. Anzahl n = zul. Last / Stückmasse (abrunden!). Achtung: Aufgabe fragt oft nach der Masse bei der <b>höheren</b> Feuchte (ungünstiger)." },
  { t:"bk-rechnen", f:"Rohdichte auf eine andere Holzfeuchte umrechnen", b:"Die Rohdichte gilt bei einer bestimmten Feuchte. Über die Trockenmasse umrechnen: m<sub>d</sub> = m<sub>u1</sub>/(1+u₁), dann m<sub>u2</sub> = m<sub>d</sub>·(1+u₂). Volumenänderung (Schwinden) wird bei diesen Aufgaben meist vernachlässigt → nur die Wassermasse ändert sich." },
  { t:"bk-rechnen", f:"Elastische Verformung Δl unter Last (Hooke)", b:"ε = σ/E, σ = F/A → <b>Δl = (F·l₀)/(E·A)</b>.<br>Vorzeichen: Druck = Verkürzung (−), Zug = Verlängerung (+). E-Modul und f aus der Tabelle zur Sortier-/Festigkeitsklasse (z.B. C24)." },
  { t:"bk-rechnen", f:"Feuchtedehnung (Schwinden/Quellen) berechnen", b:"ε<sub>Q/S</sub> = α · Δu, &nbsp; Δl = ε · l₀<br>α = spezifisches (differentielles) Schwind-/Quellmaß in % je 1 % Feuchteänderung.<br>Nur im Bereich <b>unterhalb Fasersättigung</b> (bis ~30 %) wirksam. Richtung beachten (längs/radial/tangential)." },
  { t:"bk-rechnen", f:"Behinderte Dehnung → Zwangsspannung, Querdehnung, Kraft", b:"Wird die Feuchtedehnung <b>behindert</b>, entsteht Spannung: σ = E · ε<sub>behindert</sub> = E · α · Δu.<br>Resultierende Kraft: F = σ · A.<br>(Querdehnung: Änderung senkrecht zur betrachteten Richtung mit dem jeweiligen α.)" },
  { t:"bk-rechnen", f:"Kriechverformung und Gesamtverformung", b:"Kriechanteil: Δl<sub>k</sub> = Δl<sub>el</sub> · φ (φ = Kriechzahl).<br><b>Gesamtverformung = elastisch + Feuchtedehnung + Kriechen</b>: Δl<sub>ges</sub> = Δl<sub>el</sub>·(1+φ) + Δl<sub>Feuchte</sub>.<br>Typische Aufgabe: „Berechnen Sie die Last, unter der insgesamt keine Verformung auftritt“ → elastische Verkürzung soll das Quellen gerade aufheben." },
  { t:"bk-rechnen", f:"Biegenachweis Balken + Auflager (Aufgabentyp)", b:"Balken: σ = M/W = (F·l/4)/(b·h²/6) ≤ f<sub>m,k</sub> → F<sub>max,Balken</sub>.<br>Auflager (Druck quer zur Faser): σ = A<sub>Last</sub>/A<sub>Auflager</sub> ≤ f<sub>c,90</sub> → F<sub>max,Auflager</sub>.<br>Maßgebend ist der <b>kleinere</b> Wert. „Was versagt zuerst?“ → der mit der kleineren zulässigen Kraft." },
  { t:"bk-rechnen", f:"Bruchlast einer Stütze / eines Rundholzes", b:"F = f · A. Beim Rundholz A = π·d²/4.<br>Beispiel Eiche, f = 110 N/mm², d = 150 mm: A = π·150²/4 ≈ 17671 mm² → F ≈ 110·17671 ≈ 1,94·10⁶ N ≈ <b>1944 kN</b>." },
  { t:"bk-rechnen", f:"Stahl-Zugversuch: Kennwerte berechnen", b:"σ = F/S₀ (S₀ = π·d²/4), ε = ΔL/L₀ · 100 [%].<br>Elastisch: ε<sub>el</sub> = σ/E; plastisch: ε<sub>p</sub> = ε<sub>ges</sub> − ε<sub>el</sub>.<br>Kennwerte: Streckgrenze R<sub>eH</sub> (bzw. R<sub>p0,2</sub>), Zugfestigkeit R<sub>m</sub> (bei Höchstkraft), Bruchdehnung A. E<sub>Stahl</sub> ≈ 210 000 N/mm² (Beton­stahl 200 000)." },
  { t:"bk-rechnen", f:"Zugkraft aus Verlängerung – plastisch oder nicht? (Stahl)", b:"σ = E·ε mit ε = Δl/l₀ → F = σ·A. Dann mit der <b>Streckgrenze</b> vergleichen: σ ≤ R<sub>e</sub> (Betonstahl 500 N/mm²) → rein elastisch; σ > R<sub>e</sub> → plastische Verformung. Beispiel B500B, l₀=4 m, Δl=6 mm: ε=0,0015 → σ=210000·0,0015=315 N/mm² < 500 → <b>keine</b> plastische Verformung." },
  { t:"bk-rechnen", f:"Porigkeit / Feststoffanteil berechnen", b:"d = ρ<sub>R</sub>/ρ · 100 % (Feststoffanteil), p = 100 − d (Porenanteil).<br>Beispiel Fichte ρ<sub>R</sub>=430, ρ=1550: d = 27,7 %, <b>p = 72,3 %</b>.<br>Maximale Wasseraufnahme (Volumen der Poren) ≈ p · ρ<sub>Wasser</sub>." },

  /* ================= BAUPHYSIK – WÄRME · GRUNDLAGEN & TRANSPORT ================= */
  { t:"bp-waerme", f:"Warum überhaupt Wärmeschutz?", b:"Reduziert <b>Heizenergiebedarf</b> (Wirtschaftlichkeit, Klimaschutz), sorgt für <b>Behaglichkeit</b> (warme Oberflächen) und schützt vor <b>Bauschäden</b> (Tauwasser, Schimmel an kalten Innenoberflächen)." },
  { t:"bp-waerme", f:"Wärmemenge Q, Wärmestrom Φ, Wärmestromdichte q – Definition & Einheit", b:"<b>Q</b>: gespeicherte/übertragene Wärmeenergie – [J bzw. Wh].<br><b>Φ = Q̇</b>: Wärmestrom = Energie pro Zeit – [W].<br><b>q</b>: Wärmestromdichte = Wärmestrom pro Fläche – [W/m²]." },
  { t:"bp-waerme", f:"Wodurch entstehen Wärmeströme in einem Bauteil?", b:"Durch einen <b>Temperaturunterschied</b>: Wärme fließt immer von warm nach kalt (im Winter von innen nach außen). Antreibendes Potential = Temperaturdifferenz ΔT." },
  { t:"bp-waerme", f:"°C und K – Unterschied", b:"Gleiche <b>Schrittweite</b> (1 °C = 1 K). Nullpunkt verschoben: 0 °C = 273,15 K. <b>Temperaturen</b> in der Baupraxis in °C, <b>Temperaturdifferenzen</b> in K." },
  { t:"bp-waerme", f:"Die 3 Wärmetransportmechanismen", b:"<b>Wärmeleitung</b> (Konduktion, in Festkörpern), <b>Konvektion</b> (Wärmemitführung durch bewegte Luft/Flüssigkeit) und <b>Wärmestrahlung</b> (elektromagnetisch, auch im Vakuum)." },
  { t:"bp-waerme", f:"Wie läuft Wärmeleitung ab?", b:"Erwärmung = stärkere Molekülschwingung. Die Schwingung wird von Molekül zu Molekül <b>weitergegeben</b>, ohne dass die Moleküle ihren Ort wechseln (Festkörper). Kennwert: Wärmeleitfähigkeit λ." },
  { t:"bp-waerme", f:"Wovon hängt die Wärmeleitfähigkeit λ eines Baustoffs ab?", b:"Von <b>Rohdichte</b> (Porengehalt), <b>Feuchtegehalt</b> und Temperatur. Einheit [W/(m·K)]. Gute Dämmstoffe haben kleines λ (viel eingeschlossene ruhende Luft)." },
  { t:"bp-waerme", f:"Wie beeinflusst die Rohdichte die Wärmeleitfähigkeit?", b:"Je <b>höher die Rohdichte</b> (weniger Poren/Luft), desto <b>höher λ</b> → schlechtere Dämmwirkung. Deshalb dämmen leichte, porige Stoffe gut (Luft ist ein schlechter Wärmeleiter)." },
  { t:"bp-waerme", f:"Wie beeinflusst die Feuchte die Wärmeleitfähigkeit?", b:"Feuchte <b>erhöht λ</b> deutlich (Wasser leitet ~25× besser als Luft). Nasse Dämmung dämmt schlecht → Feuchteschutz ist auch Wärmeschutz." },
  { t:"bp-waerme", f:"Bemessungswert der Wärmeleitfähigkeit ↔ Messwert", b:"Der <b>Bemessungswert</b> (λ<sub>Bemessung</sub>, nach DIN 4108-4) ist ein <b>Sicherheitszuschlag höher</b> als der unter Normklima gemessene Wert – er berücksichtigt praktische Feuchte/Einbaubedingungen. Nachweise immer mit dem Bemessungswert." },
  { t:"bp-waerme", f:"Ist Luft ein guter oder schlechter Wärmeleiter?", b:"<b>Schlechter</b> Wärmeleiter (λ<sub>Luft</sub> ≈ 0,025 W/mK) → ruhende Luft dämmt. Metalle sind sehr <b>gute</b> Leiter (Stahl λ ≈ 50 W/mK). Achtung: bewegte Luft überträgt Wärme durch Konvektion." },
  { t:"bp-waerme", f:"Konvektion – frei vs. erzwungen", b:"Wärmeübertragung durch <b>bewegte</b> Luft/Flüssigkeit.<br><b>Frei</b>: Bewegung durch Dichteunterschiede (warme Luft steigt auf).<br><b>Erzwungen</b>: Bewegung von außen aufgeprägt (Wind, Ventilator). Beispiel Wohnraum: Heizkörper erwärmt Luft → sie steigt → Umwälzung." },
  { t:"bp-waerme", f:"Wärmestrahlung – Besonderheit", b:"Übertragung durch <b>elektromagnetische Wellen</b>, benötigt <b>kein Medium</b> → funktioniert auch im <b>Vakuum</b>. Absorptionsfähigkeit hängt von Farbe/Oberfläche ab (dunkel/matt absorbiert stärker)." },
  { t:"bp-waerme", f:"Stationär ↔ instationär", b:"<b>Stationär</b>: Temperaturen zeitlich konstant, Wärmestrom konstant (Grundlage der Nachweise nach DIN 4108-2).<br><b>Instationär</b>: zeitlich veränderlich (z.B. Tag/Nacht, sommerlicher Wärmeschutz, Wärmespeicherung spielt eine Rolle)." },
  { t:"bp-waerme", f:"Spezifische Wärmespeicherkapazität c", b:"Wärmemenge, um 1 kg eines Stoffs um 1 K zu erwärmen [J/(kg·K)]. <b>Schwere Bauteile</b> (hohe Masse × c) speichern viel Wärme → dämpfen Temperaturschwankungen → besserer sommerlicher Wärmeschutz und angenehmes Raumklima." },
  { t:"bp-waerme", f:"Flächenbezogene Masse – schweres/leichtes Bauteil", b:"Masse pro m² Bauteilfläche [kg/m²]. <b>Schwer</b> ≥ ~100 kg/m², <b>leicht</b> darunter. Für den Mindestwärmeschutz nach DIN 4108-2 gelten für leichte Bauteile <b>höhere</b> Anforderungen (mehr Dämmung nötig)." },
  { t:"bp-waerme", f:"Warum beeinflusst die Orientierung den Wärmeschutz?", b:"Solare Gewinne: nach <b>Süden</b> die größten Gewinne im Winter → große Fenster sinnvoll. Nach <b>Norden</b> keine Gewinne, nur Verluste → Fenster klein halten. Verschattung/Bepflanzung beeinflusst Gewinne und Wind (Konvektion)." },
  { t:"bp-waerme", f:"Maßnahmen für sommerlichen Wärmeschutz", b:"<b>Außenliegende</b> Verschattung (Rollläden/Jalousien vor der Scheibe), Fenstergröße/-orientierung, speicherfähige (schwere) Bauteile, Nachtlüftung. <b>Außendämmung</b> hilft auch sommerlich (Speichermasse bleibt im warmen Bereich); reine <b>Innendämmung</b> ist sommerlich weniger wirksam." },
  { t:"bp-waerme", f:"Wärmebrücke – was ist das, welche Arten?", b:"Örtlich <b>erhöhter Wärmeabfluss</b> → dort kältere Innenoberfläche.<br><b>Materialbedingt (stofflich)</b>: gut leitendes Material durchdringt die Dämmung (z.B. Stahlbetonstütze).<br><b>Geometrisch</b>: Außenfläche größer als Innenfläche (z.B. Gebäudeecke)." },
  { t:"bp-waerme", f:"Folgen von Wärmebrücken", b:"Höhere <b>Wärmeverluste</b> (schlechtere Energieeffizienz) und <b>kalte Innenoberflächen</b> → Tauwasser- und <b>Schimmelgefahr</b>, eingeschränkte Nutzbarkeit (z.B. Möbel an Außenecke)." },

  /* ================= BAUPHYSIK – WÄRME · R, U & NACHWEIS ================= */
  { t:"bp-waerme-rech", f:"Wärmedurchlasswiderstand R einer Schicht", b:"<b>R = d / λ</b> &nbsp;[(m²·K)/W]<br>d = Schichtdicke [m], λ = Wärmeleitfähigkeit [W/(m·K)]. Je dicker/dämmender die Schicht, desto größer R." },
  { t:"bp-waerme-rech", f:"Wärmedurchgangswiderstand R_T", b:"<b>R<sub>T</sub> = R<sub>si</sub> + ΣR + R<sub>se</sub></b><br>Summe aller Schicht-R plus innerer und äußerer Wärmeübergangswiderstand. „“ = nur Bauteil (ΣR), „“ = inkl. Wärmeübergänge (Luft ↔ Oberfläche)." },
  { t:"bp-waerme-rech", f:"Wärmeübergangswiderstände R_si / R_se (Wand)", b:"Außenwand: <b>R<sub>si</sub> = 0,13</b>, <b>R<sub>se</sub> = 0,04</b> m²K/W.<br>Wärmestrom nach oben (Dach): R<sub>si</sub>=0,10; nach unten: R<sub>si</sub>=0,17. Erdberührt/außen zum Boden: R<sub>se</sub>=0. Sie erfassen Konvektion + Strahlung an den Oberflächen." },
  { t:"bp-waerme-rech", f:"Wärmedurchgangskoeffizient U (U-Wert)", b:"<b>U = 1 / R<sub>T</sub></b> &nbsp;[W/(m²·K)]<br>Je kleiner U, desto besser die Dämmung. U beschreibt den Wärmestrom je m² und je K Temperaturdifferenz." },
  { t:"bp-waerme-rech", f:"Wärmestromdichte q", b:"<b>q = U · (θ<sub>i</sub> − θ<sub>e</sub>) = U · ΔT</b> &nbsp;[W/m²].<br>Bzw. q = ΔT / R<sub>T</sub>. Der Wärmestrom durch das gesamte Bauteil ist Φ = q · A." },
  { t:"bp-waerme-rech", f:"Temperaturverlauf im Bauteil (Gradient je Schicht)", b:"Der Temperaturabfall verteilt sich <b>proportional zu den R-Werten</b>: <b>Δθ<sub>i</sub> = (R<sub>i</sub> / R<sub>T</sub>) · ΔT<sub>gesamt</sub></b>.<br>Über die dämmende Schicht (großes R) fällt am meisten Temperatur ab. Oberflächentemp. innen: θ<sub>si</sub> = θ<sub>i</sub> − (R<sub>si</sub>/R<sub>T</sub>)·ΔT." },
  { t:"bp-waerme-rech", f:"Oberflächentemperatur berechnen (Beispiel)", b:"θ<sub>si</sub> = θ<sub>i</sub> − R<sub>si</sub>/R<sub>T</sub> · (θ<sub>i</sub>−θ<sub>e</sub>).<br>Bsp.: θ<sub>i</sub>=20 °C, θ<sub>e</sub>=−10 °C, R<sub>T</sub>=1,4, R<sub>si</sub>=0,13 → θ<sub>si</sub> = 20 − 0,13/1,4·30 ≈ <b>17,2 °C</b>. Wichtig für Tauwasser-/Schimmelbeurteilung." },
  { t:"bp-waerme-rech", f:"Mindestwärmeschutz DIN 4108-2 – Anforderungswerte", b:"Nachweis über den <b>Wärmedurchlasswiderstand R</b> des Bauteils.<br>Außenwand (schwer, ≥100 kg/m²): <b>R ≥ 1,2 m²K/W</b>.<br>Leichte Bauteile (&lt;100 kg/m²): <b>R ≥ 1,75 m²K/W</b>. Nachweis erfüllt, wenn R<sub>vorh</sub> ≥ R<sub>erf</sub>." },
  { t:"bp-waerme-rech", f:"R einer ruhenden Luftschicht – warum aus Tabelle?", b:"In einer Luftschicht findet zusätzlich <b>Konvektion und Strahlung</b> statt → R lässt sich nicht einfach als d/λ berechnen. Werte werden abhängig von Dicke und Belüftung der <b>Norm (Tabelle)</b> entnommen." },

  /* ================= BAUPHYSIK – FEUCHTE · LUFTFEUCHTE & TAUWASSER ================= */
  { t:"bp-feuchte", f:"Hauptaufgaben des Feuchteschutzes", b:"Bauteile und Innenräume vor schädlicher Feuchte schützen → Vermeidung von <b>Tauwasser, Schimmel, Frostschäden, Korrosion</b> und Wärmeschutzverlust (nasse Dämmung). Feuchtequellen: Nutzung (Duschen, Kochen, Atmen, Pflanzen), Niederschlag/Schlagregen, Baufeuchte, aufsteigende Feuchte." },
  { t:"bp-feuchte", f:"Wasserdampfkonzentration c (absolute Feuchte)", b:"Masse Wasserdampf pro Volumen Luft, <b>c in g/m³</b>. Sagt aus, wie viel Wasserdampf tatsächlich in der Luft ist (unabhängig von der Temperatur)." },
  { t:"bp-feuchte", f:"Sättigungskonzentration c_s und ihre Temperaturabhängigkeit", b:"c<sub>s</sub> = <b>maximal</b> mögliche Wasserdampfmenge pro m³ Luft. <b>Warme Luft kann viel mehr Wasser aufnehmen</b> als kalte (c<sub>s</sub> steigt stark mit der Temperatur). Wird c<sub>s</sub> erreicht/überschritten → Kondensation (Tauwasser)." },
  { t:"bp-feuchte", f:"Relative Luftfeuchte φ – Definition", b:"<b>φ = c / c<sub>s</sub> = p<sub>D</sub> / p<sub>sat</sub></b> · 100 %<br>Verhältnis von tatsächlichem zu maximal möglichem Wasserdampfgehalt bei der jeweiligen Temperatur. Bei φ = 100 % ist die Luft gesättigt." },
  { t:"bp-feuchte", f:"Kann die relative Feuchte über 100 % steigen?", b:"<b>Nein</b> – bei 100 % ist die Luft gesättigt; überschüssiger Dampf <b>kondensiert</b> sofort (Nebel/Tauwasser). Deshalb kann φ praktisch nicht 102 % erreichen." },
  { t:"bp-feuchte", f:"Wasserdampfpartialdruck p_D ↔ Sättigungsdruck p_sat", b:"<b>p<sub>D</sub></b> (früher p): Teildruck des tatsächlich vorhandenen Wasserdampfs.<br><b>p<sub>sat</sub></b> (früher p<sub>s</sub>): maximaler Druck bei Sättigung (temperaturabhängig). φ = p<sub>D</sub>/p<sub>sat</sub>. Bei 20 °C ist p<sub>sat</sub> ≈ 2337 Pa." },
  { t:"bp-feuchte", f:"Taupunkt / Taupunkttemperatur", b:"Die Temperatur, auf die feuchte Luft abgekühlt werden muss, damit sie <b>gesättigt</b> ist (φ = 100 %). Kühlt eine Oberfläche unter den Taupunkt ab → <b>Tauwasser</b>. Höhere Raumfeuchte → höherer Taupunkt." },
  { t:"bp-feuchte", f:"Wie kommt es zu Tauwasserausfall?", b:"Feuchte Luft trifft auf eine <b>Oberfläche kälter als der Taupunkt</b> (bzw. wird abgekühlt) → c<sub>s</sub> sinkt unter c → überschüssiger Dampf kondensiert. Typisch an kalten Innenoberflächen (Wärmebrücken, schlecht gedämmte Wände, Fensterscheiben)." },
  { t:"bp-feuchte", f:"Ab wann Schimmelgefahr? (DIN 4108-2)", b:"Kritisch ab <b>80 % r.F. an der Bauteiloberfläche</b> (flüssiges Wasser ist nicht nötig!). Bei Raumklima 20 °C/50 % r.F. wird 80 % r.F. bei einer <b>Oberflächentemperatur von 12,6 °C</b> erreicht → θ<sub>si</sub> muss darüber bleiben." },
  { t:"bp-feuchte", f:"Höheres/niedrigeres Raumklima – Wirkung auf die kritische Oberfläche", b:"Mehr Raumfeuchte (z.B. 20 °C/60 % statt 50 %) → 80 % r.F. wird schon bei <b>höherer</b> Oberflächentemperatur erreicht → <b>größere</b> Schimmelgefahr. Trockeneres Raumklima (40 %) → geringere Gefahr." },
  { t:"bp-feuchte", f:"Luftwechselzahl n", b:"n = ausgetauschtes Luftvolumen pro Stunde bezogen auf das Raumvolumen [1/h]. n = 1 → einmal pro Stunde komplett getauscht. Auch bei geschlossenem Fenster gibt es einen (kleinen) Grundluftwechsel durch Fugen." },
  { t:"bp-feuchte", f:"Richtig lüften: Kippen ↔ Stoßlüften", b:"<b>Gekipptes Fenster</b>: geringer Luftaustausch, aber hohe Wärmeverluste (Laibung kühlt aus → Schimmelgefahr).<br><b>Stoßlüften</b> (kurz weit öffnen, Durchzug): schneller Feuchte-/Luftaustausch bei geringem Wärmeverlust → deutlich effektiver." },
  { t:"bp-feuchte", f:"Warum unbeheizten Keller im Winter (nicht im Sommer) lüften?", b:"Im <b>Sommer</b> ist die Außenluft warm und feucht; an den kalten Kellerwänden kondensiert sie → <b>feuchter</b>. Zum Trocknen im <b>Winter</b> lüften: kalte Außenluft nimmt beim Erwärmen im Keller Feuchte auf und führt sie ab." },
  { t:"bp-feuchte", f:"Warum beschlägt die Brille beim Betreten eines warmen Raums?", b:"Die <b>kalte</b> Brille liegt unter dem Taupunkt der warmen, feuchten Raumluft → der Wasserdampf kondensiert an der Glasoberfläche (gleiches Prinzip wie Tauwasser an kalten Bauteiloberflächen)." },
  { t:"bp-feuchte", f:"Warum keine Schränke dicht an Außenwände stellen?", b:"Hinter dem Schrank ist die Wandoberfläche <b>kälter</b> (keine Raumwärme/Luftbewegung) und die Luft steht → örtlich hohe r.F. → <b>Schimmelgefahr</b>. Abstand halten für Luftzirkulation." },

  /* ================= BAUPHYSIK – FEUCHTE · DIFFUSION, µ & NACHWEIS ================= */
  { t:"bp-feuchte-tr", f:"Feuchtetransportmechanismen in porösen Baustoffen", b:"<b>Wasserdampfdiffusion</b> (dampfförmig, treibendes Potential = Dampfdruckgefälle), <b>Kapillartransport</b> (flüssig, in Kapillarporen), <b>Oberflächendiffusion</b> (Wanderung adsorbierter Wasserfilme). Der µ-Wert erfasst nur die Dampfdiffusion." },
  { t:"bp-feuchte-tr", f:"Wasserdampfdiffusion – Mechanismus & Antrieb", b:"Wasserdampf wandert von <b>hohem zu niedrigem Wasserdampf(partial)druck</b>. Im Winter meist von <b>innen (warm, feucht) nach außen</b>. Treibendes Potential = <b>Dampfdruckdifferenz</b> Δp." },
  { t:"bp-feuchte-tr", f:"Wasserdampf-Diffusionswiderstandszahl µ", b:"Materialkennwert (dimensionslos): gibt an, um wie viel ein Baustoff den Dampf <b>schlechter durchlässt als eine gleich dicke Luftschicht</b>. Luft: µ = 1. Größeres µ = dichter. (Steigende Materialfeuchte senkt µ.)" },
  { t:"bp-feuchte-tr", f:"Diffusionsäquivalente Luftschichtdicke s_d", b:"<b>s<sub>d</sub> = µ · d</b> [m] – Dicke einer Luftschicht mit gleichem Diffusionswiderstand.<br>Einstufung: s<sub>d</sub> &lt; 0,5 m = <b>diffusionsoffen</b>; 0,5–1500 m = diffusionshemmend; &gt; 1500 m = <b>diffusionsdicht</b>. (Beschichtung mit s<sub>d</sub>=0,3 m → diffusionsoffen.)" },
  { t:"bp-feuchte-tr", f:"Dampfsperre / Dampfbremse", b:"Schicht mit hohem Diffusionswiderstand auf der <b>warmen (Innen-)Seite</b>, die das Eindringen von Wasserdampf in die Konstruktion begrenzt → verhindert Tauwasser in der Dämmung. <b>Sperre</b>: sehr dicht (großes s<sub>d</sub>); <b>Bremse</b>: begrenzt durchlässig. Beispiel: PE-Folie/Alu-Verbundfolie." },
  { t:"bp-feuchte-tr", f:"µ-Werte typischer Stoffe (Größenordnung)", b:"Luft = 1 · Kunstharzputz ~ niedrig · Porenbeton 5–10 · Beton ~ hoch · Glas & Metall praktisch <b>dampfdicht</b> · Bitumen-/Dampfsperrbahnen sehr hoch. Merke: dichte, dichtporige Stoffe → großes µ." },
  { t:"bp-feuchte-tr", f:"Kapillarporen ↔ Gelporen ↔ Luftporen", b:"<b>Kapillarporen</b>: transportieren Wasser flüssig, <b>schnell und tief</b>.<br><b>Gelporen</b> (sehr klein): Wasser stark gebunden, langsamer Transport.<br><b>Luftporen</b> (groß): <b>kein</b> kapillarer Transport (Kapillarkraft zu klein), dienen z.B. dem Frostschutz." },
  { t:"bp-feuchte-tr", f:"Hygroskopizität / Adsorption / Sorptionsisotherme", b:"<b>Hygroskopisch</b>: Stoff nimmt Feuchte aus der Luft auf. <b>Adsorption</b>: Anlagerung von Wassermolekülen an Porenoberflächen. <b>Sorptionsisotherme</b>: Zusammenhang zwischen r.F. der Luft und Ausgleichsfeuchte des Stoffs – zeigt, wie viel Feuchte ein Material im Gleichgewicht aufnimmt." },
  { t:"bp-feuchte-tr", f:"Glaser-Verfahren / Diffusionsdiagramm – Kriterium", b:"Grafischer Tauwassernachweis: <b>Sättigungsdruckkurve p<sub>sat</sub></b> und <b>Partialdruckgerade p</b> im s<sub>d</sub>-Maßstab auftragen. <b>Tauwasser</b>, wo p die p<sub>sat</sub>-Kurve berührt/schneidet. Nachweis erfüllt, wenn kein Tauwasser anfällt <b>oder</b> das Tauwasser in der Verdunstungsperiode wieder austrocknet (und Grenzmengen einhält)." },
  { t:"bp-feuchte-tr", f:"Innen- vs. Außendämmung (feuchtetechnisch)", b:"<b>Außendämmung</b> ist zu bevorzugen: die tragende Wand bleibt warm → Taupunkt liegt außen in der Dämmung, geringes Tauwasserrisiko, keine Wärmebrücken.<br><b>Innendämmung</b>: Wand wird kalt, Tauwassergefahr an der Grenzschicht → nur mit sorgfältigem Nachweis / dampfbremsenden bzw. kapillaraktiven Systemen." },

  /* ================= BAUPHYSIK – SCHALLSCHUTZ ================= */
  { t:"bp-schall", f:"Luftschall ↔ Körperschall ↔ Trittschall", b:"<b>Luftschall</b>: Schallausbreitung über die Luft (Sprechen, Musik, Verkehr).<br><b>Körperschall</b>: Schall im festen Bauteil (Klopfen, Maschinen).<br><b>Trittschall</b>: Sonderform des Körperschalls durch Begehen der Decke – wird im Nachbarraum als Luftschall abgestrahlt." },
  { t:"bp-schall", f:"Wie wird Schall übertragen?", b:"Als <b>Druckschwankung</b> (Welle) in einem elastischen Medium – die Teilchen schwingen um ihre Ruhelage, ohne selbst zu wandern. Ausbreitung braucht ein Medium (kein Schall im Vakuum)." },
  { t:"bp-schall", f:"Frequenz, Wellenlänge, Amplitude", b:"<b>Frequenz f</b> [Hz]: Schwingungen pro Sekunde → bestimmt die Tonhöhe.<br><b>Wellenlänge λ</b> [m]: Abstand zweier gleicher Wellenpunkte.<br><b>Amplitude</b>: Auslenkung → bestimmt die Lautstärke. Zusammenhang: <b>c = f · λ</b>." },
  { t:"bp-schall", f:"Schallgeschwindigkeit & Rechenbeispiel", b:"c<sub>Luft</sub> ≈ 343 m/s; in festen, dichten Stoffen (Mauerwerk, Stahl) <b>viel höher</b>. λ = c/f. Für f = 200 Hz in Luft: λ = 343/200 ≈ <b>1,7 m</b>." },
  { t:"bp-schall", f:"Schall, Infraschall, Ultraschall – Hörbereich", b:"Hörbarer Schall des Menschen ~ <b>16 Hz bis 20 000 Hz</b>. Darunter = <b>Infraschall</b>, darüber = <b>Ultraschall</b>. Für die Bauakustik relevant: ~100 bis 3150 Hz." },
  { t:"bp-schall", f:"Schalldruck p und Schalldruckpegel L", b:"<b>Schalldruck p</b> [Pa]: Druckschwankung um den statischen Luftdruck (hörbar ~2·10⁻⁵ bis 20 Pa).<br><b>Schalldruckpegel L</b> [dB]: logarithmisches Maß bezogen auf die Hörschwelle → bildet den riesigen Druckbereich handhabbar ab." },
  { t:"bp-schall", f:"Warum dB(A) – A-Bewertung?", b:"Das Ohr empfindet Töne <b>frequenzabhängig</b> unterschiedlich laut (tiefe Töne bei gleichem Pegel leiser als mittlere). Die <b>A-Bewertung</b> passt den gemessenen Pegel an das menschliche Lautstärkeempfinden an → Angabe in <b>dB(A)</b>." },
  { t:"bp-schall", f:"Schalldämmung ↔ Schalldämpfung", b:"<b>Schalldämmung</b>: Behinderung der Schall<b>übertragung</b> von Raum zu Raum (durch das Bauteil) – Ziel: Nachbarschutz.<br><b>Schalldämpfung</b>: Umwandlung von Schallenergie <b>im Raum</b> (poröse Absorber) → verkürzt die Nachhallzeit, verbessert die Akustik im selben Raum." },
  { t:"bp-schall", f:"Nachhallzeit", b:"Zeit, in der der Schallpegel nach Abschalten der Quelle um 60 dB abklingt. Zu lang → hallig/unverständlich; zu kurz → „trocken“. Wird über <b>Schallabsorption</b> (Material, Möblierung) an die Raumnutzung angepasst." },
  { t:"bp-schall", f:"Bewertetes Schalldämm-Maß R_w", b:"Einzahlangabe [dB] für die <b>Luftschalldämmung</b> eines Bauteils, gewonnen durch Vergleich der frequenzabhängigen Dämmkurve mit einer Bezugskurve. <b>Höheres R<sub>w</sub> = bessere Dämmung</b> (leichter Vergleich verschiedener Bauteile)." },
  { t:"bp-schall", f:"Einschalige Wand: Schalldämmung verbessern", b:"Nach dem <b>Bergerschen Massegesetz</b> steigt die Luftschalldämmung mit der <b>flächenbezogenen Masse</b> → <b>schwerer/dicker</b> bauen (ca. +6 dB je Massenverdopplung). Nachteil: viel Masse nötig für wenig Zusatzdämmung." },
  { t:"bp-schall", f:"Zweischalige Wand: Schalldämmung verbessern", b:"<b>Feder-Masse-Prinzip</b>: zwei Schalen durch eine weiche Zwischenschicht (Dämmung/Luft) entkoppeln, Schalenabstand vergrößern, biegeweiche Vorsatzschalen. <b>Schallbrücken</b> (starre Verbindungen) unbedingt vermeiden – sie überbrücken die Trennung und verschlechtern die Dämmung stark." },
  { t:"bp-schall", f:"Was ist eine Schallbrücke?", b:"Eine <b>starre Verbindung</b> zwischen zwei eigentlich getrennten Schalen/Bauteilen (z.B. Mörtelbrücke, durchgehender Estrich), über die Körperschall die Trennung <b>umgeht</b> → hebt die Wirkung der zweischaligen Konstruktion teilweise auf." },

  /* ================= BAUPHYSIK – BRANDSCHUTZ ================= */
  { t:"bp-brand", f:"Baustoffklassen nach DIN 4102-1", b:"<b>A = nichtbrennbar</b> (A1 ohne, A2 mit geringen brennbaren Anteilen).<br><b>B = brennbar</b>: <b>B1</b> schwer entflammbar, <b>B2</b> normal entflammbar, <b>B3</b> leicht entflammbar. (Europäisch: Euroklassen A1–F.)" },
  { t:"bp-brand", f:"In welche Baustoffklasse fällt Holz?", b:"Bauholz mit Dicke &gt; 5 mm bzw. Rohdichte &gt; 400 kg/m³ ist <b>B2 (normal entflammbar)</b>. Dünne/leichte Späne können leichter entflammbar sein (B3)." },
  { t:"bp-brand", f:"Feuerwiderstandsklassen F30–F120", b:"Geben die <b>Feuerwiderstandsdauer eines Bauteils in Minuten</b> an: <b>F30, F60, F90, F120</b>. F90 = das Bauteil behält im Normbrand mind. 90 Minuten seine tragende/raumabschließende Funktion. (F90 = „“, F30 = „“.)" },
  { t:"bp-brand", f:"Bedeutung von F90-A, F60-AB, F30-B", b:"Zahl = Feuerwiderstandsdauer (min); Buchstabe = Baustoffe der wesentlichen Teile:<br><b>F90-A</b>: 90 min, aus <b>nichtbrennbaren</b> Baustoffen (z.B. Stahlbeton).<br><b>F60-AB</b>: 60 min, tragende Teile nichtbrennbar, weitere brennbar.<br><b>F30-B</b>: 30 min, aus <b>brennbaren</b> Baustoffen (z.B. Holzbalkendecke)." },
  { t:"bp-brand", f:"Brandwand", b:"Wand mit <b>hohem Feuerwiderstand (i.d.R. F90 aus nichtbrennbaren Baustoffen)</b>, die eine Brandausbreitung auf andere Gebäude(teile) begrenzen soll. Verhindert einen Übertritt aber nicht in jedem Fall unbegrenzt (z.B. bei Versagen/Öffnungen)." },
  { t:"bp-brand", f:"Voraussetzungen für einen Brand (Branddreieck)", b:"<b>Brennbarer Stoff + Sauerstoff + Zündtemperatur/Zündquelle</b> müssen gleichzeitig vorhanden sein. Fehlt eine Komponente, gibt es kein Feuer – darauf beruht auch die Brandbekämpfung." },
  { t:"bp-brand", f:"Brandverhalten Stahl ↔ Holz", b:"<b>Stahl</b>: nichtbrennbar, verliert aber bei Hitze rasch Festigkeit → früher, teils schlagartiger Versagensverlust (braucht Brandschutz z.B. Beschichtung/Bekleidung).<br><b>Holz</b>: brennbar, brennt aber <b>langsam und berechenbar</b> ab; die verkohlte Schicht schützt den Kern → tragender Restquerschnitt bleibt lange erhalten." }
];

/* ---- PRÜFUNGSFRAGEN (Multiple-Choice im Klausurstil) ----
   Mehrere Antworten können richtig sein.
   correct = Array der Indizes der richtigen Optionen.  */
const FRAGEN = [
  {
    t:"holz-aufbau",
    q:"Welche Aussagen zum Wachstum und Aufbau von Holz sind korrekt?",
    o:[
      "Die im Frühjahr wachsenden dünnwandigen, großporigen Zellen bilden das Frühholz.",
      "Das Kernholz zeichnet sich durch dünne Zellwände und hohe Wasserführung aus.",
      "Das Kernholz zeichnet sich durch dicke Zellwände, Schwere und Härte aus.",
      "Spätholz entsteht im Frühjahr und dient dem raschen Wassertransport."
    ],
    c:[0,2],
    e:"Frühholz = dünnwandig/großporig (Wassertransport), Spätholz = dickwandig/englumig (Festigkeit, entsteht im Sommer). Kernholz ist abgestorben, dicke Zellwände, schwer und hart – ohne Wasserführung."
  },
  {
    t:"holz-aufbau",
    q:"Welche Aussagen zu den chemischen Bestandteilen des Holzes sind richtig?",
    o:[
      "Zellulose bildet die Gerüstsubstanz und ist v.a. für die Zugfestigkeit verantwortlich.",
      "Lignin bewirkt die Versteifung der Zellwand und ist für die Druckfestigkeit wichtig.",
      "Hemizellulose verbindet Zellulose und Lignin.",
      "Lignin ist für die Zugfestigkeit des Holzes verantwortlich."
    ],
    c:[0,1,2],
    e:"Zellulose → Zugfestigkeit, Lignin → Druckfestigkeit/Versteifung, Hemizellulose → Verbindung zwischen beiden. Lignin ist NICHT für die Zugfestigkeit zuständig."
  },
  {
    t:"holz-feuchte",
    q:"Welche Aussagen zur Holzfeuchte sind korrekt?",
    o:[
      "Die Gleichgewichtsfeuchte ist die dem jeweiligen Klima angepasste Holzfeuchte (u = 12–18 %).",
      "Die Gleichgewichtsfeuchte ist konstant und unabhängig von der Luftfeuchte.",
      "Beim Darrtrocknen nehmen die Abmessungen der Proben aufgrund des Schwindens ab.",
      "Frisch geschlagenes Holz hat eine Feuchte von 5–10 M.-%."
    ],
    c:[0,2],
    e:"Die Gleichgewichtsfeuchte hängt von der relativen Luftfeuchte ab (nicht konstant). Beim Darren verliert das Holz Wasser → Schwinden. Frisches Holz: 40–60 M.-%."
  },
  {
    t:"holz-feuchte",
    q:"Welche Aussagen zu Dichte und Rohdichte des Holzes sind richtig?",
    o:[
      "Die Reindichte der Zellwände ist bei fast allen Holzarten ähnlich (~1550 kg/m³).",
      "Die Rohdichte bezieht das Gesamtvolumen einschließlich der Poren ein.",
      "Kern- und Splintholz haben aufgrund von Einlagerungen unterschiedliche Holzdichten.",
      "Die Rohdichte von Holz liegt üblicherweise über 2000 kg/m³."
    ],
    c:[0,1,2],
    e:"Reindichte (ohne Poren) ~1550 kg/m³ für alle Holzarten, Rohdichte (mit Poren) ~400–800 kg/m³. Einlagerungen bei der Verkernung führen zu Dichteunterschieden Kern/Splint."
  },
  {
    t:"holz-mechanik",
    q:"Welche Aussagen über die Eigenschaften von Vollholz sind korrekt?",
    o:[
      "Je größer die Rohdichte, desto größer die Zugfestigkeit des Holzes.",
      "Eine Feuchtesteigerung zwischen Gleichgewichts- und Fasersättigungsfeuchte vermindert den E-Modul.",
      "Es besteht ein linearer Zusammenhang zwischen Rohdichte und Festigkeit.",
      "Höhere Holzfeuchte erhöht den E-Modul."
    ],
    c:[0,1,2],
    e:"Höhere Rohdichte = höhere Festigkeit (linearer Zusammenhang). Steigende Feuchte im hygroskopischen Bereich schwächt die intermolekularen Bindungen → E-Modul und Festigkeit sinken."
  },
  {
    t:"holz-mechanik",
    q:"Wie ändert sich die Druckfestigkeit von Bauschnittholz? Welche Aussagen sind richtig?",
    o:[
      "Nadelholz hat i.d.R. eine geringere Druckfestigkeit als Laubholz.",
      "Höhere Holzfeuchte (bis FSP) reduziert die Druckfestigkeit.",
      "Belastung parallel zur Faser ist druckfester als quer zur Faser.",
      "Eine höhere Rohdichte verringert die Druckfestigkeit."
    ],
    c:[0,1,2],
    e:"Laubholz > Nadelholz (Dichte). Feuchte weicht die Zellwände auf → geringere Druckfestigkeit. Parallel zur Faser deutlich druckfester. Höhere Rohdichte = HÖHERE Druckfestigkeit."
  },
  {
    t:"holz-mechanik",
    q:"Welche Größenordnungen gelten (bezogen auf die Zugfestigkeit ∥ Faser)?",
    o:[
      "Druckfestigkeit ≈ 50 % der Zugfestigkeit.",
      "Biegefestigkeit ≈ 80 % der Zugfestigkeit.",
      "Scherfestigkeit ≈ 10 % der Zugfestigkeit.",
      "Die Zugfestigkeit ist kleiner als die Druckfestigkeit."
    ],
    c:[0,1,2],
    e:"Rangfolge Zug > Biege > Druck > Scher. Die Zugfestigkeit ist ca. doppelt so groß wie die Druckfestigkeit, nicht kleiner."
  },
  {
    t:"holz-mechanik",
    q:"Welche Aussagen zum Kriechen von Holz sind richtig?",
    o:[
      "Kriechen ist eine zeitabhängige Verformungszunahme unter gleichbleibender Last.",
      "Mit zunehmender Holzfeuchte wird das Kriechen größer.",
      "Das Kriechen ist bei Druck und Biegung größer als bei Zug.",
      "Kriechen tritt nur bei Stahl auf, nicht bei Holz."
    ],
    c:[0,1,2],
    e:"Kriechen = Verformungszunahme unter Dauerlast; nimmt mit Feuchte, Temperatur, Last und dünnem Querschnitt zu und ist bei Druck/Biegung größer als bei Zug. Es gilt für Holz, Stahl und Beton."
  },
  {
    t:"holz-schutz",
    q:"Welche Aussagen zu Holzschäden und Holzschutz sind korrekt?",
    o:[
      "Pilze der Weißfäule bauen den Holzinhaltsstoff Lignin ab.",
      "Beim baulichen Holzschutz wird die Feuchteanreicherung im Holz vermieden.",
      "Braunfäule baut Cellulose und Hemicellulose ab (Würfelbruch).",
      "Bläuepilze führen zu einem starken Festigkeitsverlust des Holzes."
    ],
    c:[0,1,2],
    e:"Weißfäule → Lignin, Braunfäule → Cellulose/Hemicellulose (Würfelbruch). Baulicher Holzschutz = Feuchteanreicherung vermeiden. Bläuepilze verfärben nur, ohne nennenswerten Festigkeitsverlust."
  },
  {
    t:"holz-schutz",
    q:"Welche Aussagen zum baulichen Holzschutz sind korrekt?",
    o:[
      "Niederschläge und intensive Sonneneinwirkung sind möglichst fernzuhalten.",
      "Dichtungsbahnen/-schichten verhindern die Feuchteaufnahme.",
      "Holzschutzmittel gehören zum baulichen Holzschutz.",
      "Ein Spritzwasserschutz am Sockel sollte mindestens 30 cm hoch sein."
    ],
    c:[0,1,3],
    e:"Baulicher Holzschutz = konstruktive Maßnahmen (Feuchteschutz, UV-Schutz, Dichtungsbahnen, ≥30 cm Sockelschutz). Holzschutzmittel gehören zum CHEMISCHEN Holzschutz."
  },
  {
    t:"holz-sortier",
    q:"Welche Aussagen zur Sortierung von Nadelschnittholz sind richtig?",
    o:[
      "Blitzrisse und Ringschäle sind für tragende Zwecke nicht zulässig.",
      "Je kleiner die Faserneigung, desto höher die Tragfähigkeit.",
      "Die Sortierklasse S13 hat eine höhere Tragfähigkeit als S7.",
      "Die Markröhre ist in der Sortierklasse S13 zulässig."
    ],
    c:[0,1,2],
    e:"Blitzrisse/Ringschäle sind generell unzulässig. Kleinere Faserneigung = höhere Tragfähigkeit. S13 > S10 > S7. Die Markröhre ist in S13 NICHT zulässig (nur in S7/S10)."
  },
  {
    t:"holz-sortier",
    q:"Nach welchen Kriterien wird Nadelschnittholz visuell sortiert?",
    o:[
      "Ästigkeit und Faserneigung.",
      "Risse und Krümmung des Holzes.",
      "Markröhre und Jahrringbreite.",
      "Ausschließlich die gemessene Zugfestigkeit jeder Probe."
    ],
    c:[0,1,2],
    e:"Visuelle Sortierung nach sichtbaren Merkmalen (Äste, Faserneigung, Markröhre, Jahrringbreite, Risse, Krümmung usw.). Die Zugfestigkeit wird nicht an jeder Probe direkt gemessen."
  },
  {
    t:"holz-werkstoff",
    q:"Welche Besonderheiten hat Baufurniersperrholz im Vergleich zu Bauschnittholz?",
    o:[
      "Kraftübertragung in zwei Richtungen.",
      "Verringerte Anisotropie.",
      "Höhere Dimensionsstabilität (weniger Schwinden/Quellen).",
      "Es ist stärker anisotrop als Massivholz."
    ],
    c:[0,1,2],
    e:"Durch die kreuzweise Verleimung der Furniere wird BFU WENIGER anisotrop, überträgt Lasten in zwei Richtungen und ist dimensionsstabiler."
  },
  {
    t:"holz-werkstoff",
    q:"Welche Aussagen zu Brettschichtholz (BSH) sind richtig?",
    o:[
      "Im kombinierten Aufbau werden Lamellen unterschiedlicher Sortierklassen angeordnet.",
      "Mit BSH lassen sich flexiblere geometrische Querschnitte als mit Vollholz realisieren.",
      "BSH besteht aus mindestens drei verklebten Lamellen.",
      "BSH zeigt größere Formänderungen bei Feuchtewechsel als Vollholz."
    ],
    c:[0,1,2],
    e:"Kombinierter Aufbau = verschiedene Sortierklassen; BSH erlaubt flexible/gekrümmte Querschnitte und besteht aus ≥3 Lamellen. Es zeigt GERINGERE Formänderungen bei Feuchtewechsel."
  },
  {
    t:"stahl-herst",
    q:"Welche Aussagen zur Stahlerzeugung sind korrekt?",
    o:[
      "Martensit ist nadelig, sehr hart, aber fast ohne Bruchdehnung.",
      "Frischen verringert den C-Gehalt und unerwünschte Bestandteile des Roheisens.",
      "Vollberuhigt vergossener Stahl lässt sich gut verformen und schweißen.",
      "Unberuhigt vergossener Stahl ist besonders homogen."
    ],
    c:[0,1,2],
    e:"Martensit: nadelig, hart, spröde. Frischen senkt C-Gehalt durch Oxidation. Vollberuhigter Stahl (Al-Zugabe) ist sauber, feinkörnig, gut schweiß-/verformbar. Unberuhigter Stahl ist INHOMOGEN."
  },
  {
    t:"stahl-herst",
    q:"Welche Aussagen zur Stahlherstellung und zum Vergießen sind richtig?",
    o:[
      "Unberuhigt vergossener Stahl ist inhomogen und hat eine weiche Randzone.",
      "Vollberuhigt vergossener Stahl lässt sich gut verformen und schweißen.",
      "Beim Strangguss eignen sich ausschließlich beruhigte Stahlschmelzen.",
      "Beim Frischen wird dem Roheisen Kohlenstoff zugesetzt."
    ],
    c:[0,1,2],
    e:"Unberuhigt = inhomogen, weiche Randzone. Vollberuhigt = gut verformbar/schweißbar. Strangguss nur mit beruhigten Schmelzen. Frischen ENTZIEHT Kohlenstoff (Oxidation)."
  },
  {
    t:"stahl-waerme",
    q:"Ordnen Sie die thermische Vorbehandlung zu. Welche Aussagen sind richtig?",
    o:[
      "Normalgeglüht: langsames Abkühlen z.B. an der Luft.",
      "Vergütet: Härten, Wiedererwärmen und langsames Abkühlen.",
      "Gehärtet: rasches Abkühlen z.B. in Wasser oder Öl.",
      "Härten bedeutet langsames Abkühlen an der Luft."
    ],
    c:[0,1,2],
    e:"Normalglühen = langsam an Luft, Vergüten = Härten + Anlassen + langsam abkühlen, Härten = rasches Abschrecken in Wasser/Öl (nicht langsam an der Luft)."
  },
  {
    t:"stahl-waerme",
    q:"Welche Aussagen zum Spannungsarmglühen sind richtig?",
    o:[
      "Es baut innere Spannungen ohne Gefügeänderung ab.",
      "Es erfolgt bei ~550–650 °C, deutlich unterhalb der Perlitlinie.",
      "Es vermeidet Härterisse und ermöglicht verzugsarme Weiterverarbeitung.",
      "Es dient in erster Linie der Härtesteigerung durch Martensitbildung."
    ],
    c:[0,1,2],
    e:"Spannungsarmglühen (~550–650 °C) baut Eigenspannungen OHNE Gefügeänderung ab. Härtesteigerung durch Martensit ist das Ziel des Härtens, nicht des Spannungsarmglühens."
  },
  {
    t:"stahl-eig",
    q:"Welche Aussagen zum Zugversuch an Stahl sind richtig?",
    o:[
      "Anhand des Zugversuchs kann die Art der Behandlung (kalt/warm) festgestellt werden.",
      "Der Zugversuch ermittelt u.a. die Bruchdehnung des Stahls.",
      "Die 0,2 %-Dehngrenze dient als Ersatz-Streckgrenze bei Stählen ohne ausgeprägten Fließbereich.",
      "Die Zugfestigkeit wird auf den eingeschnürten Endquerschnitt bezogen."
    ],
    c:[0,1,2],
    e:"Der Zugversuch zeigt Behandlungsart, Bruchdehnung, Streckgrenze/Zugfestigkeit; R_p0,2 ersetzt die Streckgrenze bei kaltverformtem Stahl. R_m wird auf den ANFANGSquerschnitt bezogen."
  },
  {
    t:"stahl-eig",
    q:"Welche Aussagen zum Kerbschlagbiegeversuch sind richtig?",
    o:[
      "Der Versuch liefert Kenntnisse über die Übergangstemperatur des Stahls.",
      "Der Versuch wird durch schlagartige Beanspruchung des Probestücks durchgeführt.",
      "Er gibt Aufschluss über die Sprödbruchneigung bei tiefen Temperaturen.",
      "Er dient primär der Bestimmung des E-Moduls."
    ],
    c:[0,1,2],
    e:"Der Kerbschlagbiegeversuch (Charpy) ermittelt durch schlagartige Beanspruchung die Zähigkeit/Sprödbruchneigung und die Übergangstemperatur – nicht den E-Modul."
  },
  {
    t:"stahl-eig",
    q:"Welche Aussagen zu den mechanischen Eigenschaften von Stahl sind richtig?",
    o:[
      "Ein feinkörniges Gefüge hat bessere Festigkeit und Kerbschlagzähigkeit als ein grobkörniges.",
      "Kaltverformung erhöht Festigkeit und Härte, verringert aber die Zähigkeit.",
      "Der E-Modul von Baustahl beträgt rund 210 000 N/mm².",
      "Grobkörniges Gefüge hat generell die besseren Festigkeitseigenschaften."
    ],
    c:[0,1,2],
    e:"Feinkörnig = bessere Festigkeit/Zähigkeit (Isotropie). Kaltverformung: Festigkeit/Härte ↑, Zähigkeit ↓. Baustahl E ≈ 210 000 N/mm². Grobkorn hat SCHLECHTERE Festigkeitswerte."
  },
  {
    t:"stahl-korr",
    q:"Welche Aussagen zu Korrosion und Korrosionsschutz sind korrekt?",
    o:[
      "Der passive Korrosionsschutz erfolgt durch Trennung vom angreifenden Medium.",
      "Je höher die Potentialdifferenz zwischen zwei Metallen, desto stärker die Kontaktkorrosion.",
      "Kontaktkorrosion kann bei Durchbrechung einer passivierenden Oxidschicht entstehen.",
      "Beim passiven Schutz muss immer das unedlere Metall geopfert werden."
    ],
    c:[0,1,2],
    e:"Passiver Schutz = Trennung vom Medium (Beschichtung/Überzug). Kontaktkorrosion nimmt mit der Potentialdifferenz zu und wird durch Durchbrechen passivierender Schichten begünstigt. Das Opfern des unedleren Metalls beschreibt den kathodischen (aktiven) Schutz."
  },
  {
    t:"stahl-korr",
    q:"Welche Aussagen zu den Erscheinungsformen der Korrosion sind richtig?",
    o:[
      "Bei Lochfraßkorrosion sind anodische und kathodische Bereiche örtlich klar getrennt.",
      "Spaltkorrosion entsteht durch eindringende Feuchte in Spalten bei schlechter Belüftung.",
      "Spannungsrisskorrosion tritt v.a. bei hochfesten Stählen (Spannstählen) auf.",
      "Atmosphärische Korrosion greift ausschließlich örtlich punktförmig an."
    ],
    c:[0,1,2],
    e:"Lochfraß: getrennte Anoden/Kathoden. Spaltkorrosion: Feuchte in schlecht belüfteten Spalten. SpRK v.a. bei hochfesten Stählen. Atmosphärische Korrosion trägt annähernd GLEICHFÖRMIG ab (z.B. Flugrost)."
  },
  {
    t:"stahl-korr",
    q:"Welche Aussagen zum aktiven Korrosionsschutz sind richtig?",
    o:[
      "Die Gewährleistung von Wasserabfluss verbessert den Korrosionsschutz.",
      "Durch Auswahl widerstandsfähiger Stoffe wird der Korrosionsprozess verlangsamt.",
      "Der kathodische Korrosionsschutz zählt zum aktiven Korrosionsschutz.",
      "Aktiver Korrosionsschutz bedeutet immer das Aufbringen einer Lackschicht."
    ],
    c:[0,1,2],
    e:"Aktiver Schutz: Wasserabfluss/Gestaltung, widerstandsfähige Stoffe, kathodischer Schutz. Das Aufbringen einer Lack-/Beschichtung ist PASSIVER Schutz (Trennung vom Medium)."
  },
  {
    t:"stahl-korr",
    q:"Welche Aussagen zum passiven Korrosionsschutz (Verzinken) sind richtig?",
    o:[
      "Der Zinkabtrag hängt von der Korrosivitätskategorie ab (in Schwimmbädern höher als im Büro).",
      "Durch eine zusätzliche Beschichtung wird die Schutzdauer der Zinkschicht verlängert.",
      "Zink wirkt zusätzlich als kathodischer Schutz an beschädigten Stellen.",
      "Feuerverzinken erfolgt bei Raumtemperatur."
    ],
    c:[0,1,2],
    e:"Zinkabtrag steigt mit der Korrosivität der Umgebung; eine Beschichtung (Duplex) verlängert die Schutzdauer; Zink schützt beschädigte Stellen kathodisch. Feuerverzinken erfolgt bei ~450 °C, nicht bei Raumtemperatur."
  },
  {
    t:"stahl-beton",
    q:"Welche Aussagen zum Betonstahl B500B sind richtig?",
    o:[
      "Der Betonstahl hat eine Streckgrenze von mindestens 500 N/mm².",
      "Der Betonstahl besitzt eine hohe Duktilität (Klasse B).",
      "Betonstabstahl B500B hat eine geringere Bruchlast als Spannstahl St 1570/1770.",
      "Betonstahl hat einen höheren Kohlenstoffgehalt als Spannstahl."
    ],
    c:[0,1,2],
    e:"B500B: Streckgrenze ≥ 500 N/mm², hohe Duktilität, geringere Bruchlast als Spannstahl. Spannstahl hat mit ~0,5 % C den HÖHEREN Kohlenstoffgehalt (Betonstahl max. 0,22 %)."
  },
  {
    t:"stahl-beton",
    q:"Welche Aussagen zu Betonstahlmatten sind richtig?",
    o:[
      "R-Matten dienen der einachsigen Lastabtragung (Hauptrichtung).",
      "Q-Matten haben in beiden Richtungen näherungsweise gleichen Stahlquerschnitt.",
      "Listenmatten können vom Konstrukteur an die Bewehrungsaufgabe angepasst werden.",
      "Lagermatten werden individuell für jedes Bauteil frei entworfen."
    ],
    c:[0,1,2],
    e:"R-Matten = einachsig, Q-Matten = zweiachsig (gleicher Querschnitt), Listenmatten = frei anpassbar. Lagermatten folgen einem FESTEN Typenprogramm (nicht frei entworfen)."
  },
  {
    t:"grundlagen",
    q:"Welche Aussagen zu den mechanischen Grundlagen sind richtig?",
    o:[
      "Die Spannung σ = F/A ist eine flächenunabhängige Kenngröße.",
      "Die Dehnung ε = Δl/l₀ ist dimensionslos und von der Anfangslänge unabhängig.",
      "Im linear-elastischen Bereich gilt das Hooksche Gesetz σ = E·ε.",
      "Die Festigkeit ist die aktuell wirkende Beanspruchung eines Bauteils."
    ],
    c:[0,1,2],
    e:"σ = F/A (flächenunabhängig), ε dimensionslos, Hooke: σ = E·ε. Die FESTIGKEIT ist die MAXIMALE Beanspruchung bis zum Versagen – die aktuelle Beanspruchung ist die Spannung."
  },
  {
    t:"grundlagen",
    q:"Welche Aussagen zu Dichte, Rohdichte und Porigkeit sind richtig?",
    o:[
      "Die Reindichte bezieht sich auf das Stoffvolumen ohne Poren.",
      "Die Rohdichte bezieht sich auf das Gesamtvolumen einschließlich Poren.",
      "Offene Poren erlauben das Eindringen von Wasser und Gasen in den Baustoff.",
      "Die Schüttdichte bezieht sich auf das porenfreie Feststoffvolumen."
    ],
    c:[0,1,2],
    e:"Reindichte = ohne Poren, Rohdichte = mit Poren, offene Poren sind zugänglich. Die Schüttdichte bezieht sich auf das GEFÄSSVOLUMEN (inkl. Zwischenräume), nicht auf das porenfreie Feststoffvolumen."
  },

  /* ================= BAUSTOFFKUNDE – WEITERE ALTKLAUSURFRAGEN ================= */
  {
    t:"holz-aufbau",
    q:"Welche Aussagen sind in Bezug auf das trockene Holz korrekt? (Altklausur)",
    o:[
      "Die Zellulose ist für die Aufnahme der Zugkräfte verantwortlich.",
      "Breite Jahrringe kennzeichnen ein schnelles Wachstum.",
      "Spätholz hat kleine, dickwandige Zellen und trägt stärker zur Festigkeit bei.",
      "Das Lignin stellt die Gerüstsubstanz der Zellwand dar.",
      "Das Splintholz bildet den inneren Teil des Stammes."
    ],
    c:[0,1,2],
    e:"Zellulose = Gerüstsubstanz & Zugfestigkeit; breite Jahrringe = schnelles Wachstum; Spätholz = englumig/dickwandig → Festigkeit. Falsch: Lignin ist NICHT die Gerüstsubstanz (das ist Zellulose), und Splintholz liegt AUSSEN (Kernholz innen)."
  },
  {
    t:"holz-sortier",
    q:"Welche Vorteile haben einheimische Nadelhölzer gegenüber Laubhölzern? (Altklausur)",
    o:[
      "Geringeres Schwinden und Quellen.",
      "Gute Festigkeit bei geringer Rohdichte.",
      "Höhere Druckfestigkeit quer zur Faser.",
      "Zerstreut oder ringförmig angeordnete Poren (Tracheen)."
    ],
    c:[0,1],
    e:"Nadelholz: geringeres Schwinden/Quellen und gute Festigkeit bei geringer Rohdichte (leicht). Höhere Druckfestigkeit quer zur Faser und Tracheen/Poren sind Merkmale des LAUBHOLZES."
  },
  {
    t:"holz-werkstoff",
    q:"Welche Vorteile hat Brettschichtholz (BSH) im Vergleich zum Baurundholz? (Altklausur)",
    o:[
      "Höhere zulässige Spannungen.",
      "Bessere Verbindungsmöglichkeiten.",
      "Bessere Querschnittsausnutzung.",
      "Ungestörter Faserverlauf."
    ],
    c:[0,1],
    e:"BSH: höhere zulässige Spannungen (vergütet/sortiert) und bessere Verbindungsmöglichkeiten. Bessere Querschnittsausnutzung und ungestörter Faserverlauf sind gerade Vorteile des BAURUNDHOLZES."
  },
  {
    t:"holz-werkstoff",
    q:"Welche Aussagen zu Brettschichtholz (BSH) sind richtig? (Altklausur)",
    o:[
      "Im kombinierten Aufbau werden Lamellen aus unterschiedlichen Sortierklassen angeordnet.",
      "Mit BSH lassen sich flexiblere geometrische Querschnitte als mit Vollholz realisieren.",
      "BSH besteht aus kreuzweise verklebten Schälfurnieren aus Nadelholz.",
      "BSH wird durch Verfilzung der Fasern ohne Bindemittel hergestellt.",
      "BSH-Elemente nehmen 2/3 der Last längs und 1/3 quer auf."
    ],
    c:[0,1],
    e:"Kombinierter Aufbau = verschiedene Sortierklassen; BSH erlaubt flexible/gekrümmte Querschnitte. Kreuzweise Schälfurniere = Baufurniersperrholz (BFU); Verfilzung ohne Bindemittel = Faserplatten (Nassverfahren); die 2/3-1/3-Lastaufteilung gilt für Sperrholz/BFU, nicht für BSH."
  },
  {
    t:"holz-sortier",
    q:"Welche Aussagen zu den visuellen Sortierkriterien von Bauschnittholz treffen zu? (Altklausur)",
    o:[
      "Die Ästigkeit A ist bei der Sortierklasse S10 kleiner zulässig als bei S7.",
      "Markröhren sind in der Sortierklasse S13 unzulässig.",
      "Die Sortierklasse S13 fordert breitere Jahresringe als S7.",
      "Schwindrisse sind in der Sortierklasse S13 generell nicht zulässig."
    ],
    c:[0,1],
    e:"Höhere Klasse = strengere Grenzen: S13 lässt weniger Äste zu als S10 als S7, und die Markröhre ist in S13 unzulässig. S13 fordert SCHMALERE Jahrringe (bis 4 mm), und Schwindrisse sind begrenzt zulässig (unzulässig sind nur Blitzrisse/Ringschäle)."
  },
  {
    t:"holz-schutz",
    q:"Welche Aussagen zur Dauerhaftigkeit von Holz sind korrekt? (Altklausur)",
    o:[
      "Weißfäule führt zu Festigkeitsverlust durch Zersetzung des Lignins.",
      "Braunfäule baut überwiegend Zellulose (und Hemizellulose) ab.",
      "Blau-/Graufärbung durch Bläuepilze hat wesentlichen Einfluss auf die Festigkeit.",
      "Holzzerstörende Pilze werden durch Temperaturanstieg von 10 °C auf 20 °C bekämpft."
    ],
    c:[0,1],
    e:"Weißfäule → Ligninabbau, Braunfäule → Cellulose/Hemicellulose (Würfelbruch). Bläuepilze verfärben nur, ohne nennenswerten Festigkeitsverlust. 10→20 °C liegt gerade im optimalen Wachstumsbereich der Pilze – das bekämpft sie nicht."
  },
  {
    t:"holz-mechanik",
    q:"Welche Änderung ERHÖHT die Druckfestigkeit von Bauschnittholz? (Altklausur-Tabelle)",
    o:[
      "Laubholz statt Nadelholz.",
      "Rohdichte ρ_R,d = 605 statt 415 kg/m³.",
      "Belastung parallel statt quer zur Faserrichtung.",
      "Fasersättigung statt Gleichgewichtsfeuchte.",
      "Sortierklasse S7 statt S13."
    ],
    c:[0,1,2],
    e:"Höher wird die Druckfestigkeit durch: Laubholz (höhere Dichte), höhere Rohdichte und Belastung parallel zur Faser. Höhere Feuchte (Fasersättigung) und die geringere Klasse S7 SENKEN die Druckfestigkeit."
  },
  {
    t:"holz-mechanik",
    q:"Welche Änderung ERHÖHT die Zugfestigkeit von Bauschnittholz (parallel zur Faser)? (Altklausur)",
    o:[
      "Trocknung von Fasersättigung auf Gleichgewichtsfeuchte.",
      "Erhöhung der Rohdichte.",
      "Belastung quer statt parallel zur Faser.",
      "Größerer Winkel zwischen Kraft- und Faserrichtung (Faserneigung)."
    ],
    c:[0,1],
    e:"Trocknen (geringere Feuchte) und höhere Rohdichte erhöhen die Festigkeit. Quer zur Faser und mit größerer Faserneigung fällt die Zugfestigkeit stark ab."
  },
  {
    t:"holz-feuchte",
    q:"Welche Aussagen zu den Eigenschaften von Vollholz sind korrekt? (Altklausur – Lösungsschlüssel)",
    o:[
      "Durch die Abgabe des freien Wassers in den Zellhohlräumen schwindet das Holz.",
      "Kern- und Splintholz haben aufgrund von Einlagerungen unterschiedliche Holzdichten.",
      "Die Gleichgewichtsfeuchte ist von der Härte des Holzes abhängig.",
      "Eine höhere Holzfeuchte (bis FSP) erhöht die Druckfestigkeit."
    ],
    c:[0,1],
    e:"Nach dem offiziellen Lösungsschlüssel gelten (a) und (b) als richtig. ACHTUNG/Merke: In der Vorlesung heißt es eigentlich, das FREIE Wasser habe keinen Einfluss auf das Schwinden (das Schwinden beginnt erst beim Austrocknen unter Fasersättigung) – in der Klausur wird (a) dennoch als richtig gewertet. Falsch sind: Gleichgewichtsfeuchte hängt vom Klima ab (nicht von der Härte); höhere Feuchte SENKT die Festigkeit."
  },
  {
    t:"stahl-herst",
    q:"Welche Aussagen zur Stahlerzeugung sind korrekt? (Altklausur)",
    o:[
      "Ein feinkörniges Gefüge verbessert Festigkeit und Kerbschlagzähigkeit.",
      "Vollberuhigt vergossener Stahl setzt Aluminium als Desoxidationsmittel ein.",
      "Ein grobkörniges Gefüge verbessert Festigkeit und Kerbschlagzähigkeit.",
      "Unberuhigt vergossener Stahl hat eine höhere Festigkeit in der Randzone."
    ],
    c:[0,1],
    e:"Feinkörnig = bessere Festigkeit/Zähigkeit; vollberuhigt wird mit Aluminium desoxidiert. Grobkorn verschlechtert die Werte, und unberuhigter Stahl hat eine WEICHE (nicht festere) Randzone."
  },
  {
    t:"stahl-eig",
    q:"Welche Aussagen zum Schweißen von Stahl sind korrekt? (Altklausur)",
    o:[
      "Beim autogenen Schweißen wirkt die Streuflamme als Schutzgasmantel.",
      "Die Magnetpulverprüfung untersucht Schweißnähte auf Oberflächenrisse.",
      "Schnelles Abkühlen beim Schweißen führt zu einem feinkörnigen, zähen Gefüge.",
      "Schweißnähte bewirken eine gleichmäßige Härtung des gesamten Stahls."
    ],
    c:[0,1],
    e:"Autogen: Streuflamme schützt die Schweißstelle vor Sauerstoff; Magnetpulverprüfung = zerstörungsfreie Oberflächenrissprüfung. Zu schnelles Abkühlen führt zu Aufhärtung/Versprödung (nicht fein/zäh), und die Wärmeeinflusszone härtet ungleichmäßig auf."
  },

  /* ================= BAUPHYSIK – WÄRME ================= */
  {
    t:"bp-waerme",
    q:"Welche Aussagen zu den Wärmetransportmechanismen sind korrekt?",
    o:[
      "Wärmeleitung überträgt Wärme in Festkörpern über Molekülschwingungen.",
      "Wärmestrahlung funktioniert auch im Vakuum.",
      "Konvektion überträgt Wärme durch bewegte Luft oder Flüssigkeit.",
      "Wärme fließt von selbst von der kälteren zur wärmeren Seite."
    ],
    c:[0,1,2],
    e:"Leitung (Festkörper), Strahlung (auch im Vakuum) und Konvektion (bewegtes Medium) sind die drei Mechanismen. Wärme fließt immer von warm nach kalt – nicht umgekehrt."
  },
  {
    t:"bp-waerme",
    q:"Welche Aussagen zur Wärmeleitfähigkeit λ von Baustoffen sind korrekt?",
    o:[
      "Eine höhere Rohdichte führt in der Regel zu einer höheren Wärmeleitfähigkeit.",
      "Feuchtigkeit im Baustoff erhöht die Wärmeleitfähigkeit.",
      "Ruhende Luft ist ein schlechter Wärmeleiter und wirkt dämmend.",
      "Metalle sind schlechte Wärmeleiter."
    ],
    c:[0,1,2],
    e:"Mehr Rohdichte (weniger Poren/Luft) und mehr Feuchte erhöhen λ; ruhende Luft dämmt. Metalle sind sehr GUTE Wärmeleiter (großes λ)."
  },
  {
    t:"bp-waerme-rech",
    q:"Welche Aussagen zu R, R_T und U sind korrekt?",
    o:[
      "Der Wärmedurchlasswiderstand einer Schicht ist R = d / λ.",
      "Der U-Wert ist der Kehrwert des Wärmedurchgangswiderstands: U = 1/R_T.",
      "Ein kleiner U-Wert bedeutet eine gut gedämmte Konstruktion.",
      "Ein großer U-Wert bedeutet einen geringen Wärmeverlust."
    ],
    c:[0,1,2],
    e:"R = d/λ, U = 1/R_T, kleiner U = gute Dämmung. Ein GROSSER U-Wert bedeutet hohe Wärmeverluste (schlechte Dämmung)."
  },
  {
    t:"bp-waerme-rech",
    q:"Welche Aussagen zum Wärmeschutznachweis nach DIN 4108-2 sind korrekt?",
    o:[
      "Nachweise werden mit dem Bemessungswert der Wärmeleitfähigkeit geführt.",
      "Der Nachweis ist erfüllt, wenn der vorhandene R-Wert den Mindestwert erreicht/überschreitet.",
      "Für leichte Bauteile gelten höhere Mindestanforderungen als für schwere.",
      "Der Nachweis ist erfüllt, wenn der U-Wert möglichst groß ist."
    ],
    c:[0,1,2],
    e:"Bemessungswert (mit Sicherheitszuschlag) verwenden; Nachweis erfüllt bei R_vorh ≥ R_erf; leichte Bauteile brauchen mehr Dämmung. Ein großer U-Wert ist schlecht – gefordert ist ein kleiner U bzw. großer R."
  },
  {
    t:"bp-waerme",
    q:"Welche Aussagen zu Wärmebrücken sind korrekt?",
    o:[
      "Man unterscheidet materialbedingte (stoffliche) und geometrische Wärmebrücken.",
      "An Wärmebrücken ist die Innenoberfläche kälter → erhöhte Schimmelgefahr.",
      "Wärmebrücken erhöhen die Wärmeverluste des Gebäudes.",
      "Wärmebrücken verbessern die Dämmwirkung des Bauteils."
    ],
    c:[0,1,2],
    e:"Wärmebrücken (stofflich/geometrisch) führen zu erhöhtem Wärmeabfluss, kälteren Oberflächen (Schimmel) und höheren Verlusten. Sie VERSCHLECHTERN den Wärmeschutz, sie verbessern ihn nicht."
  },
  {
    t:"bp-waerme-rech",
    q:"Welche Aussagen zum Temperaturverlauf in einem Bauteil (stationär) sind korrekt?",
    o:[
      "Der Temperaturabfall über eine Schicht ist proportional zu deren R-Wert.",
      "Über die Dämmschicht (großes R) fällt der größte Temperaturanteil ab.",
      "Δθ einer Schicht = (R_Schicht / R_T) · Gesamttemperaturdifferenz.",
      "Über eine dünne Putzschicht fällt am meisten Temperatur ab."
    ],
    c:[0,1,2],
    e:"Der Temperaturabfall verteilt sich proportional zu den R-Werten; die Dämmschicht mit dem größten R trägt den größten Abfall. Über eine dünne Putzschicht (kleines R) fällt nur wenig Temperatur ab."
  },
  {
    t:"bp-waerme",
    q:"Welche Maßnahmen verbessern den sommerlichen Wärmeschutz?",
    o:[
      "Außenliegende Verschattung (z.B. Rollläden vor der Scheibe).",
      "Schwere, speicherfähige Bauteile.",
      "Nächtliches Lüften (Nachtauskühlung).",
      "Innendämmung ist für den sommerlichen Wärmeschutz genauso wirksam wie Außendämmung."
    ],
    c:[0,1,2],
    e:"Außenliegende Verschattung, Speichermasse und Nachtlüftung dämpfen die sommerliche Überhitzung. Innendämmung ist sommerlich WENIGER wirksam, da die Speichermasse der Wand abgekoppelt wird."
  },

  /* ================= BAUPHYSIK – FEUCHTE ================= */
  {
    t:"bp-feuchte",
    q:"Welche Aussagen zur Luftfeuchte sind korrekt?",
    o:[
      "Die relative Feuchte ist φ = c / c_s (Verhältnis zu Sättigung).",
      "Warme Luft kann mehr Wasserdampf aufnehmen als kalte.",
      "Eine relative Feuchte über 100 % ist praktisch nicht möglich.",
      "Kalte Luft kann mehr Wasserdampf aufnehmen als warme."
    ],
    c:[0,1,2],
    e:"φ = c/c_s = p_D/p_sat; warme Luft hat eine höhere Sättigungskonzentration; über 100 % kondensiert der Dampf. Kalte Luft kann WENIGER aufnehmen als warme."
  },
  {
    t:"bp-feuchte",
    q:"Welche Aussagen zu Tauwasser und Taupunkt sind korrekt?",
    o:[
      "Tauwasser bildet sich, wenn eine Oberfläche kälter als der Taupunkt ist.",
      "Ein höherer Raumfeuchtegehalt bedeutet einen höheren Taupunkt.",
      "Am Taupunkt beträgt die relative Feuchte 100 %.",
      "Tauwasser tritt nur auf, wenn im ganzen Raum 100 % r.F. herrschen."
    ],
    c:[0,1,2],
    e:"Unterschreitet eine Oberfläche den Taupunkt (φ=100 % lokal), kondensiert Wasser; mehr Raumfeuchte hebt den Taupunkt. Es genügt eine lokal kalte Oberfläche – der ganze Raum muss nicht gesättigt sein."
  },
  {
    t:"bp-feuchte",
    q:"Welche Aussagen zur Schimmelbildung sind korrekt?",
    o:[
      "Kritisch ist bereits eine relative Feuchte von 80 % an der Bauteiloberfläche.",
      "Für Schimmelwachstum ist nicht zwingend flüssiges Wasser nötig.",
      "Kalte Oberflächen (Wärmebrücken) sind besonders gefährdet.",
      "Schimmel wächst erst ab 100 % r.F. an der Oberfläche."
    ],
    c:[0,1,2],
    e:"Ab 80 % r.F. an der Oberfläche (bei 20 °C/50 % ≈ 12,6 °C Oberflächentemperatur) besteht Schimmelgefahr – flüssiges Wasser ist nicht nötig, kalte Stellen sind kritisch. Nicht erst bei 100 %."
  },
  {
    t:"bp-feuchte",
    q:"Welche Aussagen zum Lüften sind korrekt?",
    o:[
      "Stoßlüften (kurz, weit, Durchzug) ist effektiver als Dauerkippen.",
      "Ein unbeheizter Keller sollte zum Trocknen eher im Winter gelüftet werden.",
      "Auch bei geschlossenem Fenster gibt es einen kleinen Luftaustausch über Fugen.",
      "Ein dauerhaft gekipptes Fenster ist im Winter die energetisch beste Lösung."
    ],
    c:[0,1,2],
    e:"Stoßlüften tauscht Feuchte schnell bei wenig Wärmeverlust; der Keller wird im Winter (kalte, trockene Luft) getrocknet; ein Grundluftwechsel besteht immer. Dauerkippen kühlt Laibungen aus und verschwendet Energie."
  },
  {
    t:"bp-feuchte-tr",
    q:"Welche Aussagen zur Wasserdampf-Diffusionswiderstandszahl µ und zu s_d sind korrekt?",
    o:[
      "µ ist dimensionslos; für Luft gilt µ = 1.",
      "Die diffusionsäquivalente Luftschichtdicke ist s_d = µ · d.",
      "Eine Beschichtung mit s_d = 0,3 m gilt als diffusionsoffen.",
      "Ein großes µ bedeutet, dass der Baustoff besonders diffusionsoffen ist."
    ],
    c:[0,1,2],
    e:"µ ist dimensionslos (Luft = 1), s_d = µ·d; s_d < 0,5 m = diffusionsoffen (0,3 m also offen). Ein GROSSES µ bedeutet diffusionsDICHT, nicht offen."
  },
  {
    t:"bp-feuchte-tr",
    q:"Welche Aussagen zu Wasserdampfdiffusion und Dampfsperre sind korrekt?",
    o:[
      "Wasserdampf diffundiert von hohem zu niedrigem Wasserdampfdruck.",
      "Im Winter erfolgt die Diffusion überwiegend von innen (warm) nach außen.",
      "Eine Dampfsperre wird auf der warmen Innenseite angeordnet.",
      "Im Winter diffundiert der Wasserdampf von außen nach innen."
    ],
    c:[0,1,2],
    e:"Antrieb ist das Dampfdruckgefälle (hoch → niedrig), im Winter innen → außen; die Dampfsperre/-bremse gehört auf die warme Innenseite. Von außen nach innen (Winter) ist falsch."
  },
  {
    t:"bp-feuchte-tr",
    q:"Welche Aussagen zum Feuchtetransport in Poren sind korrekt?",
    o:[
      "In Kapillarporen wird Wasser flüssig, schnell und tief transportiert.",
      "In Luftporen findet kein kapillarer Transport statt.",
      "Außengedämmte Wände sind feuchtetechnisch meist günstiger als innengedämmte.",
      "Gelporen transportieren Wasser am schnellsten in die Tiefe."
    ],
    c:[0,1,2],
    e:"Kapillarporen transportieren flüssig/schnell/tief; Luftporen sind zu groß für Kapillarwirkung; Außendämmung hält die Wand warm (weniger Tauwasser). Gelporen sind sehr klein → langsamer Transport, nicht der schnellste."
  },

  /* ================= BAUPHYSIK – SCHALL ================= */
  {
    t:"bp-schall",
    q:"Welche Aussagen zum Schall und seinen Arten sind korrekt?",
    o:[
      "Luftschall breitet sich über die Luft aus (z.B. Sprechen, Musik).",
      "Trittschall ist eine Sonderform des Körperschalls (Begehen der Decke).",
      "Schall ist eine Druckschwankung in einem elastischen Medium.",
      "Schall breitet sich auch im Vakuum aus."
    ],
    c:[0,1,2],
    e:"Luftschall (über Luft), Trittschall (Körperschall durch Begehen) und Schall als Druckwelle sind korrekt. Ohne Medium (Vakuum) gibt es keine Schallausbreitung."
  },
  {
    t:"bp-schall",
    q:"Welche Aussagen zur Schalldämmung von Wänden sind korrekt?",
    o:[
      "Bei einschaligen Wänden verbessert mehr flächenbezogene Masse die Dämmung (Massegesetz).",
      "Bei zweischaligen Wänden hilft die Entkopplung der Schalen (Feder-Masse-Prinzip).",
      "Ein höheres bewertetes Schalldämm-Maß R_w bedeutet bessere Dämmung.",
      "Schallbrücken verbessern die Dämmung einer zweischaligen Wand."
    ],
    c:[0,1,2],
    e:"Einschalig: Masse erhöhen (Bergersches Massegesetz); zweischalig: entkoppeln; höheres R_w = besser. Schallbrücken (starre Verbindungen) VERSCHLECHTERN die Dämmung, da sie die Trennung überbrücken."
  },
  {
    t:"bp-schall",
    q:"Welche Aussagen zu Schalldämmung, Schalldämpfung und dB(A) sind korrekt?",
    o:[
      "Schalldämmung behindert die Schallübertragung von Raum zu Raum.",
      "Schalldämpfung (Absorption) reduziert die Nachhallzeit im selben Raum.",
      "Die A-Bewertung dB(A) berücksichtigt das frequenzabhängige Hörempfinden.",
      "dB(A) erfasst ausschließlich tiefe Frequenzen."
    ],
    c:[0,1,2],
    e:"Dämmung = Übertragung ins Nachbarzimmer behindern; Dämpfung = Absorption im Raum (Nachhall); dB(A) passt den Pegel ans Gehör an. dB(A) betrifft den gesamten hörrelevanten Bereich, nicht nur tiefe Frequenzen."
  },

  /* ================= BAUPHYSIK – BRAND ================= */
  {
    t:"bp-brand",
    q:"Welche Aussagen zu den Baustoffklassen nach DIN 4102-1 sind korrekt?",
    o:[
      "Klasse A bezeichnet nichtbrennbare Baustoffe.",
      "B2 bedeutet normal entflammbar.",
      "Bauholz (> 5 mm bzw. > 400 kg/m³) ist in der Regel B2.",
      "Klasse A bezeichnet leicht entflammbare Baustoffe."
    ],
    c:[0,1,2],
    e:"A = nichtbrennbar, B1 schwer / B2 normal / B3 leicht entflammbar; Bauholz ist üblicherweise B2. A ist gerade NICHT brennbar (nicht leicht entflammbar)."
  },
  {
    t:"bp-brand",
    q:"Welche Aussagen zu Feuerwiderstandsklassen und Brandverhalten sind korrekt?",
    o:[
      "F90 bedeutet eine Feuerwiderstandsdauer von 90 Minuten.",
      "Der Zusatz '-A' (z.B. F90-A) steht für nichtbrennbare Baustoffe.",
      "Stahl ist nichtbrennbar, verliert im Brand aber rasch an Festigkeit.",
      "Die Zahl bei F90 gibt die Bauteildicke in Zentimetern an."
    ],
    c:[0,1,2],
    e:"F90 = 90 min Feuerwiderstand; -A = nichtbrennbare Baustoffe; Stahl ist nichtbrennbar, versagt aber bei Hitze früh (Festigkeitsverlust) – Holz brennt dagegen langsam/berechenbar ab. Die Zahl sind Minuten, nicht Zentimeter."
  },

  /* ================= ALTKLAUSUR-FRAGEN MIT 6 OPTIONEN (wie in der echten Klausur) ================= */
  {
    t:"holz-schutz",
    q:"Welche Aussagen zu Holzschäden und Holzschutz sind korrekt? (2 von 6)",
    o:[
      "Pilze der Weißfäule bauen den Holzinhaltsstoff Lignin ab.",
      "Beim baulichen Holzschutz wird die Feuchteanreicherung im Holz vermieden.",
      "Bläuepilze verursachen einen Festigkeitsverlust durch Zellwandabbau.",
      "Bei der Sanierung bereits eingetretener Holzschäden ist der bauliche Holzschutz die effektivste Methode.",
      "Das Larvenwachstum holzzerstörender Insekten ist in der Nutzungsklasse I schneller als in der Nutzungsklasse III.",
      "Um das Schwinden des Holzes zu verhindern, werden Dichtungsschichten und offenporiger Holzschutz eingesetzt."
    ],
    c:[0,1],
    e:"Richtig: Weißfäule baut Lignin ab; baulicher Holzschutz vermeidet Feuchteanreicherung. Falsch: Bläue verfärbt nur (kein Festigkeitsverlust); bei bereits eingetretenem Schaden hilft baulicher Schutz nicht als Sanierung; feuchtere Nutzungsklassen fördern Insekten stärker; Schwinden verhindert man durch konstante Feuchte, nicht durch offenporigen Schutz."
  },
  {
    t:"holz-sortier",
    q:"Nach welchen Kriterien erfolgt die Einteilung von Nadelschnittholz in Sortierklassen? (2 von 6)",
    o:[
      "Ästigkeit und Faserneigung.",
      "Risse und Krümmung des Holzes.",
      "Schwinden und Quellen des Holzes.",
      "Feuchtegehalt und Verformungsverhalten.",
      "Belastungsdauer.",
      "Zugfestigkeit parallel zur Faser."
    ],
    c:[0,1],
    e:"Die visuelle Sortierung nutzt sichtbare Wuchs-/Gefügemerkmale: Ästigkeit, Faserneigung, Risse, Krümmung, Markröhre, Baumkante usw. Schwinden/Quellen, Feuchtegehalt, Belastungsdauer und die konkrete Zugfestigkeit sind keine visuellen Sortierkriterien."
  },
  {
    t:"holz-mechanik",
    q:"Welche Aussagen zu den Eigenschaften von Vollholz sind korrekt? (3 von 6)",
    o:[
      "Je größer die Rohdichte, desto größer die Zugfestigkeit des Holzes.",
      "Eine Feuchtezunahme zwischen Gleichgewichts- und Fasersättigungsfeuchte vermindert den E-Modul.",
      "Es besteht ein linearer Zusammenhang zwischen Rohdichte und Festigkeit.",
      "Je größer die Rohdichte, desto kleiner die Druckfestigkeit des Holzes.",
      "Je größer der Winkel zwischen Kraft- und Faserrichtung, desto größer die Festigkeit.",
      "Die Gleichgewichtsfeuchte ist von der Härte des Holzes abhängig."
    ],
    c:[0,1,2],
    e:"Richtig: höhere Rohdichte → höhere Zugfestigkeit (linearer Zusammenhang); mehr Feuchte → geringerer E-Modul. Falsch: höhere Rohdichte STEIGERT auch die Druckfestigkeit; ein größerer Winkel zur Faser SENKT die Festigkeit; die Gleichgewichtsfeuchte hängt vom Klima (rel. Luftfeuchte) ab, nicht von der Härte."
  },
  {
    t:"stahl-herst",
    q:"Welche Aussagen zur Stahlherstellung und Wärmebehandlung sind korrekt? (2 von 6)",
    o:[
      "Unberuhigt vergossener Stahl ist inhomogen und hat eine weiche Randzone.",
      "Vollberuhigt vergossener Stahl lässt sich gut verformen und schweißen.",
      "Je höher der Umformungsgrad des Stahls, desto höher die Bruchdehnung (A).",
      "Härten des Stahls verbessert die Zähigkeit und die Kaltverformbarkeit.",
      "Kaltumformung des Stahls erfolgt bei Temperaturen unterhalb des Gefrierpunkts.",
      "Normalglühen erzeugt ein nadeliges, sehr hartes, grobkörniges Gefüge."
    ],
    c:[0,1],
    e:"Richtig: unberuhigt = inhomogen mit weicher Randzone; vollberuhigt (Al-Zugabe) = gut verform- und schweißbar. Falsch: höherer Umformungsgrad SENKT die Bruchdehnung; Härten macht spröde (nicht zäh); Kaltumformung = unterhalb der Rekristallisationstemperatur (nicht des Gefrierpunkts); ein nadeliges, hartes Gefüge ist Martensit (Härten), nicht Normalglühen (feinkörnig, gleichmäßig)."
  },
  {
    t:"stahl-korr",
    q:"Welche Aussagen zu Korrosion und Korrosionsschutz sind korrekt? (2 von 6)",
    o:[
      "Bei Lochfraßkorrosion sind die anodischen und kathodischen Bereiche örtlich klar getrennt.",
      "Spaltkorrosion entsteht durch eindringende Feuchte in Spalten bei schlechter Belüftung.",
      "Ursache für Spannungsrisskorrosion sind Chloride, die bis zur Bewehrung vorgedrungen sind.",
      "Die Korrosionsbelastung in der Stadt ist höher als am Meer.",
      "Beim Kontakt zweier gleich großer Metallflächen (edel/unedel) treten extrem hohe Korrosionsgeschwindigkeiten auf.",
      "Kathodischer Korrosionsschutz verursacht den Kornzerfall hochfester Stähle unter hoher Spannung."
    ],
    c:[0,1],
    e:"Richtig: Lochfraß = klar getrennte Anoden/Kathoden; Spaltkorrosion = Feuchte in schlecht belüfteten Spalten. Falsch: Chloride lösen v. a. Lochfraß aus; am Meer (Salz) ist die Belastung höher als in der Stadt; extreme Raten treten bei KLEINER unedler und großer edler Fläche auf; Kornzerfall gehört zur Spannungsrisskorrosion, nicht zum kathodischen Schutz."
  },
  {
    t:"stahl-eig",
    q:"Welche Aussagen zum Stahl-Zugversuch und zu den Eigenschaften sind korrekt? (2 von 6)",
    o:[
      "Anhand des Zugversuchs kann die Art der Behandlung (kalt/warm) festgestellt werden.",
      "Der Zugversuch stellt u. a. die Bruchdehnung des Stahls fest.",
      "Je geringer der Kohlenstoffgehalt, desto kleiner die Bruchdehnung des Stahls.",
      "Kaltverformte Stähle haben einen höheren Kohlenstoffgehalt als naturharte Stähle.",
      "Der Zugversuch wird durch Einspannen des Probestücks unter schlagartiger Beanspruchung durchgeführt.",
      "Stähle gelten als schweißgeeignet, wenn sie einen höheren Kohlenstoffgehalt aufweisen."
    ],
    c:[0,1],
    e:"Richtig: der Zugversuch zeigt die Behandlungsart (kalt/warm) und die Bruchdehnung. Falsch: geringerer C-Gehalt ergibt eine HÖHERE Bruchdehnung; der C-Gehalt hängt nicht von kalt/warm ab; schlagartig = Kerbschlagbiegeversuch (nicht Zugversuch); schweißgeeignet sind Stähle mit NIEDRIGEM C-Gehalt (< 0,3 %)."
  }
];

/* Für Nutzung im Browser */
/* ---- THEMEN-WISSEN ----
   Je Thema: k = Kontext, z = Zitat/Beleg aus den Unterlagen, q = Quelle, m = Merktipp.
   Wird unter jeder Karteikarte und unter jeder Prüfungsbegründung angezeigt.
   Karten/Fragen können einzelne Felder per k/z/q/m überschreiben. */
const THEMA_INFO = {
  "holz-aufbau": {
    k: "Der Aufbau des Holzes erklärt fast alle späteren Eigenschaften (Anisotropie, Festigkeit, Feuchteverhalten) – deshalb steht er am Anfang und wird gern in Grundlagenfragen abgeprüft.",
    z: "„Frühholz: … dünnwandige, großporige (weitlumige) Zellen … dienen dem raschen Wassertransport. Spätholz: dickwandige, englumige Zellen … vor allem für die Festigkeit verantwortlich.“",
    q: "Vorlesung Ayoubi – „Bestandteile und Aufbau von Holz“ (Teil 1) / Fragenkatalog: Holz-Aufbau von Holz.pdf, S. 3",
    m: "Eselsbrücke: FRÜHholz = Fließen (Wasser, weit & weich), SPÄTholz = Stabilität (dick & fest). Und: Zellulose = Zug (beide mit Z), Lignin = Last/Druck."
  },
  "holz-feuchte": {
    k: "Holzfeuchte ist die zentrale Stellgröße: Sie steuert Festigkeit, Schwinden/Quellen und Dauerhaftigkeit. Fast jede Rechenaufgabe beginnt mit einer Feuchtebetrachtung.",
    z: "„Fasersättigung der europäischen Hölzer ist zwischen 18 und 35 M.-% (im Mittel rd. 30 M.-%).“ – frisch geschlagenes Holz: 40–60 M.-%.",
    q: "Vorlesung Ayoubi – „Feuchte, Dichte und Rohdichte“ (Teil 1), S. 4–5",
    m: "Zahlenreihe merken 12 – 30 – 60: 12 % Gleichgewicht (Innenklima), ~30 % Fasersättigung (Wendepunkt fürs Schwinden), 40–60 % frisch. DICHTE = ohne Poren (rein), ROHdichte = mit Poren (roh)."
  },
  "holz-mechanik": {
    k: "Die mechanischen Eigenschaften sind stark richtungs- und feuchteabhängig – Grundlage für Bemessung und für die typischen Verformungs-Rechenaufgaben.",
    z: "„Druckfestigkeit ≈ 50 %, Biegefestigkeit ≈ 80 %, Scherfestigkeit ≈ 10 % der Zugfestigkeit.“",
    q: "Vorlesung Ayoubi – „Holzeigenschaften: Mechanische Beanspruchung“ (Teil 1)",
    m: "Reihenfolge „Zu-Bi-Dru-Sche“ = Zug > Biege > Druck > Scher, grob 100 – 80 – 50 – 10 % der Zugfestigkeit. Feuchte↑ → Festigkeit & E-Modul↓ (Wasser weicht die Bindungen auf)."
  },
  "holz-schutz": {
    k: "Dauerhaftigkeit entscheidet über die Lebensdauer. Wichtig ist die Unterscheidung baulicher (konstruktiver) ↔ chemischer Holzschutz und die Fäulearten.",
    z: "„Pilze, die Weißfäule verursachen, bauen den ‚braunen‘ Holzinhaltsstoff Lignin ab … das Holz … verfärbt sich hell bis weiß.“",
    q: "Vorlesung Ayoubi – „Dauerhaftigkeit von Holz: Holzschäden, Holzschutz“ (Teil 1), S. 9",
    m: "Farb-Trick (gegensätzlich!): WEISSfäule frisst das braune LIGNIN → Holz wird hell. BRAUNfäule frisst die helle ZELLULOSE → Holz wird braun (Würfelbruch). Bläue = nur Farbe, keine Festigkeit."
  },
  "holz-sortier": {
    k: "Die Sortierung nach DIN 4074-1 verbindet sichtbare Merkmale mit der Tragfähigkeit (Festigkeitsklasse). Klassiker in MC-Fragen.",
    z: "„Blitzrisse und Ringschäle … generell nicht zulässig … Je kleiner die Faserneigung der Bretter, desto höher die Tragfähigkeit.“",
    q: "Vorlesung Ayoubi – „Bauholz und Sortierung“ (Teil 1), S. 5 – DIN 4074-1",
    m: "S7/S10/S13 = zulässige Biegespannung in N/mm². Höhere Zahl = strenger (weniger Äste, bei S13 keine Markröhre). Merke: „klein & gerade = stark“ (kleine Äste/Faserneigung → hohe Klasse)."
  },
  "holz-werkstoff": {
    k: "Holzwerkstoffe verbessern Homogenität, Dimensionen und Formbarkeit gegenüber Vollholz. Prüfungsfalle: BSH ≠ BFU verwechseln.",
    z: "„BS-Holz … aus mindestens drei parallel in Längsrichtung geschichteten, verklebten Vollholz-Lamellen.“ – BFU: „durch kreuzweises Anordnen und Verkleben der Furniere.“",
    q: "Vorlesung Ayoubi – „Brettschichtholz und Holzwerkstoffe“ (Teil 1), S. 7",
    m: "BSH = Bretter PARALLEL geschichtet (GL/Glulam). BFU = Furniere KREUZweise (wie Sperrholz) → verringerte Anisotropie, Kraft in 2 Richtungen."
  },
  "stahl-herst": {
    k: "Herstellung und Gefüge bestimmen alle Stahleigenschaften. Das Eisen-Kohlenstoff-Gefüge (Ferrit/Austenit/Perlit/Martensit) ist ein Prüfungsschwerpunkt.",
    z: "„Vollberuhigt vergossen … sehr ‚sauberer‘, feinkörniger und sehr zäher Stahl, der sich sehr gut verformen und schweißen lässt.“ – Frischen senkt den C-Gehalt.",
    q: "Vorlesung Ayoubi – „Stahl: Herstellung, Formgebung, Wärmebehandlung und Gefüge“ (Teil 1), S. 8/23/84",
    m: "Gefüge merken: FERRIT weich (α, fast kein C) · AUSTENIT löst C gut (γ, größer) · ZEMENTIT Fe₃C hart+spröde · PERLIT = Ferrit+Zementit-Lamellen · MARTENSIT = schnell abgeschreckt, nadelig & spröde. Feinkorn = fein & fest."
  },
  "stahl-waerme": {
    k: "Durch Wärmebehandlung wird gezielt Festigkeit vs. Zähigkeit eingestellt. Der Klausur-Klassiker sind die drei Kurven im Spannungs-Dehnungs-Diagramm.",
    z: "„Härten … sehr schnelles Abkühlen (Abschrecken) … nadeliges, sehr hartes Gefüge … Martensit.“ – Vergüten = Härten + Wiedererwärmen + langsames Abkühlen.",
    q: "Vorlesung Ayoubi – „Stahl_1: Anforderungen und Eigenschaften“ (Teil 2), S. 50",
    m: "Kurven-Klassiker: Stahl 1 = gehärtet (hart/spröde), Stahl 2 = vergütet (Mitte), Stahl 3 = normalgeglüht (weich/zäh). Faustregel: schnell abkühlen = hart, langsam = zäh."
  },
  "stahl-eig": {
    k: "Der Zugversuch liefert die Bemessungskennwerte (Streckgrenze, Zugfestigkeit, Bruchdehnung); der Kerbschlagbiegeversuch die Zähigkeit/Sprödbruchneigung.",
    z: "„Kerbschlagbiegeversuch … schlagartige Beanspruchung … Übergangstemperatur … Sprödbruchneigung bei tiefen Temperaturen.“",
    q: "Vorlesung Ayoubi – „Stahl_1: Anforderungen und Eigenschaften“ (Teil 2), S. 26/56",
    m: "Zugversuch = langsam ziehen (R_e, R_m, A). Kerbschlag = schlagartig (Zähigkeit, T_Ü). R_p0,2 = Ersatz-Streckgrenze bei 0,2 % bleibender Dehnung (kaltverformter Stahl)."
  },
  "stahl-korr": {
    k: "Korrosion ist ein elektrochemischer Prozess (Anode/Kathode, Elektrolyt, Potentialdifferenz). Unterscheide aktiven ↔ passiven Schutz.",
    z: "„Der passive Korrosionsschutz erfolgt durch die Trennung vom angreifenden Medium.“ – „Je höher die Potentialdifferenz … desto stärker die Kontaktkorrosion.“",
    q: "Vorlesung Ayoubi – „Stahl: Korrosion und Korrosionsschutz“ (Teil 2), ab S. 51/63",
    m: "AKTIV = am Prozess ansetzen (Gestaltung/Wasserabfluss, Werkstoffwahl, kathodisch/Opferanode). PASSIV = Panzer drumherum (Beschichtung, Verzinken = Trennung). Das unedlere Metall opfert sich."
  },
  "stahl-beton": {
    k: "Betonstahl übernimmt die Zugkräfte im Beton; Spannstahl bringt zusätzlich Druck in den Beton ein. Kennwerte und Bezeichnungen werden abgefragt.",
    z: "„Betonstahl … charakteristische Fließ- oder Streckgrenze von 500 N/mm² … B500B – hohe Duktilität.“",
    q: "Vorlesung Ayoubi – „Betonstahl / Spannstahl für Spannbeton“ (Teil 1), S. 17 – DIN 488-1",
    m: "B500B: 500 = Streckgrenze [N/mm²], B = hohe Duktilität (warmgewalzt, 2 od. 4 Rippenreihen), A = normal duktil (kaltverformt, 3 Rippenreihen). Spannstahl ~0,5 % C → NICHT schweißbar."
  },
  "grundlagen": {
    k: "Die Grundbegriffe (Spannung, Festigkeit, Dehnung, Hooke, Dichten, Poren) gelten materialübergreifend und sind die Basis für alle Rechenaufgaben.",
    z: "„σ = E · ε … proportionaler Zusammenhang zwischen Spannung und Dehnung bei der Verformung“ (Hookesches Gesetz).",
    q: "Vorlesung Ayoubi – „Baustoffkunde: Grundlagen“",
    m: "Spannung σ = F/A (aktuelle Beanspruchung) ↔ Festigkeit f = maxF/A (Grenze). Dehnung ε = Δl/l₀ (dimensionslos). Hooke σ = E·ε gilt NUR im elastischen Bereich."
  },
  "bk-rechnen": {
    k: "Die Klausur ist rechenlastig: Feuchte-/Transport-, Verformungs- (elastisch + Feuchte + Kriechen), Biege- und Zugversuchsaufgaben kehren jedes Semester wieder.",
    z: "„Berechnen Sie die Verformung (Verkürzung) … Untersuchen Sie die Belastung senkrecht und parallel zur Faserrichtung.“ (Klausuraufgabe Ayoubi)",
    q: "Übungs- und Klausuraufgaben Baustoffkunde (Ayoubi, SS/WS 2017–2019)",
    m: "Fester Rechenweg: 1) Fläche/Geometrie → 2) σ = F/A → 3) elastisch Δl = σ/E·l → 4) Feuchte α·Δu·l → 5) Kriechen ×(1+φ). Einheiten stur in N und mm halten!"
  },
  "bp-waerme": {
    k: "Wärmeschutz spart Energie, sichert Behaglichkeit und verhindert Tauwasser/Schimmel. Grundlage sind die drei Transportmechanismen und die Kenngröße λ.",
    z: "„Welche drei Wärmetransportmechanismen gibt es?“ → Wärmeleitung, Konvektion, Strahlung.",
    q: "Bauphysik – „Wärmeschutz, Verständnisfragen“ (Rucker-Gramm, Aufgabensammlung)",
    m: "3 Transportarten „L-K-S“: Leitung (Festkörper), Konvektion (bewegte Luft), Strahlung (auch Vakuum). λ steigt mit Rohdichte↑ und Feuchte↑ (Wasser leitet gut, Luft dämmt)."
  },
  "bp-waerme-rech": {
    k: "Der Wärmeschutznachweis (DIN 4108-2) läuft immer über dieselbe Formelkette von R über R_T zu U – zentral für die Rechenaufgaben der Bauphysik.",
    z: "„R = d/λ … R_T = R_si + ΣR + R_se … U = 1/R_T.“",
    q: "Bauphysik – „Wärmeschutztechnische Nachweise nach DIN 4108-2“ (Rucker-Gramm)",
    m: "Formelkette: d/λ → R (Schicht) → +Übergänge → R_T → Kehrwert → U. Merke: großes R = gut, großes U = schlecht. Wand: R_si = 0,13, R_se = 0,04 m²K/W."
  },
  "bp-feuchte": {
    k: "Feuchteschutz verhindert Tauwasser und Schimmel. Kern ist der Zusammenhang von Temperatur, Sättigung und relativer Feuchte.",
    z: "„Bei welcher relativen Luftfeuchte ist mit Schimmelpilzbildung zu rechnen?“ → kritisch bereits ab 80 % r.F. an der Oberfläche (DIN 4108-2).",
    q: "Bauphysik – „Feuchteschutz, Verständnisfragen“ (Rucker-Gramm)",
    m: "φ = c/c_s. Warme Luft „schluckt“ mehr Wasser als kalte. Taupunkt = wo φ = 100 %. Schimmel schon ab 80 % an der Oberfläche (bei 20/50 ≈ 12,6 °C), nicht erst bei 100 %."
  },
  "bp-feuchte-tr": {
    k: "Feuchtetransport (Diffusion, Kapillarität) und der Tauwassernachweis (Glaser) sind das rechnerische Herzstück des Feuchteschutzes.",
    z: "„Wie ist die diffusionsäquivalente Luftschichtdicke s_d definiert?“ → s_d = µ · d.",
    q: "Bauphysik – „Feuchteschutz / Diffusion, DIN 4108-3“ (Rucker-Gramm)",
    m: "µ = Faktor „wie viel schlechter als Luft“ (Luft µ=1). s_d = µ·d [m]: < 0,5 m offen, > 1500 m dicht. Dampfsperre gehört auf die warme (Innen-)Seite."
  },
  "bp-schall": {
    k: "Schallschutz trennt Begriffe (Luft-/Tritt-/Körperschall) und Kenngrößen (Pegel, R_w, Nachhallzeit). Ein- und zweischalige Wände werden unterschiedlich verbessert.",
    z: "„Was beschreibt das bewertete Schalldämm-Maß R_w?“ → Einzahlangabe der Luftschalldämmung eines Bauteils.",
    q: "Bauphysik – „Schallschutz“ (Rucker-Gramm)",
    m: "Luftschall (über Luft), Trittschall (Decke begehen). Einschalig = Masse (schwer bauen!), zweischalig = entkoppeln (keine Schallbrücken!). R_w hoch = gut. Dämmung = Nachbarschutz, Dämpfung = Nachhall."
  },
  "bp-brand": {
    k: "Brandschutz unterscheidet das Brandverhalten der Baustoffe (Klassen) vom Feuerwiderstand der Bauteile (Klassen in Minuten).",
    z: "„Was bedeuten nach DIN 4102-1 die Baustoffklassen A, B1, B2, B3?“ → A nichtbrennbar; B1 schwer / B2 normal / B3 leicht entflammbar.",
    q: "Bauphysik – „Brandschutz nach DIN 4102-1“ (Rucker-Gramm)",
    m: "A = keine Flamme (nichtbrennbar); B = brennbar (1 schwer, 2 normal, 3 leicht). F + Zahl = Minuten Feuerwiderstand (F90 = 90 min). Holz = B2, brennt langsam & berechenbar."
  }
};

/* ---- TIPPS ----
   Inhaltlicher Denk-Anstoß je Thema: bringt dich auf die richtige Spur, OHNE die Lösung zu nennen.
   (Einzelne Karten können per Feld h einen eigenen, spezifischeren Tipp setzen.) */
const TIPPS = {
  "holz-aufbau": "Frag dich, welche Funktion die Zelle oder der Stoff im lebenden Baum hat – Wasser transportieren oder Last tragen. Daraus folgt fast alles.",
  "holz-feuchte": "Ordne den Wert auf der Feuchte-Achse ein: frisch → Fasersättigung → Gleichgewicht → darrtrocken. Und unterscheide: mit Poren (Rohdichte) oder ohne (Reindichte)?",
  "holz-mechanik": "Zwei Leitfragen helfen fast immer: In welche Richtung wirkt die Last (längs oder quer zur Faser)? Und wie feucht bzw. dicht ist das Holz?",
  "holz-schutz": "Trenne baulichen Schutz (Feuchte fernhalten) vom chemischen (Mittel). Bei Pilzen frag dich: Welcher Holzbestandteil wird abgebaut – und welche Farbe bleibt zurück?",
  "holz-sortier": "Denk an das Grundprinzip: Was stört den Faserverlauf oder die Tragfähigkeit? Mehr Störung (Äste, Faserneigung, Risse) bedeutet eine niedrigere Klasse.",
  "holz-werkstoff": "Achte auf die Orientierung der Schichten: parallel geschichtet oder kreuzweise verleimt? Daraus ergibt sich das Tragverhalten in den Richtungen.",
  "stahl-herst": "Zwei Stellschrauben steuern fast alles: der Kohlenstoffgehalt und die Abkühlgeschwindigkeit. Überleg, welche hier gemeint ist.",
  "stahl-waerme": "Die eine Leitfrage: Wie schnell wird abgekühlt? Rasch führt zu hart und spröde, langsam zu zäh. Vergüten kombiniert beide Schritte.",
  "stahl-eig": "Frag dich, ob langsam gezogen wird (Zugversuch: Festigkeit, Dehnung) oder schlagartig belastet (Kerbschlag: Zähigkeit, Übergangstemperatur).",
  "stahl-korr": "Zwei Ebenen: Wie entsteht die Korrosion (anodisch/kathodisch, Potentialunterschied)? Und ist der Schutz aktiv (Eingriff in den Prozess) oder passiv (Trennung vom Medium)?",
  "stahl-beton": "Denk an die Rolle im Beton: Zugkräfte aufnehmen (Betonstahl) oder vorspannen (Spannstahl). Achte auf Kohlenstoffgehalt (Schweißbarkeit) und Streckgrenze.",
  "grundlagen": "Trenne die Begriffe sauber: aktuelle Beanspruchung oder Grenzwert? Kraft pro Fläche oder Längenänderung? Und gilt der Zusammenhang nur im elastischen Bereich?",
  "bk-rechnen": "Geh den festen Rechenweg im Kopf durch: Fläche → Spannung → elastische Verformung → Feuchtedehnung → Kriechen. Welcher Schritt ist gefragt und welche Größe fehlt dir noch?",
  "bp-waerme": "Frag dich zuerst, welcher der drei Transportwege gemeint ist – und wie Rohdichte und Feuchte die Wärmeleitfähigkeit λ verändern.",
  "bp-waerme-rech": "Denk in der Formelkette: Schichtdicke durch λ ergibt R, plus die Übergänge ergibt R_T, der Kehrwert ergibt U. Was genau ist gesucht?",
  "bp-feuchte": "Leitgedanke: Kann die Luft bei ihrer Temperatur die Feuchte noch halten? Wird es kälter oder feuchter, nähert man sich dem Tauwasser.",
  "bp-feuchte-tr": "Behalte zwei Größen im Blick: wie dicht der Stoff gegen Dampf ist (µ) und die gleichwertige Luftschicht s_d = µ·d. Und: Wohin wandert der Dampf?",
  "bp-schall": "Sortiere zuerst die Schallart (Luft-, Körper- oder Trittschall). Für die Dämmung denk an Masse (einschalig) oder Entkopplung (zweischalig).",
  "bp-brand": "Trenne zwei Klassensysteme: Wie brennbar ist der Baustoff (A oder B) und wie lange hält das Bauteil stand (F plus Minutenzahl)?"
};

if (typeof window !== "undefined") {
  window.FAECHER = FAECHER;
  window.THEMEN = THEMEN;
  window.KARTEN = KARTEN;
  window.FRAGEN = FRAGEN;
  window.THEMA_INFO = THEMA_INFO;
  window.TIPPS = TIPPS;
}
