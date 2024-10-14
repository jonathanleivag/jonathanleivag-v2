import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary, type CloudinaryImage } from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { type FC, useEffect, useState } from "react";

export interface ImageCloudinaryUiProps {
	width: number;
	height: number;
	publicId: string;
}

const ImageCloudinaryUi: FC<ImageCloudinaryUiProps> = ({
	height,
	width,
	publicId,
}) => {
	const [cld, setCld] = useState<CloudinaryImage | null>(null);

	useEffect(() => {
		const cld = new Cloudinary({
			cloud: {
				cloudName: import.meta.env.PUBLIC_CLOUD_NAME_CLOUDINARY,
			},
		})
			.image(publicId)
			.resize(fill().width(width).height(height));
		setCld(cld);
		return () => {};
	}, [width, height, publicId]);

	return cld !== null ? <AdvancedImage cldImg={cld} /> : <></>;
};

export default ImageCloudinaryUi;
