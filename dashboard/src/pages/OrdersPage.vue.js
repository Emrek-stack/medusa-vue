/// <reference types="../../node_modules/@vue/language-core/types/template-helpers.d.ts" />
/// <reference types="../../node_modules/@vue/language-core/types/props-fallback.d.ts" />
import { computed, ref } from "vue";
import { Badge, Button, FocusModal, FocusModalBody, FocusModalContent, FocusModalFooter, FocusModalHeader, FocusModalTitle, FocusModalTrigger, Heading, IconButton, Input, Table, TableBody, TableCell, TableHeader, TableHeaderCell, TablePagination, TableRow, Tabs, TabsContent, TabsList, TabsTrigger, Text, Textarea, toast, } from "@minima-vue/ui";
import { EllipsisHorizontal, Plus, ArrowDownTray } from "@minima-vue/icons";
const activeTab = ref("all");
const pageIndex = ref(0);
const pageSize = 6;
const createOpen = ref(false);
const orders = ref([
    {
        id: "ord_01",
        displayId: 10234,
        customer: "Olivia Johnson",
        email: "olivia@example.com",
        date: "Mar 05, 2026",
        total: "$239.00",
        status: "completed",
    },
    {
        id: "ord_02",
        displayId: 10233,
        customer: "Liam Carter",
        email: "liam@example.com",
        date: "Mar 05, 2026",
        total: "$149.00",
        status: "pending",
    },
    {
        id: "ord_03",
        displayId: 10232,
        customer: "Sophia Martin",
        email: "sophia@example.com",
        date: "Mar 04, 2026",
        total: "$420.00",
        status: "completed",
    },
    {
        id: "ord_04",
        displayId: 10231,
        customer: "Noah Lee",
        email: "noah@example.com",
        date: "Mar 04, 2026",
        total: "$94.00",
        status: "returned",
    },
    {
        id: "ord_05",
        displayId: 10230,
        customer: "Amelia Green",
        email: "amelia@example.com",
        date: "Mar 03, 2026",
        total: "$316.00",
        status: "pending",
    },
    {
        id: "ord_06",
        displayId: 10229,
        customer: "James Wright",
        email: "james@example.com",
        date: "Mar 03, 2026",
        total: "$267.00",
        status: "completed",
    },
    {
        id: "ord_07",
        displayId: 10228,
        customer: "Mia Brown",
        email: "mia@example.com",
        date: "Mar 02, 2026",
        total: "$510.00",
        status: "completed",
    },
    {
        id: "ord_08",
        displayId: 10227,
        customer: "William Adams",
        email: "william@example.com",
        date: "Mar 02, 2026",
        total: "$83.00",
        status: "returned",
    },
]);
const visibleOrders = computed(() => {
    if (activeTab.value === "all") {
        return orders.value;
    }
    return orders.value.filter((order) => order.status === activeTab.value);
});
const pageCount = computed(() => Math.ceil(visibleOrders.value.length / pageSize));
const canPreviousPage = computed(() => pageIndex.value > 0);
const canNextPage = computed(() => pageIndex.value < pageCount.value - 1);
const pagedOrders = computed(() => {
    const start = pageIndex.value * pageSize;
    return visibleOrders.value.slice(start, start + pageSize);
});
const statusColor = (status) => {
    if (status === "completed")
        return "green";
    if (status === "pending")
        return "orange";
    return "red";
};
const resetPage = () => {
    pageIndex.value = 0;
};
const nextPage = () => {
    if (canNextPage.value) {
        pageIndex.value += 1;
    }
};
const previousPage = () => {
    if (canPreviousPage.value) {
        pageIndex.value -= 1;
    }
};
const createOrder = () => {
    createOpen.value = false;
    toast.success("Order created", {
        description: "The draft order has been created successfully.",
    });
};
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.section, __VLS_intrinsics.section)({
    ...{ class: "space-y-3" },
});
/** @type {__VLS_StyleScopedClasses['space-y-3']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "dashboard-panel flex items-start justify-between p-4" },
});
/** @type {__VLS_StyleScopedClasses['dashboard-panel']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-start']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-between']} */ ;
/** @type {__VLS_StyleScopedClasses['p-4']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
let __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.Heading | typeof __VLS_components.Heading} */
Heading;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    level: "h1",
    ...{ class: "dashboard-heading" },
}));
const __VLS_2 = __VLS_1({
    level: "h1",
    ...{ class: "dashboard-heading" },
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
/** @type {__VLS_StyleScopedClasses['dashboard-heading']} */ ;
const { default: __VLS_5 } = __VLS_3.slots;
var __VLS_3;
let __VLS_6;
/** @ts-ignore @type {typeof __VLS_components.Text | typeof __VLS_components.Text} */
Text;
// @ts-ignore
const __VLS_7 = __VLS_asFunctionalComponent1(__VLS_6, new __VLS_6({
    size: "small",
    leading: "compact",
    ...{ class: "text-ui-fg-subtle" },
}));
const __VLS_8 = __VLS_7({
    size: "small",
    leading: "compact",
    ...{ class: "text-ui-fg-subtle" },
}, ...__VLS_functionalComponentArgsRest(__VLS_7));
/** @type {__VLS_StyleScopedClasses['text-ui-fg-subtle']} */ ;
const { default: __VLS_11 } = __VLS_9.slots;
var __VLS_9;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "flex items-center gap-x-2" },
});
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-x-2']} */ ;
let __VLS_12;
/** @ts-ignore @type {typeof __VLS_components.Button | typeof __VLS_components.Button} */
Button;
// @ts-ignore
const __VLS_13 = __VLS_asFunctionalComponent1(__VLS_12, new __VLS_12({
    ...{ 'onClick': {} },
    variant: "secondary",
    size: "small",
}));
const __VLS_14 = __VLS_13({
    ...{ 'onClick': {} },
    variant: "secondary",
    size: "small",
}, ...__VLS_functionalComponentArgsRest(__VLS_13));
let __VLS_17;
const __VLS_18 = ({ click: {} },
    { onClick: (...[$event]) => {
            __VLS_ctx.toast.info('Export started', { description: 'A CSV file is being generated.' });
            // @ts-ignore
            [toast,];
        } });
