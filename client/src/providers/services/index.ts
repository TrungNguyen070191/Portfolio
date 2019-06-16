import { GetBlogDetailsService } from './get-blog-details.service';
import { TypeConfig } from '@providers/models/type-config';

export const allServices = [
    GetBlogDetailsService
];

export const allServiceTypeConfigs: TypeConfig[] = [
    {
        name: 'getBlogDetailsService',
        type: GetBlogDetailsService
    }
];

export * from './get-blog-details.service';