import { Type } from '@angular/core';

export interface TypeConfig {
    name: string;
    type: Type<any>;
    onAppInit?: boolean;
}