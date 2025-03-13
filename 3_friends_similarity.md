You are building an app where people make friends online by finding other people who also share similar interests.

You are tasked with building the core logic for this app.

Each person lists their interests for the below 10 topics by giving a score between 0 to 10, for example:


```js
person = {
    "name": "person_a",
    "interests": {
      "sports": 9,
      "music": 8,
      "fitness": 7,
      "books": 7,
      "travel": 6,
      "movies": 5,
      "cooking": 4,
      "news": 3,
      "gaming": 4,
      "dancing": 3
    }
  }
```

A large number mapped to a particular interest indicates that the person is really interested in that topic, whereas a smaller number indicates that the person is not that interested.

Let's use an example to illustrate how to calculate the similarity between two people, named `person_a` and `person_b`

```js
people = [
  {
    "name": "person_a",
    "interests": {
      "sports": 9,
      "music": 8,
      "fitness": 7,
      "books": 7,
      "travel": 6,
      "movies": 5,
      "cooking": 4,
      "news": 3,
      "gaming": 4,
      "dancing": 2
    }
  },
  {
    "name": "person_b",
    "interests": {
      "sports": 4,
      "music": 8,
      "fitness": 4,
      "books": 8,
      "travel": 8,
      "movies": 7,
      "cooking": 5,
      "news": 3,
      "gaming": 8,
      "dancing": 10
    }
  }
]
```

For each interest, we calculate the similarity for that interest, and then sum up the individual similarities to find the total similarity.

To show how to calculate the individual similarity let's take the "books" interest.

`person_a` has provided `7` and `person_b` has provided `8`

The similarity for "books" is calculated by the below formula:

(10 - abs(`person_a_score` - `person_b_score`))

So the similarity is `(10 - abs(7 - 8))` which is equal to `9`

The similarities for each interest are added up to find the total similarity. You'll find that the total similarity between `person_a` and `person_b` is `74` based on:

```
sports 5
music 10
fitness 7
books 9
travel 8
movies 8
cooking 9
news 10
gaming 6
dancing 2
```

The problem is:

Given a list of `people` along with their names and interests, and the name of a particular person, `person`, list the names of the top 3 people similar to `person` sorted by the most similar to the least similar.

Assume that each person's name is unique.

------

### Code

See `3_friends_similarity.js`
