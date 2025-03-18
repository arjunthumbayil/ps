let apps = ['Audible', 'Settings', 'Spotify', 'Task Manager', 'Weather'];

let query = 'st';

function appSearch(apps, query) {
  const lowerQuery = query.toLowerCase();

  return apps.filter((app) => {
    const lowerApp = app.toLowerCase();

    let i = 0;
    let j = 0;

    while (i < lowerApp.length && j < lowerQuery.length) {
      if (lowerApp[i] === lowerQuery[j]) {
        j++;
      }
      i++;
    }
    return j === lowerQuery.length;
  });
}

console.log(appSearch(apps, query));
