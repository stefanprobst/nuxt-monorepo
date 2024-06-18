<script lang="ts" setup>
import type { Locale } from "@/config/i18n.config";
import type { RouteLocationRaw, RouterLinkProps } from "#vue-router";

/**
 * Not extending from `NuxtLinkProps` because this runs into vue's incomplete
 * typescript support.
 *
 * @see https://github.com/vuejs/core/issues/8286#issuecomment-1545659320
 * @see https://vuejs.org/guide/typescript/composition-api#syntax-limitations
 */
export interface NavLinkProps extends Omit<RouterLinkProps, "to"> {
	external?: boolean;
	href: RouteLocationRaw;
	locale?: Locale;
	noPrefetch?: boolean;
	noRel?: boolean;
	prefetch?: boolean;
	prefetchedClass?: string;
	// eslint-disable-next-line @typescript-eslint/ban-types
	rel?: "nofollow" | "noopener" | "noreferrer" | "sponsored" | "ugc" | (string & {}) | null;
	// eslint-disable-next-line @typescript-eslint/ban-types
	target?: "_blank" | "_parent" | "_self" | "_top" | (string & {}) | null;
}

const props = defineProps<NavLinkProps>();

const localePath = useLocalePath();
</script>

<template>
	<NuxtLink
		:external="props.external"
		:href="props.external ? props.href : localePath(props.href, props.locale)"
	>
		<slot />
	</NuxtLink>
</template>