const { default: __VLS_19 } = __VLS_15.slots;
let __VLS_20;
/** @ts-ignore @type {typeof __VLS_components.ArrowDownTray} */
ArrowDownTray;
// @ts-ignore
const __VLS_21 = __VLS_asFunctionalComponent1(__VLS_20, new __VLS_20({}));
const __VLS_22 = __VLS_21({}, ...__VLS_functionalComponentArgsRest(__VLS_21));
// @ts-ignore
[];
var __VLS_15;
var __VLS_16;
let __VLS_25;
/** @ts-ignore @type {typeof __VLS_components.FocusModal | typeof __VLS_components.FocusModal} */
FocusModal;
// @ts-ignore
const __VLS_26 = __VLS_asFunctionalComponent1(__VLS_25, new __VLS_25({
    open: (__VLS_ctx.createOpen),
}));
const __VLS_27 = __VLS_26({
    open: (__VLS_ctx.createOpen),
}, ...__VLS_functionalComponentArgsRest(__VLS_26));
const { default: __VLS_30 } = __VLS_28.slots;
let __VLS_31;
/** @ts-ignore @type {typeof __VLS_components.FocusModalTrigger | typeof __VLS_components.FocusModalTrigger} */
FocusModalTrigger;
// @ts-ignore
const __VLS_32 = __VLS_asFunctionalComponent1(__VLS_31, new __VLS_31({
    asChild: true,
}));
const __VLS_33 = __VLS_32({
    asChild: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_32));
const { default: __VLS_36 } = __VLS_34.slots;
let __VLS_37;
/** @ts-ignore @type {typeof __VLS_components.Button | typeof __VLS_components.Button} */
Button;
// @ts-ignore
const __VLS_38 = __VLS_asFunctionalComponent1(__VLS_37, new __VLS_37({
    size: "small",
}));
const __VLS_39 = __VLS_38({
    size: "small",
}, ...__VLS_functionalComponentArgsRest(__VLS_38));
const { default: __VLS_42 } = __VLS_40.slots;
let __VLS_43;
/** @ts-ignore @type {typeof __VLS_components.Plus} */
Plus;
// @ts-ignore
const __VLS_44 = __VLS_asFunctionalComponent1(__VLS_43, new __VLS_43({}));
const __VLS_45 = __VLS_44({}, ...__VLS_functionalComponentArgsRest(__VLS_44));
// @ts-ignore
[createOpen,];
var __VLS_40;
// @ts-ignore
[];
var __VLS_34;
let __VLS_48;
/** @ts-ignore @type {typeof __VLS_components.FocusModalContent | typeof __VLS_components.FocusModalContent} */
FocusModalContent;
// @ts-ignore
const __VLS_49 = __VLS_asFunctionalComponent1(__VLS_48, new __VLS_48({}));
const __VLS_50 = __VLS_49({}, ...__VLS_functionalComponentArgsRest(__VLS_49));
const { default: __VLS_53 } = __VLS_51.slots;
let __VLS_54;
/** @ts-ignore @type {typeof __VLS_components.FocusModalHeader | typeof __VLS_components.FocusModalHeader} */
FocusModalHeader;
// @ts-ignore
const __VLS_55 = __VLS_asFunctionalComponent1(__VLS_54, new __VLS_54({}));
const __VLS_56 = __VLS_55({}, ...__VLS_functionalComponentArgsRest(__VLS_55));
const { default: __VLS_59 } = __VLS_57.slots;
let __VLS_60;
/** @ts-ignore @type {typeof __VLS_components.FocusModalTitle | typeof __VLS_components.FocusModalTitle} */
FocusModalTitle;
// @ts-ignore
const __VLS_61 = __VLS_asFunctionalComponent1(__VLS_60, new __VLS_60({}));
const __VLS_62 = __VLS_61({}, ...__VLS_functionalComponentArgsRest(__VLS_61));
const { default: __VLS_65 } = __VLS_63.slots;
// @ts-ignore
[];
var __VLS_63;
// @ts-ignore
[];
var __VLS_57;
let __VLS_66;
/** @ts-ignore @type {typeof __VLS_components.FocusModalBody | typeof __VLS_components.FocusModalBody} */
FocusModalBody;
// @ts-ignore
const __VLS_67 = __VLS_asFunctionalComponent1(__VLS_66, new __VLS_66({
    ...{ class: "p-5" },
}));
const __VLS_68 = __VLS_67({
    ...{ class: "p-5" },
}, ...__VLS_functionalComponentArgsRest(__VLS_67));
/** @type {__VLS_StyleScopedClasses['p-5']} */ ;
const { default: __VLS_71 } = __VLS_69.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "grid gap-4 md:grid-cols-2" },
});
/** @type {__VLS_StyleScopedClasses['grid']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-4']} */ ;
/** @type {__VLS_StyleScopedClasses['md:grid-cols-2']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
    ...{ class: "flex flex-col gap-y-1" },
});
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-y-1']} */ ;
let __VLS_72;
/** @ts-ignore @type {typeof __VLS_components.Text | typeof __VLS_components.Text} */
Text;
// @ts-ignore
const __VLS_73 = __VLS_asFunctionalComponent1(__VLS_72, new __VLS_72({
    size: "xsmall",
    leading: "compact",
    ...{ class: "text-ui-fg-subtle" },
}));
const __VLS_74 = __VLS_73({
    size: "xsmall",
    leading: "compact",
    ...{ class: "text-ui-fg-subtle" },
}, ...__VLS_functionalComponentArgsRest(__VLS_73));
/** @type {__VLS_StyleScopedClasses['text-ui-fg-subtle']} */ ;
const { default: __VLS_77 } = __VLS_75.slots;
// @ts-ignore
[];
var __VLS_75;
let __VLS_78;
/** @ts-ignore @type {typeof __VLS_components.Input} */
Input;
// @ts-ignore
const __VLS_79 = __VLS_asFunctionalComponent1(__VLS_78, new __VLS_78({
    placeholder: "e.g. Olivia Johnson",
}));
const __VLS_80 = __VLS_79({
    placeholder: "e.g. Olivia Johnson",
}, ...__VLS_functionalComponentArgsRest(__VLS_79));
__VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
    ...{ class: "flex flex-col gap-y-1" },
});
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-y-1']} */ ;
let __VLS_83;
/** @ts-ignore @type {typeof __VLS_components.Text | typeof __VLS_components.Text} */
Text;
// @ts-ignore
const __VLS_84 = __VLS_asFunctionalComponent1(__VLS_83, new __VLS_83({
    size: "xsmall",
    leading: "compact",
    ...{ class: "text-ui-fg-subtle" },
}));
const __VLS_85 = __VLS_84({
    size: "xsmall",
    leading: "compact",
    ...{ class: "text-ui-fg-subtle" },
}, ...__VLS_functionalComponentArgsRest(__VLS_84));
/** @type {__VLS_StyleScopedClasses['text-ui-fg-subtle']} */ ;
const { default: __VLS_88 } = __VLS_86.slots;
// @ts-ignore
[];
var __VLS_86;
let __VLS_89;
/** @ts-ignore @type {typeof __VLS_components.Input} */
Input;
// @ts-ignore
const __VLS_90 = __VLS_asFunctionalComponent1(__VLS_89, new __VLS_89({
    type: "email",
    placeholder: "olivia@example.com",
}));
const __VLS_91 = __VLS_90({
    type: "email",
    placeholder: "olivia@example.com",
}, ...__VLS_functionalComponentArgsRest(__VLS_90));
__VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
    ...{ class: "flex flex-col gap-y-1 md:col-span-2" },
});
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-y-1']} */ ;
/** @type {__VLS_StyleScopedClasses['md:col-span-2']} */ ;
let __VLS_94;
/** @ts-ignore @type {typeof __VLS_components.Text | typeof __VLS_components.Text} */
Text;
// @ts-ignore
const __VLS_95 = __VLS_asFunctionalComponent1(__VLS_94, new __VLS_94({
    size: "xsmall",
    leading: "compact",
    ...{ class: "text-ui-fg-subtle" },
}));
const __VLS_96 = __VLS_95({
    size: "xsmall",
    leading: "compact",
    ...{ class: "text-ui-fg-subtle" },
}, ...__VLS_functionalComponentArgsRest(__VLS_95));
/** @type {__VLS_StyleScopedClasses['text-ui-fg-subtle']} */ ;
const { default: __VLS_99 } = __VLS_97.slots;
// @ts-ignore
[];
var __VLS_97;
let __VLS_100;
/** @ts-ignore @type {typeof __VLS_components.Textarea} */
Textarea;
// @ts-ignore
const __VLS_101 = __VLS_asFunctionalComponent1(__VLS_100, new __VLS_100({
    rows: "4",
    placeholder: "Add any note for fulfillment team",
}));
const __VLS_102 = __VLS_101({
    rows: "4",
    placeholder: "Add any note for fulfillment team",
}, ...__VLS_functionalComponentArgsRest(__VLS_101));
// @ts-ignore
[];
var __VLS_69;
let __VLS_105;
/** @ts-ignore @type {typeof __VLS_components.FocusModalFooter | typeof __VLS_components.FocusModalFooter} */
FocusModalFooter;
// @ts-ignore
const __VLS_106 = __VLS_asFunctionalComponent1(__VLS_105, new __VLS_105({}));
const __VLS_107 = __VLS_106({}, ...__VLS_functionalComponentArgsRest(__VLS_106));
const { default: __VLS_110 } = __VLS_108.slots;
let __VLS_111;
/** @ts-ignore @type {typeof __VLS_components.Button | typeof __VLS_components.Button} */
Button;
// @ts-ignore
const __VLS_112 = __VLS_asFunctionalComponent1(__VLS_111, new __VLS_111({
    ...{ 'onClick': {} },
    variant: "secondary",
}));
const __VLS_113 = __VLS_112({
    ...{ 'onClick': {} },
    variant: "secondary",
}, ...__VLS_functionalComponentArgsRest(__VLS_112));
let __VLS_116;
const __VLS_117 = ({ click: {} },
    { onClick: (...[$event]) => {
            __VLS_ctx.createOpen = false;
            // @ts-ignore
            [createOpen,];
        } });
