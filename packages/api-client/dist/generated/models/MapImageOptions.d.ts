import type { ImageFormat } from './ImageFormat';
export type MapImageOptions = {
    /**
     * The height of the image in physical pixel. The maximum allowed value is 8192.
     */
    width?: number;
    /**
     * The width of the image in physical pixel. The maximum allowed value is 8192.
     */
    height?: number;
    imageFormat?: ImageFormat;
};
