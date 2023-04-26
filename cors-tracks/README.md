# Display Tracks

> This exercise will allow you to practice solving CORS errors

## Instructions:

- Fetch data from [openwhyd API](https://openwhyd.github.io/openwhyd/API) (No API-Key required)
- Use a CORS proxy to access the API, since it doesn't have a CORS header. [corsAnywhere](https://corsproxy.io/) proxy
- In the `response object` The `eId` property contains the unique identifier of the track/video on its source platform: use the `/yt/xxx` YouTube identifier that can be translated to `https://youtube.com/watch?v=xxx`. [Response format: json](https://openwhyd.github.io/openwhyd/API#response-format-json)
- Once you get the tracks correctly, use DOM to render them on your screen.
- Each track should be rendered in a separate clickable link and the link should open a new tab in the browser
- Each item is clickable and opens the corresponding YouTube video

**Bonus**: Display tracks/videos from other platforms like soundCloud & Vimeo.


![preview](img/preview.png)