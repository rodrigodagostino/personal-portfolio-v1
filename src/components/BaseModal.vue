<template>
	<transition name="fade" appear>
		<div class="modal-container">
			<div class="modal">
				<header class="modal-header">
					<h3 class="modal-title">
						<slot name="title" />
					</h3>
					<button type="button">
						<img svg-inline class="icon" src="~/assets/icons/times.svg" alt="example svg image" />
						<span class="screen-reader-only">Close modal window</span>
					</button>
				</header>
				<div class="modal-content">
					<slot />
				</div>
			</div>
			<div class="backdrop" @click="$emit('close-modal')" />
		</div>
	</transition>
</template>

<script>
import BaseButton from '@/components/BaseButton.vue'

export default {
	emits: [ 'close-modal' ],
	components: {
		BaseButton,
	},
}
</script>

<style lang="scss">
.modal-container {
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 1000;
}

.modal {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 90%;
	max-width: 53.75rem;
	max-height: 92vh;
	margin: 0;
	border-radius: 12px;
	padding: 1rem;
	background-color: var(--grey-050);
	z-index: 100;

	&__close-button {
		border: none;

		svg {
			max-width: 100%;
		}
	}
}


.backdrop {
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 10;
	background-color: rgba(35, 38, 59, 0.5);
}
</style>
