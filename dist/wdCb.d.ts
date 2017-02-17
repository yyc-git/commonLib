// Generated by dts-bundle v0.7.2

declare module 'wonder-commonlib' {
    export { Collection } from "wonder-commonlib/Collection";
    export { $BREAK, $REMOVE } from "wonder-commonlib/global/Const";
    export { root } from "wonder-commonlib/global/Variable";
    export { Hash } from "wonder-commonlib/Hash";
    export { List } from "wonder-commonlib/List";
    export { Log } from "wonder-commonlib/Log";
    export { Queue } from "wonder-commonlib/Queue";
    export { Stack } from "wonder-commonlib/Stack";
    export { AjaxUtils } from "wonder-commonlib/utils/AjaxUtils";
    export { ArrayUtils } from "wonder-commonlib/utils/ArrayUtils";
    export { ConvertUtils } from "wonder-commonlib/utils/ConvertUtils";
    export { DomQuery } from "wonder-commonlib/utils/DomQuery";
    export { EventUtils } from "wonder-commonlib/utils/EventUtils";
    export { ExtendUtils } from "wonder-commonlib/utils/ExtendUtils";
    export { FunctionUtils } from "wonder-commonlib/utils/FunctionUtils";
    export { JudgeUtils } from "wonder-commonlib/utils/JudgeUtils";
    export { PathUtils } from "wonder-commonlib/utils/PathUtils";
}

declare module 'wonder-commonlib/Collection' {
    import { List } from "wonder-commonlib/List";
    export class Collection<T> extends List<T> {
        static create<T>(children?: any[]): Collection<T>;
        constructor(children?: Array<T>);
        clone(): any;
        clone(isDeep: boolean): any;
        clone(target: Collection<T>): any;
        clone(target: Collection<T>, isDeep: boolean): any;
        filter(func: (value: T, index: number) => boolean): Collection<T>;
        findOne(func: (value: T, index: number) => boolean): T;
        reverse(): Collection<T>;
        removeChild(arg: any): Collection<T>;
        sort(func: (a: T, b: T) => any, isSortSelf?: boolean): Collection<T>;
        map(func: (value: T, index: number) => any): Collection<any>;
        removeRepeatItems(): Collection<T>;
        hasRepeatItems(): boolean;
    }
}

declare module 'wonder-commonlib/global/Const' {
    export const $BREAK: {
        break: boolean;
    };
    export const $REMOVE: any;
}

declare module 'wonder-commonlib/global/Variable' {
    export var root: any;
}

declare module 'wonder-commonlib/Hash' {
    import { Collection } from "wonder-commonlib/Collection";
    export class Hash<T> {
        static create<T>(children?: {}): Hash<T>;
        constructor(children?: {
            [s: string]: T;
        });
        getChildren(): {
            [s: string]: T;
        };
        getCount(): number;
        getKeys(): Collection<string>;
        getValues(): Collection<T>;
        getChild(key: string): T;
        setValue(key: string, value: any): this;
        addChild(key: string, value: any): this;
        addChildren(arg: {} | Hash<T>): this;
        appendChild(key: string, value: any): this;
        setChildren(children: {
            [s: string]: T;
        }): void;
        removeChild(arg: any): Collection<T>;
        removeAllChildren(): void;
        hasChild(key: string): boolean;
        hasChildWithFunc(func: Function): boolean;
        forEach(func: Function, context?: any): this;
        filter(func: Function): Hash<T>;
        findOne(func: Function): any[];
        map(func: Function): Hash<T>;
        toCollection(): Collection<any>;
        toArray(): Array<T>;
        clone(): any;
        clone(isDeep: boolean): any;
        clone(target: Hash<T>): any;
        clone(target: Hash<T>, isDeep: boolean): any;
    }
}

declare module 'wonder-commonlib/List' {
    export class List<T> {
        protected children: Array<T>;
        getCount(): number;
        hasChild(child: any): boolean;
        hasChildWithFunc(func: Function): boolean;
        getChildren(): T[];
        getChild(index: number): T;
        addChild(child: T): this;
        addChildren(arg: Array<T> | List<T> | any): this;
        setChildren(children: Array<T>): this;
        unShiftChild(child: T): void;
        removeAllChildren(): this;
        forEach(func: Function, context?: any): this;
        toArray(): T[];
        protected copyChildren(): T[];
        protected removeChildHelper(arg: any): Array<T>;
    }
}

