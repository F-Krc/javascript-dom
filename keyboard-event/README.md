# Keyboard-Events-Selbstrecherche
Guck dir den Code an und versuche mithilfe von Google rauszufinden was da passiert. Beantworte dazu in deinen eigenen Worten hier im Readme folgende Fragen: 

1. Welches Event wird ausgelöst, wenn eine Taste auf der Tastatur gedrückt wird, während das Textfeld fokussiert ist?
2. Wie wird im Code verhindert, dass das Formular die Seite beim Absenden neulädt?
3. Was ist der Zweck von event.preventDefault() im Code?
4. Wie greifen wir im Code auf das Eingabeelement "username" des Formulars zu?
5. Was ist der Unterschied zwischen dem "keydown"- und dem "keyup"-Event?


Welches Event wird ausgelöst, wenn eine Taste auf der Tastatur gedrückt wird, während das Textfeld fokussiert ist?
Das "keydown"-Event wird ausgelöst, wenn eine Taste auf der Tastatur gedrückt wird, während das Textfeld fokussiert ist.

Wie wird im Code verhindert, dass das Formular die Seite beim Absenden neulädt?
Im Code wird die Methode "preventDefault()" auf das Eventobjekt angewendet, das ausgelöst wird, wenn das Formular abgesendet wird. Dadurch wird das Standardverhalten des Browsers verhindert, das Formular neu zu laden.

Was ist der Zweck von event.preventDefault() im Code?
Der Zweck von "event.preventDefault()" im Code ist, das Standardverhalten des Browsers zu verhindern. Im konkreten Fall wird damit verhindert, dass das Formular neu geladen wird, wenn es abgesendet wird.

Wie greifen wir im Code auf das Eingabeelement "username" des Formulars zu?
Im Code wird das Eingabeelement "username" des Formulars über seinen Namen ("name") angesprochen: document.forms["myForm"]["username"].value

Was ist der Unterschied zwischen dem "keydown"- und dem "keyup"-Event?
Das "keydown"-Event wird ausgelöst, wenn eine Taste auf der Tastatur gedrückt wird, während das "keyup"-Event ausgelöst wird, wenn die Taste wieder losgelassen wird.


Aufgaben:
1. Ändere den Code, sodass nur Zahlen im Innertext angezeigt werden, wenn der Benutzer auf eine Zahlentaste drückt.
2. Füge dem Formular ein neues Eingabefeld für das Alter hinzu und zeige den Wert in der Konsole an, wenn das Formular abgesendet wird.
3. Ändere den Code, sodass bei jedem Tastendruck auf der Tastatur die Hintergrundfarbe des Textfelds zufällig geändert wird.
4. Füge dem Code ein "reset"-Event hinzu, das das Formular zurücksetzt, wenn der Benutzer die Escape-Taste drückt, während das Textfeld fokussiert ist.
5. Implementiere eine Funktion, die überprüft, ob der im Formular eingegebene Name mindestens 3 Zeichen lang ist. Zeige eine Warnmeldung an, wenn der Name zu kurz ist.
