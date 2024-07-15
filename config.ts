import {Pathnames, LocalePrefix} from 'next-intl/routing';

export const defaultLocale = 'ru' as const;
export const locales = ['ru', 'uz'] as const;

export const pathnames: Pathnames<typeof locales> = {
	'/': '/',
	'/pathnames': {
		ru: '/pathnames',
		uz: '/pathnames'
	}
};

export const localePrefix: LocalePrefix<typeof locales> = 'always';

