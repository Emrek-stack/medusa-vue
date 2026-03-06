/// <reference types="../../node_modules/@vue/language-core/types/template-helpers.d.ts" />
/// <reference types="../../node_modules/@vue/language-core/types/props-fallback.d.ts" />
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import { Button, Heading, Input, Switch, Text, Textarea, toast } from "@minima-vue/ui";
const route = useRoute();
const labels = {
    store: "Store",
    users: "Users",
    regions: "Regions",
    "api-keys": "API Keys",
    workflows: "Workflows",
};
const title = computed(() => labels[route.params.section] || "Settings");
const emailNotifications = ref(true);
const slackNotifications = ref(false);
const autoArchive = ref(true);
const save = () => {
    toast.success("Settings updated", {
        description: `${title.value} settings have been saved.`,
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
(__VLS_ctx.title);
// @ts-ignore
[title,];
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
(__VLS_ctx.title.toLowerCase());
// @ts-ignore
[title,];
var __VLS_9;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "dashboard-panel p-4" },
});
/** @type {__VLS_StyleScopedClasses['dashboard-panel']} */ ;
/** @type {__VLS_StyleScopedClasses['p-4']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "grid gap-4 md:grid-cols-2" },
});
/** @type {__VLS_StyleScopedClasses['grid']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-4']} */ ;
/** @type {__VLS_StyleScopedClasses['md:grid-cols-2']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
    ...{ class: "flex flex-col gap-y-1 md:col-span-2" },
});
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-y-1']} */ ;
/** @type {__VLS_StyleScopedClasses['md:col-span-2']} */ ;
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
// @ts-ignore
[];
var __VLS_15;
let __VLS_18;
/** @ts-ignore @type {typeof __VLS_components.Input} */
Input;
// @ts-ignore
const __VLS_19 = __VLS_asFunctionalComponent1(__VLS_18, new __VLS_18({
    placeholder: (`${__VLS_ctx.title} configuration`),
}));
const __VLS_20 = __VLS_19({
    placeholder: (`${__VLS_ctx.title} configuration`),
}, ...__VLS_functionalComponentArgsRest(__VLS_19));
__VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
    ...{ class: "flex flex-col gap-y-1" },
});
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-y-1']} */ ;
let __VLS_23;
/** @ts-ignore @type {typeof __VLS_components.Text | typeof __VLS_components.Text} */
Text;
// @ts-ignore
const __VLS_24 = __VLS_asFunctionalComponent1(__VLS_23, new __VLS_23({
    size: "xsmall",
    leading: "compact",
    ...{ class: "text-ui-fg-subtle" },
}));
const __VLS_25 = __VLS_24({
    size: "xsmall",
    leading: "compact",
    ...{ class: "text-ui-fg-subtle" },
}, ...__VLS_functionalComponentArgsRest(__VLS_24));
/** @type {__VLS_StyleScopedClasses['text-ui-fg-subtle']} */ ;
const { default: __VLS_28 } = __VLS_26.slots;
// @ts-ignore
[title,];
var __VLS_26;
let __VLS_29;
/** @ts-ignore @type {typeof __VLS_components.Input} */
Input;
// @ts-ignore
const __VLS_30 = __VLS_asFunctionalComponent1(__VLS_29, new __VLS_29({
    type: "email",
    placeholder: "support@example.com",
}));
const __VLS_31 = __VLS_30({
    type: "email",
    placeholder: "support@example.com",
}, ...__VLS_functionalComponentArgsRest(__VLS_30));
__VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
    ...{ class: "flex flex-col gap-y-1" },
});
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-y-1']} */ ;
let __VLS_34;
/** @ts-ignore @type {typeof __VLS_components.Text | typeof __VLS_components.Text} */
Text;
// @ts-ignore
const __VLS_35 = __VLS_asFunctionalComponent1(__VLS_34, new __VLS_34({
    size: "xsmall",
    leading: "compact",
    ...{ class: "text-ui-fg-subtle" },
}));
const __VLS_36 = __VLS_35({
    size: "xsmall",
    leading: "compact",
    ...{ class: "text-ui-fg-subtle" },
}, ...__VLS_functionalComponentArgsRest(__VLS_35));
/** @type {__VLS_StyleScopedClasses['text-ui-fg-subtle']} */ ;
const { default: __VLS_39 } = __VLS_37.slots;
// @ts-ignore
[];
var __VLS_37;
let __VLS_40;
/** @ts-ignore @type {typeof __VLS_components.Input} */
Input;
// @ts-ignore
const __VLS_41 = __VLS_asFunctionalComponent1(__VLS_40, new __VLS_40({
    placeholder: "https://api.example.com/webhooks",
}));
const __VLS_42 = __VLS_41({
    placeholder: "https://api.example.com/webhooks",
}, ...__VLS_functionalComponentArgsRest(__VLS_41));
__VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
    ...{ class: "flex flex-col gap-y-1 md:col-span-2" },
});
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-y-1']} */ ;
/** @type {__VLS_StyleScopedClasses['md:col-span-2']} */ ;
let __VLS_45;
/** @ts-ignore @type {typeof __VLS_components.Text | typeof __VLS_components.Text} */
Text;
// @ts-ignore
const __VLS_46 = __VLS_asFunctionalComponent1(__VLS_45, new __VLS_45({
    size: "xsmall",
    leading: "compact",
    ...{ class: "text-ui-fg-subtle" },
}));
const __VLS_47 = __VLS_46({
    size: "xsmall",
    leading: "compact",
    ...{ class: "text-ui-fg-subtle" },
}, ...__VLS_functionalComponentArgsRest(__VLS_46));
/** @type {__VLS_StyleScopedClasses['text-ui-fg-subtle']} */ ;
const { default: __VLS_50 } = __VLS_48.slots;
// @ts-ignore
[];
var __VLS_48;
let __VLS_51;
/** @ts-ignore @type {typeof __VLS_components.Textarea} */
Textarea;
// @ts-ignore
const __VLS_52 = __VLS_asFunctionalComponent1(__VLS_51, new __VLS_51({
    rows: "4",
    placeholder: "Optional description for this configuration",
}));
const __VLS_53 = __VLS_52({
    rows: "4",
    placeholder: "Optional description for this configuration",
}, ...__VLS_functionalComponentArgsRest(__VLS_52));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "dashboard-panel p-4" },
});
/** @type {__VLS_StyleScopedClasses['dashboard-panel']} */ ;
/** @type {__VLS_StyleScopedClasses['p-4']} */ ;
let __VLS_56;
/** @ts-ignore @type {typeof __VLS_components.Heading | typeof __VLS_components.Heading} */
Heading;
// @ts-ignore
const __VLS_57 = __VLS_asFunctionalComponent1(__VLS_56, new __VLS_56({
    level: "h3",
    ...{ class: "mb-3" },
}));
const __VLS_58 = __VLS_57({
    level: "h3",
    ...{ class: "mb-3" },
}, ...__VLS_functionalComponentArgsRest(__VLS_57));
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
const { default: __VLS_61 } = __VLS_59.slots;
// @ts-ignore
[];
var __VLS_59;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "grid gap-3" },
});
/** @type {__VLS_StyleScopedClasses['grid']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-3']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "flex items-center justify-between rounded-md border border-ui-border-base p-3" },
});
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-between']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-md']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['border-ui-border-base']} */ ;
/** @type {__VLS_StyleScopedClasses['p-3']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
let __VLS_62;
/** @ts-ignore @type {typeof __VLS_components.Text | typeof __VLS_components.Text} */
Text;
// @ts-ignore
const __VLS_63 = __VLS_asFunctionalComponent1(__VLS_62, new __VLS_62({
    size: "small",
    weight: "plus",
    leading: "compact",
}));
const __VLS_64 = __VLS_63({
    size: "small",
    weight: "plus",
    leading: "compact",
}, ...__VLS_functionalComponentArgsRest(__VLS_63));
const { default: __VLS_67 } = __VLS_65.slots;
// @ts-ignore
[];
var __VLS_65;
let __VLS_68;
/** @ts-ignore @type {typeof __VLS_components.Text | typeof __VLS_components.Text} */
Text;
// @ts-ignore
const __VLS_69 = __VLS_asFunctionalComponent1(__VLS_68, new __VLS_68({
    size: "xsmall",
    leading: "compact",
    ...{ class: "text-ui-fg-subtle" },
}));
const __VLS_70 = __VLS_69({
    size: "xsmall",
    leading: "compact",
    ...{ class: "text-ui-fg-subtle" },
}, ...__VLS_functionalComponentArgsRest(__VLS_69));
/** @type {__VLS_StyleScopedClasses['text-ui-fg-subtle']} */ ;
const { default: __VLS_73 } = __VLS_71.slots;
// @ts-ignore
[];
var __VLS_71;
let __VLS_74;
/** @ts-ignore @type {typeof __VLS_components.Switch} */
Switch;
// @ts-ignore
const __VLS_75 = __VLS_asFunctionalComponent1(__VLS_74, new __VLS_74({
    checked: (__VLS_ctx.emailNotifications),
}));
const __VLS_76 = __VLS_75({
    checked: (__VLS_ctx.emailNotifications),
}, ...__VLS_functionalComponentArgsRest(__VLS_75));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "flex items-center justify-between rounded-md border border-ui-border-base p-3" },
});
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-between']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-md']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['border-ui-border-base']} */ ;
/** @type {__VLS_StyleScopedClasses['p-3']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
let __VLS_79;
/** @ts-ignore @type {typeof __VLS_components.Text | typeof __VLS_components.Text} */
Text;
// @ts-ignore
const __VLS_80 = __VLS_asFunctionalComponent1(__VLS_79, new __VLS_79({
    size: "small",
    weight: "plus",
    leading: "compact",
}));
const __VLS_81 = __VLS_80({
    size: "small",
    weight: "plus",
    leading: "compact",
}, ...__VLS_functionalComponentArgsRest(__VLS_80));
const { default: __VLS_84 } = __VLS_82.slots;
// @ts-ignore
[emailNotifications,];
var __VLS_82;
let __VLS_85;
/** @ts-ignore @type {typeof __VLS_components.Text | typeof __VLS_components.Text} */
Text;
// @ts-ignore
const __VLS_86 = __VLS_asFunctionalComponent1(__VLS_85, new __VLS_85({
    size: "xsmall",
    leading: "compact",
    ...{ class: "text-ui-fg-subtle" },
}));
const __VLS_87 = __VLS_86({
    size: "xsmall",
    leading: "compact",
    ...{ class: "text-ui-fg-subtle" },
}, ...__VLS_functionalComponentArgsRest(__VLS_86));
/** @type {__VLS_StyleScopedClasses['text-ui-fg-subtle']} */ ;
const { default: __VLS_90 } = __VLS_88.slots;
// @ts-ignore
[];
var __VLS_88;
let __VLS_91;
/** @ts-ignore @type {typeof __VLS_components.Switch} */
Switch;
// @ts-ignore
const __VLS_92 = __VLS_asFunctionalComponent1(__VLS_91, new __VLS_91({
    checked: (__VLS_ctx.slackNotifications),
}));
const __VLS_93 = __VLS_92({
    checked: (__VLS_ctx.slackNotifications),
}, ...__VLS_functionalComponentArgsRest(__VLS_92));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "flex items-center justify-between rounded-md border border-ui-border-base p-3" },
});
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-between']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-md']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['border-ui-border-base']} */ ;
/** @type {__VLS_StyleScopedClasses['p-3']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
let __VLS_96;
/** @ts-ignore @type {typeof __VLS_components.Text | typeof __VLS_components.Text} */
Text;
// @ts-ignore
const __VLS_97 = __VLS_asFunctionalComponent1(__VLS_96, new __VLS_96({
    size: "small",
    weight: "plus",
    leading: "compact",
}));
const __VLS_98 = __VLS_97({
    size: "small",
    weight: "plus",
    leading: "compact",
}, ...__VLS_functionalComponentArgsRest(__VLS_97));
const { default: __VLS_101 } = __VLS_99.slots;
// @ts-ignore
[slackNotifications,];
var __VLS_99;
let __VLS_102;
/** @ts-ignore @type {typeof __VLS_components.Text | typeof __VLS_components.Text} */
Text;
// @ts-ignore
const __VLS_103 = __VLS_asFunctionalComponent1(__VLS_102, new __VLS_102({
    size: "xsmall",
    leading: "compact",
    ...{ class: "text-ui-fg-subtle" },
}));
const __VLS_104 = __VLS_103({
    size: "xsmall",
    leading: "compact",
    ...{ class: "text-ui-fg-subtle" },
}, ...__VLS_functionalComponentArgsRest(__VLS_103));
/** @type {__VLS_StyleScopedClasses['text-ui-fg-subtle']} */ ;
const { default: __VLS_107 } = __VLS_105.slots;
// @ts-ignore
[];
var __VLS_105;
let __VLS_108;
/** @ts-ignore @type {typeof __VLS_components.Switch} */
Switch;
// @ts-ignore
const __VLS_109 = __VLS_asFunctionalComponent1(__VLS_108, new __VLS_108({
    checked: (__VLS_ctx.autoArchive),
}));
const __VLS_110 = __VLS_109({
    checked: (__VLS_ctx.autoArchive),
}, ...__VLS_functionalComponentArgsRest(__VLS_109));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "mt-4 flex justify-end" },
});
/** @type {__VLS_StyleScopedClasses['mt-4']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-end']} */ ;
let __VLS_113;
/** @ts-ignore @type {typeof __VLS_components.Button | typeof __VLS_components.Button} */
Button;
// @ts-ignore
const __VLS_114 = __VLS_asFunctionalComponent1(__VLS_113, new __VLS_113({
    ...{ 'onClick': {} },
}));
const __VLS_115 = __VLS_114({
    ...{ 'onClick': {} },
}, ...__VLS_functionalComponentArgsRest(__VLS_114));
let __VLS_118;
const __VLS_119 = ({ click: {} },
    { onClick: (__VLS_ctx.save) });
const { default: __VLS_120 } = __VLS_116.slots;
// @ts-ignore
[autoArchive, save,];
var __VLS_116;
var __VLS_117;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
