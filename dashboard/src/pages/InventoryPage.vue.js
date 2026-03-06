/// <reference types="../../node_modules/@vue/language-core/types/template-helpers.d.ts" />
/// <reference types="../../node_modules/@vue/language-core/types/props-fallback.d.ts" />
import { ref } from "vue";
import { Badge, Heading, ProgressTabs, ProgressTabsContent, ProgressTabsList, ProgressTabsTrigger, Table, TableBody, TableCell, TableHeader, TableHeaderCell, TableRow, Text, } from "@minima-vue/ui";
const tab = ref("stock");
const stockRows = [
    { name: "Classic Hoodie", location: "Warehouse A", available: 142, reserved: 19 },
    { name: "Canvas Tote Bag", location: "Warehouse A", available: 69, reserved: 4 },
    { name: "Cloud Tee", location: "Warehouse B", available: 0, reserved: 0 },
];
const reservations = [
    { id: "res_01", order: "#10231", sku: "SNK-010", qty: 2, state: "active" },
    { id: "res_02", order: "#10228", sku: "TEE-054", qty: 1, state: "pending" },
];
const locations = [
    { id: "loc_01", name: "Warehouse A", country: "United States", fulfillment: "Main" },
    { id: "loc_02", name: "Warehouse B", country: "Germany", fulfillment: "EU" },
];
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
    ...{ class: "dashboard-panel p-4" },
});
/** @type {__VLS_StyleScopedClasses['dashboard-panel']} */ ;
/** @type {__VLS_StyleScopedClasses['p-4']} */ ;
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
    ...{ class: "dashboard-panel overflow-hidden" },
});
/** @type {__VLS_StyleScopedClasses['dashboard-panel']} */ ;
/** @type {__VLS_StyleScopedClasses['overflow-hidden']} */ ;
let __VLS_12;
/** @ts-ignore @type {typeof __VLS_components.ProgressTabs | typeof __VLS_components.ProgressTabs} */
ProgressTabs;
// @ts-ignore
const __VLS_13 = __VLS_asFunctionalComponent1(__VLS_12, new __VLS_12({
    modelValue: (__VLS_ctx.tab),
    defaultValue: "stock",
}));
const __VLS_14 = __VLS_13({
    modelValue: (__VLS_ctx.tab),
    defaultValue: "stock",
}, ...__VLS_functionalComponentArgsRest(__VLS_13));
const { default: __VLS_17 } = __VLS_15.slots;
let __VLS_18;
/** @ts-ignore @type {typeof __VLS_components.ProgressTabsList | typeof __VLS_components.ProgressTabsList} */
ProgressTabsList;
// @ts-ignore
const __VLS_19 = __VLS_asFunctionalComponent1(__VLS_18, new __VLS_18({
    ...{ class: "border-b border-ui-border-base" },
}));
const __VLS_20 = __VLS_19({
    ...{ class: "border-b border-ui-border-base" },
}, ...__VLS_functionalComponentArgsRest(__VLS_19));
/** @type {__VLS_StyleScopedClasses['border-b']} */ ;
/** @type {__VLS_StyleScopedClasses['border-ui-border-base']} */ ;
const { default: __VLS_23 } = __VLS_21.slots;
let __VLS_24;
/** @ts-ignore @type {typeof __VLS_components.ProgressTabsTrigger | typeof __VLS_components.ProgressTabsTrigger} */
ProgressTabsTrigger;
// @ts-ignore
const __VLS_25 = __VLS_asFunctionalComponent1(__VLS_24, new __VLS_24({
    value: "stock",
    status: "completed",
}));
const __VLS_26 = __VLS_25({
    value: "stock",
    status: "completed",
}, ...__VLS_functionalComponentArgsRest(__VLS_25));
const { default: __VLS_29 } = __VLS_27.slots;
// @ts-ignore
[tab,];
var __VLS_27;
let __VLS_30;
/** @ts-ignore @type {typeof __VLS_components.ProgressTabsTrigger | typeof __VLS_components.ProgressTabsTrigger} */
ProgressTabsTrigger;
// @ts-ignore
const __VLS_31 = __VLS_asFunctionalComponent1(__VLS_30, new __VLS_30({
    value: "reservations",
    status: "in-progress",
}));
const __VLS_32 = __VLS_31({
    value: "reservations",
    status: "in-progress",
}, ...__VLS_functionalComponentArgsRest(__VLS_31));
const { default: __VLS_35 } = __VLS_33.slots;
// @ts-ignore
[];
var __VLS_33;
let __VLS_36;
/** @ts-ignore @type {typeof __VLS_components.ProgressTabsTrigger | typeof __VLS_components.ProgressTabsTrigger} */
ProgressTabsTrigger;
// @ts-ignore
const __VLS_37 = __VLS_asFunctionalComponent1(__VLS_36, new __VLS_36({
    value: "locations",
    status: "not-started",
}));
const __VLS_38 = __VLS_37({
    value: "locations",
    status: "not-started",
}, ...__VLS_functionalComponentArgsRest(__VLS_37));
const { default: __VLS_41 } = __VLS_39.slots;
// @ts-ignore
[];
var __VLS_39;
// @ts-ignore
[];
var __VLS_21;
let __VLS_42;
/** @ts-ignore @type {typeof __VLS_components.ProgressTabsContent | typeof __VLS_components.ProgressTabsContent} */
ProgressTabsContent;
// @ts-ignore
const __VLS_43 = __VLS_asFunctionalComponent1(__VLS_42, new __VLS_42({
    value: "stock",
    ...{ class: "p-0" },
}));
const __VLS_44 = __VLS_43({
    value: "stock",
    ...{ class: "p-0" },
}, ...__VLS_functionalComponentArgsRest(__VLS_43));
/** @type {__VLS_StyleScopedClasses['p-0']} */ ;
const { default: __VLS_47 } = __VLS_45.slots;
let __VLS_48;
/** @ts-ignore @type {typeof __VLS_components.Table | typeof __VLS_components.Table} */
Table;
// @ts-ignore
const __VLS_49 = __VLS_asFunctionalComponent1(__VLS_48, new __VLS_48({}));
const __VLS_50 = __VLS_49({}, ...__VLS_functionalComponentArgsRest(__VLS_49));
const { default: __VLS_53 } = __VLS_51.slots;
let __VLS_54;
/** @ts-ignore @type {typeof __VLS_components.TableHeader | typeof __VLS_components.TableHeader} */
TableHeader;
// @ts-ignore
const __VLS_55 = __VLS_asFunctionalComponent1(__VLS_54, new __VLS_54({}));
const __VLS_56 = __VLS_55({}, ...__VLS_functionalComponentArgsRest(__VLS_55));
const { default: __VLS_59 } = __VLS_57.slots;
let __VLS_60;
/** @ts-ignore @type {typeof __VLS_components.TableRow | typeof __VLS_components.TableRow} */
TableRow;
// @ts-ignore
const __VLS_61 = __VLS_asFunctionalComponent1(__VLS_60, new __VLS_60({}));
const __VLS_62 = __VLS_61({}, ...__VLS_functionalComponentArgsRest(__VLS_61));
const { default: __VLS_65 } = __VLS_63.slots;
let __VLS_66;
/** @ts-ignore @type {typeof __VLS_components.TableHeaderCell | typeof __VLS_components.TableHeaderCell} */
TableHeaderCell;
// @ts-ignore
const __VLS_67 = __VLS_asFunctionalComponent1(__VLS_66, new __VLS_66({}));
const __VLS_68 = __VLS_67({}, ...__VLS_functionalComponentArgsRest(__VLS_67));
const { default: __VLS_71 } = __VLS_69.slots;
// @ts-ignore
[];
var __VLS_69;
let __VLS_72;
/** @ts-ignore @type {typeof __VLS_components.TableHeaderCell | typeof __VLS_components.TableHeaderCell} */
TableHeaderCell;
// @ts-ignore
const __VLS_73 = __VLS_asFunctionalComponent1(__VLS_72, new __VLS_72({}));
const __VLS_74 = __VLS_73({}, ...__VLS_functionalComponentArgsRest(__VLS_73));
const { default: __VLS_77 } = __VLS_75.slots;
// @ts-ignore
[];
var __VLS_75;
let __VLS_78;
/** @ts-ignore @type {typeof __VLS_components.TableHeaderCell | typeof __VLS_components.TableHeaderCell} */
TableHeaderCell;
// @ts-ignore
const __VLS_79 = __VLS_asFunctionalComponent1(__VLS_78, new __VLS_78({}));
const __VLS_80 = __VLS_79({}, ...__VLS_functionalComponentArgsRest(__VLS_79));
const { default: __VLS_83 } = __VLS_81.slots;
// @ts-ignore
[];
var __VLS_81;
let __VLS_84;
/** @ts-ignore @type {typeof __VLS_components.TableHeaderCell | typeof __VLS_components.TableHeaderCell} */
TableHeaderCell;
// @ts-ignore
const __VLS_85 = __VLS_asFunctionalComponent1(__VLS_84, new __VLS_84({}));
const __VLS_86 = __VLS_85({}, ...__VLS_functionalComponentArgsRest(__VLS_85));
const { default: __VLS_89 } = __VLS_87.slots;
// @ts-ignore
[];
var __VLS_87;
// @ts-ignore
[];
var __VLS_63;
// @ts-ignore
[];
var __VLS_57;
let __VLS_90;
/** @ts-ignore @type {typeof __VLS_components.TableBody | typeof __VLS_components.TableBody} */
TableBody;
// @ts-ignore
const __VLS_91 = __VLS_asFunctionalComponent1(__VLS_90, new __VLS_90({}));
const __VLS_92 = __VLS_91({}, ...__VLS_functionalComponentArgsRest(__VLS_91));
const { default: __VLS_95 } = __VLS_93.slots;
for (const [row] of __VLS_vFor((__VLS_ctx.stockRows))) {
    let __VLS_96;
    /** @ts-ignore @type {typeof __VLS_components.TableRow | typeof __VLS_components.TableRow} */
    TableRow;
    // @ts-ignore
    const __VLS_97 = __VLS_asFunctionalComponent1(__VLS_96, new __VLS_96({
        key: (`${row.name}-${row.location}`),
    }));
    const __VLS_98 = __VLS_97({
        key: (`${row.name}-${row.location}`),
    }, ...__VLS_functionalComponentArgsRest(__VLS_97));
    const { default: __VLS_101 } = __VLS_99.slots;
    let __VLS_102;
    /** @ts-ignore @type {typeof __VLS_components.TableCell | typeof __VLS_components.TableCell} */
    TableCell;
    // @ts-ignore
    const __VLS_103 = __VLS_asFunctionalComponent1(__VLS_102, new __VLS_102({}));
    const __VLS_104 = __VLS_103({}, ...__VLS_functionalComponentArgsRest(__VLS_103));
    const { default: __VLS_107 } = __VLS_105.slots;
    (row.name);
    // @ts-ignore
    [stockRows,];
    var __VLS_105;
    let __VLS_108;
    /** @ts-ignore @type {typeof __VLS_components.TableCell | typeof __VLS_components.TableCell} */
    TableCell;
    // @ts-ignore
    const __VLS_109 = __VLS_asFunctionalComponent1(__VLS_108, new __VLS_108({}));
    const __VLS_110 = __VLS_109({}, ...__VLS_functionalComponentArgsRest(__VLS_109));
    const { default: __VLS_113 } = __VLS_111.slots;
    (row.location);
    // @ts-ignore
    [];
    var __VLS_111;
    let __VLS_114;
    /** @ts-ignore @type {typeof __VLS_components.TableCell | typeof __VLS_components.TableCell} */
    TableCell;
    // @ts-ignore
    const __VLS_115 = __VLS_asFunctionalComponent1(__VLS_114, new __VLS_114({}));
    const __VLS_116 = __VLS_115({}, ...__VLS_functionalComponentArgsRest(__VLS_115));
    const { default: __VLS_119 } = __VLS_117.slots;
    (row.available);
    // @ts-ignore
    [];
    var __VLS_117;
    let __VLS_120;
    /** @ts-ignore @type {typeof __VLS_components.TableCell | typeof __VLS_components.TableCell} */
    TableCell;
    // @ts-ignore
    const __VLS_121 = __VLS_asFunctionalComponent1(__VLS_120, new __VLS_120({}));
    const __VLS_122 = __VLS_121({}, ...__VLS_functionalComponentArgsRest(__VLS_121));
    const { default: __VLS_125 } = __VLS_123.slots;
    (row.reserved);
    // @ts-ignore
    [];
    var __VLS_123;
    // @ts-ignore
    [];
    var __VLS_99;
    // @ts-ignore
    [];
}
// @ts-ignore
[];
var __VLS_93;
// @ts-ignore
[];
var __VLS_51;
// @ts-ignore
[];
var __VLS_45;
let __VLS_126;
/** @ts-ignore @type {typeof __VLS_components.ProgressTabsContent | typeof __VLS_components.ProgressTabsContent} */
ProgressTabsContent;
// @ts-ignore
const __VLS_127 = __VLS_asFunctionalComponent1(__VLS_126, new __VLS_126({
    value: "reservations",
    ...{ class: "p-0" },
}));
const __VLS_128 = __VLS_127({
    value: "reservations",
    ...{ class: "p-0" },
}, ...__VLS_functionalComponentArgsRest(__VLS_127));
/** @type {__VLS_StyleScopedClasses['p-0']} */ ;
const { default: __VLS_131 } = __VLS_129.slots;
let __VLS_132;
/** @ts-ignore @type {typeof __VLS_components.Table | typeof __VLS_components.Table} */
Table;
// @ts-ignore
const __VLS_133 = __VLS_asFunctionalComponent1(__VLS_132, new __VLS_132({}));
const __VLS_134 = __VLS_133({}, ...__VLS_functionalComponentArgsRest(__VLS_133));
const { default: __VLS_137 } = __VLS_135.slots;
let __VLS_138;
/** @ts-ignore @type {typeof __VLS_components.TableHeader | typeof __VLS_components.TableHeader} */
TableHeader;
// @ts-ignore
const __VLS_139 = __VLS_asFunctionalComponent1(__VLS_138, new __VLS_138({}));
const __VLS_140 = __VLS_139({}, ...__VLS_functionalComponentArgsRest(__VLS_139));
const { default: __VLS_143 } = __VLS_141.slots;
let __VLS_144;
/** @ts-ignore @type {typeof __VLS_components.TableRow | typeof __VLS_components.TableRow} */
TableRow;
// @ts-ignore
const __VLS_145 = __VLS_asFunctionalComponent1(__VLS_144, new __VLS_144({}));
const __VLS_146 = __VLS_145({}, ...__VLS_functionalComponentArgsRest(__VLS_145));
const { default: __VLS_149 } = __VLS_147.slots;
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
const __VLS_157 = __VLS_asFunctionalComponent1(__VLS_156, new __VLS_156({}));
const __VLS_158 = __VLS_157({}, ...__VLS_functionalComponentArgsRest(__VLS_157));
const { default: __VLS_161 } = __VLS_159.slots;
// @ts-ignore
[];
var __VLS_159;
let __VLS_162;
/** @ts-ignore @type {typeof __VLS_components.TableHeaderCell | typeof __VLS_components.TableHeaderCell} */
TableHeaderCell;
// @ts-ignore
const __VLS_163 = __VLS_asFunctionalComponent1(__VLS_162, new __VLS_162({}));
const __VLS_164 = __VLS_163({}, ...__VLS_functionalComponentArgsRest(__VLS_163));
const { default: __VLS_167 } = __VLS_165.slots;
// @ts-ignore
[];
var __VLS_165;
let __VLS_168;
/** @ts-ignore @type {typeof __VLS_components.TableHeaderCell | typeof __VLS_components.TableHeaderCell} */
TableHeaderCell;
// @ts-ignore
const __VLS_169 = __VLS_asFunctionalComponent1(__VLS_168, new __VLS_168({}));
const __VLS_170 = __VLS_169({}, ...__VLS_functionalComponentArgsRest(__VLS_169));
const { default: __VLS_173 } = __VLS_171.slots;
// @ts-ignore
[];
var __VLS_171;
let __VLS_174;
/** @ts-ignore @type {typeof __VLS_components.TableHeaderCell | typeof __VLS_components.TableHeaderCell} */
TableHeaderCell;
// @ts-ignore
const __VLS_175 = __VLS_asFunctionalComponent1(__VLS_174, new __VLS_174({}));
const __VLS_176 = __VLS_175({}, ...__VLS_functionalComponentArgsRest(__VLS_175));
const { default: __VLS_179 } = __VLS_177.slots;
// @ts-ignore
[];
var __VLS_177;
// @ts-ignore
[];
var __VLS_147;
// @ts-ignore
[];
var __VLS_141;
let __VLS_180;
/** @ts-ignore @type {typeof __VLS_components.TableBody | typeof __VLS_components.TableBody} */
TableBody;
// @ts-ignore
const __VLS_181 = __VLS_asFunctionalComponent1(__VLS_180, new __VLS_180({}));
const __VLS_182 = __VLS_181({}, ...__VLS_functionalComponentArgsRest(__VLS_181));
const { default: __VLS_185 } = __VLS_183.slots;
for (const [row] of __VLS_vFor((__VLS_ctx.reservations))) {
    let __VLS_186;
    /** @ts-ignore @type {typeof __VLS_components.TableRow | typeof __VLS_components.TableRow} */
    TableRow;
    // @ts-ignore
    const __VLS_187 = __VLS_asFunctionalComponent1(__VLS_186, new __VLS_186({
        key: (row.id),
    }));
    const __VLS_188 = __VLS_187({
        key: (row.id),
    }, ...__VLS_functionalComponentArgsRest(__VLS_187));
    const { default: __VLS_191 } = __VLS_189.slots;
    let __VLS_192;
    /** @ts-ignore @type {typeof __VLS_components.TableCell | typeof __VLS_components.TableCell} */
    TableCell;
    // @ts-ignore
    const __VLS_193 = __VLS_asFunctionalComponent1(__VLS_192, new __VLS_192({}));
    const __VLS_194 = __VLS_193({}, ...__VLS_functionalComponentArgsRest(__VLS_193));
    const { default: __VLS_197 } = __VLS_195.slots;
    (row.id);
    // @ts-ignore
    [reservations,];
    var __VLS_195;
    let __VLS_198;
    /** @ts-ignore @type {typeof __VLS_components.TableCell | typeof __VLS_components.TableCell} */
    TableCell;
    // @ts-ignore
    const __VLS_199 = __VLS_asFunctionalComponent1(__VLS_198, new __VLS_198({}));
    const __VLS_200 = __VLS_199({}, ...__VLS_functionalComponentArgsRest(__VLS_199));
    const { default: __VLS_203 } = __VLS_201.slots;
    (row.order);
    // @ts-ignore
    [];
    var __VLS_201;
    let __VLS_204;
    /** @ts-ignore @type {typeof __VLS_components.TableCell | typeof __VLS_components.TableCell} */
    TableCell;
    // @ts-ignore
    const __VLS_205 = __VLS_asFunctionalComponent1(__VLS_204, new __VLS_204({}));
    const __VLS_206 = __VLS_205({}, ...__VLS_functionalComponentArgsRest(__VLS_205));
    const { default: __VLS_209 } = __VLS_207.slots;
    (row.sku);
    // @ts-ignore
    [];
    var __VLS_207;
    let __VLS_210;
    /** @ts-ignore @type {typeof __VLS_components.TableCell | typeof __VLS_components.TableCell} */
    TableCell;
    // @ts-ignore
    const __VLS_211 = __VLS_asFunctionalComponent1(__VLS_210, new __VLS_210({}));
    const __VLS_212 = __VLS_211({}, ...__VLS_functionalComponentArgsRest(__VLS_211));
    const { default: __VLS_215 } = __VLS_213.slots;
    (row.qty);
    // @ts-ignore
    [];
    var __VLS_213;
    let __VLS_216;
    /** @ts-ignore @type {typeof __VLS_components.TableCell | typeof __VLS_components.TableCell} */
    TableCell;
    // @ts-ignore
    const __VLS_217 = __VLS_asFunctionalComponent1(__VLS_216, new __VLS_216({}));
    const __VLS_218 = __VLS_217({}, ...__VLS_functionalComponentArgsRest(__VLS_217));
    const { default: __VLS_221 } = __VLS_219.slots;
    let __VLS_222;
    /** @ts-ignore @type {typeof __VLS_components.Badge | typeof __VLS_components.Badge} */
    Badge;
    // @ts-ignore
    const __VLS_223 = __VLS_asFunctionalComponent1(__VLS_222, new __VLS_222({
        size: "2xsmall",
        rounded: "full",
        color: (row.state === 'active' ? 'green' : 'orange'),
    }));
    const __VLS_224 = __VLS_223({
        size: "2xsmall",
        rounded: "full",
        color: (row.state === 'active' ? 'green' : 'orange'),
    }, ...__VLS_functionalComponentArgsRest(__VLS_223));
    const { default: __VLS_227 } = __VLS_225.slots;
    (row.state);
    // @ts-ignore
    [];
    var __VLS_225;
    // @ts-ignore
    [];
    var __VLS_219;
    // @ts-ignore
    [];
    var __VLS_189;
    // @ts-ignore
    [];
}
// @ts-ignore
[];
var __VLS_183;
// @ts-ignore
[];
var __VLS_135;
// @ts-ignore
[];
var __VLS_129;
let __VLS_228;
/** @ts-ignore @type {typeof __VLS_components.ProgressTabsContent | typeof __VLS_components.ProgressTabsContent} */
ProgressTabsContent;
// @ts-ignore
const __VLS_229 = __VLS_asFunctionalComponent1(__VLS_228, new __VLS_228({
    value: "locations",
    ...{ class: "p-0" },
}));
const __VLS_230 = __VLS_229({
    value: "locations",
    ...{ class: "p-0" },
}, ...__VLS_functionalComponentArgsRest(__VLS_229));
/** @type {__VLS_StyleScopedClasses['p-0']} */ ;
const { default: __VLS_233 } = __VLS_231.slots;
let __VLS_234;
/** @ts-ignore @type {typeof __VLS_components.Table | typeof __VLS_components.Table} */
Table;
// @ts-ignore
const __VLS_235 = __VLS_asFunctionalComponent1(__VLS_234, new __VLS_234({}));
const __VLS_236 = __VLS_235({}, ...__VLS_functionalComponentArgsRest(__VLS_235));
const { default: __VLS_239 } = __VLS_237.slots;
let __VLS_240;
/** @ts-ignore @type {typeof __VLS_components.TableHeader | typeof __VLS_components.TableHeader} */
TableHeader;
// @ts-ignore
const __VLS_241 = __VLS_asFunctionalComponent1(__VLS_240, new __VLS_240({}));
const __VLS_242 = __VLS_241({}, ...__VLS_functionalComponentArgsRest(__VLS_241));
const { default: __VLS_245 } = __VLS_243.slots;
let __VLS_246;
/** @ts-ignore @type {typeof __VLS_components.TableRow | typeof __VLS_components.TableRow} */
TableRow;
// @ts-ignore
const __VLS_247 = __VLS_asFunctionalComponent1(__VLS_246, new __VLS_246({}));
const __VLS_248 = __VLS_247({}, ...__VLS_functionalComponentArgsRest(__VLS_247));
const { default: __VLS_251 } = __VLS_249.slots;
let __VLS_252;
/** @ts-ignore @type {typeof __VLS_components.TableHeaderCell | typeof __VLS_components.TableHeaderCell} */
TableHeaderCell;
// @ts-ignore
const __VLS_253 = __VLS_asFunctionalComponent1(__VLS_252, new __VLS_252({}));
const __VLS_254 = __VLS_253({}, ...__VLS_functionalComponentArgsRest(__VLS_253));
const { default: __VLS_257 } = __VLS_255.slots;
// @ts-ignore
[];
var __VLS_255;
let __VLS_258;
/** @ts-ignore @type {typeof __VLS_components.TableHeaderCell | typeof __VLS_components.TableHeaderCell} */
TableHeaderCell;
// @ts-ignore
const __VLS_259 = __VLS_asFunctionalComponent1(__VLS_258, new __VLS_258({}));
const __VLS_260 = __VLS_259({}, ...__VLS_functionalComponentArgsRest(__VLS_259));
const { default: __VLS_263 } = __VLS_261.slots;
// @ts-ignore
[];
var __VLS_261;
let __VLS_264;
/** @ts-ignore @type {typeof __VLS_components.TableHeaderCell | typeof __VLS_components.TableHeaderCell} */
TableHeaderCell;
// @ts-ignore
const __VLS_265 = __VLS_asFunctionalComponent1(__VLS_264, new __VLS_264({}));
const __VLS_266 = __VLS_265({}, ...__VLS_functionalComponentArgsRest(__VLS_265));
const { default: __VLS_269 } = __VLS_267.slots;
// @ts-ignore
[];
var __VLS_267;
// @ts-ignore
[];
var __VLS_249;
// @ts-ignore
[];
var __VLS_243;
let __VLS_270;
/** @ts-ignore @type {typeof __VLS_components.TableBody | typeof __VLS_components.TableBody} */
TableBody;
// @ts-ignore
const __VLS_271 = __VLS_asFunctionalComponent1(__VLS_270, new __VLS_270({}));
const __VLS_272 = __VLS_271({}, ...__VLS_functionalComponentArgsRest(__VLS_271));
const { default: __VLS_275 } = __VLS_273.slots;
for (const [row] of __VLS_vFor((__VLS_ctx.locations))) {
    let __VLS_276;
    /** @ts-ignore @type {typeof __VLS_components.TableRow | typeof __VLS_components.TableRow} */
    TableRow;
    // @ts-ignore
    const __VLS_277 = __VLS_asFunctionalComponent1(__VLS_276, new __VLS_276({
        key: (row.id),
    }));
    const __VLS_278 = __VLS_277({
        key: (row.id),
    }, ...__VLS_functionalComponentArgsRest(__VLS_277));
    const { default: __VLS_281 } = __VLS_279.slots;
    let __VLS_282;
    /** @ts-ignore @type {typeof __VLS_components.TableCell | typeof __VLS_components.TableCell} */
    TableCell;
    // @ts-ignore
    const __VLS_283 = __VLS_asFunctionalComponent1(__VLS_282, new __VLS_282({}));
    const __VLS_284 = __VLS_283({}, ...__VLS_functionalComponentArgsRest(__VLS_283));
    const { default: __VLS_287 } = __VLS_285.slots;
    (row.name);
    // @ts-ignore
    [locations,];
    var __VLS_285;
    let __VLS_288;
    /** @ts-ignore @type {typeof __VLS_components.TableCell | typeof __VLS_components.TableCell} */
    TableCell;
    // @ts-ignore
    const __VLS_289 = __VLS_asFunctionalComponent1(__VLS_288, new __VLS_288({}));
    const __VLS_290 = __VLS_289({}, ...__VLS_functionalComponentArgsRest(__VLS_289));
    const { default: __VLS_293 } = __VLS_291.slots;
    (row.country);
    // @ts-ignore
    [];
    var __VLS_291;
    let __VLS_294;
    /** @ts-ignore @type {typeof __VLS_components.TableCell | typeof __VLS_components.TableCell} */
    TableCell;
    // @ts-ignore
    const __VLS_295 = __VLS_asFunctionalComponent1(__VLS_294, new __VLS_294({}));
    const __VLS_296 = __VLS_295({}, ...__VLS_functionalComponentArgsRest(__VLS_295));
    const { default: __VLS_299 } = __VLS_297.slots;
    (row.fulfillment);
    // @ts-ignore
    [];
    var __VLS_297;
    // @ts-ignore
    [];
    var __VLS_279;
    // @ts-ignore
    [];
}
// @ts-ignore
[];
var __VLS_273;
// @ts-ignore
[];
var __VLS_237;
// @ts-ignore
[];
var __VLS_231;
// @ts-ignore
[];
var __VLS_15;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
