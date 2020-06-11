<script>
import { isExternal } from '@/utils/validate'

// =============== 函数式组件 ============
export default {
  name: 'Link',
  functional: true,
  props: {
    to: {
      type: String,
      required: true
    }
  },
  render(h, context) {
    const { props, scopedSlots } = context
    const { to } = props
    if (isExternal(to)) {
      return h(
        'a',
        {
          attrs: {
            target: '_blank',
            rel: 'noopener',
            href: to
          }
        },
        scopedSlots.default()
      )
    } else {
      return h(
        'router-link',
        {
          props: {
            to: to
          }
        },
        // scopedSlots.default()
        context.children
      )
    }
  }
}

// ============= 非函数式组件 =============
// export default {
//   name: 'Link',
//   props: {
//     to: {
//       type: String,
//       required: true
//     }
//   },
//   render(h) {
//     if (isExternal(this.to)) {
//       return h(
//         'a',
//         {
//           attrs: {
//             target: '_blank',
//             rel: 'noopener',
//             href: this.to
//           }
//         },
//         this.$slots.default
//       )
//     } else {
//       return h(
//         'router-link',
//         {
//           props: {
//             to: this.to
//           }
//         },
//         this.$slots.default
//       )
//     }
//   }
// }
</script>
