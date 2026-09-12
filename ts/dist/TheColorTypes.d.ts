export interface Idn {
    XYZ?: Record<string, any>;
    cmyk?: Record<string, any>;
    contrast?: Record<string, any>;
    embedded?: Record<string, any>;
    hex?: Record<string, any>;
    hsl?: Record<string, any>;
    hsv?: Record<string, any>;
    image?: Record<string, any>;
    links?: Record<string, any>;
    name?: Record<string, any>;
    rgb?: Record<string, any>;
}
export interface IdnLoadMatch {
    callback?: string;
    cmyk?: string;
    format?: string;
    hex?: string;
    hsl?: string;
    named?: boolean;
    rgb?: string;
    w?: number;
}
export interface Scheme {
    XYZ?: Record<string, any>;
    cmyk?: Record<string, any>;
    contrast?: Record<string, any>;
    embedded?: Record<string, any>;
    hex?: Record<string, any>;
    hsl?: Record<string, any>;
    hsv?: Record<string, any>;
    image?: Record<string, any>;
    links?: Record<string, any>;
    name?: Record<string, any>;
    rgb?: Record<string, any>;
}
export interface SchemeListMatch {
    callback?: string;
    cmyk?: string;
    count?: number;
    format?: string;
    hex?: string;
    hsl?: string;
    mode?: string;
    named?: boolean;
    rgb?: string;
    w?: number;
}
