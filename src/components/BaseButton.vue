<template>
	<component
		:is="tag"
		:href="href"
		:target="target"
		:type="computedType"
		class="button"
		:class="buttonClasses"
	>
		<i v-if="iconClasses" :class="iconClasses"></i>
		<span v-if="$slots.default" :class="textClasses">
			<slot />
		</span>
	</component>
</template>

<script>
export default {
	props: {
		href: {
			type: String,
			required: false,
			default: null,
		},
		target: {
			type: String,
			required: false,
			default: null,
		},
		type: {
			type: String,
			required: false,
			default: null,
		},
		variation: {
			type: String,
			required: false,
			default: 'flat',
		},
		size: {
			type: String,
			required: false,
			default: null,
		},
		iconClasses: {
			type: String,
			required: false,
			default: null,
		},
		textClasses: {
			type: String,
			required: false,
			default: null,
		},
	},
	computed: {
		tag() {
			if ( this.href ) {
				return 'a'
			}
			return 'button'
		},
		computedType() {
			if ( !this.type && !this.href ) {
				return 'button'
			}
			return null
		},
		buttonClasses() {
			return {
				'button--solid': this.variation === 'solid',
				'button--solid-dark': this.variation === 'solid-dark',
				'button--solid-primary': this.variation === 'solid-primary',
				'button--flat': this.variation === 'flat',
				'button--small': this.size === 'small',
				'button--medium': this.size === 'medium',
				'button--large': this.size === 'large',
			}
		},
	},
}
</script>

<style scoped lang="scss">
.button {
	font-weight: 500;
	text-transform: uppercase;
	cursor: pointer;
	padding: 0.625em 1em;
	border: none;
	border-radius: 0.375em;
	outline: none;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	transition: color 0.24s ease, box-shadow 0.12s ease;
}

.button i + span {
	margin-left: 0.5rem;
}

.button--solid {
	color: var(--grey-800);
	background: var(--grey-050);
	text-shadow: 0 1px 1px rgba(45, 35, 66, 0.16);
	box-shadow: 0 0.25rem 0 var(--grey-200), 0 -1px 4px rgba(45, 35, 66, 0.12),
		0 5px 1px rgba(45, 35, 66, 0.12), 0 6px 2px rgba(45, 35, 66, 0.12),
		0 8px 4px rgba(45, 35, 66, 0.12), 0 12px 8px rgba(45, 35, 66, 0.12),
		0 20px 16px rgba(45, 35, 66, 0.12);
	transform: translate3d(0, 0, 0);
	transition: background-color 0.24s ease, box-shadow 0.24s ease, transform 0.24s ease;
	will-change: box-shadow, transform;
}

.button--solid:focus,
.button--solid:hover {
	box-shadow: 0 0.375rem 0 var(--grey-200), 0 -1px 4px rgba(45, 35, 66, 0.12),
		0 7px 1px rgba(45, 35, 66, 0.12), 0 8px 2px rgba(45, 35, 66, 0.12),
		0 10px 4px rgba(45, 35, 66, 0.12), 0 16px 8px rgba(45, 35, 66, 0.12),
		0 24px 16px rgba(45, 35, 66, 0.12);
	transform: translate3d(0, -2px, 0);
}

.button--solid:active {
	box-shadow: 0 0.125rem 0 var(--grey-200), 0 -1px 4px rgba(45, 35, 66, 0.12),
		0 3px 1px rgba(45, 35, 66, 0.12), 0 5px 2px rgba(45, 35, 66, 0.12),
		0 6px 4px rgba(45, 35, 66, 0.12), 0 8px 8px rgba(45, 35, 66, 0.12),
		0 16px 16px rgba(45, 35, 66, 0.12);
	transform: translate3d(0, 2px, 0);
}

