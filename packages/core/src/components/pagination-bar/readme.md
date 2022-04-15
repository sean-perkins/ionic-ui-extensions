# ion-x-pagination-bar



<!-- Auto Generated Below -->


## Properties

| Property           | Attribute           | Description                                                                             | Type                 | Default     |
| ------------------ | ------------------- | --------------------------------------------------------------------------------------- | -------------------- | ----------- |
| `collapse`         | `collapse`          |                                                                                         | `boolean`            | `false`     |
| `fill`             | `fill`              |                                                                                         | `"clear" \| "solid"` | `'clear'`   |
| `maximumNeighbors` | `maximum-neighbors` | The maximum number of page number buttons that can display alongside your current page. | `number`             | `1`         |
| `page`             | `page`              | The active page index (zero-based) of the paginated data set.                           | `number`             | `0`         |
| `size`             | `size`              | The number of results that are show per page.                                           | `number`             | `undefined` |
| `totalElements`    | `total-elements`    | The total elements that are available to be paginated.                                  | `number`             | `undefined` |


## Events

| Event       | Description                                   | Type                                          |
| ----------- | --------------------------------------------- | --------------------------------------------- |
| `ionChange` | Emitted when the selected page value changes. | `CustomEvent<PaginationBarChangeEventDetail>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
