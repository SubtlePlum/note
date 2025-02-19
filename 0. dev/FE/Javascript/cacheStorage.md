# cacheStorage 사용법

```typescript
const [recommendWord, setRecommendWord] = useState<Array<any>>([]);

// valid && fetch && caching
const fetchSick = async (param: string) => {
  const BASE_URL = process.env.REACT_APP_BASE_SEARCH_URL;
  const cacheStorage = await caches.open("search");
  const responsedCache = await cacheStorage.match(`${BASE_URL}${param}`);
  try {
    if (responsedCache) {
      responsedCache.json().then((res) => {
        setRecommendWord(res);
      });
    } else {
      const response = await fetch(`${BASE_URL}${param}`);
      await cacheStorage.put(`${BASE_URL}${param}`, response);
      fetchSick(param);
      console.info("calling api");
    }
  } catch (error) {
    alert(error);
  }
};
```
