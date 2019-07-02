import { BlogService } from './blog.service';
import { TypeConfig } from '@providers/models/type-config';

export const allServices = [
    BlogService
];

export const allServiceTypeConfigs: TypeConfig[] = [
    {
        name: 'getBlogDetailsService',
        type: BlogService
    }
];

export * from './blog.service';
