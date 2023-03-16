<script lang="ts">
    export let span:number = 1;
    export let style = '';
    let className: string = '';
    export {className as class}
</script>
<div class="tsui-form-col span-{span} {className}" {style}>
    <slot></slot>
</div>