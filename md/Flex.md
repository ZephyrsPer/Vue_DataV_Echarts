# 容器属性

1. flex-direction
   设置 Flex 容器主轴的方向。
   row:主轴方向为水平方向，从左到右
   row-reverse:主轴方向为水平方向，从右到左
   column:主轴方向为垂直方向，从上到下
   column-reverse:主轴方向为垂直方向，从下到上
2. flex-wrap
   控制 Flex 容器内的子元素在主轴方向空间不足时是否换行。
   nowrap:不换行
   wrap:换行
   wrap-reverse:换行，但换行后子元素会从右向左排列
3. flex-flow
   flex-direction 和 flex-wrap 的简写属性，用于同时设置主轴方向和是否换行。
   row wrap:主轴方向为水平方向，从左到右，换行
4. justify-content
   设置 Flex 子元素在主轴上的对齐方式。
   flex-start:子元素在主轴上从左向右排列
   flex-end:子元素在主轴上从右向左排列
   center:子元素在主轴上居中排列
   space-between:子元素在主轴上两端对齐，且子元素之间有空白间隔
   space-around:子元素在主轴上两端对齐，且子元素之间有空白间隔
5. align-items
   定义 Flex 容器内子元素在交叉轴上的对齐方式。
   flex-start:子元素在交叉轴上从上到下排列
   flex-end:子元素在交叉轴上从下到上排列
   center:子元素在交叉轴上居中排列
   baseline:子元素在交叉轴上对齐其文字的基线
   stretch:子元素在交叉轴上拉伸填满容器
6. align-content
   align-content 属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。
   flex-start：与交叉轴的起点对齐。
   flex-end：与交叉轴的终点对齐。
   center：与交叉轴的中点对齐。
   space-between：与交叉轴两端对齐，轴线之间的间隔平均分布。
   space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。
   stretch（默认值）：轴线占满整个交叉轴。

# item 属性

1. order
   order 属性定义项目的排列顺序。数值越小，排列越靠前，默认为 0。

2. flex-grow
   flex-grow 属性定义项目的放大比例，默认为 0，即如果存在剩余空间，也不放大。
3. flex-shrink
   flex-shrink 属性定义了项目的缩小比例，默认为 1，即如果空间不足，该项目将缩小。
4. flex-basis
   flex-basis 属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为 auto，即项目的本来大小。
5. flex
   flex 属性是 flex-grow, flex-shrink 和 flex-basis 的简写，默认值为 0 1 auto。后两个属性可选。

```css
.item {
  flex: none | [ < "flex-grow" > < "flex-shrink" >? || < "flex-basis" >];
}
```

该属性有两个快捷值：auto (1 1 auto) 和 none (0 0 auto)。

建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值。

6. align-self
   align-self 属性允许单个项目有与其他项目不一样的对齐方式，可覆盖 align-items 属性。默认值为 auto，表示继承父元素的 align-items 属性，如果没有父元素，则等同于 stretch。
