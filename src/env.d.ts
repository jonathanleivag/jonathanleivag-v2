/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
	readonly PUBLIC_CLOUD_NAME_CLOUDINARY: string;
	readonly PUBLIC_PUBLIC_ID_LOGO_CLOUDINARY: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
