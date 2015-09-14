# Gradient Bar Charts

A ReactJS component for simple bar charts drawn with CSS `linear-gradient`.

## Use it!

Import the component into your project...

```
import BarChart from 'gradient-barcharts';
```

Then use component...

```
<BarChart data={DATA} width={500} height={100}/>
```

## Abuse it!

`<BarChart/>` accepts several `props`:
* `height` and `width`: Number. Determines the size of the bar chart. If the `height` is greater than the `width`, the bar chart will be vertical, with the data starting at the top. `width` greater than `height`? Horizontal bar chart, with the data laying out left to right.
* `className`: String. A `className` for the component (duh). Will default to `bar-chart`.
* `handleClick`: Function. What to do if someone were to click on the component.
* `data`: Array of objects. Your data should have the following shape:

```
const DATA = [
  {
    name: <element name>,
    value: <REQUIRED amount of element>,
    color: <REQUIRED valid color hex, rgb, hsl, or name>
  }
];
```

## Improve it!

The basic idea for this component is pretty sound and performant. It should render quickly, with minimal markup. Animating the component with CSS transitions should be straightforward.

One major drawback over SVG or multi-`div`-based bar chart components is that it's not obvious how to provide tooltips when you hover over individual sections. I plan to add tooltips by detecting cursor position relative to the component.

Got an idea or improvement? Open and issue or submit a PR! 🎉
