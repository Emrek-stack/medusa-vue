/// <reference types="../../node_modules/@vue/language-core/types/template-helpers.d.ts" />
/// <reference types="../../node_modules/@vue/language-core/types/props-fallback.d.ts" />
import { ref } from "vue";
import { Badge, Button, Drawer, DrawerBody, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger, Heading, Input, Table, TableBody, TableCell, TableHeader, TableHeaderCell, TableRow, Text, toast, } from "@minima-vue/ui";
import { Funnel } from "@minima-vue/icons";
const drawerOpen = ref(false);
const customers = ref([
    { id: "cus_01", name: "Olivia Johnson", email: "olivia@example.com", group: "VIP", orders: 19, ltv: "$3,290" },
    { id: "cus_02", name: "Noah Lee", email: "noah@example.com", group: "General", orders: 8, ltv: "$912" },
    { id: "cus_03", name: "Mia Brown", email: "mia@example.com", group: "VIP", orders: 26, ltv: "$4,815" },
    { id: "cus_04", name: "James Wright", email: "james@example.com", group: "Wholesale", orders: 33, ltv: "$8,110" },
]);
const applyFilters = () => {
    drawerOpen.value = false;
    toast.info("Filters applied", {
        description: "Customer list has been filtered.",
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
let __VLS_12;
/** @ts-ignore @type {typeof __VLS_components.Drawer | typeof __VLS_components.Drawer} */
Drawer;
// @ts-ignore
const __VLS_13 = __VLS_asFunctionalComponent1(__VLS_12, new __VLS_12({
    open: (__VLS_ctx.drawerOpen),
}));
const __VLS_14 = __VLS_13({
    open: (__VLS_ctx.drawerOpen),
}, ...__VLS_functionalComponentArgsRest(__VLS_13));
const { default: __VLS_17 } = __VLS_15.slots;
let __VLS_18;
/** @ts-ignore @type {typeof __VLS_components.DrawerTrigger | typeof __VLS_components.DrawerTrigger} */
DrawerTrigger;
// @ts-ignore
const __VLS_19 = __VLS_asFunctionalComponent1(__VLS_18, new __VLS_18({
    asChild: true,
}));
const __VLS_20 = __VLS_19({
    asChild: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_19));
const { default: __VLS_23 } = __VLS_21.slots;
let __VLS_24;
/** @ts-ignore @type {typeof __VLS_components.Button | typeof __VLS_components.Button} */
Button;
// @ts-ignore
const __VLS_25 = __VLS_asFunctionalComponent1(__VLS_24, new __VLS_24({
    variant: "secondary",
    size: "small",
}));
const __VLS_26 = __VLS_25({
    variant: "secondary",
    size: "small",
}, ...__VLS_functionalComponentArgsRest(__VLS_25));
const { default: __VLS_29 } = __VLS_27.slots;
let __VLS_30;
/** @ts-ignore @type {typeof __VLS_components.Funnel} */
Funnel;
// @ts-ignore
const __VLS_31 = __VLS_asFunctionalComponent1(__VLS_30, new __VLS_30({}));
const __VLS_32 = __VLS_31({}, ...__VLS_functionalComponentArgsRest(__VLS_31));
// @ts-ignore
[drawerOpen,];
var __VLS_27;
// @ts-ignore
[];
var __VLS_21;
let __VLS_35;
/** @ts-ignore @type {typeof __VLS_components.DrawerContent | typeof __VLS_components.DrawerContent} */
DrawerContent;
// @ts-ignore
const __VLS_36 = __VLS_asFunctionalComponent1(__VLS_35, new __VLS_35({}));
const __VLS_37 = __VLS_36({}, ...__VLS_functionalComponentArgsRest(__VLS_36));
const { default: __VLS_40 } = __VLS_38.slots;
let __VLS_41;
/** @ts-ignore @type {typeof __VLS_components.DrawerHeader | typeof __VLS_components.DrawerHeader} */
DrawerHeader;
// @ts-ignore
const __VLS_42 = __VLS_asFunctionalComponent1(__VLS_41, new __VLS_41({}));
const __VLS_43 = __VLS_42({}, ...__VLS_functionalComponentArgsRest(__VLS_42));
const { default: __VLS_46 } = __VLS_44.slots;
let __VLS_47;
/** @ts-ignore @type {typeof __VLS_components.DrawerTitle | typeof __VLS_components.DrawerTitle} */
DrawerTitle;
// @ts-ignore
const __VLS_48 = __VLS_asFunctionalComponent1(__VLS_47, new __VLS_47({}));
const __VLS_49 = __VLS_48({}, ...__VLS_functionalComponentArgsRest(__VLS_48));
const { default: __VLS_52 } = __VLS_50.slots;
// @ts-ignore
[];
var __VLS_50;
let __VLS_53;
/** @ts-ignore @type {typeof __VLS_components.Text | typeof __VLS_components.Text} */
Text;
// @ts-ignore
const __VLS_54 = __VLS_asFunctionalComponent1(__VLS_53, new __VLS_53({
    size: "small",
    leading: "compact",
    ...{ class: "text-ui-fg-subtle" },
}));
const __VLS_55 = __VLS_54({
    size: "small",
    leading: "compact",
    ...{ class: "text-ui-fg-subtle" },
}, ...__VLS_functionalComponentArgsRest(__VLS_54));
/** @type {__VLS_StyleScopedClasses['text-ui-fg-subtle']} */ ;
const { default: __VLS_58 } = __VLS_56.slots;
// @ts-ignore
[];
var __VLS_56;
// @ts-ignore
[];
var __VLS_44;
let __VLS_59;
/** @ts-ignore @type {typeof __VLS_components.DrawerBody | typeof __VLS_components.DrawerBody} */
DrawerBody;
// @ts-ignore
const __VLS_60 = __VLS_asFunctionalComponent1(__VLS_59, new __VLS_59({}));
const __VLS_61 = __VLS_60({}, ...__VLS_functionalComponentArgsRest(__VLS_60));
const { default: __VLS_64 } = __VLS_62.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "grid gap-4" },
});
/** @type {__VLS_StyleScopedClasses['grid']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-4']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
    ...{ class: "flex flex-col gap-y-1" },
});
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-y-1']} */ ;
let __VLS_65;
/** @ts-ignore @type {typeof __VLS_components.Text | typeof __VLS_components.Text} */
Text;
// @ts-ignore
const __VLS_66 = __VLS_asFunctionalComponent1(__VLS_65, new __VLS_65({
    size: "xsmall",
    leading: "compact",
    ...{ class: "text-ui-fg-subtle" },
}));
const __VLS_67 = __VLS_66({
    size: "xsmall",
    leading: "compact",
    ...{ class: "text-ui-fg-subtle" },
}, ...__VLS_functionalComponentArgsRest(__VLS_66));
/** @type {__VLS_StyleScopedClasses['text-ui-fg-subtle']} */ ;
const { default: __VLS_70 } = __VLS_68.slots;
// @ts-ignore
[];
var __VLS_68;
let __VLS_71;
/** @ts-ignore @type {typeof __VLS_components.Input} */
Input;
// @ts-ignore
const __VLS_72 = __VLS_asFunctionalComponent1(__VLS_71, new __VLS_71({
    placeholder: "Search",
}));
const __VLS_73 = __VLS_72({
    placeholder: "Search",
}, ...__VLS_functionalComponentArgsRest(__VLS_72));
__VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
    ...{ class: "flex flex-col gap-y-1" },
});
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-y-1']} */ ;
let __VLS_76;
/** @ts-ignore @type {typeof __VLS_components.Text | typeof __VLS_components.Text} */
Text;
// @ts-ignore
const __VLS_77 = __VLS_asFunctionalComponent1(__VLS_76, new __VLS_76({
    size: "xsmall",
    leading: "compact",
    ...{ class: "text-ui-fg-subtle" },
}));
const __VLS_78 = __VLS_77({
    size: "xsmall",
    leading: "compact",
    ...{ class: "text-ui-fg-subtle" },
}, ...__VLS_functionalComponentArgsRest(__VLS_77));
/** @type {__VLS_StyleScopedClasses['text-ui-fg-subtle']} */ ;
const { default: __VLS_81 } = __VLS_79.slots;
// @ts-ignore
[];
var __VLS_79;
let __VLS_82;
/** @ts-ignore @type {typeof __VLS_components.Input} */
Input;
// @ts-ignore
const __VLS_83 = __VLS_asFunctionalComponent1(__VLS_82, new __VLS_82({
    placeholder: "VIP, General, Wholesale",
}));
const __VLS_84 = __VLS_83({
    placeholder: "VIP, General, Wholesale",
}, ...__VLS_functionalComponentArgsRest(__VLS_83));
__VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
    ...{ class: "flex flex-col gap-y-1" },
});
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-y-1']} */ ;
let __VLS_87;
/** @ts-ignore @type {typeof __VLS_components.Text | typeof __VLS_components.Text} */
Text;
// @ts-ignore
const __VLS_88 = __VLS_asFunctionalComponent1(__VLS_87, new __VLS_87({
    size: "xsmall",
    leading: "compact",
    ...{ class: "text-ui-fg-subtle" },
}));
const __VLS_89 = __VLS_88({
    size: "xsmall",
    leading: "compact",
    ...{ class: "text-ui-fg-subtle" },
}, ...__VLS_functionalComponentArgsRest(__VLS_88));
/** @type {__VLS_StyleScopedClasses['text-ui-fg-subtle']} */ ;
const { default: __VLS_92 } = __VLS_90.slots;
// @ts-ignore
[];
var __VLS_90;
let __VLS_93;
/** @ts-ignore @type {typeof __VLS_components.Input} */
Input;
// @ts-ignore
const __VLS_94 = __VLS_asFunctionalComponent1(__VLS_93, new __VLS_93({
    placeholder: "e.g. >= 10",
}));
const __VLS_95 = __VLS_94({
    placeholder: "e.g. >= 10",
}, ...__VLS_functionalComponentArgsRest(__VLS_94));
// @ts-ignore
[];
var __VLS_62;
let __VLS_98;
/** @ts-ignore @type {typeof __VLS_components.DrawerFooter | typeof __VLS_components.DrawerFooter} */
DrawerFooter;
// @ts-ignore
const __VLS_99 = __VLS_asFunctionalComponent1(__VLS_98, new __VLS_98({}));
const __VLS_100 = __VLS_99({}, ...__VLS_functionalComponentArgsRest(__VLS_99));
const { default: __VLS_103 } = __VLS_101.slots;
let __VLS_104;
/** @ts-ignore @type {typeof __VLS_components.Button | typeof __VLS_components.Button} */
Button;
// @ts-ignore
const __VLS_105 = __VLS_asFunctionalComponent1(__VLS_104, new __VLS_104({
    ...{ 'onClick': {} },
    variant: "secondary",
}));
const __VLS_106 = __VLS_105({
    ...{ 'onClick': {} },
    variant: "secondary",
}, ...__VLS_functionalComponentArgsRest(__VLS_105));
let __VLS_109;
const __VLS_110 = ({ click: {} },
    { onClick: (...[$event]) => {
            __VLS_ctx.drawerOpen = false;
            // @ts-ignore
            [drawerOpen,];
        } });
