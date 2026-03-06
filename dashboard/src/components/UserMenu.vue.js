/// <reference types="../../node_modules/@vue/language-core/types/template-helpers.d.ts" />
/// <reference types="../../node_modules/@vue/language-core/types/props-fallback.d.ts" />
import { ref, watch } from "vue";
import { RouterLink } from "vue-router";
import { Avatar, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuTrigger, Text, } from "@minima-vue/ui";
import { BookOpen, CircleHalfSolid, OpenRectArrowOut, TimelineVertical, User } from "@minima-vue/icons";
const theme = ref("system");
watch(theme, (value) => {
    if (typeof window === "undefined") {
        return;
    }
    const root = document.documentElement;
    if (value === "system") {
        root.removeAttribute("data-theme");
        return;
    }
    root.setAttribute("data-theme", value);
});
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
let __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.DropdownMenu | typeof __VLS_components.DropdownMenu} */
DropdownMenu;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({}));
const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_5 = {};
const { default: __VLS_6 } = __VLS_3.slots;
let __VLS_7;
/** @ts-ignore @type {typeof __VLS_components.DropdownMenuTrigger | typeof __VLS_components.DropdownMenuTrigger} */
DropdownMenuTrigger;
// @ts-ignore
const __VLS_8 = __VLS_asFunctionalComponent1(__VLS_7, new __VLS_7({
    asChild: true,
}));
const __VLS_9 = __VLS_8({
    asChild: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_8));
