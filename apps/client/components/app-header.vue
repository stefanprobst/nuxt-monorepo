<script lang="ts" setup>
import type { NavLinkProps } from "@/components/nav-link.vue";

// const t = useTranslations();

const links = computed(() => {
	return {
		articles: { href: { path: "/articles" }, label: "dafdsafsadf" },
		db: { href: { path: "/db" }, label: "fdsafsdaf" },
		research: { href: { path: "/maps" }, label: "dfasdfasdf" },
	} satisfies Record<string, { href: NavLinkProps["href"]; label: string }>;
});
</script>

<template>
	<header class="border-b">
		<div class="container flex h-16 items-center justify-between gap-4 p-4">
			<!-- <img src="@/assets/lexat.svg" alt="LexAT Logo" class="w-32" /> -->
			<nav>
				<ul class="flex items-center gap-4" role="list">
					<li v-for="(link, key) of links" :key="key">
						<NavLink :href="link.href" class="uppercase">
							{{ link.label }}
						</NavLink>
					</li>
				</ul>
			</nav>

			<div class="relative flex items-center gap-4">
				<!-- <ColorSchemeSwitcher /> -->
				<!-- <LocaleSwitcher /> -->
			</div>
		</div>
	</header>
</template>
