/// <reference types="../../node_modules/@vue/language-core/types/template-helpers.d.ts" />
/// <reference types="../../node_modules/@vue/language-core/types/props-fallback.d.ts" />
import { Text } from "@minima-vue/ui";
const __VLS_props = defineProps();
const __VLS_ctx = {
    ...{},
    ...{},
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.article, __VLS_intrinsics.article)({
    ...{ class: "dashboard-panel flex flex-col gap-y-1 p-4" },
});
/** @type {__VLS_StyleScopedClasses['dashboard-panel']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-y-1']} */ ;
/** @type {__VLS_StyleScopedClasses['p-4']} */ ;
let __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.Text | typeof __VLS_components.Text} */
Text;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    size: "xsmall",
    leading: "compact",
    ...{ class: "text-ui-fg-subtle" },
}));
const __VLS_2 = __VLS_1({
    size: "xsmall",
    leading: "compact",
    ...{ class: "text-ui-fg-subtle" },
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
/** @type {__VLS_StyleScopedClasses['text-ui-fg-subtle']} */ ;
const { default: __VLS_5 } = __VLS_3.slots;
(__VLS_ctx.label);
// @ts-ignore
[label,];
var __VLS_3;
let __VLS_6;
/** @ts-ignore @type {typeof __VLS_components.Text | typeof __VLS_components.Text} */
Text;
// @ts-ignore
const __VLS_7 = __VLS_asFunctionalComponent1(__VLS_6, new __VLS_6({
    size: "large",
    leading: "compact",
    weight: "plus",
    ...{ class: "text-ui-fg-base" },
}));
const __VLS_8 = __VLS_7({
    size: "large",
    leading: "compact",
    weight: "plus",
    ...{ class: "text-ui-fg-base" },
}, ...__VLS_functionalComponentArgsRest(__VLS_7));
/** @type {__VLS_StyleScopedClasses['text-ui-fg-base']} */ ;
const { default: __VLS_11 } = __VLS_9.slots;
(__VLS_ctx.value);
// @ts-ignore
[value,];
var __VLS_9;
if (__VLS_ctx.delta) {
    let __VLS_12;
    /** @ts-ignore @type {typeof __VLS_components.Text | typeof __VLS_components.Text} */
    Text;
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent1(__VLS_12, new __VLS_12({
        size: "xsmall",
        leading: "compact",
        ...{ class: "text-ui-fg-subtle" },
    }));
    const __VLS_14 = __VLS_13({
        size: "xsmall",
        leading: "compact",
        ...{ class: "text-ui-fg-subtle" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    /** @type {__VLS_StyleScopedClasses['text-ui-fg-subtle']} */ ;
    const { default: __VLS_17 } = __VLS_15.slots;
    (__VLS_ctx.delta);
    // @ts-ignore
    [delta, delta,];
    var __VLS_15;
}
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({
    __typeProps: {},
});
export default {};
