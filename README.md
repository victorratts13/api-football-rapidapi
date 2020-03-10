# api-football-rapidapi
Npm lib for https://www.api-football.com/

## How to use.

>- import api-football to your project

```js
import apiFotball from 'api-football-rapidapi';
```

>- use this format

```js
const rapidapi = new apiFotball('API_KEY');

rapidapi.get('v2/fixtures/live', '?').then((res) => {
    console.log(JSON.stringify(res, true, 1))
})
```

- v2/fixtures/live is endPoint (example: v2/timezone, v2/seasons, etc...)
-  ? is paramet (example: league_id, team_id, etc...)

to more information,

instagram: @victorRatts
twitter: @RattsVictor
Telegram: @VictorRatts




