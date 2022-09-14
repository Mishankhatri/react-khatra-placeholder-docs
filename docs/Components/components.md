---
sidebar_position: 4
---

# Components

## Components and their respective properties

## `KhatraPlaceholder`

KhatraPlaceholder is the base container to hold your content, maintain your loading state of your content , place custom placeholders and change animations.

```js
<KhatraPlaceholder>YourContent</KhatraPlaceholder>
```

| Property          | Type            | Required | Default value | Description                                                                                                                                          |
| :---------------- | :-------------- | :------- | :------------ | :--------------------------------------------------------------------------------------------------------------------------------------------------- |
| isLoading         | Boolean         | no       | false         | state to either hide or show content                                                                                                                 |
| delay             | Number          | no       | 0             | to add delay in between changing state from loading to loaded.(Use to omit fast flicker in faster network devices.)                                  |
| customPlaceholder | React Component | no       | null          | placeholder to show when content is loading                                                                                                          |
| type              | String          | no       | null          | type of builtin placeholders provided by the library either of "ListMediaPlaceholder","ProductPlaceholder","ImagePlaceholder","ParagraphPlaceholder" |
| animateWave       | Boolean         | no       | null          | to trigger shrimmer animation on placeholders                                                                                                        |
| animateGlow       | Boolean         | no       | null          | to trigger glow animation on placeholders                                                                                                            |
| style             | Object          | no       | null          | for custom css styling                                                                                                                               |
| className         | String          | no       | null          | for custom css class names                                                                                                                           |

## `PCardContainer`

PCardContainer is container to hold one or more.

```jsx
<PCardContainer>{...children}<PCardContainer>
```

| Property  | Type   | Required | Default value | Description                |
| :-------- | :----- | :------- | :------------ | :------------------------- |
| className | String | no       | null          | for custom css class names |

## `PCard`

PCard is base container for creating card placeholders.<br/> Only place to control animations, either animateWave or animateGlow.

```js
<PCard>{...children}</PCard>
```

| Property    | Type    | Required | Default value       | Description                                |
| :---------- | :------ | :------- | :------------------ | :----------------------------------------- |
| w           | String  | yes      | null                | width of PCard                             |
| h           | String  | yes      | null                | height of PCard                            |
| br          | String  | no       | &quot;0.75rem&quot; | borderRadius of PCard                      |
| gap         | String  | no       | null                | gap between children                       |
| animateWave | Boolean | no       | null                | to trigger shrimmer animation on childrens |
| animateGlow | Boolean | no       | null                | to trigger glow animation on childrens     |
| style       | Object  | no       | null                | for custom css styling                     |
| className   | String  | no       | null                | for custom css class names                 |

:::note Note
Note: using both animateWave and animateGlow stops animation.
:::

## `PBlock`

PBlock is used for creating placeholders for titles, images and badges.

```jsx
<PBlock />
```

| Property  | Type    | Required | Default value       | Description                                                                     |
| :-------- | :------ | :------- | :------------------ | :------------------------------------------------------------------------------ |
| w         | String  | no       | &quot;100%&quot;    | width of PBlock                                                                 |
| h         | String  | no       | &quot;100%&quot;    | height of PBlock                                                                |
| br        | String  | no       | &quot;0.75rem&quot; | borderRadius of PBlock                                                          |
| align     | String  | no       | null                | to align-self inside PCard, takes either of values flex-start,flex-end & center |
| rounded   | Boolean | no       | null                | to create cicles                                                                |
| style     | Object  | no       | null                | for custom css styling                                                          |
| className | String  | no       | null                | for custom css class names                                                      |

## `PInlineContainer`

PInlineContainer is parent container to hold PLine component.
Without PInlineContainer, PLine cannot be rendered.

```jsx
<PInlineContainer>{...children}</PInlineContainer>
```

| Property   | Type   | Required | Default value           | Description                                                                                                          |
| :--------- | :----- | :------- | :---------------------- | :------------------------------------------------------------------------------------------------------------------- |
| w          | String | no       | &quot;100%&quot;        | width of PInlineContainer                                                                                            |
| h          | String | no       | &quot;fit-content&quot; | height of PInlineContainer                                                                                           |
| br         | String | no       | &quot;5px&quot;         | borderRadius for each children                                                                                       |
| gap        | String | no       | &quot;0.5rem&quot;      | gap between chilrens PInlineContainer                                                                                |
| justify    | String | no       | null                    | to justify PLines,PBlock inside PInlineContainer takes either of space-between, space-around, space-evenly & centerr |
| rows       | Number | no       | null                    | to create given number of rows of PLines                                                                             |
| rowsWidth  | String | no       | null                    | to specify width for given number of 'rows'                                                                          |
| rowsHeight | String | no       | null                    | to specify height for given number of 'rows'                                                                         |
| style      | Object | no       | null                    | for custom css styling                                                                                               |
| className  | String | no       | null                    | for custom css class names                                                                                           |

## `PLine`

PLine is used to create placeholders for texts.
Used with parent PInLineContainer

```jsx
<PLine />
```

| Property  | Type   | Required | Default value    | Description                                                                                |
| :-------- | :----- | :------- | :--------------- | :----------------------------------------------------------------------------------------- |
| w         | String | no       | &quot;100%&quot; | width of PLine                                                                             |
| h         | String | no       | &quot;1rem&quot; | height of PLine                                                                            |
| br        | String | no       | null             | borderRadius                                                                               |
| align     | String | no       | null             | to align-self inside PInlineContainer, takes either of values flex-start,flex-end & center |
| style     | Object | no       | null             | for custom css styling                                                                     |
| className | String | no       | null             | for custom css class names                                                                 |

<br/>