const { default: __VLS_118 } = __VLS_114.slots;
// @ts-ignore
[];
var __VLS_114;
var __VLS_115;
let __VLS_119;
/** @ts-ignore @type {typeof __VLS_components.Button | typeof __VLS_components.Button} */
Button;
// @ts-ignore
const __VLS_120 = __VLS_asFunctionalComponent1(__VLS_119, new __VLS_119({
    ...{ 'onClick': {} },
}));
const __VLS_121 = __VLS_120({
    ...{ 'onClick': {} },
}, ...__VLS_functionalComponentArgsRest(__VLS_120));
let __VLS_124;
const __VLS_125 = ({ click: {} },
    { onClick: (__VLS_ctx.createOrder) });
const { default: __VLS_126 } = __VLS_122.slots;
// @ts-ignore
[createOrder,];
var __VLS_122;
var __VLS_123;
// @ts-ignore
[];
var __VLS_108;
// @ts-ignore
[];
var __VLS_51;
// @ts-ignore
[];
var __VLS_28;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "grid gap-2 md:grid-cols-2 xl:grid-cols-4" },
});
/** @type {__VLS_StyleScopedClasses['grid']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
/** @type {__VLS_StyleScopedClasses['md:grid-cols-2']} */ ;
/** @type {__VLS_StyleScopedClasses['xl:grid-cols-4']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.article, __VLS_intrinsics.article)({
    ...{ class: "dashboard-panel p-4" },
});
/** @type {__VLS_StyleScopedClasses['dashboard-panel']} */ ;
/** @type {__VLS_StyleScopedClasses['p-4']} */ ;
let __VLS_127;
/** @ts-ignore @type {typeof __VLS_components.Text | typeof __VLS_components.Text} */
Text;
// @ts-ignore
const __VLS_128 = __VLS_asFunctionalComponent1(__VLS_127, new __VLS_127({
    size: "xsmall",
    leading: "compact",
    ...{ class: "text-ui-fg-subtle" },
}));
const __VLS_129 = __VLS_128({
    size: "xsmall",
    leading: "compact",
    ...{ class: "text-ui-fg-subtle" },
}, ...__VLS_functionalComponentArgsRest(__VLS_128));
/** @type {__VLS_StyleScopedClasses['text-ui-fg-subtle']} */ ;
const { default: __VLS_132 } = __VLS_130.slots;
// @ts-ignore
[];
var __VLS_130;
let __VLS_133;
/** @ts-ignore @type {typeof __VLS_components.Text | typeof __VLS_components.Text} */
Text;
// @ts-ignore
const __VLS_134 = __VLS_asFunctionalComponent1(__VLS_133, new __VLS_133({
    size: "large",
    leading: "compact",
    weight: "plus",
}));
const __VLS_135 = __VLS_134({
    size: "large",
    leading: "compact",
    weight: "plus",
}, ...__VLS_functionalComponentArgsRest(__VLS_134));
const { default: __VLS_138 } = __VLS_136.slots;
// @ts-ignore
[];
var __VLS_136;
let __VLS_139;
/** @ts-ignore @type {typeof __VLS_components.Text | typeof __VLS_components.Text} */
Text;
// @ts-ignore
const __VLS_140 = __VLS_asFunctionalComponent1(__VLS_139, new __VLS_139({
    size: "xsmall",
    leading: "compact",
    ...{ class: "text-ui-fg-subtle" },
}));
const __VLS_141 = __VLS_140({
    size: "xsmall",
    leading: "compact",
    ...{ class: "text-ui-fg-subtle" },
}, ...__VLS_functionalComponentArgsRest(__VLS_140));
/** @type {__VLS_StyleScopedClasses['text-ui-fg-subtle']} */ ;
const { default: __VLS_144 } = __VLS_142.slots;
// @ts-ignore
[];
var __VLS_142;
__VLS_asFunctionalElement1(__VLS_intrinsics.article, __VLS_intrinsics.article)({
    ...{ class: "dashboard-panel p-4" },
});
/** @type {__VLS_StyleScopedClasses['dashboard-panel']} */ ;
/** @type {__VLS_StyleScopedClasses['p-4']} */ ;
let __VLS_145;
/** @ts-ignore @type {typeof __VLS_components.Text | typeof __VLS_components.Text} */
Text;
// @ts-ignore
const __VLS_146 = __VLS_asFunctionalComponent1(__VLS_145, new __VLS_145({
    size: "xsmall",
    leading: "compact",
    ...{ class: "text-ui-fg-subtle" },
}));
const __VLS_147 = __VLS_146({
    size: "xsmall",
    leading: "compact",
    ...{ class: "text-ui-fg-subtle" },
}, ...__VLS_functionalComponentArgsRest(__VLS_146));
/** @type {__VLS_StyleScopedClasses['text-ui-fg-subtle']} */ ;
const { default: __VLS_150 } = __VLS_148.slots;
// @ts-ignore
[];
var __VLS_148;
let __VLS_151;
/** @ts-ignore @type {typeof __VLS_components.Text | typeof __VLS_components.Text} */
Text;
// @ts-ignore
const __VLS_152 = __VLS_asFunctionalComponent1(__VLS_151, new __VLS_151({
    size: "large",
    leading: "compact",
    weight: "plus",
}));
const __VLS_153 = __VLS_152({
    size: "large",
    leading: "compact",
    weight: "plus",
}, ...__VLS_functionalComponentArgsRest(__VLS_152));
const { default: __VLS_156 } = __VLS_154.slots;
// @ts-ignore
[];
var __VLS_154;
let __VLS_157;
/** @ts-ignore @type {typeof __VLS_components.Text | typeof __VLS_components.Text} */
Text;
// @ts-ignore
const __VLS_158 = __VLS_asFunctionalComponent1(__VLS_157, new __VLS_157({
    size: "xsmall",
    leading: "compact",
    ...{ class: "text-ui-fg-subtle" },
}));
const __VLS_159 = __VLS_158({
    size: "xsmall",
    leading: "compact",
    ...{ class: "text-ui-fg-subtle" },
}, ...__VLS_functionalComponentArgsRest(__VLS_158));
/** @type {__VLS_StyleScopedClasses['text-ui-fg-subtle']} */ ;
const { default: __VLS_162 } = __VLS_160.slots;
// @ts-ignore
[];
var __VLS_160;
__VLS_asFunctionalElement1(__VLS_intrinsics.article, __VLS_intrinsics.article)({
    ...{ class: "dashboard-panel p-4" },
});
/** @type {__VLS_StyleScopedClasses['dashboard-panel']} */ ;
/** @type {__VLS_StyleScopedClasses['p-4']} */ ;
let __VLS_163;
/** @ts-ignore @type {typeof __VLS_components.Text | typeof __VLS_components.Text} */
Text;
// @ts-ignore
const __VLS_164 = __VLS_asFunctionalComponent1(__VLS_163, new __VLS_163({
    size: "xsmall",
    leading: "compact",
    ...{ class: "text-ui-fg-subtle" },
}));
const __VLS_165 = __VLS_164({
    size: "xsmall",
    leading: "compact",
    ...{ class: "text-ui-fg-subtle" },
}, ...__VLS_functionalComponentArgsRest(__VLS_164));
/** @type {__VLS_StyleScopedClasses['text-ui-fg-subtle']} */ ;
const { default: __VLS_168 } = __VLS_166.slots;
// @ts-ignore
[];
var __VLS_166;
let __VLS_169;
/** @ts-ignore @type {typeof __VLS_components.Text | typeof __VLS_components.Text} */
Text;
// @ts-ignore
const __VLS_170 = __VLS_asFunctionalComponent1(__VLS_169, new __VLS_169({
    size: "large",
    leading: "compact",
    weight: "plus",
}));
const __VLS_171 = __VLS_170({
    size: "large",
    leading: "compact",
    weight: "plus",
}, ...__VLS_functionalComponentArgsRest(__VLS_170));
const { default: __VLS_174 } = __VLS_172.slots;
// @ts-ignore
[];
var __VLS_172;
let __VLS_175;
/** @ts-ignore @type {typeof __VLS_components.Text | typeof __VLS_components.Text} */
Text;
// @ts-ignore
const __VLS_176 = __VLS_asFunctionalComponent1(__VLS_175, new __VLS_175({
    size: "xsmall",
    leading: "compact",
    ...{ class: "text-ui-fg-subtle" },
}));
const __VLS_177 = __VLS_176({
    size: "xsmall",
    leading: "compact",
    ...{ class: "text-ui-fg-subtle" },
}, ...__VLS_functionalComponentArgsRest(__VLS_176));
/** @type {__VLS_StyleScopedClasses['text-ui-fg-subtle']} */ ;
const { default: __VLS_180 } = __VLS_178.slots;
// @ts-ignore
[];
var __VLS_178;
__VLS_asFunctionalElement1(__VLS_intrinsics.article, __VLS_intrinsics.article)({
    ...{ class: "dashboard-panel p-4" },
});
/** @type {__VLS_StyleScopedClasses['dashboard-panel']} */ ;
/** @type {__VLS_StyleScopedClasses['p-4']} */ ;
let __VLS_181;
/** @ts-ignore @type {typeof __VLS_components.Text | typeof __VLS_components.Text} */
Text;
// @ts-ignore
const __VLS_182 = __VLS_asFunctionalComponent1(__VLS_181, new __VLS_181({
    size: "xsmall",
    leading: "compact",
    ...{ class: "text-ui-fg-subtle" },
}));
const __VLS_183 = __VLS_182({
    size: "xsmall",
    leading: "compact",
    ...{ class: "text-ui-fg-subtle" },
}, ...__VLS_functionalComponentArgsRest(__VLS_182));
/** @type {__VLS_StyleScopedClasses['text-ui-fg-subtle']} */ ;
const { default: __VLS_186 } = __VLS_184.slots;
// @ts-ignore
[];
var __VLS_184;
let __VLS_187;
/** @ts-ignore @type {typeof __VLS_components.Text | typeof __VLS_components.Text} */
Text;
// @ts-ignore
const __VLS_188 = __VLS_asFunctionalComponent1(__VLS_187, new __VLS_187({
    size: "large",
    leading: "compact",
    weight: "plus",
}));
const __VLS_189 = __VLS_188({
    size: "large",
    leading: "compact",
    weight: "plus",
}, ...__VLS_functionalComponentArgsRest(__VLS_188));
const { default: __VLS_192 } = __VLS_190.slots;
// @ts-ignore
[];
var __VLS_190;
let __VLS_193;
/** @ts-ignore @type {typeof __VLS_components.Text | typeof __VLS_components.Text} */
Text;
// @ts-ignore
const __VLS_194 = __VLS_asFunctionalComponent1(__VLS_193, new __VLS_193({
    size: "xsmall",
    leading: "compact",
    ...{ class: "text-ui-fg-subtle" },
}));
const __VLS_195 = __VLS_194({
    size: "xsmall",
    leading: "compact",
    ...{ class: "text-ui-fg-subtle" },
}, ...__VLS_functionalComponentArgsRest(__VLS_194));
/** @type {__VLS_StyleScopedClasses['text-ui-fg-subtle']} */ ;
const { default: __VLS_198 } = __VLS_196.slots;
// @ts-ignore
[];
var __VLS_196;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "dashboard-panel overflow-hidden" },
});
/** @type {__VLS_StyleScopedClasses['dashboard-panel']} */ ;
/** @type {__VLS_StyleScopedClasses['overflow-hidden']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "border-b border-ui-border-base p-3" },
});
/** @type {__VLS_StyleScopedClasses['border-b']} */ ;
/** @type {__VLS_StyleScopedClasses['border-ui-border-base']} */ ;
/** @type {__VLS_StyleScopedClasses['p-3']} */ ;
let __VLS_199;
/** @ts-ignore @type {typeof __VLS_components.Tabs | typeof __VLS_components.Tabs} */
Tabs;
// @ts-ignore
const __VLS_200 = __VLS_asFunctionalComponent1(__VLS_199, new __VLS_199({
    ...{ 'onUpdate:modelValue': {} },
    modelValue: (__VLS_ctx.activeTab),
    defaultValue: "all",
}));
const __VLS_201 = __VLS_200({
    ...{ 'onUpdate:modelValue': {} },
    modelValue: (__VLS_ctx.activeTab),
    defaultValue: "all",
}, ...__VLS_functionalComponentArgsRest(__VLS_200));
let __VLS_204;
const __VLS_205 = ({ 'update:modelValue': {} },
    { 'onUpdate:modelValue': (__VLS_ctx.resetPage) });