const { default: __VLS_12 } = __VLS_10.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ class: "bg-ui-bg-subtle hover:bg-ui-bg-subtle-hover grid w-full grid-cols-[24px_1fr_15px] items-center gap-x-2 rounded-md py-1 pl-0.5 pr-2 outline-none focus-visible:shadow-borders-focus" },
});
/** @type {__VLS_StyleScopedClasses['bg-ui-bg-subtle']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:bg-ui-bg-subtle-hover']} */ ;
/** @type {__VLS_StyleScopedClasses['grid']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['grid-cols-[24px_1fr_15px]']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-x-2']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-md']} */ ;
/** @type {__VLS_StyleScopedClasses['py-1']} */ ;
/** @type {__VLS_StyleScopedClasses['pl-0.5']} */ ;
/** @type {__VLS_StyleScopedClasses['pr-2']} */ ;
/** @type {__VLS_StyleScopedClasses['outline-none']} */ ;
/** @type {__VLS_StyleScopedClasses['focus-visible:shadow-borders-focus']} */ ;
let __VLS_13;
/** @ts-ignore @type {typeof __VLS_components.Avatar} */
Avatar;
// @ts-ignore
const __VLS_14 = __VLS_asFunctionalComponent1(__VLS_13, new __VLS_13({
    fallback: "EK",
    size: "xsmall",
}));
const __VLS_15 = __VLS_14({
    fallback: "EK",
    size: "xsmall",
}, ...__VLS_functionalComponentArgsRest(__VLS_14));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "truncate text-left" },
});
/** @type {__VLS_StyleScopedClasses['truncate']} */ ;
/** @type {__VLS_StyleScopedClasses['text-left']} */ ;
let __VLS_18;
/** @ts-ignore @type {typeof __VLS_components.Text | typeof __VLS_components.Text} */
Text;
// @ts-ignore
const __VLS_19 = __VLS_asFunctionalComponent1(__VLS_18, new __VLS_18({
    size: "xsmall",
    leading: "compact",
    weight: "plus",
    ...{ class: "truncate" },
}));
const __VLS_20 = __VLS_19({
    size: "xsmall",
    leading: "compact",
    weight: "plus",
    ...{ class: "truncate" },
}, ...__VLS_functionalComponentArgsRest(__VLS_19));
/** @type {__VLS_StyleScopedClasses['truncate']} */ ;
const { default: __VLS_23 } = __VLS_21.slots;
var __VLS_21;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "text-ui-fg-muted" },
});
/** @type {__VLS_StyleScopedClasses['text-ui-fg-muted']} */ ;
var __VLS_10;
let __VLS_24;
/** @ts-ignore @type {typeof __VLS_components.DropdownMenuContent | typeof __VLS_components.DropdownMenuContent} */
DropdownMenuContent;
// @ts-ignore
const __VLS_25 = __VLS_asFunctionalComponent1(__VLS_24, new __VLS_24({
    ...{ class: "min-w-[var(--radix-dropdown-menu-trigger-width)]" },
}));
const __VLS_26 = __VLS_25({
    ...{ class: "min-w-[var(--radix-dropdown-menu-trigger-width)]" },
}, ...__VLS_functionalComponentArgsRest(__VLS_25));
/** @type {__VLS_StyleScopedClasses['min-w-[var(--radix-dropdown-menu-trigger-width)]']} */ ;
const { default: __VLS_29 } = __VLS_27.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "flex items-center gap-x-3 overflow-hidden px-2 py-1" },
});
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-x-3']} */ ;
/** @type {__VLS_StyleScopedClasses['overflow-hidden']} */ ;
/** @type {__VLS_StyleScopedClasses['px-2']} */ ;
/** @type {__VLS_StyleScopedClasses['py-1']} */ ;
let __VLS_30;
/** @ts-ignore @type {typeof __VLS_components.Avatar} */
Avatar;
// @ts-ignore
const __VLS_31 = __VLS_asFunctionalComponent1(__VLS_30, new __VLS_30({
    size: "small",
    fallback: "EK",
}));
const __VLS_32 = __VLS_31({
    size: "small",
    fallback: "EK",
}, ...__VLS_functionalComponentArgsRest(__VLS_31));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "flex min-w-0 flex-col" },
});
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['min-w-0']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
let __VLS_35;
/** @ts-ignore @type {typeof __VLS_components.Text | typeof __VLS_components.Text} */
Text;
// @ts-ignore
const __VLS_36 = __VLS_asFunctionalComponent1(__VLS_35, new __VLS_35({
    size: "small",
    leading: "compact",
    weight: "plus",
    ...{ class: "truncate" },
}));
const __VLS_37 = __VLS_36({
    size: "small",
    leading: "compact",
    weight: "plus",
    ...{ class: "truncate" },
}, ...__VLS_functionalComponentArgsRest(__VLS_36));
/** @type {__VLS_StyleScopedClasses['truncate']} */ ;
const { default: __VLS_40 } = __VLS_38.slots;
var __VLS_38;
let __VLS_41;
/** @ts-ignore @type {typeof __VLS_components.Text | typeof __VLS_components.Text} */
Text;
// @ts-ignore
const __VLS_42 = __VLS_asFunctionalComponent1(__VLS_41, new __VLS_41({
    size: "xsmall",
    leading: "compact",
    ...{ class: "text-ui-fg-subtle truncate" },
}));
const __VLS_43 = __VLS_42({
    size: "xsmall",
    leading: "compact",
    ...{ class: "text-ui-fg-subtle truncate" },
}, ...__VLS_functionalComponentArgsRest(__VLS_42));
/** @type {__VLS_StyleScopedClasses['text-ui-fg-subtle']} */ ;
/** @type {__VLS_StyleScopedClasses['truncate']} */ ;
const { default: __VLS_46 } = __VLS_44.slots;
var __VLS_44;
let __VLS_47;
/** @ts-ignore @type {typeof __VLS_components.DropdownMenuSeparator} */
DropdownMenuSeparator;
// @ts-ignore
const __VLS_48 = __VLS_asFunctionalComponent1(__VLS_47, new __VLS_47({}));
const __VLS_49 = __VLS_48({}, ...__VLS_functionalComponentArgsRest(__VLS_48));
let __VLS_52;
/** @ts-ignore @type {typeof __VLS_components.DropdownMenuItem | typeof __VLS_components.DropdownMenuItem} */
DropdownMenuItem;
// @ts-ignore
const __VLS_53 = __VLS_asFunctionalComponent1(__VLS_52, new __VLS_52({
    asChild: true,
}));
const __VLS_54 = __VLS_53({
    asChild: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_53));
