/// <reference types="../../node_modules/@vue/language-core/types/template-helpers.d.ts" />
/// <reference types="../../node_modules/@vue/language-core/types/props-fallback.d.ts" />
import { computed, ref } from "vue";
import { RouterLink, useRoute } from "vue-router";
import { Text, clx } from "@minima-vue/ui";
import { TriangleRightMini } from "@minima-vue/icons";
const props = withDefaults(defineProps(), {
    compact: false,
    nested: false,
});
const route = useRoute();
const open = ref(true);
const isActive = computed(() => route.path === props.item.to || route.path.startsWith(`${props.item.to}/`));
const hasChildren = computed(() => !!props.item.items?.length);
const __VLS_defaults = {
    compact: false,
    nested: false,
};
const __VLS_ctx = {
    ...{},
    ...{},
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "px-3" },
});
/** @type {__VLS_StyleScopedClasses['px-3']} */ ;
let __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.RouterLink | typeof __VLS_components.RouterLink} */
RouterLink;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    to: (__VLS_ctx.item.to),
    ...{ class: (__VLS_ctx.clx('text-ui-fg-subtle transition-fg hover:bg-ui-bg-subtle-hover flex items-center gap-x-2 rounded-md py-1 pl-2 pr-2 outline-none focus-visible:shadow-borders-focus', {
            'bg-ui-bg-base text-ui-fg-base shadow-elevation-card-rest': __VLS_ctx.isActive,
            'py-1.5': !__VLS_ctx.compact,
            'pl-8': __VLS_ctx.nested,
        })) },
}));
const __VLS_2 = __VLS_1({
    to: (__VLS_ctx.item.to),
    ...{ class: (__VLS_ctx.clx('text-ui-fg-subtle transition-fg hover:bg-ui-bg-subtle-hover flex items-center gap-x-2 rounded-md py-1 pl-2 pr-2 outline-none focus-visible:shadow-borders-focus', {
            'bg-ui-bg-base text-ui-fg-base shadow-elevation-card-rest': __VLS_ctx.isActive,
            'py-1.5': !__VLS_ctx.compact,
            'pl-8': __VLS_ctx.nested,
        })) },
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
const { default: __VLS_5 } = __VLS_3.slots;
if (__VLS_ctx.item.icon && !__VLS_ctx.nested) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "flex size-5 items-center justify-center" },
    });
    /** @type {__VLS_StyleScopedClasses['flex']} */ ;
    /** @type {__VLS_StyleScopedClasses['size-5']} */ ;
    /** @type {__VLS_StyleScopedClasses['items-center']} */ ;
    /** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
    const __VLS_6 = (__VLS_ctx.item.icon);
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent1(__VLS_6, new __VLS_6({
        ...{ class: "text-ui-fg-subtle" },
    }));
    const __VLS_8 = __VLS_7({
        ...{ class: "text-ui-fg-subtle" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    /** @type {__VLS_StyleScopedClasses['text-ui-fg-subtle']} */ ;
}
let __VLS_11;
/** @ts-ignore @type {typeof __VLS_components.Text | typeof __VLS_components.Text} */
Text;
// @ts-ignore
const __VLS_12 = __VLS_asFunctionalComponent1(__VLS_11, new __VLS_11({
    size: "small",
    leading: "compact",
    weight: "plus",
}));
const __VLS_13 = __VLS_12({
    size: "small",
    leading: "compact",
    weight: "plus",
}, ...__VLS_functionalComponentArgsRest(__VLS_12));
const { default: __VLS_16 } = __VLS_14.slots;
(__VLS_ctx.item.label);
// @ts-ignore
[item, item, item, item, clx, isActive, compact, nested, nested,];
var __VLS_14;
if (__VLS_ctx.hasChildren) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
        ...{ onClick: (...[$event]) => {
                if (!(__VLS_ctx.hasChildren))
                    return;
                __VLS_ctx.open = !__VLS_ctx.open;
                // @ts-ignore
                [hasChildren, open, open,];
            } },
        type: "button",
        ...{ class: "ml-auto inline-flex items-center justify-center rounded-sm p-0.5" },
    });
    /** @type {__VLS_StyleScopedClasses['ml-auto']} */ ;
    /** @type {__VLS_StyleScopedClasses['inline-flex']} */ ;
    /** @type {__VLS_StyleScopedClasses['items-center']} */ ;
    /** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
    /** @type {__VLS_StyleScopedClasses['rounded-sm']} */ ;
    /** @type {__VLS_StyleScopedClasses['p-0.5']} */ ;
    let __VLS_17;
    /** @ts-ignore @type {typeof __VLS_components.TriangleRightMini} */
    TriangleRightMini;
    // @ts-ignore
    const __VLS_18 = __VLS_asFunctionalComponent1(__VLS_17, new __VLS_17({
        ...{ class: "text-ui-fg-muted transition-transform" },
        ...{ class: ({ 'rotate-90': __VLS_ctx.open }) },
    }));
    const __VLS_19 = __VLS_18({
        ...{ class: "text-ui-fg-muted transition-transform" },
        ...{ class: ({ 'rotate-90': __VLS_ctx.open }) },
    }, ...__VLS_functionalComponentArgsRest(__VLS_18));
    /** @type {__VLS_StyleScopedClasses['text-ui-fg-muted']} */ ;
    /** @type {__VLS_StyleScopedClasses['transition-transform']} */ ;
    /** @type {__VLS_StyleScopedClasses['rotate-90']} */ ;
}
// @ts-ignore
[open,];
var __VLS_3;
if (__VLS_ctx.hasChildren && __VLS_ctx.open) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "flex flex-col gap-y-0.5 pb-2 pt-1" },
    });
    /** @type {__VLS_StyleScopedClasses['flex']} */ ;
    /** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
    /** @type {__VLS_StyleScopedClasses['gap-y-0.5']} */ ;
    /** @type {__VLS_StyleScopedClasses['pb-2']} */ ;
    /** @type {__VLS_StyleScopedClasses['pt-1']} */ ;
    for (const [sub] of __VLS_vFor((__VLS_ctx.item.items))) {
        let __VLS_22;
        /** @ts-ignore @type {typeof __VLS_components.RouterLink | typeof __VLS_components.RouterLink} */
        RouterLink;
        // @ts-ignore
        const __VLS_23 = __VLS_asFunctionalComponent1(__VLS_22, new __VLS_22({
            key: (sub.to),
            to: (sub.to),
            ...{ class: (__VLS_ctx.clx('text-ui-fg-muted hover:bg-ui-bg-subtle-hover txt-compact-small-plus rounded-md py-1 pl-8 pr-2 outline-none transition', {
                    'bg-ui-bg-base text-ui-fg-base shadow-elevation-card-rest': __VLS_ctx.route.fullPath === sub.to,
                })) },
        }));
        const __VLS_24 = __VLS_23({
            key: (sub.to),
            to: (sub.to),
            ...{ class: (__VLS_ctx.clx('text-ui-fg-muted hover:bg-ui-bg-subtle-hover txt-compact-small-plus rounded-md py-1 pl-8 pr-2 outline-none transition', {
                    'bg-ui-bg-base text-ui-fg-base shadow-elevation-card-rest': __VLS_ctx.route.fullPath === sub.to,
                })) },
        }, ...__VLS_functionalComponentArgsRest(__VLS_23));
        const { default: __VLS_27 } = __VLS_25.slots;
        (sub.label);
        // @ts-ignore
        [item, clx, hasChildren, open, route,];
        var __VLS_25;
        // @ts-ignore
        [];
    }
}
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({
    __typeProps: {},
    props: {},
});
export default {};
