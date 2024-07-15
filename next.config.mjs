import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin(
	// Specify a custom path here
	'./i18n/i18n.ts'
);
/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withNextIntl(nextConfig);
