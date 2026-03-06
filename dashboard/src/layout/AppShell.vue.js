/// <reference types="../../node_modules/@vue/language-core/types/template-helpers.d.ts" />
/// <reference types="../../node_modules/@vue/language-core/types/props-fallback.d.ts" />
import { computed, ref } from "vue";
import { RouterLink, RouterView, useRoute } from "vue-router";
import { Avatar, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger, IconButton, Input, Text, clx, } from "@minima-vue/ui";
import { ArrowUturnLeft, BellAlert, BuildingStorefront, EllipsisHorizontal, MagnifyingGlass, SidebarLeft, TriangleRightMini, XMark, } from "@minima-vue/icons";
import SidebarNavItem from "@/components/SidebarNavItem.vue";
import UserMenu from "@/components/UserMenu.vue";
import { coreNavItems, routeLabelMap, settingsNavSections } from "@/data/navigation";
const route = useRoute();
const mobileOpen = ref(false);
const isSettingsRoute = computed(() => route.path.startsWith("/settings"));
const breadcrumbs = computed(() => {
    const segments = route.path.split("/").filter(Boolean);
    if (!segments.length) {
        return [];
    }
    const items = [];
    let current = "";
    for (const segment of segments) {
        current += `/${segment}`;
        const label = routeLabelMap[current] ?? segment.replace(/-/g, " ");
        items.push({
            to: current,
            label: label.charAt(0).toUpperCase() + label.slice(1),
        });
    }
    return items;
});
const closeMobile = () => {
    mobileOpen.value = false;
};
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "relative flex h-screen flex-col overflow-hidden lg:flex-row" },
});
/** @type {__VLS_StyleScopedClasses['relative']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['h-screen']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['overflow-hidden']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:flex-row']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.aside, __VLS_intrinsics.aside)({
    ...{ class: "hidden h-screen w-[220px] border-e border-ui-border-base lg:flex" },
});
/** @type {__VLS_StyleScopedClasses['hidden']} */ ;
/** @type {__VLS_StyleScopedClasses['h-screen']} */ ;
/** @type {__VLS_StyleScopedClasses['w-[220px]']} */ ;
/** @type {__VLS_StyleScopedClasses['border-e']} */ ;
/** @type {__VLS_StyleScopedClasses['border-ui-border-base']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:flex']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "flex flex-1 flex-col justify-between overflow-y-auto" },
});
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-1']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-between']} */ ;
/** @type {__VLS_StyleScopedClasses['overflow-y-auto']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "flex flex-1 flex-col" },
});
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-1']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "bg-ui-bg-subtle sticky top-0 z-10 p-3" },
});
/** @type {__VLS_StyleScopedClasses['bg-ui-bg-subtle']} */ ;
/** @type {__VLS_StyleScopedClasses['sticky']} */ ;
/** @type {__VLS_StyleScopedClasses['top-0']} */ ;
/** @type {__VLS_StyleScopedClasses['z-10']} */ ;
/** @type {__VLS_StyleScopedClasses['p-3']} */ ;
if (__VLS_ctx.isSettingsRoute) {
    let __VLS_0;
    /** @ts-ignore @type {typeof __VLS_components.RouterLink | typeof __VLS_components.RouterLink} */
    RouterLink;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
        to: "/orders",
        ...{ class: "bg-ui-bg-subtle hover:bg-ui-bg-subtle-hover transition-fg flex items-center gap-x-2 rounded-md px-2 py-1 outline-none focus-visible:shadow-borders-focus" },
    }));
    const __VLS_2 = __VLS_1({
        to: "/orders",
        ...{ class: "bg-ui-bg-subtle hover:bg-ui-bg-subtle-hover transition-fg flex items-center gap-x-2 rounded-md px-2 py-1 outline-none focus-visible:shadow-borders-focus" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    /** @type {__VLS_StyleScopedClasses['bg-ui-bg-subtle']} */ ;
    /** @type {__VLS_StyleScopedClasses['hover:bg-ui-bg-subtle-hover']} */ ;
    /** @type {__VLS_StyleScopedClasses['transition-fg']} */ ;
    /** @type {__VLS_StyleScopedClasses['flex']} */ ;
    /** @type {__VLS_StyleScopedClasses['items-center']} */ ;
    /** @type {__VLS_StyleScopedClasses['gap-x-2']} */ ;
    /** @type {__VLS_StyleScopedClasses['rounded-md']} */ ;
    /** @type {__VLS_StyleScopedClasses['px-2']} */ ;
    /** @type {__VLS_StyleScopedClasses['py-1']} */ ;
    /** @type {__VLS_StyleScopedClasses['outline-none']} */ ;
    /** @type {__VLS_StyleScopedClasses['focus-visible:shadow-borders-focus']} */ ;
    const { default: __VLS_5 } = __VLS_3.slots;
    let __VLS_6;
    /** @ts-ignore @type {typeof __VLS_components.ArrowUturnLeft} */
    ArrowUturnLeft;
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent1(__VLS_6, new __VLS_6({
        ...{ class: "text-ui-fg-subtle" },
    }));
    const __VLS_8 = __VLS_7({
        ...{ class: "text-ui-fg-subtle" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    /** @type {__VLS_StyleScopedClasses['text-ui-fg-subtle']} */ ;
    let __VLS_11;
    /** @ts-ignore @type {typeof __VLS_components.Text | typeof __VLS_components.Text} */
    Text;
    // @ts-ignore
    const __VLS_12 = __VLS_asFunctionalComponent1(__VLS_11, new __VLS_11({
        size: "small",
        weight: "plus",
        leading: "compact",
    }));
    const __VLS_13 = __VLS_12({
        size: "small",
        weight: "plus",
        leading: "compact",
    }, ...__VLS_functionalComponentArgsRest(__VLS_12));
    const { default: __VLS_16 } = __VLS_14.slots;
    // @ts-ignore
    [isSettingsRoute,];
    var __VLS_14;
    // @ts-ignore
    [];
    var __VLS_3;
}
else {
    let __VLS_17;
    /** @ts-ignore @type {typeof __VLS_components.DropdownMenu | typeof __VLS_components.DropdownMenu} */
    DropdownMenu;
    // @ts-ignore
    const __VLS_18 = __VLS_asFunctionalComponent1(__VLS_17, new __VLS_17({}));
    const __VLS_19 = __VLS_18({}, ...__VLS_functionalComponentArgsRest(__VLS_18));
    const { default: __VLS_22 } = __VLS_20.slots;
    let __VLS_23;
    /** @ts-ignore @type {typeof __VLS_components.DropdownMenuTrigger | typeof __VLS_components.DropdownMenuTrigger} */
    DropdownMenuTrigger;
    // @ts-ignore
    const __VLS_24 = __VLS_asFunctionalComponent1(__VLS_23, new __VLS_23({
        asChild: true,
    }));
    const __VLS_25 = __VLS_24({
        asChild: true,
    }, ...__VLS_functionalComponentArgsRest(__VLS_24));
    const { default: __VLS_28 } = __VLS_26.slots;
    __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
        ...{ class: "bg-ui-bg-subtle transition-fg hover:bg-ui-bg-subtle-hover data-[state=open]:bg-ui-bg-subtle-hover grid w-full grid-cols-[24px_1fr_15px] items-center gap-x-3 rounded-md p-0.5 pr-2 outline-none focus-visible:shadow-borders-focus" },
    });
    /** @type {__VLS_StyleScopedClasses['bg-ui-bg-subtle']} */ ;
    /** @type {__VLS_StyleScopedClasses['transition-fg']} */ ;
    /** @type {__VLS_StyleScopedClasses['hover:bg-ui-bg-subtle-hover']} */ ;
    /** @type {__VLS_StyleScopedClasses['data-[state=open]:bg-ui-bg-subtle-hover']} */ ;
    /** @type {__VLS_StyleScopedClasses['grid']} */ ;
    /** @type {__VLS_StyleScopedClasses['w-full']} */ ;
    /** @type {__VLS_StyleScopedClasses['grid-cols-[24px_1fr_15px]']} */ ;
    /** @type {__VLS_StyleScopedClasses['items-center']} */ ;
    /** @type {__VLS_StyleScopedClasses['gap-x-3']} */ ;
    /** @type {__VLS_StyleScopedClasses['rounded-md']} */ ;
    /** @type {__VLS_StyleScopedClasses['p-0.5']} */ ;
    /** @type {__VLS_StyleScopedClasses['pr-2']} */ ;
    /** @type {__VLS_StyleScopedClasses['outline-none']} */ ;
    /** @type {__VLS_StyleScopedClasses['focus-visible:shadow-borders-focus']} */ ;
    let __VLS_29;
    /** @ts-ignore @type {typeof __VLS_components.Avatar} */
    Avatar;
    // @ts-ignore
    const __VLS_30 = __VLS_asFunctionalComponent1(__VLS_29, new __VLS_29({
        fallback: "M",
        variant: "squared",
        size: "xsmall",
    }));
    const __VLS_31 = __VLS_30({
        fallback: "M",
        variant: "squared",
        size: "xsmall",
    }, ...__VLS_functionalComponentArgsRest(__VLS_30));
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "overflow-hidden text-left" },
    });
    /** @type {__VLS_StyleScopedClasses['overflow-hidden']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-left']} */ ;
    let __VLS_34;
    /** @ts-ignore @type {typeof __VLS_components.Text | typeof __VLS_components.Text} */
    Text;
    // @ts-ignore
    const __VLS_35 = __VLS_asFunctionalComponent1(__VLS_34, new __VLS_34({
        size: "small",
        weight: "plus",
        leading: "compact",
        ...{ class: "truncate" },
    }));
    const __VLS_36 = __VLS_35({
        size: "small",
        weight: "plus",
        leading: "compact",
        ...{ class: "truncate" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_35));
    /** @type {__VLS_StyleScopedClasses['truncate']} */ ;
    const { default: __VLS_39 } = __VLS_37.slots;
    // @ts-ignore
    [];
    var __VLS_37;
    let __VLS_40;
    /** @ts-ignore @type {typeof __VLS_components.EllipsisHorizontal} */
    EllipsisHorizontal;
    // @ts-ignore
    const __VLS_41 = __VLS_asFunctionalComponent1(__VLS_40, new __VLS_40({
        ...{ class: "text-ui-fg-muted" },
    }));
    const __VLS_42 = __VLS_41({
        ...{ class: "text-ui-fg-muted" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_41));
    /** @type {__VLS_StyleScopedClasses['text-ui-fg-muted']} */ ;
    // @ts-ignore
    [];
    var __VLS_26;
    let __VLS_45;
    /** @ts-ignore @type {typeof __VLS_components.DropdownMenuContent | typeof __VLS_components.DropdownMenuContent} */
    DropdownMenuContent;
    // @ts-ignore
    const __VLS_46 = __VLS_asFunctionalComponent1(__VLS_45, new __VLS_45({
        ...{ class: "min-w-[var(--radix-dropdown-menu-trigger-width)]" },
    }));
    const __VLS_47 = __VLS_46({
        ...{ class: "min-w-[var(--radix-dropdown-menu-trigger-width)]" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_46));
    /** @type {__VLS_StyleScopedClasses['min-w-[var(--radix-dropdown-menu-trigger-width)]']} */ ;
    const { default: __VLS_50 } = __VLS_48.slots;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "flex items-center gap-x-3 px-2 py-1" },
    });
    /** @type {__VLS_StyleScopedClasses['flex']} */ ;
    /** @type {__VLS_StyleScopedClasses['items-center']} */ ;
    /** @type {__VLS_StyleScopedClasses['gap-x-3']} */ ;
    /** @type {__VLS_StyleScopedClasses['px-2']} */ ;
    /** @type {__VLS_StyleScopedClasses['py-1']} */ ;
    let __VLS_51;
    /** @ts-ignore @type {typeof __VLS_components.Avatar} */
    Avatar;
    // @ts-ignore
    const __VLS_52 = __VLS_asFunctionalComponent1(__VLS_51, new __VLS_51({
        variant: "squared",
        size: "small",
        fallback: "M",
    }));
    const __VLS_53 = __VLS_52({
        variant: "squared",
        size: "small",
        fallback: "M",
    }, ...__VLS_functionalComponentArgsRest(__VLS_52));
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "min-w-0" },
    });
    /** @type {__VLS_StyleScopedClasses['min-w-0']} */ ;
    let __VLS_56;
    /** @ts-ignore @type {typeof __VLS_components.Text | typeof __VLS_components.Text} */
    Text;
    // @ts-ignore
    const __VLS_57 = __VLS_asFunctionalComponent1(__VLS_56, new __VLS_56({
        size: "small",
        weight: "plus",
        leading: "compact",
        ...{ class: "truncate" },
    }));
    const __VLS_58 = __VLS_57({
        size: "small",
        weight: "plus",
        leading: "compact",
        ...{ class: "truncate" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_57));
    /** @type {__VLS_StyleScopedClasses['truncate']} */ ;
    const { default: __VLS_61 } = __VLS_59.slots;
    // @ts-ignore
    [];
    var __VLS_59;
    let __VLS_62;
    /** @ts-ignore @type {typeof __VLS_components.Text | typeof __VLS_components.Text} */
    Text;
    // @ts-ignore
    const __VLS_63 = __VLS_asFunctionalComponent1(__VLS_62, new __VLS_62({
        size: "xsmall",
        leading: "compact",
        ...{ class: "text-ui-fg-subtle" },
    }));
    const __VLS_64 = __VLS_63({
        size: "xsmall",
        leading: "compact",
        ...{ class: "text-ui-fg-subtle" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_63));
    /** @type {__VLS_StyleScopedClasses['text-ui-fg-subtle']} */ ;
    const { default: __VLS_67 } = __VLS_65.slots;
    // @ts-ignore
    [];
    var __VLS_65;
    let __VLS_68;
    /** @ts-ignore @type {typeof __VLS_components.DropdownMenuSeparator} */
    DropdownMenuSeparator;
    // @ts-ignore
    const __VLS_69 = __VLS_asFunctionalComponent1(__VLS_68, new __VLS_68({}));
    const __VLS_70 = __VLS_69({}, ...__VLS_functionalComponentArgsRest(__VLS_69));
    let __VLS_73;
    /** @ts-ignore @type {typeof __VLS_components.DropdownMenuItem | typeof __VLS_components.DropdownMenuItem} */
    DropdownMenuItem;
    // @ts-ignore
    const __VLS_74 = __VLS_asFunctionalComponent1(__VLS_73, new __VLS_73({
        asChild: true,
    }));
    const __VLS_75 = __VLS_74({
        asChild: true,
    }, ...__VLS_functionalComponentArgsRest(__VLS_74));
    const { default: __VLS_78 } = __VLS_76.slots;
    let __VLS_79;
    /** @ts-ignore @type {typeof __VLS_components.RouterLink | typeof __VLS_components.RouterLink} */
    RouterLink;
    // @ts-ignore
    const __VLS_80 = __VLS_asFunctionalComponent1(__VLS_79, new __VLS_79({
        to: "/settings/store",
        ...{ class: "gap-x-2" },
    }));
    const __VLS_81 = __VLS_80({
        to: "/settings/store",
        ...{ class: "gap-x-2" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_80));
    /** @type {__VLS_StyleScopedClasses['gap-x-2']} */ ;
    const { default: __VLS_84 } = __VLS_82.slots;
    let __VLS_85;
    /** @ts-ignore @type {typeof __VLS_components.BuildingStorefront} */
    BuildingStorefront;
    // @ts-ignore
    const __VLS_86 = __VLS_asFunctionalComponent1(__VLS_85, new __VLS_85({
        ...{ class: "text-ui-fg-subtle" },
    }));
    const __VLS_87 = __VLS_86({
        ...{ class: "text-ui-fg-subtle" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_86));
    /** @type {__VLS_StyleScopedClasses['text-ui-fg-subtle']} */ ;
    // @ts-ignore
    [];
    var __VLS_82;
    // @ts-ignore
    [];
    var __VLS_76;
    // @ts-ignore
    [];
    var __VLS_48;
    // @ts-ignore
    [];
    var __VLS_20;
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "px-3" },
});
/** @type {__VLS_StyleScopedClasses['px-3']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.hr)({
    ...{ class: "dashboard-divider" },
});
/** @type {__VLS_StyleScopedClasses['dashboard-divider']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "flex flex-1 flex-col overflow-y-auto py-3" },
});
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-1']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['overflow-y-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['py-3']} */ ;
if (__VLS_ctx.isSettingsRoute) {
    for (const [section] of __VLS_vFor((__VLS_ctx.settingsNavSections))) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.section, __VLS_intrinsics.section)({
            key: (section.title),
            ...{ class: "pb-3" },
        });
        /** @type {__VLS_StyleScopedClasses['pb-3']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "px-5 pb-1" },
        });
        /** @type {__VLS_StyleScopedClasses['px-5']} */ ;
        /** @type {__VLS_StyleScopedClasses['pb-1']} */ ;
        let __VLS_90;
        /** @ts-ignore @type {typeof __VLS_components.Text | typeof __VLS_components.Text} */
        Text;
        // @ts-ignore
        const __VLS_91 = __VLS_asFunctionalComponent1(__VLS_90, new __VLS_90({
            size: "small",
            leading: "compact",
            ...{ class: "text-ui-fg-muted" },
        }));
        const __VLS_92 = __VLS_91({
            size: "small",
            leading: "compact",
            ...{ class: "text-ui-fg-muted" },
        }, ...__VLS_functionalComponentArgsRest(__VLS_91));
        /** @type {__VLS_StyleScopedClasses['text-ui-fg-muted']} */ ;
        const { default: __VLS_95 } = __VLS_93.slots;
        (section.title);
        // @ts-ignore
        [isSettingsRoute, settingsNavSections,];
        var __VLS_93;
        __VLS_asFunctionalElement1(__VLS_intrinsics.nav, __VLS_intrinsics.nav)({
            ...{ class: "flex flex-col gap-y-0.5" },
        });
        /** @type {__VLS_StyleScopedClasses['flex']} */ ;
        /** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
        /** @type {__VLS_StyleScopedClasses['gap-y-0.5']} */ ;
        for (const [item] of __VLS_vFor((section.items))) {
            const __VLS_96 = SidebarNavItem;
            // @ts-ignore
            const __VLS_97 = __VLS_asFunctionalComponent1(__VLS_96, new __VLS_96({
                key: (item.to),
                item: (item),
                compact: true,
            }));
            const __VLS_98 = __VLS_97({
                key: (item.to),
                item: (item),
                compact: true,
            }, ...__VLS_functionalComponentArgsRest(__VLS_97));
            // @ts-ignore
            [];
        }
        // @ts-ignore
        [];
    }
}
else {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "px-3 pb-3" },
    });
    /** @type {__VLS_StyleScopedClasses['px-3']} */ ;
    /** @type {__VLS_StyleScopedClasses['pb-3']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
        ...{ class: "bg-ui-bg-subtle hover:bg-ui-bg-subtle-hover text-ui-fg-subtle flex w-full items-center gap-x-2.5 rounded-md px-2 py-1 outline-none focus-visible:shadow-borders-focus" },
    });
    /** @type {__VLS_StyleScopedClasses['bg-ui-bg-subtle']} */ ;
    /** @type {__VLS_StyleScopedClasses['hover:bg-ui-bg-subtle-hover']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-ui-fg-subtle']} */ ;
    /** @type {__VLS_StyleScopedClasses['flex']} */ ;
    /** @type {__VLS_StyleScopedClasses['w-full']} */ ;
    /** @type {__VLS_StyleScopedClasses['items-center']} */ ;
    /** @type {__VLS_StyleScopedClasses['gap-x-2.5']} */ ;
    /** @type {__VLS_StyleScopedClasses['rounded-md']} */ ;
    /** @type {__VLS_StyleScopedClasses['px-2']} */ ;
    /** @type {__VLS_StyleScopedClasses['py-1']} */ ;
    /** @type {__VLS_StyleScopedClasses['outline-none']} */ ;
    /** @type {__VLS_StyleScopedClasses['focus-visible:shadow-borders-focus']} */ ;
    let __VLS_101;
    /** @ts-ignore @type {typeof __VLS_components.MagnifyingGlass} */
    MagnifyingGlass;
    // @ts-ignore
    const __VLS_102 = __VLS_asFunctionalComponent1(__VLS_101, new __VLS_101({}));
    const __VLS_103 = __VLS_102({}, ...__VLS_functionalComponentArgsRest(__VLS_102));
    let __VLS_106;
    /** @ts-ignore @type {typeof __VLS_components.Text | typeof __VLS_components.Text} */
    Text;
    // @ts-ignore
    const __VLS_107 = __VLS_asFunctionalComponent1(__VLS_106, new __VLS_106({
        size: "small",
        leading: "compact",
        weight: "plus",
        ...{ class: "flex-1 text-left" },
    }));
    const __VLS_108 = __VLS_107({
        size: "small",
        leading: "compact",
        weight: "plus",
        ...{ class: "flex-1 text-left" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_107));
    /** @type {__VLS_StyleScopedClasses['flex-1']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-left']} */ ;
    const { default: __VLS_111 } = __VLS_109.slots;
    // @ts-ignore
    [];
    var __VLS_109;
    let __VLS_112;
    /** @ts-ignore @type {typeof __VLS_components.Text | typeof __VLS_components.Text} */
    Text;
    // @ts-ignore
    const __VLS_113 = __VLS_asFunctionalComponent1(__VLS_112, new __VLS_112({
        size: "small",
        leading: "compact",
        ...{ class: "text-ui-fg-muted" },
    }));
    const __VLS_114 = __VLS_113({
        size: "small",
        leading: "compact",
        ...{ class: "text-ui-fg-muted" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_113));
    /** @type {__VLS_StyleScopedClasses['text-ui-fg-muted']} */ ;
    const { default: __VLS_117 } = __VLS_115.slots;
    // @ts-ignore
    [];
    var __VLS_115;
    __VLS_asFunctionalElement1(__VLS_intrinsics.nav, __VLS_intrinsics.nav)({
        ...{ class: "flex flex-col gap-y-0.5" },
    });
    /** @type {__VLS_StyleScopedClasses['flex']} */ ;
    /** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
    /** @type {__VLS_StyleScopedClasses['gap-y-0.5']} */ ;
    for (const [item] of __VLS_vFor((__VLS_ctx.coreNavItems))) {
        const __VLS_118 = SidebarNavItem;
        // @ts-ignore
        const __VLS_119 = __VLS_asFunctionalComponent1(__VLS_118, new __VLS_118({
            key: (item.to),
            item: (item),
        }));
        const __VLS_120 = __VLS_119({
            key: (item.to),
            item: (item),
        }, ...__VLS_functionalComponentArgsRest(__VLS_119));
        // @ts-ignore
        [coreNavItems,];
    }
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "bg-ui-bg-subtle sticky bottom-0 p-3" },
});
/** @type {__VLS_StyleScopedClasses['bg-ui-bg-subtle']} */ ;
/** @type {__VLS_StyleScopedClasses['sticky']} */ ;
/** @type {__VLS_StyleScopedClasses['bottom-0']} */ ;
/** @type {__VLS_StyleScopedClasses['p-3']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.hr)({
    ...{ class: "dashboard-divider mb-3" },
});
/** @type {__VLS_StyleScopedClasses['dashboard-divider']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
const __VLS_123 = UserMenu;
// @ts-ignore
const __VLS_124 = __VLS_asFunctionalComponent1(__VLS_123, new __VLS_123({}));
const __VLS_125 = __VLS_124({}, ...__VLS_functionalComponentArgsRest(__VLS_124));
let __VLS_128;
/** @ts-ignore @type {typeof __VLS_components.Transition | typeof __VLS_components.Transition} */
Transition;
// @ts-ignore
const __VLS_129 = __VLS_asFunctionalComponent1(__VLS_128, new __VLS_128({
    enterActiveClass: "transition-opacity duration-200",
    leaveActiveClass: "transition-opacity duration-200",
    enterFromClass: "opacity-0",
    leaveToClass: "opacity-0",
}));
const __VLS_130 = __VLS_129({
    enterActiveClass: "transition-opacity duration-200",
    leaveActiveClass: "transition-opacity duration-200",
    enterFromClass: "opacity-0",
    leaveToClass: "opacity-0",
}, ...__VLS_functionalComponentArgsRest(__VLS_129));
const { default: __VLS_133 } = __VLS_131.slots;
if (__VLS_ctx.mobileOpen) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "fixed inset-0 z-50 lg:hidden" },
    });
    /** @type {__VLS_StyleScopedClasses['fixed']} */ ;
    /** @type {__VLS_StyleScopedClasses['inset-0']} */ ;
    /** @type {__VLS_StyleScopedClasses['z-50']} */ ;
    /** @type {__VLS_StyleScopedClasses['lg:hidden']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.button)({
        ...{ onClick: (__VLS_ctx.closeMobile) },
        ...{ class: "bg-ui-bg-overlay absolute inset-0" },
    });
    /** @type {__VLS_StyleScopedClasses['bg-ui-bg-overlay']} */ ;
    /** @type {__VLS_StyleScopedClasses['absolute']} */ ;
    /** @type {__VLS_StyleScopedClasses['inset-0']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.aside, __VLS_intrinsics.aside)({
        ...{ class: "bg-ui-bg-subtle shadow-elevation-modal absolute inset-y-2 left-2 flex w-[304px] max-w-[calc(100%-16px)] flex-col rounded-lg border border-ui-border-base" },
    });
    /** @type {__VLS_StyleScopedClasses['bg-ui-bg-subtle']} */ ;
    /** @type {__VLS_StyleScopedClasses['shadow-elevation-modal']} */ ;
    /** @type {__VLS_StyleScopedClasses['absolute']} */ ;
    /** @type {__VLS_StyleScopedClasses['inset-y-2']} */ ;
    /** @type {__VLS_StyleScopedClasses['left-2']} */ ;
    /** @type {__VLS_StyleScopedClasses['flex']} */ ;
    /** @type {__VLS_StyleScopedClasses['w-[304px]']} */ ;
    /** @type {__VLS_StyleScopedClasses['max-w-[calc(100%-16px)]']} */ ;
    /** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
    /** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
    /** @type {__VLS_StyleScopedClasses['border']} */ ;
    /** @type {__VLS_StyleScopedClasses['border-ui-border-base']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "p-3" },
    });
    /** @type {__VLS_StyleScopedClasses['p-3']} */ ;
    let __VLS_134;
    /** @ts-ignore @type {typeof __VLS_components.IconButton | typeof __VLS_components.IconButton} */
    IconButton;
    // @ts-ignore
    const __VLS_135 = __VLS_asFunctionalComponent1(__VLS_134, new __VLS_134({
        ...{ 'onClick': {} },
        variant: "transparent",
        size: "small",
    }));
    const __VLS_136 = __VLS_135({
        ...{ 'onClick': {} },
        variant: "transparent",
        size: "small",
    }, ...__VLS_functionalComponentArgsRest(__VLS_135));
    let __VLS_139;
    const __VLS_140 = ({ click: {} },
        { onClick: (__VLS_ctx.closeMobile) });
    const { default: __VLS_141 } = __VLS_137.slots;
    let __VLS_142;
    /** @ts-ignore @type {typeof __VLS_components.XMark} */
    XMark;
    // @ts-ignore
    const __VLS_143 = __VLS_asFunctionalComponent1(__VLS_142, new __VLS_142({}));
    const __VLS_144 = __VLS_143({}, ...__VLS_functionalComponentArgsRest(__VLS_143));
    // @ts-ignore
    [mobileOpen, closeMobile, closeMobile,];
    var __VLS_137;
    var __VLS_138;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "flex-1 overflow-y-auto pb-3" },
    });
    /** @type {__VLS_StyleScopedClasses['flex-1']} */ ;
    /** @type {__VLS_StyleScopedClasses['overflow-y-auto']} */ ;
    /** @type {__VLS_StyleScopedClasses['pb-3']} */ ;
    if (__VLS_ctx.isSettingsRoute) {
        for (const [section] of __VLS_vFor((__VLS_ctx.settingsNavSections))) {
            __VLS_asFunctionalElement1(__VLS_intrinsics.section, __VLS_intrinsics.section)({
                key: (`mobile-${section.title}`),
                ...{ class: "pb-3" },
            });
            /** @type {__VLS_StyleScopedClasses['pb-3']} */ ;
            __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
                ...{ class: "px-5 pb-1" },
            });
            /** @type {__VLS_StyleScopedClasses['px-5']} */ ;
            /** @type {__VLS_StyleScopedClasses['pb-1']} */ ;
            let __VLS_147;
            /** @ts-ignore @type {typeof __VLS_components.Text | typeof __VLS_components.Text} */
            Text;
            // @ts-ignore
            const __VLS_148 = __VLS_asFunctionalComponent1(__VLS_147, new __VLS_147({
                size: "small",
                leading: "compact",
                ...{ class: "text-ui-fg-muted" },
            }));
            const __VLS_149 = __VLS_148({
                size: "small",
                leading: "compact",
                ...{ class: "text-ui-fg-muted" },
            }, ...__VLS_functionalComponentArgsRest(__VLS_148));
            /** @type {__VLS_StyleScopedClasses['text-ui-fg-muted']} */ ;
            const { default: __VLS_152 } = __VLS_150.slots;
            (section.title);
            // @ts-ignore
            [isSettingsRoute, settingsNavSections,];
            var __VLS_150;
            __VLS_asFunctionalElement1(__VLS_intrinsics.nav, __VLS_intrinsics.nav)({
                ...{ onClick: (__VLS_ctx.closeMobile) },
                ...{ class: "flex flex-col gap-y-0.5" },
            });
            /** @type {__VLS_StyleScopedClasses['flex']} */ ;
            /** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
            /** @type {__VLS_StyleScopedClasses['gap-y-0.5']} */ ;
            for (const [item] of __VLS_vFor((section.items))) {
                const __VLS_153 = SidebarNavItem;
                // @ts-ignore
                const __VLS_154 = __VLS_asFunctionalComponent1(__VLS_153, new __VLS_153({
                    key: (item.to),
                    item: (item),
                    compact: true,
                }));
                const __VLS_155 = __VLS_154({
                    key: (item.to),
                    item: (item),
                    compact: true,
                }, ...__VLS_functionalComponentArgsRest(__VLS_154));
                // @ts-ignore
                [closeMobile,];
            }
            // @ts-ignore
            [];
        }
    }
    else {
        __VLS_asFunctionalElement1(__VLS_intrinsics.nav, __VLS_intrinsics.nav)({
            ...{ onClick: (__VLS_ctx.closeMobile) },
            ...{ class: "flex flex-col gap-y-0.5" },
        });
        /** @type {__VLS_StyleScopedClasses['flex']} */ ;
        /** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
        /** @type {__VLS_StyleScopedClasses['gap-y-0.5']} */ ;
        for (const [item] of __VLS_vFor((__VLS_ctx.coreNavItems))) {
            const __VLS_158 = SidebarNavItem;
            // @ts-ignore
            const __VLS_159 = __VLS_asFunctionalComponent1(__VLS_158, new __VLS_158({
                key: (item.to),
                item: (item),
            }));
            const __VLS_160 = __VLS_159({
                key: (item.to),
                item: (item),
            }, ...__VLS_functionalComponentArgsRest(__VLS_159));
            // @ts-ignore
            [coreNavItems, closeMobile,];
        }
    }
}
// @ts-ignore
[];
var __VLS_131;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "flex h-screen flex-1 flex-col overflow-hidden" },
});
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['h-screen']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-1']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['overflow-hidden']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.header, __VLS_intrinsics.header)({
    ...{ class: "grid w-full grid-cols-2 border-b border-ui-border-base p-3" },
});
/** @type {__VLS_StyleScopedClasses['grid']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['grid-cols-2']} */ ;
/** @type {__VLS_StyleScopedClasses['border-b']} */ ;
/** @type {__VLS_StyleScopedClasses['border-ui-border-base']} */ ;
/** @type {__VLS_StyleScopedClasses['p-3']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "flex items-center gap-x-1.5" },
});
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-x-1.5']} */ ;
let __VLS_163;
/** @ts-ignore @type {typeof __VLS_components.IconButton | typeof __VLS_components.IconButton} */
IconButton;
// @ts-ignore
const __VLS_164 = __VLS_asFunctionalComponent1(__VLS_163, new __VLS_163({
    ...{ 'onClick': {} },
    variant: "transparent",
    size: "small",
    ...{ class: "lg:hidden" },
}));
const __VLS_165 = __VLS_164({
    ...{ 'onClick': {} },
    variant: "transparent",
    size: "small",
    ...{ class: "lg:hidden" },
}, ...__VLS_functionalComponentArgsRest(__VLS_164));
let __VLS_168;
const __VLS_169 = ({ click: {} },
    { onClick: (...[$event]) => {
            __VLS_ctx.mobileOpen = true;
            // @ts-ignore
            [mobileOpen,];
        } });