const { default: __VLS_57 } = __VLS_55.slots;
let __VLS_58;
/** @ts-ignore @type {typeof __VLS_components.RouterLink | typeof __VLS_components.RouterLink} */
RouterLink;
// @ts-ignore
const __VLS_59 = __VLS_asFunctionalComponent1(__VLS_58, new __VLS_58({
    to: "/settings/users",
    ...{ class: "gap-x-2" },
}));
const __VLS_60 = __VLS_59({
    to: "/settings/users",
    ...{ class: "gap-x-2" },
}, ...__VLS_functionalComponentArgsRest(__VLS_59));
/** @type {__VLS_StyleScopedClasses['gap-x-2']} */ ;
const { default: __VLS_63 } = __VLS_61.slots;
let __VLS_64;
/** @ts-ignore @type {typeof __VLS_components.User} */
User;
// @ts-ignore
const __VLS_65 = __VLS_asFunctionalComponent1(__VLS_64, new __VLS_64({
    ...{ class: "text-ui-fg-subtle" },
}));
const __VLS_66 = __VLS_65({
    ...{ class: "text-ui-fg-subtle" },
}, ...__VLS_functionalComponentArgsRest(__VLS_65));
/** @type {__VLS_StyleScopedClasses['text-ui-fg-subtle']} */ ;
var __VLS_61;
var __VLS_55;
let __VLS_69;
/** @ts-ignore @type {typeof __VLS_components.DropdownMenuItem | typeof __VLS_components.DropdownMenuItem} */
DropdownMenuItem;
// @ts-ignore
const __VLS_70 = __VLS_asFunctionalComponent1(__VLS_69, new __VLS_69({
    asChild: true,
}));
const __VLS_71 = __VLS_70({
    asChild: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_70));
const { default: __VLS_74 } = __VLS_72.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
    href: "https://docs.medusajs.com",
    target: "_blank",
    ...{ class: "flex items-center gap-x-2" },
});
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-x-2']} */ ;
let __VLS_75;
/** @ts-ignore @type {typeof __VLS_components.BookOpen} */
BookOpen;
// @ts-ignore
const __VLS_76 = __VLS_asFunctionalComponent1(__VLS_75, new __VLS_75({
    ...{ class: "text-ui-fg-subtle" },
}));
const __VLS_77 = __VLS_76({
    ...{ class: "text-ui-fg-subtle" },
}, ...__VLS_functionalComponentArgsRest(__VLS_76));
/** @type {__VLS_StyleScopedClasses['text-ui-fg-subtle']} */ ;
var __VLS_72;
let __VLS_80;
/** @ts-ignore @type {typeof __VLS_components.DropdownMenuItem | typeof __VLS_components.DropdownMenuItem} */
DropdownMenuItem;
// @ts-ignore
const __VLS_81 = __VLS_asFunctionalComponent1(__VLS_80, new __VLS_80({
    asChild: true,
}));
const __VLS_82 = __VLS_81({
    asChild: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_81));