.button--solid-dark {
	color: var(--grey-050);
	text-shadow: 0 1px 1px rgba(45, 35, 66, 0.32);
	background: radial-gradient(100% 100% at 100% 0%, var(--grey-500) 0%, var(--grey-700) 100%);
	box-shadow: 0 0.25rem 0 var(--grey-800), 0 -1px 4px rgba(45, 35, 66, 0.12),
		0 5px 1px rgba(45, 35, 66, 0.12), 0 6px 2px rgba(45, 35, 66, 0.12),
		0 8px 4px rgba(45, 35, 66, 0.12), 0 12px 8px rgba(45, 35, 66, 0.12),
		0 20px 16px rgba(45, 35, 66, 0.12);
	transform: translate3d(0, 0, 0);
	transition: background-color 0.24s ease, box-shadow 0.24s ease, transform 0.24s ease;
	will-change: box-shadow, transform;
}

.button--solid-dark:focus,
.button--solid-dark:hover {
	box-shadow: 0 0.375rem 0 var(--grey-800), 0 -1px 4px rgba(45, 35, 66, 0.12),
		0 7px 1px rgba(45, 35, 66, 0.12), 0 8px 2px rgba(45, 35, 66, 0.12),
		0 10px 4px rgba(45, 35, 66, 0.12), 0 16px 8px rgba(45, 35, 66, 0.12),
		0 24px 16px rgba(45, 35, 66, 0.12);
	transform: translate3d(0, -2px, 0);
}

.button--solid-dark:active {
	box-shadow: 0 0.125rem 0 var(--grey-800), 0 -1px 4px rgba(45, 35, 66, 0.12),
		0 3px 1px rgba(45, 35, 66, 0.12), 0 5px 2px rgba(45, 35, 66, 0.12),
		0 6px 4px rgba(45, 35, 66, 0.12), 0 8px 8px rgba(45, 35, 66, 0.12),
		0 16px 16px rgba(45, 35, 66, 0.12);
	transform: translate3d(0, 2px, 0);
}

.button--solid-primary {
	color: var(--grey-050);
	text-shadow: 0 1px 1px rgba(45, 35, 66, 0.32);
	background: radial-gradient(100% 100% at 100% 0%, var(--cyan-400) 0%, var(--nebula-500) 100%);
	box-shadow: 0 0.25rem 0 var(--nebula-600), 0 -1px 4px rgba(45, 35, 66, 0.12),
		0 5px 1px rgba(45, 35, 66, 0.12), 0 6px 2px rgba(45, 35, 66, 0.12),
		0 8px 4px rgba(45, 35, 66, 0.12), 0 12px 8px rgba(45, 35, 66, 0.12),
		0 20px 16px rgba(45, 35, 66, 0.12);
	transform: translate3d(0, 0, 0);
	transition: background-color 0.24s ease, box-shadow 0.24s ease, transform 0.24s ease;
	will-change: box-shadow, transform;
}

.button--solid-primary:focus,
.button--solid-primary:hover {
	box-shadow: 0 0.375rem 0 var(--nebula-600), 0 -1px 4px rgba(45, 35, 66, 0.12),
		0 7px 1px rgba(45, 35, 66, 0.12), 0 8px 2px rgba(45, 35, 66, 0.12),
		0 10px 4px rgba(45, 35, 66, 0.12), 0 16px 8px rgba(45, 35, 66, 0.12),
		0 24px 16px rgba(45, 35, 66, 0.12);
	transform: translate3d(0, -2px, 0);
}

.button--solid-primary:active {
	box-shadow: 0 0.125rem 0 var(--nebula-600), 0 -1px 4px rgba(45, 35, 66, 0.12),
		0 3px 1px rgba(45, 35, 66, 0.12), 0 5px 2px rgba(45, 35, 66, 0.12),
		0 6px 4px rgba(45, 35, 66, 0.12), 0 8px 8px rgba(45, 35, 66, 0.12),
		0 16px 16px rgba(45, 35, 66, 0.12);
	transform: translate3d(0, 2px, 0);
}

.button--flat {
}

.button--flat:focus,
.button--flat:hover {
	color: var(--emerald-400);
}

.button--small {
	font-size: 0.75rem;
}

.button--medium {
	font-size: 1.5rem;
}

.button--large {
	font-size: 2.5rem;
}
</style>
