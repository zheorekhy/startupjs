/* @asyncImports */
import { faSpellCheck } from '@fortawesome/free-solid-svg-icons'
import CheckboxEn from '../components/forms/Checkbox/Checkbox.en.mdx'
import InputEn from '../components/forms/Input/Input.en.mdx'
import ObjectInputEn from '../components/forms/ObjectInput/ObjectInput.en.mdx'
import RadioEn from '../components/forms/Radio/Radio.en.mdx'
import TextInputEn from '../components/forms/TextInput/TextInput.en.mdx'
import TextInputRu from '../components/forms/TextInput/TextInput.ru.mdx'
import SelectEn from '../components/forms/Select/Select.en.mdx'

export default {
  type: 'collapse',
  title: {
    en: 'Forms',
    ru: 'Формы'
  },
  icon: faSpellCheck,
  items: {
    Checkbox: {
      type: 'mdx',
      title: 'Checkbox',
      component: CheckboxEn
    },
    Input: {
      type: 'mdx',
      title: 'Input',
      component: InputEn
    },
    ObjectInput: {
      type: 'mdx',
      title: 'ObjectInput',
      component: ObjectInputEn
    },
    Radio: {
      type: 'mdx',
      title: 'Radio',
      component: RadioEn
    },
    TextInput: {
      type: 'mdx',
      title: 'TextInput',
      component: {
        en: TextInputEn,
        ru: TextInputRu
      }
    },
    Select: {
      type: 'mdx',
      title: 'Select',
      component: SelectEn
    }
  }
}
