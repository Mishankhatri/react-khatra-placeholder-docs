---
sidebar_position: 6
---

import { ParagraphPlaceholder,ProductPlaceholder,ImagePlaceholder,ListMediaPlaceholder } from "react-khatra-placeholder"

# Builtin Placeholder Types

## type: `ListMediaPlaceholder`

```js
<ListMediaPlaceholder />
```

<ListMediaPlaceholder style={{border:"1px solid grey"}}/>
<br/>

| Property    | Type    | Required | Default value       | Description                                |
| :---------- | :------ | :------- | :------------------ | :----------------------------------------- |
| w           | String  | no       | &quot;50%&quot;     | width of placeholder.                      |
| h           | String  | no       | &quot;20%&quot;     | height of placeholder                      |
| br          | String  | no       | &quot;0.75rem&quot; | borderRadius                               |
| style       | Object  | no       | null                | for custom css styling                     |
| animateWave | Boolean | no       | null                | to trigger shrimmer animation on childrens |
| animateGlow | Boolean | no       | null                | to trigger glow animation on childrens     |
| className   | String  | no       | null                | for custom css class names                 |

<br/>

## type: `ParagraphPlaceholder`

```js
<ParagraphPlaceholder />
```

<ParagraphPlaceholder style={{border:"1px solid grey"}}/>
<br/>

| Property    | Type    | Required | Default value       | Description                                |
| :---------- | :------ | :------- | :------------------ | :----------------------------------------- |
| w           | String  | no       | &quot;80%&quot;     | width of placeholder.                      |
| h           | String  | no       | &quot;20%&quot;     | height of placeholder                      |
| br          | String  | no       | &quot;0.25rem&quot; | borderRadius                               |
| animateWave | Boolean | no       | null                | to trigger shrimmer animation on childrens |
| animateGlow | Boolean | no       | null                | to trigger glow animation on childrens     |
| rows        | Number  | no       | 7                   | total rows of lines in paragraph           |
| rowsHeight  | String  | no       | &quot;0.75rem&quot; | height of lines in paragraph.              |
| rowsWidth   | String  | no       | &quot;100%&quot;    | width of lines in paragraph.               |
| style       | Object  | no       | null                | for custom css styling                     |
| className   | String  | no       | null                | for custom css class names                 |

## type: `ProductPlaceholder`

```js
<ProductPlaceholder />
```

<ProductPlaceholder style={{border:"1px solid grey"}}/>
<br/>

| Property    | Type    | Required | Default value       | Description                                |
| :---------- | :------ | :------- | :------------------ | :----------------------------------------- |
| w           | String  | no       | &quot;20rem&quot;   | width of placeholder.                      |
| h           | String  | no       | &quot;25rem&quot;   | height of placeholder                      |
| br          | String  | no       | &quot;0.25rem&quot; | borderRadius                               |
| style       | Object  | no       | null                | for custom css styling                     |
| animateWave | Boolean | no       | null                | to trigger shrimmer animation on childrens |
| animateGlow | Boolean | no       | null                | to trigger glow animation on childrens     |
| className   | String  | no       | null                | for custom css class names                 |

## type: `ImagePlaceholder`

```js
<ImagePlaceholder />
```

<ImagePlaceholder style={{border:"1px solid grey"}}/>
<br/>

| Property    | Type    | Required | Default value       | Description                                |
| :---------- | :------ | :------- | :------------------ | :----------------------------------------- |
| w           | String  | no       | &quot;25rem&quot;   | width of placeholder.                      |
| h           | String  | no       | &quot;25rem&quot;   | height of placeholder                      |
| br          | String  | no       | &quot;0.25rem&quot; | borderRadius                               |
| style       | Object  | no       | null                | for custom css styling                     |
| animateWave | Boolean | no       | null                | to trigger shrimmer animation on childrens |
| animateGlow | Boolean | no       | null                | to trigger glow animation on childrens     |
| className   | String  | no       | null                | for custom css class names                 |
