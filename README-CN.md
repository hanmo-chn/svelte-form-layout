# 表单布局

安装方法：
```shell
npm i -D tsui-form-layout
```

通常用于展示一张输入的表单内容，整体布局采用flex中纵向行布局，在每个行中，又采用横行列布局。
可以通过css设置行的高度，然后用span来控值列的宽度。

## FormContainer 表单容器

用于存放表单中各个字段的总容器，采用flex布局

|  属性   |说明| 默认值  |
|:-----:|:----|:----:|
 | class |表单容器div的css类|  空   |
 | style |表单容器div的style属性|  空   |

## Row 行


|  属性   | 说明             | 默认值  |
|:-----:|:---------------|:----:|
| style | 表单行div的style属性 |  空   |

## Col 列

整个行将平分为12个等分，然后通过span来设定当前单元格占用的宽度，如果占用50%的空间，那么span的值为6

|  属性   | 说明             | 默认值  |
|:-----:|:---------------|:----:|
| span  | 表列跨越的宽度        |  空   |
| style | 表单列div的style属性 |  空   |

**示例代码**
```sveltehtml
<FormContainer style="height: 100%; overflow: auto; padding: 8px 0">
    <!-- 这个是第一行 --> 
    <Row style="">
        <!-- 第一个字段，占表单宽度的25% -->
        <Col span="4">
            <input type="text" bind:value={item.name}/>
        </Col>
        <!-- 第一个字段，占表单宽度的25% -->
        <Col span="4">
            <input type="text" bind:value={item.name}/>
        </Col>
        <!-- 第二个字段，占表单宽度的25% -->
        <Col span="4">
            <input type="checkbox" bind:value={item.gender}/>
        </Col>
        <!-- 第三个空占位符，占表单宽度的25% -->
        <Col span="4">
        </Col>
        <!-- 第三个空占位符，占表单宽度的25% -->
        <Col span="4" style="text-align: center">
            <span>状态：新增</span>
        </Col>
    </Row>
    <!--第二行-->
    <Row>
    </Row>
</FormContainer>
```

在表单中Col内，通常我们建议使用FormField来封装要填写的表单字段。关于FormField请参考FormField的介绍。