const { default: __VLS_85 } = __VLS_83.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
    href: "https://medusajs.com/changelog/",
    target: "_blank",
    ...{ class: "flex items-center gap-x-2" },
});
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-x-2']} */ ;
let __VLS_86;
/** @ts-ignore @type {typeof __VLS_components.TimelineVertical} */
TimelineVertical;
// @ts-ignore
const __VLS_87 = __VLS_asFunctionalComponent1(__VLS_86, new __VLS_86({
    ...{ class: "text-ui-fg-subtle" },
}));
const __VLS_88 = __VLS_87({
    ...{ class: "text-ui-fg-subtle" },
}, ...__VLS_functionalComponentArgsRest(__VLS_87));
/** @type {__VLS_StyleScopedClasses['text-ui-fg-subtle']} */ ;
var __VLS_83;
let __VLS_91;
/** @ts-ignore @type {typeof __VLS_components.DropdownMenuSeparator} */
DropdownMenuSeparator;
// @ts-ignore
const __VLS_92 = __VLS_asFunctionalComponent1(__VLS_91, new __VLS_91({}));
const __VLS_93 = __VLS_92({}, ...__VLS_functionalComponentArgsRest(__VLS_92));
let __VLS_96;
/** @ts-ignore @type {typeof __VLS_components.DropdownMenuItem | typeof __VLS_components.DropdownMenuItem} */
DropdownMenuItem;
// @ts-ignore
const __VLS_97 = __VLS_asFunctionalComponent1(__VLS_96, new __VLS_96({
    ...{ class: "gap-x-2" },
}));
const __VLS_98 = __VLS_97({
    ...{ class: "gap-x-2" },
}, ...__VLS_functionalComponentArgsRest(__VLS_97));
/** @type {__VLS_StyleScopedClasses['gap-x-2']} */ ;
const { default: __VLS_101 } = __VLS_99.slots;
let __VLS_102;
/** @ts-ignore @type {typeof __VLS_components.CircleHalfSolid} */
CircleHalfSolid;
// @ts-ignore
const __VLS_103 = __VLS_asFunctionalComponent1(__VLS_102, new __VLS_102({
    ...{ class: "text-ui-fg-subtle" },
}));
const __VLS_104 = __VLS_103({
    ...{ class: "text-ui-fg-subtle" },
}, ...__VLS_functionalComponentArgsRest(__VLS_103));
/** @type {__VLS_StyleScopedClasses['text-ui-fg-subtle']} */ ;
var __VLS_99;
let __VLS_107;
/** @ts-ignore @type {typeof __VLS_components.DropdownMenuRadioGroup | typeof __VLS_components.DropdownMenuRadioGroup} */
DropdownMenuRadioGroup;
// @ts-ignore
const __VLS_108 = __VLS_asFunctionalComponent1(__VLS_107, new __VLS_107({
    modelValue: (__VLS_ctx.theme),
}));
const __VLS_109 = __VLS_108({
    modelValue: (__VLS_ctx.theme),
}, ...__VLS_functionalComponentArgsRest(__VLS_108));
const { default: __VLS_112 } = __VLS_110.slots;
let __VLS_113;
/** @ts-ignore @type {typeof __VLS_components.DropdownMenuRadioItem | typeof __VLS_components.DropdownMenuRadioItem} */
DropdownMenuRadioItem;
// @ts-ignore
const __VLS_114 = __VLS_asFunctionalComponent1(__VLS_113, new __VLS_113({
    value: "system",
}));
const __VLS_115 = __VLS_114({
    value: "system",
}, ...__VLS_functionalComponentArgsRest(__VLS_114));
const { default: __VLS_118 } = __VLS_116.slots;
// @ts-ignore
[theme,];
var __VLS_116;
let __VLS_119;
/** @ts-ignore @type {typeof __VLS_components.DropdownMenuRadioItem | typeof __VLS_components.DropdownMenuRadioItem} */
DropdownMenuRadioItem;
// @ts-ignore
const __VLS_120 = __VLS_asFunctionalComponent1(__VLS_119, new __VLS_119({
    value: "light",
}));
const __VLS_121 = __VLS_120({
    value: "light",
}, ...__VLS_functionalComponentArgsRest(__VLS_120));
const { default: __VLS_124 } = __VLS_122.slots;
// @ts-ignore
[];
var __VLS_122;
let __VLS_125;
/** @ts-ignore @type {typeof __VLS_components.DropdownMenuRadioItem | typeof __VLS_components.DropdownMenuRadioItem} */
DropdownMenuRadioItem;
// @ts-ignore
const __VLS_126 = __VLS_asFunctionalComponent1(__VLS_125, new __VLS_125({
    value: "dark",
}));
const __VLS_127 = __VLS_126({
    value: "dark",
}, ...__VLS_functionalComponentArgsRest(__VLS_126));
const { default: __VLS_130 } = __VLS_128.slots;
// @ts-ignore
[];
var __VLS_128;
// @ts-ignore
[];
var __VLS_110;
let __VLS_131;
/** @ts-ignore @type {typeof __VLS_components.DropdownMenuSeparator} */
DropdownMenuSeparator;
// @ts-ignore
const __VLS_132 = __VLS_asFunctionalComponent1(__VLS_131, new __VLS_131({}));
const __VLS_133 = __VLS_132({}, ...__VLS_functionalComponentArgsRest(__VLS_132));
let __VLS_136;
/** @ts-ignore @type {typeof __VLS_components.DropdownMenuItem | typeof __VLS_components.DropdownMenuItem} */
DropdownMenuItem;
// @ts-ignore
const __VLS_137 = __VLS_asFunctionalComponent1(__VLS_136, new __VLS_136({
    ...{ class: "gap-x-2" },
}));
const __VLS_138 = __VLS_137({
    ...{ class: "gap-x-2" },
}, ...__VLS_functionalComponentArgsRest(__VLS_137));
/** @type {__VLS_StyleScopedClasses['gap-x-2']} */ ;
const { default: __VLS_141 } = __VLS_139.slots;
let __VLS_142;
/** @ts-ignore @type {typeof __VLS_components.OpenRectArrowOut} */
OpenRectArrowOut;
// @ts-ignore
const __VLS_143 = __VLS_asFunctionalComponent1(__VLS_142, new __VLS_142({
    ...{ class: "text-ui-fg-subtle" },
}));
const __VLS_144 = __VLS_143({
    ...{ class: "text-ui-fg-subtle" },
}, ...__VLS_functionalComponentArgsRest(__VLS_143));
/** @type {__VLS_StyleScopedClasses['text-ui-fg-subtle']} */ ;
// @ts-ignore
[];
var __VLS_139;
// @ts-ignore
[];
var __VLS_27;
// @ts-ignore
[];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
