# Tracks anzeigen

> Mit dieser Übung kannst du das Lösen von CORS-Fehlern üben.

## Anweisungen:

- Daten von [openwhyd API](https://openwhyd.github.io/openwhyd/API) abrufen (Kein API-Key erforderlich)
- Verwende einen CORS-Proxy, um auf die API zuzugreifen, da sie keinen CORS-Header hat. [corsAnywhere](https://corsproxy.io/) proxy
- Im `response object` enthält die Eigenschaft „eId“ die eindeutige Kennung des Tracks/Videos auf seiner Quellplattform: Verwende die YouTube-Kennung `/yt/xxx`, die in `https://youtube.com/watch?v=xxx` übersetzt werden kann. [Response format: json](https://openwhyd.github.io/openwhyd/API#response-format-json)
- Sobald du die Tracks korrekt erhalten hast, benutze DOM, um sie auf deinem Bildschirm zu zeigen.
- Jeder Track sollte in einem separaten anklickbaren Link gezeigt werden und der Link sollte einen neuen Tab im Browser öffnen
- Jedes Item ist klickbar und öffnet das entsprechende YouTube Video

**Bonus**: Du kannst Tracks/Videos von anderen Plattformen wie SoundCloud & Vimeo anzeigen.
 

 ![preview](img/preview.png)