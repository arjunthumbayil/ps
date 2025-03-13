You are working on the Android platform and are tasked with searching for the names of apps that match a search query, `query`.

An app is matched if all the characters in `query` appear in the correct order in the app name.

Define a function that takes an array of items, `apps`, and a search query, `query` and returns all the apps that match the search query.

### Examples

Input:
```
apps = ["Audible", Settings", "Spotify", "Task Manager", "Weather"]
query = "st"
```

Output:

```
["Settings", "Spotify"]
```

Explanation:

Only "Settings" and "Spotify" have the characters "s" and "t" appearing in the correct order.


The "Task Manager" app also has the letters "s" and "t" in it, but in the wrong order. So it doesn't appear in the output.

"Audible" and "Weather" don't contain both "s" and "t". So these apps are also ignored.

-----

Input:

```
apps = ["Nike Run Keeper", "Google Podcasts", "Spotify"]
query = "n"
```

Output:

```
["Nike Run Keeper"]
```

Explanation:

Only "Nike Run Keeper" has the letter "n" in it

-----

**Note**

The search process has to be case-insensitive, i.e. it doesn't matter if the character appears as a lowercase or uppercase character.
