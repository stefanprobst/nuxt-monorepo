<script lang="ts" setup>
// const t = useTranslations();
</script>

<template>
	<NuxtErrorBoundary>
		<slot />

		<template #error="{ error }">
			<div class="relative">
				<Centered>
					<p>"Error": {{ error }}</p>
				</Centered>
			</div>
		</template>
	</NuxtErrorBoundary>
</template>
