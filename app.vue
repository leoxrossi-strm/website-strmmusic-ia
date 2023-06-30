<template>
	<div>
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
		<LangSwitcher class="switcher" />
	</div>
</template>
<style>
.switcher {
	position: absolute;
	top: 26px;
	right: 6px;
}

@media (max-width: 740px) {
	/* 'sm' breakpoint in Tailwind */
	.switcher {
		left: 8rem;
	}
}
</style>
