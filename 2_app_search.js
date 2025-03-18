const testCases = [
  {
    input_args: {
      apps: ['Audible', 'Settings', 'Spotify', 'Task Manager', 'Weather'],
      query: 'st',
    },
    expected_output: ['Settings', 'Spotify'],
  },
  {
    input_args: {
      apps: ['Nike Run Keeper', 'Google Podcasts', 'Spotify'],
      query: 'n',
    },
    expected_output: ['Nike Run Keeper'],
  },
  {
    input_args: {
      apps: ['Nike Run Keeper', 'Google Podcasts', 'Settings'],
      query: 'q',
    },
    expected_output: [],
  },
  {
    input_args: {
      apps: ['Nike Run Keeper', 'Google Podcasts', 'Settings'],
      query: 'ee',
    },
    expected_output: ['Nike Run Keeper'],
  },
  {
    input_args: {
      apps: ['Nike Run Keeper', 'Google Podcasts', 'Settings'],
      query: 'eee',
    },
    expected_output: ['Nike Run Keeper'],
  },
  {
    input_args: {
      apps: ['Nike Run Keeper', 'Google Podcasts', 'Settings'],
      query: 'eeeer',
    },
    expected_output: ['Nike Run Keeper'],
  },
  {
    input_args: {
      apps: ['Nike Run Keeper', 'Google Podcasts', 'Settings'],
      query: 'eeeee',
    },
    expected_output: [],
  },
];

function appSearch(apps, query) {
  // your code here
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

for (const testCase of testCases) {
  const { input_args, expected_output } = testCase;
  const result = appSearch(input_args.apps, input_args.query);

  console.log('\n\n');
  console.log({ input_args, result, expected_output });
}
