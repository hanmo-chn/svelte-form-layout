<script>export let span = 1;
export let style = '';
let className = '';
export { className as class };
</script>
<div class="tsui-form-col span-{span} {className}" {style}>
    <slot></slot>
</div>