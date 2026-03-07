import FormProvider from "./form-provider.vue"
import FormItem from "./form-item.vue"
import FormLabel from "./form-label.vue"
import FormControl from "./form-control.vue"
import FormHint from "./form-hint.vue"
import FormErrorMessage from "./form-error-message.vue"
import FormField from "./form-field.vue"

export const Form = Object.assign(FormProvider, {
  Item: FormItem,
  Label: FormLabel,
  Control: FormControl,
  Hint: FormHint,
  ErrorMessage: FormErrorMessage,
  Field: FormField,
})

export {
  FormProvider,
  FormItem,
  FormLabel,
  FormControl,
  FormHint,
  FormErrorMessage,
  FormField,
}