/** @type {__VLS_StyleScopedClasses['lg:hidden']} */ ;
const { default: __VLS_170 } = __VLS_166.slots;
let __VLS_171;
/** @ts-ignore @type {typeof __VLS_components.SidebarLeft} */
SidebarLeft;
// @ts-ignore
const __VLS_172 = __VLS_asFunctionalComponent1(__VLS_171, new __VLS_171({
    ...{ class: "text-ui-fg-muted" },
}));
const __VLS_173 = __VLS_172({
    ...{ class: "text-ui-fg-muted" },
}, ...__VLS_functionalComponentArgsRest(__VLS_172));
/** @type {__VLS_StyleScopedClasses['text-ui-fg-muted']} */ ;
// @ts-ignore
[];
var __VLS_166;
var __VLS_167;
__VLS_asFunctionalElement1(__VLS_intrinsics.ol, __VLS_intrinsics.ol)({
    ...{ class: "text-ui-fg-muted txt-compact-small-plus flex items-center select-none" },
});
/** @type {__VLS_StyleScopedClasses['text-ui-fg-muted']} */ ;
/** @type {__VLS_StyleScopedClasses['txt-compact-small-plus']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['select-none']} */ ;
for (const [crumb, index] of __VLS_vFor((__VLS_ctx.breadcrumbs))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
        key: (crumb.to),
        ...{ class: "flex items-center" },
    });
    /** @type {__VLS_StyleScopedClasses['flex']} */ ;
    /** @type {__VLS_StyleScopedClasses['items-center']} */ ;
    if (index < __VLS_ctx.breadcrumbs.length - 1) {
        let __VLS_176;
        /** @ts-ignore @type {typeof __VLS_components.RouterLink | typeof __VLS_components.RouterLink} */
        RouterLink;
        // @ts-ignore
        const __VLS_177 = __VLS_asFunctionalComponent1(__VLS_176, new __VLS_176({
            to: (crumb.to),
            ...{ class: "transition-fg hover:text-ui-fg-subtle" },
        }));
        const __VLS_178 = __VLS_177({
            to: (crumb.to),
            ...{ class: "transition-fg hover:text-ui-fg-subtle" },
        }, ...__VLS_functionalComponentArgsRest(__VLS_177));
        /** @type {__VLS_StyleScopedClasses['transition-fg']} */ ;
        /** @type {__VLS_StyleScopedClasses['hover:text-ui-fg-subtle']} */ ;
        const { default: __VLS_181 } = __VLS_179.slots;
        (crumb.label);
        // @ts-ignore
        [breadcrumbs, breadcrumbs,];
        var __VLS_179;
    }
    else {
        __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
            ...{ class: "text-ui-fg-base" },
        });
        /** @type {__VLS_StyleScopedClasses['text-ui-fg-base']} */ ;
        (crumb.label);
    }
    if (index < __VLS_ctx.breadcrumbs.length - 1) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
            ...{ class: "mx-2" },
        });
        /** @type {__VLS_StyleScopedClasses['mx-2']} */ ;
        let __VLS_182;
        /** @ts-ignore @type {typeof __VLS_components.TriangleRightMini} */
        TriangleRightMini;
        // @ts-ignore
        const __VLS_183 = __VLS_asFunctionalComponent1(__VLS_182, new __VLS_182({}));
        const __VLS_184 = __VLS_183({}, ...__VLS_functionalComponentArgsRest(__VLS_183));
    }
    // @ts-ignore
    [breadcrumbs,];
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "flex items-center justify-end gap-x-2" },
});
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-end']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-x-2']} */ ;
let __VLS_187;
/** @ts-ignore @type {typeof __VLS_components.Input} */
Input;
// @ts-ignore
const __VLS_188 = __VLS_asFunctionalComponent1(__VLS_187, new __VLS_187({
    ...{ class: "hidden max-w-[260px] lg:flex" },
    placeholder: "Search dashboard",
}));
const __VLS_189 = __VLS_188({
    ...{ class: "hidden max-w-[260px] lg:flex" },
    placeholder: "Search dashboard",
}, ...__VLS_functionalComponentArgsRest(__VLS_188));
/** @type {__VLS_StyleScopedClasses['hidden']} */ ;
/** @type {__VLS_StyleScopedClasses['max-w-[260px]']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:flex']} */ ;
let __VLS_192;
/** @ts-ignore @type {typeof __VLS_components.IconButton | typeof __VLS_components.IconButton} */
IconButton;
// @ts-ignore
const __VLS_193 = __VLS_asFunctionalComponent1(__VLS_192, new __VLS_192({
    variant: "transparent",
    size: "small",
}));
const __VLS_194 = __VLS_193({
    variant: "transparent",
    size: "small",
}, ...__VLS_functionalComponentArgsRest(__VLS_193));
const { default: __VLS_197 } = __VLS_195.slots;
let __VLS_198;
/** @ts-ignore @type {typeof __VLS_components.BellAlert} */
BellAlert;
// @ts-ignore
const __VLS_199 = __VLS_asFunctionalComponent1(__VLS_198, new __VLS_198({
    ...{ class: "text-ui-fg-muted" },
}));
const __VLS_200 = __VLS_199({
    ...{ class: "text-ui-fg-muted" },
}, ...__VLS_functionalComponentArgsRest(__VLS_199));
/** @type {__VLS_StyleScopedClasses['text-ui-fg-muted']} */ ;
// @ts-ignore
[];
var __VLS_195;
__VLS_asFunctionalElement1(__VLS_intrinsics.main, __VLS_intrinsics.main)({
    ...{ class: (__VLS_ctx.clx('flex h-full w-full flex-col overflow-y-auto transition-opacity duration-200', { 'opacity-100': true })) },
});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "mx-auto flex w-full max-w-layout-shell flex-col gap-y-2 p-3" },
});
/** @type {__VLS_StyleScopedClasses['mx-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['max-w-layout-shell']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-y-2']} */ ;
/** @type {__VLS_StyleScopedClasses['p-3']} */ ;
let __VLS_203;
/** @ts-ignore @type {typeof __VLS_components.RouterView} */
RouterView;
// @ts-ignore
const __VLS_204 = __VLS_asFunctionalComponent1(__VLS_203, new __VLS_203({}));
const __VLS_205 = __VLS_204({}, ...__VLS_functionalComponentArgsRest(__VLS_204));
// @ts-ignore
[clx,];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
