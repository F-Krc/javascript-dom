# Zitat des Tages

Erstelle eine App für zufällige Zitate, die ein zufälliges Zitat anzeigt, sobald der Nutzer die App(seite) lädt oder auf die Schaltfläche "Zufälliges Zitat abrufen" klickt.

1.  Erstelle eine Funktion, die ein zufälliges Zitat aus einem Array von
    Zitaten aus dem Array `js/index.js` zurückgibt. Denke daran, dass es eine nette Funktion für
    Zufallszahlen in der MDN-Dokumentation für `Math.random()` gibt.

**Hinweis:** _Manchmal_ ist es eine gute Idee, mehrere Funktionen zu erstellen, die jeweils nur einen bestimmten Zweck erfüllen, um den Code lesbarer und
und einfacher zu wartbar/erweiterbar zu machen.

2.  Füge eine Schaltfläche 'Random Quote' als `button` oder `input`-Element unter dem Zitat-Element ein. Wenn die Schaltfläche angeklickt wird, sollte ein neues Zitat gezeigt werden.

3.  **Optional:** Style nach deinem Geschmack und lade/verwende Bootstrap über CDN.


**BONUS** (Bitte so vieles davon machen, wie möglich)

- Keine Wiederholung von Zitaten: Drückt der Nutzer oder die Nutzerin auf den Button, soll immer ein Zitat erscheinen, das der Nutzer noch nicht gesehen hat. Erst wenn er alle Zitate aus dem Array gesehen hat, dürfen sich die Zitate wiederholen

- Mach das input feld read only

- Fünf Zitate (schwer): Füge einen zweiten Button hinzu ("5 quotes"). Wird dieser angeklickt, werden dem Nutzer nacheinander 5 Zitate angezeigt, die jeweils 5 Sekunden zu sehen sind. Hierbei kann dir window.setTimeout helfen

- Style die App mittels CSS. Verwende gerne Bootstrap via CDN.


> Tipp: In der folgenden Abbildung siehst du, wie dein Ergebnis aussehen sollte.

![demo](demo.gif)