const { default: __VLS_111 } = __VLS_107.slots;
// @ts-ignore
[];
var __VLS_107;
var __VLS_108;
let __VLS_112;
/** @ts-ignore @type {typeof __VLS_components.Button | typeof __VLS_components.Button} */
Button;
// @ts-ignore
const __VLS_113 = __VLS_asFunctionalComponent1(__VLS_112, new __VLS_112({
    ...{ 'onClick': {} },
}));
const __VLS_114 = __VLS_113({
    ...{ 'onClick': {} },
}, ...__VLS_functionalComponentArgsRest(__VLS_113));
let __VLS_117;
const __VLS_118 = ({ click: {} },
    { onClick: (__VLS_ctx.applyFilters) });
const { default: __VLS_119 } = __VLS_115.slots;
// @ts-ignore
[applyFilters,];
var __VLS_115;
var __VLS_116;
// @ts-ignore
[];
var __VLS_101;
// @ts-ignore
[];
var __VLS_38;
// @ts-ignore
[];
var __VLS_15;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "dashboard-panel overflow-hidden" },
});
/** @type {__VLS_StyleScopedClasses['dashboard-panel']} */ ;
/** @type {__VLS_StyleScopedClasses['overflow-hidden']} */ ;
let __VLS_120;
/** @ts-ignore @type {typeof __VLS_components.Table | typeof __VLS_components.Table} */
Table;
// @ts-ignore
const __VLS_121 = __VLS_asFunctionalComponent1(__VLS_120, new __VLS_120({}));
const __VLS_122 = __VLS_121({}, ...__VLS_functionalComponentArgsRest(__VLS_121));
const { default: __VLS_125 } = __VLS_123.slots;
let __VLS_126;
/** @ts-ignore @type {typeof __VLS_components.TableHeader | typeof __VLS_components.TableHeader} */
TableHeader;
// @ts-ignore
const __VLS_127 = __VLS_asFunctionalComponent1(__VLS_126, new __VLS_126({}));
const __VLS_128 = __VLS_127({}, ...__VLS_functionalComponentArgsRest(__VLS_127));
const { default: __VLS_131 } = __VLS_129.slots;
let __VLS_132;
/** @ts-ignore @type {typeof __VLS_components.TableRow | typeof __VLS_components.TableRow} */
TableRow;
// @ts-ignore
const __VLS_133 = __VLS_asFunctionalComponent1(__VLS_132, new __VLS_132({}));
const __VLS_134 = __VLS_133({}, ...__VLS_functionalComponentArgsRest(__VLS_133));
const { default: __VLS_137 } = __VLS_135.slots;
let __VLS_138;
/** @ts-ignore @type {typeof __VLS_components.TableHeaderCell | typeof __VLS_components.TableHeaderCell} */
TableHeaderCell;
// @ts-ignore
const __VLS_139 = __VLS_asFunctionalComponent1(__VLS_138, new __VLS_138({}));
const __VLS_140 = __VLS_139({}, ...__VLS_functionalComponentArgsRest(__VLS_139));
const { default: __VLS_143 } = __VLS_141.slots;
// @ts-ignore
[];
var __VLS_141;
let __VLS_144;
/** @ts-ignore @type {typeof __VLS_components.TableHeaderCell | typeof __VLS_components.TableHeaderCell} */
TableHeaderCell;
// @ts-ignore
const __VLS_145 = __VLS_asFunctionalComponent1(__VLS_144, new __VLS_144({}));
const __VLS_146 = __VLS_145({}, ...__VLS_functionalComponentArgsRest(__VLS_145));
const { default: __VLS_149 } = __VLS_147.slots;
// @ts-ignore
[];
var __VLS_147;
let __VLS_150;
/** @ts-ignore @type {typeof __VLS_components.TableHeaderCell | typeof __VLS_components.TableHeaderCell} */
TableHeaderCell;
// @ts-ignore
const __VLS_151 = __VLS_asFunctionalComponent1(__VLS_150, new __VLS_150({}));
const __VLS_152 = __VLS_151({}, ...__VLS_functionalComponentArgsRest(__VLS_151));
const { default: __VLS_155 } = __VLS_153.slots;
// @ts-ignore
[];
var __VLS_153;
let __VLS_156;
/** @ts-ignore @type {typeof __VLS_components.TableHeaderCell | typeof __VLS_components.TableHeaderCell} */
TableHeaderCell;
// @ts-ignore
const __VLS_157 = __VLS_asFunctionalComponent1(__VLS_156, new __VLS_156({
    ...{ class: "text-right" },
}));
const __VLS_158 = __VLS_157({
    ...{ class: "text-right" },
}, ...__VLS_functionalComponentArgsRest(__VLS_157));
/** @type {__VLS_StyleScopedClasses['text-right']} */ ;
const { default: __VLS_161 } = __VLS_159.slots;
// @ts-ignore
[];
var __VLS_159;
// @ts-ignore
[];
var __VLS_135;
// @ts-ignore
[];
var __VLS_129;
let __VLS_162;
/** @ts-ignore @type {typeof __VLS_components.TableBody | typeof __VLS_components.TableBody} */
TableBody;
// @ts-ignore
const __VLS_163 = __VLS_asFunctionalComponent1(__VLS_162, new __VLS_162({}));
const __VLS_164 = __VLS_163({}, ...__VLS_functionalComponentArgsRest(__VLS_163));
const { default: __VLS_167 } = __VLS_165.slots;
for (const [customer] of __VLS_vFor((__VLS_ctx.customers))) {
    let __VLS_168;
    /** @ts-ignore @type {typeof __VLS_components.TableRow | typeof __VLS_components.TableRow} */
    TableRow;
    // @ts-ignore
    const __VLS_169 = __VLS_asFunctionalComponent1(__VLS_168, new __VLS_168({
        key: (customer.id),
    }));
    const __VLS_170 = __VLS_169({
        key: (customer.id),
    }, ...__VLS_functionalComponentArgsRest(__VLS_169));
    const { default: __VLS_173 } = __VLS_171.slots;
    let __VLS_174;
    /** @ts-ignore @type {typeof __VLS_components.TableCell | typeof __VLS_components.TableCell} */
    TableCell;
    // @ts-ignore
    const __VLS_175 = __VLS_asFunctionalComponent1(__VLS_174, new __VLS_174({}));
    const __VLS_176 = __VLS_175({}, ...__VLS_functionalComponentArgsRest(__VLS_175));
    const { default: __VLS_179 } = __VLS_177.slots;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "flex flex-col" },
    });
    /** @type {__VLS_StyleScopedClasses['flex']} */ ;
    /** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
    let __VLS_180;
    /** @ts-ignore @type {typeof __VLS_components.Text | typeof __VLS_components.Text} */
    Text;
    // @ts-ignore
    const __VLS_181 = __VLS_asFunctionalComponent1(__VLS_180, new __VLS_180({
        size: "small",
        leading: "compact",
        weight: "plus",
    }));
    const __VLS_182 = __VLS_181({
        size: "small",
        leading: "compact",
        weight: "plus",
    }, ...__VLS_functionalComponentArgsRest(__VLS_181));
    const { default: __VLS_185 } = __VLS_183.slots;
    (customer.name);
    // @ts-ignore
    [customers,];
    var __VLS_183;
    let __VLS_186;
    /** @ts-ignore @type {typeof __VLS_components.Text | typeof __VLS_components.Text} */
    Text;
    // @ts-ignore
    const __VLS_187 = __VLS_asFunctionalComponent1(__VLS_186, new __VLS_186({
        size: "xsmall",
        leading: "compact",
        ...{ class: "text-ui-fg-subtle" },
    }));
    const __VLS_188 = __VLS_187({
        size: "xsmall",
        leading: "compact",
        ...{ class: "text-ui-fg-subtle" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_187));
    /** @type {__VLS_StyleScopedClasses['text-ui-fg-subtle']} */ ;
    const { default: __VLS_191 } = __VLS_189.slots;
    (customer.email);
    // @ts-ignore
    [];
    var __VLS_189;
    // @ts-ignore
    [];
    var __VLS_177;
    let __VLS_192;
    /** @ts-ignore @type {typeof __VLS_components.TableCell | typeof __VLS_components.TableCell} */
    TableCell;
    // @ts-ignore
    const __VLS_193 = __VLS_asFunctionalComponent1(__VLS_192, new __VLS_192({}));
    const __VLS_194 = __VLS_193({}, ...__VLS_functionalComponentArgsRest(__VLS_193));
    const { default: __VLS_197 } = __VLS_195.slots;
    let __VLS_198;
    /** @ts-ignore @type {typeof __VLS_components.Badge | typeof __VLS_components.Badge} */
    Badge;
    // @ts-ignore
    const __VLS_199 = __VLS_asFunctionalComponent1(__VLS_198, new __VLS_198({
        size: "2xsmall",
        rounded: "full",
        color: (customer.group === 'VIP' ? 'purple' : customer.group === 'Wholesale' ? 'blue' : 'grey'),
    }));
    const __VLS_200 = __VLS_199({
        size: "2xsmall",
        rounded: "full",
        color: (customer.group === 'VIP' ? 'purple' : customer.group === 'Wholesale' ? 'blue' : 'grey'),
    }, ...__VLS_functionalComponentArgsRest(__VLS_199));
    const { default: __VLS_203 } = __VLS_201.slots;
    (customer.group);
    // @ts-ignore
    [];
    var __VLS_201;
    // @ts-ignore
    [];
    var __VLS_195;
    let __VLS_204;
    /** @ts-ignore @type {typeof __VLS_components.TableCell | typeof __VLS_components.TableCell} */
    TableCell;
    // @ts-ignore
    const __VLS_205 = __VLS_asFunctionalComponent1(__VLS_204, new __VLS_204({}));
    const __VLS_206 = __VLS_205({}, ...__VLS_functionalComponentArgsRest(__VLS_205));
    const { default: __VLS_209 } = __VLS_207.slots;
    (customer.orders);
    // @ts-ignore
    [];
    var __VLS_207;
    let __VLS_210;
    /** @ts-ignore @type {typeof __VLS_components.TableCell | typeof __VLS_components.TableCell} */
    TableCell;
    // @ts-ignore
    const __VLS_211 = __VLS_asFunctionalComponent1(__VLS_210, new __VLS_210({
        ...{ class: "text-right" },
    }));
    const __VLS_212 = __VLS_211({
        ...{ class: "text-right" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_211));
    /** @type {__VLS_StyleScopedClasses['text-right']} */ ;
    const { default: __VLS_215 } = __VLS_213.slots;
    (customer.ltv);
    // @ts-ignore
    [];
    var __VLS_213;
    // @ts-ignore
    [];
    var __VLS_171;
    // @ts-ignore
    [];
}
// @ts-ignore
[];
var __VLS_165;
// @ts-ignore
[];
var __VLS_123;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