const { default: __VLS_206 } = __VLS_202.slots;
let __VLS_207;
/** @ts-ignore @type {typeof __VLS_components.TabsList | typeof __VLS_components.TabsList} */
TabsList;
// @ts-ignore
const __VLS_208 = __VLS_asFunctionalComponent1(__VLS_207, new __VLS_207({}));
const __VLS_209 = __VLS_208({}, ...__VLS_functionalComponentArgsRest(__VLS_208));
const { default: __VLS_212 } = __VLS_210.slots;
let __VLS_213;
/** @ts-ignore @type {typeof __VLS_components.TabsTrigger | typeof __VLS_components.TabsTrigger} */
TabsTrigger;
// @ts-ignore
const __VLS_214 = __VLS_asFunctionalComponent1(__VLS_213, new __VLS_213({
    value: "all",
}));
const __VLS_215 = __VLS_214({
    value: "all",
}, ...__VLS_functionalComponentArgsRest(__VLS_214));
const { default: __VLS_218 } = __VLS_216.slots;
// @ts-ignore
[activeTab, resetPage,];
var __VLS_216;
let __VLS_219;
/** @ts-ignore @type {typeof __VLS_components.TabsTrigger | typeof __VLS_components.TabsTrigger} */
TabsTrigger;
// @ts-ignore
const __VLS_220 = __VLS_asFunctionalComponent1(__VLS_219, new __VLS_219({
    value: "pending",
}));
const __VLS_221 = __VLS_220({
    value: "pending",
}, ...__VLS_functionalComponentArgsRest(__VLS_220));
const { default: __VLS_224 } = __VLS_222.slots;
// @ts-ignore
[];
var __VLS_222;
let __VLS_225;
/** @ts-ignore @type {typeof __VLS_components.TabsTrigger | typeof __VLS_components.TabsTrigger} */
TabsTrigger;
// @ts-ignore
const __VLS_226 = __VLS_asFunctionalComponent1(__VLS_225, new __VLS_225({
    value: "completed",
}));
const __VLS_227 = __VLS_226({
    value: "completed",
}, ...__VLS_functionalComponentArgsRest(__VLS_226));
const { default: __VLS_230 } = __VLS_228.slots;
// @ts-ignore
[];
var __VLS_228;
let __VLS_231;
/** @ts-ignore @type {typeof __VLS_components.TabsTrigger | typeof __VLS_components.TabsTrigger} */
TabsTrigger;
// @ts-ignore
const __VLS_232 = __VLS_asFunctionalComponent1(__VLS_231, new __VLS_231({
    value: "returned",
}));
const __VLS_233 = __VLS_232({
    value: "returned",
}, ...__VLS_functionalComponentArgsRest(__VLS_232));
const { default: __VLS_236 } = __VLS_234.slots;
// @ts-ignore
[];
var __VLS_234;
// @ts-ignore
[];
var __VLS_210;
let __VLS_237;
/** @ts-ignore @type {typeof __VLS_components.TabsContent} */
TabsContent;
// @ts-ignore
const __VLS_238 = __VLS_asFunctionalComponent1(__VLS_237, new __VLS_237({
    value: "all",
    ...{ class: "mt-3 border-0 bg-transparent p-0" },
}));
const __VLS_239 = __VLS_238({
    value: "all",
    ...{ class: "mt-3 border-0 bg-transparent p-0" },
}, ...__VLS_functionalComponentArgsRest(__VLS_238));
/** @type {__VLS_StyleScopedClasses['mt-3']} */ ;
/** @type {__VLS_StyleScopedClasses['border-0']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-transparent']} */ ;
/** @type {__VLS_StyleScopedClasses['p-0']} */ ;
let __VLS_242;
/** @ts-ignore @type {typeof __VLS_components.TabsContent} */
TabsContent;
// @ts-ignore
const __VLS_243 = __VLS_asFunctionalComponent1(__VLS_242, new __VLS_242({
    value: "pending",
    ...{ class: "mt-3 border-0 bg-transparent p-0" },
}));
const __VLS_244 = __VLS_243({
    value: "pending",
    ...{ class: "mt-3 border-0 bg-transparent p-0" },
}, ...__VLS_functionalComponentArgsRest(__VLS_243));
/** @type {__VLS_StyleScopedClasses['mt-3']} */ ;
/** @type {__VLS_StyleScopedClasses['border-0']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-transparent']} */ ;
/** @type {__VLS_StyleScopedClasses['p-0']} */ ;
let __VLS_247;
/** @ts-ignore @type {typeof __VLS_components.TabsContent} */
TabsContent;
// @ts-ignore
const __VLS_248 = __VLS_asFunctionalComponent1(__VLS_247, new __VLS_247({
    value: "completed",
    ...{ class: "mt-3 border-0 bg-transparent p-0" },
}));
const __VLS_249 = __VLS_248({
    value: "completed",
    ...{ class: "mt-3 border-0 bg-transparent p-0" },
}, ...__VLS_functionalComponentArgsRest(__VLS_248));
/** @type {__VLS_StyleScopedClasses['mt-3']} */ ;
/** @type {__VLS_StyleScopedClasses['border-0']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-transparent']} */ ;
/** @type {__VLS_StyleScopedClasses['p-0']} */ ;
let __VLS_252;
/** @ts-ignore @type {typeof __VLS_components.TabsContent} */
TabsContent;
// @ts-ignore
const __VLS_253 = __VLS_asFunctionalComponent1(__VLS_252, new __VLS_252({
    value: "returned",
    ...{ class: "mt-3 border-0 bg-transparent p-0" },
}));
const __VLS_254 = __VLS_253({
    value: "returned",
    ...{ class: "mt-3 border-0 bg-transparent p-0" },
}, ...__VLS_functionalComponentArgsRest(__VLS_253));
/** @type {__VLS_StyleScopedClasses['mt-3']} */ ;
/** @type {__VLS_StyleScopedClasses['border-0']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-transparent']} */ ;
/** @type {__VLS_StyleScopedClasses['p-0']} */ ;
// @ts-ignore
[];
var __VLS_202;
var __VLS_203;
let __VLS_257;
/** @ts-ignore @type {typeof __VLS_components.Table | typeof __VLS_components.Table} */
Table;
// @ts-ignore
const __VLS_258 = __VLS_asFunctionalComponent1(__VLS_257, new __VLS_257({}));
const __VLS_259 = __VLS_258({}, ...__VLS_functionalComponentArgsRest(__VLS_258));
const { default: __VLS_262 } = __VLS_260.slots;
let __VLS_263;
/** @ts-ignore @type {typeof __VLS_components.TableHeader | typeof __VLS_components.TableHeader} */
TableHeader;
// @ts-ignore
const __VLS_264 = __VLS_asFunctionalComponent1(__VLS_263, new __VLS_263({}));
const __VLS_265 = __VLS_264({}, ...__VLS_functionalComponentArgsRest(__VLS_264));
const { default: __VLS_268 } = __VLS_266.slots;
let __VLS_269;
/** @ts-ignore @type {typeof __VLS_components.TableRow | typeof __VLS_components.TableRow} */
TableRow;
// @ts-ignore
const __VLS_270 = __VLS_asFunctionalComponent1(__VLS_269, new __VLS_269({}));
const __VLS_271 = __VLS_270({}, ...__VLS_functionalComponentArgsRest(__VLS_270));
const { default: __VLS_274 } = __VLS_272.slots;
let __VLS_275;
/** @ts-ignore @type {typeof __VLS_components.TableHeaderCell | typeof __VLS_components.TableHeaderCell} */
TableHeaderCell;
// @ts-ignore
const __VLS_276 = __VLS_asFunctionalComponent1(__VLS_275, new __VLS_275({}));
const __VLS_277 = __VLS_276({}, ...__VLS_functionalComponentArgsRest(__VLS_276));
const { default: __VLS_280 } = __VLS_278.slots;
// @ts-ignore
[];
var __VLS_278;
let __VLS_281;
/** @ts-ignore @type {typeof __VLS_components.TableHeaderCell | typeof __VLS_components.TableHeaderCell} */
TableHeaderCell;
// @ts-ignore
const __VLS_282 = __VLS_asFunctionalComponent1(__VLS_281, new __VLS_281({}));
const __VLS_283 = __VLS_282({}, ...__VLS_functionalComponentArgsRest(__VLS_282));
const { default: __VLS_286 } = __VLS_284.slots;
// @ts-ignore
[];
var __VLS_284;
let __VLS_287;
/** @ts-ignore @type {typeof __VLS_components.TableHeaderCell | typeof __VLS_components.TableHeaderCell} */
TableHeaderCell;
// @ts-ignore
const __VLS_288 = __VLS_asFunctionalComponent1(__VLS_287, new __VLS_287({}));
const __VLS_289 = __VLS_288({}, ...__VLS_functionalComponentArgsRest(__VLS_288));
const { default: __VLS_292 } = __VLS_290.slots;
// @ts-ignore
[];
var __VLS_290;
let __VLS_293;
/** @ts-ignore @type {typeof __VLS_components.TableHeaderCell | typeof __VLS_components.TableHeaderCell} */
TableHeaderCell;
// @ts-ignore
const __VLS_294 = __VLS_asFunctionalComponent1(__VLS_293, new __VLS_293({}));
const __VLS_295 = __VLS_294({}, ...__VLS_functionalComponentArgsRest(__VLS_294));
const { default: __VLS_298 } = __VLS_296.slots;
// @ts-ignore
[];
var __VLS_296;
let __VLS_299;
/** @ts-ignore @type {typeof __VLS_components.TableHeaderCell | typeof __VLS_components.TableHeaderCell} */
TableHeaderCell;
// @ts-ignore
const __VLS_300 = __VLS_asFunctionalComponent1(__VLS_299, new __VLS_299({
    ...{ class: "text-right" },
}));
const __VLS_301 = __VLS_300({
    ...{ class: "text-right" },
}, ...__VLS_functionalComponentArgsRest(__VLS_300));
/** @type {__VLS_StyleScopedClasses['text-right']} */ ;
const { default: __VLS_304 } = __VLS_302.slots;
// @ts-ignore
[];
var __VLS_302;
let __VLS_305;
/** @ts-ignore @type {typeof __VLS_components.TableHeaderCell | typeof __VLS_components.TableHeaderCell} */
TableHeaderCell;
// @ts-ignore
const __VLS_306 = __VLS_asFunctionalComponent1(__VLS_305, new __VLS_305({}));
const __VLS_307 = __VLS_306({}, ...__VLS_functionalComponentArgsRest(__VLS_306));
// @ts-ignore
[];
var __VLS_272;
// @ts-ignore
[];
var __VLS_266;
let __VLS_310;
/** @ts-ignore @type {typeof __VLS_components.TableBody | typeof __VLS_components.TableBody} */
TableBody;
// @ts-ignore
const __VLS_311 = __VLS_asFunctionalComponent1(__VLS_310, new __VLS_310({}));
const __VLS_312 = __VLS_311({}, ...__VLS_functionalComponentArgsRest(__VLS_311));
const { default: __VLS_315 } = __VLS_313.slots;
for (const [order] of __VLS_vFor((__VLS_ctx.pagedOrders))) {
    let __VLS_316;
    /** @ts-ignore @type {typeof __VLS_components.TableRow | typeof __VLS_components.TableRow} */
    TableRow;
    // @ts-ignore
    const __VLS_317 = __VLS_asFunctionalComponent1(__VLS_316, new __VLS_316({
        key: (order.id),
        ...{ class: "[&_td:last-child]:w-[1%] [&_td:last-child]:whitespace-nowrap" },
    }));
    const __VLS_318 = __VLS_317({
        key: (order.id),
        ...{ class: "[&_td:last-child]:w-[1%] [&_td:last-child]:whitespace-nowrap" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_317));
    /** @type {__VLS_StyleScopedClasses['[&_td:last-child]:w-[1%]']} */ ;
    /** @type {__VLS_StyleScopedClasses['[&_td:last-child]:whitespace-nowrap']} */ ;
    const { default: __VLS_321 } = __VLS_319.slots;
    let __VLS_322;
    /** @ts-ignore @type {typeof __VLS_components.TableCell | typeof __VLS_components.TableCell} */
    TableCell;
    // @ts-ignore
    const __VLS_323 = __VLS_asFunctionalComponent1(__VLS_322, new __VLS_322({}));
    const __VLS_324 = __VLS_323({}, ...__VLS_functionalComponentArgsRest(__VLS_323));
    const { default: __VLS_327 } = __VLS_325.slots;
    (order.displayId);
    // @ts-ignore
    [pagedOrders,];
    var __VLS_325;
    let __VLS_328;
    /** @ts-ignore @type {typeof __VLS_components.TableCell | typeof __VLS_components.TableCell} */
    TableCell;
    // @ts-ignore
    const __VLS_329 = __VLS_asFunctionalComponent1(__VLS_328, new __VLS_328({}));
    const __VLS_330 = __VLS_329({}, ...__VLS_functionalComponentArgsRest(__VLS_329));
    const { default: __VLS_333 } = __VLS_331.slots;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "flex flex-col" },
    });
    /** @type {__VLS_StyleScopedClasses['flex']} */ ;
    /** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
    let __VLS_334;
    /** @ts-ignore @type {typeof __VLS_components.Text | typeof __VLS_components.Text} */
    Text;
    // @ts-ignore
    const __VLS_335 = __VLS_asFunctionalComponent1(__VLS_334, new __VLS_334({
        size: "small",
        leading: "compact",
        weight: "plus",
    }));
    const __VLS_336 = __VLS_335({
        size: "small",
        leading: "compact",
        weight: "plus",
    }, ...__VLS_functionalComponentArgsRest(__VLS_335));
    const { default: __VLS_339 } = __VLS_337.slots;
    (order.customer);
    // @ts-ignore
    [];
    var __VLS_337;
    let __VLS_340;
    /** @ts-ignore @type {typeof __VLS_components.Text | typeof __VLS_components.Text} */
    Text;
    // @ts-ignore
    const __VLS_341 = __VLS_asFunctionalComponent1(__VLS_340, new __VLS_340({
        size: "xsmall",
        leading: "compact",
        ...{ class: "text-ui-fg-subtle" },
    }));
    const __VLS_342 = __VLS_341({
        size: "xsmall",
        leading: "compact",
        ...{ class: "text-ui-fg-subtle" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_341));
    /** @type {__VLS_StyleScopedClasses['text-ui-fg-subtle']} */ ;
    const { default: __VLS_345 } = __VLS_343.slots;
    (order.email);
    // @ts-ignore
    [];
    var __VLS_343;
    // @ts-ignore
    [];
    var __VLS_331;
    let __VLS_346;
    /** @ts-ignore @type {typeof __VLS_components.TableCell | typeof __VLS_components.TableCell} */
    TableCell;
    // @ts-ignore
    const __VLS_347 = __VLS_asFunctionalComponent1(__VLS_346, new __VLS_346({}));
    const __VLS_348 = __VLS_347({}, ...__VLS_functionalComponentArgsRest(__VLS_347));
    const { default: __VLS_351 } = __VLS_349.slots;
    (order.date);
    // @ts-ignore
    [];
    var __VLS_349;
    let __VLS_352;
    /** @ts-ignore @type {typeof __VLS_components.TableCell | typeof __VLS_components.TableCell} */
    TableCell;
    // @ts-ignore
    const __VLS_353 = __VLS_asFunctionalComponent1(__VLS_352, new __VLS_352({}));
    const __VLS_354 = __VLS_353({}, ...__VLS_functionalComponentArgsRest(__VLS_353));
    const { default: __VLS_357 } = __VLS_355.slots;
    let __VLS_358;
    /** @ts-ignore @type {typeof __VLS_components.Badge | typeof __VLS_components.Badge} */
    Badge;
    // @ts-ignore
    const __VLS_359 = __VLS_asFunctionalComponent1(__VLS_358, new __VLS_358({
        size: "2xsmall",
        rounded: "full",
        color: (__VLS_ctx.statusColor(order.status)),
    }));
    const __VLS_360 = __VLS_359({
        size: "2xsmall",
        rounded: "full",
        color: (__VLS_ctx.statusColor(order.status)),
    }, ...__VLS_functionalComponentArgsRest(__VLS_359));
    const { default: __VLS_363 } = __VLS_361.slots;
    (order.status);
    // @ts-ignore
    [statusColor,];
    var __VLS_361;
    // @ts-ignore
    [];
    var __VLS_355;
    let __VLS_364;
    /** @ts-ignore @type {typeof __VLS_components.TableCell | typeof __VLS_components.TableCell} */
    TableCell;
    // @ts-ignore
    const __VLS_365 = __VLS_asFunctionalComponent1(__VLS_364, new __VLS_364({
        ...{ class: "text-right" },
    }));
    const __VLS_366 = __VLS_365({
        ...{ class: "text-right" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_365));
    /** @type {__VLS_StyleScopedClasses['text-right']} */ ;
    const { default: __VLS_369 } = __VLS_367.slots;
    (order.total);
    // @ts-ignore
    [];
    var __VLS_367;
    let __VLS_370;
    /** @ts-ignore @type {typeof __VLS_components.TableCell | typeof __VLS_components.TableCell} */
    TableCell;
    // @ts-ignore
    const __VLS_371 = __VLS_asFunctionalComponent1(__VLS_370, new __VLS_370({}));
    const __VLS_372 = __VLS_371({}, ...__VLS_functionalComponentArgsRest(__VLS_371));
    const { default: __VLS_375 } = __VLS_373.slots;
    let __VLS_376;
    /** @ts-ignore @type {typeof __VLS_components.IconButton | typeof __VLS_components.IconButton} */
    IconButton;
    // @ts-ignore
    const __VLS_377 = __VLS_asFunctionalComponent1(__VLS_376, new __VLS_376({
        variant: "transparent",
        size: "small",
    }));
    const __VLS_378 = __VLS_377({
        variant: "transparent",
        size: "small",
    }, ...__VLS_functionalComponentArgsRest(__VLS_377));
    const { default: __VLS_381 } = __VLS_379.slots;
    let __VLS_382;
    /** @ts-ignore @type {typeof __VLS_components.EllipsisHorizontal} */
    EllipsisHorizontal;
    // @ts-ignore
    const __VLS_383 = __VLS_asFunctionalComponent1(__VLS_382, new __VLS_382({
        ...{ class: "text-ui-fg-subtle" },
    }));
    const __VLS_384 = __VLS_383({
        ...{ class: "text-ui-fg-subtle" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_383));
    /** @type {__VLS_StyleScopedClasses['text-ui-fg-subtle']} */ ;
    // @ts-ignore
    [];
    var __VLS_379;
    // @ts-ignore
    [];
    var __VLS_373;
    // @ts-ignore
    [];
    var __VLS_319;
    // @ts-ignore
    [];
}
// @ts-ignore
[];
var __VLS_313;
// @ts-ignore
[];
var __VLS_260;
let __VLS_387;
/** @ts-ignore @type {typeof __VLS_components.TablePagination} */
TablePagination;
// @ts-ignore
const __VLS_388 = __VLS_asFunctionalComponent1(__VLS_387, new __VLS_387({
    ...{ 'onNextPage': {} },
    ...{ 'onPreviousPage': {} },
    count: (__VLS_ctx.visibleOrders.length),
    pageSize: (__VLS_ctx.pageSize),
    pageIndex: (__VLS_ctx.pageIndex),
    pageCount: (__VLS_ctx.pageCount),
    canPreviousPage: (__VLS_ctx.canPreviousPage),
    canNextPage: (__VLS_ctx.canNextPage),
}));
const __VLS_389 = __VLS_388({
    ...{ 'onNextPage': {} },
    ...{ 'onPreviousPage': {} },
    count: (__VLS_ctx.visibleOrders.length),
    pageSize: (__VLS_ctx.pageSize),
    pageIndex: (__VLS_ctx.pageIndex),
    pageCount: (__VLS_ctx.pageCount),
    canPreviousPage: (__VLS_ctx.canPreviousPage),
    canNextPage: (__VLS_ctx.canNextPage),
}, ...__VLS_functionalComponentArgsRest(__VLS_388));
let __VLS_392;
const __VLS_393 = ({ nextPage: {} },
    { onNextPage: (__VLS_ctx.nextPage) });
const __VLS_394 = ({ previousPage: {} },
    { onPreviousPage: (__VLS_ctx.previousPage) });
var __VLS_390;
var __VLS_391;
// @ts-ignore
[visibleOrders, pageSize, pageIndex, pageCount, canPreviousPage, canNextPage, nextPage, previousPage,];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
