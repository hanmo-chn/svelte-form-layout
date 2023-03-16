<script lang="ts">
    export let style = '';
    let className: string = '';
    export {className as class}
</script>
<div class="tsui-form-row {className}" {style}>
    <slot></slot>
</div>