declare module 'wonder-commonlib/Log' {
    export class Log {
        static info: {
            INVALID_PARAM: string;
            helperFunc: (...args: any[]) => string;
            assertion: (...args: any[]) => any;
            FUNC_INVALID: (...args: any[]) => any;
            FUNC_MUST: (...args: any[]) => any;
            FUNC_MUST_BE: (...args: any[]) => any;
            FUNC_MUST_NOT_BE: (...args: any[]) => any;
            FUNC_SHOULD: (...args: any[]) => any;
            FUNC_SHOULD_NOT: (...args: any[]) => any;
            FUNC_SUPPORT: (...args: any[]) => any;
            FUNC_NOT_SUPPORT: (...args: any[]) => any;
            FUNC_MUST_DEFINE: (...args: any[]) => any;
            FUNC_MUST_NOT_DEFINE: (...args: any[]) => any;
            FUNC_UNKNOW: (...args: any[]) => any;
            FUNC_EXPECT: (...args: any[]) => any;
            FUNC_UNEXPECT: (...args: any[]) => any;
            FUNC_EXIST: (...args: any[]) => any;
            FUNC_NOT_EXIST: (...args: any[]) => any;
            FUNC_ONLY: (...args: any[]) => any;
            FUNC_CAN_NOT: (...args: any[]) => any;
        };
        static log(...messages: any[]): void;
        static assert(cond: any, ...messages: any[]): void;
        static error(cond: any, ...message: any[]): any;
        static warn(...message: any[]): void;
    }
}

declare module 'wonder-commonlib/Queue' {
    import { List } from "wonder-commonlib/List";
    export class Queue<T> extends List<T> {
        static create<T>(children?: any[]): Queue<T>;
        constructor(children?: Array<T>);
        readonly front: T;
        readonly rear: T;
        push(element: T): void;
        pop(): T;
        clear(): void;
    }
}

declare module 'wonder-commonlib/Stack' {
    import { List } from "wonder-commonlib/List";
    import { Collection } from "wonder-commonlib/Collection";
    export class Stack<T> extends List<T> {
        static create<T>(children?: any[]): Stack<T>;
        constructor(children?: Array<T>);
        readonly top: T;
        push(element: T): void;
        pop(): T;
        clear(): void;
        clone(): any;
        clone(isDeep: boolean): any;
        clone(target: Stack<T>): any;
        clone(target: Stack<T>, isDeep: boolean): any;
        filter(func: (value: T, index: number) => boolean): Collection<T>;
        findOne(func: (value: T, index: number) => boolean): T;
        reverse(): Collection<T>;
        removeChild(arg: any): Collection<T>;
        sort(func: (a: T, b: T) => any, isSortSelf?: boolean): Collection<T>;
        map(func: (value: T, index: number) => any): Collection<any>;
        removeRepeatItems(): Collection<T>;
        hasRepeatItems(): boolean;
    }
}

declare module 'wonder-commonlib/utils/AjaxUtils' {
    export class AjaxUtils {
        static ajax(conf: any): void;
    }
}

declare module 'wonder-commonlib/utils/ArrayUtils' {
    export class ArrayUtils {
        static removeRepeatItems(arr: Array<any>, isEqual?: (a: any, b: any) => boolean): any[];
        static contain(arr: Array<any>, ele: any): boolean;
    }
}

declare module 'wonder-commonlib/utils/ConvertUtils' {
    export class ConvertUtils {
        static toString(obj: any): string;
    }
}

declare module 'wonder-commonlib/utils/DomQuery' {
    export class DomQuery {
        static create(eleStr: string): any;
        static create(dom: HTMLElement): any;
        constructor(eleStr: string);
        constructor(dom: HTMLElement);
        get(index: any): HTMLElement;
        prepend(eleStr: string): any;
        prepend(dom: HTMLElement): any;
        prependTo(eleStr: string): this;
        remove(): this;
        css(property: string, value: string): void;
        attr(name: string): any;
        attr(name: string, value: string): any;
        text(str?: string): string;
    }
}

declare module 'wonder-commonlib/utils/EventUtils' {
    export class EventUtils {
        static bindEvent(context: any, func: any): (event: any) => any;
        static addEvent(dom: any, eventName: any, handler: any): void;
        static removeEvent(dom: any, eventName: any, handler: any): void;
    }
}

declare module 'wonder-commonlib/utils/ExtendUtils' {
    export class ExtendUtils {
        static extendDeep(parent: any, child?: any, filter?: (val: any, i: any) => boolean): any;
        static extend(destination: any, source: any): any;
        static copyPublicAttri(source: any): {};
    }
}

declare module 'wonder-commonlib/utils/FunctionUtils' {
    export class FunctionUtils {
        static bind(object: any, func: Function): () => any;
    }
}

declare module 'wonder-commonlib/utils/JudgeUtils' {
    export class JudgeUtils {
        static isArray(arr: any): boolean;
        static isArrayExactly(arr: any): boolean;
        static isNumber(num: any): boolean;
        static isNumberExactly(num: any): boolean;
        static isString(str: any): boolean;
        static isStringExactly(str: any): boolean;
        static isBoolean(bool: any): boolean;
        static isDom(obj: any): boolean;
        static isObject(obj: any): boolean;
        static isDirectObject(obj: any): boolean;
        static isHostMethod(object: any, property: any): boolean;
        static isNodeJs(): boolean;
        static isFunction(func: any): boolean;
    }
}

declare module 'wonder-commonlib/utils/PathUtils' {
    export class PathUtils {
        static basename(path: string, ext?: string): string;
        static changeExtname(pathStr: string, extname: string): string;
        static changeBasename(pathStr: string, basename: string, isSameExt?: boolean): string;
        static extname(path: string): string;
        static dirname(path: string): string;
    }
}

