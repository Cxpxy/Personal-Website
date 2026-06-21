# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).

## Contact Form EmailJS Setup

The contact form sends email through EmailJS from the browser. Create a local `.env` or `.env.local` file with these values:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Configure the EmailJS template with these variables:

- `from_name`
- `from_email`
- `subject`
- `message`
- `reply_to`

Set the recipient address in the EmailJS template or service settings. Do not add an EmailJS private key to this Vite app because `VITE_` variables are exposed in the browser bundle.

Before deploying, configure EmailJS dashboard protections such as allowed domains, rate limits, and template restrictions for this site. Add the same `VITE_EMAILJS_*` values to your hosting provider's environment settings.
