You work as part of a data visualization team are asked to visualize an array of `numbers` as a bar graph.

For example, if `numbers` is `[1, 1, 3, 4, 5, 6, 5, 2]`, then the graph should look like:

```


                           ***
                      ***  ***  ***
                 ***  ***  ***  ***
            ***  ***  ***  ***  ***
            ***  ***  ***  ***  ***  ***
  ***  ***  ***  ***  ***  ***  ***  ***


```

The visualization must follow the below rules:

- Each bar representing a number must have a width of 3 columns
- Each bar representing a number must have a height equal to the number's value
- There must be a gap of 2 spaces between each bar
- There must be 2 empty spaces on the left and right hand side of the graph.
- There must be 2 empty lines at the top and bottom of the graph

In the above example, since the highest value in `numbers` is `6` and we need `2` empty lines at the top and the bottom, the total height of the graph will be 10 (6 + 2 + 2).

Since there are 8 numbers in the graph, each having a width of 3 columns, and there are 7 gaps between the 8 numbers, and gaps of 2 columns each in the left and right hand side, the graph has a total width of 42(8 * 3 + 7 * 2 + 4).


The result must be a single string, `result` which follows the above criteria. Separate each line in `result` using the `\n` character.
